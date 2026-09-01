import React from "react";

export default function FeedbackCard({ result }) {
  const matched = result?.matchedKeywords || [];
  const missing = result?.missingKeywords || [];

  return (
    <div className="mt-feedback-card">
      <div className="mt-feedback-columns">
        <section>
          <div className="mt-feedback-heading mt-feedback-heading-good">
            <span>✓</span>
            <h3>Matched Rubric Points</h3>
          </div>
          {matched.length > 0 ? (
            <div className="mt-keyword-list">
              {matched.map((item, index) => (
                <span key={`${item}-${index}`} className="mt-keyword mt-keyword-good">
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-empty-copy">No strong keyword matches were detected.</p>
          )}
        </section>

        <section>
          <div className="mt-feedback-heading mt-feedback-heading-missing">
            <span>!</span>
            <h3>Rubric Points to Review</h3>
          </div>
          {missing.length > 0 ? (
            <div className="mt-keyword-list">
              {missing.map((item, index) => (
                <span key={`${item}-${index}`} className="mt-keyword mt-keyword-missing">
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-empty-copy">No major missing rubric terms were detected.</p>
          )}
        </section>
      </div>

      <div className="mt-feedback-summary">
        <h3>Assessment Summary</h3>
        <p>{result?.feedbackSummary || "No assessment summary is available yet."}</p>
      </div>

      {result?.coachingAdviceForTeacher && (
        <div className="mt-coaching-box">
          <h3>Teacher Coaching Advice</h3>
          <p>{result.coachingAdviceForTeacher}</p>
        </div>
      )}

      {result?.studentFacingScript && (
        <div className="mt-student-script-box">
          <h3>Student-Facing Feedback Script</h3>
          <p>{result.studentFacingScript}</p>
        </div>
      )}
    </div>
  );
}
