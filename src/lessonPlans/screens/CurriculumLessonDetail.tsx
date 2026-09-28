import React from "react";
import { useNavigate } from "react-router-dom";
import { useFeedback } from "../../masterTeacher/contexts/FeedbackContext";
import type { CurriculumLesson } from "../data/lessonPlanAdapter";
import "./CurriculumLessonDetail.css";

interface CurriculumLessonDetailProps {
  curriculumLesson: CurriculumLesson;
  onBack: () => void;
}

const sectionLabels: Record<string, string> = {
  SPEAKING: "Speaking",
  WRITING: "Writing",
  READING: "Reading",
  LISTENING: "Listening",
  INTEGRATED: "Integrated",
};

const sectionIcons: Record<string, string> = {
  SPEAKING: "🎙️",
  WRITING: "✍️",
  READING: "📖",
  LISTENING: "🎧",
  INTEGRATED: "🔗",
};

const difficultyLabels: Record<string, string> = {
  FOUNDATIONAL: "Foundational",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  "EXAM SIMULATION": "Exam Simulation",
};

export default function CurriculumLessonDetail({
  curriculumLesson,
  onBack,
}: CurriculumLessonDetailProps) {
  const { lesson } = curriculumLesson;
  const navigate = useNavigate();
  const { selectQuestion } = useFeedback();

  const sectionLabel = sectionLabels[lesson.section] ?? lesson.section;
  const sectionIcon = sectionIcons[lesson.section] ?? "📚";

  const handleStartPractice = () => {
    selectQuestion(curriculumLesson.moduleKey);
    navigate("/master-teacher/marking");
  };

  return (
    <section className="curriculum-lesson-detail">
      <div className="curriculum-lesson-detail-inner">
        <button
          type="button"
          className="curriculum-detail-back"
          onClick={onBack}
        >
          <span aria-hidden="true">←</span>
          Back to Lesson Plans
        </button>

        <header className="curriculum-detail-hero">
          <div className="curriculum-detail-hero-top">
            <div className="curriculum-detail-identity">
              <div className="curriculum-detail-day">
                Week {lesson.weekNumber} · Day {lesson.dayNumber}
              </div>

              <div className="curriculum-detail-section">
                <span aria-hidden="true">{sectionIcon}</span>
                {sectionLabel}
              </div>

              <div className="curriculum-detail-yield">
                {lesson.scoringWeight}
              </div>
            </div>

            <span className="curriculum-detail-difficulty">
              {difficultyLabels[lesson.difficultyLevel] ??
                lesson.difficultyLevel}
            </span>
          </div>

          <div className="curriculum-detail-title-block">
            <div className="curriculum-kicker">TODAY'S LESSON</div>
            <h1>{lesson.title}</h1>
            <p>{lesson.moduleName}</p>
          </div>

          <div className="curriculum-detail-meta">
            <div>
              <span>Lesson ID</span>
              <strong>{curriculumLesson.id}</strong>
            </div>
            <div>
              <span>Module Key</span>
              <strong>{curriculumLesson.moduleKey}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>60 minutes</strong>
            </div>
          </div>
        </header>

        <section className="curriculum-detail-practice">
          <div className="curriculum-detail-practice-icon" aria-hidden="true">
            🎙️
          </div>

          <div className="curriculum-detail-practice-main">
            <div className="curriculum-kicker">LESSON PRACTICE</div>
            <h2>Put today's lesson into practice</h2>
            <p>
              Launch the existing PTE practice and marking workflow for{" "}
              <strong>{lesson.moduleName}</strong>. Your teacher can then
              evaluate the response using the existing marking tools.
            </p>
          </div>

          <button
            type="button"
            className="curriculum-detail-practice-button"
            onClick={handleStartPractice}
          >
            <span>Start Guided Practice</span>
            <span aria-hidden="true">→</span>
          </button>
        </section>

        <section className="curriculum-detail-section-block">
          <div className="curriculum-detail-section-heading">
            <div>
              <div className="curriculum-kicker">THE 60-MINUTE LESSON</div>
              <h2>Lesson Structure</h2>
            </div>
            <span className="curriculum-detail-heading-icon" aria-hidden="true">
              ⏱️
            </span>
          </div>

          <div className="curriculum-detail-stage-grid">
            <article className="curriculum-detail-stage curriculum-detail-stage-warmup">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">⚡</span>
                <div>
                  <strong>Warm-up</strong>
                  <small>10 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.warmup}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-presentation">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">📘</span>
                <div>
                  <strong>Presentation</strong>
                  <small>15 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.presentation}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-practice">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">🖊️</span>
                <div>
                  <strong>Practice</strong>
                  <small>20 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.practice}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-review">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">📊</span>
                <div>
                  <strong>Review</strong>
                  <small>15 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.review}</p>
            </article>
          </div>
        </section>

        <div className="curriculum-detail-two-column">
          <section className="curriculum-detail-content-card">
            <div className="curriculum-detail-card-heading">
              <span className="curriculum-detail-card-icon curriculum-icon-green">
                🎯
              </span>
              <div>
                <div className="curriculum-kicker">TEACHING FOCUS</div>
                <h2>What to Teach</h2>
              </div>
            </div>

            <ol className="curriculum-detail-numbered-list">
              {lesson.teachingPoints.map((point, index) => (
                <li key={`${curriculumLesson.id}-teaching-${index}`}>
                  <span>{index + 1}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="curriculum-detail-content-card">
            <div className="curriculum-detail-card-heading">
              <span className="curriculum-detail-card-icon curriculum-icon-blue">
                💡
              </span>
              <div>
                <div className="curriculum-kicker">TEACHER GUIDANCE</div>
                <h2>Tips &amp; Tricks</h2>
              </div>
            </div>

            <ul className="curriculum-detail-bullet-list">
              {lesson.tipsAndTricks.map((tip, index) => (
                <li key={`${curriculumLesson.id}-tip-${index}`}>
                  <span aria-hidden="true">✓</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="curriculum-detail-content-card curriculum-detail-problems-card">
          <div className="curriculum-detail-card-heading">
            <span className="curriculum-detail-card-icon curriculum-icon-amber">
              🛠️
            </span>
            <div>
              <div className="curriculum-kicker">DIAGNOSTIC GUIDANCE</div>
              <h2>Common Problems &amp; Fixes</h2>
            </div>
          </div>

          <div className="curriculum-detail-problem-grid">
            {lesson.commonProblemsAndFixes.map((item, index) => (
              <article
                key={`${curriculumLesson.id}-problem-${index}`}
                className="curriculum-detail-problem"
              >
                <div className="curriculum-detail-problem-number">
                  {index + 1}
                </div>
                <div>
                  <h3>{item.problem}</h3>
                  <p>{item.fix}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="curriculum-detail-homework">
          <div className="curriculum-detail-homework-icon" aria-hidden="true">
            🏠
          </div>

          <div className="curriculum-detail-homework-main">
            <div className="curriculum-kicker">AFTER CLASS</div>
            <h2>Homework</h2>
            <p>{lesson.homework.task}</p>

            <div className="curriculum-detail-homework-targets">
              <div>
                <span>Target quota</span>
                <strong>{lesson.homework.targetQuota}</strong>
              </div>

              <div>
                <span>Success criteria</span>
                <strong>{lesson.homework.successCriteria}</strong>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
