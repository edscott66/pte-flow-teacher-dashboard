import React, { useEffect, useState } from "react";
import { useFeedback } from "../contexts/FeedbackContext";
import ScoreMeter from "../components/ScoreMeter";
import FeedbackCard from "../components/FeedbackCard";
import CalibrationPerfectResponseCard from "../components/CalibrationPerfectResponseCard";

export default function ComparisonScreen({ onNavigate }) {
  const {
    lastComparisonResult,
    isEvaluatingAi,
    clearFeedback,
    selectQuestion,
  } = useFeedback();

  const [showFullAdvice, setShowFullAdvice] = useState(false);

  useEffect(() => {
    return () => {
      // Keep the result available while navigating within the Master Teacher suite.
    };
  }, []);

  if (!lastComparisonResult) {
    return (
      <div className="master-teacher-empty-state">
        <div className="master-teacher-empty-icon">🎯</div>
        <h2>No Assessment Data Available</h2>
        <p>Submit a teacher assessment from the Calibration Bench first.</p>
        <button
          type="button"
          className="master-teacher-primary-button"
          onClick={() => onNavigate("marking")}
        >
          Open Calibration Bench
        </button>
      </div>
    );
  }

  const result = lastComparisonResult;
  const percentage = Number(result.matchPercentage) || 0;

  const handleNewAssessment = () => {
    clearFeedback();
    selectQuestion(result.questionId || "read-aloud");
    onNavigate("marking");
  };

  return (
    <div className="master-teacher-page">
      <div className="master-teacher-page-header">
        <div>
          <span className="master-teacher-eyebrow">PTE MASTER TEACHER</span>
          <h1>Evaluation &amp; AI Benchmark Report</h1>
          <p>
            Review how closely your assessment aligns with the selected
            benchmark and identify areas for calibration.
          </p>
        </div>

        <div className="master-teacher-header-actions">
          <button
            type="button"
            className="master-teacher-secondary-button"
            onClick={() => onNavigate("marking")}
          >
            ← Back to Calibration
          </button>
          <button
            type="button"
            className="master-teacher-primary-button"
            onClick={handleNewAssessment}
          >
            Evaluate Another
          </button>
        </div>
      </div>

      {isEvaluatingAi && (
        <div className="master-teacher-ai-status">
          <span className="master-teacher-ai-dot">✦</span>
          Gemini AI is comparing your assessment against the selected PTE
          benchmark. The offline benchmark is already available below.
        </div>
      )}

      <div className="master-teacher-report-grid">
        <section className="master-teacher-report-card master-teacher-report-card-score">
          <div className="master-teacher-card-header">
            <div>
              <span className="master-teacher-card-kicker">OVERALL RESULT</span>
              <h2>{result.questionTitle}</h2>
            </div>
            <span className="master-teacher-pill">{result.responseMode}</span>
          </div>

          <ScoreMeter
            percentage={percentage}
            tier={result.tier}
            badgeColor={result.badgeColor}
          />

          <div className="master-teacher-result-stats">
            <div>
              <span>Exercise</span>
              <strong>#{result.exerciseIndex || 1}</strong>
            </div>
            <div>
              <span>Section</span>
              <strong>{result.section || "PTE"}</strong>
            </div>
            <div>
              <span>Benchmark</span>
              <strong>{result.expertOverallScore || "N/A"}</strong>
            </div>
          </div>
        </section>

        <section className="master-teacher-report-card">
          <div className="master-teacher-card-header">
            <div>
              <span className="master-teacher-card-kicker">YOUR ASSESSMENT</span>
              <h2>Teacher Feedback</h2>
            </div>
          </div>

          <div className="master-teacher-text-panel">
            <p>{result.teacherInput || "No teacher feedback was submitted."}</p>
          </div>

          {result.checkedErrorIds?.length > 0 && (
            <div className="master-teacher-checklist-summary">
              <strong>Checklist flags</strong>
              <span>{result.checkedErrorIds.length} observed error(s)</span>
            </div>
          )}
        </section>

        <section className="master-teacher-report-card master-teacher-report-card-wide">
          <FeedbackCard result={result} />
        </section>

        {/* Gold-standard authored benchmark */}
        <section className="master-teacher-report-card master-teacher-report-card-wide">
          <CalibrationPerfectResponseCard />
        </section>

        <section className="master-teacher-report-card master-teacher-report-card-wide">
          <div className="master-teacher-card-header">
            <div>
              <span className="master-teacher-card-kicker">BENCHMARK REFERENCE</span>
              <h2>Expert Guidance</h2>
            </div>
            <button
              type="button"
              className="master-teacher-link-button px-4 py-2.5 rounded-xl text-xs font-extrabold shadow-sm border transition-all"
              style={{
                backgroundColor: showFullAdvice ? "#ecfdf5" : "#059669",
                color: showFullAdvice ? "#047857" : "#ffffff",
                borderColor: showFullAdvice ? "#a7f3d0" : "#059669",
              }}
              onClick={() => setShowFullAdvice((prev) => !prev)}
            >
              {showFullAdvice ? "Hide Guidance" : "Show Guidance"}
            </button>
          </div>

          <div className="master-teacher-benchmark-box">
            <div>
              <span className="master-teacher-benchmark-label">Expected Score</span>
              <strong>{result.expertOverallScore || "N/A"}</strong>
            </div>
            <div>
              <span className="master-teacher-benchmark-label">Rubric Analysis</span>
              <p>{result.expertFeedbackText || "No benchmark analysis available."}</p>
            </div>
          </div>

          {showFullAdvice && (
            <div className="master-teacher-advice-box">
              <h3>Examiner Guidance</h3>
              <p>{result.expertAdvice || "No additional examiner guidance was supplied."}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}