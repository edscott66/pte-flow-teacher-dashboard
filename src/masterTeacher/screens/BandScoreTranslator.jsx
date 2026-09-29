import React, { useMemo, useState } from "react";

export const BAND_MAPPING = [
  {
    pteMin: 86,
    pteMax: 90,
    ieltsBand: "9.0",
    cefr: "C2 (Expert)",
    levelTitle: "Expert User",
    description:
      "Has fully operational command of the language: appropriate, accurate and fluent with complete understanding.",
    teachingGuideline:
      "Focus on maintaining error-free execution under tight exam pressure. Polish nuanced cohesive devices and academic vocabulary.",
  },
  {
    pteMin: 83,
    pteMax: 85,
    ieltsBand: "8.5",
    cefr: "C2 (Expert)",
    levelTitle: "Very Good User",
    description:
      "Has fully operational command with only occasional unsystematic inaccuracies and inappropriacies.",
    teachingGuideline:
      "Eliminate minor hesitations in Repeat Sentence and maintain strict 200-300 essay word count discipline.",
  },
  {
    pteMin: 79,
    pteMax: 82,
    ieltsBand: "8.0",
    cefr: "C1 (Advanced)",
    levelTitle: "Very Good User (79+ Target)",
    description:
      "Handles complex detailed argumentation well. Key milestone for Australian/UK skilled migration & medical registration.",
    teachingGuideline:
      "Ensure 100% accuracy on Write From Dictation and avoid negative marking traps in Reading MCQs.",
  },
  {
    pteMin: 73,
    pteMax: 78,
    ieltsBand: "7.5",
    cefr: "C1 (Advanced)",
    levelTitle: "Good User",
    description:
      "Has operational command of the language, though with occasional inaccuracies in complex situations.",
    teachingGuideline:
      "Drill Summarize Written Text single-sentence form and practice Read Aloud thought-group chunking.",
  },
  {
    pteMin: 65,
    pteMax: 72,
    ieltsBand: "7.0",
    cefr: "B2 (Upper Intermediate - 65+ Target)",
    levelTitle: "Good User (65+ Target)",
    description:
      "Has operational command of language. Key target for university postgraduate admissions & visa points.",
    teachingGuideline:
      "Focus on Enabling Skills: Oral Fluency, Pronunciation, and Collocations in Fill in the Blanks.",
  },
  {
    pteMin: 58,
    pteMax: 64,
    ieltsBand: "6.5",
    cefr: "B2 (Upper Intermediate)",
    levelTitle: "Competent User",
    description:
      "Has generally effective command despite some inaccuracies, inappropriate usage and misunderstandings.",
    teachingGuideline:
      "Build template fluency for Describe Image and Re-tell Lecture to eliminate hesitations.",
  },
  {
    pteMin: 50,
    pteMax: 57,
    ieltsBand: "6.0",
    cefr: "B2 (Competent - 50+ Target)",
    levelTitle: "Competent User (50+ Target)",
    description:
      "Key benchmark for undergraduate university admissions and technical visas.",
    teachingGuideline:
      "Standardize essay templates and practice basic sentence stress in Read Aloud.",
  },
  {
    pteMin: 42,
    pteMax: 49,
    ieltsBand: "5.5",
    cefr: "B1 (Intermediate)",
    levelTitle: "Modest User",
    description:
      "Has partial command of the language, coping with overall meaning in most situations.",
    teachingGuideline:
      "Build foundational grammar, subject-verb agreement, and high-frequency academic vocabulary.",
  },
  {
    pteMin: 30,
    pteMax: 41,
    ieltsBand: "5.0",
    cefr: "B1 (Intermediate)",
    levelTitle: "Modest / Limited User",
    description: "Basic competence in familiar situations.",
    teachingGuideline:
      "Focus on foundational phonics, pronunciation clarity, and basic sentence construction.",
  },
];

export function translatePteScore(score) {
  const numeric = Math.max(
    10,
    Math.min(90, parseInt(score, 10) || 50)
  );

  const result = BAND_MAPPING.find(
    (mapping) =>
      numeric >= mapping.pteMin && numeric <= mapping.pteMax
  );

  return result || BAND_MAPPING[BAND_MAPPING.length - 1];
}

export default function BandScoreTranslator() {
  const [scoreInput, setScoreInput] = useState("65");

  const numericScore = Math.max(
    10,
    Math.min(90, parseInt(scoreInput, 10) || 50)
  );

  const result = useMemo(
    () => translatePteScore(numericScore),
    [numericScore]
  );

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
          border: "1px solid #bfdbfe",
          borderTop: "4px solid #2563eb",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
        }}
      >
        <div style={{ marginBottom: "22px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "5px 9px",
              borderRadius: "999px",
              background: "#dbeafe",
              color: "#1d4ed8",
              fontSize: "11px",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            PTE ACADEMIC
          </div>

          <h2
            style={{
              margin: 0,
              color: "#1e3a8a",
              fontSize: "24px",
              lineHeight: 1.2,
              fontWeight: 800,
            }}
          >
            Band &amp; Score Translator
          </h2>

          <p
            style={{
              margin: "8px 0 0",
              color: "#64748b",
              fontSize: "13px",
              lineHeight: 1.6,
            }}
          >
            Translate a PTE Academic score into the corresponding IELTS Band
            and CEFR reference level for teaching and target-setting
            conversations.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(220px, 280px) 1fr",
            gap: "18px",
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              border: "1px solid #93c5fd",
              borderRadius: "14px",
              background: "#eff6ff",
              padding: "18px",
            }}
          >
            <label
              htmlFor="pte-score-input"
              style={{
                display: "block",
                fontSize: "12px",
                fontWeight: 800,
                color: "#1e3a8a",
                marginBottom: "8px",
              }}
            >
              PTE Academic Score
            </label>

            <input
              id="pte-score-input"
              type="number"
              min="10"
              max="90"
              value={scoreInput}
              onChange={(event) => setScoreInput(event.target.value)}
              style={{
                width: "100%",
                boxSizing: "border-box",
                border: "2px solid #60a5fa",
                borderRadius: "10px",
                background: "#ffffff",
                color: "#1e293b",
                padding: "12px 14px",
                fontSize: "22px",
                fontWeight: 800,
                outline: "none",
              }}
            />

            <div
              style={{
                marginTop: "8px",
                fontSize: "11px",
                color: "#64748b",
              }}
            >
              Enter a score from 10 to 90.
            </div>

            <div
              style={{
                marginTop: "16px",
                padding: "10px 12px",
                borderRadius: "9px",
                background: "#dbeafe",
                border: "1px solid #93c5fd",
                color: "#1d4ed8",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              Current translated score:{" "}
              <strong>{numericScore}</strong>
            </div>
          </div>

          <div
            style={{
              border: "1px solid #86efac",
              borderRadius: "14px",
              background:
                "linear-gradient(135deg, #ecfdf5 0%, #f0fdf4 100%)",
              padding: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 9px",
                  borderRadius: "999px",
                  background: "#dcfce7",
                  color: "#166534",
                  fontSize: "11px",
                  fontWeight: 800,
                  border: "1px solid #bbf7d0",
                }}
              >
                PTE {numericScore}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 9px",
                  borderRadius: "999px",
                  background: "#dbeafe",
                  color: "#1d4ed8",
                  fontSize: "11px",
                  fontWeight: 800,
                  border: "1px solid #bfdbfe",
                }}
              >
                IELTS {result.ieltsBand}
              </span>

              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "5px 9px",
                  borderRadius: "999px",
                  background: "#fef3c7",
                  color: "#92400e",
                  fontSize: "11px",
                  fontWeight: 800,
                  border: "1px solid #fde68a",
                }}
              >
                {result.cefr}
              </span>
            </div>

            <h3
              style={{
                margin: "4px 0 8px",
                color: "#166534",
                fontSize: "20px",
                lineHeight: 1.3,
                fontWeight: 800,
              }}
            >
              {result.levelTitle}
            </h3>

            <p
              style={{
                margin: 0,
                color: "#334155",
                fontSize: "13px",
                lineHeight: 1.65,
              }}
            >
              {result.description}
            </p>

            <div
              style={{
                marginTop: "14px",
                padding: "12px 14px",
                borderRadius: "10px",
                background: "#ffffff",
                border: "1px solid #86efac",
                boxShadow: "0 2px 6px rgba(22, 101, 52, 0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#166534",
                  marginBottom: "5px",
                }}
              >
                Teaching Guideline
              </div>

              <div
                style={{
                  color: "#475569",
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                {result.teachingGuideline}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderTop: "4px solid #6366f1",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 6px 18px rgba(15, 23, 42, 0.04)",
        }}
      >
        <div style={{ marginBottom: "14px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 8px",
              borderRadius: "999px",
              background: "#e0e7ff",
              color: "#4338ca",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            Reference Data
          </div>

          <h3
            style={{
              margin: 0,
              color: "#334155",
              fontSize: "16px",
              fontWeight: 800,
            }}
          >
            PTE to IELTS &amp; CEFR Reference Matrix
          </h3>

          <p
            style={{
              margin: "5px 0 0",
              color: "#64748b",
              fontSize: "11px",
            }}
          >
            Select a score above to see the corresponding teaching reference.
          </p>
        </div>

        <div
          style={{
            overflowX: "auto",
            border: "1px solid #cbd5e1",
            borderRadius: "10px",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: "760px",
              borderCollapse: "collapse",
              fontSize: "11px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "linear-gradient(90deg, #eff6ff 0%, #eef2ff 100%)",
                }}
              >
                {[
                  "PTE Range",
                  "IELTS",
                  "CEFR",
                  "Level",
                  "Description",
                  "Teaching Guideline",
                ].map((heading) => (
                  <th
                    key={heading}
                    style={{
                      padding: "10px",
                      textAlign: "left",
                      color: "#1e3a8a",
                      fontWeight: 800,
                      borderBottom: "2px solid #bfdbfe",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {BAND_MAPPING.map((mapping) => {
                const isActive =
                  numericScore >= mapping.pteMin &&
                  numericScore <= mapping.pteMax;

                return (
                  <tr
                    key={`${mapping.pteMin}-${mapping.pteMax}`}
                    style={{
                      background: isActive
                        ? "#ecfdf5"
                        : "#ffffff",
                    }}
                  >
                    <td
                      style={{
                        padding: "10px",
                        fontWeight: 800,
                        color: isActive ? "#166534" : "#334155",
                        borderBottom: "1px solid #f1f5f9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mapping.pteMin}&ndash;{mapping.pteMax}
                    </td>

                    <td
                      style={{
                        padding: "10px",
                        color: isActive ? "#1d4ed8" : "#334155",
                        fontWeight: isActive ? 800 : 400,
                        borderBottom: "1px solid #f1f5f9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mapping.ieltsBand}
                    </td>

                    <td
                      style={{
                        padding: "10px",
                        color: isActive ? "#92400e" : "#334155",
                        fontWeight: isActive ? 800 : 400,
                        borderBottom: "1px solid #f1f5f9",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {mapping.cefr}
                    </td>

                    <td
                      style={{
                        padding: "10px",
                        color: isActive ? "#166534" : "#334155",
                        fontWeight: 700,
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      {mapping.levelTitle}
                    </td>

                    <td
                      style={{
                        padding: "10px",
                        color: "#475569",
                        lineHeight: 1.5,
                        borderBottom: "1px solid #f1f5f9",
                        minWidth: "220px",
                      }}
                    >
                      {mapping.description}
                    </td>

                    <td
                      style={{
                        padding: "10px",
                        color: "#475569",
                        lineHeight: 1.5,
                        borderBottom: "1px solid #f1f5f9",
                        minWidth: "260px",
                      }}
                    >
                      {mapping.teachingGuideline}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}