import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import "./ActivityManagement.css";

// ============================================================
// ACTIVITY CONFIGURATION
// ============================================================

// Always visible - no teacher control
const ALWAYS_VISIBLE = [
  { id: "leaderboard", label: "Leaderboard", icon: "🏆" },
  { id: "dailyGoals", label: "Daily Goals", icon: "🎯" },
  { id: "reviewMistakes", label: "Review Mistakes", icon: "🔄" },
  { id: "aiChat", label: "AI Chat", icon: "🤖" },
  { id: "individualSprint", label: "Individual Sprint", icon: "⚡" },
  { id: "examInfo", label: "Exam Info Section", icon: "📋" },
  { id: "profile", label: "Profile Section", icon: "👤" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

// Teacher controlled - can be locked/unlocked
const PRACTICE_MODULES = {
  speaking: {
    label: "Speaking Modules",
    icon: "🎤",
    count: 8,
    activities: [
      { id: "personalIntroduction", label: "Personal Introduction" },
      { id: "readAloud", label: "Read Aloud" },
      { id: "repeatSentence", label: "Repeat Sentence" },
      { id: "describeImage", label: "Describe Image" },
      { id: "retellLecture", label: "Re-tell Lecture" },
      { id: "answerShortQuestion", label: "Answer Short Question" },
      { id: "summarizeSpokenText", label: "Summarize Spoken Text" },
      { id: "respondSituation", label: "Respond to a Situation" },
    ],
  },
  writing: {
    label: "Writing Modules",
    icon: "✍️",
    count: 2,
    activities: [
      { id: "summarizeWrittenText", label: "Summarize Written Text" },
      { id: "essay", label: "Essay Writing" },
    ],
  },
  reading: {
    label: "Reading Modules",
    icon: "📖",
    count: 5,
    activities: [
      { id: "fillBlanks", label: "Fill in the Blanks (Reading)" },
      { id: "multipleChoiceSingle", label: "Multiple Choice (Single)" },
      { id: "multipleChoiceMultiple", label: "Multiple Choice (Multiple)" },
      { id: "reorderParagraphs", label: "Reorder Paragraphs" },
      { id: "fillBlanksRW", label: "Fill in the Blanks (Reading & Writing)" },
    ],
  },
  listening: {
    label: "Listening Modules",
    icon: "👂",
    count: 8,
    activities: [
      { id: "summarizeSpoken", label: "Summarize Spoken Text" },
      { id: "multipleChoiceSingleListen", label: "Multiple Choice (Single)" },
      { id: "multipleChoiceMultipleListen", label: "Multiple Choice (Multiple)" },
      { id: "fillBlanksListen", label: "Fill in the Blanks" },
      { id: "highlightCorrectSummary", label: "Highlight Correct Summary" },
      { id: "highlightIncorrect", label: "Highlight Incorrect Words" },
      { id: "selectMissingWord", label: "Select Missing Word" },
      { id: "writeDictation", label: "Write from Dictation" },
    ],
  },
  mockTests: {
    label: "Mock Tests",
    icon: "📋",
    count: 1,
    activities: [
      { id: "fullMockTest", label: "Full Mock Test" },
    ],
  },
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ActivityManagement() {
  const { roleData } = useAuth();
  const [activitySettings, setActivitySettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [expandedModules, setExpandedModules] = useState({
    speaking: true,
    writing: true,
    reading: true,
    listening: true,
    mockTests: true,
  });

  const isAdmin = roleData?.role === "admin";
  const isTeacher = roleData?.role === "teacher";

  useEffect(() => {
    fetchActivitySettings();
  }, []);

  const fetchActivitySettings = async () => {
    try {
      const docRef = doc(db, "settings", "activitySettings");
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        setActivitySettings(snap.data());
      } else {
        const defaults = {};

        Object.values(PRACTICE_MODULES).forEach((module) => {
          module.activities.forEach((activity) => {
            defaults[activity.id] = true;
          });
        });

        setActivitySettings(defaults);
        await setDoc(docRef, defaults, { merge: true });
      }
    } catch (error) {
      console.error("Error fetching activity settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActivity = async (activityId) => {
    const previousSettings = activitySettings;
    const newValue = !activitySettings[activityId];

    const updatedSettings = {
      ...activitySettings,
      [activityId]: newValue,
    };

    setActivitySettings(updatedSettings);
    setSaving(true);

    try {
      await updateDoc(
        doc(db, "settings", "activitySettings"),
        { [activityId]: newValue }
      );
      setSaving(false);
    } catch (error) {
      console.error("Error updating activity settings:", error);
      setActivitySettings(previousSettings);
      setSaving(false);
      alert("Error updating activity. Please try again.");
    }
  };

  const toggleModule = async (moduleId, activities) => {
    const allActive = activities.every(
      (activity) => activitySettings[activity.id] === true
    );

    const newValue = !allActive;
    const previousSettings = activitySettings;
    const changes = {};

    activities.forEach((activity) => {
      changes[activity.id] = newValue;
    });

    setActivitySettings({
      ...activitySettings,
      ...changes,
    });

    setSaving(true);

    try {
      await updateDoc(
        doc(db, "settings", "activitySettings"),
        changes
      );
      setSaving(false);
    } catch (error) {
      console.error("Error updating module:", error);
      setActivitySettings(previousSettings);
      setSaving(false);
      alert("Error updating module. Please try again.");
    }
  };

  const toggleExpand = (moduleId) => {
    setExpandedModules((prev) => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const getModuleStatus = (activities) => {
    const active = activities.filter(
      (activity) => activitySettings[activity.id] === true
    ).length;

    return {
      active,
      total: activities.length,
      allActive: active === activities.length,
      noneActive: active === 0,
    };
  };

  const applyPreset = async (preset) => {
    const previousSettings = activitySettings;

    setActivitySettings({
      ...activitySettings,
      ...preset,
    });

    setSaving(true);

    try {
      await updateDoc(
        doc(db, "settings", "activitySettings"),
        preset
      );
      setSaving(false);
    } catch (error) {
      console.error("Error applying activity preset:", error);
      setActivitySettings(previousSettings);
      setSaving(false);
      alert("Error applying preset. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="page-content">
        <div className="spinner"></div>
        <p>Loading activity settings...</p>
      </div>
    );
  }

  // Custom Mock Test is intentionally NOT included in the teacher controls.
  // It is permanently available in the Student App.
  const allActivities = Object.values(PRACTICE_MODULES).flatMap(
    (module) => module.activities
  );

  const totalActive = allActivities.filter(
    (activity) => activitySettings[activity.id] === true
  ).length;

  const totalActivities = allActivities.length;

  return (
    <div className="page-content">
      <div className="activity-header">
        <div className="activity-header-top">
          <div>
            <h2>🔒 Module Lock Matrix</h2>

            <p className="activity-subtitle">
              {isAdmin || isTeacher
                ? "Control which practice modules are available to students"
                : "View module status"}
            </p>
          </div>

          <div className="activity-stats">
            <span className="stat-badge active">
              {totalActive} / {totalActivities} Active
            </span>

            <span className="stat-badge always-on">
              ✅ {ALWAYS_VISIBLE.length} Always Available
            </span>

            {saving && (
              <span className="saving-indicator">
                ⏳ Saving...
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Always Visible Section */}
      <div className="always-visible-section">
        <div className="section-header">
          <h3>📱 Always Visible (No Teacher Control)</h3>

          <span className="always-badge">
            Student App - Always Available
          </span>
        </div>

        <div className="always-visible-grid">
          {ALWAYS_VISIBLE.map((item) => (
            <div key={item.id} className="always-item">
              <span className="always-icon">{item.icon}</span>
              <span className="always-label">{item.label}</span>
              <span className="always-check">✅</span>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Modules Section */}
      <div className="practice-modules">
        <div className="section-header">
          <h3>🎯 Practice Modules (Teacher Controlled)</h3>

          <span className="module-hint">
            Toggle individual modules or use Quick Presets
          </span>
        </div>

        {/* Quick Presets */}
        <div className="quick-presets">
          <h4>⚡ Quick Classroom Presets</h4>

          <div className="preset-grid">
            <button
              className="preset-btn"
              onClick={() => {
                const defaults = {};
                allActivities.forEach((activity) => {
                  defaults[activity.id] = true;
                });
                applyPreset(defaults);
              }}
            >
              🚀 All Modules Unlocked
            </button>

            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach((activity) => {
                  preset[activity.id] = false;
                });

                PRACTICE_MODULES.speaking.activities.forEach((activity) => {
                  preset[activity.id] = true;
                });

                PRACTICE_MODULES.writing.activities.forEach((activity) => {
                  preset[activity.id] = true;
                });

                applyPreset(preset);
              }}
            >
              🎤 Speaking & Writing Focus
            </button>

            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach((activity) => {
                  preset[activity.id] = false;
                });

                PRACTICE_MODULES.reading.activities.forEach((activity) => {
                  preset[activity.id] = true;
                });

                PRACTICE_MODULES.listening.activities.forEach((activity) => {
                  preset[activity.id] = true;
                });

                applyPreset(preset);
              }}
            >
              📖 Reading & Listening Sprint
            </button>

            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach((activity) => {
                  preset[activity.id] = false;
                });

                // Mock Tests only means Full Mock only.
                PRACTICE_MODULES.mockTests.activities.forEach((activity) => {
                  preset[activity.id] = true;
                });

                applyPreset(preset);
              }}
            >
              📋 Exam Mode (Mock Only)
            </button>
          </div>
        </div>

        {/* Module List */}
        {Object.entries(PRACTICE_MODULES).map(([moduleId, module]) => {
          const status = getModuleStatus(module.activities);
          const isExpanded = expandedModules[moduleId];

          return (
            <div key={moduleId} className="module-card">
              <div
                className="module-header"
                onClick={() => toggleExpand(moduleId)}
              >
                <div className="module-header-left">
                  <span className="module-icon">
                    {module.icon}
                  </span>

                  <div>
                    <h3>{module.label}</h3>

                    <span className="module-count">
                      {status.active} / {status.total} active
                    </span>
                  </div>
                </div>

                <div className="module-header-right">
                  <span
                    className={`module-status ${
                      status.allActive
                        ? "all-active"
                        : status.noneActive
                        ? "none-active"
                        : "partial"
                    }`}
                  >
                    {status.allActive
                      ? "✅ All Active"
                      : status.noneActive
                      ? "🔒 All Locked"
                      : `⏳ ${status.active}/${status.total}`}
                  </span>

                  <button
                    className="module-toggle-btn"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleModule(moduleId, module.activities);
                    }}
                  >
                    {status.allActive
                      ? "🔒 Lock All"
                      : "🔓 Unlock All"}
                  </button>

                  <span className="expand-icon">
                    {isExpanded ? "▼" : "▶"}
                  </span>
                </div>
              </div>

              {isExpanded && (
                <div className="module-body">
                  {module.activities.map((activity) => (
                    <div key={activity.id} className="activity-row">
                      <span className="activity-label">
                        {activity.label}
                      </span>

                      <button
                        className={`toggle-btn ${
                          activitySettings[activity.id]
                            ? "active"
                            : "inactive"
                        }`}
                        onClick={() =>
                          toggleActivity(activity.id)
                        }
                      >
                        {activitySettings[activity.id]
                          ? "🔒 Lock"
                          : "🔓 Unlock"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="activity-footer">
        <p className="footer-note">
          ⚡ Changes take effect immediately in the Student App
        </p>

        <p className="footer-note">
          📱 Students must have scanned the QR code for these controls to apply
        </p>

        <p className="footer-note">
          🔓 {ALWAYS_VISIBLE.length} activities are always available and cannot
          be locked
        </p>

        <p className="footer-note">
          🟣 Custom Mock Test is always available to students and is not
          teacher controlled
        </p>
      </div>
    </div>
  );
}
