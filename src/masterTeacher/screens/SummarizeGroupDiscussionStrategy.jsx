import React from "react";
import { useNavigate } from "react-router-dom";

const FOCUS_AREAS = [
  {
    title: "Content",
    icon: "\u{1F4DD}",
    accent: "#2563eb",
    accentLight: "#eff6ff",
    border: "#bfdbfe",
    points: [
      "Cover the main topic and important ideas from the whole discussion.",
      "Represent each speaker's contribution accurately.",
      "Show the relationships between speakers' ideas rather than listing isolated points.",
    ],
  },
  {
    title: "Paraphrasing & Organisation",
    icon: "\u{1F9E9}",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Use the student's own words rather than simply reproducing the discussion.",
      "Connect ideas into a coherent summary with a clear overall structure.",
      "Expand on important contributions with relevant supporting details.",
    ],
  },
  {
    title: "Pronunciation & Fluency",
    icon: "\u{1F3A4}",
    accent: "#059669",
    accentLight: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Speech should remain understandable throughout the response.",
      "Listen for natural phrasing, rhythm and stress.",
      "Notice hesitation, repetition and false starts that interrupt the flow.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Missing speaker contribution",
    accent: "#2563eb",
    description:
      "The response covers one or two speakers but does not adequately represent the discussion as a whole.",
    teacherFocus:
      "Check whether each speaker's important contribution is represented.",
  },
  {
    title: "Disconnected ideas",
    accent: "#7c3aed",
    description:
      "Important points are mentioned, but the response sounds like a list rather than a connected summary.",
    teacherFocus:
      "Listen for relationships between viewpoints, supporting ideas and conclusions.",
  },
  {
    title: "Weak paraphrasing",
    accent: "#0891b2",
    description:
      "The student relies too closely on the language of the original discussion instead of expressing the ideas in their own words.",
    teacherFocus:
      "Ask whether the student has demonstrated understanding through meaningful paraphrase.",
  },
  {
    title: "Over-focus on minor details",
    accent: "#d97706",
    description:
      "Too much speaking time is spent on small details while important ideas or another speaker's contribution are missed.",
    teacherFocus:
      "Prioritise the main topic, key contributions and relationships.",
  },
  {
    title: "Pronunciation error",
    accent: "#059669",
    description:
      "A word or phrase is produced in a way that reduces intelligibility for a regular speaker of English.",
    teacherFocus:
      "Separate genuine pronunciation problems from content or vocabulary problems.",
  },
  {
    title: "Hesitation or false start",
    accent: "#db2777",
    description:
      "Repeated starts, long hesitations or self-corrections interrupt the natural flow of the summary.",
    teacherFocus:
      "Look at whether the interruption affects overall rhythm and continuity.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Identify the overall topic",
    description:
      "Train students to establish what the whole discussion is about before trying to remember individual details.",
    prompt:
      "What is the central issue that connects the three speakers?",
  },
  {
    number: "02",
    title: "Track who said what",
    description:
      "Use simple notes to record the speaker and the important contribution rather than writing full sentences.",
    prompt:
      "Which idea belongs to Speaker 1, Speaker 2 and Speaker 3?",
  },
  {
    number: "03",
    title: "Capture relationships",
    description:
      "Teach students to notice agreement, disagreement, explanation, examples, problems and possible solutions.",
    prompt:
      "How does one speaker's idea relate to another speaker's idea?",
  },
  {
    number: "04",
    title: "Build a connected summary",
    description:
      "Start with the main topic, then introduce the important contributions and supporting details in a logical order.",
    prompt:
      "Can the listener understand the discussion without hearing the original audio?",
  },
  {
    number: "05",
    title: "Paraphrase the discussion",
    description:
      "Move from note-based recall to expressing the ideas naturally in the student's own words.",
    prompt:
      "Can the student explain the same idea without copying the original wording?",
  },
  {
    number: "06",
    title: "Control the two-minute response",
    description:
      "Practise maintaining a steady pace so the student can cover the discussion without rushing at the end.",
    prompt:
      "Does the response use the available time to cover the whole discussion?",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Content",
    accent: "#2563eb",
    text:
      "You identified the main topic, but one speaker's important contribution was missing. Make sure your notes track what each person adds to the discussion.",
  },
  {
    title: "Relationships",
    accent: "#7c3aed",
    text:
      "You mentioned the key ideas, but they sounded disconnected. Show how the speakers' points relate to one another instead of listing them separately.",
  },
  {
    title: "Paraphrasing",
    accent: "#0891b2",
    text:
      "Your summary followed the original discussion quite closely. Focus on the meaning in your notes and then express that meaning in your own words.",
  },
  {
    title: "Pronunciation",
    accent: "#059669",
    text:
      "The content was understandable, but a few key words were difficult to recognise. Work on the pronunciation of those words without changing your overall speaking pace.",
  },
  {
    title: "Fluency",
    accent: "#db2777",
    text:
      "Your ideas were relevant, but several restarts interrupted the flow. Keep the sentence moving and avoid restarting every time you make a small mistake.",
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

export default function SummarizeGroupDiscussionStrategy() {
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
          {"\u{1F465}"}
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
            Speaking & Listening
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Summarize Group Discussion — Examiner Strategy
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
            A practical teacher reference for evaluating how well a student
            understands, organises and summarizes a multi-speaker discussion.
          </p>
        </div>
      </div>

      <section style={{ marginTop: "28px" }}>
        <SectionHeading
          eyebrow="Task overview"
          title="Summarize Group Discussion at a glance"
          description="The teacher's job is to determine whether the student has understood the discussion as a whole, represented the speakers accurately, connected their ideas and delivered a clear summary in their own words."
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
              value: "Summarize Group Discussion",
              color: "#2563eb",
              background: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              label: "DISCUSSION",
              value: "3 speakers",
              color: "#7c3aed",
              background: "#f5f3ff",
              border: "#ddd6fe",
            },
            {
              label: "PREPARATION",
              value: "10 seconds",
              color: "#059669",
              background: "#ecfdf5",
              border: "#a7f3d0",
            },
            {
              label: "RESPONSE",
              value: "2 minutes",
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
          eyebrow="Teacher listening guide"
          title="What should the teacher listen for?"
          description="Assess the response as a summary of a discussion, not as a collection of isolated sentences. The strongest diagnostic evidence comes from how accurately and coherently the student represents the different speakers."
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
          description="Use these distinctions to decide what the student needs to practise. Avoid treating every weak response as a general fluency problem."
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
          description="Build the skill progressively: first understand the discussion, then organise the information, then produce a connected spoken summary."
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
          description="Keep feedback tied to observable evidence from the student's summary."
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
            "Is the overall discussion topic clear?",
            "Are the important contributions from all three speakers represented?",
            "Are the relationships between ideas clear?",
            "Has the student paraphrased the discussion rather than simply repeating it?",
            "Are the supporting details relevant rather than excessive?",
            "Is the response coherent and easy to follow?",
            "Is pronunciation sufficiently clear for the listener?",
            "Are hesitation, repetition or false starts affecting the flow?",
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
          published task description and scoring guidance for Summarize Group
          Discussion. Always use the current official PTE materials when
          making final decisions about test requirements or scoring.
        </p>
      </section>
    </div>
  );
}
