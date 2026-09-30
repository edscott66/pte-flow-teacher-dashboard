import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    icon: "\u{1F3AF}",
    title: "Understand the question",
    accent: "#2563eb",
    soft: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Listen carefully to the complete question before deciding what information is required.",
      "Identify the type of answer the question is asking for: a person, place, object, concept, category, number or other specific information.",
      "Do not answer from a single familiar word. The response must fit the meaning of the whole question.",
    ],
  },
  {
    icon: "\u{1F4AC}",
    title: "Give the precise answer",
    accent: "#7c3aed",
    soft: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Use the word or short phrase that directly answers the question.",
      "The response is judged as correct or incorrect, so accuracy is more important than producing a long answer.",
      "Acceptable alternatives can express the same answer when they are appropriate to the question.",
    ],
  },
  {
    icon: "\u{1F4A1}",
    title: "Keep it short",
    accent: "#059669",
    soft: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "There are no extra marks for adding unnecessary words.",
      "Students should answer clearly without turning the task into an explanation or full sentence when one or a few words are enough.",
      "Do not encourage students to keep talking simply to demonstrate fluency.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    number: "01",
    title: "Wrong answer",
    accent: "#dc2626",
    description:
      "The response does not provide the information requested by the question.",
    teacherLookFor:
      "Did the student misunderstand the question, fail to retrieve the required vocabulary, or give information that does not answer it?",
  },
  {
    number: "02",
    title: "Wrong question focus",
    accent: "#d97706",
    description:
      "The student recognises some words but answers a different part of the question.",
    teacherLookFor:
      "What exactly was the question asking for, and did the student's answer match that information?",
  },
  {
    number: "03",
    title: "Vocabulary retrieval problem",
    accent: "#7c3aed",
    description:
      "The student appears to understand the question but cannot produce the required word or short phrase.",
    teacherLookFor:
      "Is the difficulty comprehension, vocabulary access, or simply slow retrieval under time pressure?",
  },
  {
    number: "04",
    title: "Unnecessary elaboration",
    accent: "#0891b2",
    description:
      "The student gives a longer response when a short, accurate answer would have been sufficient.",
    teacherLookFor:
      "Is the extra language helping answer the question, or is the student adding information that is not needed?",
  },
  {
    number: "05",
    title: "Delayed response",
    accent: "#059669",
    description:
      "The student waits too long before giving an answer and loses control of the short response window.",
    teacherLookFor:
      "Does the student recognise the answer quickly enough to respond clearly within the available time?",
  },
  {
    number: "06",
    title: "Guessing without question fit",
    accent: "#9333ea",
    description:
      "The student produces a familiar vocabulary item that sounds plausible but does not answer the actual question.",
    teacherLookFor:
      "Can the student explain why the answer fits the question, rather than simply recognising a familiar word?",
  },
];

const CLASSROOM_STEPS = [
  {
    step: "1",
    title: "Identify the answer type",
    text:
      "Give students short questions and ask them to identify what kind of information they need before answering.",
    colour: "#2563eb",
  },
  {
    step: "2",
    title: "Listen for meaning",
    text:
      "Train students to process the complete question rather than reacting to one familiar keyword.",
    colour: "#7c3aed",
  },
  {
    step: "3",
    title: "Retrieve the key word",
    text:
      "Build rapid vocabulary recall through topic-based question-and-answer drills and short retrieval activities.",
    colour: "#d97706",
  },
  {
    step: "4",
    title: "Answer in the smallest useful form",
    text:
      "Practise giving the shortest accurate answer. If one word answers the question, do not add an unnecessary explanation.",
    colour: "#059669",
  },
  {
    step: "5",
    title: "Increase response speed",
    text:
      "Use timed rounds so students learn to respond promptly without rushing their pronunciation.",
    colour: "#0891b2",
  },
  {
    step: "6",
    title: "Review the reason for errors",
    text:
      "After each mistake, decide whether the problem came from comprehension, vocabulary retrieval, question focus or response control.",
    colour: "#db2777",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    label: "Comprehension",
    colour: "#2563eb",
    text:
      "Listen to the whole question first. Your answer matched one word you heard, but it did not answer what the question was asking.",
  },
  {
    label: "Vocabulary",
    colour: "#7c3aed",
    text:
      "You understood the question. The main problem was retrieving the specific word quickly enough.",
  },
  {
    label: "Accuracy",
    colour: "#dc2626",
    text:
      "Your response was clear, but the word did not give the information requested by the question.",
  },
  {
    label: "Conciseness",
    colour: "#059669",
    text:
      "Once you know the answer, stop. There are no extra marks for adding a longer explanation.",
  },
  {
    label: "Response speed",
    colour: "#0891b2",
    text:
      "Work on faster retrieval. Aim to recognise the question type and produce the answer without a long pause.",
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
            maxWidth: "920px",
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

export default function AnswerShortQuestionStrategy() {
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
            {"\u{1F4AC}"}
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
              SPEAKING &amp; LISTENING
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: "34px",
                lineHeight: 1.12,
                fontWeight: 900,
              }}
            >
              Answer Short Question — Examiner Strategy
            </h1>
            <p
              style={{
                margin: "12px 0 0",
                fontSize: "16px",
                lineHeight: 1.6,
                maxWidth: "920px",
                color: "rgba(255,255,255,0.94)",
              }}
            >
              A practical teacher reference for diagnosing comprehension,
              vocabulary retrieval and response accuracy when assessing Answer
              Short Question responses.
            </p>
          </div>
        </header>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Task Overview"
            title="Answer Short Question at a glance"
            description="The teacher's job is to determine whether the student understood the question and supplied the appropriate short answer. This is not a task where a longer or more fluent response earns additional marks."
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
                value: "Answer Short Question",
                background: "#eff6ff",
                border: "#bfdbfe",
                colour: "#2563eb",
              },
              {
                label: "PROMPT",
                value: "3–9 seconds",
                background: "#f5f3ff",
                border: "#ddd6fe",
                colour: "#7c3aed",
              },
              {
                label: "ANSWER TIME",
                value: "10 seconds",
                background: "#ecfdf5",
                border: "#a7f3d0",
                colour: "#059669",
              },
              {
                label: "SCORING",
                value: "Correct / Incorrect",
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
            <strong style={{ color: "#0f172a" }}>Teacher assessment focus:</strong>{" "}
            understand the question • retrieve the required vocabulary • give a
            brief and accurate response
          </div>
        </section>

        <section style={{ marginBottom: "44px" }}>
          <SectionHeading
            eyebrow="Teacher Listening Guide"
            title="What should the teacher listen for?"
            description="Keep the assessment centred on the actual task. Answer Short Question is not scored like Read Aloud, Repeat Sentence or Retell Lecture, so pronunciation and oral fluency should not become the main diagnostic targets."
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
            description="Use these distinctions to identify why an answer failed. The useful teaching diagnosis is often more specific than simply saying that the student got the question wrong."
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
            description="Build rapid question comprehension and accurate vocabulary retrieval before adding time pressure."
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
            description="Feedback should tell the student what prevented the answer from being correct and what to practise next."
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
            title="Answer Short Question examiner checklist"
            description="Use this as a short reminder while reviewing a student's response."
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
              "Did the student understand what information the question required?",
              "Did the answer directly address the question?",
              "Was the vocabulary appropriate and accurate?",
              "Was the response short enough for the task?",
              "Did the student avoid unnecessary explanation or elaboration?",
              "Was the student able to retrieve the answer promptly?",
              "If the answer was wrong, was the cause comprehension or vocabulary retrieval?",
              "Am I assessing this task according to its own scoring purpose rather than a speaking-production task?",
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
