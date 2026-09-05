import React from "react";
import { useFeedback } from "../contexts/FeedbackContext";

interface CalibrationProgressScreenProps {
  onNavigate?: (tab: string) => void;
}

export default function CalibrationProgressScreen({
  onNavigate,
}: CalibrationProgressScreenProps) {
  const { calibrationHistory, calibrationProgress } = useFeedback();

  const hasResults = calibrationHistory.length > 0;

  const getScoreLabel = (score: number) => {
    if (score >= 85) return "PTE Master Evaluator";
    if (score >= 70) return "Proficient Assessor";
    if (score >= 50) return "Developing Assessor";
    if (score > 0) return "Needs Calibration";
    return "Not started";
  };

  return (
    <div className="calibration-progress-screen">
      <div className="calibration-progress-container">
        {/* ============================================================
            HEADER
            ============================================================ */}
        <div className="calibration-progress-header">
          <div>
            <div className="calibration-progress-eyebrow">
              Calibration Lab
            </div>

            <h1 className="calibration-progress-title">
              Calibration Progress
            </h1>

            <p className="calibration-progress-description">
              Track how accurately your assessments are matching the expert
              calibration benchmark.
            </p>
          </div>

          {onNavigate && (
            <button
              type="button"
              className="master-teacher-primary-button"
              onClick={() => onNavigate("marking")}
            >
              Continue Calibration
            </button>
          )}
        </div>

        {/* ============================================================
            SUMMARY
            ============================================================ */}
        <div className="calibration-progress-summary">
          <ProgressCard
            label="Exercises Completed"
            value={String(calibrationProgress.completed)}
            detail="Calibration attempts"
          />

          <ProgressCard
            label="Average Match"
            value={hasResults ? `${calibrationProgress.averageScore}%` : "—"}
            detail="Across completed attempts"
          />

          <ProgressCard
            label="Best Match"
            value={hasResults ? `${calibrationProgress.bestScore}%` : "—"}
            detail="Highest calibration result"
          />

          <ProgressCard
            label="Lowest Match"
            value={hasResults ? `${calibrationProgress.lowestScore}%` : "—"}
            detail="Lowest calibration result"
          />
        </div>

        {/* ============================================================
            MAIN CONTENT
            ============================================================ */}
        <div className="calibration-progress-main-grid">
          {/* Current level */}
          <section className="calibration-progress-level-card">
            <div className="calibration-progress-section-label">
              Current Calibration Level
            </div>

            <div className="calibration-progress-level-content">
              <div>
                <div className="calibration-progress-level-name">
                  {calibrationProgress.currentTier}
                </div>

                <div className="calibration-progress-level-description">
                  {hasResults
                    ? "Based on your most recent calibration performance."
                    : "Complete a calibration exercise to establish your level."}
                </div>
              </div>

              <div className="calibration-progress-level-badge">
                {hasResults
                  ? getScoreLabel(calibrationProgress.averageScore)
                  : "Begin Calibration"}
              </div>
            </div>
          </section>

          {/* Recent results */}
          <section className="calibration-progress-history-card">
            <div className="calibration-progress-history-header">
              <div>
                <h2 className="calibration-progress-section-title">
                  Recent Calibration Results
                </h2>

                <p className="calibration-progress-section-description">
                  Your most recent calibration attempts are shown below.
                </p>
              </div>

              <div className="calibration-progress-history-icon">
                ✓
              </div>
            </div>

            {!hasResults ? (
              <div className="calibration-progress-empty">
                <div className="calibration-progress-empty-icon">
                  ✓
                </div>

                <h3 className="calibration-progress-empty-title">
                  No calibration results yet
                </h3>

                <p className="calibration-progress-empty-description">
                  Complete your first Calibration Lab exercise to begin
                  building your progress history.
                </p>

                {onNavigate && (
                  <button
                    type="button"
                    className="calibration-progress-secondary-button"
                    onClick={() => onNavigate("marking")}
                  >
                    Start Calibration
                  </button>
                )}
              </div>
            ) : (
              <div className="calibration-progress-history-list">
                {calibrationHistory.slice(0, 10).map((result, index) => {
                  const score = Number(result.matchPercentage);
                  const safeScore = Number.isFinite(score) ? score : 0;

                  return (
                    <div
                      key={`${result.timestamp || "result"}-${index}`}
                      className="calibration-progress-history-row"
                    >
                      <div className="calibration-progress-history-details">
                        <div className="calibration-progress-history-exercise">
                          Exercise {result.exerciseIndex || "—"}
                          {result.topicTitle
                            ? ` — ${result.topicTitle}`
                            : ""}
                        </div>

                        <div className="calibration-progress-history-question">
                          {result.questionTitle || "Read Aloud"}
                        </div>
                      </div>

                      <div className="calibration-progress-history-result">
                        <div className="calibration-progress-history-tier">
                          {result.tier || getScoreLabel(safeScore)}
                        </div>

                        <div
                          className={`calibration-progress-score ${
                            safeScore >= 85
                              ? "calibration-progress-score-master"
                              : safeScore >= 70
                                ? "calibration-progress-score-proficient"
                                : safeScore >= 50
                                  ? "calibration-progress-score-developing"
                                  : "calibration-progress-score-needs"
                          }`}
                        >
                          {Number.isFinite(score) ? `${score}%` : "—"}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>

      {/* ================================================================
          SCREEN-SPECIFIC STYLES
          These styles are intentionally scoped to this screen so that
          existing Calibration Bench CSS cannot affect the layout.
          ================================================================ */}
      <style>{`
        .calibration-progress-screen {
          width: 100%;
          min-height: 100%;
          box-sizing: border-box;
          background: #f8fafc;
          color: #172033;
        }

        .calibration-progress-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 32px 28px 48px;
          box-sizing: border-box;
        }

        .calibration-progress-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 28px;
        }

        .calibration-progress-eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 7px 13px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ecfdf5, #d1fae5);
          color: #047857;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .calibration-progress-title {
          margin: 0;
          font-size: 34px;
          line-height: 1.12;
          font-weight: 850;
          color: #172033;
        }

        .calibration-progress-description {
          margin: 10px 0 0;
          max-width: 650px;
          color: #64748b;
          font-size: 15px;
          line-height: 1.6;
        }

        .calibration-progress-summary {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 20px;
        }

        .calibration-progress-card {
          min-width: 0;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 20px;
          box-sizing: border-box;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.05);
        }

        .calibration-progress-card-label {
          color: #64748b;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .calibration-progress-card-value {
          margin-top: 10px;
          color: #172033;
          font-size: 29px;
          line-height: 1;
          font-weight: 850;
        }

        .calibration-progress-card-detail {
          margin-top: 8px;
          color: #94a3b8;
          font-size: 12px;
          line-height: 1.4;
        }

        .calibration-progress-main-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.8fr) minmax(0, 1.7fr);
          gap: 20px;
          align-items: stretch;
        }

        .calibration-progress-level-card,
        .calibration-progress-history-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
          box-sizing: border-box;
        }

        .calibration-progress-level-card {
          padding: 22px;
        }

        .calibration-progress-section-label {
          color: #64748b;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .calibration-progress-level-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          height: calc(100% - 24px);
          margin-top: 8px;
        }

        .calibration-progress-level-name {
          color: #172033;
          font-size: 25px;
          line-height: 1.2;
          font-weight: 850;
        }

        .calibration-progress-level-description {
          margin-top: 8px;
          color: #64748b;
          font-size: 13px;
          line-height: 1.55;
        }

        .calibration-progress-level-badge {
          align-self: flex-start;
          padding: 10px 14px;
          border-radius: 12px;
          background: #ecfdf5;
          color: #047857;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 800;
        }

        .calibration-progress-history-card {
          overflow: hidden;
        }

        .calibration-progress-history-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          padding: 22px;
          border-bottom: 1px solid #e2e8f0;
        }

        .calibration-progress-section-title {
          margin: 0;
          color: #172033;
          font-size: 19px;
          line-height: 1.25;
          font-weight: 850;
        }

        .calibration-progress-section-description {
          margin: 6px 0 0;
          color: #64748b;
          font-size: 13px;
          line-height: 1.5;
        }

        .calibration-progress-history-icon {
          flex: 0 0 auto;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 22px;
          font-weight: 800;
        }

        .calibration-progress-empty {
          padding: 42px 28px;
          text-align: center;
        }

        .calibration-progress-empty-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          background: #f1f5f9;
          color: #64748b;
          font-size: 23px;
          font-weight: 800;
        }

        .calibration-progress-empty-title {
          margin: 0 0 7px;
          color: #172033;
          font-size: 17px;
          font-weight: 800;
        }

        .calibration-progress-empty-description {
          max-width: 430px;
          margin: 0 auto;
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }

        .calibration-progress-secondary-button {
          margin-top: 18px;
          padding: 10px 16px;
          border: 1px solid #a7f3d0;
          border-radius: 10px;
          background: #ecfdf5;
          color: #047857;
          font-size: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        .calibration-progress-history-list {
          width: 100%;
        }

        .calibration-progress-history-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 17px 22px;
          border-bottom: 1px solid #eef2f7;
          box-sizing: border-box;
        }

        .calibration-progress-history-row:last-child {
          border-bottom: none;
        }

        .calibration-progress-history-details {
          min-width: 0;
          flex: 1;
        }

        .calibration-progress-history-exercise {
          overflow: hidden;
          color: #172033;
          font-size: 14px;
          font-weight: 750;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .calibration-progress-history-question {
          margin-top: 4px;
          color: #64748b;
          font-size: 12px;
        }

        .calibration-progress-history-result {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
          flex: 0 0 auto;
        }

        .calibration-progress-history-tier {
          color: #64748b;
          font-size: 12px;
          font-weight: 700;
          text-align: right;
        }

        .calibration-progress-score {
          min-width: 62px;
          padding: 8px 10px;
          border-radius: 10px;
          text-align: center;
          font-size: 14px;
          font-weight: 800;
          box-sizing: border-box;
        }

        .calibration-progress-score-master {
          background: #dcfce7;
          color: #166534;
        }

        .calibration-progress-score-proficient {
          background: #dbeafe;
          color: #1d4ed8;
        }

        .calibration-progress-score-developing {
          background: #fef3c7;
          color: #92400e;
        }

        .calibration-progress-score-needs {
          background: #fee2e2;
          color: #b91c1c;
        }

        @media (max-width: 900px) {
          .calibration-progress-summary {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .calibration-progress-main-grid {
            grid-template-columns: 1fr;
          }

          .calibration-progress-level-card {
            min-height: 220px;
          }
        }

        @media (max-width: 640px) {
          .calibration-progress-container {
            padding: 24px 16px 36px;
          }

          .calibration-progress-header {
            align-items: stretch;
            flex-direction: column;
          }

          .calibration-progress-title {
            font-size: 29px;
          }

          .calibration-progress-summary {
            grid-template-columns: 1fr;
          }

          .calibration-progress-history-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .calibration-progress-history-result {
            width: 100%;
            justify-content: space-between;
          }

          .calibration-progress-history-tier {
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}

interface ProgressCardProps {
  label: string;
  value: string;
  detail: string;
}

function ProgressCard({ label, value, detail }: ProgressCardProps) {
  return (
    <div className="calibration-progress-card">
      <div className="calibration-progress-card-label">
        {label}
      </div>

      <div className="calibration-progress-card-value">
        {value}
      </div>

      <div className="calibration-progress-card-detail">
        {detail}
      </div>
    </div>
  );
}