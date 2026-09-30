import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Question Focus",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify exactly what the question is asking before evaluating the options.",
      "Underline or mentally note the key words that define the required information.",
      "Keep the question in mind while reading so the evidence stays relevant.",
    ],
  },
  {
    title: "Evidence",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Locate the part of the text that supports the answer.",
      "Distinguish information that is stated from information that is only implied.",
      "Require the selected option to be supported by the passage, not just by general knowledge.",
    ],
  },
  {
    title: "Option Evaluation",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
    points: [
      "Compare every option against the evidence before selecting one.",
      "Watch for options that contain a true detail but do not answer the question.",
      "Eliminate options that contradict the passage or require unsupported assumptions.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Misread Question",
    description:
      "The student understands the passage but answers a different question from the one actually asked.",
    action:
      "Teach the student to identify the question focus before examining the answer choices.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Keyword Matching",
    description:
      "The student selects an option because it repeats words from the passage without checking the meaning.",
    action:
      "Require the student to explain how the option answers the question, not simply where the same words appear.",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    title: "Distractor Selection",
    description:
      "The selected option contains relevant information but does not provide the required answer.",
    action:
      "Ask the student to eliminate each incorrect option using evidence from the passage.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Over-Inference",
    description:
      "The student chooses an answer that could be true in general but is not supported by the text.",
    action:
      "Use the rule: the answer must be supported by the passage, not by outside assumptions.",
    accent: "#dc2626",
    light: "#fef2f2",
    border: "#fecaca",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Read the Question First",
    text:
      "Have students identify the topic, focus and required information before reading the options in detail.",
  },
  {
    number: "02",
    title: "Find the Relevant Evidence",
    text:
      "Students locate the sentence or group of sentences that addresses the question and explain why it is relevant.",
  },
  {
    number: "03",
    title: "Compare the Options",
    text:
      "Make students consider every option rather than selecting the first one that appears plausible.",
  },
  {
    number: "04",
    title: "Eliminate with Evidence",
    text:
      "For each rejected option, identify whether it is contradicted, irrelevant, incomplete or unsupported.",
  },
  {
    number: "05",
    title: "Confirm the Final Answer",
    text:
      "Before submitting, students should be able to explain in one clear sentence why the selected option answers the question.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Question Focus",
    text:
      "You found relevant information, but your answer did not address the exact focus of the question. Identify what the question is asking before comparing the options.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Evidence",
    text:
      "Your choice needs stronger support from the passage. Show me the part of the text that proves the option is the answer.",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Distractor",
    text:
      "This option contains a detail from the passage, but it does not answer the question. Check the relationship between the evidence and the question.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Inference",
    text:
      "The option may sound reasonable, but the passage does not give enough evidence to support it. Avoid adding information that is not stated or clearly supported.",
    accent: "#dc2626",
    light: "#fef2f2",
    border: "#fecaca",
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

export default function ReadingMultipleChoiceSingleStrategy() {
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
          Multiple Choice, Single Answer — Examiner Strategy
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
          A teacher-focused reference for diagnosing how students interpret
          short reading texts, evaluate answer options, and select the single
          response supported by the passage.
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
            ["Task", "Multiple Choice, Single Answer"],
            ["Prompt", "Text up to 110 words"],
            ["Skill", "Reading"],
            ["Answer", "One correct option"],
            ["Scoring", "Correct / incorrect"],
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
          When reviewing a student's answer, focus on the reasoning evidence
          behind the selection rather than whether the student recognised a
          familiar word or phrase.
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
            ["2", "Identify the information required."],
            ["3", "Locate the relevant evidence."],
            ["4", "Compare every option."],
            ["5", "Reject unsupported distractors."],
            ["6", "Choose the one option supported by the text."],
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
          Choice, Single Answer as a Reading task with one correct response.
          The current Score Guide describes the task as correct/incorrect
          scoring, with 2–3 questions in the Reading section. Always use the
          current Pearson PTE Academic test format and Score Guide as the
          authoritative source if test specifications change.
        </p>
      </section>
    </div>
  );
}
