import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

import { QUESTIONS_DATA } from "../constants/questionsData";

export default function LiveEvaluationScreen({ onNavigate }) {
  const [activeSectionFilter, setActiveSectionFilter] =
    useState("ALL");

  const [isQuestionMenuOpen, setIsQuestionMenuOpen] =
    useState(false);

  const [selectedQuestionId, setSelectedQuestionId] =
    useState("read-aloud");

  const currentQuestion =
    QUESTIONS_DATA.find(
      (question) => question.id === selectedQuestionId
    ) || QUESTIONS_DATA[0];

  /*
   * Keep the same five section filters used by the
   * Teacher Calibration question selector.
   */
  const filteredQuestions = QUESTIONS_DATA.filter((question) => {
    if (activeSectionFilter === "ALL") {
      return true;
    }

    return (
      question.section.toUpperCase() ===
      activeSectionFilter
    );
  });

  /*
   * These are the question types currently active in
   * the Live Evaluation workflow.
   *
   * All other question types remain visible in the menu
   * with a Coming Soon badge.
   */
  const activeQuestionTypes = new Set([
    "read-aloud",
    "repeat-sentence",
  ]);

  const handleQuestionMenuSelect = (questionId) => {
    const selectedQuestion = QUESTIONS_DATA.find(
      (question) => question.id === questionId
    );

    if (!selectedQuestion) {
      return;
    }

    /*
     * Unsupported question types remain visible but
     * cannot currently be selected.
     */
    if (!activeQuestionTypes.has(selectedQuestion.id)) {
      return;
    }

    setSelectedQuestionId(selectedQuestion.id);
    setIsQuestionMenuOpen(false);
  };

  /*
   * Section filter styling.
   */
  const filterButtonStyle = (isActive) => ({
    border: "1px solid",
    borderColor: isActive ? "#4f46e5" : "#d1d5db",
    backgroundColor: isActive ? "#4f46e5" : "#f8fafc",
    color: isActive ? "#ffffff" : "#475569",
    borderRadius: "999px",
    padding: "5px 12px",
    fontSize: "11px",
    fontWeight: 800,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "all 0.15s ease",
  });

  return (
    <div className="master-teacher-home">
      {/* ============================================================
          LIVE EVALUATION HERO
          ============================================================ */}

      <div className="master-teacher-hero">
        <div>
          <div className="master-teacher-kicker">
            LIVE EVALUATION
          </div>

          <h2>Live Evaluation</h2>

          <p>
            Select a question type, exercise, and student
            before beginning a live evaluation.
          </p>
        </div>

        <div className="master-teacher-hero-badge">
          <span className="master-teacher-hero-icon">
            🎙️
          </span>

          <div>
            <strong>Student Evaluation</strong>
            <span>Teacher-led assessment</span>
          </div>
        </div>
      </div>

      {/* ============================================================
          EVALUATION SETUP
          ============================================================ */}

      <section className="master-teacher-section">
        <div className="master-teacher-section-heading">
          <div>
            <h3>Evaluation Setup</h3>

            <p>
              Choose the response type, exercise, and student
              before beginning the evaluation.
            </p>
          </div>
        </div>

        {/* ============================================================
            STEP 1 — QUESTION TYPE
            ============================================================ */}

        <div
          className="master-teacher-notice"
          style={{
            position: "relative",
            overflow: "visible",
          }}
        >
          <span className="master-teacher-notice-icon">
            1
          </span>

          <div
            style={{
              width: "100%",
              minWidth: 0,
            }}
          >
            <strong>Question Type</strong>

            <p>
              Select the PTE question type you want to
              evaluate.
            </p>

            {/* ======================================================
                SECTION FILTERS
                ====================================================== */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                overflowX: "auto",
                paddingTop: "8px",
                paddingBottom: "4px",
                scrollbarWidth: "none",
              }}
            >
              {[
                "ALL",
                "SPEAKING",
                "WRITING",
                "READING",
                "LISTENING",
              ].map((section) => {
                const isActive =
                  activeSectionFilter === section;

                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => {
                      setActiveSectionFilter(section);
                      setIsQuestionMenuOpen(false);
                    }}
                    style={filterButtonStyle(isActive)}
                  >
                    {section}
                  </button>
                );
              })}
            </div>

            {/* ======================================================
                QUESTION SELECTOR LABEL
                ====================================================== */}

            <div
              style={{
                marginTop: "7px",
                marginBottom: "5px",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.04em",
                color: "#64748b",
              }}
            >
              Select Question Type ({filteredQuestions.length})
            </div>

            {/* ======================================================
                CUSTOM QUESTION SELECTOR
                ====================================================== */}

            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              {/* Selected Question Button */}
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isQuestionMenuOpen}
                onClick={() =>
                  setIsQuestionMenuOpen(
                    (open) => !open
                  )
                }
                style={{
                  width: "100%",
                  minHeight: "42px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  padding: "9px 13px",
                  border: "1px solid #94a3b8",
                  borderRadius: "10px",
                  backgroundColor: "#ffffff",
                  color: "#0f172a",
                  fontSize: "13px",
                  fontWeight: 800,
                  textAlign: "left",
                  cursor: "pointer",
                  boxSizing: "border-box",
                  boxShadow:
                    "0 1px 2px rgba(15, 23, 42, 0.05)",
                }}
              >
                <span
                  style={{
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  [{currentQuestion.section}]{" "}
                  {currentQuestion.title}
                </span>

                <ChevronUp
                  size={17}
                  strokeWidth={2.5}
                  style={{
                    flexShrink: 0,
                    color: "#64748b",
                    transform: isQuestionMenuOpen
                      ? "rotate(0deg)"
                      : "rotate(180deg)",
                    transition:
                      "transform 0.15s ease",
                  }}
                />
              </button>

              {/* ==================================================
                  EXPANDED QUESTION LIST
                  ================================================== */}

              {isQuestionMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Select Question Type"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "calc(100% + 5px)",
                    zIndex: 9999,
                    maxHeight: "360px",
                    overflowY: "auto",
                    padding: "6px",
                    border:
                      "1px solid #cbd5e1",
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    boxShadow:
                      "0 12px 30px rgba(15, 23, 42, 0.18)",
                    boxSizing: "border-box",
                  }}
                >
                  {filteredQuestions.map((question) => {
                    const isActiveQuestion =
                      question.id === selectedQuestionId;

                    const isAvailableQuestion =
                      activeQuestionTypes.has(
                        question.id
                      );

                    return (
                      <button
                        key={question.id}
                        type="button"
                        role="option"
                        aria-selected={
                          isActiveQuestion
                        }
                        onClick={() =>
                          handleQuestionMenuSelect(
                            question.id
                          )
                        }
                        style={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent:
                            "space-between",
                          gap: "12px",
                          minHeight: "42px",
                          padding: "7px 10px",
                          margin: 0,
                          border:
                            "1px solid transparent",
                          borderRadius: "8px",
                          backgroundColor:
                            isActiveQuestion
                              ? "#eff6ff"
                              : "#ffffff",
                          color: "#173f78",
                          fontSize: "12px",
                          fontWeight:
                            isActiveQuestion ||
                            isAvailableQuestion
                              ? 800
                              : 600,
                          textAlign: "left",
                          cursor: isAvailableQuestion
                            ? "pointer"
                            : "default",
                          opacity:
                            isAvailableQuestion
                              ? 1
                              : 0.9,
                          boxSizing: "border-box",
                        }}
                        disabled={
                          !isAvailableQuestion
                        }
                      >
                        {/* ==================================================
                            AVAILABLE QUESTION TYPE
                            ================================================== */}

                        {isAvailableQuestion ? (
                          <span
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              maxWidth: "100%",
                              padding:
                                "3px 8px",
                              border:
                                "1px solid #f5c15d",
                              borderRadius:
                                "999px",
                              backgroundColor:
                                "#fff7df",
                              color: "#a85d00",
                              fontSize: "9px",
                              fontWeight: 900,
                              lineHeight: 1.1,
                              textTransform:
                                "uppercase",
                              letterSpacing:
                                "0.035em",
                              whiteSpace:
                                "nowrap",
                              overflow:
                                "hidden",
                              textOverflow:
                                "ellipsis",
                            }}
                          >
                            [{question.section}]{" "}
                            {question.title}
                          </span>
                        ) : (
                          /* ==================================================
                              COMING SOON QUESTION TYPE
                              ================================================== */

                          <span
                            style={{
                              minWidth: 0,
                              flex: 1,
                              overflow: "hidden",
                              textOverflow:
                                "ellipsis",
                              whiteSpace:
                                "nowrap",
                            }}
                          >
                            [{question.section}]{" "}
                            {question.title}
                          </span>
                        )}

                        {/* ==================================================
                            COMING SOON BADGE
                            ================================================== */}

                        {!isAvailableQuestion && (
                          <span
                            style={{
                              flexShrink: 0,
                              padding:
                                "3px 8px",
                              border:
                                "1px solid #f5c15d",
                              borderRadius:
                                "999px",
                              backgroundColor:
                                "#fff7df",
                              color: "#a85d00",
                              fontSize: "9px",
                              fontWeight: 900,
                              lineHeight: 1.1,
                              textTransform:
                                "uppercase",
                              letterSpacing:
                                "0.04em",
                            }}
                          >
                            Coming Soon
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            STEP 2 — EXERCISE
            ============================================================ */}

        <div className="master-teacher-notice">
          <span className="master-teacher-notice-icon">
            2
          </span>

          <div>
            <strong>Exercise</strong>

            <p>
              Exercise selection will be connected to the
              selected question type in the next step.
            </p>
          </div>
        </div>

        {/* ============================================================
            STEP 3 — STUDENT
            ============================================================ */}

        <div className="master-teacher-notice">
          <span className="master-teacher-notice-icon">
            3
          </span>

          <div>
            <strong>Student</strong>

            <p>
              Student selection will be connected to the
              existing student roster in the next step.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          NAVIGATION
          ============================================================ */}

      <section className="master-teacher-section master-teacher-section-secondary">
        <button
          type="button"
          className="master-teacher-primary-button"
          onClick={() => onNavigate("home")}
        >
          Back to Master Teacher Home
        </button>
      </section>
    </div>
  );
}