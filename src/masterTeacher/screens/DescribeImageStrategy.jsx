import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    icon: "\u{1F4CA}",
    title: "Content",
    colour: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    description:
      "Listen for whether the student identifies the main features of the image and communicates the important information accurately.",
    points: [
      "Identifies the main idea or overall trend",
      "Selects important features rather than describing everything",
      "Uses specific information from the image",
      "Explains relationships, comparisons or changes where relevant",
    ],
  },
  {
    icon: "\u{1F50A}",
    title: "Pronunciation",
    colour: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    description:
      "Listen for clear, intelligible production of words, with appropriate stress and sound patterns.",
    points: [
      "Words remain intelligible",
      "Vowels and consonants are sufficiently clear",
      "Important words receive appropriate stress",
      "Pronunciation does not interfere with meaning",
    ],
  },
  {
    icon: "\u{1F3A4}",
    title: "Oral Fluency",
    colour: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    description:
      "Listen for a smooth, controlled response that develops naturally within the available speaking time.",
    points: [
      "Maintains a natural speaking rate",
      "Uses appropriate phrasing and rhythm",
      "Avoids excessive hesitation",
      "Avoids repeated words and false starts",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    number: "01",
    title: "Missing key information",
    colour: "#2563eb",
    description:
      "The student describes part of the image but leaves out an important feature, trend, comparison or relationship.",
    listenFor:
      "Ask whether the response covers the information that would matter most to a listener trying to understand the image.",
  },
  {
    number: "02",
    title: "Incorrect interpretation",
    colour: "#dc2626",
    description:
      "The student identifies information incorrectly or gives an interpretation that is not supported by the image.",
    listenFor:
      "Separate a genuine interpretation problem from a language problem. First establish whether the student understood what the image showed.",
  },
  {
    number: "03",
    title: "Disconnected details",
    colour: "#7c3aed",
    description:
      "The student lists individual features without making the relationships between them clear.",
    listenFor:
      "Listen for comparisons, contrasts, trends, sequences and other relationships where the image provides them.",
  },
  {
    number: "04",
    title: "Pronunciation error",
    colour: "#059669",
    description:
      "A word or phrase is produced in a way that affects intelligibility, even when the student appears to know the intended vocabulary.",
    listenFor:
      "Distinguish pronunciation difficulty from an actual vocabulary substitution.",
  },
  {
    number: "05",
    title: "Hesitation or false start",
    colour: "#d97706",
    description:
      "The student repeatedly stops, restarts, searches for language or becomes noticeably disfluent.",
    listenFor:
      "Look for patterns rather than isolated pauses. A short planning pause is different from repeated breakdowns.",
  },
  {
    number: "06",
    title: "Over-reliance on memorised language",
    colour: "#db2777",
    description:
      "The response sounds heavily templated and does not adapt naturally to the information contained in the image.",
    listenFor:
      "Check whether the language is actually communicating the image or whether the student is mainly delivering a memorised framework.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "1",
    title: "Identify the image type",
    description:
      "Before speaking, establish what the image is showing: a graph, chart, table, process, map, diagram or another visual format.",
    teacherTip:
      "Train students to spend the preparation time understanding the overall purpose of the image rather than trying to memorise every detail.",
  },
  {
    number: "2",
    title: "Find the main message",
    description:
      "Ask the student to identify the single most important message that the image communicates.",
    teacherTip:
      "The student should know what they want the listener to understand before they start listing individual details.",
  },
  {
    number: "3",
    title: "Select the important features",
    description:
      "Choose the most useful supporting details instead of attempting to describe every visible element.",
    teacherTip:
      "For data images, focus on significant differences, highest and lowest values, changes and useful comparisons.",
  },
  {
    number: "4",
    title: "Organise the response",
    description:
      "Move from the overall message into supporting details using clear relationships between ideas.",
    teacherTip:
      "Encourage simple logical organisation rather than complicated memorised structures.",
  },
  {
    number: "5",
    title: "Add specific information",
    description:
      "Support the description with relevant figures, categories, examples, comparisons or other information visible in the image.",
    teacherTip:
      "Specific information makes the response more informative and demonstrates that the student is responding to the actual image.",
  },
  {
    number: "6",
    title: "Finish naturally",
    description:
      "Once the important information has been communicated, finish the response cleanly rather than forcing additional content.",
    teacherTip:
      "A controlled ending is preferable to rushing through unnecessary details simply to fill the remaining time.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    area: "Content",
    colour: "#2563eb",
    example:
      "You identified the main trend clearly, but you needed one or two specific supporting details to make the description more complete.",
  },
  {
    area: "Organisation",
    colour: "#7c3aed",
    example:
      "Your ideas were accurate, but they were presented as separate points. Try connecting the important features so the listener can see the relationship between them.",
  },
  {
    area: "Pronunciation",
    colour: "#059669",
    example:
      "Your overall message was clear. Work on the pronunciation of the key vocabulary so those words remain easy to understand.",
  },
  {
    area: "Fluency",
    colour: "#d97706",
    example:
      "Your ideas were relevant, but the repeated pauses interrupted the flow. Practise delivering the same information in short, controlled thought groups.",
  },
  {
    area: "Specificity",
    colour: "#db2777",
    example:
      "You described the general picture well. Now add the most important figures, comparisons or changes shown in the image.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: 7,
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: 24,
          lineHeight: 1.25,
          fontWeight: 800,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            margin: "9px 0 0",
            maxWidth: 820,
            fontSize: 14,
            lineHeight: 1.65,
            color: "#64748b",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function FocusCard({ item }) {
  return (
    <div
      style={{
        background: item.background,
        border: `1px solid ${item.border}`,
        borderRadius: 18,
        padding: 22,
        minHeight: 260,
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          marginBottom: 14,
        }}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 13,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#ffffff",
            border: `1px solid ${item.border}`,
            fontSize: 22,
            flexShrink: 0,
          }}
        >
          {item.icon}
        </div>

        <div
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: item.colour,
          }}
        >
          {item.title}
        </div>
      </div>

      <p
        style={{
          margin: "0 0 16px",
          fontSize: 14,
          lineHeight: 1.6,
          color: "#334155",
        }}
      >
        {item.description}
      </p>

      <div style={{ display: "grid", gap: 9 }}>
        {item.points.map((point) => (
          <div
            key={point}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 9,
              fontSize: 13,
              lineHeight: 1.45,
              color: "#475569",
            }}
          >
            <span
              style={{
                color: item.colour,
                fontWeight: 900,
                marginTop: 1,
              }}
            >
              {"\u2713"}
            </span>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DescribeImageStrategy() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#f8fafc",
        padding: "24px 28px 48px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {/* Back button */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            border: "1px solid #cbd5e1",
            background: "#ffffff",
            color: "#334155",
            borderRadius: 10,
            padding: "9px 14px",
            fontSize: 13,
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: 18,
            boxShadow: "0 1px 2px rgba(15, 23, 42, 0.05)",
          }}
        >
          {"\u2190"} Back to Strategy Vault
        </button>

        {/* Header */}
        <div
          style={{
            background:
              "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #3b82f6 100%)",
            borderRadius: 22,
            padding: "30px 32px",
            color: "#ffffff",
            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.18)",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 17,
                background: "rgba(255,255,255,0.16)",
                border: "1px solid rgba(255,255,255,0.24)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 29,
                flexShrink: 0,
              }}
            >
              {"\u{1F4CA}"}
            </div>

            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  opacity: 0.85,
                  marginBottom: 7,
                }}
              >
                Speaking &amp; Writing
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 30,
                  lineHeight: 1.15,
                  fontWeight: 850,
                }}
              >
                Describe Image — Examiner Strategy
              </h1>

              <p
                style={{
                  margin: "11px 0 0",
                  maxWidth: 760,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                A practical teacher reference for diagnosing content,
                pronunciation and oral fluency when assessing Describe Image
                responses.
              </p>
            </div>
          </div>
        </div>

        {/* At a glance */}
        <section style={{ marginBottom: 36 }}>
          <SectionHeading
            eyebrow="Task overview"
            title="Describe Image at a glance"
            description="The teacher's job is not simply to decide whether the student described the image. Listen for how accurately, clearly and fluently the student communicates the important information."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 14,
            }}
          >
            {[
              ["Task", "Describe Image", "#2563eb", "#eff6ff"],
              ["Preparation", "25 seconds", "#7c3aed", "#f5f3ff"],
              ["Response", "40 seconds", "#059669", "#ecfdf5"],
              ["Scoring", "Content • Pronunciation • Oral Fluency", "#d97706", "#fffbeb"],
            ].map(([label, value, colour, background]) => (
              <div
                key={label}
                style={{
                  background,
                  border: `1px solid ${colour}22`,
                  borderRadius: 16,
                  padding: "18px 18px",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    color: "#64748b",
                    marginBottom: 7,
                  }}
                >
                  {label}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    lineHeight: 1.4,
                    fontWeight: 800,
                    color: colour,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Focus areas */}
        <section style={{ marginBottom: 38 }}>
          <SectionHeading
            eyebrow="Teacher listening guide"
            title="What should the teacher listen for?"
            description="Use the three scoring areas as separate listening lenses. A student can have strong content while still needing work on pronunciation or fluency."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 18,
            }}
          >
            {FOCUS_AREAS.map((item) => (
              <FocusCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        {/* Diagnostic focus */}
        <section style={{ marginBottom: 38 }}>
          <SectionHeading
            eyebrow="Diagnostic focus"
            title="What problem is actually occurring?"
            description="The purpose of diagnostic listening is to identify the underlying problem so the teacher can choose the appropriate classroom intervention."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {DIAGNOSTIC_ITEMS.map((item) => (
              <div
                key={item.number}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 17,
                  padding: 20,
                  display: "flex",
                  gap: 16,
                  boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: `${item.colour}12`,
                    color: item.colour,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 900,
                    flexShrink: 0,
                  }}
                >
                  {item.number}
                </div>

                <div>
                  <h3
                    style={{
                      margin: "0 0 7px",
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      margin: "0 0 10px",
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: "#475569",
                    }}
                  >
                    {item.description}
                  </p>

                  <div
                    style={{
                      borderLeft: `3px solid ${item.colour}`,
                      paddingLeft: 11,
                      fontSize: 12,
                      lineHeight: 1.55,
                      color: "#64748b",
                    }}
                  >
                    <strong style={{ color: "#334155" }}>
                      Listen for:
                    </strong>{" "}
                    {item.listenFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Classroom strategy */}
        <section style={{ marginBottom: 38 }}>
          <SectionHeading
            eyebrow="Classroom strategy"
            title="A practical teaching sequence"
            description="Build the response from understanding and selection first. Fluency should support the message rather than replace it."
          />

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
            }}
          >
            {CLASSROOM_STEPS.map((step, index) => (
              <div
                key={step.number}
                style={{
                  display: "grid",
                  gridTemplateColumns: "54px 220px minmax(0, 1fr)",
                  gap: 18,
                  padding: "20px 22px",
                  borderBottom:
                    index === CLASSROOM_STEPS.length - 1
                      ? "none"
                      : "1px solid #e2e8f0",
                  alignItems: "start",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 12,
                    background: "#eff6ff",
                    color: "#2563eb",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    fontWeight: 900,
                  }}
                >
                  {step.number}
                </div>

                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 800,
                    color: "#0f172a",
                    paddingTop: 9,
                  }}
                >
                  {step.title}
                </div>

                <div>
                  <p
                    style={{
                      margin: "0 0 9px",
                      fontSize: 13,
                      lineHeight: 1.55,
                      color: "#475569",
                    }}
                  >
                    {step.description}
                  </p>

                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: 10,
                      padding: "9px 11px",
                      fontSize: 12,
                      lineHeight: 1.5,
                      color: "#64748b",
                    }}
                  >
                    <strong style={{ color: "#334155" }}>
                      Teacher tip:
                    </strong>{" "}
                    {step.teacherTip}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Teacher language */}
        <section style={{ marginBottom: 38 }}>
          <SectionHeading
            eyebrow="Teacher language"
            title="Useful feedback language"
            description="Keep feedback specific enough for the student to know what to practise next."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 16,
            }}
          >
            {FEEDBACK_EXAMPLES.map((item) => (
              <div
                key={item.area}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 16,
                  padding: 19,
                  borderLeft: `5px solid ${item.colour}`,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: item.colour,
                    marginBottom: 9,
                  }}
                >
                  {item.area}
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    lineHeight: 1.6,
                    color: "#334155",
                  }}
                >
                  “{item.example}”
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick reference */}
        <section style={{ marginBottom: 30 }}>
          <SectionHeading
            eyebrow="Quick reference"
            title="Describe Image examiner checklist"
            description="Use these questions when listening to a student's response."
          />

          <div
            style={{
              background: "#0f172a",
              borderRadius: 20,
              padding: 25,
              color: "#ffffff",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "14px 28px",
              }}
            >
              {[
                "Did the student identify the main message of the image?",
                "Were the most important features selected?",
                "Were relevant specific details included?",
                "Were relationships, comparisons or trends communicated where appropriate?",
                "Was the response organised and easy to follow?",
                "Was pronunciation sufficiently clear and intelligible?",
                "Was the speaking rate natural and controlled?",
                "Were hesitation, repetition and false starts limited?",
                "Did the response adapt to the actual image?",
                "Did the student finish naturally without unnecessary filler?",
              ].map((question) => (
                <div
                  key={question}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "#e2e8f0",
                  }}
                >
                  <span
                    style={{
                      color: "#60a5fa",
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    {"\u2713"}
                  </span>
                  <span>{question}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reference note */}
        <div
          style={{
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: 15,
            padding: "15px 17px",
            fontSize: 12,
            lineHeight: 1.55,
            color: "#475569",
          }}
        >
          <strong style={{ color: "#1e40af" }}>
            Official scoring reference:
          </strong>{" "}
          This teacher strategy is designed as a practical classroom
          reference. The official PTE scoring criteria and current Pearson
          guidance remain the authoritative source for examination scoring.
        </div>
      </div>
    </div>
  );
}