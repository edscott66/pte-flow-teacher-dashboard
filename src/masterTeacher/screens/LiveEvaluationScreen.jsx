import React, { useEffect, useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../../firebase";
import { useAuth } from "../../AuthContext";

import { QUESTIONS_DATA } from "../constants/questionsData";
import { getExercise } from "../constants/exerciseBank";

export default function LiveEvaluationScreen({
  onNavigate,
}) {
  const { roleData } = useAuth();

  const [activeSectionFilter, setActiveSectionFilter] =
    useState("ALL");

  const [isQuestionMenuOpen, setIsQuestionMenuOpen] =
    useState(false);

  const [selectedQuestionId, setSelectedQuestionId] =
    useState("read-aloud");

  const [exerciseIndex, setExerciseIndex] =
    useState(1);

  /*
   * ============================================================
   * STUDENT STATE
   * ============================================================
   */

  const [students, setStudents] = useState([]);

  const [loadingStudents, setLoadingStudents] =
    useState(true);

  const [studentError, setStudentError] =
    useState("");

  const [selectedStudentId, setSelectedStudentId] =
    useState("");

  /*
   * ============================================================
   * CURRENT QUESTION
   * ============================================================
   */

  const currentQuestion =
    QUESTIONS_DATA.find(
      (question) =>
        question.id === selectedQuestionId
    ) || QUESTIONS_DATA[0];

  /*
   * ============================================================
   * CURRENT EXERCISE
   * ============================================================
   */

  const currentExercise = getExercise(
    currentQuestion,
    exerciseIndex
  );

  /*
   * ============================================================
   * QUESTION TYPE FILTERING
   * ============================================================
   */

  const filteredQuestions = QUESTIONS_DATA.filter(
    (question) => {
      if (activeSectionFilter === "ALL") {
        return true;
      }

      return (
        question.section.toUpperCase() ===
        activeSectionFilter
      );
    }
  );

  /*
   * ============================================================
   * ACTIVE LIVE EVALUATION QUESTION TYPES
   * ============================================================
   */

  const activeQuestionTypes = new Set([
    "read-aloud",
    "repeat-sentence",
  ]);

  /*
   * ============================================================
   * STUDENT DISPLAY NAME
   * ============================================================
   */

  const getStudentDisplayName = (student) => {
    if (!student) {
      return "";
    }

    return (
      student.name ||
      student.displayName ||
      student.fullName ||
      student.studentName ||
      student.email ||
      student.id ||
      "Unnamed Student"
    );
  };

  /*
   * ============================================================
   * EXERCISE HELPERS
   * ============================================================
   */

  const getCefrLabel = (exercise) => {
    if (!exercise?.cefrLevel) {
      return "";
    }

    if (
      typeof exercise.cefrLevel ===
      "string"
    ) {
      return exercise.cefrLevel;
    }

    if (
      typeof exercise.cefrLevel ===
      "object"
    ) {
      return (
        exercise.cefrLevel.level ||
        exercise.cefrLevel.label ||
        exercise.cefrLevel.name ||
        ""
      );
    }

    return "";
  };

  const getExerciseTopic = (exercise) => {
    if (!exercise) {
      return "";
    }

    return (
      exercise.topicTitle ||
      exercise.topic ||
      `Exercise ${exerciseIndex}`
    );
  };

  const getExerciseDifficulty = (exercise) => {
    if (!exercise) {
      return "";
    }

    return exercise.difficulty || "";
  };

  /*
   * ============================================================
   * LOAD EXISTING STUDENT ROSTER
   * ============================================================
   *
   * This deliberately uses the existing Teacher Dashboard
   * "students" collection.
   *
   * No second student database is created.
   */

  useEffect(() => {
    let mounted = true;

    const loadStudents = async () => {
      setLoadingStudents(true);
      setStudentError("");

      try {
        const snapshot = await getDocs(
          collection(db, "students")
        );

        let list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const role = roleData?.role;

        const teacherClass =
          roleData?.className;

        const consultantList =
          roleData?.assignedStudents || [];

        /*
         * Teacher:
         * Only show students belonging to the
         * teacher's existing class.
         */
        if (role === "teacher") {
          list = list.filter(
            (student) =>
              student.className ===
              teacherClass
          );
        }

        /*
         * Consultant:
         * Only show students already assigned
         * to the consultant.
         */
        if (role === "consultant") {
          list = list.filter((student) =>
            consultantList.includes(
              student.id
            )
          );
        }

        /*
         * Keep the selector easy to use by sorting
         * students alphabetically.
         */
        list.sort((a, b) =>
          getStudentDisplayName(a).localeCompare(
            getStudentDisplayName(b)
          )
        );

        if (!mounted) {
          return;
        }

        setStudents(list);

        /*
         * If the previously selected student is no
         * longer available, clear the selection.
         */
        setSelectedStudentId((current) => {
          if (
            current &&
            list.some(
              (student) =>
                student.id === current
            )
          ) {
            return current;
          }

          return "";
        });
      } catch (error) {
        console.error(
          "Failed to load students for Live Evaluation:",
          error
        );

        if (mounted) {
          setStudentError(
            "Unable to load the existing student roster."
          );
        }
      } finally {
        if (mounted) {
          setLoadingStudents(false);
        }
      }
    };

    loadStudents();

    return () => {
      mounted = false;
    };
  }, [
    roleData?.role,
    roleData?.className,
    roleData?.assignedStudents,
  ]);

  /*
   * ============================================================
   * SELECTED STUDENT
   * ============================================================
   */

  const selectedStudent = students.find(
    (student) =>
      student.id === selectedStudentId
  );

  /*
   * ============================================================
   * QUESTION TYPE HANDLER
   * ============================================================
   */

  const handleQuestionMenuSelect = (
    questionId
  ) => {
    const selectedQuestion =
      QUESTIONS_DATA.find(
        (question) =>
          question.id === questionId
      );

    if (!selectedQuestion) {
      return;
    }

    /*
     * Coming Soon question types remain visible
     * but cannot currently be selected.
     */
    if (
      !activeQuestionTypes.has(
        selectedQuestion.id
      )
    ) {
      return;
    }

    setSelectedQuestionId(
      selectedQuestion.id
    );

    /*
     * Always start the new question type at
     * Exercise 1.
     */
    setExerciseIndex(1);

    setIsQuestionMenuOpen(false);
  };

  /*
   * ============================================================
   * EXERCISE NAVIGATION
   * ============================================================
   */

  const handlePreviousExercise = () => {
    setExerciseIndex((current) =>
      Math.max(1, current - 1)
    );
  };

  const handleNextExercise = () => {
    setExerciseIndex((current) =>
      Math.min(100, current + 1)
    );
  };

  const handleExerciseSelect = (
    event
  ) => {
    const nextIndex = Number(
      event.target.value
    );

    if (!Number.isInteger(nextIndex)) {
      return;
    }

    setExerciseIndex(
      Math.max(
        1,
        Math.min(100, nextIndex)
      )
    );
  };

  /*
   * ============================================================
   * EXERCISE GROUPS
   * ============================================================
   */

  const exerciseGroups = [
    {
      label:
        "A1 Level (Beginner • Q 1 - 20)",
      start: 1,
      end: 20,
    },
    {
      label:
        "A2 Level (Elementary • Q 21 - 40)",
      start: 21,
      end: 40,
    },
    {
      label:
        "B1 Level (Intermediate • Q 41 - 60)",
      start: 41,
      end: 60,
    },
    {
      label:
        "B2 Level (Upper Intermediate • Q 61 - 80)",
      start: 61,
      end: 80,
    },
    {
      label:
        "C1 Level (Advanced • Q 81 - 90)",
      start: 81,
      end: 90,
    },
    {
      label:
        "C2 Level (Proficient • Q 91 - 100)",
      start: 91,
      end: 100,
    },
  ];

  /*
   * ============================================================
   * FILTER BUTTON STYLE
   * ============================================================
   */

  const filterButtonStyle = (
    isActive
  ) => ({
    border: "1px solid",
    borderColor: isActive
      ? "#4f46e5"
      : "#d1d5db",
    backgroundColor: isActive
      ? "#4f46e5"
      : "#f8fafc",
    color: isActive
      ? "#ffffff"
      : "#475569",
    borderRadius: "999px",
    padding: "5px 12px",
    fontSize: "11px",
    fontWeight: 800,
    lineHeight: 1.2,
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition:
      "all 0.15s ease",
  });

  /*
   * ============================================================
   * CURRENT EXERCISE INFORMATION
   * ============================================================
   */

  const cefrLabel =
    getCefrLabel(currentExercise);

  const exerciseTopic =
    getExerciseTopic(currentExercise);

  const exerciseDifficulty =
    getExerciseDifficulty(
      currentExercise
    );

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
            Select a question type, exercise,
            and student before beginning a
            live evaluation.
          </p>
        </div>

        <div className="master-teacher-hero-badge">
          <span className="master-teacher-hero-icon">
            🎙️
          </span>

          <div>
            <strong>
              Student Evaluation
            </strong>

            <span>
              Teacher-led assessment
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
          EVALUATION SETUP
          ============================================================ */}

      <section className="master-teacher-section">

        <div className="master-teacher-section-heading">
          <div>
            <h3>
              Evaluation Setup
            </h3>

            <p>
              Choose the response type,
              exercise, and student before
              beginning the evaluation.
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
            <strong>
              Question Type
            </strong>

            <p>
              Select the PTE question type
              you want to evaluate.
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
                  activeSectionFilter ===
                  section;

                return (
                  <button
                    key={section}
                    type="button"
                    onClick={() => {
                      setActiveSectionFilter(
                        section
                      );

                      setIsQuestionMenuOpen(
                        false
                      );
                    }}
                    style={filterButtonStyle(
                      isActive
                    )}
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
              Select Question Type (
              {filteredQuestions.length}
              )
            </div>

            {/* ======================================================
                QUESTION SELECTOR
                ====================================================== */}

            <div
              style={{
                position: "relative",
                width: "100%",
              }}
            >
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={
                  isQuestionMenuOpen
                }
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
                  justifyContent:
                    "space-between",
                  gap: "12px",
                  padding: "9px 13px",
                  border:
                    "1px solid #94a3b8",
                  borderRadius: "10px",
                  backgroundColor:
                    "#ffffff",
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
                    textOverflow:
                      "ellipsis",
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  [
                  {currentQuestion.section}
                  ]{" "}
                  {currentQuestion.title}
                </span>

                <ChevronUp
                  size={17}
                  strokeWidth={2.5}
                  style={{
                    flexShrink: 0,
                    color: "#64748b",
                    transform:
                      isQuestionMenuOpen
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                    transition:
                      "transform 0.15s ease",
                  }}
                />
              </button>

              {isQuestionMenuOpen && (
                <div
                  role="listbox"
                  aria-label="Select Question Type"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top:
                      "calc(100% + 5px)",
                    zIndex: 9999,
                    maxHeight: "360px",
                    overflowY: "auto",
                    padding: "6px",
                    border:
                      "1px solid #cbd5e1",
                    borderRadius: "12px",
                    backgroundColor:
                      "#ffffff",
                    boxShadow:
                      "0 12px 30px rgba(15, 23, 42, 0.18)",
                    boxSizing: "border-box",
                  }}
                >
                  {filteredQuestions.map(
                    (question) => {
                      const isActiveQuestion =
                        question.id ===
                        selectedQuestionId;

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
                            alignItems:
                              "center",
                            justifyContent:
                              "space-between",
                            gap: "12px",
                            minHeight:
                              "42px",
                            padding:
                              "7px 10px",
                            margin: 0,
                            border:
                              "1px solid transparent",
                            borderRadius:
                              "8px",
                            backgroundColor:
                              isActiveQuestion
                                ? "#eff6ff"
                                : "#ffffff",
                            color:
                              "#173f78",
                            fontSize:
                              "12px",
                            fontWeight:
                              isActiveQuestion ||
                              isAvailableQuestion
                                ? 800
                                : 600,
                            textAlign:
                              "left",
                            cursor:
                              isAvailableQuestion
                                ? "pointer"
                                : "default",
                            opacity:
                              isAvailableQuestion
                                ? 1
                                : 0.9,
                            boxSizing:
                              "border-box",
                          }}
                          disabled={
                            !isAvailableQuestion
                          }
                        >
                          {isAvailableQuestion ? (
                            <span
                              style={{
                                display:
                                  "inline-flex",
                                alignItems:
                                  "center",
                                maxWidth:
                                  "100%",
                                padding:
                                  "3px 8px",
                                border:
                                  "1px solid #f5c15d",
                                borderRadius:
                                  "999px",
                                backgroundColor:
                                  "#fff7df",
                                color:
                                  "#a85d00",
                                fontSize:
                                  "9px",
                                fontWeight:
                                  900,
                                lineHeight:
                                  1.1,
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
                              [
                              {
                                question.section
                              }]{" "}
                              {
                                question.title
                              }
                            </span>
                          ) : (
                            <span
                              style={{
                                minWidth:
                                  0,
                                flex: 1,
                                overflow:
                                  "hidden",
                                textOverflow:
                                  "ellipsis",
                                whiteSpace:
                                  "nowrap",
                              }}
                            >
                              [
                              {
                                question.section
                              }]{" "}
                              {
                                question.title
                              }
                            </span>
                          )}

                          {!isAvailableQuestion && (
                            <span
                              style={{
                                flexShrink:
                                  0,
                                padding:
                                  "3px 8px",
                                border:
                                  "1px solid #f5c15d",
                                borderRadius:
                                  "999px",
                                backgroundColor:
                                  "#fff7df",
                                color:
                                  "#a85d00",
                                fontSize:
                                  "9px",
                                fontWeight:
                                  900,
                                lineHeight:
                                  1.1,
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
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================
            STEP 2 — EXERCISE
            ============================================================ */}

        <div
          className="master-teacher-notice"
          style={{
            position: "relative",
            overflow: "visible",
          }}
        >
          <span className="master-teacher-notice-icon">
            2
          </span>

          <div
            style={{
              width: "100%",
              minWidth: 0,
            }}
          >
            <strong>
              Exercise
            </strong>

            <p>
              Select the exercise you want
              the student to complete.
            </p>

            {/* ======================================================
                EXERCISE PANEL
                ====================================================== */}

            <div
              style={{
                marginTop: "10px",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor:
                  "#eef2ff",
                border:
                  "1px solid #dbeafe",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems:
                    "center",
                  justifyContent:
                    "space-between",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems:
                      "center",
                    gap: "7px",
                    minWidth: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize:
                        "10px",
                      fontWeight:
                        900,
                      textTransform:
                        "uppercase",
                      letterSpacing:
                        "0.06em",
                      color:
                        "#4f46e5",
                      whiteSpace:
                        "nowrap",
                    }}
                  >
                    PTE Exam Topic
                  </span>

                  {cefrLabel && (
                    <span
                      style={{
                        padding:
                          "3px 8px",
                        borderRadius:
                          "6px",
                        backgroundColor:
                          "#e0e7ff",
                        border:
                          "1px solid #c7d2fe",
                        color:
                          "#4338ca",
                        fontSize:
                          "9px",
                        fontWeight:
                          900,
                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      {cefrLabel}
                    </span>
                  )}

                  {exerciseDifficulty && (
                    <span
                      style={{
                        padding:
                          "3px 8px",
                        borderRadius:
                          "6px",
                        backgroundColor:
                          "#d1fae5",
                        border:
                          "1px solid #a7f3d0",
                        color:
                          "#047857",
                        fontSize:
                          "9px",
                        fontWeight:
                          900,
                        whiteSpace:
                          "nowrap",
                      }}
                    >
                      {
                        exerciseDifficulty
                      }
                    </span>
                  )}
                </div>

                <span
                  style={{
                    fontSize:
                      "10px",
                    fontWeight:
                      800,
                    color:
                      "#64748b",
                    whiteSpace:
                      "nowrap",
                  }}
                >
                  Exercise{" "}
                  {exerciseIndex}{" "}
                  of 100
                </span>
              </div>

              {/* ====================================================
                  EXERCISE NAVIGATION
                  ==================================================== */}

              <div
                style={{
                  display: "flex",
                  alignItems:
                    "center",
                  gap: "6px",
                  marginTop: "9px",
                  width: "100%",
                }}
              >
                <button
                  type="button"
                  disabled={
                    exerciseIndex <= 1
                  }
                  onClick={
                    handlePreviousExercise
                  }
                  title="Previous Exercise"
                  style={{
                    flexShrink: 0,
                    width: "34px",
                    height: "34px",
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    border:
                      "1px solid #cbd5e1",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#ffffff",
                    color:
                      "#475569",
                    cursor:
                      exerciseIndex <=
                      1
                        ? "not-allowed"
                        : "pointer",
                    opacity:
                      exerciseIndex <=
                      1
                        ? 0.4
                        : 1,
                  }}
                >
                  <ChevronLeft
                    size={16}
                  />
                </button>

                <select
                  value={
                    exerciseIndex
                  }
                  onChange={
                    handleExerciseSelect
                  }
                  style={{
                    flex: 1,
                    minWidth: 0,
                    height: "34px",
                    padding:
                      "0 9px",
                    border:
                      "1px solid #cbd5e1",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#ffffff",
                    color:
                      "#4f46e5",
                    fontSize:
                      "11px",
                    fontWeight:
                      800,
                    cursor:
                      "pointer",
                    outline:
                      "none",
                  }}
                >
                  {exerciseGroups.map(
                    (group) => (
                      <optgroup
                        key={
                          group.label
                        }
                        label={
                          group.label
                        }
                      >
                        {Array.from(
                          {
                            length:
                              group.end -
                              group.start +
                              1,
                          },
                          (
                            _,
                            offset
                          ) =>
                            group.start +
                            offset
                        ).map(
                          (number) => {
                            const exercise =
                              getExercise(
                                currentQuestion,
                                number
                              );

                            const topic =
                              getExerciseTopic(
                                exercise
                              );

                            return (
                              <option
                                key={
                                  number
                                }
                                value={
                                  number
                                }
                              >
                                {
                                  number
                                }
                                /100 [
                                {getCefrLabel(
                                  exercise
                                ) ||
                                  group.label.split(
                                    " "
                                  )[0]}
                                ] -{" "}
                                {topic}
                              </option>
                            );
                          }
                        )}
                      </optgroup>
                    )
                  )}
                </select>

                <button
                  type="button"
                  disabled={
                    exerciseIndex >=
                    100
                  }
                  onClick={
                    handleNextExercise
                  }
                  title="Next Exercise"
                  style={{
                    flexShrink: 0,
                    width: "34px",
                    height: "34px",
                    display:
                      "flex",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    border:
                      "1px solid #cbd5e1",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#ffffff",
                    color:
                      "#475569",
                    cursor:
                      exerciseIndex >=
                      100
                        ? "not-allowed"
                        : "pointer",
                    opacity:
                      exerciseIndex >=
                      100
                        ? 0.4
                        : 1,
                  }}
                >
                  <ChevronRight
                    size={16}
                  />
                </button>
              </div>

              {/* ====================================================
                  SELECTED EXERCISE SUMMARY
                  ==================================================== */}

              <div
                style={{
                  marginTop: "8px",
                  padding:
                    "8px 10px",
                  borderRadius:
                    "8px",
                  backgroundColor:
                    "#ffffff",
                  border:
                    "1px solid #dbeafe",
                  color:
                    "#334155",
                  fontSize:
                    "11px",
                  lineHeight:
                    1.45,
                }}
              >
                <strong>
                  {exerciseTopic}
                </strong>

                {currentExercise?.trainingSkill && (
                  <span>
                    {" "}
                    •{" "}
                    {
                      currentExercise.trainingSkill
                    }
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            STEP 3 — STUDENT
            ============================================================ */}

        <div
          className="master-teacher-notice"
          style={{
            position: "relative",
            overflow: "visible",
          }}
        >
          <span className="master-teacher-notice-icon">
            3
          </span>

          <div
            style={{
              width: "100%",
              minWidth: 0,
            }}
          >
            <strong>
              Student
            </strong>

            <p>
              Select the student who will
              complete this evaluation.
            </p>

            {/* ======================================================
                STUDENT SELECTOR
                ====================================================== */}

            <div
              style={{
                marginTop: "10px",
                padding: "12px",
                borderRadius: "12px",
                backgroundColor:
                  "#eef2ff",
                border:
                  "1px solid #dbeafe",
              }}
            >
              {loadingStudents ? (
                <div
                  style={{
                    padding:
                      "12px",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#ffffff",
                    border:
                      "1px solid #dbeafe",
                    color:
                      "#64748b",
                    fontSize:
                      "12px",
                    fontWeight:
                      700,
                  }}
                >
                  Loading your student roster...
                </div>
              ) : studentError ? (
                <div
                  style={{
                    padding:
                      "12px",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#fff7f7",
                    border:
                      "1px solid #fecaca",
                    color:
                      "#b91c1c",
                    fontSize:
                      "12px",
                    fontWeight:
                      700,
                  }}
                >
                  {studentError}
                </div>
              ) : students.length ===
                0 ? (
                <div
                  style={{
                    padding:
                      "12px",
                    borderRadius:
                      "8px",
                    backgroundColor:
                      "#ffffff",
                    border:
                      "1px solid #dbeafe",
                    color:
                      "#64748b",
                    fontSize:
                      "12px",
                    fontWeight:
                      700,
                  }}
                >
                  No students are currently
                  available in your existing
                  Teacher Dashboard roster.
                </div>
              ) : (
                <div
                  style={{
                    display:
                      "grid",
                    gap: "7px",
                  }}
                >
                  <label
                    htmlFor="live-evaluation-student"
                    style={{
                      fontSize:
                        "10px",
                      fontWeight:
                        900,
                      textTransform:
                        "uppercase",
                      letterSpacing:
                        "0.05em",
                      color:
                        "#4f46e5",
                    }}
                  >
                    Select Student
                  </label>

                  <select
                    id="live-evaluation-student"
                    value={
                      selectedStudentId
                    }
                    onChange={(
                      event
                    ) =>
                      setSelectedStudentId(
                        event.target
                          .value
                      )
                    }
                    style={{
                      width:
                        "100%",
                      minHeight:
                        "38px",
                      padding:
                        "8px 10px",
                      border:
                        "1px solid #cbd5e1",
                      borderRadius:
                        "8px",
                      backgroundColor:
                        "#ffffff",
                      color:
                        selectedStudentId
                          ? "#0f172a"
                          : "#64748b",
                      fontSize:
                        "12px",
                      fontWeight:
                        800,
                      cursor:
                        "pointer",
                      outline:
                        "none",
                    }}
                  >
                    <option value="">
                      Select a student
                    </option>

                    {students.map(
                      (student) => (
                        <option
                          key={
                            student.id
                          }
                          value={
                            student.id
                          }
                        >
                          {getStudentDisplayName(
                            student
                          )}
                        </option>
                      )
                    )}
                  </select>

                  {selectedStudent && (
                    <div
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: "8px",
                        marginTop:
                          "2px",
                        padding:
                          "7px 9px",
                        borderRadius:
                          "7px",
                        backgroundColor:
                          "#ffffff",
                        border:
                          "1px solid #dbeafe",
                        color:
                          "#475569",
                        fontSize:
                          "10px",
                        fontWeight:
                          700,
                      }}
                    >
                      <span
                        style={{
                          width:
                            "7px",
                          height:
                            "7px",
                          flexShrink: 0,
                          borderRadius:
                            "50%",
                          backgroundColor:
                            "#16a34a",
                        }}
                      />

                      <span>
                        Selected:{" "}
                        {
                          getStudentDisplayName(
                            selectedStudent
                          )
                        }
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>
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
          onClick={() =>
            onNavigate("home")
          }
        >
          Back to Master Teacher Home
        </button>
      </section>
    </div>
  );
}