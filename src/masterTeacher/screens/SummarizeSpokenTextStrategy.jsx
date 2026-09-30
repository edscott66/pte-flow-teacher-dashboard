import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Main Idea",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify the central message of the recording rather than trying to reproduce every detail.",
      "Check that the summary clearly communicates what the speaker was mainly discussing.",
      "Avoid allowing a minor example or supporting point to replace the main idea.",
    ],
  },
  {
    title: "Supporting Points",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Capture the most important supporting ideas while listening.",
      "Prioritise information that explains, develops or qualifies the main point.",
      "Combine related ideas efficiently instead of listing every detail from the lecture.",
    ],
  },
  {
    title: "Written Summary",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
    points: [
      "Produce a coherent summary rather than a collection of disconnected notes.",
      "Use accurate grammar, spelling and punctuation.",
      "Keep the final response within the required 50–70 word range.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Main Idea Missing",
    description:
      "The student includes several details but does not clearly communicate the central message of the recording.",
    action:
      "Teach the student to identify the topic and speaker's main point before selecting supporting information.",
    accent: "#dc2626",
    light: "#fef2f2",
    border: "#fecaca",
  },
  {
    title: "Detail Overload",
    description:
      "The response attempts to reproduce too many details and loses the overall meaning of the lecture.",
    action:
      "Reduce the notes to the main idea plus the most important supporting points.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Insufficient Support",
    description:
      "The response identifies the general topic but provides too little supporting information to show full understanding.",
    action:
      "Train students to record two or three important supporting ideas while listening.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Language Accuracy",
    description:
      "The content is reasonably accurate but grammar, spelling or punctuation problems reduce the quality of the written summary.",
    action:
      "Reserve the final one or two minutes for a focused language check.",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    title: "Word Count Control",
    description:
      "The response falls below 50 words or exceeds 70 words.",
    action:
      "Teach students to monitor length and practise compressing or expanding summaries without changing the meaning.",
    accent: "#0891b2",
    light: "#ecfeff",
    border: "#a5f3fc",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Listen for the Main Point",
    text:
      "Train students to identify the overall topic and the speaker's central message rather than trying to remember every sentence.",
  },
  {
    number: "02",
    title: "Record Supporting Ideas",
    text:
      "Use brief notes for the most important supporting points, examples, causes, effects or contrasts that develop the main idea.",
  },
  {
    number: "03",
    title: "Group Related Information",
    text:
      "Combine notes that communicate the same idea so the final response becomes a concise summary rather than a list.",
  },
  {
    number: "04",
    title: "Build the Summary",
    text:
      "Turn the notes into connected sentences that communicate the main idea and essential supporting information accurately.",
  },
  {
    number: "05",
    title: "Check Language and Length",
    text:
      "Before submitting, check grammar, spelling, punctuation and the 50–70 word requirement.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Main Idea",
    text:
      "You included useful details, but the central message of the recording is not clear enough. Start by identifying what the speaker was mainly explaining.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Supporting Detail",
    text:
      "Your summary identifies the topic, but it needs stronger supporting points. Make brief notes while listening and select the details that develop the main idea.",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Conciseness",
    text:
      "You are trying to include too much information. Keep the main idea and the most important supporting points, then combine related details.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Language Check",
    text:
      "Your content is understandable, but leave time to check grammar, spelling and punctuation before submitting the summary.",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
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
        marginBottom: "5px",
      }}
    >
      {children}
    </div>
  );
}

function FocusCard({ item }) {
  return (
    <div
      style={{
        background: item.light,
        border: `1px solid ${item.border}`,
        borderTop: `4px solid ${item.accent}`,
        borderRadius: "12px",
        padding: "15px",
      }}
    >
      <h4
        style={{
          margin: "0 0 9px",
          color: "#334155",
          fontSize: "14px",
          fontWeight: 800,
        }}
      >
        {item.title}
      </h4>

      {item.points.map((point) => (
        <div
          key={point}
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
            marginBottom: "7px",
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.5,
          }}
        >
          <span style={{ color: item.accent, fontWeight: 900 }}>•</span>
          <span>{point}</span>
        </div>
      ))}
    </div>
  );
}

function DiagnosticCard({ item }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${item.border}`,
        borderLeft: `4px solid ${item.accent}`,
        borderRadius: "11px",
        padding: "14px",
      }}
    >
      <h4
        style={{
          margin: "0 0 6px",
          color: item.accent,
          fontSize: "13px",
          fontWeight: 900,
        }}
      >
        {item.title}
      </h4>

      <p
        style={{
          margin: "0 0 8px",
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.55,
        }}
      >
        {item.description}
      </p>

      <div
        style={{
          padding: "8px 10px",
          borderRadius: "7px",
          background: item.light,
          color: "#475569",
          fontSize: "10px",
          lineHeight: 1.5,
        }}
      >
        <strong>Teaching response:</strong> {item.action}
      </div>
    </div>
  );
}

function ClassroomStep({ item }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "12px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          flexShrink: 0,
          borderRadius: "9px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#2563eb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 900,
        }}
      >
        {item.number}
      </div>

      <div>
        <h4
          style={{
            margin: "1px 0 4px",
            color: "#334155",
            fontSize: "12px",
            fontWeight: 800,
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
}

export default function SummarizeSpokenTextStrategy() {
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
      <button
        type="button"
        onClick={() => navigate("/master-teacher/tips")}
        style={{
          marginBottom: "16px",
          padding: "9px 13px",
          borderRadius: "8px",
          border: "1px solid #bfdbfe",
          background: "#eff6ff",
          color: "#1d4ed8",
          fontSize: "11px",
          fontWeight: 900,
          cursor: "pointer",
        }}
      >
        {"\u2190"} Back to Strategy Vault
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
        <SectionLabel>Listening & Writing</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 800,
          }}
        >
          Summarize Spoken Text — Examiner Strategy
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            maxWidth: "850px",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          A teacher-focused reference for helping students listen for the
          central message, capture essential supporting information, and turn
          their notes into an accurate, concise written summary.
        </p>
      </div>

      <section
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #bfdbfe",
          borderLeft: "4px solid #2563eb",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#2563eb">Task Overview</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
            gap: "10px",
            marginTop: "12px",
          }}
        >
          {[
            ["Task", "Summarize Spoken Text"],
            ["Recording", "60–90 seconds"],
            ["Response", "50–70 words"],
            ["Skills", "Listening & Writing"],
            ["Writing time", "Up to 10 minutes"],
            ["Audio", "Played once"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                padding: "12px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "9px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {label}
              </div>

              <div
                style={{
                  marginTop: "4px",
                  color: "#334155",
                  fontSize: "11px",
                  fontWeight: 800,
                  lineHeight: 1.4,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "18px" }}>
        <SectionLabel color="#059669">Teacher Assessment Guide</SectionLabel>

        <p
          style={{
            margin: "0 0 12px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          When reviewing a response, first establish whether the student has
          understood and represented the lecture accurately. Then consider how
          effectively the student has selected supporting information and
          expressed the summary in writing.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "14px",
          }}
        >
          {FOCUS_AREAS.map((item) => (
            <FocusCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "18px",
          background: "#f8fafc",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#dc2626">Diagnostic Focus</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item) => (
            <DiagnosticCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "18px",
          background: "#f5f3ff",
          border: "1px solid #ddd6fe",
          borderLeft: "4px solid #7c3aed",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#7c3aed">Classroom Strategy</SectionLabel>

        <div style={{ display: "grid", gap: "10px" }}>
          {CLASSROOM_STEPS.map((item) => (
            <ClassroomStep key={item.number} item={item} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "18px",
          background: "#ecfeff",
          border: "1px solid #a5f3fc",
          borderLeft: "4px solid #0891b2",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#0891b2">Teacher Feedback Language</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: `1px solid ${item.border}`,
                borderTop: `3px solid ${item.accent}`,
                borderRadius: "10px",
                padding: "13px",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "6px",
                  color: item.accent,
                  fontSize: "11px",
                }}
              >
                {item.title}
              </strong>

              <span
                style={{
                  color: "#475569",
                  fontSize: "10px",
                  lineHeight: 1.55,
                }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#d97706">Quick Reference</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            ["1", "Listen for the central message."],
            ["2", "Note the essential supporting points."],
            ["3", "Group related ideas together."],
            ["4", "Write a coherent 50–70 word summary."],
            ["5", "Check grammar, spelling and punctuation."],
            ["6", "Confirm the final word count."],
          ].map(([number, text]) => (
            <div
              key={number}
              style={{
                display: "flex",
                gap: "9px",
                alignItems: "center",
                padding: "10px",
                background: "#fffbeb",
                border: "1px solid #fde68a",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "7px",
                  background: "#d97706",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 900,
                  flexShrink: 0,
                }}
              >
                {number}
              </span>

              <span
                style={{
                  color: "#475569",
                  fontSize: "10px",
                  lineHeight: 1.45,
                  fontWeight: 700,
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "18px",
          background: "#f8fafc",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#475569">Official Scoring Reference</SectionLabel>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "10px",
            lineHeight: 1.6,
          }}
        >
          Pearson's current PTE Academic Listening guidance describes
          Summarize Spoken Text as a task requiring a 50–70 word written
          summary of a 60–90 second recording. The task assesses Listening and
          Writing. Pearson advises students to capture the main point and
          supporting points and to check grammar, spelling and punctuation.
          Always use the current Pearson PTE Academic test format and Score
          Guide as the authoritative source if specifications change.
        </p>
      </section>
    </div>
  );
}
