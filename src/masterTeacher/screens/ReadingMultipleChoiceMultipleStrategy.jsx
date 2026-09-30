import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Question Focus",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify exactly what the question is asking before judging the options.",
      "Separate the main question from supporting details and examples.",
      "Keep the wording of the question in mind while checking each option.",
    ],
  },
  {
    title: "Evidence Matching",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Check each selected option against evidence in the passage.",
      "Distinguish a genuinely supported answer from a statement that is merely related.",
      "Require students to explain why each selected answer is supported.",
    ],
  },
  {
    title: "Negative Marking Awareness",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
    points: [
      "The current scoring model gives +1 for each correct selected option and −1 for each incorrect selected option.",
      "The score cannot fall below zero for the item.",
      "Teach students not to select every option simply because several seem plausible.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Over-Selection",
    description:
      "The student selects several options because they recognise relevant information without checking whether each option answers the question.",
    action:
      "Require evidence for every selected option before submission.",
    accent: "#dc2626",
    light: "#fef2f2",
    border: "#fecaca",
  },
  {
    title: "Missed Correct Option",
    description:
      "The student identifies some correct information but fails to select another option that is also supported by the passage.",
    action:
      "Use a systematic option-by-option evidence check before deciding.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Distractor Confusion",
    description:
      "The student selects an option that contains information from the passage but does not satisfy the question.",
    action:
      "Teach students to distinguish relevant information from information that directly answers the question.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Negative Marking Trap",
    description:
      "The student treats the task like a normal multi-answer question and selects uncertain options without considering the scoring consequence.",
    action:
      "Practise deciding whether the evidence is strong enough to justify selecting each option.",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Read the Question",
    text:
      "Identify the exact information the question requires before evaluating the answer choices.",
  },
  {
    number: "02",
    title: "Locate the Evidence",
    text:
      "Find the relevant part of the passage and establish what it actually supports.",
  },
  {
    number: "03",
    title: "Test Every Option",
    text:
      "Classify each option as supported, unsupported, contradictory or irrelevant to the question.",
  },
  {
    number: "04",
    title: "Select Only Supported Answers",
    text:
      "Students should select an option only when the passage provides sufficient evidence for it.",
  },
  {
    number: "05",
    title: "Review the Risk",
    text:
      "Before submitting, reconsider uncertain selections because an incorrect selected option can reduce the item score.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Evidence",
    text:
      "You selected an option that is related to the passage, but show me the evidence that makes it an answer to the question.",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Missed Answer",
    text:
      "You found one supported answer, but another option was also supported. Check every option systematically before submitting.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Over-Selection",
    text:
      "Do not select an option simply because it contains words from the text. Each selected option needs evidence that it answers the question.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Scoring Awareness",
    text:
      "Because incorrect selections can reduce the item score, your decision should be based on evidence rather than uncertainty.",
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

export default function ReadingMultipleChoiceMultipleStrategy() {
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
        <SectionLabel>Reading</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "24px",
            lineHeight: 1.2,
            fontWeight: 800,
          }}
        >
          Multiple Choice, Multiple Answers — Examiner Strategy
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
          A teacher-focused reference for helping students identify all
          supported answers while avoiding unsupported selections and the
          negative-marking trap.
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
            ["Task", "Multiple Choice, Multiple Answers"],
            ["Prompt", "Text up to 350 words"],
            ["Skill", "Reading"],
            ["Answer", "More than one may be correct"],
            ["Scoring", "+1 correct / −1 incorrect"],
            ["Current format", "2–3 questions"],
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

        <div
          style={{
            marginTop: "12px",
            padding: "10px 12px",
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "8px",
            color: "#92400e",
            fontSize: "10px",
            lineHeight: 1.55,
          }}
        >
          <strong>Teacher reminder:</strong> the current scoring model awards
          one point for a correct selected option and subtracts one point for
          an incorrect selected option, with a minimum item score of zero.
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
          The key teaching issue is not simply finding information. Students
          need to determine which options are actually supported by the
          question and passage, then avoid selecting options that are only
          partially relevant or unsupported.
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
            ["1", "Read the question carefully."],
            ["2", "Identify the required information."],
            ["3", "Find evidence in the passage."],
            ["4", "Test every option separately."],
            ["5", "Select only supported options."],
            ["6", "Review uncertain selections before submitting."],
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
          Pearson's current PTE Academic Reading guidance describes Multiple
          Choice, Multiple Answers as a Reading task where more than one option
          may be correct. The current Score Guide describes partial-credit
          scoring with +1 for each correct selected option and −1 for each
          incorrect selected option, with a minimum item score of zero. Always
          use the current Pearson PTE Academic test format and Score Guide as
          the authoritative source if specifications change.
        </p>
      </section>
    </div>
  );
}
