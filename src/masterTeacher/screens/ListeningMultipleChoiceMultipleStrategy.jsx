import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Question Focus",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify what the question is asking before the recording begins.",
      "Listen for the main idea, supporting details, tone, or other information named in the question.",
      "Use the question to decide what information deserves attention in your notes.",
    ],
  },
  {
    title: "Note-Taking",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Record the main points and the supporting details that explain them.",
      "Note useful specifics such as people, places, times, examples, causes, effects, or changes.",
      "Do not try to write everything; capture enough meaning to evaluate the options after listening.",
    ],
  },
  {
    title: "Option Evaluation",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    points: [
      "Judge options by meaning rather than by isolated words that appear in the recording.",
      "Treat familiar wording as evidence to investigate, not automatic proof that an option is correct.",
      "Check each selected option against the complete message you heard.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Keyword Matching",
    accent: "#2563eb",
    description:
      "The student selects an option because it repeats words from the recording without checking whether the meaning is correct.",
    teacherAction:
      "Train the student to connect the option to the speaker's actual idea, not just shared vocabulary.",
  },
  {
    title: "Detail Loss",
    accent: "#059669",
    description:
      "The student understands the general topic but misses supporting details needed to distinguish between several plausible options.",
    teacherAction:
      "Practise recording short, information-rich notes while listening rather than writing full sentences.",
  },
  {
    title: "Over-Selection",
    accent: "#d97706",
    description:
      "The student selects an option because it sounds possible, even though the recording does not support it.",
    teacherAction:
      "Require the student to identify the evidence that supports every selected option.",
  },
  {
    title: "Incomplete Selection",
    accent: "#7c3aed",
    description:
      "The student identifies some correct information but leaves another correct option unselected.",
    teacherAction:
      "Practise checking all options systematically against the notes before submitting.",
  },
  {
    title: "Question Misread",
    accent: "#0891b2",
    description:
      "The student listens generally but does not focus on the specific information or relationship asked about in the question.",
    teacherAction:
      "Make the question focus the first listening target before the recording starts.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Identify the Question Focus",
    description:
      "Before listening, have the student state what the question requires: main idea, detail, implication, tone, purpose, or another specific focus.",
  },
  {
    number: "02",
    title: "Listen and Capture Meaning",
    description:
      "Use short notes to record the central message and the supporting information that could help distinguish between options.",
  },
  {
    number: "03",
    title: "Evaluate Every Option",
    description:
      "After the recording, work through each option and ask whether the recording actually supports its meaning.",
  },
  {
    number: "04",
    title: "Demand Evidence",
    description:
      "For every selected answer, require the student to point to the note or idea that supports it.",
  },
  {
    number: "05",
    title: "Review the Distractors",
    description:
      "For incorrect options, identify why they were tempting and what evidence from the recording rules them out.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Meaning Over Keywords",
    text:
      "You noticed the same vocabulary in the recording and the option, but the option changes the meaning. Next time, check the complete idea before selecting it.",
  },
  {
    title: "Use Your Notes",
    text:
      "Your notes captured the topic, but not enough supporting detail to distinguish the options. Record short facts and relationships while you listen.",
  },
  {
    title: "Avoid Guessing Plausible Options",
    text:
      "This option sounds possible, but the recording does not support it. Select an answer only when you can connect it to evidence from the audio.",
  },
  {
    title: "Check All Options",
    text:
      "You identified one correct response but stopped too early. Compare every option with your notes because more than one response may be correct.",
  },
];

function SectionLabel({ children }) {
  return (
    <div
      style={{
        marginBottom: "8px",
        color: "#047857",
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
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
        background: item.background,
        border: `1px solid ${item.border}`,
        borderTop: `4px solid ${item.accent}`,
        borderRadius: "12px",
        padding: "16px",
        minHeight: "180px",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: "#334155",
          fontSize: "15px",
          fontWeight: 900,
        }}
      >
        {item.title}
      </h3>

      {item.points.map((point) => (
        <div
          key={point}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "8px",
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          <span
            style={{
              color: item.accent,
              fontWeight: 900,
              lineHeight: 1.4,
            }}
          >
            {"\u2022"}
          </span>
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
        border: "1px solid #e2e8f0",
        borderLeft: `4px solid ${item.accent}`,
        borderRadius: "10px",
        padding: "13px 14px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          color: item.accent,
          fontSize: "11px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: "5px",
        }}
      >
        {item.title}
      </div>

      <p
        style={{
          margin: "0 0 7px",
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.55,
        }}
      >
        {item.description}
      </p>

      <div
        style={{
          padding: "7px 9px",
          borderRadius: "7px",
          background: "#f8fafc",
          color: "#334155",
          fontSize: "10px",
          lineHeight: 1.5,
        }}
      >
        <strong>Teacher response:</strong> {item.teacherAction}
      </div>
    </div>
  );
}

function ClassroomStep({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        marginBottom: "12px",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          flexShrink: 0,
          borderRadius: "9px",
          background: "#ede9fe",
          border: "1px solid #ddd6fe",
          color: "#6d28d9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 900,
        }}
      >
        {item.number}
      </div>

      <div
        style={{
          paddingTop: "1px",
        }}
      >
        <div
          style={{
            color: "#334155",
            fontSize: "12px",
            fontWeight: 900,
            marginBottom: "3px",
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {item.description}
        </div>
      </div>
    </div>
  );
}

export default function ListeningMultipleChoiceMultipleStrategy() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1180px",
        margin: "0 auto",
        padding: "12px 18px 28px",
        boxSizing: "border-box",
        color: "#334155",
      }}
    >
      <button
        type="button"
        onClick={() => navigate("/master-teacher/tips")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "12px",
          padding: "7px 11px",
          borderRadius: "8px",
          border: "1px solid #bfdbfe",
          background: "#eff6ff",
          color: "#1d4ed8",
          fontSize: "11px",
          fontWeight: 900,
          letterSpacing: "0.03em",
          cursor: "pointer",
        }}
      >
        {"\u2190"} Back to Strategy Vault
      </button>

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
        <div
          style={{
            color: "#2563eb",
            fontSize: "10px",
            fontWeight: 900,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Listening
        </div>

        <h1
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "25px",
            lineHeight: 1.2,
            fontWeight: 900,
          }}
        >
          Multiple Choice, Multiple Answers — Examiner Strategy
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
          A teacher-focused guide to helping students listen for meaning,
          capture useful evidence, evaluate multiple options, and manage the
          partial-credit risk of incorrect selections.
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
        <SectionLabel>Task Overview</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            ["Task", "Multiple Choice, Multiple Answers"],
            ["Prompt Length", "80–120 seconds"],
            ["Skill", "Listening"],
            ["Answer", "More than one response may be correct"],
            ["Audio", "Played once"],
            ["Questions", "2–3 in the current format"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                padding: "12px",
                borderRadius: "9px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "9px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "5px",
                }}
              >
                {label}
              </div>

              <div
                style={{
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
            borderRadius: "8px",
            background: "#fffbeb",
            border: "1px solid #fde68a",
            color: "#92400e",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          <strong>Scoring reminder:</strong> this task uses partial credit.
          Correct options contribute points, while incorrect selected options
          can reduce the score. Students should not select an option simply
          because it sounds plausible.
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <SectionLabel>Teacher Assessment Guide</SectionLabel>

        <p
          style={{
            margin: "0 0 12px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.65,
          }}
        >
          When reviewing a student's approach, focus on whether they can
          identify the question focus, capture the relevant meaning from the
          recording, and justify each selected option with evidence.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {FOCUS_AREAS.map((item) => (
            <FocusCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "20px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel>Diagnostic Focus</SectionLabel>

        <p
          style={{
            margin: "0 0 12px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          Use the error pattern to identify what the student should practise
          next. The aim is to diagnose the listening behaviour behind the
          incorrect selection rather than simply record that the answer was
          wrong.
        </p>

        {DIAGNOSTIC_ITEMS.map((item) => (
          <DiagnosticCard key={item.title} item={item} />
        ))}
      </section>

      <section style={{ marginTop: "20px" }}>
        <SectionLabel>Classroom Strategy</SectionLabel>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #ddd6fe",
            borderLeft: "4px solid #7c3aed",
            borderRadius: "14px",
            padding: "18px",
          }}
        >
          {CLASSROOM_STEPS.map((item) => (
            <ClassroomStep key={item.number} item={item} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <SectionLabel>Teacher Feedback Language</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ecfeff",
                border: "1px solid #a5f3fc",
                borderTop: "3px solid #0891b2",
                borderRadius: "11px",
                padding: "14px",
              }}
            >
              <div
                style={{
                  color: "#0e7490",
                  fontSize: "10px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "6px",
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
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "20px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel>Quick Reference</SectionLabel>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            [
              "Before listening",
              "Read the question and use the available preparation time to identify the listening focus.",
            ],
            [
              "During listening",
              "Capture the main idea and supporting details in short notes.",
            ],
            [
              "After listening",
              "Evaluate every option by meaning and compare it with your notes.",
            ],
            [
              "Before submitting",
              "Select only options supported by the recording; remember that incorrect selections can reduce the score.",
            ],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "11px",
                borderRadius: "9px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  color: "#334155",
                  fontSize: "11px",
                  fontWeight: 900,
                  marginBottom: "4px",
                }}
              >
                {title}
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  lineHeight: 1.55,
                }}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "20px",
          padding: "14px 16px",
          borderRadius: "10px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#475569",
          fontSize: "10px",
          lineHeight: 1.6,
        }}
      >
        <strong style={{ color: "#1d4ed8" }}>
          Official scoring reference:
        </strong>{" "}
        Pearson states that Multiple Choice, Multiple Answers assesses the
        ability to analyze, interpret, and evaluate a brief academic
        recording. Maximum credit is available when all selected responses are
        correct; incorrect selected options result in partial credit.
        The task affects Listening only.
      </section>
    </div>
  );
}
