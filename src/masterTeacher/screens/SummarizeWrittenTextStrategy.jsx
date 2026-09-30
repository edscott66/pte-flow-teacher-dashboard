import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Content",
    icon: "\u{1F4D6}",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify the main point of the passage and the essential supporting information.",
      "Condense the important ideas without misrepresenting the topic or purpose.",
      "Leave out minor examples and details that do not contribute to the central meaning.",
    ],
  },
  {
    title: "Form & Organisation",
    icon: "\u{1F4CF}",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Produce exactly one sentence between 5 and 75 words.",
      "Connect the main idea and supporting information into one coherent structure.",
      "Use a compound or complex sentence when it helps combine the key ideas naturally.",
    ],
  },
  {
    title: "Grammar & Vocabulary",
    icon: "\u{1F4DA}",
    accent: "#059669",
    accentLight: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Use grammatically accurate sentence structures that clearly express the relationships between ideas.",
      "Choose vocabulary that is relevant to the passage and appropriate for an academic context.",
      "Use synonyms appropriately without changing the original meaning.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Missing key point",
    accent: "#2563eb",
    description:
      "The summary contains some relevant information but leaves out an important idea needed to represent the passage accurately.",
    teacherFocus:
      "Check whether the main idea and essential supporting points are both represented.",
  },
  {
    title: "Misinterpreted meaning",
    accent: "#d97706",
    description:
      "The student changes the topic, purpose or meaning of the passage while trying to condense it.",
    teacherFocus:
      "Compare the summary with the central meaning before focusing on grammar or vocabulary.",
  },
  {
    title: "Too much detail",
    accent: "#0891b2",
    description:
      "The response includes minor examples or repeated information while important ideas receive too little attention.",
    teacherFocus:
      "Teach the student to prioritise main ideas and essential supporting information.",
  },
  {
    title: "Sentence-boundary problem",
    accent: "#7c3aed",
    description:
      "The response does not meet the one-sentence requirement because separate sentences are created.",
    teacherFocus:
      "Check the final punctuation and sentence structure before assessing language quality.",
  },
  {
    title: "Grammar problem",
    accent: "#059669",
    description:
      "The ideas are relevant, but clause structure, agreement, tense, word order or other grammatical problems reduce accuracy.",
    teacherFocus:
      "Identify the specific grammatical relationship that needs teaching rather than correcting everything at once.",
  },
  {
    title: "Vocabulary problem",
    accent: "#db2777",
    description:
      "Word choice is inaccurate, inappropriate for the context, or changes the meaning of the source text.",
    teacherFocus:
      "Check whether vocabulary expresses the passage meaning accurately and naturally.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Find the central message",
    description:
      "Teach students to identify what the passage is mainly about before trying to rewrite any details.",
    prompt:
      "If you had to explain the whole passage in one short idea, what would it be?",
  },
  {
    number: "02",
    title: "Select essential support",
    description:
      "Choose only the supporting points that are necessary to explain or develop the main idea.",
    prompt:
      "Which supporting information is essential and which details can be removed?",
  },
  {
    number: "03",
    title: "Group related ideas",
    description:
      "Combine related points before writing so the final sentence expresses relationships rather than a list of disconnected facts.",
    prompt:
      "Which ideas naturally belong together in the same clause or phrase?",
  },
  {
    number: "04",
    title: "Build one sentence",
    description:
      "Use a main clause with a suitable subordinate clause or coordinated structure to combine the selected ideas.",
    prompt:
      "What grammatical structure will connect these ideas most clearly?",
  },
  {
    number: "05",
    title: "Paraphrase accurately",
    description:
      "Use the passage language selectively and introduce appropriate synonyms where they preserve the original meaning.",
    prompt:
      "Can I express this idea differently without changing what the passage means?",
  },
  {
    number: "06",
    title: "Check form and language",
    description:
      "Leave time to verify the one-sentence requirement, word count, grammar, vocabulary and punctuation.",
    prompt:
      "Is this one sentence, between 5 and 75 words, accurate and complete?",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Content",
    accent: "#2563eb",
    text:
      "You identified the topic, but one essential supporting point was missing. Keep the main idea and the most important supporting information before adding minor details.",
  },
  {
    title: "Form",
    accent: "#7c3aed",
    text:
      "Your ideas were relevant, but you used two sentences. Combine the ideas with a suitable conjunction or relative clause so the response remains one sentence.",
  },
  {
    title: "Grammar",
    accent: "#059669",
    text:
      "The selected ideas were good, but the relationship between the clauses was unclear. Practise building the main clause first and then attach the supporting idea accurately.",
  },
  {
    title: "Vocabulary",
    accent: "#db2777",
    text:
      "Your summary included the right idea, but one word changed the meaning. Choose vocabulary that fits the original context before trying to make the language more advanced.",
  },
  {
    title: "Conciseness",
    accent: "#d97706",
    text:
      "You included several useful details, but some were not essential. Focus on the main point and the supporting information that explains it most directly.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <div
        style={{
          color: "#64748b",
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "5px",
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
        background: area.accentLight,
        border: `1px solid ${area.border}`,
        borderTop: `4px solid ${area.accent}`,
        borderRadius: "12px",
        padding: "16px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "12px",
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
            fontSize: "15px",
            fontWeight: 900,
          }}
        >
          {area.title}
        </h3>
      </div>

      {area.points.map((point) => (
        <div
          key={point}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "8px",
            color: "#475569",
            fontSize: "11px",
            lineHeight: 1.5,
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
  );
}

export default function SummarizeWrittenTextStrategy() {
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
        }}
      >
        {"\u2190"} Back to Strategy Vault
      </button>

      <div
        style={{
          background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
          borderRadius: "18px",
          padding: "30px",
          color: "#ffffff",
          boxShadow: "0 12px 30px rgba(37, 99, 235, 0.18)",
          display: "flex",
          alignItems: "center",
          gap: "22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "78px",
            height: "78px",
            flexShrink: 0,
            borderRadius: "18px",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "38px",
          }}
        >
          {"\u{1F4DD}"}
        </div>

        <div>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "8px",
              opacity: 0.9,
            }}
          >
            Reading & Writing
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Summarize Written Text — Examiner Strategy
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              fontSize: "14px",
              lineHeight: 1.65,
              maxWidth: "850px",
              opacity: 0.92,
            }}
          >
            A practical teacher reference for evaluating whether a student can
            identify, condense and accurately express the essential ideas of an
            academic passage in one sentence.
          </p>
        </div>
      </div>

      <section style={{ marginTop: "28px" }}>
        <SectionHeading
          eyebrow="Task overview"
          title="Summarize Written Text at a glance"
          description="The teacher's job is to determine whether the student has understood the passage, selected the essential information and expressed it accurately in the required one-sentence format."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            {
              label: "TASK",
              value: "Summarize Written Text",
              color: "#2563eb",
              background: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              label: "PASSAGE",
              value: "Up to 300 words",
              color: "#7c3aed",
              background: "#f5f3ff",
              border: "#ddd6fe",
            },
            {
              label: "TIME",
              value: "10 minutes",
              color: "#059669",
              background: "#ecfdf5",
              border: "#a7f3d0",
            },
            {
              label: "RESPONSE",
              value: "1 sentence • 5–75 words",
              color: "#d97706",
              background: "#fffbeb",
              border: "#fde68a",
            },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: item.background,
                border: `1px solid ${item.border}`,
                borderRadius: "12px",
                padding: "18px",
                minHeight: "92px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  color: "#64748b",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  marginBottom: "9px",
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  color: item.color,
                  fontSize: "16px",
                  fontWeight: 900,
                  lineHeight: 1.35,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <SectionHeading
          eyebrow="Teacher assessment guide"
          title="What should the teacher look for?"
          description="Assess the response as a compressed representation of the source text. The first question is whether the student has captured the meaning; only then should you diagnose form, grammar and vocabulary."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "14px",
          }}
        >
          {FOCUS_AREAS.map((area) => (
            <FocusCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <SectionHeading
          eyebrow="Diagnostic focus"
          title="Common problems to identify"
          description="Use these distinctions to identify the actual teaching problem. Do not treat every weak summary as simply a grammar or vocabulary problem."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: `4px solid ${item.accent}`,
                borderRadius: "10px",
                padding: "14px 16px",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 5px",
                  color: "#334155",
                  fontSize: "13px",
                  fontWeight: 900,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: "0 0 8px",
                  color: "#64748b",
                  fontSize: "11px",
                  lineHeight: 1.55,
                }}
              >
                {item.description}
              </p>

              <div
                style={{
                  padding: "8px 10px",
                  borderRadius: "7px",
                  background: "#f8fafc",
                  color: item.accent,
                  fontSize: "10px",
                  fontWeight: 800,
                  lineHeight: 1.45,
                }}
              >
                Teacher focus: {item.teacherFocus}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <SectionHeading
          eyebrow="Classroom strategy"
          title="A practical teaching sequence"
          description="Build the skill progressively: identify meaning first, organise the essential information, then construct and check the single sentence."
        />

        <div style={{ display: "grid", gap: "10px" }}>
          {CLASSROOM_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "52px 1fr",
                gap: "14px",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "11px",
                padding: "14px",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.03)",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "10px",
                  background: "#eff6ff",
                  border: "1px solid #bfdbfe",
                  color: "#2563eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: 900,
                }}
              >
                {step.number}
              </div>

              <div>
                <h3
                  style={{
                    margin: "1px 0 5px",
                    color: "#334155",
                    fontSize: "13px",
                    fontWeight: 900,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: "0 0 7px",
                    color: "#64748b",
                    fontSize: "11px",
                    lineHeight: 1.55,
                  }}
                >
                  {step.description}
                </p>

                <div
                  style={{
                    display: "inline-block",
                    padding: "6px 9px",
                    borderRadius: "7px",
                    background: "#f8fafc",
                    color: "#475569",
                    fontSize: "10px",
                    fontWeight: 800,
                  }}
                >
                  Teacher prompt: {step.prompt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <SectionHeading
          eyebrow="Teacher language"
          title="Useful feedback examples"
          description="Keep feedback tied to the student's evidence and to the specific requirement that needs improvement."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((example) => (
            <div
              key={example.title}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderTop: `3px solid ${example.accent}`,
                borderRadius: "10px",
                padding: "14px",
              }}
            >
              <div
                style={{
                  color: example.accent,
                  fontSize: "10px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: "7px",
                }}
              >
                {example.title}
              </div>

              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                {example.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "30px" }}>
        <SectionHeading
          eyebrow="Quick reference"
          title="Examiner checklist"
          description="Before deciding what the student should practise next, check the response against these points."
        />

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #cbd5e1",
            borderLeft: "4px solid #059669",
            borderRadius: "12px",
            padding: "18px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          {[
            "Does the response accurately represent the main point of the passage?",
            "Are the essential supporting points included?",
            "Has the student avoided unnecessary minor details?",
            "Is the response exactly one sentence?",
            "Is the response between 5 and 75 words?",
            "Are the clauses connected clearly and logically?",
            "Is the grammar accurate enough to express the intended meaning?",
            "Is the vocabulary relevant, appropriate and accurate?",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "9px",
                marginBottom: "9px",
                color: "#475569",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  width: "18px",
                  height: "18px",
                  flexShrink: 0,
                  borderRadius: "5px",
                  background: "#ecfdf5",
                  border: "1px solid #a7f3d0",
                  color: "#059669",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 900,
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
          marginTop: "30px",
          marginBottom: "10px",
          background: "#f8fafc",
          border: "1px solid #cbd5e1",
          borderRadius: "12px",
          padding: "16px 18px",
        }}
      >
        <div
          style={{
            color: "#475569",
            fontSize: "10px",
            fontWeight: 900,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            marginBottom: "6px",
          }}
        >
          Official scoring reference
        </div>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          This teacher reference is based on Pearson PTE Academic's current
          published task description and scoring guidance for Summarize Written
          Text. Always use the current official PTE materials when making final
          decisions about test requirements or scoring.
        </p>
      </section>
    </div>
  );
}
