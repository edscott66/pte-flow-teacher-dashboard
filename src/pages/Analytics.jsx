import "./Analytics.css";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import {
  getTeacherCalibrationAttempts,
  getTeacherLiveEvaluationCalibrationAttempts,
} from "../services/teacherAnalyticsService";
import {
  READ_ALOUD_CALIBRATION_EXERCISES,
  getExercise,
} from "../masterTeacher/constants/exerciseBank";
import { QUESTIONS_DATA } from "../masterTeacher/constants/questionsData";

export default function Analytics() {
  const { roleData } = useAuth();

  const role = roleData?.role;
  const displayName = roleData?.name || "User";

  const [attempts, setAttempts] = useState([]);
  const [liveEvaluationAttempts, setLiveEvaluationAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAttempt, setSelectedAttempt] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAnalytics() {
      setLoading(true);
      setError("");

      try {
        const [calibrationAttempts, liveAttempts] = await Promise.all([
          getTeacherCalibrationAttempts(),
          getTeacherLiveEvaluationCalibrationAttempts(),
        ]);

        if (isMounted) {
          setAttempts(calibrationAttempts);
          setLiveEvaluationAttempts(liveAttempts);
        }
      } catch (err) {
        console.error("Failed to load teacher analytics:", err);

        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load teacher analytics."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadAnalytics();

    return () => {
      isMounted = false;
    };
  }, []);

  const scores = attempts
    .map((attempt) => attempt.matchPercentage)
    .filter(
      (score) =>
        typeof score === "number" && Number.isFinite(score)
    );

  const completedExercises = attempts.length;

  const averageMatch =
    scores.length > 0
      ? Math.round(
          scores.reduce((total, score) => total + score, 0) /
            scores.length
        )
      : 0;

  const bestMatch =
    scores.length > 0 ? Math.max(...scores) : 0;

  const lowestMatch =
    scores.length > 0 ? Math.min(...scores) : 0;
    const getScoreClass = (score) =>
    score >= 85
      ? "master"
      : score >= 70
        ? "proficient"
        : score >= 50
          ? "developing"
          : "needs-calibration";

  const recentAttempts = attempts.slice(0, 10);

const historyAttempts = attempts;

  const trendAttempts = [...attempts]
    .filter(
      (attempt) =>
        typeof attempt.matchPercentage === "number" &&
        Number.isFinite(attempt.matchPercentage)
    )
    .slice(0, 10)
    .reverse();

  const cefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const cefrPerformance = cefrOrder
    .map((level) => {
      const levelAttempts = attempts.filter(
        (attempt) =>
          String(attempt.cefrLevel ?? "").toUpperCase() === level
      );

      const levelScores = levelAttempts
        .map((attempt) => attempt.matchPercentage)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (levelAttempts.length === 0) {
        return null;
      }

      const average =
        levelScores.length > 0
          ? Math.round(
              levelScores.reduce(
                (total, score) => total + score,
                0
              ) / levelScores.length
            )
          : 0;

      const best =
        levelScores.length > 0
          ? Math.max(...levelScores)
          : 0;

      const lowest =
        levelScores.length > 0
          ? Math.min(...levelScores)
          : 0;

      return {
        level,
        attempts: levelAttempts.length,
        average,
        best,
        lowest,
      };
    })
    .filter(Boolean);

  const diagnosticSkillOrder = [
    "Content Accuracy",
    "Oral Fluency",
    "Pronunciation",
  ];

  const diagnosticPerformance = diagnosticSkillOrder
    .map((skill) => {
      const skillAttempts = attempts.filter((attempt) => {
        const exercise = READ_ALOUD_CALIBRATION_EXERCISES.find(
          (item) => item.exerciseIndex === attempt.exerciseIndex
        );

        return exercise?.trainingSkill === skill;
      });

      const skillScores = skillAttempts
        .map((attempt) => attempt.matchPercentage)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (skillAttempts.length === 0) {
        return null;
      }

      const average =
        skillScores.length > 0
          ? Math.round(
              skillScores.reduce(
                (total, score) => total + score,
                0
              ) / skillScores.length
            )
          : 0;

      const best =
        skillScores.length > 0
          ? Math.max(...skillScores)
          : 0;

      const lowest =
        skillScores.length > 0
          ? Math.min(...skillScores)
          : 0;

      const diagnosticAreas = [
        ...new Set(
          skillAttempts
            .map((attempt) => {
              const exercise =
                READ_ALOUD_CALIBRATION_EXERCISES.find(
                  (item) =>
                    item.exerciseIndex === attempt.exerciseIndex
                );

              return exercise?.diagnosticArea;
            })
            .filter(Boolean)
        ),
      ];

      return {
        skill,
        attempts: skillAttempts.length,
        average,
        best,
        lowest,
        diagnosticAreas,
      };
    })
    .filter(Boolean);

  const liveEvaluationScores = liveEvaluationAttempts
    .map((attempt) => attempt.calibrationScore)
    .filter(
      (score) =>
        typeof score === "number" && Number.isFinite(score)
    );

  const liveEvaluationCompleted = liveEvaluationAttempts.length;

  const liveEvaluationAverage =
    liveEvaluationScores.length > 0
      ? Math.round(
          liveEvaluationScores.reduce(
            (total, score) => total + score,
            0
          ) / liveEvaluationScores.length
        )
      : 0;

  const liveEvaluationHighest =
    liveEvaluationScores.length > 0
      ? Math.max(...liveEvaluationScores)
      : 0;

  const liveEvaluationLowest =
    liveEvaluationScores.length > 0
      ? Math.min(...liveEvaluationScores)
      : 0;

  const liveEvaluationTrendAttempts = [...liveEvaluationAttempts]
    .filter(
      (attempt) =>
        typeof attempt.calibrationScore === "number" &&
        Number.isFinite(attempt.calibrationScore)
    )
    .slice(0, 10)
    .reverse();

  const getLiveEvaluationCefrLevel = (attempt) => {
    const savedLevel = attempt?.cefrLevel;

    if (typeof savedLevel === "string" && savedLevel.trim()) {
      return savedLevel.trim().toUpperCase();
    }

    if (
      savedLevel &&
      typeof savedLevel === "object" &&
      !Array.isArray(savedLevel)
    ) {
      const objectLevel =
        savedLevel.level ||
        savedLevel.label ||
        savedLevel.name ||
        "";

      if (String(objectLevel).trim()) {
        return String(objectLevel).trim().toUpperCase();
      }
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return "";
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    const exerciseCefr = exercise?.cefrLevel;

    if (typeof exerciseCefr === "string" && exerciseCefr.trim()) {
      return exerciseCefr.trim().toUpperCase();
    }

    if (
      exerciseCefr &&
      typeof exerciseCefr === "object" &&
      !Array.isArray(exerciseCefr)
    ) {
      const exerciseLevel =
        exerciseCefr.level ||
        exerciseCefr.label ||
        exerciseCefr.name ||
        "";

      return String(exerciseLevel).trim().toUpperCase();
    }

    return "";
  };

  const liveEvaluationCefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const liveEvaluationCefrPerformance = liveEvaluationCefrOrder
    .map((level) => {
      const levelAttempts = liveEvaluationAttempts.filter(
        (attempt) => getLiveEvaluationCefrLevel(attempt) === level
      );

      const levelScores = levelAttempts
        .map((attempt) => attempt.calibrationScore)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (levelAttempts.length === 0) {
        return null;
      }

      const average =
        levelScores.length > 0
          ? Math.round(
              levelScores.reduce(
                (total, score) => total + score,
                0
              ) / levelScores.length
            )
          : 0;

      const best =
        levelScores.length > 0
          ? Math.max(...levelScores)
          : 0;

      const lowest =
        levelScores.length > 0
          ? Math.min(...levelScores)
          : 0;

      return {
        level,
        attempts: levelAttempts.length,
        average,
        best,
        lowest,
      };
    })
    .filter(Boolean);

  const getLiveEvaluationDiagnosticSkill = (attempt) => {
    const savedSkill = String(attempt?.trainingSkill ?? "").trim();

    if (
      savedSkill === "Content Accuracy" ||
      savedSkill === "Oral Fluency" ||
      savedSkill === "Pronunciation"
    ) {
      return savedSkill;
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return "";
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    const exerciseSkill = String(
      exercise?.trainingSkill ?? ""
    ).trim();

    return (
    exerciseSkill === "Content Accuracy" ||
    exerciseSkill === "Oral Fluency" ||
    exerciseSkill === "Pronunciation"
      ? exerciseSkill
      : ""
  );
  };

  const getLiveEvaluationDiagnosticAreas = (attempt) => {
    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return [];
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    return [exercise?.diagnosticArea].filter(Boolean);
  };

  const liveEvaluationDiagnosticSkillOrder = [
    "Content Accuracy",
    "Oral Fluency",
    "Pronunciation",
  ];

  const liveEvaluationDiagnosticPerformance =
    liveEvaluationDiagnosticSkillOrder
      .map((skill) => {
        const skillAttempts = liveEvaluationAttempts.filter(
          (attempt) =>
            getLiveEvaluationDiagnosticSkill(attempt) === skill
        );

        const skillScores = skillAttempts
          .map((attempt) => attempt.calibrationScore)
          .filter(
            (score) =>
              typeof score === "number" &&
              Number.isFinite(score)
          );

        const average =
          skillScores.length > 0
            ? Math.round(
                skillScores.reduce(
                  (total, score) => total + score,
                  0
                ) / skillScores.length
              )
            : 0;

        const best =
          skillScores.length > 0
            ? Math.max(...skillScores)
            : 0;

        const lowest =
          skillScores.length > 0
            ? Math.min(...skillScores)
            : 0;

        const diagnosticAreas = [
          ...new Set(
            skillAttempts.flatMap((attempt) =>
              getLiveEvaluationDiagnosticAreas(attempt)
            )
          ),
        ];

        return {
          skill,
          attempts: skillAttempts.length,
          average,
          best,
          lowest,
          diagnosticAreas,
        };
      })
      .filter(Boolean);

  const liveEvaluationRecentAttempts = liveEvaluationAttempts.slice(0, 10);

  const getLiveEvaluationScoreTier = (score) => {
    if (score >= 85) return "PTE Master";
    if (score >= 70) return "Proficient";
    if (score >= 50) return "Developing";
    return "Needs Calibration";
  };

  const getLiveEvaluationAttemptDate = (attempt) => {
    if (!attempt?.timestamp) {
      return "Date unavailable";
    }

    const date = new Date(attempt.timestamp);

    return Number.isNaN(date.getTime())
      ? "Date unavailable"
      : date.toLocaleString();
  };

  const getLiveEvaluationTopicTitle = (attempt) => {
    if (attempt?.topicTitle) {
      return attempt.topicTitle;
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    return question?.title || "Live Evaluation";
  };

  return (
    <div className="page-content analytics-page">
      <div className="analytics-header">
        <div>
          <h2>Teacher Analytics</h2>
          <p>
            Track your Calibration Lab performance and
            marking development.
          </p>
        </div>

        <div className="analytics-welcome">
          <span className="analytics-welcome-icon">📊</span>
          <div>
            <span className="analytics-welcome-label">
              Teacher
            </span>
            <strong>{displayName}</strong>
          </div>
        </div>
      </div>

      {role === "teacher" && (
        <>
          {loading && (
            <div className="analytics-status-card">
              <div className="analytics-loading-spinner" />
              <p>Loading Calibration Lab analytics...</p>
            </div>
          )}

          {!loading && error && (
            <div className="analytics-status-card analytics-error-card">
              <div className="analytics-status-icon">⚠️</div>
              <div>
                <strong>Unable to load analytics</strong>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              <section className="analytics-summary-grid">
                <div className="analytics-stat-card analytics-stat-completed">
                  <div className="analytics-stat-icon">🎯</div>
                  <div className="analytics-stat-content">
                    <span>Exercises Completed</span>
                    <strong>{completedExercises}</strong>
                    <small>Calibration attempts</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-average">
                  <div className="analytics-stat-icon">📈</div>
                  <div className="analytics-stat-content">
                    <span>Average Match</span>
                    <strong>{averageMatch}%</strong>
                    <small>Overall calibration score</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-best">
                  <div className="analytics-stat-icon">🏆</div>
                  <div className="analytics-stat-content">
                    <span>Best Match</span>
                    <strong>{bestMatch}%</strong>
                    <small>Highest calibration score</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-lowest">
                  <div className="analytics-stat-icon">📉</div>
                  <div className="analytics-stat-content">
                    <span>Lowest Match</span>
                    <strong>{lowestMatch}%</strong>
                    <small>Lowest calibration score</small>
                  </div>
                </div>
              </section>

              <section className="analytics-section-card analytics-trend-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Calibration Performance Trend</h3>
                    <p>
                      See your most recent calibration scores over time.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {trendAttempts.length} score
                    {trendAttempts.length === 1 ? "" : "s"}
                  </span>
                </div>

                {trendAttempts.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      📈
                    </div>
                    <strong>
                      Your performance trend will appear here
                    </strong>
                    <p>
                      Complete Calibration Lab exercises to build a
                      performance trend.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-trend-chart">
                    <div className="analytics-trend-scale">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    <div className="analytics-trend-plot">
                      <div className="analytics-trend-grid">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="analytics-trend-bars">
                        {trendAttempts.map((attempt, index) => {
                          const score = Math.min(
                            Math.max(attempt.matchPercentage, 0),
                            100
                          );

                          const scoreClass =
                            score >= 85
                              ? "master"
                              : score >= 70
                                ? "proficient"
                                : score >= 50
                                  ? "developing"
                                  : "needs-calibration";

                          return (
                            <div
                              className="analytics-trend-point"
                              key={`${attempt.id}-${index}`}
                              title={`Exercise ${attempt.exerciseIndex}: ${score}%`}
                            >
                              <div
                                className={`analytics-trend-score analytics-trend-score-${scoreClass}`}
                              >
                                {score}%
                              </div>

                              <div className="analytics-trend-bar-track">
                                <div
                                  className={`analytics-trend-bar analytics-trend-bar-${scoreClass}`}
                                  style={{ height: `${score}%` }}
                                />
                              </div>

                              <span className="analytics-trend-label">
                                {attempt.exerciseIndex}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="analytics-trend-legend" aria-label="Calibration score ranges">
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-master" />
                        <div>
                          <strong>85–100%</strong>
                          <span>PTE Master</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-proficient" />
                        <div>
                          <strong>70–84%</strong>
                          <span>Proficient</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-developing" />
                        <div>
                          <strong>50–69%</strong>
                          <span>Developing</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-needs-calibration" />
                        <div>
                          <strong>0–49%</strong>
                          <span>Needs Calibration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <section className="analytics-section-card analytics-cefr-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Performance by CEFR Level</h3>
                    <p>
                      See how your calibration performance
                      changes as exercise difficulty increases.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {cefrPerformance.length} level
                    {cefrPerformance.length === 1 ? "" : "s"}
                  </span>
                </div>

                {cefrPerformance.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      📊
                    </div>
                    <strong>
                      CEFR performance will appear here
                    </strong>
                    <p>
                      Complete Calibration Lab exercises with
                      CEFR-labelled results to build your
                      performance profile.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-cefr-list">
                    {cefrPerformance.map((item) => (
                      <div
                        className="analytics-cefr-row"
                        key={item.level}
                      >
                        <div className="analytics-cefr-level">
                          <span>{item.level}</span>
                        </div>

                        <div className="analytics-cefr-details">
                          <div className="analytics-cefr-topline">
                            <strong>
                              {item.average}% average
                            </strong>
                            <span>
                              {item.attempts} attempt
                              {item.attempts === 1 ? "" : "s"}
                            </span>
                          </div>

                          <div className="analytics-cefr-bar">
                            <div
                              className={`analytics-cefr-bar-fill analytics-cefr-bar-${getScoreClass(
                                item.average
                              )}`}
                              style={{
                                width: `${Math.min(
                                  Math.max(item.average, 0),
                                  100
                                )}%`,
                              }}
                            />
                          </div>

                          <div className="analytics-cefr-stats">
                            <span>
                              Best: <strong>{item.best}%</strong>
                            </span>
                            <span>
                              Lowest:{" "}
                              <strong>{item.lowest}%</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="analytics-section-card analytics-diagnostic-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Diagnostic Performance</h3>
                    <p>
                      See how your calibration scores vary across the
                      main diagnostic skill areas.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {diagnosticPerformance.length} area
                    {diagnosticPerformance.length === 1 ? "" : "s"}
                  </span>
                </div>

                {diagnosticPerformance.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      🧭
                    </div>
                    <strong>
                      Diagnostic performance will appear here
                    </strong>
                    <p>
                      Complete calibration exercises across different
                      diagnostic skill areas to build this profile.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-diagnostic-list">
                    {diagnosticPerformance.map((item) => (
                      <div
                        className="analytics-diagnostic-row"
                        key={item.skill}
                      >
                        <div className="analytics-diagnostic-skill">
                          <strong>{item.skill}</strong>
                          <span>
                            {item.attempts} attempt
                            {item.attempts === 1 ? "" : "s"}
                          </span>
                        </div>

                        <div className="analytics-diagnostic-details">
                          <div className="analytics-diagnostic-topline">
                            <strong>{item.average}% average</strong>
                            <span>
                              Best {item.best}% • Lowest {item.lowest}%
                            </span>
                          </div>

                          <div className="analytics-diagnostic-bar">
                            <div
                              className={`analytics-diagnostic-bar-fill analytics-diagnostic-bar-${getScoreClass(
                                item.average
                              )}`}
                              style={{
                                width: `${Math.min(
                                  Math.max(item.average, 0),
                                  100
                                )}%`,
                              }}
                            />
                          </div>

                          <div className="analytics-diagnostic-areas">
                            {item.diagnosticAreas.map((area) => (
                              <span key={area}>{area}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="analytics-section-card">
                <div className="analytics-section-header">
                  <div>
                    <h3>Recent Calibration Results</h3>
                    <p>
                      Your most recent Calibration Lab
                      attempts.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {recentAttempts.length} result
                    {recentAttempts.length === 1 ? "" : "s"}
                  </span>
                </div>

                {recentAttempts.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      🎯
                    </div>
                    <strong>
                      No Calibration Lab attempts yet
                    </strong>
                    <p>
                      Complete a Calibration Lab exercise to
                      start building your teacher performance
                      record.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-results-list">
                    {recentAttempts.map((attempt) => {
                      const score =
                        typeof attempt.matchPercentage ===
                        "number"
                          ? attempt.matchPercentage
                          : 0;

                      return (
                        <div
                          className="analytics-result-row"
                          key={attempt.id}
                        >
                          <div className="analytics-result-number">
                            <span>
                              {attempt.exerciseIndex}
                            </span>
                          </div>

                          <div className="analytics-result-main">
                            <div className="analytics-result-title">
                              <strong>
                                Exercise{" "}
                                {attempt.exerciseIndex}
                              </strong>

                              {attempt.cefrLevel && (
                                <span className="analytics-cefr-badge">
                                  {attempt.cefrLevel}
                                </span>
                              )}
                            </div>

                            <span className="analytics-result-topic">
                              {attempt.topicTitle ||
                                "Calibration Exercise"}
                            </span>

                            <span className="analytics-result-meta">
                              {attempt.questionTitle ||
                                "Read Aloud"}{" "}
                              •{" "}
                              {attempt.section ||
                                "Speaking"}
                            </span>
                          </div>

                          <div className="analytics-result-score">
                            <strong>{score}%</strong>
                            <span>
                              {attempt.tier ||
                                "Calibration Result"}
                            </span>
                          </div>

                          <button
                            type="button"
                            className="analytics-result-view-button"
                            onClick={() => setSelectedAttempt(attempt)}
                          >
                            View Details
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </>
          )}
        </>
      )}

      {selectedAttempt && role === "teacher" && (
        <div
          className="analytics-detail-backdrop"
          role="presentation"
          onClick={() => setSelectedAttempt(null)}
        >
          <div
            className="analytics-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="analytics-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="analytics-detail-header">
              <div>
                <span className="analytics-detail-eyebrow">
                  Calibration Result
                </span>
                <h3 id="analytics-detail-title">
                  Exercise {selectedAttempt.exerciseIndex}
                </h3>
                <p>
                  {selectedAttempt.topicTitle ||
                    "Calibration Exercise"}
                </p>
              </div>

              <button
                type="button"
                className="analytics-detail-close"
                aria-label="Close calibration result details"
                onClick={() => setSelectedAttempt(null)}
              >
                ×
              </button>
            </div>

            <div className="analytics-detail-summary">
              <div>
                <span>Score</span>
                <strong>
                  {typeof selectedAttempt.matchPercentage ===
                  "number"
                    ? selectedAttempt.matchPercentage
                    : 0}%
                </strong>
              </div>
              <div>
                <span>Tier</span>
                <strong>
                  {selectedAttempt.tier ||
                    "Calibration Result"}
                </strong>
              </div>
              <div>
                <span>CEFR</span>
                <strong>
                  {selectedAttempt.cefrLevel || "—"}
                </strong>
              </div>
              <div>
                <span>Section</span>
                <strong>
                  {selectedAttempt.section || "Speaking"}
                </strong>
              </div>
            </div>

            <div className="analytics-detail-content">
              <div className="analytics-detail-section">
                <h4>Teacher's Submitted Feedback</h4>
                <div className="analytics-detail-text">
                  {selectedAttempt.teacherInput ||
                    "No teacher feedback was recorded."}
                </div>
              </div>

              {selectedAttempt.feedbackSummary && (
                <div className="analytics-detail-section">
                  <h4>AI Feedback Summary</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.feedbackSummary}
                  </div>
                </div>
              )}

              <div className="analytics-detail-columns">
                <div className="analytics-detail-section">
                  <h4>Matched Keywords</h4>
                  {selectedAttempt.matchedKeywords?.length ? (
                    <div className="analytics-detail-tags">
                      {selectedAttempt.matchedKeywords.map((keyword) => (
                        <span key={keyword}>{keyword}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="analytics-detail-muted">
                      No matched keywords recorded.
                    </p>
                  )}
                </div>

                <div className="analytics-detail-section">
                  <h4>Missing Keywords</h4>
                  {selectedAttempt.missingKeywords?.length ? (
                    <div className="analytics-detail-tags analytics-detail-tags-missing">
                      {selectedAttempt.missingKeywords.map((keyword) => (
                        <span key={keyword}>{keyword}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="analytics-detail-muted">
                      No missing keywords recorded.
                    </p>
                  )}
                </div>
              </div>

              {selectedAttempt.coachingAdviceForTeacher && (
                <div className="analytics-detail-section analytics-detail-callout">
                  <h4>Coaching Advice for Teacher</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.coachingAdviceForTeacher}
                  </div>
                </div>
              )}

              {selectedAttempt.studentFacingScript && (
                <div className="analytics-detail-section">
                  <h4>Student-Facing Script</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.studentFacingScript}
                  </div>
                </div>
              )}

              {(selectedAttempt.expertOverallScore ||
                selectedAttempt.expertFeedbackText ||
                selectedAttempt.expertAdvice) && (
                <div className="analytics-detail-section analytics-detail-expert">
                  <h4>Expert Evaluation</h4>
                  {selectedAttempt.expertOverallScore && (
                    <p>
                      <strong>Overall score:</strong>{" "}
                      {selectedAttempt.expertOverallScore}
                    </p>
                  )}
                  {selectedAttempt.expertFeedbackText && (
                    <div className="analytics-detail-text">
                      {selectedAttempt.expertFeedbackText}
                    </div>
                  )}
                  {selectedAttempt.expertAdvice && (
                    <div className="analytics-detail-text">
                      {selectedAttempt.expertAdvice}
                    </div>
                  )}
                </div>
              )}

              <div className="analytics-detail-footer">
                <span>
                  {selectedAttempt.questionTitle || "Read Aloud"}
                </span>
                <span>•</span>
                <span>
                  {selectedAttempt.timestamp
                    ? new Date(selectedAttempt.timestamp).toLocaleString()
                    : "Date not recorded"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

   <details className="analytics-section-card analytics-history-disclosure">
  <summary className="analytics-section-header">
    <div>
      <h3>Calibration History</h3>
      <p>
        Your complete Calibration Lab attempt history.
      </p>
    </div>

    <span className="analytics-history-toggle">
      View History ▾
    </span>
  </summary>

  {historyAttempts.length === 0 ? (
    <div className="analytics-empty-state">
      <div className="analytics-empty-icon">
        🗂️
      </div>
      <strong>No Calibration History yet</strong>
      <p>
        Complete Calibration Lab exercises to build your
        calibration history.
      </p>
    </div>
  ) : (
    <div className="analytics-results-list">
      {historyAttempts.map((attempt) => {
        const score =
          typeof attempt.matchPercentage === "number"
            ? attempt.matchPercentage
            : 0;

        const attemptDate = attempt.timestamp
          ? new Date(attempt.timestamp).toLocaleString()
          : "Date unavailable";

        return (
          <div
            className="analytics-result-row"
            key={attempt.id}
          >
            <div className="analytics-result-number">
              <span>{attempt.exerciseIndex}</span>
            </div>

            <div className="analytics-result-main">
              <div className="analytics-result-title">
                <strong>
                  Exercise {attempt.exerciseIndex}
                </strong>

                {attempt.cefrLevel && (
                  <span className="analytics-cefr-badge">
                    {attempt.cefrLevel}
                  </span>
                )}
              </div>

              <span className="analytics-result-topic">
                {attempt.topicTitle || "Calibration Exercise"}
              </span>

              <span className="analytics-result-meta">
                {attempt.questionTitle || "Read Aloud"} •{" "}
                {attempt.section || "Speaking"} • {attemptDate}
              </span>
            </div>

            <div className="analytics-result-score">
              <strong>{score}%</strong>
              <span>
                {attempt.tier || "Calibration Result"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )}
</details>

      <section className="analytics-live-evaluation-section">
        <div className="analytics-section-card">
          <div className="analytics-section-header">
            <div>
              <h3>Live Evaluation Performance</h3>
              <p>
                Track your calibration accuracy when marking live
                student responses.
              </p>
            </div>

            <span className="analytics-result-count analytics-live-result-count">
              {liveEvaluationCompleted} evaluation
              {liveEvaluationCompleted === 1 ? "" : "s"}
            </span>
          </div>

          {liveEvaluationCompleted === 0 ? (
            <div className="analytics-empty-state">
              <div className="analytics-empty-icon">
                🎙️
              </div>
              <strong>
                No Live Evaluation attempts yet
              </strong>
              <p>
                Complete a Live Evaluation assessment to start
                building your teacher calibration performance.
              </p>
            </div>
          ) : (
            <div className="analytics-live-summary-grid">
              <div className="analytics-live-stat-card analytics-live-stat-completed">
                <div className="analytics-live-stat-icon">🎙️</div>
                <div className="analytics-live-stat-content">
                  <span>Evaluations Completed</span>
                  <strong>{liveEvaluationCompleted}</strong>
                  <small>Live Evaluation attempts</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-average">
                <div className="analytics-live-stat-icon">📊</div>
                <div className="analytics-live-stat-content">
                  <span>Average Calibration Score</span>
                  <strong>{liveEvaluationAverage}/100</strong>
                  <small>Overall teacher calibration</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-highest">
                <div className="analytics-live-stat-icon">🏆</div>
                <div className="analytics-live-stat-content">
                  <span>Highest Score</span>
                  <strong>{liveEvaluationHighest}/100</strong>
                  <small>Best calibration result</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-lowest">
                <div className="analytics-live-stat-icon">📉</div>
                <div className="analytics-live-stat-content">
                  <span>Lowest Score</span>
                  <strong>{liveEvaluationLowest}/100</strong>
                  <small>Lowest calibration result</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="analytics-section-card analytics-live-trend-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Performance Trend</h3>
            <p>
              See your most recent Live Evaluation calibration scores over time.
            </p>
          </div>

          <span className="analytics-result-count">
            {liveEvaluationTrendAttempts.length} score
            {liveEvaluationTrendAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationTrendAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              📈
            </div>
            <strong>
              Your Live Evaluation trend will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments to build a
              calibration performance trend.
            </p>
          </div>
        ) : (
          <div className="analytics-live-trend-chart">
            <div className="analytics-live-trend-scale">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            <div className="analytics-live-trend-plot">
              <div className="analytics-live-trend-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="analytics-live-trend-bars">
                {liveEvaluationTrendAttempts.map((attempt, index) => {
                  const score = Math.min(
                    Math.max(attempt.calibrationScore, 0),
                    100
                  );

                  const scoreClass =
                    score >= 85
                      ? "master"
                      : score >= 70
                        ? "proficient"
                        : score >= 50
                          ? "developing"
                          : "needs-calibration";

                  return (
                    <div
                      className="analytics-live-trend-point"
                      key={`${attempt.id}-${index}`}
                      title={`${attempt.questionTitle || "Live Evaluation"}: ${score}/100`}
                    >
                      <div
                        className={`analytics-live-trend-score analytics-live-trend-score-${scoreClass}`}
                      >
                        {score}
                      </div>

                      <div className="analytics-live-trend-bar-track">
                        <div
                          className={`analytics-live-trend-bar analytics-live-trend-bar-${scoreClass}`}
                          style={{ height: `${score}%` }}
                        />
                      </div>

                      <span className="analytics-live-trend-label">
                        {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="analytics-live-trend-legend"
              aria-label="Live Evaluation calibration score ranges"
            >
              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-master" />
                <div>
                  <strong>85–100%</strong>
                  <span>PTE Master</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-proficient" />
                <div>
                  <strong>70–84%</strong>
                  <span>Proficient</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-developing" />
                <div>
                  <strong>50–69%</strong>
                  <span>Developing</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-needs-calibration" />
                <div>
                  <strong>0–49%</strong>
                  <span>Needs Calibration</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>


      <section className="analytics-section-card analytics-live-cefr-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Performance by CEFR Level</h3>
            <p>
              See how your Live Evaluation calibration performance
              changes across exercise difficulty levels.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationCefrPerformance.length} level
            {liveEvaluationCefrPerformance.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationCefrPerformance.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              📊
            </div>
            <strong>
              Live Evaluation CEFR performance will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments with CEFR-labelled
              exercises to build this performance profile.
            </p>
          </div>
        ) : (
          <div className="analytics-cefr-list">
            {liveEvaluationCefrPerformance.map((item) => (
              <div
                className="analytics-cefr-row"
                key={`live-${item.level}`}
              >
                <div className="analytics-cefr-level analytics-live-cefr-level">
                  <span>{item.level}</span>
                </div>

                <div className="analytics-cefr-details">
                  <div className="analytics-cefr-topline">
                    <strong>
                      {item.average}/100 average
                    </strong>
                    <span>
                      {item.attempts} evaluation
                      {item.attempts === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="analytics-cefr-bar">
                    <div
                      className={`analytics-cefr-bar-fill analytics-live-cefr-bar-${getScoreClass(
                        item.average
                      )}`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-cefr-stats">
                    <span>
                      Best: <strong>{item.best}/100</strong>
                    </span>
                    <span>
                      Lowest: <strong>{item.lowest}/100</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="analytics-section-card analytics-diagnostic-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Diagnostic Performance</h3>
            <p>
              See how your Live Evaluation calibration scores vary across
              the main diagnostic skill areas.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationDiagnosticPerformance.length} area
            {liveEvaluationDiagnosticPerformance.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationDiagnosticPerformance.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🧭
            </div>
            <strong>
              Live Evaluation diagnostic performance will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments across different
              diagnostic skill areas to build this profile.
            </p>
          </div>
        ) : (
          <div className="analytics-diagnostic-list">
            {liveEvaluationDiagnosticPerformance.map((item) => (
              <div
                className="analytics-diagnostic-row"
                key={`live-diagnostic-${item.skill}`}
              >
                <div className="analytics-diagnostic-skill">
                  <strong>{item.skill}</strong>
                  <span>
                    {item.attempts} evaluation
                    {item.attempts === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="analytics-diagnostic-details">
                  <div className="analytics-diagnostic-topline">
                    <strong>
                      {item.attempts > 0
                        ? `${item.average}/100 average`
                        : "No evaluations yet"}
                    </strong>
                    <span>
                      {item.attempts > 0
                        ? `Best ${item.best}/100 • Lowest ${item.lowest}/100`
                        : "Complete a Live Evaluation assessment to build this profile"}
                    </span>
                  </div>

                  <div className="analytics-diagnostic-bar">
                    <div
                      className={`analytics-diagnostic-bar-fill analytics-diagnostic-bar-${
                        item.attempts > 0
                          ? getScoreClass(item.average)
                          : "empty"
                      }`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-diagnostic-areas">
                    {item.diagnosticAreas.length > 0 ? (
                      item.diagnosticAreas.map((area) => (
                        <span key={`${item.skill}-${area}`}>{area}</span>
                      ))
                    ) : (
                      <span className="analytics-diagnostic-empty-label">
                        No diagnostic data yet
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      <section className="analytics-section-card analytics-live-results-section">
        <div className="analytics-section-header">
          <div>
            <h3>Recent Live Evaluation Results</h3>
            <p>
              Your most recent Live Evaluation calibration assessments.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationRecentAttempts.length} result
            {liveEvaluationRecentAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationRecentAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🎙️
            </div>
            <strong>No Live Evaluation results yet</strong>
            <p>
              Complete a Live Evaluation assessment to start building
              your recent results history.
            </p>
          </div>
        ) : (
          <div className="analytics-results-list">
            {liveEvaluationRecentAttempts.map((attempt) => {
              const score =
                typeof attempt.calibrationScore === "number"
                  ? Math.min(Math.max(attempt.calibrationScore, 0), 100)
                  : 0;

              const cefrLevel = getLiveEvaluationCefrLevel(attempt);
              const tier = getLiveEvaluationScoreTier(score);

              return (
                <div
                  className="analytics-result-row"
                  key={`live-result-${attempt.id}`}
                >
                  <div className="analytics-result-number">
                    <span>{attempt.exerciseIndex}</span>
                  </div>

                  <div className="analytics-result-main">
                    <div className="analytics-result-title">
                      <strong>
                        {attempt.questionTitle || "Live Evaluation"}
                      </strong>

                      {cefrLevel && (
                        <span className="analytics-cefr-badge">
                          {cefrLevel}
                        </span>
                      )}
                    </div>

                    <span className="analytics-result-topic">
                      {getLiveEvaluationTopicTitle(attempt)}
                    </span>

                    <span className="analytics-result-meta">
                      {attempt.trainingSkill || "Live Evaluation"} • {getLiveEvaluationAttemptDate(attempt)}
                    </span>
                  </div>

                  <div className="analytics-result-score">
                    <strong>{score}/100</strong>
                    <span>{tier}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <details className="analytics-section-card analytics-history-disclosure analytics-live-history-disclosure">
        <summary className="analytics-section-header">
          <div>
            <h3>Live Evaluation History</h3>
            <p>
              Your complete Live Evaluation calibration history.
            </p>
          </div>

          <span className="analytics-history-toggle">
            View History ▾
          </span>
        </summary>

        {liveEvaluationAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🗂️
            </div>

            <strong>No Live Evaluation History yet</strong>

            <p>
              Complete Live Evaluation assessments to build your
              calibration history.
            </p>
          </div>
        ) : (
          <div className="analytics-results-list">
            {liveEvaluationAttempts.map((attempt) => {
              const score =
                typeof attempt.calibrationScore === "number"
                  ? Math.min(Math.max(attempt.calibrationScore, 0), 100)
                  : 0;

              const cefrLevel = getLiveEvaluationCefrLevel(attempt);
              const tier = getLiveEvaluationScoreTier(score);

              return (
                <div
                  className="analytics-result-row"
                  key={`live-history-${attempt.id}`}
                >
                  <div className="analytics-result-number">
                    <span>{attempt.exerciseIndex}</span>
                  </div>

                  <div className="analytics-result-main">
                    <div className="analytics-result-title">
                      <strong>
                        {attempt.questionTitle || "Live Evaluation"}
                      </strong>

                      {cefrLevel && (
                        <span className="analytics-cefr-badge">
                          {cefrLevel}
                        </span>
                      )}
                    </div>

                    <span className="analytics-result-topic">
                      {getLiveEvaluationTopicTitle(attempt)}
                    </span>

                    <span className="analytics-result-meta">
                      {attempt.trainingSkill || "Live Evaluation"} • {getLiveEvaluationAttemptDate(attempt)}
                    </span>
                  </div>

                  <div className="analytics-result-score">
                    <strong>{score}/100</strong>
                    <span>{tier}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </details>

      {role === "admin" && (
        <div className="analytics-role-card">
          <h3>Admin Analytics</h3>
          <p>
            Admin analytics will be available here.
          </p>
        </div>
      )}

      {role === "consultant" && (
        <div className="analytics-role-card">
          <h3>Consultant Analytics</h3>
          <p>
            Consultant analytics will be available here.
          </p>
        </div>
      )}
    </div>
  );
}