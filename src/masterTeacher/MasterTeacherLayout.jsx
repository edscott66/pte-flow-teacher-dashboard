import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MasterTeacherHome from "./MasterTeacherHome";
import MarkingScreen from "./screens/MarkingScreen";
import ComparisonScreen from "./screens/ComparisonScreen";

function ComingSoon({ title, onNavigate }) {
  return (
    <div className="master-teacher-empty-state">
      <div className="master-teacher-empty-icon">🚧</div>
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

  const subPath = location.pathname
    .replace(/^\/master-teacher\/?/, "")
    .replace(/\/+$/, "");

  const navigateWithinSuite = (tab) => {
    const destinations = {
      home: "/master-teacher",
      marking: "/master-teacher/marking",
      comparison: "/master-teacher/comparison",
      students_evaluator: "/master-teacher/students-evaluator",
      lessons: "/master-teacher/lessons",
      translator: "/master-teacher/translator",
      tips: "/master-teacher/tips",
    };

    navigate(destinations[tab] || "/master-teacher");
  };

  const titleMap = {
    home: "Master Teacher Home",
    marking: "Calibration Bench",
    comparison: "Evaluation Report",
    students_evaluator: "Live Evaluation",
    lessons: "Lesson Plans",
    translator: "Band & Score Translator",
    tips: "Examiner Strategy Vault",
  };

  const activeKey = subPath || "home";

  return (
    <div className="master-teacher-workspace">
      <div className="master-teacher-workspace-topbar">
        <div>
          <span className="master-teacher-workspace-title">🎓 PTE Master Teacher</span>
          <span className="master-teacher-workspace-current">
            {titleMap[activeKey] || "Master Teacher"}
          </span>
        </div>

        <div className="master-teacher-workspace-links">
          <button type="button" onClick={() => navigateWithinSuite("home")}>
            Home
          </button>
          <button type="button" onClick={() => navigateWithinSuite("marking")}>
            Calibration
          </button>
          <button type="button" onClick={() => navigateWithinSuite("comparison")}>
            Reports
          </button>
        </div>
      </div>

      <div className="master-teacher-workspace-body">
        {activeKey === "home" && <MasterTeacherHome onNavigate={navigateWithinSuite} />}
        {activeKey === "marking" && <MarkingScreen onNavigate={navigateWithinSuite} />}
        {activeKey === "comparison" && <ComparisonScreen onNavigate={navigateWithinSuite} />}

        {activeKey === "students-evaluator" && (
          <ComingSoon title="Live Evaluation" onNavigate={navigateWithinSuite} />
        )}
        {activeKey === "lessons" && (
          <ComingSoon title="Lesson Plans" onNavigate={navigateWithinSuite} />
        )}
        {activeKey === "translator" && (
          <ComingSoon title="Band & Score Translator" onNavigate={navigateWithinSuite} />
        )}
        {activeKey === "tips" && (
          <ComingSoon title="Examiner Strategy Vault" onNavigate={navigateWithinSuite} />
        )}
      </div>
    </div>
  );
}
