import React from "react";
import { useNavigate } from "react-router-dom";

const BLUE = "#2563eb";
const DARK_BLUE = "#163b82";
const TEXT = "#1f2937";
const MUTED = "#5270a5";
const BORDER = "#bfdbfe";
const LIGHT_BLUE = "#eff6ff";
const LIGHT_GREEN = "#f0fdf4";
const GREEN = "#15803d";
const LIGHT_AMBER = "#fffbeb";
const AMBER = "#b45309";
const LIGHT_PURPLE = "#f5f3ff";
const PURPLE = "#6d28d9";

const SectionTitle = ({ children, color = BLUE }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "16px",
    }}
  >
    <div
      style={{
        width: "10px",
        height: "32px",
        borderRadius: "6px",
        background: color,
        flexShrink: 0,
      }}
    />
    <h2
      style={{
        margin: 0,
        color: "#243b5a",
        fontSize: "20px",
        fontWeight: 900,
        letterSpacing: "-0.02em",
      }}
    >
      {children}
    </h2>
  </div>
);

const InfoCard = ({ label, value }) => (
  <div
    style={{
      padding: "15px",
      borderRadius: "10px",
      border: `1px solid ${BORDER}`,
      background: LIGHT_BLUE,
      minHeight: "70px",
    }}
  >
    <div
      style={{
        color: BLUE,
        fontSize: "9px",
        fontWeight: 900,
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        marginBottom: "8px",
      }}
    >
      {label}
    </div>
    <div
      style={{
        color: "#172554",
        fontSize: "13px",
        lineHeight: 1.45,
        fontWeight: 800,
      }}
    >
      {value}
    </div>
  </div>
);

const Bullet = ({ children, color = BLUE }) => (
  <li
    style={{
      marginBottom: "9px",
      paddingLeft: "4px",
      color: TEXT,
      fontSize: "13px",
      lineHeight: 1.6,
    }}
  >
    <span style={{ color, fontWeight: 900 }}>• </span>
    {children}
  </li>
);

const AdviceBox = ({
  title,
  children,
  background = LIGHT_GREEN,
  border = "#bbf7d0",
  accent = GREEN,
}) => (
  <div
    style={{
      marginTop: "14px",
      padding: "15px 17px",
      borderRadius: "10px",
      border: `1px solid ${border}`,
      background,
    }}
  >
    <div
      style={{
        color: accent,
        fontSize: "11px",
        fontWeight: 900,
        textTransform: "uppercase",
        letterSpacing: "0.05em",
        marginBottom: "7px",
      }}
    >
      {title}
    </div>
    <div
      style={{
        color: "#334155",
        fontSize: "12px",
        lineHeight: 1.65,
      }}
    >
      {children}
    </div>
  </div>
);

const QuoteCard = ({ children, label = "Teacher language" }) => (
  <div
    style={{
      padding: "14px 16px",
      borderRadius: "10px",
      border: "1px solid #ddd6fe",
      background: LIGHT_PURPLE,
      marginBottom: "10px",
    }}
  >
    <div
      style={{
        color: PURPLE,
        fontSize: "9px",
        fontWeight: 900,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        marginBottom: "6px",
      }}
    >
      {label}
    </div>
    <div
      style={{
        color: "#37306b",
        fontSize: "12px",
        lineHeight: 1.6,
        fontWeight: 700,
      }}
    >
      “{children}”
    </div>
  </div>
);

const PersonalIntroductionStrategy = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "22px",
        boxSizing: "border-box",
        color: TEXT,
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <button
        type="button"
        onClick={() => navigate("/master-teacher/tips")}
        style={{
          padding: "9px 15px",
          marginBottom: "18px",
          borderRadius: "9px",
          border: `1px solid ${BORDER}`,
          background: LIGHT_BLUE,
          color: BLUE,
          fontSize: "10px",
          fontWeight: 900,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        ← Back to Strategy Vault
      </button>

      <section
        style={{
          padding: "28px 30px",
          borderRadius: "18px",
          border: `1px solid ${BORDER}`,
          borderTop: `4px solid ${BLUE}`,
          background: "#ffffff",
          boxSizing: "border-box",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            color: BLUE,
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "10px",
          }}
        >
          Speaking & Writing
        </div>

        <div
          style={{
            display: "inline-block",
            padding: "5px 9px",
            marginBottom: "10px",
            borderRadius: "999px",
            border: "1px solid #fde68a",
            background: LIGHT_AMBER,
            color: AMBER,
            fontSize: "9px",
            fontWeight: 900,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          Unscored — Familiarization
        </div>

        <h1
          style={{
            margin: 0,
            color: DARK_BLUE,
            fontSize: "34px",
            lineHeight: 1.15,
            fontWeight: 950,
            letterSpacing: "-0.035em",
          }}
        >
          Personal Introduction — Examiner Strategy
        </h1>

        <p
          style={{
            margin: "12px 0 0",
            color: MUTED,
            fontSize: "14px",
            lineHeight: 1.65,
            maxWidth: "1120px",
          }}
        >
          A teacher-focused guide to preparing students for the opening
          Personal Introduction, with clear separation between familiarization
          practice and the scored PTE question types that follow.
        </p>
      </section>

      <section
        style={{
          padding: "20px 24px",
          borderRadius: "16px",
          border: `1px solid ${BORDER}`,
          borderLeft: `4px solid ${BLUE}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle>Task Overview</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          <InfoCard label="Task" value="Personal Introduction" />
          <InfoCard label="Purpose" value="Test familiarization" />
          <InfoCard label="Skills" value="Speaking / Listening context" />
          <InfoCard label="Scored?" value="No" />
          <InfoCard label="Role" value="Prepare for the test experience" />
        </div>

        <div
          style={{
            marginTop: "14px",
            padding: "13px 15px",
            borderRadius: "9px",
            border: "1px solid #fde68a",
            background: LIGHT_AMBER,
            color: "#92400e",
            fontSize: "11px",
            lineHeight: 1.65,
          }}
        >
          <strong>Important:</strong> Personal Introduction does not contribute
          to the PTE score. Its purpose is to help the test taker become
          familiar with the test technology and prepare for the speaking and
          listening questions that follow.
        </div>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #bbf7d0",
          borderLeft: `4px solid ${GREEN}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color={GREEN}>Teacher Assessment Guide</SectionTitle>

        <p
          style={{
            margin: "0 0 14px",
            color: "#334155",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          This is not a scored examiner task, so teachers should not treat a
          Personal Introduction practice recording as a substitute for formal
          PTE marking. Its value is in preparing the student to speak
          comfortably into the test system and establishing a useful baseline
          for classroom coaching.
        </p>

        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <Bullet color={GREEN}>
            Check that the student understands the recording environment and
            can begin speaking confidently when required.
          </Bullet>
          <Bullet color={GREEN}>
            Observe whether the student can maintain a clear, natural speaking
            rate without excessive hesitation.
          </Bullet>
          <Bullet color={GREEN}>
            Note pronunciation features that may be worth addressing before
            the scored speaking tasks begin.
          </Bullet>
          <Bullet color={GREEN}>
            Check whether the student can organise a short personal response
            without becoming dependent on memorised sentences.
          </Bullet>
          <Bullet color={GREEN}>
            Use the activity to reduce uncertainty about the test interface,
            microphone use and speaking routine.
          </Bullet>
        </ul>

        <AdviceBox title="What not to do">
          Do not assign a PTE score to the Personal Introduction. Do not use it
          as evidence that a student has achieved a particular speaking band.
          If you want to assess pronunciation or oral fluency formally, use
          the scored speaking tasks such as Read Aloud, Repeat Sentence,
          Describe Image or the other relevant task types.
        </AdviceBox>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #fde68a",
          borderLeft: `4px solid ${AMBER}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color={AMBER}>Diagnostic Focus</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "14px",
          }}
        >
          <div
            style={{
              padding: "16px",
              borderRadius: "11px",
              border: "1px solid #fde68a",
              background: LIGHT_AMBER,
            }}
          >
            <div
              style={{
                color: AMBER,
                fontWeight: 900,
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              01 — Test Readiness
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Is the student comfortable with the speaking environment and
              ready to respond when the microphone opens?
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              borderRadius: "11px",
              border: "1px solid #fde68a",
              background: LIGHT_AMBER,
            }}
          >
            <div
              style={{
                color: AMBER,
                fontWeight: 900,
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              02 — Speaking Control
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Does the student speak clearly and continuously, or are
              hesitation and false starts preventing natural delivery?
            </div>
          </div>

          <div
            style={{
              padding: "16px",
              borderRadius: "11px",
              border: "1px solid #fde68a",
              background: LIGHT_AMBER,
            }}
          >
            <div
              style={{
                color: AMBER,
                fontWeight: 900,
                fontSize: "12px",
                marginBottom: "8px",
              }}
            >
              03 — Confidence
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Is anxiety or over-rehearsal affecting the student's ability to
              produce a natural short response?
            </div>
          </div>
        </div>

        <AdviceBox
          title="Diagnostic rule"
          background="#fff7ed"
          border="#fed7aa"
          accent="#c2410c"
        >
          Treat observations here as <strong>preparation notes</strong>, not as
          official PTE scoring evidence. Move formal diagnosis to the
          appropriate scored task.
        </AdviceBox>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: `1px solid ${BORDER}`,
          borderLeft: `4px solid ${BLUE}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle>Classroom Strategy</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "16px",
          }}
        >
          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: `1px solid ${BORDER}`,
              background: "#f8fbff",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: "12px",
                fontWeight: 900,
                marginBottom: "8px",
              }}
            >
              Step 1 — Familiarise
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Explain that the activity is there to help students become
              comfortable with the test environment. Keep the tone low
              pressure.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: `1px solid ${BORDER}`,
              background: "#f8fbff",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: "12px",
                fontWeight: 900,
                marginBottom: "8px",
              }}
            >
              Step 2 — Rehearse naturally
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Let students practise a short personal response without forcing
              them to memorise a rigid script.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: `1px solid ${BORDER}`,
              background: "#f8fbff",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: "12px",
                fontWeight: 900,
                marginBottom: "8px",
              }}
            >
              Step 3 — Check the setup
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Confirm microphone positioning, speaking volume and the student's
              understanding of when recording begins.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: `1px solid ${BORDER}`,
              background: "#f8fbff",
            }}
          >
            <div
              style={{
                color: BLUE,
                fontSize: "12px",
                fontWeight: 900,
                marginBottom: "8px",
              }}
            >
              Step 4 — Transition quickly
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Once the student is comfortable, move into scored speaking tasks
              where pronunciation and oral fluency can be assessed formally.
            </p>
          </div>
        </div>

        <AdviceBox title="Useful classroom drill">
          Give students one short opportunity to introduce themselves, record
          it, and then ask only three questions: <strong>Was I ready to
          speak?</strong> <strong>Was my speech clear?</strong> <strong>Did I
          sound natural?</strong> Keep the feedback focused on readiness and
          delivery rather than assigning a score.
        </AdviceBox>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #fecaca",
          borderLeft: "4px solid #dc2626",
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color="#dc2626">Common Classroom Traps</SectionTitle>

        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <Bullet color="#dc2626">
            <strong>Treating it as a scored task:</strong> Personal
            Introduction is for familiarization and does not contribute to the
            score.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Over-memorising:</strong> a rigid script can make the
            student's delivery less natural and does not prepare them for the
            unpredictable scored tasks that follow.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Spending too much lesson time here:</strong> the main value
            is getting the student comfortable with the technology and speaking
            routine.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Giving a band estimate:</strong> use scored PTE tasks when
            you need evidence for a performance judgement.
          </Bullet>
        </ul>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #ddd6fe",
          borderLeft: `4px solid ${PURPLE}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color={PURPLE}>Teacher Feedback Language</SectionTitle>

        <QuoteCard>
          This activity is about getting comfortable with the test environment,
          not about getting a score.
        </QuoteCard>

        <QuoteCard>
          Your delivery is clear. Now let's use the scored speaking tasks to
          measure your pronunciation and oral fluency more formally.
        </QuoteCard>

        <QuoteCard>
          You don't need to memorise every sentence. Aim for a natural response
          that you can produce comfortably.
        </QuoteCard>

        <QuoteCard>
          The important thing here is that you know when to start speaking and
          feel comfortable with the recording process.
        </QuoteCard>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #86efac",
          borderLeft: `4px solid ${GREEN}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color={GREEN}>Quick Reference</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {[
            ["Purpose", "Familiarise the student with the test experience."],
            ["Score", "Unscored — do not assign a PTE band from this task."],
            ["Focus", "Readiness, confidence and natural delivery."],
            ["Next", "Move formal assessment to scored question types."],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                padding: "15px",
                borderRadius: "10px",
                background: LIGHT_GREEN,
                border: "1px solid #bbf7d0",
              }}
            >
              <div
                style={{
                  color: GREEN,
                  fontSize: "11px",
                  fontWeight: 900,
                  marginBottom: "6px",
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
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: "1px solid #fde68a",
          borderLeft: `4px solid ${AMBER}`,
          background: "#ffffff",
          marginBottom: "20px",
        }}
      >
        <SectionTitle color={AMBER}>Official Status Reference</SectionTitle>

        <div
          style={{
            padding: "16px 18px",
            borderRadius: "10px",
            background: LIGHT_AMBER,
            border: "1px solid #fde68a",
            color: "#78350f",
            fontSize: "12px",
            lineHeight: 1.7,
          }}
        >
          Pearson states that Personal Introduction is an opportunity to get
          familiar with PTE test technology and prepare for the speaking and
          listening questions. It <strong>does not contribute to the
          score</strong> and is intended for familiarization purposes.
        </div>

        <div
          style={{
            marginTop: "14px",
            color: "#64748b",
            fontSize: "10px",
            lineHeight: 1.6,
          }}
        >
          Official source: Pearson PTE Academic &amp; UKVI test format —
          Speaking &amp; Writing.
        </div>
      </section>

      <section
        style={{
          padding: "22px 24px",
          borderRadius: "16px",
          border: `1px solid ${BORDER}`,
          borderLeft: `4px solid ${BLUE}`,
          background: "#ffffff",
          marginBottom: "24px",
        }}
      >
        <SectionTitle>Teacher Checklist</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "10px 18px",
          }}
        >
          {[
            "Explain clearly that Personal Introduction is unscored.",
            "Use the activity to familiarise the student with the test environment.",
            "Check microphone position and speaking volume.",
            "Observe whether the student can begin speaking confidently.",
            "Note any obvious pronunciation or fluency issues for later practice.",
            "Avoid assigning a PTE band or formal task score.",
            "Avoid encouraging rigid memorised scripts.",
            "Move formal assessment to the scored speaking tasks.",
          ].map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "9px",
                padding: "10px 12px",
                borderRadius: "9px",
                background: "#f8fbff",
                border: "1px solid #dbeafe",
                color: "#475569",
                fontSize: "11px",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  color: BLUE,
                  fontWeight: 900,
                  fontSize: "14px",
                  lineHeight: 1,
                }}
              >
                ✓
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PersonalIntroductionStrategy;
