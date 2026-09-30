import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Opening & Topic Sentence",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Identify the sentence that introduces the main topic clearly.",
      "Check whether the opening sentence can stand independently.",
      "Be cautious with sentences beginning with pronouns or linking references that need earlier context.",
    ],
  },
  {
    title: "Logical Sequencing",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Look for cause-and-effect, chronological, problem-and-solution, or general-to-specific relationships.",
      "Check that each sentence follows naturally from the information immediately before it.",
      "Use the overall meaning of the paragraph rather than matching isolated words.",
    ],
  },
  {
    title: "Cohesion & References",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
    points: [
      "Track pronouns, demonstratives, repeated nouns, and other reference words.",
      "Look for linking expressions that connect one idea to the next.",
      "A sentence containing a reference such as this, these, they, or such a problem usually needs an appropriate earlier reference.",
    ],
  },
  {
    title: "Relationship Between Ideas",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Identify whether a sentence gives an example, explanation, contrast, result, or additional detail.",
      "Check whether transitions accurately reflect the relationship between ideas.",
      "Use meaning and structure together when deciding which sentence comes next.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Incorrect starting sentence",
    description:
      "The student begins with a sentence that depends on information introduced later in the paragraph.",
    accent: "#2563eb",
    light: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Reference break",
    description:
      "A pronoun, demonstrative, or other reference appears before the idea it refers to has been established.",
    accent: "#059669",
    light: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Linker mismatch",
    description:
      "A connector such as however, therefore, or for example does not match the relationship between the surrounding ideas.",
    accent: "#d97706",
    light: "#fffbeb",
    border: "#fde68a",
  },
  {
    title: "Logical or chronological break",
    description:
      "The sequence jumps between ideas, events, stages, or explanations without a natural progression.",
    accent: "#7c3aed",
    light: "#f5f3ff",
    border: "#ddd6fe",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Read every box first",
    text:
      "Teach students to understand the overall topic before trying to place individual sentences.",
  },
  {
    number: "02",
    title: "Find the topic sentence",
    text:
      "Look for the sentence that introduces the subject without depending on a previous sentence for meaning.",
  },
  {
    number: "03",
    title: "Build logical pairs",
    text:
      "Identify sentences that naturally belong together because of reference, repetition, cause and effect, contrast, or example.",
  },
  {
    number: "04",
    title: "Check the complete sequence",
    text:
      "After arranging the paragraph, read it from beginning to end and test whether the ideas form one coherent progression.",
  },
  {
    number: "05",
    title: "Teach the reason",
    text:
      "Ask the student to explain why one sentence follows another instead of relying only on instinct or matching vocabulary.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    label: "Starting sentence",
    text:
      "Your first sentence needs to introduce the topic independently. This sentence refers back to an idea that has not been introduced yet.",
  },
  {
    label: "Cohesion",
    text:
      "You identified the main topic, but the sequence breaks because the reference word in this sentence does not have a clear earlier reference.",
  },
  {
    label: "Logical sequence",
    text:
      "The individual sentences are understandable, but the order does not show the intended cause-and-effect relationship. Look for the explanation that must come before the result.",
  },
  {
    label: "Overall strategy",
    text:
      "Instead of matching repeated words only, read the whole paragraph for meaning and identify how each idea develops from the previous one.",
  },
];

function SectionLabel({ children }) {
  return (
    <div
      style={{
        display: "inline-block",
        padding: "5px 9px",
        borderRadius: "999px",
        background: "#dbeafe",
        color: "#1d4ed8",
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "8px",
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ label, value, accent = "#2563eb", light = "#eff6ff", border = "#bfdbfe" }) {
  return (
    <div
      style={{
        background: light,
        border: `1px solid ${border}`,
        borderTop: `3px solid ${accent}`,
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <div
        style={{
          color: accent,
          fontSize: "10px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          marginBottom: "5px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          color: "#334155",
          fontSize: "13px",
          lineHeight: 1.45,
          fontWeight: 800,
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
        background: "#ffffff",
        border: `1px solid ${area.border}`,
        borderTop: `4px solid ${area.accent}`,
        borderRadius: "13px",
        padding: "17px",
        boxShadow: "0 4px 14px rgba(15, 23, 42, 0.04)",
      }}
    >
      <h3
        style={{
          margin: "0 0 10px",
          color: "#334155",
          fontSize: "15px",
          lineHeight: 1.3,
          fontWeight: 800,
        }}
      >
        {area.title}
      </h3>

      <div style={{ display: "grid", gap: "8px" }}>
        {area.points.map((point) => (
          <div
            key={point}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "8px",
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                color: area.accent,
                fontWeight: 900,
                flexShrink: 0,
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
        background: item.light,
        border: `1px solid ${item.border}`,
        borderRadius: "12px",
        padding: "15px",
      }}
    >
      <h3
        style={{
          margin: "0 0 7px",
          color: item.accent,
          fontSize: "13px",
          fontWeight: 900,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.55,
        }}
      >
        {item.description}
      </p>
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
        padding: "14px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          flexShrink: 0,
          borderRadius: "10px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          color: "#2563eb",
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
        <h3
          style={{
            margin: "1px 0 5px",
            color: "#334155",
            fontSize: "13px",
            fontWeight: 800,
          }}
        >
          {step.title}
        </h3>

        <p
          style={{
            margin: 0,
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          {step.text}
        </p>
      </div>
    </div>
  );
}

export default function ReadingReorderParagraphStrategy() {
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
        onClick={() => navigate("/master-teacher/tips")}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "7px",
          marginBottom: "16px",
          padding: "9px 13px",
          borderRadius: "9px",
          border: "1px solid #bfdbfe",
          background: "#eff6ff",
          color: "#1d4ed8",
          fontSize: "11px",
          fontWeight: 900,
          cursor: "pointer",
        }}
      >
        {"\u2190"} Back to Strategy Vault
      </button>

      <div
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fbff 100%)",
          border: "1px solid #bfdbfe",
          borderTop: "4px solid #2563eb",
          borderRadius: "16px",
          padding: "24px",
          boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
        }}
      >
        <SectionLabel>Reading</SectionLabel>

        <h1
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "25px",
            lineHeight: 1.2,
            fontWeight: 800,
          }}
        >
          Reorder Paragraph — Examiner Strategy
        </h1>

        <p
          style={{
            margin: "9px 0 0",
            maxWidth: "860px",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          A teacher-focused guide to evaluating how students reconstruct a
          coherent paragraph from sentences presented in random order.
        </p>

        <div
          style={{
            marginTop: "18px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "10px",
          }}
        >
          <InfoCard
            label="Task"
            value="Reorder Paragraph"
          />
          <InfoCard
            label="Prompt"
            value="Text up to 110 words"
            accent="#059669"
            light="#ecfdf5"
            border="#a7f3d0"
          />
          <InfoCard
            label="Time"
            value="Part of the Reading section"
            accent="#d97706"
            light="#fffbeb"
            border="#fde68a"
          />
          <InfoCard
            label="Skill"
            value="Reading"
            accent="#7c3aed"
            light="#f5f3ff"
            border="#ddd6fe"
          />
          <InfoCard
            label="Scoring"
            value="Partial credit for correctly ordered adjacent pairs"
            accent="#0891b2"
            light="#ecfeff"
            border="#a5f3fc"
          />
        </div>
      </div>

      <section style={{ marginTop: "20px" }}>
        <SectionLabel>Teacher Assessment Guide</SectionLabel>

        <h2
          style={{
            margin: "0 0 12px",
            color: "#334155",
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          What to look for
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
          }}
        >
          {FOCUS_AREAS.map((area) => (
            <FocusCard key={area.title} area={area} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "22px" }}>
        <SectionLabel>Diagnostic Focus</SectionLabel>

        <h2
          style={{
            margin: "0 0 12px",
            color: "#334155",
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          Identify the reason the sequence breaks
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "12px",
          }}
        >
          {DIAGNOSTIC_ITEMS.map((item) => (
            <DiagnosticCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "22px" }}>
        <SectionLabel>Classroom Strategy</SectionLabel>

        <h2
          style={{
            margin: "0 0 12px",
            color: "#334155",
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          Teach the reasoning, not just the answer
        </h2>

        <div style={{ display: "grid", gap: "10px" }}>
          {CLASSROOM_STEPS.map((step) => (
            <ClassroomStep key={step.number} step={step} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: "22px" }}>
        <SectionLabel>Teacher Feedback Language</SectionLabel>

        <h2
          style={{
            margin: "0 0 12px",
            color: "#334155",
            fontSize: "20px",
            fontWeight: 800,
          }}
        >
          Useful ways to explain the problem
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "12px",
          }}
        >
          {FEEDBACK_EXAMPLES.map((example) => (
            <div
              key={example.label}
              style={{
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                borderLeft: "4px solid #0891b2",
                borderRadius: "12px",
                padding: "15px",
              }}
            >
              <div
                style={{
                  color: "#0891b2",
                  fontSize: "10px",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "7px",
                }}
              >
                {example.label}
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

      <section style={{ marginTop: "22px" }}>
        <SectionLabel>Quick Reference</SectionLabel>

        <div
          style={{
            background: "#ffffff",
            border: "1px solid #cbd5e1",
            borderLeft: "4px solid #059669",
            borderRadius: "13px",
            padding: "18px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "12px",
            }}
          >
            <InfoCard
              label="First question"
              value="Which sentence introduces the topic?"
              accent="#2563eb"
              light="#eff6ff"
              border="#bfdbfe"
            />
            <InfoCard
              label="Second question"
              value="Which sentences naturally belong together?"
              accent="#059669"
              light="#ecfdf5"
              border="#a7f3d0"
            />
            <InfoCard
              label="Third question"
              value="Do references and connectors make sense?"
              accent="#d97706"
              light="#fffbeb"
              border="#fde68a"
            />
            <InfoCard
              label="Final check"
              value="Does the whole paragraph read as one coherent progression?"
              accent="#7c3aed"
              light="#f5f3ff"
              border="#ddd6fe"
            />
          </div>
        </div>
      </section>

      <section style={{ marginTop: "22px" }}>
        <SectionLabel>Official Scoring Reference</SectionLabel>

        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #cbd5e1",
            borderRadius: "13px",
            padding: "18px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#475569",
              fontSize: "11px",
              lineHeight: 1.65,
            }}
          >
            Reorder Paragraph is a Reading task in which students restore the
            original order of scrambled text boxes. Current Pearson guidance
            describes the task as assessing reading, with partial credit based
            on correctly ordered adjacent pairs. Use this page as a teacher
            reference for classroom diagnosis and strategy rather than as a
            substitute for the current official PTE scoring documentation.
          </p>
        </div>
      </section>

      <div
        style={{
          marginTop: "22px",
          padding: "14px 16px",
          background: "#eff6ff",
          border: "1px solid #bfdbfe",
          borderRadius: "12px",
          color: "#475569",
          fontSize: "11px",
          lineHeight: 1.55,
        }}
      >
        <strong style={{ color: "#1d4ed8" }}>Teacher reminder:</strong>{" "}
        Encourage students to explain the relationship between sentences.
        Matching repeated vocabulary can help, but the strongest ordering
        decisions come from meaning, cohesion, and logical progression.
      </div>
    </div>
  );
}
