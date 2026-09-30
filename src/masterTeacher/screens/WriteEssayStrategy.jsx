import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Content",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
    description:
      "Check whether the response addresses all aspects of the prompt and develops a relevant position with appropriate support.",
  },
  {
    title: "Form",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
    description:
      "Check the required essay length and whether the response follows the expected written format.",
  },
  {
    title: "Development, Structure & Coherence",
    accent: "#7c3aed",
    background: "#f5f3ff",
    border: "#ddd6fe",
    description:
      "Check whether ideas are developed logically, connected clearly and organised into a coherent response.",
  },
  {
    title: "Grammar",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
    description:
      "Check sentence structure, grammatical control, punctuation and capitalization.",
  },
  {
    title: "General Linguistic Range",
    accent: "#0891b2",
    background: "#ecfeff",
    border: "#a5f3fc",
    description:
      "Check whether language precisely communicates ideas, including the use of varied and appropriately complex structures.",
  },
  {
    title: "Vocabulary Range",
    accent: "#db2777",
    background: "#fdf2f8",
    border: "#fbcfe8",
    description:
      "Check the variety, precision and appropriateness of vocabulary in an academic context.",
  },
  {
    title: "Spelling",
    accent: "#475569",
    background: "#f8fafc",
    border: "#cbd5e1",
    description:
      "Check accurate and consistent spelling throughout the response.",
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Off-topic or incomplete response",
    text:
      "The student may write a fluent essay but fail to address one or more parts of the prompt. Check task coverage before judging language quality.",
  },
  {
    title: "Position without development",
    text:
      "A clear opinion is not enough by itself; look for relevant explanations, examples or details that develop the student's main ideas.",
  },
  {
    title: "Ideas listed rather than connected",
    text:
      "Separate points can sound impressive but may not form a coherent argument. Check whether relationships between ideas are made clear.",
  },
  {
    title: "Weak paragraph development",
    text:
      "A paragraph should have a clear purpose and develop its main idea rather than simply adding several loosely related statements.",
  },
  {
    title: "Language complexity without control",
    text:
      "Do not reward complexity simply because a sentence is long. Check whether complex structures communicate the intended meaning accurately.",
  },
  {
    title: "Vocabulary variety without precision",
    text:
      "A wide range of words is useful only when the choices are accurate, relevant and appropriate to the context.",
  },
  {
    title: "Form problem",
    text:
      "Check the word count and basic written form before spending time diagnosing higher-level language features.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Analyse the prompt",
    text:
      "Identify the topic, the task instruction, the viewpoint or question being asked, and any specific aspects that must be addressed.",
  },
  {
    number: "02",
    title: "Establish the position",
    text:
      "Help the student decide what they actually think before drafting. The position should remain clear and consistent throughout the essay.",
  },
  {
    number: "03",
    title: "Select two main ideas",
    text:
      "Choose relevant ideas that can be explained and supported within the available time rather than collecting many undeveloped points.",
  },
  {
    number: "04",
    title: "Develop each idea",
    text:
      "Add an explanation, example, consequence or other relevant support so that each body paragraph moves beyond a simple assertion.",
  },
  {
    number: "05",
    title: "Build a logical structure",
    text:
      "Use a clear introduction, developed body paragraphs and a conclusion that fits the argument and connects logically with what came before.",
  },
  {
    number: "06",
    title: "Proofread strategically",
    text:
      "Reserve time to check form, sentence structure, grammar, punctuation, spelling and vocabulary choices rather than continuing to add ideas until time expires.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    area: "Content",
    accent: "#2563eb",
    text:
      "Your position is clear, but one part of the question is not fully addressed. Make sure every element of the prompt is covered before adding more detail.",
  },
  {
    area: "Development",
    accent: "#7c3aed",
    text:
      "You have a relevant main idea, but the explanation stops too early. Add a specific reason or example that shows why the idea supports your position.",
  },
  {
    area: "Structure & Coherence",
    accent: "#7c3aed",
    text:
      "Your points are relevant, but the relationship between them is not always clear. Give each paragraph a clear purpose and use connections that show how the ideas relate.",
  },
  {
    area: "Grammar",
    accent: "#059669",
    text:
      "Your meaning is generally clear, but several sentence structures are not controlled consistently. Focus on accurate complex sentences rather than making every sentence more complicated.",
  },
  {
    area: "General Linguistic Range",
    accent: "#0891b2",
    text:
      "You communicate the main ideas clearly, but your language is often repetitive. Practise changing sentence structures and expressing relationships between ideas more precisely.",
  },
  {
    area: "Vocabulary",
    accent: "#db2777",
    text:
      "You have relevant vocabulary, but some word choices are too general or imprecise. Choose words that communicate the exact relationship or meaning you intend.",
  },
  {
    area: "Spelling",
    accent: "#475569",
    text:
      "Your ideas are understandable, but spelling errors are recurring. Build a short proofreading routine that checks common problem words before you submit.",
  },
];

function SectionLabel({ children, accent = "#2563eb" }) {
  return (
    <div
      style={{
        color: accent,
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        marginBottom: "7px",
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ label, value, accent, background, border }) {
  return (
    <div
      style={{
        background,
        border: `1px solid ${border}`,
        borderRadius: "13px",
        padding: "17px 18px",
        minHeight: "88px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          color: "#64748b",
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: accent,
          fontSize: "15px",
          fontWeight: 900,
          lineHeight: 1.35,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function FocusCard({ area }) {
  return (
    <div
      style={{
        background: area.background,
        border: `1px solid ${area.border}`,
        borderRadius: "13px",
        padding: "17px",
        minHeight: "142px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "5px 8px",
          borderRadius: "999px",
          background: "#ffffff",
          border: `1px solid ${area.border}`,
          color: area.accent,
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.04em",
          marginBottom: "10px",
        }}
      >
        {area.title}
      </div>

      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "12px",
          lineHeight: 1.65,
        }}
      >
        {area.description}
      </p>
    </div>
  );
}

function DiagnosticCard({ item, index }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "12px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        padding: "15px",
        boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          flexShrink: 0,
          borderRadius: "9px",
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
        {String(index + 1).padStart(2, "0")}
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
          {item.title}
        </h4>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "12px",
            lineHeight: 1.6,
          }}
        >
          {item.text}
        </p>
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

export default function WriteEssayStrategy() {
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
      {/* Header */}

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
        }}
      >
        {"\u2190"} Back to Strategy Vault
      </button>


      <div
        style={{
          background: "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
          borderRadius: "16px",
          padding: "30px 32px",
          color: "#ffffff",
          boxShadow: "0 12px 28px rgba(37, 99, 235, 0.18)",
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "68px",
            height: "68px",
            flexShrink: 0,
            borderRadius: "15px",
            background: "rgba(255,255,255,0.10)",
            border: "1px solid rgba(255,255,255,0.30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
          }}
        >
          {"\u270D\uFE0F"}
        </div>

        <div>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              opacity: 0.9,
              marginBottom: "8px",
            }}
          >
            Reading &amp; Writing
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "30px",
              lineHeight: 1.15,
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Write Essay — Examiner Strategy
          </h1>

          <p
            style={{
              margin: "10px 0 0",
              maxWidth: "880px",
              fontSize: "13px",
              lineHeight: 1.65,
              opacity: 0.95,
            }}
          >
            A practical teacher reference for evaluating how effectively a
            student develops a position, organises ideas, supports arguments
            and controls standard written English.
          </p>
        </div>
      </div>

      {/* Task overview */}
      <section style={{ marginTop: "30px" }}>
        <SectionLabel>Task Overview</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "26px",
            lineHeight: 1.25,
            fontWeight: 900,
          }}
        >
          Write Essay at a glance
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "960px",
          }}
        >
          The teacher's first job is to establish whether the student has
          answered the actual question. Once content and form are secure,
          diagnose how effectively the response develops, organises and
          expresses its ideas.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "14px",
          }}
        >
          <InfoCard
            label="Task"
            value="Write Essay"
            accent="#2563eb"
            background="#eff6ff"
            border="#bfdbfe"
          />

          <InfoCard
            label="Prompt"
            value="2–3 sentences"
            accent="#7c3aed"
            background="#f5f3ff"
            border="#ddd6fe"
          />

          <InfoCard
            label="Time"
            value="20 minutes"
            accent="#059669"
            background="#ecfdf5"
            border="#a7f3d0"
          />

          <InfoCard
            label="Response"
            value="200–300 words"
            accent="#d97706"
            background="#fffbeb"
            border="#fde68a"
          />

          <InfoCard
            label="Skill"
            value="Writing"
            accent="#0891b2"
            background="#ecfeff"
            border="#a5f3fc"
          />
        </div>
      </section>

      {/* Teacher assessment guide */}
      <section style={{ marginTop: "32px" }}>
        <SectionLabel>Teacher Assessment Guide</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "26px",
            lineHeight: 1.25,
            fontWeight: 900,
          }}
        >
          What should the teacher look for?
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "960px",
          }}
        >
          Evaluate in a sensible order: task coverage and form first, then
          development and organisation, followed by the quality and control
          of the student's language.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "13px",
          }}
        >
          {FOCUS_AREAS.map((area) => (
            <FocusCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      {/* Diagnostic focus */}
      <section style={{ marginTop: "32px" }}>
        <SectionLabel accent="#d97706">Diagnostic Focus</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "26px",
            lineHeight: 1.25,
            fontWeight: 900,
          }}
        >
          Common problems to distinguish
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "960px",
          }}
        >
          A useful diagnosis identifies the underlying problem rather than
          simply saying that an essay is "weak".
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item, index) => (
            <DiagnosticCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Classroom strategy */}
      <section style={{ marginTop: "32px" }}>
        <SectionLabel accent="#7c3aed">Classroom Strategy</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "26px",
            lineHeight: 1.25,
            fontWeight: 900,
          }}
        >
          A practical teaching sequence
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "960px",
          }}
        >
          Teach students to make deliberate decisions before and during
          writing so that the 20-minute task is used for planning, development
          and controlled revision rather than uncontrolled drafting.
        </p>

        <div
          style={{
            marginTop: "16px",
            background: "#ffffff",
            border: "1px solid #ddd6fe",
            borderTop: "4px solid #7c3aed",
            borderRadius: "14px",
            padding: "8px 18px 4px",
            boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
          }}
        >
          {CLASSROOM_STEPS.map((step) => (
            <ClassroomStep key={step.number} step={step} />
          ))}
        </div>
      </section>

      {/* Teacher feedback language */}
      <section style={{ marginTop: "32px" }}>
        <SectionLabel accent="#0891b2">Teacher Feedback Language</SectionLabel>

        <h2
          style={{
            margin: 0,
            color: "#0f172a",
            fontSize: "26px",
            lineHeight: 1.25,
            fontWeight: 900,
          }}
        >
          Turn assessment into a teaching target
        </h2>

        <p
          style={{
            margin: "9px 0 0",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.7,
            maxWidth: "960px",
          }}
        >
          Feedback should tell the student what the evidence shows and what
          they should change next time.
        </p>

        <div
          style={{
            marginTop: "17px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.area}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderLeft: `4px solid ${item.accent}`,
                borderRadius: "11px",
                padding: "14px 15px",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.035)",
              }}
            >
              <div
                style={{
                  color: item.accent,
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "7px",
                }}
              >
                {item.area}
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
          ))}
        </div>
      </section>

      {/* Quick reference */}
      <section style={{ marginTop: "32px" }}>
        <SectionLabel accent="#059669">Quick Reference</SectionLabel>

        <div
          style={{
            background: "#ecfdf5",
            border: "1px solid #a7f3d0",
            borderLeft: "5px solid #059669",
            borderRadius: "14px",
            padding: "19px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
            }}
          >
            {[
              [
                "1. Check the prompt",
                "Every part of the task must be addressed.",
              ],
              [
                "2. Check the form",
                "The essay should be within the required word range.",
              ],
              [
                "3. Check development",
                "Main ideas need relevant explanations and support.",
              ],
              [
                "4. Check structure",
                "Ideas should be organised and logically connected.",
              ],
              [
                "5. Check language",
                "Grammar, range, vocabulary and spelling should support clear meaning.",
              ],
              [
                "6. Give one priority",
                "Turn the most important weakness into the next teaching target.",
              ],
            ].map(([title, text]) => (
              <div key={title}>
                <div
                  style={{
                    color: "#047857",
                    fontSize: "12px",
                    fontWeight: 900,
                    marginBottom: "5px",
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    color: "#475569",
                    fontSize: "11px",
                    lineHeight: 1.55,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official reference */}
      <section style={{ marginTop: "28px" }}>
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "12px",
            padding: "15px 17px",
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
            Official Scoring Reference
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
            Write Essay task description and scoring guidance. Pearson states
            that the task requires a 200–300 word argumentative essay completed
            in 20 minutes and is assessed on Content, Form, Development,
            Structure &amp; Coherence, Grammar, General Linguistic Range,
            Vocabulary Range and Spelling.
          </p>
        </div>
      </section>
    </div>
  );
}
