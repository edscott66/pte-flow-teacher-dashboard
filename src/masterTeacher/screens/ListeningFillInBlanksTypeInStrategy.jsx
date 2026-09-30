import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Pre-Listening Preparation",
    description:
      "Teach students to use the visible transcript before the recording begins so they know what information is missing and what grammar or meaning may be expected.",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Meaning and Context",
    description:
      "Students should listen for the meaning of the sentence and surrounding context rather than trying to recognise an isolated sound immediately.",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Exact Word Capture",
    description:
      "The missing word must be captured accurately. Listening skill and spelling accuracy therefore need to be practised together.",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Missed the Word",
    description:
      "The student understands the general topic but fails to identify the word when it occurs in the recording.",
  },
  {
    title: "Context Prediction Failure",
    description:
      "The student waits for the audio to supply the answer instead of using the surrounding sentence to anticipate the likely word or word form.",
  },
  {
    title: "Spelling Error",
    description:
      "The student identifies the spoken word but records an incorrectly spelled form.",
  },
  {
    title: "Word Boundary Problem",
    description:
      "The student hears the sound stream but cannot separate the target word clearly from neighbouring words.",
  },
  {
    title: "Grammar or Form Error",
    description:
      "The student recognises the base meaning but misses the required grammatical form, such as a plural, tense, or derived form.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Read Before Listening",
    description:
      "Have the student skim the complete transcript first. Identify the topic, sentence structure, and the grammatical role of each gap.",
  },
  {
    number: "02",
    title: "Predict the Gap",
    description:
      "Before replay or checking, ask what kind of word could logically fit the sentence. Prediction gives the student a listening target.",
  },
  {
    number: "03",
    title: "Listen for Meaning",
    description:
      "Train the student to follow the meaning of the sentence rather than waiting for a familiar keyword in isolation.",
  },
  {
    number: "04",
    title: "Capture the Word",
    description:
      "Students should record the word they hear as accurately as possible while keeping pace with the recording.",
  },
  {
    number: "05",
    title: "Check Spelling",
    description:
      "After the recording, review spelling, word form, and whether the completed sentence makes sense.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "When the student misses the word",
    feedback:
      "You understood the sentence overall, but you did not capture the key word when it passed in the recording. Use the words around the gap to predict what you are listening for.",
  },
  {
    title: "When the student knows the word but misspells it",
    feedback:
      "You identified the spoken word, but the written form was inaccurate. Add a short spelling check after each practice item so listening accuracy and written accuracy develop together.",
  },
  {
    title: "When context is being ignored",
    feedback:
      "Do not listen to the gap as an isolated sound. Read the whole sentence first and predict the type of word that should fit before the audio begins.",
  },
  {
    title: "When the student loses word boundaries",
    feedback:
      "The difficulty appears to be hearing where the target word begins and ends. Practise short phrases and thought groups before returning to full-speed recordings.",
  },
];

const QUICK_REFERENCE = [
  ["Recording", "30–60 seconds"],
  ["Skill", "Listening"],
  ["Task", "Type the missing words in a transcript"],
  ["Audio", "Played once"],
  ["Scoring", "Each correctly spelled word can receive credit"],
  ["Credit", "Partial credit is available"],
  ["Core habit", "Skim, predict, listen, capture, check"],
];

function SectionLabel({ children, color = "#2563eb" }) {
  return (
    <div
      style={{
        color,
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "7px",
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ title, description, accent, background, border }) {
  return (
    <div
      style={{
        background,
        border: `1px solid ${border}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: "12px",
        padding: "16px",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      <h3
        style={{
          margin: "0 0 7px",
          color: "#334155",
          fontSize: "14px",
          lineHeight: 1.3,
          fontWeight: 800,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "11px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function ListeningFillInBlanksTypeInStrategy() {
  const navigate = useNavigate();

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
      {/* Header */}

        <button
          type="button"
          onClick={() => navigate("/master-teacher/tips")}
          style={{
            padding: "9px 15px",
            marginBottom: "18px",
            borderRadius: "9px",
            border: "1px solid #bfdbfe",
            background: "#eff6ff",
            color: "#2563eb",
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ← Back to Strategy Vault
        </button>

      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
          border: "1px solid #bfdbfe",
          borderTop: "4px solid #2563eb",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
        }}
      >
        <SectionLabel>Listening</SectionLabel>

        <h1
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "27px",
            lineHeight: 1.2,
            fontWeight: 900,
          }}
        >
          Fill in the Blanks (Type In) — Examiner Strategy
        </h1>

        <p
          style={{
            margin: "10px 0 0",
            maxWidth: "900px",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          A teacher-focused guide to helping students use context, listen for
          missing information, capture exact words, and maintain spelling
          accuracy under one-listen conditions.
        </p>
      </div>

      {/* Task Overview */}
      <section
        style={{
          marginTop: "20px",
          background: "#ffffff",
          border: "1px solid #bfdbfe",
          borderLeft: "4px solid #2563eb",
          borderRadius: "14px",
          padding: "18px",
          boxSizing: "border-box",
        }}
      >
        <SectionLabel>Task Overview</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            ["Task", "Fill in the Blanks (Type In)"],
            ["Recording", "30–60 seconds"],
            ["Skill", "Listening"],
            ["Response", "Type the missing words"],
            ["Audio", "Played once"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "12px",
                minHeight: "68px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "9px",
                  fontWeight: 900,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: "#334155",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  fontWeight: 800,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "10px",
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "9px",
            padding: "10px 12px",
            color: "#92400e",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          <strong>Scoring reminder:</strong> correctly spelled words receive
          credit, and the task allows partial credit. Students should focus on
          capturing the actual missing word rather than writing a word that
          merely sounds plausible.
        </div>
      </section>

      {/* Teacher Assessment Guide */}
      <section style={{ marginTop: "24px" }}>
        <SectionLabel color="#047857">Teacher Assessment Guide</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
          }}
        >
          {FOCUS_AREAS.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      {/* Diagnostic Focus */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #a7f3d0",
          borderLeft: "4px solid #059669",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#047857">Diagnostic Focus</SectionLabel>

        <p
          style={{
            margin: "0 0 13px",
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          When reviewing a student's performance, identify the actual stage of
          the process that failed rather than treating every incorrect blank
          as the same listening problem.
        </p>

        <div style={{ display: "grid", gap: "9px" }}>
          {DIAGNOSTIC_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "190px 1fr",
                gap: "12px",
                alignItems: "start",
                padding: "10px 12px",
                background: "#ecfdf5",
                border: "1px solid #d1fae5",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  color: "#047857",
                  fontSize: "11px",
                  fontWeight: 900,
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.55,
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Classroom Strategy */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #ddd6fe",
          borderLeft: "4px solid #7c3aed",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#6d28d9">Classroom Strategy</SectionLabel>

        <div style={{ display: "grid", gap: "10px" }}>
          {CLASSROOM_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "42px 190px 1fr",
                gap: "12px",
                alignItems: "start",
                padding: "11px 12px",
                background: "#f5f3ff",
                border: "1px solid #ede9fe",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9px",
                  background: "#7c3aed",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 900,
                }}
              >
                {step.number}
              </div>

              <div
                style={{
                  color: "#5b21b6",
                  fontSize: "11px",
                  fontWeight: 900,
                  paddingTop: "8px",
                }}
              >
                {step.title}
              </div>

              <div
                style={{
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.55,
                  paddingTop: "6px",
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teacher Feedback Language */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #a5f3fc",
          borderLeft: "4px solid #0891b2",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#0e7490">Teacher Feedback Language</SectionLabel>

        <div style={{ display: "grid", gap: "10px" }}>
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ecfeff",
                border: "1px solid #cffafe",
                borderRadius: "10px",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  color: "#0e7490",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                {item.feedback}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #fbcfe8",
          borderLeft: "4px solid #db2777",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#be185d">Quick Reference</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "8px",
          }}
        >
          {QUICK_REFERENCE.map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                padding: "9px 10px",
                background: "#fdf2f8",
                border: "1px solid #fce7f3",
                borderRadius: "8px",
                fontSize: "10px",
              }}
            >
              <span style={{ color: "#9d174d", fontWeight: 900 }}>
                {label}
              </span>
              <span
                style={{
                  color: "#475569",
                  textAlign: "right",
                  lineHeight: 1.4,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Official Scoring Reference */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #fde68a",
          borderLeft: "4px solid #d97706",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#b45309">Official Scoring Reference</SectionLabel>

        <div
          style={{
            background: "#fffbeb",
            border: "1px solid #fef3c7",
            borderRadius: "10px",
            padding: "13px 14px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.65,
            }}
          >
            The task assesses listening by requiring students to identify
            missing words in a written transcript and type what they hear.
            Pearson's current task guidance states that each correctly spelled
            word receives one point and that partial credit is available.
            Students hear the recording once, so preparation and focused
            listening are important parts of the strategy.
          </p>
        </div>
      </section>

      {/* Teacher Checklist */}
      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#475569">Teacher Checklist</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "8px",
          }}
        >
          {[
            "Did the student skim the transcript before listening?",
            "Did the student use context to predict the missing word?",
            "Did the student identify the spoken word?",
            "Was the answer written with accurate spelling?",
            "Does the completed sentence make grammatical and contextual sense?",
            "Is the underlying problem listening, word recognition, spelling, or word form?",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                padding: "9px 10px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "#64748b",
                  fontWeight: 900,
                  fontSize: "12px",
                  lineHeight: 1.2,
                }}
              >
                •
              </span>
              <span
                style={{
                  color: "#475569",
                  fontSize: "10px",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Back to Vault */}
      <div
        style={{
          marginTop: "24px",
          paddingTop: "18px",
          borderTop: "1px solid #e2e8f0",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
      </div>
    </div>
  );
}
