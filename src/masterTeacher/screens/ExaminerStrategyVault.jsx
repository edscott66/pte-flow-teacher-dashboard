import React from "react";
import { useNavigate } from "react-router-dom";

const STRATEGY_SECTIONS = [
  {
    id: "task-strategies",
    title: "Task Strategies",
    icon: "\u{1F3AF}",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    border: "#bfdbfe",
    description:
      "Understand what each PTE task requires and the practical strategies teachers can use to prepare students.",
    items: [
      "Speaking & Writing task strategies",
      "Reading task strategies",
      "Listening task strategies",
      "Writing task strategies",
    ],
    actions: [
      {
        label: "Open Read Aloud Strategy",
        target: "/master-teacher/tips/read-aloud",
      },
      {
        label: "Open Repeat Sentence Strategy",
        target: "/master-teacher/tips/repeat-sentence",
      },
      {
        label: "Open Describe Image Strategy",
        target: "/master-teacher/tips/describe-image",
      },
      {
        label: "Open Retell Lecture Strategy",
        target: "/master-teacher/tips/retell-lecture",
      },
      {
        label: "Open Answer Short Question Strategy",
        target: "/master-teacher/tips/answer-short-question",
      },
      {
        label: "Open Summarize Group Discussion Strategy",
        target: "/master-teacher/tips/summarize-group-discussion",
      },
      {
        label: "Open Respond to a Situation Strategy",
        target: "/master-teacher/tips/respond-to-a-situation",
      },
      {
        label: "Open Summarize Written Text Strategy",
        target: "/master-teacher/tips/summarize-written-text",
      },
      {
        label: "Open Write Essay Strategy",
        target: "/master-teacher/tips/write-essay",
      },
      {
        label: "Open Fill in the Blanks (Dropdown) Strategy",
        target: "/master-teacher/tips/reading-fill-in-blanks-dropdown",
      },
      {
        label: "Open Reorder Paragraph Strategy",
        target: "/master-teacher/tips/reading-reorder-paragraph",
      },
      {
        label: "Open Fill in the Blanks (Drag and Drop) Strategy",
        target: "/master-teacher/tips/reading-fill-in-blanks-drag-drop",
      },
      {
        label: "Open Multiple Choice, Single Answer Strategy",
        target: "/master-teacher/tips/reading-multiple-choice-single",
      },
      {
        label: "Open Multiple Choice, Multiple Answers Strategy",
        target: "/master-teacher/tips/reading-multiple-choice-multiple",
      },
      {
        label: "Open Summarize Spoken Text Strategy",
        target: "/master-teacher/tips/summarize-spoken-text",
      },
      {
        label: "Open Multiple Choice, Multiple Answers (Listening) Strategy",
        target: "/master-teacher/tips/listening-multiple-choice-multiple",
      },
      {
        label: "Open Fill in the Blanks (Type In) Strategy",
        target: "/master-teacher/tips/listening-fill-in-blanks-type-in",
      },
      {
        label: "Open Highlight Correct Summary Strategy",
        target: "/master-teacher/tips/highlight-correct-summary",
      },
      {
        label: "Open Multiple Choice, Single Answer (Listening) Strategy",
        target: "/master-teacher/tips/listening-multiple-choice-single",
      },
      {
        label: "Open Select Missing Word Strategy",
        target: "/master-teacher/tips/select-missing-word",
      },
      {
        label: "Open Highlight Incorrect Words Strategy",
        target: "/master-teacher/tips/highlight-incorrect-words",
      },
      {
        label: "Open Write from Dictation Strategy",
        target: "/master-teacher/tips/write-from-dictation",
      },
      {
        label: "Open Personal Introduction Strategy",
        target: "/master-teacher/tips/personal-introduction",
      },
    ],
  },
  {
    id: "examiner-eye",
    title: "Examiner's Eye",
    icon: "\u{1F441}",
    accent: "#059669",
    accentLight: "#ecfdf5",
    border: "#a7f3d0",
    description:
      "Develop a consistent teacher approach to identifying the evidence that matters when evaluating a response.",
    items: [
      "What to listen for",
      "What to look for",
      "Separating major and minor issues",
      "Distinguishing similar error types",
    ],
    actions: [
      {
        label: "Open Examiner's Eye",
        target: "/master-teacher/tips/examiner-eye",
      },
      {
        label: "Open Common Assessment Traps",
        target: "/master-teacher/tips/common-assessment-traps",
      },
    ],
  },
  {
    id: "assessment-traps",
    title: "Common Assessment Traps",
    icon: "\u26A0\uFE0F",
    accent: "#d97706",
    accentLight: "#fffbeb",
    border: "#fde68a",
    description:
      "Recognise common assessment mistakes that can lead to inconsistent or misleading feedback.",
    items: [
      "Pronunciation versus word substitution",
      "Hesitation versus fluency problems",
      "Omission versus inaccurate production",
      "Over-correcting minor issues",
    ],
    actions: [
      {
        label: "Open Common Assessment Traps",
        target: "/master-teacher/tips/common-assessment-traps",
      },
    ],
  },
  {
    id: "classroom-drills",
    title: "Classroom Drills",
    icon: "\u{1F6E0}",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    border: "#ddd6fe",
    description:
      "Turn an identified student weakness into a practical classroom activity with a clear teaching purpose.",
    items: [
      "Fluency and thought-group drills",
      "Pronunciation practice",
      "Accuracy and recall drills",
      "Timed exam-condition practice",
    ],
    actions: [
      {
        label: "Open Classroom Drills",
        target: "/master-teacher/tips/classroom-drills",
      },
    ],
  },
  {
    id: "feedback-language",
    title: "Feedback Language",
    icon: "\u{1F4AC}",
    accent: "#0891b2",
    accentLight: "#ecfeff",
    border: "#a5f3fc",
    description:
      "Use clear, professional language when explaining performance problems and teaching priorities to students.",
    items: [
      "Explaining what went wrong",
      "Identifying the underlying problem",
      "Giving actionable advice",
      "Turning assessment into a teaching target",
    ],
    actions: [
      {
        label: "Open Feedback Language",
        target: "/master-teacher/tips/feedback-language",
      },
    ],
  },
  {
    id: "score-targets",
    title: "Score Target Strategies",
    icon: "\u{1F4CA}",
    accent: "#db2777",
    accentLight: "#fdf2f8",
    border: "#fbcfe8",
    description:
      "Connect a student's target score with the teaching priorities that deserve attention during preparation.",
    items: [
      "Foundation-level priorities",
      "Intermediate score targets",
      "Upper-intermediate targets",
      "Advanced score targets",
    ],
    actions: [
      {
        label: "Open Score Target Strategies",
        target: "/master-teacher/tips/score-target-strategies",
      },
    ],
  },
];

function StrategySectionCard({ section }) {
  const navigate = useNavigate();

  const handleAction = (target) => {
    if (target) {
      navigate(target);
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${section.border}`,
        borderTop: `4px solid ${section.accent}`,
        borderRadius: "14px",
        padding: "18px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
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
            width: "42px",
            height: "42px",
            flexShrink: 0,
            borderRadius: "11px",
            background: section.accentLight,
            border: `1px solid ${section.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "21px",
          }}
        >
          {section.icon}
        </div>

        <div>
          <h3
            style={{
              margin: "2px 0 5px",
              color: "#334155",
              fontSize: "16px",
              lineHeight: 1.3,
              fontWeight: 800,
            }}
          >
            {section.title}
          </h3>

          <p
            style={{
              margin: 0,
              color: "#64748b",
              fontSize: "12px",
              lineHeight: 1.55,
            }}
          >
            {section.description}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "14px",
          paddingTop: "12px",
          borderTop: "1px solid #f1f5f9",
        }}
      >
        {section.items.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "8px",
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.45,
            }}
          >
            <span
              style={{
                color: section.accent,
                fontWeight: 900,
                lineHeight: 1.3,
              }}
            >
              {"\u2022"}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {section.actions && (
        <div
          style={{
            display: "grid",
            gap: "8px",
            marginTop: "14px",
          }}
        >
          {section.actions.map((action) => (
            <button
              key={action.target}
              type="button"
              onClick={() => handleAction(action.target)}
              style={{
                width: "100%",
                padding: "9px 11px",
                borderRadius: "8px",
                border: `1px solid ${section.border}`,
                background: section.accentLight,
                color: section.accent,
                fontSize: "10px",
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {action.label}
              {" \u2192"}
            </button>
          ))}
        </div>
      )}

      {!section.actions && (
        <div
          style={{
            marginTop: "14px",
            padding: "8px 10px",
            borderRadius: "8px",
            background: section.accentLight,
            color: section.accent,
            fontSize: "10px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
          }}
        >
          Strategy library
        </div>
      )}
    </div>
  );
}

export default function ExaminerStrategyVault() {
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
        <div
          style={{
            display: "inline-block",
            padding: "5px 9px",
            borderRadius: "999px",
            background: "#dbeafe",
            color: "#1d4ed8",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Teacher Resource Library
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
          Examiner Strategy Vault
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
          A practical teacher reference library for understanding PTE task
          requirements, evaluating student responses, identifying common
          problems, and choosing useful classroom strategies.
        </p>
      </div>

      <div
        style={{
          marginTop: "18px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "18px",
        }}
      >
        {STRATEGY_SECTIONS.map((section) => (
          <StrategySectionCard
            key={section.id}
            section={section}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderLeft: "4px solid #059669",
          borderRadius: "14px",
          padding: "18px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "38px",
              height: "38px",
              flexShrink: 0,
              borderRadius: "10px",
              background: "#ecfdf5",
              border: "1px solid #a7f3d0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "19px",
            }}
          >
            {"\u{1F4A1}"}
          </div>

          <div>
            <div
              style={{
                color: "#047857",
                fontSize: "10px",
                fontWeight: 900,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "4px",
              }}
            >
              How this library will grow
            </div>

            <h3
              style={{
                margin: 0,
                color: "#334155",
                fontSize: "15px",
                fontWeight: 800,
              }}
            >
              Practical strategies will be added progressively
            </h3>

            <p
              style={{
                margin: "6px 0 0",
                color: "#64748b",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Each area can be expanded with detailed task guidance,
              examiner-focused observations, classroom activities, and
              professional feedback examples without changing the overall
              structure of the Vault.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}