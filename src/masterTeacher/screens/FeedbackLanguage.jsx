import React from "react";
import { useNavigate } from "react-router-dom";

const FEEDBACK_STEPS = [
  {
    number: "01",
    title: "Evidence",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    question: "What did the student actually do?",
    description:
      "Start with the observable feature of the response rather than a broad judgement about performance.",
    examples: [
      "Identify the exact word, phrase, pause, omission or production that was observed.",
      "Use the student's actual response as the starting point.",
      "Separate what was heard or seen from what you think caused it.",
    ],
  },
  {
    number: "02",
    title: "Explanation",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    question: "What does the evidence tell us?",
    description:
      "Explain the underlying performance issue in language the student can understand.",
    examples: [
      "Name the specific problem rather than using a vague label.",
      "Explain why the issue matters to the student's performance.",
      "Keep the explanation focused on the evidence that supports it.",
    ],
  },
  {
    number: "03",
    title: "Action",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    question: "What should the student do differently?",
    description:
      "Turn the diagnosis into a practical instruction that the student can act on.",
    examples: [
      "Give one clear behaviour to change.",
      "Show the student what the improved production should look or sound like.",
      "Avoid giving several unrelated corrections at the same time.",
    ],
  },
  {
    number: "04",
    title: "Target",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    question: "What should we listen or look for next?",
    description:
      "Finish with a measurable teaching target that can be checked in the next attempt.",
    examples: [
      "Define the specific improvement the teacher expects to see.",
      "Return the student to the task and check whether the change transfers.",
      "Use the next response as evidence of progress.",
    ],
  },
];

const FEEDBACK_PATTERNS = [
  {
    title: "Describe before judging",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    weak:
      "Your pronunciation is bad here.",
    useful:
      "The word was difficult to recognise because the final sound was not clearly produced.",
    purpose:
      "Describe the observable problem before deciding how serious it is.",
  },
  {
    title: "Explain the teaching point",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    weak:
      "You need to speak more fluently.",
    useful:
      "The pauses are breaking the phrase into small pieces. Try grouping the words into one thought group.",
    purpose:
      "Give the student something specific to understand and practise.",
  },
  {
    title: "Give an actionable instruction",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    weak:
      "Be more accurate.",
    useful:
      "Keep the key word unchanged when you repeat the sentence. We will practise it once slowly, then again at normal speed.",
    purpose:
      "Turn the feedback into something the student can immediately do.",
  },
  {
    title: "Finish with a target",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    weak:
      "Try that again.",
    useful:
      "Try it again and keep the thought group together without stopping before the final phrase.",
    purpose:
      "Make the next attempt a clear test of the teaching point.",
  },
];

const FEEDBACK_RULES = [
  {
    title: "Be specific",
    text:
      "Name the performance feature that needs attention. General comments are harder for a student to act on.",
    accent: "#2563eb",
  },
  {
    title: "Keep the diagnosis evidence-based",
    text:
      "Do not turn an uncertain interpretation into a definite correction. Verify what the student actually produced.",
    accent: "#059669",
  },
  {
    title: "Give one priority",
    text:
      "When several issues are present, identify the most useful teaching target for the next attempt.",
    accent: "#d97706",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div
        style={{
          color: "#64748b",
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          margin: 0,
          color: "#0f172a",
          fontSize: "24px",
          lineHeight: 1.2,
          fontWeight: 900,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: "8px 0 0",
          color: "#64748b",
          fontSize: "13px",
          lineHeight: 1.65,
          maxWidth: "900px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function FeedbackStepCard({ step }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${step.border}`,
        borderTop: `4px solid ${step.accent}`,
        borderRadius: "14px",
        padding: "20px",
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
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            flexShrink: 0,
            borderRadius: "11px",
            background: step.background,
            border: `1px solid ${step.border}`,
            color: step.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "10px",
            fontWeight: 900,
          }}
        >
          {step.number}
        </div>

        <div>
          <h3
            style={{
              margin: "1px 0 4px",
              color: "#334155",
              fontSize: "17px",
              lineHeight: 1.3,
              fontWeight: 900,
            }}
          >
            {step.title}
          </h3>

          <div
            style={{
              color: step.accent,
              fontSize: "11px",
              fontWeight: 800,
              lineHeight: 1.45,
            }}
          >
            {step.question}
          </div>
        </div>
      </div>

      <p
        style={{
          margin: "0 0 13px",
          color: "#475569",
          fontSize: "12px",
          lineHeight: 1.6,
        }}
      >
        {step.description}
      </p>

      <div
        style={{
          borderTop: "1px solid #f1f5f9",
          paddingTop: "12px",
        }}
      >
        {step.examples.map((example) => (
          <div
            key={example}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "7px",
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                color: step.accent,
                fontWeight: 900,
              }}
            >
              {"\u2022"}
            </span>

            <span>{example}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackPatternCard({ pattern }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${pattern.border}`,
        borderRadius: "14px",
        padding: "18px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          marginBottom: "13px",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: pattern.accent,
            flexShrink: 0,
          }}
        />

        <h3
          style={{
            margin: 0,
            color: "#334155",
            fontSize: "14px",
            fontWeight: 900,
          }}
        >
          {pattern.title}
        </h3>
      </div>

      <div
        style={{
          background: "#fef2f2",
          border: "1px solid #fecaca",
          borderRadius: "9px",
          padding: "11px",
          marginBottom: "9px",
        }}
      >
        <div
          style={{
            color: "#b91c1c",
            fontSize: "9px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "5px",
          }}
        >
          Less useful
        </div>

        <div
          style={{
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {pattern.weak}
        </div>
      </div>

      <div
        style={{
          background: pattern.background,
          border: `1px solid ${pattern.border}`,
          borderRadius: "9px",
          padding: "11px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            color: pattern.accent,
            fontSize: "9px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "5px",
          }}
        >
          More useful
        </div>

        <div
          style={{
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {pattern.useful}
        </div>
      </div>

      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "10px",
          lineHeight: 1.55,
        }}
      >
        {pattern.purpose}
      </p>
    </div>
  );
}

function FeedbackRuleCard({ rule }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderTop: `3px solid ${rule.accent}`,
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <h3
        style={{
          margin: "0 0 7px",
          color: rule.accent,
          fontSize: "13px",
          fontWeight: 900,
        }}
      >
        {rule.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.6,
        }}
      >
        {rule.text}
      </p>
    </div>
  );
}

export default function FeedbackLanguage() {
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
      {/* Back button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "14px",
          padding: "8px 12px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          background: "#ffffff",
          color: "#475569",
          fontSize: "11px",
          fontWeight: 800,
          cursor: "pointer",
          boxShadow: "0 1px 2px rgba(15, 23, 42, 0.04)",
        }}
      >
        {"\u2190"} Back to Strategy Vault
      </button>

      {/* Header */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #3b82f6 100%)",
          borderRadius: "18px",
          padding: "30px",
          color: "#ffffff",
          boxShadow: "0 12px 30px rgba(37, 99, 235, 0.18)",
          display: "flex",
          alignItems: "center",
          gap: "22px",
          boxSizing: "border-box",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "72px",
            height: "72px",
            flexShrink: 0,
            borderRadius: "17px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "35px",
          }}
        >
          {"\u{1F4AC}"}
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "7px",
              opacity: 0.9,
            }}
          >
            Examiner Strategy Vault
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "32px",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Feedback Language
          </h1>

          <p
            style={{
              margin: "9px 0 0",
              fontSize: "14px",
              lineHeight: 1.65,
              maxWidth: "820px",
              opacity: 0.92,
            }}
          >
            Turn assessment observations into clear, professional and
            actionable feedback that gives the student a practical next step.
          </p>
        </div>
      </div>

      {/* Core framework */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="The feedback framework"
          title="Evidence → Explanation → Action → Target"
          description="Useful feedback connects what the teacher observed with what the student needs to understand, practise and demonstrate next."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #bfdbfe",
            borderTop: "4px solid #2563eb",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            {FEEDBACK_STEPS.map((step) => (
              <FeedbackStepCard key={step.number} step={step} />
            ))}
          </div>
        </div>
      </section>

      {/* Feedback language examples */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Four feedback moves"
          title="Make the feedback useful to the student"
          description="The language should help the student understand the problem and know exactly what to try on the next attempt."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {FEEDBACK_PATTERNS.map((pattern) => (
            <FeedbackPatternCard
              key={pattern.title}
              pattern={pattern}
            />
          ))}
        </div>
      </section>

      {/* Teacher rules */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Teacher reminders"
          title="Keep feedback precise"
          description="Good feedback does not need to be long. It needs to be specific enough for the student to understand the problem and act on it."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          {FEEDBACK_RULES.map((rule) => (
            <FeedbackRuleCard key={rule.title} rule={rule} />
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section>
        <div
          style={{
            background:
              "linear-gradient(135deg, #ecfeff 0%, #f8fafc 100%)",
            border: "1px solid #a5f3fc",
            borderLeft: "4px solid #0891b2",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: "#0891b2",
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "7px",
            }}
          >
            Quick reference
          </div>

          <h2
            style={{
              margin: "0 0 12px",
              color: "#0f172a",
              fontSize: "20px",
              fontWeight: 900,
            }}
          >
            Before giving feedback, ask four questions
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              {
                number: "1",
                text: "What did I actually observe?",
                accent: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                number: "2",
                text: "What does that evidence mean?",
                accent: "#7c3aed",
                background: "#f5f3ff",
                border: "#ddd6fe",
              },
              {
                number: "3",
                text: "What should the student do?",
                accent: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
              {
                number: "4",
                text: "What will I check next?",
                accent: "#d97706",
                background: "#fffbeb",
                border: "#fde68a",
              },
            ].map((item) => (
              <div
                key={item.number}
                style={{
                  background: item.background,
                  border: `1px solid ${item.border}`,
                  borderRadius: "10px",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <div
                  style={{
                    width: "25px",
                    height: "25px",
                    flexShrink: 0,
                    borderRadius: "7px",
                    background: "#ffffff",
                    border: `1px solid ${item.border}`,
                    color: item.accent,
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
                    color: "#475569",
                    fontSize: "10px",
                    lineHeight: 1.45,
                    fontWeight: 700,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}