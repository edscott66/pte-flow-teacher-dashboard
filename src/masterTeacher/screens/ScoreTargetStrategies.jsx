import React from "react";
import { useNavigate } from "react-router-dom";

const TARGET_LEVELS = [
  {
    number: "01",
    title: "Foundation-Level Priorities",
    icon: "\u{1F331}",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    purpose:
      "Build the core performance habits that allow the student to produce a more reliable response before adding more advanced refinements.",
    priorities: [
      "Reliable task completion",
      "Clear and understandable production",
      "Basic accuracy and recall",
      "Consistent response structure",
    ],
    teachingFocus: [
      "Establish one clear performance routine for the task.",
      "Reduce repeated breakdowns that prevent the response from being completed effectively.",
      "Build controlled practice before increasing speed or complexity.",
    ],
    monitor:
      "Look for greater consistency across attempts rather than expecting every feature to improve simultaneously.",
  },
  {
    number: "02",
    title: "Intermediate Score Targets",
    icon: "\u{1F4C8}",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    purpose:
      "Move the student from basic task completion toward more controlled, accurate and consistent performance.",
    priorities: [
      "Improved accuracy",
      "More reliable fluency",
      "Better control of key language",
      "Fewer repeated performance problems",
    ],
    teachingFocus: [
      "Identify the weaknesses that repeatedly affect performance.",
      "Use targeted drills rather than broad correction.",
      "Increase the amount of realistic task practice after controlled work.",
    ],
    monitor:
      "Check whether the same improvement appears across multiple responses rather than only in the practised example.",
  },
  {
    number: "03",
    title: "Upper-Intermediate Targets",
    icon: "\u{1F680}",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    purpose:
      "Refine performance by identifying the smaller number of issues that continue to limit consistency at a stronger level.",
    priorities: [
      "Precision and control",
      "Consistent delivery under pressure",
      "Higher-quality language choices",
      "Reduction of recurring weaknesses",
    ],
    teachingFocus: [
      "Prioritise patterns that continue to appear across responses.",
      "Move quickly from correction into independent task performance.",
      "Use exam-condition practice to test whether refinements transfer.",
    ],
    monitor:
      "Look for whether the student's stronger performance remains stable when the task becomes less controlled.",
  },
  {
    number: "04",
    title: "Advanced Score Targets",
    icon: "\u{1F3AF}",
    accent: "#db2777",
    background: "#fdf2f8",
    border: "#fbcfe8",
    purpose:
      "Protect consistency while refining the specific performance details that can still separate strong responses from highly controlled ones.",
    priorities: [
      "Fine control of performance",
      "Consistency under exam conditions",
      "Precision in language and delivery",
      "Elimination of repeated high-impact weaknesses",
    ],
    teachingFocus: [
      "Use evidence to identify the small number of issues worth addressing.",
      "Avoid over-correcting isolated slips that do not represent a meaningful pattern.",
      "Test refinements repeatedly in realistic task conditions.",
    ],
    monitor:
      "Focus on whether the target behaviour remains reliable across different tasks and under realistic pressure.",
  },
];

const TARGET_PRINCIPLES = [
  {
    title: "Start with the target",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    text:
      "The intended score level should help the teacher decide which performance features deserve the most attention.",
  },
  {
    title: "Prioritise the biggest teaching need",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    text:
      "Do not treat every imperfection as equally important. Focus teaching time where improvement is most useful.",
  },
  {
    title: "Check consistency",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    text:
      "A successful practice attempt is not enough. The target should remain visible across further responses.",
  },
];

const TEACHER_DECISIONS = [
  {
    number: "01",
    title: "What is the target?",
    text:
      "Identify the student's intended performance level before deciding which weaknesses should receive priority.",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    number: "02",
    title: "What is limiting progress?",
    text:
      "Use actual performance evidence to identify the recurring issue that deserves teaching attention.",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
  },
  {
    number: "03",
    title: "What should change first?",
    text:
      "Choose a manageable teaching target rather than trying to correct every weakness at once.",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    number: "04",
    title: "Did it transfer?",
    text:
      "Return the student to realistic task performance and check whether the improvement remains.",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
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
          maxWidth: "920px",
        }}
      >
        {description}
      </p>
    </div>
  );
}

function TargetLevelCard({ level }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${level.border}`,
        borderTop: `4px solid ${level.accent}`,
        borderRadius: "14px",
        padding: "20px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            flexShrink: 0,
            borderRadius: "11px",
            background: level.background,
            border: `1px solid ${level.border}`,
            color: level.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "21px",
          }}
        >
          {level.icon}
        </div>

        <div>
          <div
            style={{
              color: level.accent,
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.06em",
              marginBottom: "4px",
            }}
          >
            TARGET LEVEL {level.number}
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
            {level.title}
          </h3>
        </div>
      </div>

      <div
        style={{
          background: level.background,
          border: `1px solid ${level.border}`,
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "11px",
        }}
      >
        <div
          style={{
            color: level.accent,
            fontSize: "10px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "5px",
          }}
        >
          Teaching purpose
        </div>

        <p
          style={{
            margin: 0,
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          {level.purpose}
        </p>
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "11px",
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
          Priority areas
        </div>

        {level.priorities.map((priority) => (
          <div
            key={priority}
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
                color: level.accent,
                fontWeight: 900,
              }}
            >
              {"\u2022"}
            </span>

            <span>{priority}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "11px",
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
          Teaching focus
        </div>

        {level.teachingFocus.map((focus) => (
          <div
            key={focus}
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
                width: "5px",
                height: "5px",
                flexShrink: 0,
                borderRadius: "50%",
                background: level.accent,
                marginTop: "5px",
              }}
            />

            <span>{focus}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "11px 12px",
          borderLeft: `3px solid ${level.accent}`,
          background: "#f8fafc",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <span
          style={{
            color: level.accent,
            fontWeight: 900,
            fontSize: "11px",
          }}
        >
          What to monitor:
        </span>{" "}
        <span
          style={{
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {level.monitor}
        </span>
      </div>
    </div>
  );
}

function PrincipleCard({ principle }) {
  return (
    <div
      style={{
        background: principle.background,
        border: `1px solid ${principle.border}`,
        borderRadius: "12px",
        padding: "15px",
      }}
    >
      <h3
        style={{
          margin: "0 0 7px",
          color: principle.accent,
          fontSize: "13px",
          fontWeight: 900,
        }}
      >
        {principle.title}
      </h3>

      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.6,
        }}
      >
        {principle.text}
      </p>
    </div>
  );
}

function TeacherDecisionCard({ decision }) {
  return (
    <div
      style={{
        background: decision.background,
        border: `1px solid ${decision.border}`,
        borderRadius: "12px",
        padding: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "9px",
          marginBottom: "8px",
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            flexShrink: 0,
            borderRadius: "8px",
            background: "#ffffff",
            border: `1px solid ${decision.border}`,
            color: decision.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "9px",
            fontWeight: 900,
          }}
        >
          {decision.number}
        </div>

        <h3
          style={{
            margin: 0,
            color: decision.accent,
            fontSize: "13px",
            fontWeight: 900,
          }}
        >
          {decision.title}
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
        {decision.text}
      </p>
    </div>
  );
}

export default function ScoreTargetStrategies() {
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
          {"\u{1F4CA}"}
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
            Score Target Strategies
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
            Connect a student's target level with the teaching priorities that
            deserve attention during preparation.
          </p>
        </div>
      </div>

      {/* Core principle */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="The score-target principle"
          title="Teach towards the target, not every possible weakness"
          description="A student's intended target can help the teacher decide where limited teaching time should be concentrated. The target should guide priorities while actual performance evidence determines the specific teaching need."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #fbcfe8",
            borderTop: "4px solid #db2777",
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
            {TARGET_PRINCIPLES.map((principle) => (
              <PrincipleCard
                key={principle.title}
                principle={principle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Target levels */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Four target levels"
          title="Match the teaching priority to the target"
          description="The four levels provide a practical planning framework. The teacher should still use the student's actual performance to decide which specific issue deserves attention."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {TARGET_LEVELS.map((level) => (
            <TargetLevelCard
              key={level.number}
              level={level}
            />
          ))}
        </div>
      </section>

      {/* Teacher decision sequence */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Teacher decision sequence"
          title="Target → evidence → priority → check"
          description="Use the target to establish direction, then return to the student's actual performance to decide what should be taught next."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {TEACHER_DECISIONS.map((decision) => (
            <TeacherDecisionCard
              key={decision.number}
              decision={decision}
            />
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section>
        <div
          style={{
            background:
              "linear-gradient(135deg, #fdf2f8 0%, #f8fafc 100%)",
            border: "1px solid #fbcfe8",
            borderLeft: "4px solid #db2777",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: "#db2777",
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
            Keep the target and evidence connected
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
                label: "Target",
                text: "Know the level the student is working towards.",
                accent: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                label: "Evidence",
                text: "Identify what the student is actually doing.",
                accent: "#7c3aed",
                background: "#f5f3ff",
                border: "#ddd6fe",
              },
              {
                label: "Priority",
                text: "Choose the teaching issue worth addressing first.",
                accent: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
              {
                label: "Check",
                text: "See whether the improvement transfers to the task.",
                accent: "#d97706",
                background: "#fffbeb",
                border: "#fde68a",
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
                    color: item.accent,
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