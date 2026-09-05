import React from "react";
import { Info, Star, Trophy } from "lucide-react";
import { useFeedback } from "../contexts/FeedbackContext";

/**
 * Gold-standard calibration reference.
 *
 * This version uses inline styles intentionally so the visual treatment does
 * not depend on Tailwind being enabled/configured in the project.
 */
export default function CalibrationPerfectResponseCard() {
  const { lastComparisonResult } = useFeedback();

  const perfectResponse = lastComparisonResult?.perfectCalibrationResponse;

  if (!perfectResponse) return null;

  return (
    <div
      className="calibration-perfect-response-card"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "16px",
        border: "1px solid #f3c65b",
        background:
          "linear-gradient(135deg, #fff9e8 0%, #ffffff 52%, #fff4cc 100%)",
        boxShadow: "0 4px 16px rgba(180, 130, 20, 0.08)",
        padding: "20px",
      }}
    >
      {/* Decorative gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-28px",
          top: "-36px",
          width: "120px",
          height: "120px",
          borderRadius: "999px",
          background: "rgba(245, 190, 45, 0.16)",
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "flex-start",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "42px",
            height: "42px",
            minWidth: "42px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff0bd",
            border: "1px solid #f5d77e",
            color: "#d99000",
          }}
        >
          <Trophy size={22} strokeWidth={2.4} />
        </div>

        <div style={{ minWidth: 0, flex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "9px",
              flexWrap: "wrap",
            }}
          >
            <h2
              style={{
                margin: 0,
                fontSize: "18px",
                lineHeight: 1.25,
                fontWeight: 800,
                color: "#172033",
              }}
            >
              100% Calibration Response
            </h2>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                borderRadius: "999px",
                border: "1px solid #f2cf72",
                background: "#fff3c9",
                padding: "5px 10px",
                fontSize: "10px",
                lineHeight: 1,
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "#a96600",
              }}
            >
              <Star size={12} fill="currentColor" />
              Gold Standard
            </span>
          </div>

          <p
            style={{
              margin: "6px 0 0",
              fontSize: "12px",
              lineHeight: 1.5,
              fontWeight: 600,
              color: "#9a690b",
            }}
          >
            Gold-standard teacher assessment for this exercise.
          </p>
        </div>
      </div>

      {/* Benchmark response */}
      <div
        style={{
          position: "relative",
          marginTop: "16px",
          borderRadius: "12px",
          border: "1px solid #f1d98f",
          background: "rgba(255, 255, 255, 0.82)",
          padding: "15px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "13px",
            lineHeight: 1.65,
            color: "#334155",
          }}
        >
          {perfectResponse}
        </p>
      </div>

      {/* Benchmark note */}
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
          marginTop: "14px",
          paddingTop: "13px",
          borderTop: "1px solid #f1d98f",
        }}
      >
        <div
          style={{
            width: "27px",
            height: "27px",
            minWidth: "27px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#fff0bd",
            color: "#c98200",
          }}
        >
          <Info size={16} strokeWidth={2.5} />
        </div>

        <p
          style={{
            margin: 0,
            fontSize: "11px",
            lineHeight: 1.6,
            color: "#80601c",
          }}
        >
          <span style={{ fontWeight: 800, textDecoration: "underline" }}>
            Use this as your benchmark.
          </span>{" "}
          Compare your diagnosis with the expert response for accuracy,
          evidence, and coaching specificity. For advanced restraint
          exercises, a perfect response may correctly conclude that no
          significant error should be diagnosed.
        </p>
      </div>

      {/* Small decorative stars */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "24px",
          top: "18px",
          color: "#e8b52e",
          opacity: 0.65,
          fontSize: "16px",
          pointerEvents: "none",
        }}
      >
        ✦
      </div>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "48px",
          top: "34px",
          color: "#e8b52e",
          opacity: 0.45,
          fontSize: "11px",
          pointerEvents: "none",
        }}
      >
        ✦
      </div>
    </div>
  );
}