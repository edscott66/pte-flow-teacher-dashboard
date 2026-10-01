import React from "react";
import { useNavigate } from "react-router-dom";

const DRILL_AREAS = [
  {
    number: "01",
    title: "Fluency & Thought-Group Drills",
    icon: "\u{1F4AC}",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    purpose:
      "Help students produce speech in meaningful groups rather than focusing on individual words one at a time.",
    whenToUse: [
      "Speech sounds word-by-word rather than connected.",
      "The student pauses repeatedly inside a phrase.",
      "The student loses control of delivery when speaking at normal speed.",
    ],
    drill: [
      "Mark the natural thought groups in a short response.",
      "Have the student read or repeat one group at a time.",
      "Join the groups together while maintaining the same phrasing.",
      "Repeat at a controlled exam-style pace.",
    ],
    observe:
      "Listen for smoother transitions between thought groups rather than simply counting pauses.",
  },
  {
    number: "02",
    title: "Pronunciation Practice",
    icon: "\u{1F50A}",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    purpose:
      "Give students focused practice on the pronunciation feature that is actually affecting their production.",
    whenToUse: [
      "A particular sound or word is repeatedly produced inaccurately.",
      "The target word becomes difficult to recognise.",
      "The same pronunciation pattern appears across several responses.",
    ],
    drill: [
      "Select the specific word or sound that needs attention.",
      "Model the target production clearly.",
      "Have the student produce it in isolation.",
      "Move from the word into a short phrase and then into the full response.",
    ],
    observe:
      "Check whether the target remains accurate when the student moves from controlled practice into connected speech.",
  },
  {
    number: "03",
    title: "Accuracy & Recall Drills",
    icon: "\u{1F9E0}",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    purpose:
      "Build more reliable recall and accurate production when students repeatedly lose or change important language.",
    whenToUse: [
      "Key words are repeatedly omitted or changed.",
      "The student knows the language but cannot reliably reproduce it under pressure.",
      "Accuracy drops when the response becomes longer or faster.",
    ],
    drill: [
      "Identify the exact language the student needs to retain.",
      "Present a short controlled recall task.",
      "Remove the support gradually as accuracy improves.",
      "Return the language to a realistic response or task context.",
    ],
    observe:
      "Check whether accuracy is maintained when support is removed rather than only during the controlled exercise.",
  },
  {
    number: "04",
    title: "Timed Exam-Condition Practice",
    icon: "\u23F1",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    purpose:
      "Test whether a skill that works during practice remains reliable when the student faces realistic time and task pressure.",
    whenToUse: [
      "The student performs well during controlled practice but struggles in timed tasks.",
      "Preparation is becoming too dependent on unlimited rehearsal.",
      "The student needs to transfer a recently practised skill into exam conditions.",
    ],
    drill: [
      "Set the same relevant time pressure the student will face.",
      "Give the student one clear performance target.",
      "Run the task without stopping to correct errors.",
      "Review the response immediately afterwards against the target.",
    ],
    observe:
      "Compare performance under pressure with the controlled version and identify exactly what changed.",
  },
];

const DRILL_SEQUENCE = [
  {
    number: "01",
    title: "Identify",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    text:
      "Choose one observable weakness from the student's actual performance.",
  },
  {
    number: "02",
    title: "Target",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    text:
      "Define one specific behaviour the student should improve during the drill.",
  },
  {
    number: "03",
    title: "Practise",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    text:
      "Use controlled practice first, then gradually return the skill to a realistic task.",
  },
  {
    number: "04",
    title: "Check",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    text:
      "Listen or look for the target again and decide whether the improvement transferred.",
  },
];

const TEACHER_RULES = [
  {
    title: "One target at a time",
    accent: "#2563eb",
    text:
      "A drill should have a clear performance target rather than attempting to correct several unrelated problems simultaneously.",
  },
  {
    title: "Move from controlled to realistic",
    accent: "#059669",
    text:
      "Controlled practice is useful, but the final check should show whether the student can use the skill in a real response.",
  },
  {
    title: "Measure the target",
    accent: "#d97706",
    text:
      "The teacher should know what improvement will sound or look like before starting the activity.",
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

function DrillCard({ drill }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `1px solid ${drill.border}`,
        borderTop: `4px solid ${drill.accent}`,
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
            width: "44px",
            height: "44px",
            flexShrink: 0,
            borderRadius: "11px",
            background: drill.background,
            border: `1px solid ${drill.border}`,
            color: drill.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "21px",
          }}
        >
          {drill.icon}
        </div>

        <div style={{ flex: 1 }}>
          <div
            style={{
              color: drill.accent,
              fontSize: "10px",
              fontWeight: 900,
              letterSpacing: "0.06em",
              marginBottom: "4px",
            }}
          >
            CLASSROOM DRILL {drill.number}
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
            {drill.title}
          </h3>
        </div>
      </div>

      <div
        style={{
          background: drill.background,
          border: `1px solid ${drill.border}`,
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            color: drill.accent,
            fontSize: "10px",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            marginBottom: "5px",
          }}
        >
          Purpose
        </div>

        <p
          style={{
            margin: 0,
            color: "#475569",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          {drill.purpose}
        </p>
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "10px",
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
          When to use it
        </div>

        {drill.whenToUse.map((item) => (
          <div
            key={item}
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
                color: drill.accent,
                fontWeight: 900,
              }}
            >
              {"\u2022"}
            </span>

            <span>{item}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "10px",
          padding: "12px",
          marginBottom: "10px",
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
          How to run it
        </div>

        {drill.drill.map((step, index) => (
          <div
            key={step}
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
                width: "19px",
                height: "19px",
                flexShrink: 0,
                borderRadius: "6px",
                background: drill.background,
                border: `1px solid ${drill.border}`,
                color: drill.accent,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "9px",
                fontWeight: 900,
              }}
            >
              {index + 1}
            </span>

            <span>{step}</span>
          </div>
        ))}
      </div>

      <div
        style={{
          padding: "11px 12px",
          borderLeft: `3px solid ${drill.accent}`,
          background: "#f8fafc",
          borderRadius: "0 8px 8px 0",
        }}
      >
        <span
          style={{
            color: drill.accent,
            fontWeight: 900,
            fontSize: "11px",
          }}
        >
          What to observe:
        </span>{" "}
        <span
          style={{
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {drill.observe}
        </span>
      </div>
    </div>
  );
}

function SequenceCard({ step }) {
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

function TeacherRuleCard({ rule }) {
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
          margin: "0 0 8px",
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

export default function ClassroomDrills() {
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
          {"\u{1F6E0}"}
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
            Classroom Drills
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
            Turn an identified student weakness into a practical classroom
            activity with a clear teaching purpose.
          </p>
        </div>
      </div>

      {/* Core principle */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="The classroom principle"
          title="Teach the problem you actually identified"
          description="A useful drill starts with a specific performance problem. The activity should target that problem directly and finish with an observable check."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #ddd6fe",
            borderTop: "4px solid #7c3aed",
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
                title: "Start with evidence",
                text: "Use the student's actual performance to identify the target.",
                accent: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                title: "Make the target specific",
                text: "Choose one behaviour the student can practise and demonstrate.",
                accent: "#7c3aed",
                background: "#f5f3ff",
                border: "#ddd6fe",
              },
              {
                title: "Check the transfer",
                text: "Return the skill to a realistic response and see whether it holds.",
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

      {/* Four drill areas */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Four classroom drill areas"
          title="Choose the drill that matches the weakness"
          description="The drill should follow the diagnosis. Different problems require different types of controlled practice before returning to the full task."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          {DRILL_AREAS.map((drill) => (
            <DrillCard key={drill.number} drill={drill} />
          ))}
        </div>
      </section>

      {/* Drill sequence */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="A repeatable classroom sequence"
          title="Identify → target → practise → check"
          description="Use the same basic sequence whether the problem is fluency, pronunciation, accuracy or performance under time pressure."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {DRILL_SEQUENCE.map((step) => (
            <SequenceCard key={step.number} step={step} />
          ))}
        </div>
      </section>

      {/* Teacher rules */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Teacher reminders"
          title="Keep the drill focused"
          description="A drill is most useful when the teacher knows exactly what the student is trying to change and what evidence will show whether it worked."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          {TEACHER_RULES.map((rule) => (
            <TeacherRuleCard key={rule.title} rule={rule} />
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section>
        <div
          style={{
            background:
              "linear-gradient(135deg, #f5f3ff 0%, #f8fafc 100%)",
            border: "1px solid #ddd6fe",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: "#7c3aed",
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
            Match the drill to the problem
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
                label: "Fluency",
                text: "Thought groups, connected delivery and controlled pacing.",
                colour: "#7c3aed",
                background: "#f5f3ff",
                border: "#ddd6fe",
              },
              {
                label: "Pronunciation",
                text: "Focused production from isolated word to connected speech.",
                colour: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
              {
                label: "Accuracy",
                text: "Recall and accurate production with support gradually removed.",
                colour: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                label: "Exam pressure",
                text: "Timed practice followed by evidence-based review.",
                colour: "#d97706",
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