import React from "react";

export default function MasterTeacherHome({ onNavigate }) {
  const cards = [
    {
      id: "marking",
      title: "Teacher Calibration Bench",
      icon: "🎯",
      description:
        "Practise PTE marking against the existing exercise bank, scoring criteria, error checklist, and benchmark samples.",
      action: "Open Calibration Bench",
      ready: true,
    },
    {
      id: "students_evaluator",
      title: "Live Evaluation",
      icon: "🎙️",
      description:
        "Evaluate a student's spoken or written response using the desktop evaluation workflow.",
      action: "Stage 3",
      ready: false,
    },
    {
      id: "lessons",
      title: "Lesson Plans",
      icon: "📚",
      description:
        "Access structured PTE lesson plans and classroom teaching resources already built into the Teacher Suite.",
      action: "Coming next",
      ready: false,
    },
    {
      id: "translator",
      title: "Band & Score Translator",
      icon: "📊",
      description:
        "Use the existing PTE-to-IELTS and CEFR reference data for teaching and target-setting conversations.",
      action: "Coming next",
      ready: false,
    },
    {
      id: "tips",
      title: "Examiner Strategy Vault",
      icon: "💡",
      description:
        "Browse the existing examiner strategy and classroom guidance library.",
      action: "Coming next",
      ready: false,
    },
  ];

  return (
    <div className="master-teacher-home">
      <div className="master-teacher-hero">
        <div>
          <div className="master-teacher-kicker">PTE ACADEMIC</div>
          <h2>PTE Master Teacher</h2>
          <p>
            A dedicated desktop workspace for evaluation, teacher calibration,
            lesson planning, score translation, and examiner strategy.
          </p>
        </div>

        <div className="master-teacher-hero-badge">
          <span className="master-teacher-hero-icon">🎓</span>
          <div>
            <strong>Teacher Workspace</strong>
            <span>Desktop tools &amp; resources</span>
          </div>
        </div>
      </div>

      <div className="master-teacher-notice">
        <span className="master-teacher-notice-icon">✓</span>
        <div>
          <strong>Integrated with your existing Teacher Dashboard</strong>
          <p>
            The existing Teacher Dashboard remains the primary application.
            The Student App is not changed by this workspace.
          </p>
        </div>
      </div>

      <section className="master-teacher-section">
        <div className="master-teacher-section-heading">
          <div>
            <h3>Teacher Tools</h3>
            <p>
              The Calibration Bench is now connected to the existing
              QuestionsData, ExerciseBank, offline matcher, and AI comparison
              workflow.
            </p>
          </div>
        </div>

        <div className="master-teacher-grid">
          {cards.map((card) => (
            <button
              key={card.id}
              type="button"
              className={`master-teacher-card ${!card.ready ? "master-teacher-card-disabled" : ""}`}
              onClick={() => card.ready && onNavigate(card.id)}
              disabled={!card.ready}
            >
              <div className="master-teacher-card-icon">{card.icon}</div>

              <div className="master-teacher-card-content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>

              <div className="master-teacher-card-action">
                <span>{card.action}</span>
                <span aria-hidden="true">{card.ready ? "→" : "•"}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="master-teacher-section master-teacher-section-secondary">
        <div className="master-teacher-info-grid">
          <div className="master-teacher-info-card">
            <span className="master-teacher-info-icon">👨‍🎓</span>
            <div>
              <h4>Student records stay in the existing Dashboard</h4>
              <p>
                The Master Teacher Suite will use the current Teacher Dashboard
                student roster rather than creating a second student database.
              </p>
            </div>
          </div>

          <div className="master-teacher-info-card">
            <span className="master-teacher-info-icon">🧠</span>
            <div>
              <h4>Existing Teacher resources are reused</h4>
              <p>
                Questions, exercises, rubrics, offline comparison, and Gemini
                evaluation are being integrated rather than rebuilt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
