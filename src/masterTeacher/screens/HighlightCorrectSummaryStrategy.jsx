import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Listen for the Main Idea",
    description:
      "Identify what the speaker is mainly communicating before evaluating the written summaries.",
    accent: "#2563eb",
    background: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    title: "Capture Supporting Points",
    description:
      "Note important supporting ideas, names, numbers, dates, examples, or other details that distinguish a complete summary.",
    accent: "#059669",
    background: "#ecfdf5",
    border: "#a7f3d0",
  },
  {
    title: "Match Meaning, Not Words",
    description:
      "The correct summary may use different wording. Choose the option that best represents the meaning and coverage of the recording.",
    accent: "#d97706",
    background: "#fffbeb",
    border: "#fde68a",
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Keyword Matching",
    description:
      "The student chooses an option because it repeats words from the recording without checking its overall meaning.",
  },
  {
    title: "Detail Over Main Idea",
    description:
      "The student remembers one interesting fact but misses the broader point of the recording.",
  },
  {
    title: "Incomplete Summary",
    description:
      "The selected option describes part of the recording accurately but leaves out an important part of the message.",
  },
  {
    title: "Added Information",
    description:
      "The option contains a plausible statement that was not actually supported by the recording.",
  },
  {
    title: "Distractor Confusion",
    description:
      "The student recognises that an option is related to the topic but does not identify which option best represents the whole recording.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Listen Before Reading Options",
    description:
      "Train students to focus on the recording first. Pearson recommends making notes while listening rather than trying to read and listen to the summaries at the same time.",
  },
  {
    number: "02",
    title: "Record the Main Idea",
    description:
      "Write a short statement of what the speaker is mainly saying. This becomes the anchor for evaluating the answer choices.",
  },
  {
    number: "03",
    title: "Capture Key Support",
    description:
      "Add important supporting points such as examples, relationships, numbers, names, dates, or developments that help identify the complete summary.",
  },
  {
    number: "04",
    title: "Read the Summaries",
    description:
      "After listening, compare each option with the notes rather than relying on memory of isolated words.",
  },
  {
    number: "05",
    title: "Choose the Best Overall Match",
    description:
      "The correct option should represent the recording accurately and at the appropriate level of detail. Reject partly true or unsupported options.",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "When the student chooses by keywords",
    text:
      "You recognised words from the recording, but that is not enough. Ask whether the whole option represents what the speaker was actually saying.",
  },
  {
    title: "When the student focuses on one detail",
    text:
      "That detail was mentioned, but it was not the main message. Identify the speaker's overall point first, then use details to confirm the summary.",
  },
  {
    title: "When the student chooses an incomplete option",
    text:
      "This option describes part of the recording correctly, but it leaves out an important part of the message. Compare the coverage of the whole recording.",
  },
  {
    title: "When the student reads while listening",
    text:
      "Trying to read every option while listening takes attention away from the recording. Make short notes first, then use them to evaluate the summaries.",
  },
];

const QUICK_REFERENCE = [
  ["Recording", "30–90 seconds"],
  ["Skills assessed", "Listening and Reading"],
  ["Response", "Select one written summary"],
  ["Correct answers", "One"],
  ["Audio", "Played once"],
  ["Scoring", "Correct or incorrect"],
  ["Core habit", "Listen, note, compare meaning, select"],
];

function SectionLabel({ children, color = "#2563eb" }) {
  return (
    <div
      style={{
        color,
        fontSize: "10px",
        fontWeight: 900,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        marginBottom: "7px",
      }}
    >
      {children}
    </div>
  );
}

function InfoCard({ title, description, accent, background, border }) {
  return (
    <div
      style={{
        background,
        border: `1px solid ${border}`,
        borderTop: `4px solid ${accent}`,
        borderRadius: "12px",
        padding: "16px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <h3
        style={{
          margin: "0 0 7px",
          color: "#334155",
          fontSize: "14px",
          lineHeight: 1.3,
          fontWeight: 800,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          margin: 0,
          color: "#64748b",
          fontSize: "11px",
          lineHeight: 1.6,
        }}
      >
        {description}
      </p>
    </div>
  );
}

export default function HighlightCorrectSummaryStrategy() {
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
      <div
        style={{
          marginBottom: "18px",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/master-teacher/tips")}
          style={{
            padding: "10px 15px",
            borderRadius: "9px",
            border: "1px solid #bfdbfe",
            background: "#eff6ff",
            color: "#2563eb",
            fontSize: "10px",
            fontWeight: 900,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          ← Back to Strategy Vault
        </button>
      </div>

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
        <SectionLabel>Listening</SectionLabel>
        <h1
          style={{
            margin: 0,
            color: "#1e3a8a",
            fontSize: "27px",
            lineHeight: 1.2,
            fontWeight: 900,
          }}
        >
          Highlight Correct Summary — Examiner Strategy
        </h1>
        <p
          style={{
            margin: "10px 0 0",
            maxWidth: "900px",
            color: "#64748b",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          A teacher-focused guide to helping students identify the main idea,
          capture useful supporting evidence, and choose the summary that best
          represents the recording rather than simply matching familiar words.
        </p>
      </div>

      <section
        style={{
          marginTop: "20px",
          background: "#ffffff",
          border: "1px solid #bfdbfe",
          borderLeft: "4px solid #2563eb",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel>Task Overview</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(155px, 1fr))",
            gap: "10px",
          }}
        >
          {[
            ["Task", "Highlight Correct Summary"],
            ["Recording", "30–90 seconds"],
            ["Skills", "Listening and Reading"],
            ["Answer", "Select one summary"],
            ["Audio", "Played once"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                borderRadius: "10px",
                padding: "12px",
                minHeight: "68px",
              }}
            >
              <div
                style={{
                  color: "#2563eb",
                  fontSize: "9px",
                  fontWeight: 900,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: "#334155",
                  fontSize: "11px",
                  lineHeight: 1.4,
                  fontWeight: 800,
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "10px",
            background: "#fffbeb",
            border: "1px solid #fde68a",
            borderRadius: "9px",
            padding: "10px 12px",
            color: "#92400e",
            fontSize: "11px",
            lineHeight: 1.55,
          }}
        >
          <strong>Scoring reminder:</strong> only one summary is correct. The
          response is scored as correct or incorrect, with no credit for an
          incorrect response or no response.
        </div>
      </section>

      <section style={{ marginTop: "24px" }}>
        <SectionLabel color="#047857">Teacher Assessment Guide</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
          }}
        >
          {FOCUS_AREAS.map((item) => (
            <InfoCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #a7f3d0",
          borderLeft: "4px solid #059669",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#047857">Diagnostic Focus</SectionLabel>
        <p
          style={{
            margin: "0 0 13px",
            color: "#64748b",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          Diagnose how the student is deciding between summaries. The key
          distinction is whether the student understands the recording as a
          whole or is being pulled toward options because of isolated details
          or familiar vocabulary.
        </p>

        <div style={{ display: "grid", gap: "9px" }}>
          {DIAGNOSTIC_ITEMS.map((item) => (
            <div
              key={item.title}
              style={{
                display: "grid",
                gridTemplateColumns: "190px 1fr",
                gap: "12px",
                padding: "10px 12px",
                background: "#ecfdf5",
                border: "1px solid #d1fae5",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  color: "#047857",
                  fontSize: "11px",
                  fontWeight: 900,
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
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #ddd6fe",
          borderLeft: "4px solid #7c3aed",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#6d28d9">Classroom Strategy</SectionLabel>
        <div style={{ display: "grid", gap: "10px" }}>
          {CLASSROOM_STEPS.map((step) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "42px 190px 1fr",
                gap: "12px",
                alignItems: "start",
                padding: "11px 12px",
                background: "#f5f3ff",
                border: "1px solid #ede9fe",
                borderRadius: "9px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9px",
                  background: "#7c3aed",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "10px",
                  fontWeight: 900,
                }}
              >
                {step.number}
              </div>
              <div
                style={{
                  color: "#5b21b6",
                  fontSize: "11px",
                  fontWeight: 900,
                  paddingTop: "8px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.55,
                  paddingTop: "6px",
                }}
              >
                {step.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #a5f3fc",
          borderLeft: "4px solid #0891b2",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#0e7490">Teacher Feedback Language</SectionLabel>
        <div style={{ display: "grid", gap: "10px" }}>
          {FEEDBACK_EXAMPLES.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#ecfeff",
                border: "1px solid #cffafe",
                borderRadius: "10px",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  color: "#0e7490",
                  fontSize: "10px",
                  fontWeight: 900,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  marginBottom: "5px",
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  margin: 0,
                  color: "#475569",
                  fontSize: "11px",
                  lineHeight: 1.6,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #fbcfe8",
          borderLeft: "4px solid #db2777",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#be185d">Quick Reference</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "8px",
          }}
        >
          {QUICK_REFERENCE.map(([label, value]) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
                padding: "9px 10px",
                background: "#fdf2f8",
                border: "1px solid #fce7f3",
                borderRadius: "8px",
                fontSize: "10px",
              }}
            >
              <span style={{ color: "#9d174d", fontWeight: 900 }}>
                {label}
              </span>
              <span
                style={{
                  color: "#475569",
                  textAlign: "right",
                  lineHeight: 1.4,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #fde68a",
          borderLeft: "4px solid #d97706",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#b45309">Official Scoring Reference</SectionLabel>
        <div
          style={{
            background: "#fffbeb",
            border: "1px solid #fef3c7",
            borderRadius: "10px",
            padding: "13px 14px",
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
            Pearson states that Highlight Correct Summary is judged on the
            ability to comprehend, analyze, and combine information from a
            recording and identify the most accurate summary. The response is
            scored as correct or incorrect. The task affects both Listening and
            Reading.
          </p>
        </div>
      </section>

      <section
        style={{
          marginTop: "24px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          borderRadius: "14px",
          padding: "18px",
        }}
      >
        <SectionLabel color="#475569">Teacher Checklist</SectionLabel>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "8px",
          }}
        >
          {[
            "Did the student listen first instead of trying to read every option during the recording?",
            "Did the student identify the main idea?",
            "Did the student capture enough supporting information to distinguish the summaries?",
            "Did the student choose based on meaning rather than repeated keywords?",
            "Does the selected option represent the whole recording rather than one detail?",
            "Does the selected option avoid adding information that was not supported?",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                padding: "9px 10px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
              }}
            >
              <span
                style={{
                  color: "#64748b",
                  fontWeight: 900,
                  fontSize: "12px",
                  lineHeight: 1.2,
                }}
              >
                •
              </span>
              <span
                style={{
                  color: "#475569",
                  fontSize: "10px",
                  lineHeight: 1.5,
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
