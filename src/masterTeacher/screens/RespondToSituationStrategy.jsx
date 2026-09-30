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
      "Respond directly to what the situation asks you to do.",
      "Cover the important information in the prompt without changing its meaning.",
      "Make the response relevant, complete and appropriate to the situation.",
    ],
  },
  {
    title: "Appropriacy",
    icon: "\u{1F465}",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    border: "#ddd6fe",
    points: [
      "Choose language that fits the person, relationship and situation.",
      "Use an appropriate level of formality, politeness and directness.",
      "Communicate the intended language function clearly rather than relying on memorised phrases.",
    ],
  },
  {
    title: "Pronunciation & Fluency",
    icon: "\u{1F3A4}",
    accent: "#059669",
    accentLight: "#ecfdf5",
    border: "#a7f3d0",
    points: [
      "Speech should remain understandable to a regular English speaker.",
      "Listen for natural phrasing, rhythm and stress.",
      "Notice hesitation, repetition and false starts that interrupt the response.",
    ],
  },
];

const DIAGNOSTIC_ITEMS = [
  {
    title: "Situation misinterpretation",
    accent: "#2563eb",
    description:
      "The student changes an important fact, misunderstands the requested action, or responds to a different situation.",
    teacherFocus:
      "Check the response against the exact information and goal contained in the prompt.",
  },
  {
    title: "Missing key information",
    accent: "#d97706",
    description:
      "The student responds generally but leaves out an important requirement needed to deal with the situation effectively.",
    teacherFocus:
      "Identify which essential point from the prompt was not communicated.",
  },
  {
    title: "Inappropriate register",
    accent: "#7c3aed",
    description:
      "The language does not fit the relationship or context, for example being too informal, too formal, too weak or too direct.",
    teacherFocus:
      "Listen for whether the language matches the person being addressed and the social demands of the situation.",
  },
  {
    title: "Memorised or repetitive language",
    accent: "#db2777",
    description:
      "The student relies on repeated prepared expressions that do not respond naturally to the specific situation.",
    teacherFocus:
      "Ask whether the language actually performs the required function in this particular scenario.",
  },
  {
    title: "Summarising instead of responding",
    accent: "#0891b2",
    description:
      "The student describes what happened in the prompt instead of saying what they would actually say to the person.",
    teacherFocus:
      "Check whether the response is directed toward completing the requested real-world interaction.",
  },
  {
    title: "Pronunciation or fluency problem",
    accent: "#059669",
    description:
      "The intended response is relevant, but pronunciation difficulties or disrupted fluency reduce clarity.",
    teacherFocus:
      "Separate pronunciation and fluency evidence from content or appropriacy problems.",
  },
];

const CLASSROOM_STEPS = [
  {
    number: "01",
    title: "Identify the situation",
    description:
      "Teach students to establish who they are, who they are speaking to and what has happened before planning the language.",
    prompt:
      "Who am I talking to, what is happening, and what do I need to achieve?",
  },
  {
    number: "02",
    title: "Find the required action",
    description:
      "Reduce the prompt to the main communicative goal: request, explain, apologise, complain, clarify, persuade or another required function.",
    prompt:
      "What does the question actually ask me to say or do?",
  },
  {
    number: "03",
    title: "Protect the key information",
    description:
      "Use the preparation time to identify names, dates, times, reasons, requests and other details that must not be changed.",
    prompt:
      "Which facts must remain exactly consistent with the situation?",
  },
  {
    number: "04",
    title: "Choose the right register",
    description:
      "Decide how formal, polite, direct or assertive the response should sound based on the person and context.",
    prompt:
      "Would I speak to this person in this way in real life?",
  },
  {
    number: "05",
    title: "Respond naturally",
    description:
      "Build a direct spoken response with an appropriate opening, the key message and useful supporting detail.",
    prompt:
      "Am I actually responding to the person rather than describing the prompt?",
  },
  {
    number: "06",
    title: "Use the full response time",
    description:
      "Practise developing the response without unnecessary repetition, restarting or correcting every small mistake.",
    prompt:
      "Can I keep the response clear and purposeful for the available speaking time?",
  },
];

const FEEDBACK_EXAMPLES = [
  {
    title: "Content",
    accent: "#2563eb",
    text:
      "You understood the situation, but you changed one important detail from the prompt. Keep the key information consistent when you build your response.",
  },
  {
    title: "Communicative goal",
    accent: "#0891b2",
    text:
      "You explained what happened, but the task required you to make a request. Move to the action you need earlier in the response.",
  },
  {
    title: "Appropriacy",
    accent: "#7c3aed",
    text:
      "Your message was clear, but the language was too informal for the person you were addressing. Adjust the level of formality to the relationship.",
  },
  {
    title: "Pronunciation",
    accent: "#059669",
    text:
      "The response was relevant, but a few key words were difficult to recognise. Work on those words while keeping your natural speaking pace.",
  },
  {
    title: "Fluency",
    accent: "#db2777",
    text:
      "Your ideas were appropriate, but several restarts interrupted the response. Keep the message moving and avoid restarting after every small mistake.",
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

export default function RespondToSituationStrategy() {
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
          {"\u{1F4AC}"}
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
            Speaking
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "34px",
              lineHeight: 1.15,
              fontWeight: 900,
            }}
          >
            Respond to a Situation — Examiner Strategy
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
            A practical teacher reference for evaluating whether a student
            understands a situation, responds to its communicative goal and
            uses appropriate language to complete the interaction.
          </p>
        </div>
      </div>

      <section style={{ marginTop: "28px" }}>
        <SectionHeading
          eyebrow="Task overview"
          title="Respond to a Situation at a glance"
          description="The teacher's job is to determine whether the student has understood the situation and delivered an appropriate spoken response that addresses the task without changing important information."
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
              value: "Respond to a Situation",
              color: "#2563eb",
              background: "#eff6ff",
              border: "#bfdbfe",
            },
            {
              label: "PROMPT",
              value: "Text up to 60 words",
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
              value: "40 seconds",
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
          description="Assess the response as a real-world spoken interaction. The key question is not whether the student can describe the prompt, but whether they can use the information to respond appropriately to the person and situation."
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
          description="Use these distinctions to identify the actual teaching problem. Avoid treating a weak situation response as simply a general speaking or fluency issue."
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
          description="Build the skill progressively: first understand the interaction, then identify the required action and information, then deliver the response with appropriate language."
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
          description="Keep feedback tied to observable evidence from the student's response and the communicative demands of the situation."
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
            "Is the situation understood correctly?",
            "Does the response address the actual communicative goal?",
            "Are all important prompt details represented accurately?",
            "Has the student avoided changing or inventing important information?",
            "Is the language appropriate for the person and situation?",
            "Does the response sound like a genuine interaction rather than a memorised script?",
            "Is pronunciation sufficiently clear?",
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
          published task description and scoring guidance for Respond to a
          Situation. Always use the current official PTE materials when making
          final decisions about test requirements or scoring.
        </p>
      </section>
    </div>
  );
}
