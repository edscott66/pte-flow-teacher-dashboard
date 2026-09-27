import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { GoogleGenAI, Type } from "@google/genai";

/*
 * Teacher Dashboard Vite configuration
 *
 * IMPORTANT:
 * - The Gemini API key is read from the server-side environment only.
 * - Do NOT use VITE_GEMINI_API_KEY here because VITE_* values are exposed
 *   to browser code by Vite.
 * - The browser calls /api/evaluate-feedback and never receives the key.
 */

function liveEvaluationTranscriptionPlugin(apiKey) {
  return {
    name: "live-evaluation-transcription-api",

    configureServer(server) {
      server.middlewares.use(
        "/api/live-evaluation-transcribe",
        async (req, res, next) => {
          if (req.method !== "POST") {
            next();
            return;
          }

          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", async () => {
            let uploadedFile = null;

            try {
              const {
                audioBase64,
                mimeType = "audio/webm",
              } = JSON.parse(body || "{}");

              res.setHeader("Content-Type", "application/json");

              if (!apiKey) {
                res.statusCode = 503;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "GEMINI_API_KEY_MISSING",
                    message:
                      "No GEMINI_API_KEY was found in the Teacher Dashboard environment.",
                  })
                );
                return;
              }

              if (
                typeof audioBase64 !== "string" ||
                !audioBase64.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "AUDIO_MISSING",
                    message: "No recorded audio was supplied.",
                  })
                );
                return;
              }

              if (mimeType !== "audio/webm") {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "AUDIO_FORMAT_UNSUPPORTED",
                    message:
                      "Live Evaluation currently expects an audio/webm recording.",
                  })
                );
                return;
              }

              const audioBuffer = Buffer.from(
                audioBase64,
                "base64"
              );

              const maxAudioBytes = 20 * 1024 * 1024;

              if (
                !audioBuffer.length ||
                audioBuffer.length > maxAudioBytes
              ) {
                res.statusCode = 413;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "AUDIO_TOO_LARGE",
                    message:
                      "The recorded audio is empty or exceeds the 20 MB Live Evaluation limit.",
                  })
                );
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    "User-Agent": "PTE-Flow-Teacher-Dashboard",
                  },
                },
              });

              const audioBlob = new Blob(
                [audioBuffer],
                { type: mimeType }
              );

              uploadedFile = await ai.files.upload({
                file: audioBlob,
                config: {
                  mimeType,
                  displayName: "pte-live-evaluation-recording.webm",
                },
              });

              const interaction =
                await ai.interactions.create({
                  model: "gemini-3.5-transcribe",
                  input: [
                    {
                      type: "audio",
                      uri: uploadedFile.uri,
                      mime_type:
                        uploadedFile.mimeType ||
                        mimeType,
                    },
                  ],
                });

              const transcript =
                typeof interaction.output_text === "string"
                  ? interaction.output_text.trim()
                  : "";

              if (!transcript) {
                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "TRANSCRIPTION_EMPTY",
                    message:
                      "Gemini did not return a transcript for the recording.",
                  })
                );
                return;
              }

              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  isLiveAi: true,
                  transcript,
                })
              );
            } catch (error) {
              console.error(
                "Live Evaluation transcription API error:",
                error
              );

              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "LIVE_TRANSCRIPTION_FAILED",
                  message:
                    error instanceof Error
                      ? error.message
                      : "Gemini transcription failed.",
                })
              );
            } finally {
              if (uploadedFile?.name) {
                try {
                  const cleanupAi = new GoogleGenAI({
                    apiKey,
                    httpOptions: {
                      headers: {
                        "User-Agent": "PTE-Flow-Teacher-Dashboard",
                      },
                    },
                  });

                  await cleanupAi.files.delete({
                    name: uploadedFile.name,
                  });
                } catch (cleanupError) {
                  console.error(
                    "Live Evaluation uploaded-file cleanup failed:",
                    cleanupError
                  );
                }
              }
            }
          });

          req.on("error", (error) => {
            console.error(
              "Live Evaluation request body error:",
              error
            );

            if (!res.headersSent) {
              res.statusCode = 400;
              res.setHeader(
                "Content-Type",
                "application/json"
              );

              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "INVALID_REQUEST",
                  message:
                    "The Live Evaluation audio request could not be read.",
                })
              );
            }
          });
        }
      );
    },
  };
}
/*
 * ============================================================
 * LIVE EVALUATION AI EVALUATION
 * ============================================================
 *
 * This endpoint is deliberately separate from the Calibration
 * Bench /api/evaluate-feedback endpoint.
 *
 * It evaluates a student's Live Evaluation performance after
 * the teacher has already submitted an independent assessment.
 */

function liveEvaluationAiEvaluationPlugin(apiKey) {
  return {
    name: "live-evaluation-ai-evaluation-api",

    configureServer(server) {
      server.middlewares.use(
        "/api/live-evaluation-evaluate",
        async (req, res, next) => {
          if (req.method !== "POST") {
            next();
            return;
          }

          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", async () => {
            try {
              const {
                questionType,
                exercisePrompt,
                studentTranscript,
                teacherScores,
                teacherFeedback,
                assessmentCriteria,
              } = JSON.parse(body || "{}");

              res.setHeader(
                "Content-Type",
                "application/json"
              );

              if (!apiKey) {
                res.statusCode = 503;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "GEMINI_API_KEY_MISSING",
                    message:
                      "No GEMINI_API_KEY was found in the Teacher Dashboard environment.",
                  })
                );
                return;
              }

              if (
                typeof questionType !== "string" ||
                !questionType.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "QUESTION_TYPE_MISSING",
                    message:
                      "No Live Evaluation question type was supplied.",
                  })
                );
                return;
              }

              if (
                typeof exercisePrompt !== "string" ||
                !exercisePrompt.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "EXERCISE_PROMPT_MISSING",
                    message:
                      "No Live Evaluation exercise prompt was supplied.",
                  })
                );
                return;
              }

              if (
                typeof studentTranscript !== "string" ||
                !studentTranscript.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "STUDENT_TRANSCRIPT_MISSING",
                    message:
                      "No student transcript was supplied.",
                  })
                );
                return;
              }

              if (
                !Array.isArray(assessmentCriteria) ||
                assessmentCriteria.length === 0
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "ASSESSMENT_CRITERIA_MISSING",
                    message:
                      "No Live Evaluation assessment criteria were supplied.",
                  })
                );
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    "User-Agent":
                      "PTE-Flow-Teacher-Dashboard",
                  },
                },
              });

              const criteriaText =
                assessmentCriteria
                  .map(
                    (criterion) =>
                      `- ${criterion.name}: maximum ${criterion.max}. ${criterion.description || ""}`
                  )
                  .join("\n");

              const teacherScoresText =
                teacherScores &&
                typeof teacherScores === "object"
                  ? Object.entries(
                      teacherScores
                    )
                      .map(
                        ([name, score]) =>
                          `- ${name}: ${score}`
                      )
                      .join("\n")
                  : "No teacher scores supplied.";

              const prompt = `
You are evaluating a student's performance in a PTE Academic Live Evaluation.

This is an independent AI assessment. The teacher has already submitted a separate assessment. Do not change, overwrite, or treat the teacher's scores as ground truth.

QUESTION TYPE:
${questionType}

EXERCISE PROMPT:
${exercisePrompt}

STUDENT TRANSCRIPT:
${studentTranscript}

ASSESSMENT CRITERIA:
${criteriaText}

TEACHER SCORES:
${teacherScoresText}

TEACHER FEEDBACK:
${typeof teacherFeedback === "string" && teacherFeedback.trim()
  ? teacherFeedback
  : "No teacher feedback supplied."}

Evaluate the student's performance against the exercise prompt and the supplied assessment criteria.

Important rules:
1. Assess the student's actual transcript against the exercise prompt.
2. Do not simply copy the teacher's scores.
3. Do not assume that the teacher is correct or incorrect.
4. Keep each AI score within the maximum specified for that criterion.
5. Provide concise evidence for the AI assessment.
6. Do not invent pronunciation problems that cannot reasonably be inferred from the supplied information.
7. For Content, compare the student's transcript with the exercise prompt.
8. For Oral Fluency and Pronunciation, use the available evidence conservatively. The transcript can support observations about hesitation, repetition, phrasing, and intelligibility, but do not claim to hear acoustic details that are not available in the transcript.
9. Return only the requested JSON object.
`;

              const response =
                await ai.models.generateContent({
                  model: "gemini-3.6-flash",
                  contents: prompt,
                  config: {
                    temperature: 0,
                    responseMimeType:
                      "application/json",
                    responseSchema: {
                      type: Type.OBJECT,
                      properties: {
                        isLiveAi: {
                          type: Type.BOOLEAN,
                        },
                        questionType: {
                          type: Type.STRING,
                        },
                        scores: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              criterion: {
                                type: Type.STRING,
                              },
                              score: {
                                type: Type.NUMBER,
                              },
                              maxScore: {
                                type: Type.NUMBER,
                              },
                              evidence: {
                                type: Type.STRING,
                              },
                            },
                            required: [
                              "criterion",
                              "score",
                              "maxScore",
                              "evidence",
                            ],
                          },
                        },
                        overallFeedback: {
                          type: Type.STRING,
                        },
                        keyObservations: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.STRING,
                          },
                        },
                      },
                      required: [
                        "isLiveAi",
                        "questionType",
                        "scores",
                        "overallFeedback",
                        "keyObservations",
                      ],
                    },
                  },
                });

              const responseText =
                typeof response.text ===
                "string"
                  ? response.text.trim()
                  : "";

              if (!responseText) {
                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "AI_EVALUATION_EMPTY",
                    message:
                      "Gemini did not return a Live Evaluation assessment.",
                  })
                );
                return;
              }

              let evaluation;

              try {
                evaluation =
                  JSON.parse(responseText);
              } catch (parseError) {
                console.error(
                  "Live Evaluation AI response JSON parse failed:",
                  parseError
                );

                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error:
                      "AI_EVALUATION_INVALID_JSON",
                    message:
                      "Gemini returned an invalid Live Evaluation assessment.",
                  })
                );
                return;
              }

              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  isLiveAi: true,
                  evaluation,
                })
              );
            } catch (error) {
              console.error(
                "Live Evaluation AI evaluation API error:",
                error
              );

              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error:
                    "LIVE_AI_EVALUATION_FAILED",
                  message:
                    error instanceof Error
                      ? error.message
                      : "Live Evaluation AI assessment failed.",
                })
              );
            }
          });

          req.on("error", (error) => {
            console.error(
              "Live Evaluation AI request body error:",
              error
            );

            if (!res.headersSent) {
              res.statusCode = 400;
              res.setHeader(
                "Content-Type",
                "application/json"
              );

              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "INVALID_REQUEST",
                  message:
                    "The Live Evaluation AI request could not be read.",
                })
              );
            }
          });
        }
      );
    },
  };
}
function liveEvaluationTeacherReviewPlugin(apiKey) {
  return {
    name: "live-evaluation-teacher-review-api",

    configureServer(server) {
      server.middlewares.use(
        "/api/live-evaluation-teacher-review",
        async (req, res, next) => {
          if (req.method !== "POST") {
            next();
            return;
          }

          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", async () => {
            try {
              const {
                questionType,
                exercisePrompt,
                studentTranscript,
                teacherScores,
                teacherFeedback,
                assessmentCriteria,
                aiEvaluation,
              } = JSON.parse(body || "{}");

              res.setHeader(
                "Content-Type",
                "application/json"
              );

              if (!apiKey) {
                res.statusCode = 503;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "GEMINI_API_KEY_MISSING",
                    message:
                      "No GEMINI_API_KEY was found in the Teacher Dashboard environment.",
                  })
                );
                return;
              }

              if (
                typeof questionType !== "string" ||
                !questionType.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "QUESTION_TYPE_MISSING",
                    message:
                      "No Live Evaluation question type was supplied.",
                  })
                );
                return;
              }

              if (
                typeof exercisePrompt !== "string" ||
                !exercisePrompt.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "EXERCISE_PROMPT_MISSING",
                    message:
                      "No Live Evaluation exercise prompt was supplied.",
                  })
                );
                return;
              }

              if (
                typeof studentTranscript !== "string" ||
                !studentTranscript.trim()
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "STUDENT_TRANSCRIPT_MISSING",
                    message:
                      "No student transcript was supplied.",
                  })
                );
                return;
              }

              if (
                !Array.isArray(assessmentCriteria) ||
                assessmentCriteria.length === 0
              ) {
                res.statusCode = 400;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "ASSESSMENT_CRITERIA_MISSING",
                    message:
                      "No Live Evaluation assessment criteria were supplied.",
                  })
                );
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    "User-Agent":
                      "PTE-Flow-Teacher-Dashboard",
                  },
                },
              });

              const criteriaText =
                assessmentCriteria
                  .map(
                    (criterion) =>
                      `- ${criterion.name}: maximum ${criterion.max}. ${criterion.description || ""}`
                  )
                  .join("\n");

              const teacherScoresText =
                teacherScores &&
                typeof teacherScores === "object"
                  ? Object.entries(teacherScores)
                      .map(
                        ([name, score]) =>
                          `- ${name}: ${score}`
                      )
                      .join("\n")
                  : "No teacher scores supplied.";

              const aiEvaluationText =
                aiEvaluation &&
                typeof aiEvaluation === "object"
                  ? JSON.stringify(aiEvaluation, null, 2)
                  : "No separate AI evaluation supplied.";

              const prompt = `
You are an expert PTE Academic Master Teacher Trainer conducting a calibration review of a teacher's assessment.

The teacher has already made an independent assessment of the student's recorded response.

Your task is NOT to replace the teacher's assessment automatically.

Your task is to examine the evidence and give the teacher precise, constructive calibration feedback about:
1. where the teacher's assessment appears well supported;
2. where the teacher's assessment may be too high, too low, or insufficiently supported;
3. exactly what evidence in the student transcript supports that conclusion;
4. the specific differences between the exercise prompt and student transcript;
5. practical advice that would help the teacher make a more accurate assessment next time.

QUESTION TYPE:
${questionType}

EXERCISE PROMPT:
${exercisePrompt}

STUDENT TRANSCRIPT:
${studentTranscript}

ASSESSMENT CRITERIA:
${criteriaText}

TEACHER SCORES:
${teacherScoresText}

TEACHER WRITTEN FEEDBACK:
${typeof teacherFeedback === "string" && teacherFeedback.trim()
  ? teacherFeedback.trim()
  : "No teacher feedback supplied."}

INDEPENDENT AI STUDENT EVALUATION:
${aiEvaluationText}

IMPORTANT CALIBRATION RULES:

1. Do not simply copy the independent AI evaluation.
2. Do not automatically assume the teacher is correct.
3. Do not automatically assume the independent AI evaluation is correct.
4. Compare the teacher's assessment against the exercise prompt and student transcript first.
5. Use the AI evaluation as additional evidence, not as unquestionable ground truth.
6. For Content, identify concrete omissions, additions, substitutions, or exact matches.
7. For a Read Aloud task, perform a sentence-level or meaningful phrase-level comparison between the exercise prompt and student transcript.
8. Do not create dozens of trivial one-word comparison rows when a sentence-level comparison is clearer.
9. Highlight only meaningful discrepancies in the line-by-line review, but include exact matching lines when they are useful for demonstrating that the teacher's assessment was supported.
10. If there are no meaningful discrepancies, explicitly say that the relevant text matches.
11. For Oral Fluency, the transcript can support observations about explicit repetitions, false starts, hesitation markers, and other clearly represented textual features. Do not infer smooth pacing, speaking rate, rhythm, pausing, or natural delivery merely because the transcript is grammatically complete or contains no obvious errors.
12. For Pronunciation, transcript evidence alone is insufficient to judge phonetic accuracy, vowel quality, consonant production, word stress, sentence stress, intonation, or other acoustic pronunciation features. Successful speech recognition may support intelligibility only; it must not be treated as proof of correct pronunciation.
13. For Pronunciation, when no audio-specific pronunciation evidence is supplied to this endpoint, the criterion assessment MUST be "insufficient_evidence", regardless of the difference between the teacher score and AI score.
14. For Oral Fluency, use "potentially_under_scored" only when the transcript contains concrete evidence supporting stronger fluency than the teacher's score reflects, such as clearly represented repetitions, false starts, or hesitation markers. If those features are absent and audio has not been supplied for review, use "insufficient_evidence".
15. Do not label Oral Fluency or Pronunciation as "potentially_under_scored" merely because the transcript matches the prompt or because automatic speech recognition successfully recognized the student's words.
16. If the available evidence is insufficient to judge a criterion reliably, say so.
17. Keep the feedback professional, specific, and useful to a teacher.
18. Do not use insulting, dismissive, or absolute language about the teacher.
19. Return only the requested JSON object.

The line-by-line review should use the following status values where appropriate:
- "match"
- "omission"
- "addition"
- "substitution"
- "unclear"

For each criterion, determine whether the teacher's assessment is:
- "well_supported"
- "potentially_under_scored"
- "potentially_over_scored"
- "insufficient_evidence"

Return a valid JSON object matching the requested schema.
`;

              const response =
                await ai.models.generateContent({
                  model: "gemini-3.6-flash",
                  contents: prompt,
                  config: {
                    temperature: 0,
                    responseMimeType:
                      "application/json",
                    responseSchema: {
                      type: Type.OBJECT,
                      properties: {
                        isLiveAi: {
                          type: Type.BOOLEAN,
                        },

                        questionType: {
                          type: Type.STRING,
                        },

                        overallCalibration: {
                          type: Type.STRING,
                        },

                        criteriaReview: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              criterion: {
                                type: Type.STRING,
                              },
                              teacherScore: {
                                type: Type.NUMBER,
                              },
                              aiScore: {
                                type: Type.NUMBER,
                              },
                              assessment: {
                                type: Type.STRING,
                              },
                              evidence: {
                                type: Type.STRING,
                              },
                              teacherAdvice: {
                                type: Type.STRING,
                              },
                            },
                            required: [
                              "criterion",
                              "teacherScore",
                              "aiScore",
                              "assessment",
                              "evidence",
                              "teacherAdvice",
                            ],
                          },
                        },

                        lineByLineReview: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.OBJECT,
                            properties: {
                              reference: {
                                type: Type.STRING,
                              },
                              promptText: {
                                type: Type.STRING,
                              },
                              studentText: {
                                type: Type.STRING,
                              },
                              status: {
                                type: Type.STRING,
                              },
                              difference: {
                                type: Type.STRING,
                              },
                            },
                            required: [
                              "reference",
                              "promptText",
                              "studentText",
                              "status",
                              "difference",
                            ],
                          },
                        },

                        teacherFeedbackReview: {
                          type: Type.STRING,
                        },

                        calibrationAdvice: {
                          type: Type.ARRAY,
                          items: {
                            type: Type.STRING,
                          },
                        },
                      },
                      required: [
                        "isLiveAi",
                        "questionType",
                        "overallCalibration",
                        "criteriaReview",
                        "lineByLineReview",
                        "teacherFeedbackReview",
                        "calibrationAdvice",
                      ],
                    },
                  },
                });

              const responseText =
                typeof response.text === "string"
                  ? response.text.trim()
                  : "";

              if (!responseText) {
                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error:
                      "TEACHER_REVIEW_EMPTY",
                    message:
                      "Gemini did not return a Teacher Assessment Review.",
                  })
                );
                return;
              }

              let review;

              try {
                review =
                  JSON.parse(responseText);

              // ----------------------------------------------------------
              // Transcript-only calibration guardrails
              //
              // This endpoint receives the student transcript, not the
              // original audio. Pronunciation therefore cannot be judged
              // from transcript recognition alone.
              // ----------------------------------------------------------
              if (Array.isArray(review?.criteriaReview)) {
                review.criteriaReview =
                  review.criteriaReview.map((item) => {
                    const criterionName =
                      String(item?.criterion || "")
                        .trim()
                        .toLowerCase();

                    if (criterionName === "pronunciation") {
                      return {
                        ...item,
                        assessment: "insufficient_evidence",
                        evidence:
                          "The transcript provides evidence of word recognition and intelligibility, but pronunciation accuracy, individual sounds, word stress, sentence stress, and intonation require the original audio.",
                        teacherAdvice:
                          "Use the recording to judge pronunciation accuracy. Do not lower or raise the pronunciation score solely from transcript matching.",
                      };
                    }

                    if (criterionName === "oral fluency") {
                      const evidenceText =
                        String(item?.evidence || "");

                      const hasTranscriptFluencyEvidence =
                        /\b(repetition|repeated|repetitions|false start|false starts|hesitation|hesitations|stumbled|stammer|self-correction|self correction)\b/i.test(
                          evidenceText
                        );

                      if (
                        item?.assessment ===
                          "potentially_under_scored" &&
                        !hasTranscriptFluencyEvidence
                      ) {
                        return {
                          ...item,
                          assessment:
                            "insufficient_evidence",
                          evidence:
                            "The transcript does not contain clear textual evidence of repetitions, false starts, hesitation markers, or similar fluency features. Actual pacing, pauses, rhythm, and delivery require the original audio.",
                          teacherAdvice:
                            "Use the recording to judge pacing, pauses, rhythm, and smoothness. Do not infer a stronger fluency score solely from a clean transcript.",
                        };
                      }
                    }

                    return item;
                  });
              }

              // Keep the overall message aligned with the deterministic
              // criterion guardrails above.
              if (
                Array.isArray(review?.criteriaReview) &&
                typeof review?.overallCalibration ===
                  "string"
              ) {
                const pronunciationReview =
                  review.criteriaReview.find(
                    (item) =>
                      String(item?.criterion || "")
                        .trim()
                        .toLowerCase() ===
                      "pronunciation"
                  );

                const oralFluencyReview =
                  review.criteriaReview.find(
                    (item) =>
                      String(item?.criterion || "")
                        .trim()
                        .toLowerCase() ===
                      "oral fluency"
                  );

                const limitationNotes = [];

                if (
                  pronunciationReview?.assessment ===
                    "insufficient_evidence" ||
                  oralFluencyReview?.assessment ===
                    "insufficient_evidence"
                ) {
                  limitationNotes.push(
                    "There is insufficient evidence to fully calibrate Oral Fluency and Pronunciation from the transcript alone. Oral Fluency requires audio to assess pacing, rhythm, and natural phrasing, while Pronunciation requires audio to assess phonetic accuracy, stress, and intonation."
                  );
                }

                if (limitationNotes.length > 0) {
                  const overallText =
                    review.overallCalibration.trim();

                  const cleanedOverallText =
                    overallText.replace(
                      /Oral Fluency and Pronunciation cannot be evaluated accurately without audio recordings, so there is insufficient evidence for those criteria\.\s*/i,
                      ""
                    );

                  review.overallCalibration =
                    `${cleanedOverallText} ${limitationNotes.join(" ")}`.trim();
                }
              }
              } catch (parseError) {
                console.error(
                  "Teacher Assessment Review JSON parse failed:",
                  parseError
                );

                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error:
                      "TEACHER_REVIEW_INVALID_JSON",
                    message:
                      "Gemini returned invalid Teacher Assessment Review JSON.",
                  })
                );
                return;
              }

              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  isLiveAi: true,
                  review,
                })
              );
            } catch (error) {
              console.error(
                "Teacher Assessment Review API error:",
                error
              );

              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error:
                    "TEACHER_REVIEW_FAILED",
                  message:
                    error instanceof Error
                      ? error.message
                      : "Teacher Assessment Review failed.",
                })
              );
            }
          });

          req.on("error", (error) => {
            console.error(
              "Teacher Assessment Review request body error:",
              error
            );

            if (!res.headersSent) {
              res.statusCode = 400;
              res.setHeader(
                "Content-Type",
                "application/json"
              );

              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "INVALID_REQUEST",
                  message:
                    "The Teacher Assessment Review request could not be read.",
                })
              );
            }
          });
        }
      );
    },
  };
}
function evaluateFeedbackPlugin(apiKey) {
  return {
    name: "evaluate-feedback-api",

    configureServer(server) {
      server.middlewares.use(
        "/api/evaluate-feedback",
        async (req, res, next) => {
          if (req.method !== "POST") {
            next();
            return;
          }

          let body = "";

          req.on("data", (chunk) => {
            body += chunk.toString();
          });

          req.on("end", async () => {
            try {
              const {
                questionTitle,
                section,
                timeLimit,
                scoringCriteria,
                promptText,
                studentResponseText,
                responseMode,
                teacherInput,
                teacherInputCharCount,
                teacherInputWordCount,
                checkedErrorIds,
                errorChecklist,
                expertFeedbackObj,
                expertAdvice,
                perfectCalibrationResponse,
              } = JSON.parse(body || "{}");

              res.setHeader("Content-Type", "application/json");

              if (!apiKey) {
                res.statusCode = 503;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "GEMINI_API_KEY_MISSING",
                    message:
                      "No GEMINI_API_KEY was found in the Teacher Dashboard environment.",
                  })
                );
                return;
              }

              const ai = new GoogleGenAI({
                apiKey,
                httpOptions: {
                  headers: {
                    "User-Agent": "PTE-Flow-Teacher-Dashboard",
                  },
                },
              });

              const prompt = `You are an expert PTE Academic Senior Principal Examiner and Master Teacher Trainer.

Evaluate the following PTE teacher's marking input for a student's practice response.

=== ITEM DETAILS ===
Task Type: [${section || "PTE"}] ${questionTitle || "PTE Exercise"}
Time Limit: ${timeLimit || "N/A"}
Official Scoring Criteria: ${JSON.stringify(scoringCriteria || [])}
Prompt Text: "${promptText || "N/A"}"

=== STUDENT PRACTICE RESPONSE ===
Response Quality Level: ${
                responseMode ? responseMode.toUpperCase() : "STANDARD"
              } Candidate Performance
Student Response Transcript: "${studentResponseText || "N/A"}"

=== PEARSON PTE OFFICIAL BENCHMARK ===
Expected Official Score: ${expertFeedbackObj?.overall || "N/A"}
Official Rubric Analysis: "${
                expertFeedbackObj?.breakdownText || "N/A"
              }"
Official Examiner Guidance: "${expertAdvice || "N/A"}"
Canonical Full-Credit Calibration Response: "${
                perfectCalibrationResponse || "N/A"
              }"

=== TEACHER'S SUBMITTED ASSESSMENT ===
Teacher Feedback Notes: "${teacherInput || "N/A"}"
Teacher Feedback Character Count: ${
                teacherInputCharCount ??
                (teacherInput || "").length
              }
Teacher Feedback Word Count: ${
                teacherInputWordCount ??
                ((teacherInput || "").trim()
                  ? (teacherInput || "").trim().split(/\s+/).length
                  : 0)
              }
Errors Selected in Error Checklist: ${JSON.stringify(
                checkedErrorIds || []
              )}
Selected Diagnostic Categories: ${JSON.stringify(
                (errorChecklist || []).map(
                  (item) =>
                    item?.keyword || item?.label || item?.id
                )
              )}

=== CALIBRATION SCORING RULES â€” IMPORTANT ===
This is a teacher-calibration exercise, NOT a checkbox recognition quiz. The teacher must earn the score through the independently written assessment.

IMPORTANT: The Diagnostic Focus cards and Error Checklist are no longer part of the teacher's scoring task. Any checklist data supplied with this request is contextual only. Do NOT award, remove, or cap points because of a checklist selection or because the teacher did not select one. Never tell the teacher to select a checklist item.

Score the teacher across three dimensions using the written assessment only:
A. DIAGNOSIS (50 points): Did the teacher correctly identify the main score-impacting problem, prioritise it appropriately, and avoid unsupported diagnoses?
B. EVIDENCE & JUSTIFICATION (30 points): Did the teacher state specific evidence from what the student said or did, and clearly connect that evidence to the diagnosis and its effect on the score?
C. PROFESSIONAL ASSESSMENT (20 points): Did the teacher use appropriate PTE terminology, distinguish the main problem from similar issues, explain the performance impact accurately, and give useful practical advice where appropriate?

=== SCORING ANCHORS â€” USE THESE CONSISTENTLY ===
Diagnosis / 50:
- 45-50: Correct primary diagnosis, accurate prioritisation, and no unsupported major diagnosis.
- 35-44: Correct primary diagnosis but with a minor omission, imprecision, or unnecessary secondary focus.
- 25-34: Partly correct diagnosis but misses or mis-prioritises an important score-impacting issue.
- 10-24: Major diagnostic misunderstanding.
- 0-9: Diagnosis is absent or fundamentally incorrect.

Evidence & Justification / 30:
- 27-30: Specific observable evidence is clearly stated and directly linked to the diagnosis and score impact.
- 21-26: Good evidence is given but the link to impact or explanation is somewhat incomplete.
- 12-20: Some evidence is present but it is vague, incomplete, or weakly connected to the diagnosis.
- 1-11: Mostly generic statements with little usable evidence.
- 0: No meaningful evidence.

Professional Assessment / 20:
- 18-20: Precise PTE terminology, clear distinction between relevant scoring dimensions, accurate impact, and useful teacher/student guidance.
- 14-17: Appropriate professional assessment with minor omissions or imprecision.
- 8-13: Understandable assessment but terminology, impact, or guidance is incomplete.
- 1-7: Weak or confusing professional assessment.
- 0: No meaningful professional assessment.

The final score MUST be the sum of these three dimension scores. Do not choose an arbitrary overall percentage independently of the three scores.

HARD SCORING GUARDRAILS:
- If Teacher Feedback Notes are empty or effectively absent, maximum matchPercentage = 40, regardless of any other data.
- If the written assessment is fewer than 10 words OR fewer than 60 characters, maximum matchPercentage = 55.
- If the written assessment merely lists diagnostic labels without describing observable evidence, maximum matchPercentage = 60.
- A high score of 85+ requires strong written evidence and professional reasoning.
- Correctly naming an error without explaining what was heard and why it matters is not enough for 85+.
- Do not reward information that appears only in Diagnostic Focus cards, checklist data, or other structured fields.
- Treat semantically equivalent wording as valid when the meaning is clear. The teacher does not need to copy a prompt label word-for-word.
- For an exercise with no expected major error, a high score requires the teacher to explain why the response is acceptable rather than simply saying there is no error.
- The Canonical Full-Credit Calibration Response is the authored benchmark for this exercise. If the teacher's assessment fully reproduces the same diagnosis, evidence, reasoning, distinctions, and professional guidance using the same or semantically equivalent wording, treat it as full-credit calibration performance.

=== EVALUATION INSTRUCTIONS ===
1. Evaluate the teacher's written assessment against the actual student response and the expert benchmark.
2. Determine diagnosisScore (0-50), evidenceScore (0-30), and professionalScore (0-20) using the scoring anchors above.
3. Set matchPercentage to the exact sum of diagnosisScore + evidenceScore + professionalScore before applying any hard cap.
4. Apply the hard caps after calculating the sum.
5. Determine evaluator tier from the FINAL percentage:
   - 85-100: "PTE Master Evaluator"
   - 70-84: "Proficient Assessor"
   - 50-69: "Developing Assessor"
   - 0-49: "Needs Calibration"
6. matchedKeywords must contain only short, teacher-friendly descriptions of PTE issues the written assessment actually identified.
7. missingKeywords must contain only short, teacher-friendly descriptions of important points the written assessment missed or failed to justify. Do not mention checklists.
8. In feedbackSummary, clearly state what the teacher diagnosed correctly and, if relevant, what evidence or reasoning was missing.
9. Write coachingAdviceForTeacher with practical, simple guidance. Do not refer to software controls or checklists.
10. Write studentFacingScript as an actionable 2-3 sentence feedback script a teacher could deliver directly to the student.
11. Return only the requested JSON object. Do not wrap it in markdown.

=== TEACHER-FACING LANGUAGE RULES ===
- Keep feedback simple, direct, and easy for a teacher to understand.
- Never mention software controls, checklists, internal IDs, tags, structured fields, or system tracking.
- matchedKeywords should use short, clear descriptions of what the teacher identified, such as "numerical substitution", "content error", "clear pronunciation", or "fluency problem".
- missingKeywords should describe an important point the teacher should notice or explain, in plain English.
- Keep review points short enough to work naturally as small on-screen labels.
- Do not repeat the same diagnosis unnecessarily.
- feedbackSummary should normally be one concise paragraph.
- coachingAdviceForTeacher should normally be one concise paragraph.
- studentFacingScript should be practical, encouraging, and easy for a teacher to say directly to the student.

Return a valid JSON object matching the requested schema.`;

              const response = await ai.models.generateContent({
                model: "gemini-3.6-flash",
                contents: prompt,
                config: {
                  temperature: 0,
                  responseMimeType: "application/json",
                  responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                      diagnosisScore: {
                        type: Type.NUMBER,
                        description:
                          "Diagnosis score from 0 to 50 using the calibration anchors.",
                      },
                      evidenceScore: {
                        type: Type.NUMBER,
                        description:
                          "Evidence and justification score from 0 to 30 using the calibration anchors.",
                      },
                      professionalScore: {
                        type: Type.NUMBER,
                        description:
                          "Professional assessment score from 0 to 20 using the calibration anchors.",
                      },
                      matchPercentage: {
                        type: Type.NUMBER,
                        description:
                          "Alignment score from 0 to 100.",
                      },
                      tier: {
                        type: Type.STRING,
                        description:
                          "Evaluator tier label.",
                      },
                      badgeColor: {
                        type: Type.STRING,
                        description:
                          "Semantic badge name: emerald, indigo, amber, or rose.",
                      },
                      feedbackSummary: {
                        type: Type.STRING,
                        description:
                          "Concise appraisal of the teacher's assessment.",
                      },
                      matchedKeywords: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.STRING,
                        },
                        description:
                          "Short, teacher-friendly descriptions of the PTE issues the teacher correctly identified. Do not use internal IDs, tags, or software terminology.",
                      },
                      missingKeywords: {
                        type: Type.ARRAY,
                        items: {
                          type: Type.STRING,
                        },
                        description:
                          "Short, teacher-friendly descriptions of what the teacher should notice or do. Do not use internal IDs, tags, or software terminology.",
                      },
                      coachingAdviceForTeacher: {
                        type: Type.STRING,
                        description:
                          "Specific advice for improving PTE marking calibration using simple teacher-friendly language.",
                      },
                      studentFacingScript: {
                        type: Type.STRING,
                        description:
                          "Actionable student-facing feedback script.",
                      },
                    },
                    required: [
                      "diagnosisScore",
                      "evidenceScore",
                      "professionalScore",
                      "matchPercentage",
                      "tier",
                      "badgeColor",
                      "feedbackSummary",
                      "matchedKeywords",
                      "missingKeywords",
                      "coachingAdviceForTeacher",
                      "studentFacingScript",
                    ],
                  },
                },
              });

              let aiResult = {};

              try {
                aiResult = JSON.parse(
                  response.text || "{}"
                );
              } catch (parseError) {
                console.error(
                  "Gemini returned non-JSON output:",
                  parseError
                );

                res.statusCode = 502;
                res.end(
                  JSON.stringify({
                    isLiveAi: false,
                    error: "AI_INVALID_JSON",
                    message:
                      "Gemini returned an unexpected response format. The offline evaluation remains available.",
                  })
                );

                return;
              }

              // Keep teacher-facing review messages simple and free of internal software terminology.
              const simplifyTeacherFacingKeyword = (
                value
              ) => {
                const text = String(value || "").trim();
                const normalized = text.toLowerCase();

                if (
                  /error\s+checklist/i.test(text) ||
                  /checklist\s+(ids?|tags?|selection)/i.test(
                    text
                  ) ||
                  /error\s+ids?/i.test(text) ||
                  /structured\s+(error\s+)?tags?/i.test(
                    text
                  )
                ) {
                  return "Explain the evidence you heard.";
                }

                if (
                  normalized.includes(
                    "content scoring criteria"
                  )
                ) {
                  return "Check the Content score.";
                }

                if (
                  normalized.includes(
                    "word sequence precision"
                  )
                ) {
                  return "Check the word order.";
                }

                if (
                  normalized.includes(
                    "pte rubric criteria"
                  )
                ) {
                  return "Check the PTE scoring criteria.";
                }

                return text;
              };

              const simplifyTeacherFacingAdvice = (
                value
              ) => {
                return String(value || "")
                  .replace(
                    /error\s+checklist/gi,
                    "the student's response"
                  )
                  .replace(
                    /checklist\s+(ids?|tags?|selection)/gi,
                    "the student's response"
                  )
                  .replace(
                    /error\s+ids?/gi,
                    "the main error"
                  )
                  .replace(
                    /structured\s+(error\s+)?tags?/gi,
                    "diagnostic labels"
                  )
                  .trim();
              };

              if (
                Array.isArray(
                  aiResult?.matchedKeywords
                )
              ) {
                aiResult.matchedKeywords =
                  aiResult.matchedKeywords
                    .map(
                      simplifyTeacherFacingKeyword
                    )
                    .filter(Boolean);
              }

              if (
                Array.isArray(
                  aiResult?.missingKeywords
                )
              ) {
                aiResult.missingKeywords =
                  aiResult.missingKeywords
                    .map(
                      simplifyTeacherFacingKeyword
                    )
                    .filter(Boolean);
              }

              if (
                typeof aiResult?.feedbackSummary ===
                "string"
              ) {
                aiResult.feedbackSummary =
                  simplifyTeacherFacingAdvice(
                    aiResult.feedbackSummary
                  );
              }

              if (
                typeof aiResult?.coachingAdviceForTeacher ===
                "string"
              ) {
                aiResult.coachingAdviceForTeacher =
                  simplifyTeacherFacingAdvice(
                    aiResult.coachingAdviceForTeacher
                  );
              }

              // Server-side calibration guardrails. The score is first derived
              // deterministically from the three AI-assigned rubric dimensions,
              // then the simple submission caps are applied. Checklist state is
              // deliberately excluded from scoring.
              const safeTeacherText =
                typeof teacherInput === "string"
                  ? teacherInput.trim()
                  : "";

              const safeCharCount =
                safeTeacherText.length;

              const safeWordCount = safeTeacherText
                ? safeTeacherText
                    .split(/\s+/)
                    .filter(Boolean).length
                : 0;

              const clampScore = (
                value,
                max
              ) => {
                const number = Number(value);

                if (!Number.isFinite(number)) {
                  return 0;
                }

                return Math.max(
                  0,
                  Math.min(
                    max,
                    Math.round(number)
                  )
                );
              };

              const diagnosisScore = clampScore(
                aiResult?.diagnosisScore,
                50
              );

              const evidenceScore = clampScore(
                aiResult?.evidenceScore,
                30
              );

              const professionalScore =
                clampScore(
                  aiResult?.professionalScore,
                  20
                );

              let guardedPercentage =
                diagnosisScore +
                evidenceScore +
                professionalScore;

              if (!safeTeacherText) {
                guardedPercentage =
                  Math.min(
                    guardedPercentage,
                    40
                  );
              } else if (
                safeCharCount < 60 ||
                safeWordCount < 10
              ) {
                guardedPercentage =
                  Math.min(
                    guardedPercentage,
                    55
                  );
              }

              const normalizeForCanonicalMatch = (value) =>
                String(value || "")
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, " ")
                  .replace(/\s+/g, " ")
                  .trim();

              const normalizedTeacherText =
                normalizeForCanonicalMatch(
                  safeTeacherText
                );

              const normalizedPerfectCalibrationResponse =
                normalizeForCanonicalMatch(
                  perfectCalibrationResponse
                );

              const isExactCanonicalCalibrationResponse =
                Boolean(
                  normalizedPerfectCalibrationResponse
                ) &&
                normalizedTeacherText ===
                  normalizedPerfectCalibrationResponse;

              const hasEvidenceLanguage =
                /\b(because|since|when|said|says|heard|replaced|added|omitted|changed|pronounced|pause|paused|stumbled|repeated|mispronounced|missing|incorrect|instead of|rather than)\b/i.test(
                  safeTeacherText
                );

              const isLabelOnly =
                safeTeacherText.length > 0 &&
                !hasEvidenceLanguage &&
                /^(content|pronunciation|oral fluency|fluency|grammar|vocabulary|content accuracy|word order|pronunciation error|fluency error)([\s,;.-]|$)/i.test(
                  safeTeacherText
                );

              if (isLabelOnly) {
                guardedPercentage =
                  Math.min(
                    guardedPercentage,
                    60
                  );
              }

              // The authored canonical calibration response is a deterministic
              // full-credit benchmark. This preserves a reliable 100% result
              // when the teacher copies the official calibration answer exactly
              // (ignoring case, punctuation, and whitespace differences).
              if (isExactCanonicalCalibrationResponse) {
                guardedPercentage = 100;
              }

              // Keep the returned component scores consistent with the final
              // percentage after a hard cap. The displayed overall score is the
              // authoritative calibration result.
              aiResult.diagnosisScore =
                diagnosisScore;

              aiResult.evidenceScore =
                evidenceScore;

              aiResult.professionalScore =
                professionalScore;

              const guardedTier =
                guardedPercentage >= 85
                  ? "PTE Master Evaluator"
                  : guardedPercentage >= 70
                    ? "Proficient Assessor"
                    : guardedPercentage >= 50
                      ? "Developing Assessor"
                      : "Needs Calibration";

              const guardedBadgeColor =
                guardedPercentage >= 85
                  ? "emerald"
                  : guardedPercentage >= 70
                    ? "indigo"
                    : guardedPercentage >= 50
                      ? "amber"
                      : "rose";

              if (
                safeTeacherText &&
                (safeCharCount < 60 ||
                  safeWordCount < 10)
              ) {
                aiResult.feedbackSummary = `${
                  aiResult.feedbackSummary || ""
                } Written assessment is too brief to demonstrate sufficient calibration reasoning; the final score was capped by the calibration rules.`.trim();
              } else if (!safeTeacherText) {
                aiResult.feedbackSummary = `${
                  aiResult.feedbackSummary || ""
                } No written assessment was provided. Checklist selections alone are not enough.`.trim();
              }

              aiResult.matchPercentage =
                guardedPercentage;

              aiResult.tier = guardedTier;

              aiResult.badgeColor =
                guardedBadgeColor;

              res.statusCode = 200;

              res.end(
                JSON.stringify({
                  isLiveAi: true,
                  ...aiResult,
                })
              );
            } catch (error) {
              console.error(
                "AI Evaluation API error:",
                error
              );

              res.setHeader(
                "Content-Type",
                "application/json"
              );

              res.statusCode = 500;

              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "AI_EVALUATION_FAILED",
                  message:
                    error instanceof Error
                      ? error.message
                      : "Gemini evaluation failed.",
                })
              );
            }
          });

          req.on("error", (error) => {
            console.error(
              "Request body error:",
              error
            );

            if (!res.headersSent) {
              res.statusCode = 400;

              res.setHeader(
                "Content-Type",
                "application/json"
              );

              res.end(
                JSON.stringify({
                  isLiveAi: false,
                  error: "INVALID_REQUEST",
                  message:
                    "The evaluation request could not be read.",
                })
              );
            }
          });
        }
      );
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load all .env values for the Vite/Node configuration process.
  // The empty prefix is intentional: GEMINI_API_KEY does not use VITE_
  // and therefore remains server-side.
  const env = loadEnv(
    mode,
    process.cwd(),
    ""
  );

  const apiKey =
    env.GEMINI_API_KEY ||
    process.env.GEMINI_API_KEY ||
    "";

  return {
    plugins: [
      react(),
    liveEvaluationTranscriptionPlugin(apiKey),
    liveEvaluationAiEvaluationPlugin(apiKey),
    liveEvaluationTeacherReviewPlugin(apiKey),
    evaluateFeedbackPlugin(apiKey),
    ],

    resolve: {
      alias: {
        "@": "/src",
      },

      extensions: [
        ".tsx",
        ".ts",
        ".jsx",
        ".js",
        ".mjs",
        ".mts",
        ".json",
      ],
    },

    server: {
      port: 5173,
      host: true,
      hmr: true,
    },

    build: {
      chunkSizeWarningLimit: 2000,
    },
  };
});










