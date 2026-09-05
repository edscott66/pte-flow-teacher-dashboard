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
      server.middlewares.use("/api/evaluate-feedback", async (req, res, next) => {
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
Teacher Feedback Character Count: ${teacherInputCharCount ?? (teacherInput || "").length}
Teacher Feedback Word Count: ${teacherInputWordCount ?? ((teacherInput || "").trim() ? (teacherInput || "").trim().split(/\s+/).length : 0)}
Legacy Checklist State (not used for calibration scoring): ${JSON.stringify(checkedErrorIds || [])}
Diagnostic Focus Prompts (clues only): ${JSON.stringify((errorChecklist || []).map((item) => item?.keyword || item?.label || item?.id))}

=== CALIBRATION SCORING RULES — IMPORTANT ===
This is a teacher-calibration exercise, NOT a checklist recognition quiz. The Error Tracker items are diagnostic prompts supplied to help the teacher focus their listening. They are clues only. They are NOT teacher selections, NOT written evidence, and must never by themselves justify a high score. Evaluate the teacher's independently written assessment.

The teacher must make the diagnosis in their written assessment. Judge whether the written assessment correctly identifies the relevant PTE issue, supports it with evidence from the student response, explains its performance impact, and gives appropriate advice where useful.

Score the teacher across three dimensions:
A. DIAGNOSIS (50 points): Does the teacher's written assessment identify the correct diagnostic error(s), avoid unsupported errors, and show appropriate diagnostic restraint?
B. EVIDENCE & JUSTIFICATION (30 points): Does the teacher explain what was actually heard/observed in the student response and connect that evidence to the diagnosis? Generic repetition of a diagnostic prompt without evidence earns little or no credit in this dimension.
C. PROFESSIONAL ASSESSMENT (20 points): Does the teacher use appropriate PTE terminology, explain the performance impact accurately, distinguish the problem from similar issues, and give useful advice where appropriate?

HARD SCORING GUARDRAILS:
- If Teacher Feedback Notes are empty or effectively absent, maximum matchPercentage = 40.
- If the written assessment is fewer than 10 words or fewer than 60 characters, maximum matchPercentage = 55.
- If the written assessment merely lists or repeats diagnostic prompt labels without describing observable evidence, maximum matchPercentage = 60.
- Diagnostic prompts are clues only. Never award credit because a prompt exists or because the teacher appears to have followed it.
- High scores (85+) require strong written evidence, accurate diagnosis, and professional reasoning.
- For an exercise with no expected error, a high score requires the teacher to explicitly justify the absence of a major error. No error prompt exists because the exercise tests diagnostic restraint.
- Do not reward the teacher for information that appears only in structured diagnostic prompts.
- Use semantic equivalents when judging written terminology. The teacher should use relevant PTE terminology where appropriate, but exact wording from a prompt is not mandatory if the written diagnosis is clearly accurate and evidence-based.

=== EVALUATION INSTRUCTIONS ===
1. Analyze how accurately the teacher identified score-impacting errors according to PTE marking principles, including Oral Fluency, Pronunciation, Content, Enabling Skills, Form, grammar, vocabulary, cohesion, spelling, word sequence, and negative marking where relevant.
2. Score diagnosis, evidence/justification, and professional assessment separately in your reasoning, then assign an overall alignment match percentage from 0 to 100.
3. Apply all hard scoring guardrails above even if the teacher's checklist selections are correct.
4. Determine evaluator tier from the FINAL percentage:
   - 85-100: "PTE Master Evaluator"
   - 70-84: "Proficient Assessor"
   - 50-69: "Developing Assessor"
   - 0-49: "Needs Calibration"
5. Identify PTE rubric terms and error concepts correctly supported by the teacher's written assessment in matchedKeywords. Do NOT count checklist-only selections as written matches.
6. Identify important PTE rubric criteria or error concepts the teacher overlooked or failed to justify in missingKeywords.
7. In feedbackSummary, explicitly distinguish between what the teacher diagnosed correctly and whether they actually justified it with evidence.
8. Write coachingAdviceForTeacher with practical guidance to improve calibration. If written justification is weak or missing, say so clearly.
9. Write studentFacingScript as an actionable 2-3 sentence feedback script a teacher could deliver directly to the student.
10. Return only the requested JSON object. Do not wrap it in markdown.

Return a valid JSON object matching the requested schema.`;

            const response = await ai.models.generateContent({
              model: "gemini-3.6-flash",
              contents: prompt,
              config: {
                responseMimeType: "application/json",
                responseSchema: {
                  type: Type.OBJECT,
                  properties: {
                    matchPercentage: {
                      type: Type.NUMBER,
                      description: "Alignment score from 0 to 100.",
                    },
                    tier: {
                      type: Type.STRING,
                      description: "Evaluator tier label.",
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
                      items: { type: Type.STRING },
                      description:
                        "PTE rubric terms and error concepts correctly identified.",
                    },
                    missingKeywords: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description:
                        "Important rubric terms or error concepts overlooked.",
                    },
                    coachingAdviceForTeacher: {
                      type: Type.STRING,
                      description:
                        "Specific advice for improving PTE marking calibration.",
                    },
                    studentFacingScript: {
                      type: Type.STRING,
                      description:
                        "Actionable student-facing feedback script.",
                    },
                  },
                  required: [
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
              aiResult = JSON.parse(response.text || "{}");
            } catch (parseError) {
              console.error("Gemini returned non-JSON output:", parseError);
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

            // Server-side calibration guardrails. These are deliberately
            // deterministic so Gemini cannot award a high score to a
            // checkbox-only or otherwise insufficient submission.
            const safeTeacherText = typeof teacherInput === "string" ? teacherInput.trim() : "";
            const safeCharCount = safeTeacherText.length;
            const safeWordCount = safeTeacherText ? safeTeacherText.split(/\s+/).filter(Boolean).length : 0;
            const diagnosticKeywords = Array.isArray(errorChecklist)
              ? errorChecklist.map((item) => String(item?.keyword || item?.label || item?.id || "").trim().toLowerCase()).filter(Boolean)
              : [];
            const normalizeForKeywordMatch = (value) =>
              String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
            const normalizedTeacherText = normalizeForKeywordMatch(safeTeacherText);
            const normalizedDiagnosticKeywords = diagnosticKeywords.map(normalizeForKeywordMatch).filter(Boolean);
            const keywordOnlyLines = normalizedTeacherText
              .split(/\n+/)
              .map((line) => line.replace(/^-\s*(identified|error|issue)?\s*:?\s*/i, "").trim())
              .filter(Boolean);
            const appearsDiagnosticPromptOnly = keywordOnlyLines.length > 0 && normalizedDiagnosticKeywords.length > 0 && keywordOnlyLines.every((line) =>
              normalizedDiagnosticKeywords.some((keyword) => normalizeForKeywordMatch(line) === keyword)
            );

            let guardedPercentage = Number(aiResult?.matchPercentage);
            if (!Number.isFinite(guardedPercentage)) guardedPercentage = 0;
            guardedPercentage = Math.max(0, Math.min(100, Math.round(guardedPercentage)));

            if (!safeTeacherText) {
              guardedPercentage = Math.min(guardedPercentage, 40);
            } else if (safeCharCount < 60 || safeWordCount < 10) {
              guardedPercentage = Math.min(guardedPercentage, 55);
            } else if (appearsDiagnosticPromptOnly) {
              guardedPercentage = Math.min(guardedPercentage, 60);
            }

            const guardedTier = guardedPercentage >= 85
              ? "PTE Master Evaluator"
              : guardedPercentage >= 70
                ? "Proficient Assessor"
                : guardedPercentage >= 50
                  ? "Developing Assessor"
                  : "Needs Calibration";
            const guardedBadgeColor = guardedPercentage >= 85
              ? "emerald"
              : guardedPercentage >= 70
                ? "indigo"
                : guardedPercentage >= 50
                  ? "amber"
                  : "rose";

            if (safeTeacherText && (safeCharCount < 60 || safeWordCount < 10)) {
              aiResult.feedbackSummary = `${aiResult.feedbackSummary || ""} Written assessment is too brief to demonstrate sufficient calibration reasoning; the final score was capped by the calibration rules.`.trim();
            } else if (safeTeacherText && appearsDiagnosticPromptOnly) {
              aiResult.feedbackSummary = `${aiResult.feedbackSummary || ""} The written assessment repeats diagnostic prompt labels without sufficient independent evidence; the final score was capped.`.trim();
            } else if (!safeTeacherText) {
              aiResult.feedbackSummary = `${aiResult.feedbackSummary || ""} No independent written assessment was provided; diagnostic prompts alone cannot demonstrate calibration.`.trim();
            }

            aiResult.matchPercentage = guardedPercentage;
            aiResult.tier = guardedTier;
            aiResult.badgeColor = guardedBadgeColor;

            res.statusCode = 200;
            res.end(
              JSON.stringify({
                isLiveAi: true,
                ...aiResult,
              })
            );
          } catch (error) {
            console.error("AI Evaluation API error:", error);

            res.setHeader("Content-Type", "application/json");
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
          console.error("Request body error:", error);
          if (!res.headersSent) {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                isLiveAi: false,
                error: "INVALID_REQUEST",
                message: "The evaluation request could not be read.",
              })
            );
          }
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  // Load all .env values for the Vite/Node configuration process.
  // The empty prefix is intentional: GEMINI_API_KEY does not use VITE_
  // and therefore remains server-side.
  const env = loadEnv(mode, process.cwd(), "");

  const apiKey = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY || "";

  return {
    plugins: [react(), evaluateFeedbackPlugin(apiKey)],

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