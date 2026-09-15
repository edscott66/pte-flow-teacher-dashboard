import "./Analytics.css";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import { getTeacherCalibrationAttempts } from "../services/teacherAnalyticsService";

export default function Analytics() {
  const { roleData } = useAuth();

  const role = roleData?.role;
  const displayName = roleData?.name || "User";

  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadAnalytics() {
      setLoading(true);
      setError("");

      try {
        const calibrationAttempts =
          await getTeacherCalibrationAttempts();

        if (isMounted) {
          setAttempts(calibrationAttempts);
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

  const recentAttempts = attempts.slice(0, 10);

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