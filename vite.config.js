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

=== CALIBRATION SCORING RULES — IMPORTANT ===
This is a teacher-calibration exercise, NOT a checkbox recognition quiz. The teacher must earn the score through the independently written assessment.

IMPORTANT: The Diagnostic Focus cards and Error Checklist are no longer part of the teacher's scoring task. Any checklist data supplied with this request is contextual only. Do NOT award, remove, or cap points because of a checklist selection or because the teacher did not select one. Never tell the teacher to select a checklist item.

Score the teacher across three dimensions using the written assessment only:
A. DIAGNOSIS (50 points): Did the teacher correctly identify the main score-impacting problem, prioritise it appropriately, and avoid unsupported diagnoses?
B. EVIDENCE & JUSTIFICATION (30 points): Did the teacher state specific evidence from what the student said or did, and clearly connect that evidence to the diagnosis and its effect on the score?
C. PROFESSIONAL ASSESSMENT (20 points): Did the teacher use appropriate PTE terminology, distinguish the main problem from similar issues, explain the performance impact accurately, and give useful practical advice where appropriate?

=== SCORING ANCHORS — USE THESE CONSISTENTLY ===
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