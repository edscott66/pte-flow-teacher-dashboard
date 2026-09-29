import React from "react";

export default function MasterTeacherHome({ onNavigate }) {
  const cards = [
    {
      id: "marking",
      title: "Teacher Calibration Bench",
      icon: "\u{1F468}\u200D\u{1F4BB}",
      description:
        "Practise PTE marking against the existing exercise bank, scoring criteria, error checklist, and benchmark samples.",
      action: "Open Calibration Bench",
      ready: true,
    },
    {
      id: "progress",
      title: "Calibration Progress",
      icon: "\u{1F4C8}",
      description:
        "Review your calibration performance, average match, best and lowest results, and recent assessment history.",
      action: "View Calibration Progress",
      ready: true,
    },
    {
      id: "students_evaluator",
      title: "Live Evaluation",
      icon: "\u{1F3A4}\uFE0F",
      description:
        "Evaluate a student's spoken or written response using the desktop evaluation workflow.",
      action: "Open Live Evaluation",
      ready: true,
    },
    {
      id: "lessons",
      title: "Lesson Plans",
      icon: "\u{1F4DA}",
      description:
        "Access structured PTE lesson plans and classroom teaching resources already built into the Teacher Suite.",
      action: "Open Lesson Plans",
      ready: true,
    },
    {
      id: "translator",
      title: "Band & Score Translator",
      icon: "\u{1F4CA}",
      description:
        "Use the existing PTE-to-IELTS and CEFR reference data for teaching and target-setting conversations.",
      action: "Open Band & Score Translator",
      ready: true,
    },
    {
      id: "tips",
      title: "Examiner Strategy Vault",
      icon: "\u{1F4A1}",
      description:
        "Browse the existing examiner strategy and classroom guidance library.",
      action: "Open Examiner Strategy Vault",
      ready: true,
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
          <span className="master-teacher-hero-icon">
            {"\u{1F451}"}
          </span>
          <div>
            <strong>Teacher Workspace</strong>
            <span>Desktop tools &amp; resources</span>
          </div>
        </div>
      </div>

      <div className="master-teacher-notice">
        <span className="master-teacher-notice-icon">{"\u2713"}</span>
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
              className={`master-teacher-card ${
                !card.ready ? "master-teacher-card-disabled" : ""
              }`}
              onClick={() => card.ready && onNavigate(card.id)}
              disabled={!card.ready}
            >
              <div className="master-teacher-card-icon">
                {card.icon}
              </div>

              <div className="master-teacher-card-content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>

              <div className="master-teacher-card-action">
                <span>{card.action}</span>
                <span aria-hidden="true">
                  {card.ready ? "\u2192" : "\u2022"}
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="master-teacher-section master-teacher-section-secondary">
        <div className="master-teacher-info-grid">
          <div className="master-teacher-info-card">
            <span className="master-teacher-info-icon">
              {"\u{1F468}\u200D\u{1F4BB}"}
            </span>
            <div>
              <h4>Student records stay in the existing Dashboard</h4>
              <p>
                The Master Teacher Suite will use the current Teacher Dashboard
                student roster rather than creating a second student database.
              </p>
            </div>
          </div>

          <div className="master-teacher-info-card">
            <span className="master-teacher-info-icon">
              {"\u{1F9EA}"}
            </span>
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