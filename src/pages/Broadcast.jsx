import React, { useState, useEffect } from "react";
import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import "./Broadcast.css";

// ============================================================
// ACTIVITY CONFIGURATION
// ============================================================

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

const PRACTICE_MODULES = {
  speaking: {
    label: "Speaking Modules",
    icon: "🎤",
    activities: [
      { id: "personalIntroduction", label: "Personal Introduction" },
      { id: "readAloud", label: "Read Aloud" },
      { id: "repeatSentence", label: "Repeat Sentence" },
      { id: "describeImage", label: "Describe Image" },
      { id: "retellLecture", label: "Re-tell Lecture" },
      { id: "answerShortQuestion", label: "Answer Short Question" },
      { id: "summarizeGroupDiscussion", label: "Summarize Group Discussion" },
      { id: "respondSituation", label: "Respond to a Situation" },
    ],
  },
  writing: {
    label: "Writing Modules",
    icon: "✍️",
    activities: [
      { id: "summarizeWrittenText", label: "Summarize Written Text" },
      { id: "essay", label: "Essay Writing" },
    ],
  },
  reading: {
    label: "Reading Modules",
    icon: "📖",
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
    activities: [
      { id: "summarizeSpokenText", label: "Summarize Spoken Text" },
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
    activities: [
      { id: "fullMockTest", label: "Full Mock Test" },
      //{ id: "customMockTest", label: "Custom Mock Test" },
    ],
  },
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function Broadcast() {
  const { roleData } = useAuth();
  const [activeTab, setActiveTab] = useState("devices");
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

  // ✅ NEW: Broadcast state
  const [broadcastMessage, setBroadcastMessage] = useState("");
  const [sending, setSending] = useState(false);

  const isAdmin = roleData?.role === "admin";
  const isTeacher = roleData?.role === "teacher";

  // ============================================================
  // ACTIVITY MANAGEMENT FUNCTIONS
  // ============================================================

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
        // ✅ FIX: Create the document with defaults using setDoc (not updateDoc)
        const defaults = {};
        Object.values(PRACTICE_MODULES).forEach(module => {
          module.activities.forEach(activity => {
            defaults[activity.id] = true;
          });
        });
        setActivitySettings(defaults);
        await setDoc(docRef, defaults); // ✅ Changed from updateDoc to setDoc
      }
    } catch (error) {
      console.error("Error fetching activity settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleActivity = async (activityId) => {
    const newValue = !activitySettings[activityId];
    const updatedSettings = { ...activitySettings, [activityId]: newValue };
    setActivitySettings(updatedSettings);
    setSaving(true);

    try {
      await setDoc(doc(db, "settings", "activitySettings"), updatedSettings, { merge: true });
      setTimeout(() => setSaving(false), 500);
    } catch (error) {
      console.error("Error updating activity settings:", error);
      setActivitySettings(activitySettings);
      setSaving(false);
      alert("Error updating activity. Please try again.");
    }
  };

  const toggleModule = (moduleId, activities) => {
    const allActive = activities.every(a => activitySettings[a.id] === true);
    const newValue = !allActive;
    const updatedSettings = { ...activitySettings };
    activities.forEach(a => {
      updatedSettings[a.id] = newValue;
    });
    setActivitySettings(updatedSettings);
    setSaving(true);

    try {
      updateDoc(doc(db, "settings", "activitySettings"), updatedSettings);
      setTimeout(() => setSaving(false), 500);
    } catch (error) {
      console.error("Error updating module:", error);
      setSaving(false);
      alert("Error updating module. Please try again.");
    }
  };

  const toggleExpand = (moduleId) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId],
    }));
  };

  const getModuleStatus = (activities) => {
    const active = activities.filter(a => activitySettings[a.id] === true).length;
    return {
      active,
      total: activities.length,
      allActive: active === activities.length,
      noneActive: active === 0,
    };
  };

  const allActivities = Object.values(PRACTICE_MODULES).flatMap(m => m.activities);
  const totalActive = allActivities.filter(a => activitySettings[a.id] === true).length;
  const totalActivities = allActivities.length;

  // ============================================================
  // ✅ NEW: BROADCAST SEND FUNCTION
  // ============================================================
  const sendBroadcast = async (message, target = "all") => {
    if (!message.trim()) {
      alert("Please enter a message to broadcast.");
      return;
    }

    setSending(true);
    try {
      const broadcastRef = doc(db, "live_broadcast", "single");
      await setDoc(broadcastRef, {
        message: message.trim(),
        active: true,
        sentAt: serverTimestamp(),
        target: target, // "all" or "class"
        sentBy: roleData?.name || "Teacher",
      }, { merge: true });

      alert("✅ Broadcast sent successfully!");
      setBroadcastMessage(""); // Clear the textarea
    } catch (error) {
      console.error("Error sending broadcast:", error);
      alert("❌ Failed to send broadcast. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // ============================================================
  // RENDER FUNCTIONS
  // ============================================================

  const renderDeviceControl = () => {
    return (
      <div className="broadcast-devices">
        <h3>📡 Device Control</h3>
        <p>Send broadcast messages to student devices</p>
        
        <div className="broadcast-message-area">
          <textarea 
            className="broadcast-input" 
            placeholder="Type your broadcast message here..."
            rows="4"
            value={broadcastMessage}
            onChange={(e) => setBroadcastMessage(e.target.value)}
          />
          <div className="broadcast-actions">
            <button 
              className="broadcast-btn primary"
              onClick={() => sendBroadcast(broadcastMessage, "all")}
              disabled={sending}
            >
              {sending ? "⏳ Sending..." : "📨 Send to All Students"}
            </button>
            <button 
              className="broadcast-btn secondary"
              onClick={() => sendBroadcast(broadcastMessage, "class")}
              disabled={sending}
            >
              {sending ? "⏳ Sending..." : "📨 Send to Class"}
            </button>
          </div>
        </div>

        <div className="broadcast-history">
          <h4>Recent Broadcasts</h4>
          <div className="broadcast-list">
            <div className="broadcast-item">
              <span className="broadcast-time">Today, 10:30 AM</span>
              <span className="broadcast-message">Class A1: Please complete your practice test before Friday.</span>
              <span className="broadcast-status delivered">✅ Delivered</span>
            </div>
            <div className="broadcast-item">
              <span className="broadcast-time">Today, 9:15 AM</span>
              <span className="broadcast-message">Reminder: Mock exam tomorrow at 9:00 AM</span>
              <span className="broadcast-status delivered">✅ Delivered</span>
            </div>
            <div className="broadcast-item">
              <span className="broadcast-time">Yesterday, 3:45 PM</span>
              <span className="broadcast-message">Congratulations to everyone who completed their lessons!</span>
              <span className="broadcast-status pending">⏳ Pending</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderModuleLockMatrix = () => {
    if (loading) {
      return (
        <div className="module-loading">
          <div className="spinner"></div>
          <p>Loading module settings...</p>
        </div>
      );
    }

    return (
      <div className="module-lock-matrix">
        {/* Always Visible Section */}
        <div className="always-visible-section">
          <div className="section-header">
            <h3>📱 Always Visible (No Teacher Control)</h3>
            <span className="always-badge">Student App - Always Available</span>
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

        {/* Quick Presets */}
        <div className="quick-presets">
          <h4>⚡ Quick Classroom Presets</h4>
          <div className="preset-grid">
            <button
              className="preset-btn"
              onClick={() => {
                const defaults = {};
                allActivities.forEach(a => { defaults[a.id] = true; });
                setActivitySettings(defaults);
                updateDoc(doc(db, "settings", "activitySettings"), defaults);
              }}
            >
              🚀 All Modules Unlocked
            </button>
            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach(a => { preset[a.id] = false; });
                PRACTICE_MODULES.speaking.activities.forEach(a => { preset[a.id] = true; });
                PRACTICE_MODULES.writing.activities.forEach(a => { preset[a.id] = true; });
                setActivitySettings(preset);
                updateDoc(doc(db, "settings", "activitySettings"), preset);
              }}
            >
              🎤 Speaking & Writing Focus
            </button>
            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach(a => { preset[a.id] = false; });
                PRACTICE_MODULES.reading.activities.forEach(a => { preset[a.id] = true; });
                PRACTICE_MODULES.listening.activities.forEach(a => { preset[a.id] = true; });
                setActivitySettings(preset);
                updateDoc(doc(db, "settings", "activitySettings"), preset);
              }}
            >
              📖 Reading & Listening Sprint
            </button>
            <button
              className="preset-btn"
              onClick={() => {
                const preset = {};
                allActivities.forEach(a => { preset[a.id] = false; });
                PRACTICE_MODULES.mockTests.activities.forEach(a => { preset[a.id] = true; });
                setActivitySettings(preset);
                updateDoc(doc(db, "settings", "activitySettings"), preset);
              }}
            >
              📋 Exam Mode (Mock Only)
            </button>
          </div>
        </div>

        {/* Module List */}
        <div className="module-stats">
          <span className="stats-badge">
            {totalActive} / {totalActivities} Practice Modules Active
          </span>
          {saving && <span className="saving-indicator">⏳ Saving...</span>}
        </div>

        {Object.entries(PRACTICE_MODULES).map(([moduleId, module]) => {
          const status = getModuleStatus(module.activities);
          const isExpanded = expandedModules[moduleId];

          return (
            <div key={moduleId} className="module-card">
              <div className="module-header" onClick={() => toggleExpand(moduleId)}>
                <div className="module-header-left">
                  <span className="module-icon">{module.icon}</span>
                  <div>
                    <h3>{module.label}</h3>
                    <span className="module-count">
                      {status.active} / {status.total} active
                    </span>
                  </div>
                </div>
                <div className="module-header-right">
                  <span className={`module-status ${status.allActive ? "all-active" : status.noneActive ? "none-active" : "partial"}`}>
                    {status.allActive ? "✅ All Active" : status.noneActive ? "🔒 All Locked" : `⏳ ${status.active}/${status.total}`}
                  </span>
                  <button
                    className="module-toggle-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleModule(moduleId, module.activities);
                    }}
                  >
                    {status.allActive ? "🔒 Lock All" : "🔓 Unlock All"}
                  </button>
                  <span className="expand-icon">{isExpanded ? "▼" : "▶"}</span>
                </div>
              </div>

              {isExpanded && (
                <div className="module-body">
                  {module.activities.map((activity) => (
                    <div key={activity.id} className="activity-row">
                      <span className="activity-label">{activity.label}</span>
                      <button
                        className={`toggle-btn ${activitySettings[activity.id] ? "active" : "inactive"}`}
                        onClick={() => toggleActivity(activity.id)}
                      >
                        {activitySettings[activity.id] ? "🔒 Lock" : "🔓 Unlock"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  // ============================================================
  // MAIN RENDER
  // ============================================================

  return (
    <div className="page-content">
      <div className="broadcast-header">
        <h2>📡 Broadcast & Module Control</h2>
        <p>Send messages to students and control which modules are available</p>
      </div>

      {/* Tabs */}
      <div className="broadcast-tabs">
        <button
          className={`tab-btn ${activeTab === "devices" ? "active" : ""}`}
          onClick={() => setActiveTab("devices")}
        >
          📨 Device Control
        </button>
        <button
          className={`tab-btn ${activeTab === "modules" ? "active" : ""}`}
          onClick={() => setActiveTab("modules")}
        >
          🔒 Module Lock Matrix
        </button>
      </div>

      {/* Tab Content */}
      <div className="broadcast-tab-content">
        {activeTab === "devices" && renderDeviceControl()}
        {activeTab === "modules" && renderModuleLockMatrix()}
      </div>

      <div className="broadcast-footer">
        <p className="footer-note">
          ⚡ Changes to module settings take effect immediately in the Student App
        </p>
        <p className="footer-note">
          📱 Students must have scanned the QR code for these controls to apply
        </p>
      </div>
    </div>
  );
}