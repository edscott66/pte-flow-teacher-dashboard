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
      background: background,
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

const HighlightIncorrectWordsStrategy = () => {
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
          fontSize: "11px",
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
          Listening
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
          Write from Dictation — Examiner Strategy
        </h1>
        <p
          style={{
            margin: "12px 0 0",
            color: "#5270a5",
            fontSize: "14px",
            lineHeight: 1.65,
            maxWidth: "1120px",
          }}
        >
          A teacher-focused guide to helping students hear, retain and
          accurately reconstruct a short sentence, with particular attention
          to word order, spelling and partial-credit opportunities.
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
          <InfoCard label="Task" value="Write from Dictation" />
          <InfoCard label="Recording" value="3–5 seconds" />
          <InfoCard label="Skills" value="Listening + Writing" />
          <InfoCard label="Response" value="Type the sentence" />
          <InfoCard label="Audio" value="Played once" />
        </div>

        <div
          style={{
            marginTop: "14px",
            padding: "12px 15px",
            borderRadius: "9px",
            border: "1px solid #fde68a",
            background: LIGHT_AMBER,
            color: "#92400e",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          <strong>Scoring reminder:</strong> points are awarded for correct
          words in the correct order. Correct spelling is required for the word
          to receive the point. Partial credit applies when one or more words
          are incorrect.
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
          The teacher should judge the response primarily as a transcription
          task: what words did the student successfully hear and reproduce,
          were they placed in the correct order, and were they spelled
          correctly?
        </p>

        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <Bullet color={GREEN}>
            Check <strong>word accuracy</strong> first. Identify which target
            words are present and correctly reproduced.
          </Bullet>
          <Bullet color={GREEN}>
            Check <strong>word order</strong>. A remembered word is useful only
            when it is positioned appropriately within the sentence.
          </Bullet>
          <Bullet color={GREEN}>
            Check <strong>spelling</strong> separately. A word that was
            understood but misspelled does not receive the same credit as a
            correctly spelled word.
          </Bullet>
          <Bullet color={GREEN}>
            Look for <strong>partial-credit opportunities</strong>. A student
            who cannot reproduce the complete sentence may still have several
            correct words.
          </Bullet>
          <Bullet color={GREEN}>
            When a word is uncertain, consider whether the student's grammar
            knowledge could help them reconstruct its position or form.
          </Bullet>
        </ul>

        <AdviceBox title="What the teacher should listen for">
          The most useful diagnostic question is not simply “Did the student
          remember the sentence?” Instead ask: <strong>Which part of the
          sentence broke down?</strong> Was it sound-to-word recognition,
          retention, sequencing, spelling, or the student's ability to rebuild
          the sentence after the recording ended?
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
              01 — Recognition
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Did the student actually hear the target word, or did connected
              speech make the word difficult to identify?
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
              02 — Retention & Order
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Did the student retain enough of the sentence and reconstruct the
              words in the correct sequence?
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
              03 — Spelling
            </div>
            <div
              style={{
                color: "#4b5563",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              Did the student know the word but lose the point through spelling
              rather than listening?
            </div>
          </div>
        </div>

        <AdviceBox
          title="Teacher diagnostic rule"
          background="#fff7ed"
          border="#fed7aa"
          accent="#c2410c"
        >
          Separate <strong>listening failure</strong> from <strong>writing
          failure</strong>. If the student heard and retained the word but
          consistently misspells it, the classroom intervention should be
          different from a student who never recognized the word in the first
          place.
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
              Step 1 — Listen for meaning
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Train students to hear the sentence as meaningful language rather
              than as a string of isolated sounds. Encourage them to recognise
              familiar phrases and the overall grammatical shape.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: "1px solid #bfdbfe",
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
              Step 2 — Capture chunks
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Build short-term memory through meaningful groups of words.
              Encourage students to retain the sentence in phrases rather than
              attempting to remember every word as a separate item.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: "1px solid #bfdbfe",
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
              Step 3 — Reconstruct with grammar
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              If a word is remembered but its position is uncertain, use
              grammatical knowledge and the surrounding phrase to decide where
              it belongs.
            </p>
          </div>

          <div
            style={{
              padding: "17px",
              borderRadius: "11px",
              border: "1px solid #bfdbfe",
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
              Step 4 — Protect spelling
            </div>
            <p
              style={{
                margin: 0,
                color: "#475569",
                fontSize: "12px",
                lineHeight: 1.65,
              }}
            >
              Make spelling part of the routine rather than an afterthought.
              Students should use the available time after listening to check
              words they are unsure about.
            </p>
          </div>
        </div>

        <AdviceBox title="Useful classroom drill">
          Read a short sentence aloud once. Give students a few seconds to
          write what they remember. Then compare the response word by word with
          the original. Categorise every error as <strong>missing word</strong>,
          <strong>wrong word</strong>, <strong>word order</strong>, or
          <strong>spelling</strong>. This makes the reason for lost points
          visible instead of treating the task as simply right or wrong.
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
            <strong>Trying to write while listening:</strong> students may
            sacrifice later words because they are concentrating on recording
            earlier ones.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Remembering isolated keywords:</strong> individual words
            without the surrounding grammatical structure are easier to
            misorder.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Ignoring spelling:</strong> students may know what they
            heard but fail to convert that knowledge into a correctly spelled
            response.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Giving up after missing one word:</strong> one uncertain
            word does not mean the rest of the sentence has been lost.
          </Bullet>
          <Bullet color="#dc2626">
            <strong>Overcorrecting the response:</strong> remind students that
            the goal is to reproduce what was heard, not to rewrite the sentence
            in their own words.
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
          You remembered the main structure of the sentence. Now work on
          retaining the smaller words between the key phrases.
        </QuoteCard>

        <QuoteCard>
          You heard this word correctly, but the spelling cost you the point.
          Let's add this word to your spelling practice.
        </QuoteCard>

        <QuoteCard>
          Your problem here is mainly word order. You remembered most of the
          vocabulary, so let's practise rebuilding the sentence in chunks.
        </QuoteCard>

        <QuoteCard>
          Don't stop after one word disappears from memory. Keep reconstructing
          the rest of the sentence and collect as many correct words as
          possible.
        </QuoteCard>

        <QuoteCard>
          Listen for the meaning and grammatical shape of the whole sentence,
          rather than trying to store every word separately.
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
            ["Hear", "Understand the sentence as meaningful language."],
            ["Hold", "Retain useful phrases and the sentence structure."],
            ["Build", "Use grammar to reconstruct uncertain positions."],
            ["Check", "Review spelling and word order before finishing."],
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
        <SectionTitle color={AMBER}>Official Scoring Reference</SectionTitle>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "12px",
            marginBottom: "15px",
          }}
        >
          <InfoCard label="Scoring factor" value="Content" />
          <InfoCard label="Scoring method" value="Correct words" />
          <InfoCard
            label="Partial credit"
            value="Yes, when one or more words are incorrect"
          />
        </div>

        <div
          style={{
            padding: "15px 17px",
            borderRadius: "10px",
            background: LIGHT_AMBER,
            border: "1px solid #fde68a",
            color: "#78350f",
            fontSize: "12px",
            lineHeight: 1.65,
          }}
        >
          Pearson states that Write from Dictation measures the ability to
          understand and remember a sentence and then write it as heard using
          correct spelling. Content is scored by counting the number of correct
          words. The task contributes to both <strong>Listening</strong> and
          <strong> Writing</strong> scores.
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
          Listening.
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
            "Identify which target words were correctly reproduced.",
            "Check whether the correct words are in the correct order.",
            "Separate spelling errors from listening errors.",
            "Look for partial-credit opportunities.",
            "Identify whether the student is storing chunks or isolated words.",
            "Use grammar as a reconstruction strategy when a word position is uncertain.",
            "Give one specific intervention rather than general advice to “listen harder”.",
            "Track repeated problem words or patterns across several dictation items.",
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

export default HighlightIncorrectWordsStrategy;
