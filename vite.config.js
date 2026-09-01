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
              checkedErrorIds,
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
Error Checklist IDs Marked: ${JSON.stringify(checkedErrorIds || [])}

=== EVALUATION INSTRUCTIONS ===
1. Analyze how accurately the teacher identified score-impacting errors according to PTE marking principles, including Oral Fluency, Pronunciation, Content, Enabling Skills, Form, grammar, vocabulary, cohesion, spelling, word sequence, and negative marking where relevant.
2. Assign an alignment match percentage from 0 to 100.
3. Determine evaluator tier:
   - 85-100: "PTE Master Evaluator"
   - 70-84: "Proficient Assessor"
   - 50-69: "Developing Assessor"
   - 0-49: "Needs Calibration"
4. Identify PTE rubric terms and errors correctly identified by the teacher in matchedKeywords.
5. Identify important PTE rubric criteria or error terms the teacher overlooked in missingKeywords.
6. Write feedbackSummary as a concise but useful appraisal of marking accuracy.
7. Write coachingAdviceForTeacher with practical guidance to improve calibration.
8. Write studentFacingScript as an actionable 2-3 sentence feedback script a teacher can deliver directly to the student.
9. Return only the requested JSON object. Do not wrap it in markdown.

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