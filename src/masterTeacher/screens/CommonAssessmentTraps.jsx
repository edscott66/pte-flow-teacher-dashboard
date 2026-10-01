import React from "react";
import { useNavigate } from "react-router-dom";

const ASSESSMENT_TRAPS = [
  {
    number: "01",
    title: "Pronunciation versus word substitution",
    icon: "\u{1F50A}",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    trap:
      "A transcript or first impression appears to show that the student used a different word.",
    evidence:
      "The audio may show that the student was actually attempting the target word but produced it inaccurately or unclearly.",
    questions: [
      "What did the student actually produce?",
      "Does the audio support a genuine lexical replacement?",
      "Could pronunciation or unclear production explain what was heard?",
    ],
    action:
      "Listen to the actual production before diagnosing a vocabulary or word-substitution problem.",
  },
  {
    number: "02",
    title: "Hesitation versus fluency problems",
    icon: "\u23F1",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    trap:
      "A student pauses, so the pause is immediately treated as evidence of poor fluency.",
    evidence:
      "A short pause can be part of normal planning. A stronger fluency concern is a repeated pattern of hesitation, restarting, repetition or breakdown that disrupts delivery.",
    questions: [
      "Was this an isolated planning pause?",
      "Does hesitation happen repeatedly?",
      "Does the pattern interrupt the student's delivery or communication?",
    ],
    action:
      "Look for the pattern and its impact rather than treating every pause as a fluency error.",
  },
  {
    number: "03",
    title: "Omission versus inaccurate production",
    icon: "\u{1F441}",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    trap:
      "A word is difficult to recognise, so it is assumed that the student omitted it.",
    evidence:
      "The student may have attempted the word but produced it inaccurately, making the word difficult to recognise.",
    questions: [
      "Was there an audible attempt at the word?",
      "Can the production be identified from the audio?",
      "Is the problem absence of the word or inaccurate production of it?",
    ],
    action:
      "Establish whether the word was actually attempted before diagnosing an omission.",
  },
  {
    number: "04",
    title: "Over-correcting minor issues",
    icon: "\u26A0\uFE0F",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    trap:
      "Every imperfection is treated as a teaching problem that needs immediate correction.",
    evidence:
      "An isolated slip may have little impact on communication, intelligibility or task fulfilment, while a repeated pattern may deserve much greater attention.",
    questions: [
      "Is this an isolated slip or a repeated pattern?",
      "Does it materially affect the student's performance?",
      "Is this the most useful issue to address at this stage?",
    ],
    action:
      "Prioritise issues according to evidence, repetition and impact rather than trying to correct everything.",
  },
];

const DIAGNOSTIC_SEQUENCE = [
  {
    number: "01",
    title: "Notice",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    text:
      "Identify exactly what you heard or saw without immediately assigning an error category.",
  },
  {
    number: "02",
    title: "Verify",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    text:
      "Check the actual response and ask whether the evidence supports your first interpretation.",
  },
  {
    number: "03",
    title: "Distinguish",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    text:
      "Consider the most plausible explanation before deciding what type of problem occurred.",
  },
  {
    number: "04",
    title: "Prioritise",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    text:
      "Decide whether the issue is isolated or repeated and whether it is important enough to become a teaching priority.",
  },
];

const TEACHER_CHECKS = [
  {
    title: "Before calling it an error",
    accent: "#2563eb",
    points: [
      "What is the observable evidence?",
      "Could there be another explanation?",
      "Have I checked the complete response?",
    ],
  },
  {
    title: "Before making it a priority",
    accent: "#d97706",
    points: [
      "Is it repeated?",
      "Does it affect performance?",
      "Will correcting it produce a useful teaching gain?",
    ],
  },
  {
    title: "Before giving feedback",
    accent: "#059669",
    points: [
      "Can I explain exactly what happened?",
      "Can I distinguish the problem from its possible cause?",
      "Can I give the student a clear next action?",
    ],
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

function TrapCard({ trap }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${trap.border}`,
        borderTop: `4px solid ${trap.accent}`,
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "13px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            flexShrink: 0,
            borderRadius: "11px",
            background: trap.background,
            border: `1px solid ${trap.border}`,
            color: trap.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
          }}
        >
          {trap.icon}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              color: trap.accent,
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.06em",
              marginBottom: "4px",
            }}
          >
            ASSESSMENT TRAP {trap.number}
          </div>

          <h3
            style={{
              margin: 0,
              color: "#334155",
              fontSize: "17px",
              lineHeight: 1.3,
              fontWeight: 900,
            }}
          >
            {trap.title}
          </h3>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gap: "10px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            padding: "12px",
          }}
        >
          <div
            style={{
              color: "#64748b",
              fontSize: "10px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "5px",
            }}
          >
            The trap
          </div>

          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            {trap.trap}
          </p>
        </div>

        <div
          style={{
            background: trap.background,
            border: `1px solid ${trap.border}`,
            borderRadius: "10px",
            padding: "12px",
          }}
        >
          <div
            style={{
              color: trap.accent,
              fontSize: "10px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "5px",
            }}
          >
            What the evidence may show
          </div>

          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "12px",
              lineHeight: 1.6,
            }}
          >
            {trap.evidence}
          </p>
        </div>

        <div
          style={{
            padding: "12px",
            border: "1px solid #e2e8f0",
            borderRadius: "10px",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              color: "#334155",
              fontSize: "10px",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: "8px",
            }}
          >
            Ask yourself
          </div>

          {trap.questions.map((question) => (
            <div
              key={question}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "7px",
                marginBottom: "6px",
                color: "#475569",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: trap.accent,
                  fontWeight: 900,
                }}
              >
                {"\u2022"}
              </span>

              <span>{question}</span>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: "11px 12px",
            borderLeft: `3px solid ${trap.accent}`,
            background: "#f8fafc",
            borderRadius: "0 8px 8px 0",
          }}
        >
          <span
            style={{
              color: trap.accent,
              fontWeight: 900,
              fontSize: "11px",
            }}
          >
            Teacher action:
          </span>{" "}
          <span
            style={{
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.55,
            }}
          >
            {trap.action}
          </span>
        </div>
      </div>
    </div>
  );
}

function DiagnosticStep({ step }) {
  return (
    <div
      style={{
        background: step.background,
        border: `1px solid ${step.border}`,
        borderRadius: "12px",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "9px",
        }}
      >
        <div
          style={{
            width: "32px",
            height: "32px",
            flexShrink: 0,
            borderRadius: "9px",
            background: "#ffffff",
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

        <h3
          style={{
            margin: 0,
            color: step.accent,
            fontSize: "14px",
            fontWeight: 900,
          }}
        >
          {step.title}
        </h3>
      </div>

      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.6,
        }}
      >
        {step.text}
      </p>
    </div>
  );
}

function TeacherCheckCard({ check }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderTop: `3px solid ${check.accent}`,
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: check.accent,
          fontSize: "13px",
          fontWeight: 900,
        }}
      >
        {check.title}
      </h3>

      {check.points.map((point) => (
        <div
          key={point}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "7px",
            marginBottom: "7px",
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.5,
          }}
        >
          <span
            style={{
              color: check.accent,
              fontWeight: 900,
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

export default function CommonAssessmentTraps() {
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
          {"\u26A0\uFE0F"}
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
            Common Assessment Traps
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
            Recognise common assessment mistakes that can lead to inconsistent
            or misleading feedback.
          </p>
        </div>
      </div>

      {/* Core principle */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="The assessment principle"
          title="Do not diagnose faster than the evidence allows"
          description="A visible problem is not always the underlying problem. The teacher's first interpretation should be treated as a question to verify rather than an automatic diagnosis."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #a7f3d0",
            borderTop: "4px solid #059669",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            {[
              {
                title: "What happened?",
                text: "Identify the observable feature of the response.",
                accent: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                title: "What else could explain it?",
                text: "Check whether the first interpretation is actually supported.",
                accent: "#d97706",
                background: "#fffbeb",
                border: "#fde68a",
              },
              {
                title: "What should I teach?",
                text: "Prioritise the issue that has the clearest teaching value.",
                accent: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: item.background,
                  border: `1px solid ${item.border}`,
                  borderRadius: "10px",
                  padding: "14px",
                }}
              >
                <div
                  style={{
                    color: item.accent,
                    fontSize: "12px",
                    fontWeight: 900,
                    marginBottom: "5px",
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
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Four assessment traps */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Four traps to watch for"
          title="Where assessment can go wrong"
          description="These distinctions are especially important when a teacher is deciding what the student actually did and what the appropriate teaching response should be."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {ASSESSMENT_TRAPS.map((trap) => (
            <TrapCard key={trap.number} trap={trap} />
          ))}
        </div>
      </section>

      {/* Diagnostic sequence */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="A safer assessment sequence"
          title="Notice → verify → distinguish → prioritise"
          description="Use the same sequence whenever an error is not immediately clear. This keeps the diagnosis tied to the student's actual performance."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_SEQUENCE.map((step) => (
            <DiagnosticStep key={step.number} step={step} />
          ))}
        </div>
      </section>

      {/* Teacher checks */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Teacher self-check"
          title="Three questions before giving feedback"
          description="A short internal check can prevent a premature diagnosis from becoming the student's feedback."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          {TEACHER_CHECKS.map((check) => (
            <TeacherCheckCard key={check.title} check={check} />
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section>
        <div
          style={{
            background:
              "linear-gradient(135deg, #fff7ed 0%, #f8fafc 100%)",
            border: "1px solid #fed7aa",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: "#d97706",
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
            Before you diagnose
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
                label: "Pronunciation?",
                text: "Check the audio before calling it substitution.",
                colour: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
              {
                label: "Fluency?",
                text: "Look for a repeated pattern, not one pause.",
                colour: "#d97706",
                background: "#fffbeb",
                border: "#fde68a",
              },
              {
                label: "Omission?",
                text: "Check whether the word was actually attempted.",
                colour: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                label: "Priority?",
                text: "Consider repetition, impact and teaching value.",
                colour: "#7c3aed",
                background: "#f5f3ff",
                border: "#ddd6fe",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: item.background,
                  border: `1px solid ${item.border}`,
                  borderRadius: "10px",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    color: item.colour,
                    fontSize: "11px",
                    fontWeight: 900,
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>

                <div
                  style={{
                    color: "#475569",
                    fontSize: "10px",
                    lineHeight: 1.5,
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