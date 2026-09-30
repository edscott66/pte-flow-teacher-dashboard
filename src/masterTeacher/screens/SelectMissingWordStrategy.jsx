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
      <div
        style={{
          color: TEXT,
          fontSize: "13px",
          lineHeight: 1.6,
        }}
      >
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
      <div
        style={{
          color: MUTED,
          fontSize: "12px",
          lineHeight: 1.55,
        }}
      >
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
      <div
        style={{
          color: TEXT,
          fontSize: "12px",
          lineHeight: 1.55,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default function SelectMissingWordStrategy() {
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
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <button
          type="button"
          onClick={() => navigate("/master-teacher/tips")}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            padding: "9px 13px",
            borderRadius: "8px",
            border: `1px solid ${BLUE_BORDER}`,
            background: BLUE_LIGHT,
            color: BLUE,
            fontSize: "11px",
            fontWeight: 900,
            letterSpacing: "0.03em",
            cursor: "pointer",
            marginBottom: "14px",
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
            Select Missing Word — Examiner Strategy
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
            A teacher-focused guide to helping students follow the development
            of a recording, predict what the speaker will say next, and use
            contextual evidence to select the missing ending.
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
              ["TASK", "Select Missing Word"],
              ["RECORDING", "20–70 seconds"],
              ["SKILLS", "Listening"],
              ["ANSWER", "Select one option"],
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
            <strong>Scoring reminder:</strong> there are several response
            options but only one is correct. The response is scored as correct
            or incorrect, with no credit for an incorrect response or no
            response.
          </div>
        </SectionCard>

        <SectionCard title="Teacher Assessment Guide" accent={GREEN} border={GREEN_BORDER}>
          <GuideItem title="1. Follow the Whole Recording" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            The missing word appears at the end, but the evidence needed to
            predict it can develop throughout the recording. Teach students to
            follow the topic, argument, examples, and direction of the speaker
            rather than waiting only for the final sentence.
          </GuideItem>

          <GuideItem title="2. Listen Carefully to the Final Sentence" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            The final part of the recording often provides the strongest
            immediate context for the missing word or phrase. Students should
            pay particular attention to the sentence immediately before the
            beep and how the speaker is building toward its conclusion.
          </GuideItem>

          <GuideItem title="3. Predict Before Comparing Options" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            Encourage students to form a rough prediction of what could come
            next before allowing the answer choices to influence them. This
            makes it easier to reject distractors that sound familiar but do
            not fit the context.
          </GuideItem>

          <GuideItem title="4. Use Contextual Clues" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            The task is designed around predicting what the speaker will say
            from contextual clues. Train students to use topic, grammar,
            meaning, logical progression, and the speaker's preceding
            statement together.
          </GuideItem>

          <GuideItem title="5. Check the Option Against the Whole Meaning" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            The correct answer should complete the recording naturally and
            consistently with what the speaker has said. A word that fits the
            final phrase grammatically but contradicts the overall meaning is
            not the right choice.
          </GuideItem>
        </SectionCard>

        <SectionCard title="Diagnostic Focus">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            <DiagnosticItem
              title="Last-Second Listening"
              description="The student focuses only on the beep and misses the contextual information that predicts the missing ending."
            />
            <DiagnosticItem
              title="Weak Prediction"
              description="The student waits for the options before thinking about what the speaker is likely to say next."
            />
            <DiagnosticItem
              title="Vocabulary Matching"
              description="The student selects an option because it contains a familiar word rather than because it completes the speaker's meaning."
            />
            <DiagnosticItem
              title="Grammar Without Meaning"
              description="The student finds an option that fits grammatically but does not make sense in the context of the recording."
            />
            <DiagnosticItem
              title="Context Loss"
              description="The student remembers the final sentence but cannot explain how the earlier discussion supports the answer."
            />
            <DiagnosticItem
              title="Distractor Acceptance"
              description="The student chooses a plausible-sounding option without checking it against the speaker's argument or conclusion."
            />
          </div>
        </SectionCard>

        <SectionCard title="Classroom Strategy">
          <GuideItem title="First Listen: Establish the Topic" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Train students to identify the general topic and the direction of
            the recording. Ask them to summarize the speaker's main point in a
            few words before discussing the final answer.
          </GuideItem>

          <GuideItem title="Track the Development" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Students should notice how the speaker moves from one point to the
            next. Encourage notes or mental markers for examples, contrasts,
            explanations, conclusions, and changes in direction.
          </GuideItem>

          <GuideItem title="Focus at the End" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            As the recording approaches the beep, students should listen
            carefully to the final sentence and predict the missing word or
            group of words before looking for the closest option.
          </GuideItem>

          <GuideItem title="Compare Options by Meaning" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Have students eliminate options that conflict with the recording,
            then compare the remaining choices against the exact context and
            logical direction of the speaker's final statement.
          </GuideItem>

          <GuideItem title="Use Error Analysis After the Question" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            When reviewing a mistake, ask: “What clue in the recording should
            have helped you predict the answer?” This turns an incorrect answer
            into a listening strategy rather than simply a vocabulary correction.
          </GuideItem>
        </SectionCard>

        <SectionCard title="Teacher Feedback Language" accent={GREEN} border={GREEN_BORDER}>
          <FeedbackPhrase label="When the student focused only on the ending">
            “You listened carefully to the final words, but you needed to use
            information from earlier in the recording to predict how the speaker
            would finish the idea.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student chose a familiar word">
            “That option contains familiar vocabulary, but the task is testing
            whether it fits the meaning of the recording. Use the surrounding
            context before choosing.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student ignored the final sentence">
            “The final sentence gave you an important clue. Next time, listen
            especially carefully to how the speaker develops the idea immediately
            before the beep.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student used grammar only">
            “The option fits the sentence grammatically, but it does not fit
            the speaker's meaning. Check both grammar and context.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student guessed from the options">
            “Try to predict the type of answer before you compare the choices.
            That makes it easier to recognize distractors.”
          </FeedbackPhrase>
        </SectionCard>

        <SectionCard title="Quick Reference" accent={AMBER} border={AMBER_BORDER}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              ["Recording", "20–70 seconds"],
              ["Audio", "Played once"],
              ["Response", "One answer"],
              ["Options", "Several options; one correct"],
              ["Main skill", "Predict the missing ending from context"],
              ["Key evidence", "Topic, meaning, logical progression, final sentence"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "11px 12px",
                  background: "#ffffff",
                  border: "1px solid #fde68a",
                  borderRadius: "9px",
                }}
              >
                <div
                  style={{
                    color: AMBER,
                    fontSize: "10px",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    color: TEXT,
                    fontSize: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Official Scoring Reference">
          <p
            style={{
              margin: "0 0 10px",
              color: TEXT,
              fontSize: "13px",
              lineHeight: 1.65,
            }}
          >
            Pearson states that Select Missing Word is judged on the ability to
            predict what a speaker will say based on contextual clues in a
            recording.
          </p>

          <ul
            style={{
              margin: 0,
              paddingLeft: "20px",
              color: TEXT,
              fontSize: "12px",
              lineHeight: 1.7,
            }}
          >
            <li>The final word or group of words is replaced by a beep.</li>
            <li>There are several response options, with only one correct.</li>
            <li>The audio recording is played once.</li>
            <li>The response is scored as correct or incorrect.</li>
            <li>No credit is given for an incorrect response or no response.</li>
            <li>The task affects the scoring of Listening only.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Teacher Checklist" accent={GREEN} border={GREEN_BORDER}>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              "Did the student follow the recording rather than focus only on the final few seconds?",
              "Did the student identify the topic and direction of the recording?",
              "Did the student pay close attention to the sentence immediately before the beep?",
              "Did the student form a prediction before comparing the answer options?",
              "Did the selected option fit the meaning and logical progression of the recording?",
              "Can the student identify the contextual clue that supports the correct answer?",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "#ffffff",
                  border: "1px solid #dbeafe",
                  color: TEXT,
                  fontSize: "12px",
                  lineHeight: 1.5,
                }}
              >
                • {item}
              </div>
            ))}
          </div>
        </SectionCard>

        <div
          style={{
            marginTop: "24px",
            paddingTop: "16px",
            borderTop: "1px solid #e2e8f0",
          }}
        >
        </div>
      </div>
    </div>
  );
}
