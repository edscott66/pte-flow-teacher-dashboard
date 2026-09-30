import React from "react";
import { useNavigate } from "react-router-dom";

const BLUE = "#2563eb";
const BLUE_DARK = "#1e3a8a";
const BLUE_LIGHT = "#eff6ff";
const BLUE_BORDER = "#bfdbfe";
const TEXT = "#334155";
const MUTED = "#64748b";
const GREEN = "#059669";
const GREEN_LIGHT = "#ecfdf5";
const GREEN_BORDER = "#a7f3d0";
const AMBER = "#d97706";
const AMBER_LIGHT = "#fffbeb";
const AMBER_BORDER = "#fde68a";
const RED = "#dc2626";
const RED_LIGHT = "#fef2f2";
const RED_BORDER = "#fecaca";
const INDIGO = "#4f46e5";
const INDIGO_LIGHT = "#eef2ff";
const INDIGO_BORDER = "#c7d2fe";

function SectionCard({ title, accent = BLUE, border = BLUE_BORDER, children }) {
  return (
    <section
      style={{
        background: "#ffffff",
        border: `1px solid ${border}`,
        borderLeft: `4px solid ${accent}`,
        borderRadius: "14px",
        padding: "20px",
        marginBottom: "18px",
        boxShadow: "0 5px 16px rgba(15, 23, 42, 0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "14px",
        }}
      >
        <div
          style={{
            width: "9px",
            height: "28px",
            borderRadius: "6px",
            background: accent,
            flexShrink: 0,
          }}
        />
        <h2
          style={{
            margin: 0,
            color: TEXT,
            fontSize: "18px",
            lineHeight: 1.3,
            fontWeight: 900,
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function GuideItem({ title, children, accent = BLUE, accentLight = BLUE_LIGHT, border = BLUE_BORDER }) {
  return (
    <div
      style={{
        background: accentLight,
        border: `1px solid ${border}`,
        borderRadius: "10px",
        padding: "13px 14px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          color: accent,
          fontSize: "11px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: "5px",
        }}
      >
        {title}
      </div>
      <div style={{ color: TEXT, fontSize: "13px", lineHeight: 1.6 }}>
        {children}
      </div>
    </div>
  );
}

function DiagnosticItem({ title, description }) {
  return (
    <div
      style={{
        background: "#ffffff",
        border: "1px solid #dbeafe",
        borderRadius: "9px",
        padding: "12px 13px",
      }}
    >
      <div
        style={{
          color: BLUE_DARK,
          fontSize: "12px",
          fontWeight: 900,
          marginBottom: "4px",
        }}
      >
        {title}
      </div>
      <div style={{ color: MUTED, fontSize: "12px", lineHeight: 1.55 }}>
        {description}
      </div>
    </div>
  );
}

function FeedbackPhrase({ label, children }) {
  return (
    <div
      style={{
        padding: "11px 12px",
        borderRadius: "9px",
        background: "#ffffff",
        border: "1px solid #dbeafe",
        marginBottom: "9px",
      }}
    >
      <div
        style={{
          color: GREEN,
          fontSize: "10px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: "4px",
        }}
      >
        {label}
      </div>
      <div style={{ color: TEXT, fontSize: "12px", lineHeight: 1.55 }}>
        {children}
      </div>
    </div>
  );
}

function StepCard({ number, title, children, accent = BLUE }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "flex-start",
        padding: "13px 14px",
        background: "#ffffff",
        border: "1px solid #e2e8f0",
        borderRadius: "10px",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          width: "27px",
          height: "27px",
          borderRadius: "50%",
          background: accent,
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "11px",
          fontWeight: 900,
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div>
        <div style={{ color: TEXT, fontSize: "12px", fontWeight: 900, marginBottom: "4px" }}>
          {title}
        </div>
        <div style={{ color: MUTED, fontSize: "12px", lineHeight: 1.55 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HighlightIncorrectWordsStrategy() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100%",
        background: "#f8fafc",
        padding: "18px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <button
          type="button"
          onClick={() => navigate("/master-teacher/tips")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 13px",
            marginBottom: "18px",
            borderRadius: "8px",
            border: `1px solid ${BLUE_BORDER}`,
            background: BLUE_LIGHT,
            color: BLUE,
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.03em",
            cursor: "pointer",
          }}
        >
          ← BACK TO STRATEGY VAULT
        </button>

        <header
          style={{
            background: "#ffffff",
            border: `1px solid ${BLUE_BORDER}`,
            borderTop: `4px solid ${BLUE}`,
            borderRadius: "16px",
            padding: "25px 27px",
            marginBottom: "18px",
            boxShadow: "0 5px 18px rgba(15, 23, 42, 0.04)",
          }}
        >
          <div
            style={{
              color: BLUE,
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "7px",
            }}
          >
            LISTENING
          </div>
          <h1
            style={{
              margin: "0 0 9px",
              color: BLUE_DARK,
              fontSize: "30px",
              lineHeight: 1.2,
              fontWeight: 900,
            }}
          >
            Highlight Incorrect Words — Examiner Strategy
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "1080px",
              color: "#52709b",
              fontSize: "14px",
              lineHeight: 1.7,
            }}
          >
            A teacher-focused guide to helping students compare a live recording
            with its transcript, track the spoken text accurately, and select only
            the words that differ from what the speaker actually says.
          </p>
        </header>

        <SectionCard title="Task Overview">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              ["TASK", "Highlight Incorrect Words"],
              ["RECORDING", "15–50 seconds"],
              ["SKILLS", "Listening + Reading"],
              ["ANSWER", "Select differing words"],
              ["AUDIO", "Played once"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: BLUE_LIGHT,
                  border: `1px solid ${BLUE_BORDER}`,
                  borderRadius: "10px",
                  padding: "14px 13px",
                  minHeight: "76px",
                  boxSizing: "border-box",
                }}
              >
                <div
                  style={{
                    color: BLUE,
                    fontSize: "9px",
                    fontWeight: 900,
                    letterSpacing: "0.07em",
                    marginBottom: "7px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    color: "#1e293b",
                    fontSize: "12px",
                    lineHeight: 1.45,
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
              marginTop: "12px",
              padding: "11px 13px",
              borderRadius: "9px",
              background: AMBER_LIGHT,
              border: `1px solid ${AMBER_BORDER}`,
              color: "#92400e",
              fontSize: "11px",
              lineHeight: 1.5,
            }}
          >
            <strong>Scoring reminder:</strong> correct selections receive points,
            while incorrect options selected can reduce the score. Students should
            select only words they are confident differ from the recording.
          </div>
        </SectionCard>

        <SectionCard title="Teacher Assessment Guide" accent={INDIGO} border={INDIGO_BORDER}>
          <GuideItem
            title="What the student is actually doing"
            accent={INDIGO}
            accentLight={INDIGO_LIGHT}
            border={INDIGO_BORDER}
          >
            The student sees a transcript containing deliberate differences from
            the recording. As the audio plays, they must identify and select the
            words that do not match what the speaker says. This is a simultaneous
            listening-and-reading task rather than a note-taking task.
          </GuideItem>

          <GuideItem
            title="The core skill"
            accent={GREEN}
            accentLight={GREEN_LIGHT}
            border={GREEN_BORDER}
          >
            The key skill is rapid lexical comparison: the student must keep their
            place in the transcript while listening closely enough to notice when
            a spoken word differs from the word displayed on screen.
          </GuideItem>

          <GuideItem
            title="Use the preparation time strategically"
            accent={AMBER}
            accentLight={AMBER_LIGHT}
            border={AMBER_BORDER}
          >
            Pearson gives approximately 10 seconds before the recording begins.
            The student should skim rather than read every word. Encourage them to
            identify the topic and notice information-bearing nouns, adjectives and
            verbs that will be useful anchors while listening.
          </GuideItem>

          <GuideItem
            title="Do not teach this as a note-taking task"
            accent={RED}
            accentLight={RED_LIGHT}
            border={RED_BORDER}
          >
            Pearson specifically advises students to follow the text with the
            cursor rather than trying to make notes while listening. The teacher's
            training should therefore build tracking, attention and rapid
            recognition rather than long-form note-taking.
          </GuideItem>
        </SectionCard>

        <SectionCard title="Diagnostic Focus" accent={AMBER} border={AMBER_BORDER}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            <DiagnosticItem
              title="1. Tracking breakdown"
              description="The student loses their place in the transcript and begins clicking late, early or on the wrong word."
            />
            <DiagnosticItem
              title="2. Auditory discrimination"
              description="The student follows the text but does not reliably hear that the spoken word differs from the displayed word."
            />
            <DiagnosticItem
              title="3. Over-selection"
              description="The student clicks words based on uncertainty. This is especially costly because incorrect selections can reduce the score."
            />
          </div>
        </SectionCard>

        <SectionCard title="Classroom Strategy">
          <StepCard number="1" title="Build the skim habit">
            Give students a short transcript and a strict preparation window. Ask
            them to identify the topic and underline mentally or visually the key
            information words rather than attempting to read every word.
          </StepCard>

          <StepCard number="2" title="Train cursor tracking">
            Start with a slow or teacher-controlled recording. The student places
            the cursor at the beginning and follows the transcript word by word as
            the speaker talks. The aim is to maintain position without jumping
            ahead.
          </StepCard>

          <StepCard number="3" title="Practise immediate selection">
            When the spoken word differs from the transcript, the student should
            click that word immediately. Avoid teaching students to wait until the
            end because the task requires them to identify differences as the text
            is being read.
          </StepCard>

          <StepCard number="4" title="Train confidence thresholds">
            Use practice transcripts containing both obvious and subtle changes.
            Ask students to distinguish between a word that genuinely differs and
            a word that merely sounds unfamiliar because of accent, connected
            speech or pronunciation.
          </StepCard>

          <StepCard number="5" title="Practise with varied accents">
            Use a range of appropriate English accents in classroom listening work.
            The goal is not to memorize a speaker's pronunciation but to improve
            the student's ability to compare the acoustic signal with the written
            word.
          </StepCard>

          <StepCard number="6" title="Review every click">
            After practice, replay the item and classify each selected word as
            correct selection, missed difference, or unnecessary selection. This
            gives the teacher a much clearer diagnosis than simply looking at the
            final score.
          </StepCard>
        </SectionCard>

        <SectionCard title="Common Classroom Traps" accent={RED} border={RED_BORDER}>
          <GuideItem
            title="Trap 1 — Reading the transcript word-for-word"
            accent={RED}
            accentLight={RED_LIGHT}
            border={RED_BORDER}
          >
            Students often try to read the whole passage during the short
            preparation period. This can leave them overloaded before the audio
            even starts. Train them to skim for topic and information-bearing words.
          </GuideItem>

          <GuideItem
            title="Trap 2 — Clicking because a word sounds unusual"
            accent={RED}
            accentLight={RED_LIGHT}
            border={RED_BORDER}
          >
            An unfamiliar accent or pronunciation does not automatically mean the
            transcript is wrong. Students need evidence that the spoken lexical
            item differs from the word displayed.
          </GuideItem>

          <GuideItem
            title="Trap 3 — Clicking too many words"
            accent={RED}
            accentLight={RED_LIGHT}
            border={RED_BORDER}
          >
            Guessing can be expensive because incorrect selections can lose points.
            Build the habit of selecting only when the student can identify a real
            mismatch.
          </GuideItem>

          <GuideItem
            title="Trap 4 — Losing the cursor position"
            accent={RED}
            accentLight={RED_LIGHT}
            border={RED_BORDER}
          >
            Once students lose their place, every following decision becomes less
            reliable. In practice, deliberately stop and reset the cursor rather
            than allowing the student to continue clicking randomly.
          </GuideItem>
        </SectionCard>

        <SectionCard title="Teacher Feedback Language" accent={GREEN} border={GREEN_BORDER}>
          <FeedbackPhrase label="Tracking">
            “You understood the passage, but you lost your place in the transcript.
            Keep your cursor moving with the speaker so your attention stays on the
            current word.”
          </FeedbackPhrase>
          <FeedbackPhrase label="Listening accuracy">
            “You followed the text well. Now work on hearing the exact word rather
            than relying on what you expect the sentence to say.”
          </FeedbackPhrase>
          <FeedbackPhrase label="Over-selection">
            “You identified the real differences, but you also selected words you
            were unsure about. Because wrong selections can reduce your score, only
            click when you hear a clear mismatch.”
          </FeedbackPhrase>
          <FeedbackPhrase label="Preparation">
            “Use the preparation time to identify the topic and key information
            words. Do not try to read the entire transcript word-for-word.”
          </FeedbackPhrase>
          <FeedbackPhrase label="Accent awareness">
            “That pronunciation sounded unfamiliar, but the word was still the same.
            Train yourself to separate accent or connected speech from a genuine
            lexical difference.”
          </FeedbackPhrase>
        </SectionCard>

        <SectionCard title="Quick Reference" accent={INDIGO} border={INDIGO_BORDER}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              ["Before audio", "Skim the transcript and identify the general topic."],
              ["First priority", "Keep your place in the transcript with the cursor."],
              ["While listening", "Compare the spoken word with the displayed word."],
              ["When different", "Click the incorrect transcript word immediately."],
              ["Avoid", "Do not take notes or click simply because a word sounds unfamiliar."],
              ["Scoring", "Correct selections gain points; incorrect selections can reduce the score."],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "12px 13px",
                  background: INDIGO_LIGHT,
                  border: `1px solid ${INDIGO_BORDER}`,
                  borderRadius: "9px",
                }}
              >
                <div
                  style={{
                    color: INDIGO,
                    fontSize: "10px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </div>
                <div style={{ color: TEXT, fontSize: "12px", lineHeight: 1.55 }}>
                  {value}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Official Scoring Reference" accent={AMBER} border={AMBER_BORDER}>
          <div
            style={{
              background: AMBER_LIGHT,
              border: `1px solid ${AMBER_BORDER}`,
              borderRadius: "10px",
              padding: "14px 15px",
              color: "#78350f",
              fontSize: "12px",
              lineHeight: 1.65,
            }}
          >
            <p style={{ margin: "0 0 9px" }}>
              <strong>Skills assessed:</strong> Listening and Reading.
            </p>
            <p style={{ margin: "0 0 9px" }}>
              <strong>Task:</strong> identify words in the transcript that differ
              from what is said in the recording.
            </p>
            <p style={{ margin: "0 0 9px" }}>
              <strong>Prompt length:</strong> 15–50 seconds. The recording is played
              once.
            </p>
            <p style={{ margin: "0 0 9px" }}>
              <strong>Scoring:</strong> each selected word is judged as correct or
              incorrect. Correct selections contribute to the score; incorrect
              selected options can result in a deduction, so partial credit applies.
            </p>
            <p style={{ margin: 0 }}>
              <strong>Teacher implication:</strong> accuracy matters more than the
              number of clicks. Students should be trained to recognize genuine
              transcript/audio differences rather than selecting uncertain words.
            </p>
          </div>
        </SectionCard>

        <SectionCard title="Teacher Checklist" accent={GREEN} border={GREEN_BORDER}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "9px",
            }}
          >
            {[
              "Student uses the preparation time to skim rather than read every word.",
              "Student identifies the general topic before the audio begins.",
              "Student starts with the cursor at the beginning of the transcript.",
              "Student keeps pace with the recording instead of reading ahead.",
              "Student distinguishes genuine word differences from pronunciation or accent differences.",
              "Student selects the incorrect word promptly when a mismatch is heard.",
              "Student avoids unnecessary selections when uncertain.",
              "Student can explain why each selected word differs from the recording.",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "9px",
                  alignItems: "flex-start",
                  padding: "10px 11px",
                  background: GREEN_LIGHT,
                  border: `1px solid ${GREEN_BORDER}`,
                  borderRadius: "9px",
                }}
              >
                <span
                  style={{
                    color: GREEN,
                    fontWeight: 900,
                    fontSize: "12px",
                    lineHeight: 1.4,
                  }}
                >
                  ✓
                </span>
                <span style={{ color: TEXT, fontSize: "12px", lineHeight: 1.5 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <div style={{ paddingTop: "2px", paddingBottom: "6px" }}>
        </div>
      </div>
    </div>
  );
}
