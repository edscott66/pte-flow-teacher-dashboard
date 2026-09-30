import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    icon: "\u{1F4DD}",
    title: "Content",
    accent: "#2563eb",
    soft: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify the main points of the lecture rather than trying to reproduce every detail.",
      "Listen for relationships between ideas, including developments, implications and conclusions.",
      "A strong response is connected and coherent, not simply a list of isolated keywords.",
    ],
  },
  {
    icon: "\u{1F50A}",
    title: "Pronunciation",
    accent: "#7c3aed",
    soft: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Check whether the response is immediately understandable to a regular English speaker.",
      "Listen to vowels, consonants, word stress and sentence-level stress.",
      "Judge intelligibility rather than expecting one particular regional variety of English.",
    ],
  },
  {
    icon: "\u{1F3A4}",
    title: "Oral Fluency",
    accent: "#059669",
    soft: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Listen for a smooth, natural rate of speech with appropriate phrasing and rhythm.",
      "Notice whether hesitation, repetition or self-correction interrupts the message.",
      "A student should keep communicating rather than repeatedly stopping to repair mistakes.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    number: "01",
    title: "Missing key points",
    accent: "#2563eb",
    description:
      "The response mentions one or two ideas but leaves out important parts of the lecture.",
    teacherLookFor:
      "Can the student identify the central ideas and enough supporting information to show understanding?",
  },
  {
    number: "02",
    title: "Disconnected ideas",
    accent: "#7c3aed",
    description:
      "The student recalls isolated words or facts without explaining how the ideas relate to each other.",
    teacherLookFor:
      "Can the student connect points using relationships, developments, examples or conclusions?",
  },
  {
    number: "03",
    title: "Over-focus on details",
    accent: "#d97706",
    description:
      "The student spends too much of the 40-second response on minor details and runs out of time.",
    teacherLookFor:
      "Is the student prioritising the main message before adding useful supporting information?",
  },
  {
    number: "04",
    title: "Memorised or templated language",
    accent: "#dc2626",
    description:
      "Prepared language takes up a significant part of the response instead of communicating the lecture content.",
    teacherLookFor:
      "Does the language respond naturally to the actual lecture rather than sounding like a pre-prepared answer?",
  },
  {
    number: "05",
    title: "Pronunciation error",
    accent: "#9333ea",
    description:
      "A word or phrase is produced in a way that affects intelligibility.",
    teacherLookFor:
      "Is the problem genuinely pronunciation, or did the student actually choose a different word?",
  },
  {
    number: "06",
    title: "Hesitation or false start",
    accent: "#059669",
    description:
      "Frequent pauses, repetitions or abandoned starts interrupt the flow of the retell.",
    teacherLookFor:
      "Does the student keep moving through the response even when a detail is uncertain?",
  },
];

const CLASSROOM_STEPS = [
  {
    step: "1",
    title: "Listen for the main message",
    text:
      "Train students to identify what the lecture is mainly about before trying to capture every individual detail.",
    colour: "#2563eb",
  },
  {
    step: "2",
    title: "Take selective notes",
    text:
      "Use short keywords, symbols and arrows to record important points and relationships rather than full sentences.",
    colour: "#7c3aed",
  },
  {
    step: "3",
    title: "Identify relationships",
    text:
      "Ask students to notice causes, effects, comparisons, developments, examples and conclusions in the lecture.",
    colour: "#d97706",
  },
  {
    step: "4",
    title: "Build a connected retell",
    text:
      "Practise turning notes into connected speech using linking words and relative clauses instead of listing keywords.",
    colour: "#059669",
  },
  {
    step: "5",
    title: "Control the 40 seconds",
    text:
      "Practise prioritising the most important content so the response remains focused and complete within the time limit.",
    colour: "#0891b2",
  },
  {
    step: "6",
    title: "Retell independently",
    text:
      "Remove scaffolding and have the student listen, note, organise and speak without relying on a memorised template.",
    colour: "#db2777",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    label: "Content",
    colour: "#2563eb",
    text:
      "You identified the main topic, but your retell needs another key point and a clearer connection between the ideas.",
  },
  {
    label: "Organisation",
    colour: "#7c3aed",
    text:
      "Your notes contain useful information. Now connect the points so the listener can understand how they relate.",
  },
  {
    label: "Specificity",
    colour: "#d97706",
    text:
      "You remembered several keywords, but explain what they mean in the lecture rather than listing them separately.",
  },
  {
    label: "Pronunciation",
    colour: "#9333ea",
    text:
      "The overall message was understandable. Work on the pronunciation of the highlighted words so they are clearer on the first attempt.",
  },
  {
    label: "Fluency",
    colour: "#059669",
    text:
      "Keep the response moving. If one detail is uncertain, continue with the next idea instead of stopping to repair it.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 800,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: "8px",
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          margin: 0,
          fontSize: "28px",
          lineHeight: 1.2,
          fontWeight: 900,
          color: "#0f172a",
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            margin: "10px 0 0",
            maxWidth: "900px",
            fontSize: "16px",
            lineHeight: 1.7,
            color: "#52627a",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function FocusCard({ area }) {
  return (
    <div
      style={{
        background: area.soft,
        border: `1px solid ${area.border}`,
        borderRadius: "18px",
        padding: "24px",
        minHeight: "255px",
      }}
    >
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "15px",
          background: "#ffffff",
          border: `1px solid ${area.border}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "25px",
          marginBottom: "18px",
        }}
      >
        {area.icon}
      </div>

      <h3
        style={{
          margin: "0 0 12px",
          color: area.accent,
          fontSize: "21px",
          fontWeight: 900,
        }}
      >
        {area.title}
      </h3>

      <ul
        style={{
          margin: 0,
          paddingLeft: "20px",
          color: "#475569",
          lineHeight: 1.65,
          fontSize: "14px",
        }}
      >
        {area.points.map((point) => (
          <li key={point} style={{ marginBottom: "9px" }}>
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function RetellLectureStrategy() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#f8fafc",
        color: "#0f172a",
        padding: "26px 20px 60px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1328px", margin: "0 auto" }}>
        <button
          type="button"
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "#ffffff",
            color: "#1e3a5f",
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            padding: "9px 15px",
            fontSize: "14px",
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
            marginBottom: "20px",
          }}
        >
          {"\u2190"} Back to Strategy Vault
        </button>

        <header
          style={{
            background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
            borderRadius: "24px",
            padding: "34px 36px",
            color: "#ffffff",
            boxShadow: "0 18px 38px rgba(37, 99, 235, 0.18)",
            display: "flex",
            alignItems: "center",
            gap: "22px",
            marginBottom: "34px",
          }}
        >
          <div
            style={{
              width: "68px",
              height: "68px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.13)",
              border: "1px solid rgba(255,255,255,0.28)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "31px",
              flexShrink: 0,
            }}
          >
            {"\u{1F399}\uFE0F"}
          </div>

          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 900,
                letterSpacing: "0.08em",
                marginBottom: "8px",
              }}
            >
              SPEAKING &amp; WRITING
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "34px",
                lineHeight: 1.12,
                fontWeight: 900,
              }}
            >
              Retell Lecture — Examiner Strategy
            </h1>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "900px",
                color: "rgba(255,255,255,0.94)",
              }}
            >
              A practical teacher reference for diagnosing content, pronunciation
              and oral fluency when assessing Retell Lecture responses.
            </p>
          </div>
        </header>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Task Overview"
            title="Retell Lecture at a glance"
            description="The teacher's job is not simply to check whether the student remembered some words. Listen for how accurately and coherently the student communicates the important information from the lecture."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                label: "TASK",
                value: "Retell Lecture",
                background: "#eff6ff",
                border: "#bfdbfe",
                colour: "#2563eb",
              },
              {
                label: "PROMPT",
                value: "Up to 90 seconds",
                background: "#f5f3ff",
                border: "#ddd6fe",
                colour: "#7c3aed",
              },
              {
                label: "PREPARATION",
                value: "10 seconds",
                background: "#ecfdf5",
                border: "#a7f3d0",
                colour: "#059669",
              },
              {
                label: "RESPONSE",
                value: "40 seconds",
                background: "#fffbeb",
                border: "#fde68a",
                colour: "#d97706",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  background: item.background,
                  border: `1px solid ${item.border}`,
                  borderRadius: "17px",
                  padding: "22px",
                  minHeight: "108px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    color: "#64748b",
                    marginBottom: "10px",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    lineHeight: 1.3,
                    fontWeight: 900,
                    color: item.colour,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "16px",
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "17px",
              padding: "18px 20px",
              color: "#475569",
              fontSize: "14px",
              lineHeight: 1.65,
            }}
          >
            <strong style={{ color: "#0f172a" }}>Scoring:</strong>{" "}
            Content • Pronunciation • Oral Fluency
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Teacher Listening Guide"
            title="What should the teacher listen for?"
            description="Separate the response into three assessment lenses. This helps prevent a content problem from being mistaken for a fluency problem, or a pronunciation problem from being mistaken for a wrong word."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {FOCUS_AREAS.map((area) => (
              <FocusCard key={area.title} area={area} />
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Diagnostic Focus"
            title="What to listen for when something goes wrong"
            description="Use these distinctions when giving feedback. The goal is to identify the actual source of the problem rather than simply saying that the response was weak."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {DIAGNOSTIC_ITEMS.map((item) => (
              <div
                key={item.number}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderLeft: `5px solid ${item.accent}`,
                  borderRadius: "16px",
                  padding: "20px 22px",
                  boxShadow: "0 5px 14px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      background: item.accent,
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "11px",
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    {item.number}
                  </div>

                  <div>
                    <h3
                      style={{
                        margin: "2px 0 7px",
                        fontSize: "18px",
                        fontWeight: 900,
                        color: "#0f172a",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        margin: "0 0 10px",
                        color: "#52627a",
                        lineHeight: 1.6,
                        fontSize: "14px",
                      }}
                    >
                      {item.description}
                    </p>
                    <div
                      style={{
                        background: "#f8fafc",
                        borderRadius: "10px",
                        padding: "10px 12px",
                        color: "#475569",
                        fontSize: "13px",
                        lineHeight: 1.55,
                      }}
                    >
                      <strong style={{ color: item.accent }}>
                        Teacher look-for:
                      </strong>{" "}
                      {item.teacherLookFor}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Classroom Strategy"
            title="A practical teaching sequence"
            description="Build the skill progressively: first identify the important information, then organise it, then deliver a connected retell within the available time."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "16px",
            }}
          >
            {CLASSROOM_STEPS.map((item) => (
              <div
                key={item.step}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "17px",
                  padding: "22px",
                  minHeight: "180px",
                  boxShadow: "0 5px 14px rgba(15, 23, 42, 0.04)",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    background: item.colour,
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    marginBottom: "15px",
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    margin: "0 0 8px",
                    fontSize: "17px",
                    fontWeight: 900,
                    color: "#0f172a",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "#52627a",
                    fontSize: "14px",
                    lineHeight: 1.6,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Teacher Language"
            title="Useful feedback language"
            description="Keep feedback specific enough for the student to know what to practise next."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            {FEEDBACK_EXAMPLES.map((item) => (
              <div
                key={item.label}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "15px",
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "5px 9px",
                    borderRadius: "8px",
                    background: `${item.colour}14`,
                    color: item.colour,
                    fontSize: "11px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "10px",
                  }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    fontSize: "14px",
                    lineHeight: 1.65,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Quick Reference"
            title="Retell Lecture examiner checklist"
            description="Use this as a short reminder while listening to a student's response."
          />

          <div
            style={{
              background: "#ffffff",
              border: "1px solid #dbe3ee",
              borderRadius: "20px",
              padding: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "14px",
            }}
          >
            {[
              "Did the student communicate the main points of the lecture?",
              "Did the response show relationships between important ideas?",
              "Were the ideas connected rather than presented as isolated keywords?",
              "Did the student avoid spending too much time on minor details?",
              "Was the response understandable and clearly pronounced?",
              "Was the delivery smooth, natural and appropriately paced?",
              "Were hesitation, repetition and false starts limited?",
              "Did the response sound like an actual retell rather than a memorised template?",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  color: "#475569",
                  fontSize: "14px",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    color: "#059669",
                    fontWeight: 900,
                    fontSize: "18px",
                    lineHeight: 1.1,
                  }}
                >
                  {"\u2713"}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "#eef2ff",
            border: "1px solid #c7d2fe",
            borderRadius: "18px",
            padding: "22px 24px",
            color: "#4338ca",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            Official Scoring Reference
          </div>
          <p
            style={{
              margin: 0,
              color: "#4c4f78",
              fontSize: "13px",
              lineHeight: 1.65,
            }}
          >
            This teacher reference is based on the current Pearson PTE
            Academic task description and scoring guidance. It is intended as
            a practical classroom diagnostic aid and does not replace the
            official PTE score guide.
          </p>
        </section>
      </div>
    </div>
  );
}
