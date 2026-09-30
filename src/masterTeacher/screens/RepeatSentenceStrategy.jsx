import React from "react";

const FOCUS_AREAS = [
  {
    title: "Content",
    icon: "\u{1F9E0}",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    description:
      "Check how much of the heard sentence the student reproduces and whether the words remain in the correct sequence.",
    points: [
      "Listen for the key word sequences the student retained.",
      "Watch for omissions and insertions.",
      "Watch for genuine lexical substitutions.",
      "Separate incomplete recall from unclear pronunciation where possible.",
    ],
  },
  {
    title: "Pronunciation",
    icon: "\u{1F50A}",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    description:
      "Judge whether the student's spoken production is sufficiently clear and understandable to a regular English speaker.",
    points: [
      "Listen for clear vowels and consonants.",
      "Check word and phrase stress.",
      "Consider intelligibility rather than accent conformity.",
      "Do not treat every unclear word as a content substitution.",
    ],
  },
  {
    title: "Oral Fluency",
    icon: "\u{1F3A4}",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    description:
      "Listen for a smooth, natural delivery with appropriate rhythm, phrasing and rate after the listening prompt ends.",
    points: [
      "Listen for unnecessary hesitation.",
      "Notice repetitions and false starts.",
      "Check whether the student starts promptly and maintains flow.",
      "Listen for natural phrasing and sentence stress.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    label: "Omission",
    color: "#2563eb",
    background: "#eff6ff",
    description:
      "A word or phrase from the prompt is not reproduced. Treat this as a content/recall issue rather than automatically assuming pronunciation caused it.",
  },
  {
    label: "Substitution",
    color: "#d97706",
    background: "#fffbeb",
    description:
      "The student produces a different lexical word. Use this when the evidence supports a genuine substitution rather than a distorted production of the target.",
  },
  {
    label: "Word-order problem",
    color: "#0891b2",
    background: "#ecfeff",
    description:
      "The student remembers relevant words but changes their sequence. Diagnose the retained sequence separately from pronunciation and fluency.",
  },
  {
    label: "Pronunciation error",
    color: "#059669",
    background: "#ecfdf5",
    description:
      "The student appears to be attempting the target word, but the sound production is distorted or unclear. Do not automatically classify this as a substitution.",
  },
  {
    label: "Hesitation / restart",
    color: "#7c3aed",
    background: "#f5f3ff",
    description:
      "The student pauses, repeats or restarts. Consider the effect on fluency separately from the amount of sentence content retained.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Listen for meaning",
    description:
      "Teacher plays the sentence once and helps the student focus on the overall meaning before trying to reproduce every word.",
  },
  {
    number: "02",
    title: "Mark thought groups",
    description:
      "Divide the sentence into meaningful phrases so the student can organise the message into manageable chunks.",
  },
  {
    number: "03",
    title: "Shadow the model",
    description:
      "Student repeats closely after the model, concentrating on rhythm, phrasing, stress and the shape of each phrase.",
  },
  {
    number: "04",
    title: "Controlled repetition",
    description:
      "Student repeats the sentence again, aiming to recover more correct word sequences without rushing or restarting.",
  },
  {
    number: "05",
    title: "Independent attempt",
    description:
      "Student listens once and repeats independently, then receives focused feedback on the highest-priority problem.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    problem: "Content",
    feedback:
      "You captured the main part of the sentence, but some words were lost. Focus on holding each thought group in your memory before moving to the next one.",
  },
  {
    problem: "Word sequence",
    feedback:
      "You remembered most of the words, but two phrases changed order. Practise the sentence in short meaning groups rather than remembering isolated words.",
  },
  {
    problem: "Pronunciation",
    feedback:
      "The target word was recognisable, but one or two sounds were unclear. Work on the target sound first, then practise it again inside the complete phrase.",
  },
  {
    problem: "Fluency",
    feedback:
      "Your recall was fairly accurate, but the delivery became hesitant. Practise the thought groups smoothly so you can keep moving forward without restarting.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      {eyebrow && (
        <div
          style={{
            display: "inline-block",
            padding: "4px 8px",
            borderRadius: "999px",
            background: "#e0e7ff",
            color: "#4338ca",
            fontSize: "10px",
            fontWeight: 800,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          {eyebrow}
        </div>
      )}

      <h2
        style={{
          margin: 0,
          color: "#334155",
          fontSize: "18px",
          lineHeight: 1.3,
          fontWeight: 800,
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            margin: "5px 0 0",
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.6,
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
        padding: "17px",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: "38px",
            height: "38px",
            flexShrink: 0,
            borderRadius: "10px",
            background: "#ffffff",
            border: `1px solid ${area.border}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "19px",
          }}
        >
          {area.icon}
        </div>

        <h3
          style={{
            margin: 0,
            color: area.accent,
            fontSize: "16px",
            fontWeight: 800,
          }}
        >
          {area.title}
        </h3>
      </div>

      <p
        style={{
          margin: "0 0 12px",
          color: "#475569",
          fontSize: "12px",
          lineHeight: 1.6,
        }}
      >
        {area.description}
      </p>

      {area.points.map((point) => (
        <div
          key={point}
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
              color: area.accent,
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

export default function RepeatSentenceStrategy() {
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
          marginBottom: "12px",
        }}
      >
        <button
          type="button"
          onClick={() => window.history.back()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "8px 12px",
            borderRadius: "9px",
            border: "1px solid #bfdbfe",
            background: "#eff6ff",
            color: "#1d4ed8",
            fontSize: "11px",
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          {"\u2190"} Back to Strategy Vault
        </button>
      </div>

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
            display: "flex",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              flexShrink: 0,
              borderRadius: "12px",
              background: "#dbeafe",
              border: "1px solid #93c5fd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
          >
            {"\u{1F3A7}"}
          </div>

          <div>
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
                marginBottom: "7px",
              }}
            >
              Speaking &amp; Listening
            </div>

            <h1
              style={{
                margin: 0,
                color: "#1e3a8a",
                fontSize: "25px",
                lineHeight: 1.2,
                fontWeight: 800,
              }}
            >
              Repeat Sentence — Examiner Strategy
            </h1>

            <p
              style={{
                margin: "8px 0 0",
                color: "#64748b",
                fontSize: "13px",
                lineHeight: 1.65,
                maxWidth: "900px",
              }}
            >
              A teacher-focused guide to evaluating Repeat Sentence responses,
              diagnosing the source of problems, and turning listening evidence
              into practical classroom instruction.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "18px",
        }}
      >
        {FOCUS_AREAS.map((area) => (
          <FocusCard key={area.title} area={area} />
        ))}
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderLeft: "4px solid #059669",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <SectionHeading
          eyebrow="Teacher Perspective"
          title="What should the teacher listen for?"
          description="Start with what the student actually retained from the audio. Diagnose the main problem before deciding what to teach."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {[
            {
              label: "Listen for meaning",
              text: "A student who understands the sentence may retain meaningful chunks more successfully than isolated words. Use that evidence when deciding what to practise.",
            },
            {
              label: "Check word sequences",
              text: "Repeat Sentence content is based on correct word sequences. Look at which phrases were retained, omitted or changed rather than judging only the overall impression.",
            },
            {
              label: "Listen beyond the transcript",
              text: "If a word appears different, consider whether the student actually produced another word or was attempting the target but pronounced it unclearly.",
            },
            {
              label: "Separate the traits",
              text: "A student can retain much of the sentence while still having a pronunciation or fluency problem. Keep the diagnoses separate.",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                padding: "13px 14px",
                borderRadius: "10px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  color: "#047857",
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
                  fontSize: "12px",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #fde68a",
          borderTop: "4px solid #d97706",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <SectionHeading
          eyebrow="Diagnostic Focus"
          title="Do not confuse these problems"
          description="Accurate diagnosis is more useful than simply marking a response as incomplete."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{
                padding: "13px 14px",
                borderRadius: "10px",
                background: item.background,
                border: `1px solid ${item.color}30`,
              }}
            >
              <div
                style={{
                  color: item.color,
                  fontSize: "12px",
                  fontWeight: 900,
                  marginBottom: "5px",
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #ddd6fe",
          borderTop: "4px solid #7c3aed",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <SectionHeading
          eyebrow="Classroom Strategy"
          title="A simple teaching sequence"
          description="Move from understanding the sentence to independent reproduction while keeping feedback focused."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "10px",
          }}
        >
          {CLASSROOM_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                padding: "13px",
                borderRadius: "10px",
                background: "#f5f3ff",
                border: "1px solid #ddd6fe",
              }}
            >
              <div
                style={{
                  color: "#7c3aed",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.05em",
                  marginBottom: "5px",
                }}
              >
                STEP {step.number}
              </div>

              <div
                style={{
                  color: "#334155",
                  fontSize: "12px",
                  fontWeight: 800,
                  marginBottom: "5px",
                }}
              >
                {step.title}
              </div>

              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  lineHeight: 1.55,
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #a5f3fc",
          borderTop: "4px solid #0891b2",
          borderRadius: "14px",
          padding: "20px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <SectionHeading
          eyebrow="Teacher Language"
          title="Useful feedback examples"
          description="Keep feedback specific enough that the student knows what to practise next."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.problem}
              style={{
                padding: "13px 14px",
                borderRadius: "10px",
                background: "#ecfeff",
                border: "1px solid #a5f3fc",
              }}
            >
              <div
                style={{
                  color: "#0e7490",
                  fontSize: "11px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginBottom: "5px",
                }}
              >
                {item.problem}
              </div>

              <div
                style={{
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                {item.feedback}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          background: "#ffffff",
          border: "1px solid #bfdbfe",
          borderLeft: "4px solid #2563eb",
          borderRadius: "14px",
          padding: "18px",
          boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
        }}
      >
        <SectionHeading
          eyebrow="Quick Reference"
          title="Repeat Sentence examiner checklist"
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "10px",
          }}
        >
          {[
            "Which word sequences did the student reproduce correctly?",
            "Were important words omitted, inserted or replaced?",
            "Were retained words produced clearly enough to understand?",
            "Was the delivery smooth and reasonably consistent?",
            "Were hesitations, repetitions or restarts noticeable?",
            "Was phrasing, stress and intonation appropriate?",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                padding: "10px 11px",
                borderRadius: "9px",
                background: "#eff6ff",
                border: "1px solid #dbeafe",
                color: "#475569",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: "#2563eb",
                  fontWeight: 900,
                }}
              >
                {"\u2713"}
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "18px",
          padding: "12px 14px",
          borderRadius: "10px",
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
          color: "#64748b",
          fontSize: "10px",
          lineHeight: 1.55,
        }}
      >
        <strong style={{ color: "#475569" }}>
          Official scoring reference:
        </strong>{" "}
        Pearson PTE Academic describes Repeat Sentence in terms of Content,
        Pronunciation and Oral Fluency. This teacher resource is intended as
        practical guidance for classroom diagnosis and feedback; it does not
        replace the official PTE Score Guide.
      </div>
    </div>
  );
}