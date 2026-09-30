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

function SectionCard({ title, accent = BLUE, accentLight = BLUE_LIGHT, border = BLUE_BORDER, children }) {
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

export default function ListeningMultipleChoiceSingleStrategy() {
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
            Multiple Choice, Single Answer — Examiner Strategy
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
            A teacher-focused guide to helping students identify the listening
            focus of a question, follow the recording for the right evidence,
            and choose the single response that best answers the question.
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
              ["TASK", "Multiple Choice, Single Answer"],
              ["RECORDING", "30–60 seconds"],
              ["SKILLS", "Listening"],
              ["ANSWER", "Select one response"],
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
            <strong>Scoring reminder:</strong> only one response is correct.
            The response is scored as correct or incorrect, with no credit for
            an incorrect response or no response.
          </div>
        </SectionCard>

        <SectionCard title="Teacher Assessment Guide" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
          <GuideItem title="1. Identify the Question Focus" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            Teach students to use the question itself as a listening guide.
            The question may ask for the main idea, a supporting detail, an
            inference, or the speaker’s purpose. Knowing the focus helps the
            student listen for the evidence that actually matters.
          </GuideItem>

          <GuideItem title="2. Listen for Meaning, Not Isolated Words" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            A correct option should answer the question based on the meaning
            of the recording. Students should not select an option simply
            because they hear the same word or phrase in the audio.
          </GuideItem>

          <GuideItem title="3. Separate Main Ideas from Supporting Details" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            When the question asks about the main idea, a single example or
            detail is not enough. When it asks for a specific detail, the
            student needs to identify the particular information mentioned by
            the speaker.
          </GuideItem>

          <GuideItem title="4. Listen for Inference" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            An inference question may require students to understand what the
            speaker suggests rather than repeat an exact sentence from the
            recording. Encourage them to connect the speaker’s statements
            before choosing an answer.
          </GuideItem>

          <GuideItem title="5. Listen for Speaker Purpose" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
            Purpose questions ask why the speaker discusses something. Students
            should distinguish the topic being discussed from the reason the
            speaker introduces or discusses it.
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
              title="Word Matching"
              description="The student chooses an option because it repeats words from the recording rather than because it answers the question."
            />
            <DiagnosticItem
              title="Wrong Listening Focus"
              description="The student listens for general information even though the question requires a detail, inference, or speaker purpose."
            />
            <DiagnosticItem
              title="Main Idea vs Detail"
              description="The student selects a true detail when the question asks what the recording is mainly about."
            />
            <DiagnosticItem
              title="Inference Failure"
              description="The student expects the answer to be stated word-for-word and misses what the speaker implies."
            />
            <DiagnosticItem
              title="Purpose Confusion"
              description="The student identifies what the speaker mentions but not why the speaker mentions it."
            />
            <DiagnosticItem
              title="Option Reading Failure"
              description="The student does not use the short preparation period to understand the topic and differences between the options."
            />
          </div>
        </SectionCard>

        <SectionCard title="Classroom Strategy">
          <GuideItem title="Before the Recording" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Use the short preparation period to skim the question and answer
            options. The goal is not to memorize every word. The goal is to
            understand the topic and recognize what distinguishes the options.
          </GuideItem>

          <GuideItem title="During the Recording" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Train students to listen according to the question focus. If the
            question asks for the main idea, track the overall message. If it
            asks for a detail, listen for the relevant evidence. If it asks
            for an inference or purpose, listen for relationships and speaker
            intention.
          </GuideItem>

          <GuideItem title="After the Recording" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Have students compare the options against what they actually heard.
            Ask them to explain why their selected option answers the question
            and why the alternatives do not.
          </GuideItem>

          <GuideItem title="Build Evidence-Based Selection" accent={BLUE} accentLight={BLUE_LIGHT} border={BLUE_BORDER}>
            Make students justify an answer with a specific piece of evidence
            from the recording. This reduces guessing based on familiar words
            or an option that simply sounds plausible.
          </GuideItem>
        </SectionCard>

        <SectionCard title="Teacher Feedback Language" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
          <FeedbackPhrase label="When the student matched words">
            “You chose this option because some of its words appeared in the
            recording. Next time, check whether the option answers the actual
            question, not just whether you heard the same vocabulary.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student missed the question focus">
            “You understood part of the recording, but you were listening for
            general information rather than the specific information the
            question asked for.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student chose a detail for a main idea">
            “That detail was mentioned, but it does not represent the main
            message of the recording. Look for the option that covers the
            overall point.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student missed an inference">
            “The answer was not stated directly. Look at what the speaker says
            and what those statements suggest together.”
          </FeedbackPhrase>

          <FeedbackPhrase label="When the student missed speaker purpose">
            “You identified the topic, but the question asks why the speaker
            discussed it. Listen for the purpose behind the example or point.”
          </FeedbackPhrase>
        </SectionCard>

        <SectionCard title="Quick Reference" accent={AMBER} accentLight={AMBER_LIGHT} border={AMBER_BORDER}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "10px",
            }}
          >
            {[
              ["Recording", "30–60 seconds"],
              ["Audio", "Played once"],
              ["Response", "One answer"],
              ["Skills", "Listening"],
              ["Preparation", "Quickly skim the question and options"],
              ["Main skill", "Analyze and interpret the recording"],
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
            Pearson states that Multiple Choice, Single Answer is judged on the
            ability to analyze, interpret, and evaluate a brief audio or video
            recording on an academic subject.
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
            <li>Only one response is correct.</li>
            <li>The response is scored as correct or incorrect.</li>
            <li>No credit is given for an incorrect response or no response.</li>
            <li>The task affects Listening only.</li>
            <li>Speaking and Writing are not tested by this question type.</li>
            <li>Reading is used only for the instructions, prompt, and response options.</li>
          </ul>
        </SectionCard>

        <SectionCard title="Teacher Checklist" accent={GREEN} accentLight={GREEN_LIGHT} border={GREEN_BORDER}>
          <div style={{ display: "grid", gap: "8px" }}>
            {[
              "Did the student identify what the question was asking them to listen for?",
              "Did the student use the short preparation period to understand the options?",
              "Did the student choose for meaning rather than matching familiar words?",
              "Did the student distinguish the main idea from a supporting detail?",
              "Did the student consider inference or speaker purpose when required?",
              "Can the student explain what evidence from the recording supports the selected answer?",
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
