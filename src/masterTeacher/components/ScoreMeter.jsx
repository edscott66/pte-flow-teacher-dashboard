import React from "react";

export default function ScoreMeter({
  percentage = 0,
  tier = "Evaluation",
  badgeColor = "#2563eb",
}) {
  const safePercentage = Math.max(
    0,
    Math.min(100, Number(percentage) || 0)
  );

  const badgeColors = {
    emerald: "#059669",
    indigo: "#4f46e5",
    amber: "#d97706",
    rose: "#e11d48",
  };

  const resolvedColor =
    badgeColors[badgeColor] || badgeColor || "#2563eb";

  return (
    <div className="mt-score-meter">
      <div
        className="mt-score-ring"
        style={{
          background: `conic-gradient(${resolvedColor} ${
            safePercentage * 3.6
          }deg, #e2e8f0 0deg)`,
        }}
      >
        <div className="mt-score-ring-inner">
          <strong>{safePercentage}%</strong>
          <span>Alignment</span>
        </div>
      </div>

      <div className="mt-score-meter-copy">
        <span className="mt-score-label">Teacher Calibration</span>

        <h3>{tier}</h3>

        <p>
          Alignment between the teacher's assessment and the selected
          benchmark response.
        </p>
      </div>
    </div>
  );
}