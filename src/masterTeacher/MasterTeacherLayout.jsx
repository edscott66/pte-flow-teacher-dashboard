import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import MasterTeacherHome from "./MasterTeacherHome";
import MarkingScreen from "./screens/MarkingScreen";
import ComparisonScreen from "./screens/ComparisonScreen";
import CalibrationProgressScreen from "./screens/CalibrationProgressScreen";
import LiveEvaluationScreen from "./screens/LiveEvaluationScreen";

function ComingSoon({ title, onNavigate }) {
  return (
    <div className="master-teacher-empty-state">
      <div className="master-teacher-empty-icon">🚀</div>

      <h2>{title}</h2>

      <p>
        This part of the Master Teacher Suite will be connected in the next
        integration stage. The existing dashboard remains fully available.
      </p>

      <button
        type="button"
        className="master-teacher-primary-button"
        onClick={() => onNavigate("home")}
      >
        Back to Master Teacher Home
      </button>
    </div>
  );
}

export default function MasterTeacherLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Determine which Master Teacher section is currently active.
   *
   * Examples:
   * /master-teacher
   * /master-teacher/marking
   * /master-teacher/comparison
   * /master-teacher/progress
   * /master-teacher/students-evaluator
   */
  const subPath = location.pathname
    .replace(/^\/master-teacher\/?/, "")
    .replace(/\/+$/, "");

  /*
   * Central navigation for the Master Teacher workspace.
   *
   * Keeping these routes here means the Home page, top navigation,
   * Calibration Bench, Evaluation Report and Progress screen all use
   * the same routing.
   */
  const navigateWithinSuite = (tab) => {
    const destinations = {
      home: "/master-teacher",
      marking: "/master-teacher/marking",
      comparison: "/master-teacher/comparison",
      progress: "/master-teacher/progress",
      students_evaluator: "/master-teacher/students-evaluator",
      lessons: "/master-teacher/lessons",
      translator: "/master-teacher/translator",
      tips: "/master-teacher/tips",
    };

    navigate(destinations[tab] || "/master-teacher");
  };

  /*
   * Titles displayed in the Master Teacher workspace top bar.
   */
  const titleMap = {
    home: "Master Teacher Home",
    marking: "Calibration Bench",
    comparison: "Evaluation Report",
    progress: "Calibration Progress",
    "students-evaluator": "Live Evaluation",
    lessons: "Lesson Plans",
    translator: "Band & Score Translator",
    tips: "Examiner Strategy Vault",
  };

  const activeKey = subPath || "home";

  return (
    <div className="master-teacher-workspace">
      {/* ============================================================
          MASTER TEACHER TOP BAR
          ============================================================ */}
      <div className="master-teacher-workspace-topbar">
        <div>
          <span className="master-teacher-workspace-title">
            👑 PTE Master Teacher
          </span>

          <span className="master-teacher-workspace-current">
            {titleMap[activeKey] || "Master Teacher"}
          </span>
        </div>

        <div className="master-teacher-workspace-links">
          <button
            type="button"
            onClick={() => navigateWithinSuite("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("marking")}
          >
            Calibration
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("comparison")}
          >
            Reports
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("progress")}
          >
            Progress
          </button>
        </div>
      </div>

      {/* ============================================================
          MASTER TEACHER PAGE CONTENT
          ============================================================ */}
      <div className="master-teacher-workspace-body">
        {/* Home */}
        {activeKey === "home" && (
          <MasterTeacherHome onNavigate={navigateWithinSuite} />
        )}

        {/* Calibration Bench / Marking Simulator */}
        {activeKey === "marking" && (
          <MarkingScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Evaluation Report / AI Comparison */}
        {activeKey === "comparison" && (
          <ComparisonScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Calibration Progress */}
        {activeKey === "progress" && (
          <CalibrationProgressScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Live Evaluation */}
        {activeKey === "students-evaluator" && (
          <LiveEvaluationScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Lesson Plans */}
        {activeKey === "lessons" && (
          <ComingSoon
            title="Lesson Plans"
            onNavigate={navigateWithinSuite}
          />
        )}

        {/* Band & Score Translator */}
        {activeKey === "translator" && (
          <ComingSoon
            title="Band & Score Translator"
            onNavigate={navigateWithinSuite}
          />
        )}

        {/* Examiner Strategy Vault */}
        {activeKey === "tips" && (
          <ComingSoon
            title="Examiner Strategy Vault"
            onNavigate={navigateWithinSuite}
          />
        )}
      </div>
    </div>
  );
}