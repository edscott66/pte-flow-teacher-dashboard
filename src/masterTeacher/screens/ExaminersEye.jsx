import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Evidence before judgement",
    icon: "\u{1F50D}",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Listen to or read the student's actual response before deciding what the problem is.",
      "Base the diagnosis on observable evidence rather than what you expected the student to say.",
      "Ask whether the evidence supports the diagnosis or whether you are making an assumption.",
      "Separate what the student produced from your interpretation of why it happened.",
    ],
  },
  {
    title: "What to listen for",
    icon: "\u{1F3A7}",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Pronunciation, word production, stress, rhythm and intelligibility.",
      "Fluency, pausing, hesitation, repetition and false starts.",
      "Meaningful omissions and genuine lexical substitutions.",
      "Whether an apparent wrong word may actually be a pronunciation distortion.",
    ],
  },
  {
    title: "What to look for",
    icon: "\u{1F441}",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Written accuracy, grammar, spelling and word order.",
      "Vocabulary choice, range and precision.",
      "Content coverage and whether the response fulfils the task.",
      "Patterns that appear repeatedly rather than isolated slips.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    number: "01",
    title: "Pronunciation or word substitution?",
    accent: "#059669",
    description:
      "A transcript or first impression may suggest that the student used a different word, but the audio may show an attempted pronunciation of the target word.",
    teacherFocus:
      "Listen to the actual production before calling it a lexical substitution. Ask whether the student's speech indicates the intended target.",
  },
  {
    number: "02",
    title: "Hesitation or fluency problem?",
    accent: "#d97706",
    description:
      "A short pause does not automatically indicate a fluency weakness. Teachers should distinguish normal planning from repeated breakdowns that disrupt delivery.",
    teacherFocus:
      "Look for a pattern of repeated hesitation, restarting, repetition or loss of control rather than treating every pause as an error.",
  },
  {
    number: "03",
    title: "Omission or inaccurate production?",
    accent: "#dc2626",
    description:
      "A word that is difficult to recognise is not necessarily missing. The student may have attempted it but produced it inaccurately.",
    teacherFocus:
      "Determine whether the word was actually attempted before diagnosing an omission.",
  },
  {
    number: "04",
    title: "Major or minor issue?",
    accent: "#7c3aed",
    description:
      "Not every error deserves equal teaching attention. A single isolated slip may have little effect compared with a repeated pattern that materially affects performance.",
    teacherFocus:
      "Ask whether the issue affects communication, task fulfilment, intelligibility or repeated performance before making it a teaching priority.",
  },
  {
    number: "05",
    title: "Isolated slip or repeated pattern?",
    accent: "#0891b2",
    description:
      "One unusual error may be accidental. A recurring error across a response or across several tasks provides stronger evidence of an underlying weakness.",
    teacherFocus:
      "Look for repetition before deciding that an issue represents a stable student weakness.",
  },
  {
    number: "06",
    title: "Content problem or language problem?",
    accent: "#db2777",
    description:
      "A weak response may result from misunderstanding the task, incomplete content, language limitations or a combination of these factors.",
    teacherFocus:
      "First establish what the student was trying to communicate and whether the required content was understood before diagnosing the language.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Listen or read without diagnosing",
    text:
      "Take in the complete response first. Avoid deciding what the problem is while the student is still producing the answer.",
  },
  {
    number: "02",
    title: "Identify the observable evidence",
    text:
      "Record what actually happened: a missing word, unclear production, repeated pause, incorrect structure, missing content or another observable feature.",
  },
  {
    number: "03",
    title: "Separate evidence from interpretation",
    text:
      "Ask whether the evidence proves the diagnosis. Do not automatically assume that an unclear word was a substitution or that a pause represents a fluency problem.",
  },
  {
    number: "04",
    title: "Check the pattern",
    text:
      "Decide whether the issue is isolated or repeated. Repeated patterns provide stronger evidence for a teaching priority.",
  },
  {
    number: "05",
    title: "Assess the impact",
    text:
      "Consider whether the issue materially affects communication, intelligibility, task fulfilment or the student's ability to demonstrate the required skill.",
  },
  {
    number: "06",
    title: "Turn the diagnosis into feedback",
    text:
      "Give the student one clear explanation of the problem and one practical action that can be used to improve it.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Evidence",
    accent: "#2563eb",
    text:
      "I heard the target word being attempted, but the pronunciation made it difficult to recognise. This is a pronunciation issue rather than a vocabulary substitution.",
  },
  {
    title: "Diagnosis",
    accent: "#059669",
    text:
      "The main issue is repeated hesitation when you are searching for language. The short pauses themselves are not the problem; the repeated breakdown in delivery is.",
  },
  {
    title: "Priority",
    accent: "#d97706",
    text:
      "This isolated error did not affect the meaning of your response. Your repeated pronunciation pattern is the more useful area to work on.",
  },
  {
    title: "Action",
    accent: "#7c3aed",
    text:
      "Practise the target words in short thought groups and focus on keeping the speech moving rather than restarting after every small mistake.",
  },
  {
    title: "Teaching target",
    accent: "#db2777",
    text:
      "The goal is not simply to remove this one error. We want to build a more reliable pattern that you can use across different tasks.",
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

      {description && (
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
      )}
    </div>
  );
}

function FocusCard({ area }) {
  return (
    <div
      style={{
        background: area.background,
        border: `1px solid ${area.border}`,
        borderTop: `4px solid ${area.accent}`,
        borderRadius: "14px",
        padding: "18px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "11px",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            flexShrink: 0,
            borderRadius: "11px",
            background: "#ffffff",
            border: `1px solid ${area.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "21px",
          }}
        >
          {area.icon}
        </div>

        <h3
          style={{
            margin: 0,
            color: area.accent,
            fontSize: "16px",
            fontWeight: 900,
            lineHeight: 1.3,
          }}
        >
          {area.title}
        </h3>
      </div>

      <div>
        {area.points.map((point) => (
          <div
            key={point}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "8px",
              color: "#475569",
              fontSize: "12px",
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                color: area.accent,
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
    </div>
  );
}

function DiagnosticCard({ item }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "13px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          flexShrink: 0,
          borderRadius: "10px",
          background: `${item.accent}12`,
          border: `1px solid ${item.accent}35`,
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

      <div style={{ flex: 1, minWidth: 0 }}>
        <h4
          style={{
            margin: "1px 0 5px",
            color: "#334155",
            fontSize: "13px",
            fontWeight: 900,
          }}
        >
          {item.title}
        </h4>

        <p
          style={{
            margin: "0 0 7px",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          {item.description}
        </p>

        <div
          style={{
            padding: "8px 10px",
            background: "#f8fafc",
            borderLeft: `3px solid ${item.accent}`,
            borderRadius: "0 7px 7px 0",
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          <strong style={{ color: item.accent }}>Teacher focus:</strong>{" "}
          {item.teacherFocus}
        </div>
      </div>
    </div>
  );
}

function ClassroomStep({ step }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "13px",
        padding: "14px 0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          flexShrink: 0,
          borderRadius: "10px",
          background: "#f5f3ff",
          border: "1px solid #ddd6fe",
          color: "#7c3aed",
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
        <h4
          style={{
            margin: "1px 0 5px",
            color: "#334155",
            fontSize: "13px",
            fontWeight: 900,
          }}
        >
          {step.title}
        </h4>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.65,
          }}
        >
          {step.text}
        </p>
      </div>
    </div>
  );
}

function FeedbackCard({ item }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "14px 15px",
        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "4px 8px",
          borderRadius: "999px",
          background: `${item.accent}12`,
          border: `1px solid ${item.accent}30`,
          color: item.accent,
          fontSize: "10px",
          fontWeight: 900,
          marginBottom: "9px",
        }}
      >
        {item.title}
      </div>

      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "12px",
          lineHeight: 1.65,
        }}
      >
        {item.text}
      </p>
    </div>
  );
}

export default function ExaminersEye() {
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
          {"\u{1F441}"}
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
            Examiner's Eye
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
            Develop a consistent teacher approach to identifying the evidence
            that matters when evaluating a student response.
          </p>
        </div>
      </div>

      {/* Evidence first */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="The examiner mindset"
          title="Evidence before judgement"
          description="The most useful teacher diagnosis begins with what the student actually produced. Establish the evidence first, then decide what it means."
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
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "12px",
            }}
          >
            {[
              "What did the student actually say or produce?",
              "What evidence supports the diagnosis?",
              "Could there be another explanation for what I heard or saw?",
              "Am I diagnosing from evidence or from assumption?",
            ].map((question, index) => (
              <div
                key={question}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "13px",
                  background: "#ecfdf5",
                  border: "1px solid #d1fae5",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "26px",
                    height: "26px",
                    flexShrink: 0,
                    borderRadius: "8px",
                    background: "#ffffff",
                    border: "1px solid #a7f3d0",
                    color: "#059669",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: 900,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <span
                  style={{
                    color: "#334155",
                    fontSize: "12px",
                    lineHeight: 1.55,
                    fontWeight: 700,
                  }}
                >
                  {question}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core observation areas */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Core observation areas"
          title="What to listen for and what to look for"
          description="Focus on observable features of the response before deciding which diagnostic category best explains the problem."
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

      {/* Major vs minor */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Diagnostic judgement"
          title="Major issues versus minor issues"
          description="Teachers do not need to treat every imperfection as an equally important teaching problem. Prioritise issues according to evidence, repetition and impact."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "#fff7ed",
              border: "1px solid #fed7aa",
              borderTop: "4px solid #d97706",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px",
                color: "#c2410c",
                fontSize: "16px",
                fontWeight: 900,
              }}
            >
              Give priority to issues that:
            </h3>

            <div style={{ display: "grid", gap: "8px" }}>
              {[
                "Materially affect communication or intelligibility.",
                "Prevent the student from fulfilling the task.",
                "Appear repeatedly across the response.",
                "Indicate an underlying weakness that can be addressed through teaching.",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    color: "#475569",
                    fontSize: "12px",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      color: "#d97706",
                      fontWeight: 900,
                    }}
                  >
                    {"\u2022"}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "#f8fafc",
              border: "1px solid #cbd5e1",
              borderTop: "4px solid #64748b",
              borderRadius: "14px",
              padding: "18px",
            }}
          >
            <h3
              style={{
                margin: "0 0 10px",
                color: "#475569",
                fontSize: "16px",
                fontWeight: 900,
              }}
            >
              Be cautious about over-correcting:
            </h3>

            <div style={{ display: "grid", gap: "8px" }}>
              {[
                "An isolated slip that does not represent a pattern.",
                "A minor imperfection that does not affect meaning.",
                "A short planning pause that does not disrupt delivery.",
                "A pronunciation difference that remains clearly intelligible.",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "8px",
                    alignItems: "flex-start",
                    color: "#475569",
                    fontSize: "12px",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      color: "#64748b",
                      fontWeight: 900,
                    }}
                  >
                    {"\u2022"}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Similar error types */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Common diagnostic distinctions"
          title="Distinguish similar error types"
          description="Similar-looking problems can require completely different teaching responses. Diagnose from the evidence rather than from the surface appearance of the error."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item) => (
            <DiagnosticCard key={item.number} item={item} />
          ))}
        </div>
      </section>

      {/* Examiner workflow */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Practical examiner workflow"
          title="Evidence → diagnosis → feedback"
          description="Use the same sequence consistently so that assessment leads to a useful teaching decision."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "14px",
            padding: "8px 18px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          {CLASSROOM_STEPS.map((step) => (
            <ClassroomStep key={step.number} step={step} />
          ))}
        </div>
      </section>

      {/* Feedback language */}
      <section style={{ marginBottom: "30px" }}>
        <SectionHeading
          eyebrow="Teacher feedback"
          title="Turn evidence into actionable feedback"
          description="The purpose of diagnosis is not simply to label an error. It is to identify the most useful teaching target and give the student a clear next action."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((item) => (
            <FeedbackCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section>
        <div
          style={{
            background: "linear-gradient(135deg, #ecfdf5 0%, #f8fafc 100%)",
            border: "1px solid #a7f3d0",
            borderRadius: "14px",
            padding: "20px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: "#059669",
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
            The Examiner's Eye
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              {
                label: "1. Evidence",
                text: "What actually happened?",
                colour: "#2563eb",
                background: "#eff6ff",
                border: "#bfdbfe",
              },
              {
                label: "2. Diagnosis",
                text: "What does the evidence show?",
                colour: "#059669",
                background: "#ecfdf5",
                border: "#a7f3d0",
              },
              {
                label: "3. Feedback",
                text: "What should the student do next?",
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
                    fontSize: "11px",
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