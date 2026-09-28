import React, { useMemo, useState } from "react";
import {
  getAllCurriculumLessons,
  type CurriculumLesson,
} from "../data/lessonPlanAdapter";
import CurriculumLessonDetail from "./CurriculumLessonDetail";
import "./CurriculumLessonLibrary.css";

interface CurriculumLessonLibraryProps {
  onSelectLesson?: (lesson: CurriculumLesson) => void;
}

const sectionLabels: Record<string, string> = {
  SPEAKING: "Speaking",
  WRITING: "Writing",
  READING: "Reading",
  LISTENING: "Listening",
  INTEGRATED: "Integrated",
};

const difficultyLabels: Record<string, string> = {
  FOUNDATIONAL: "Foundational",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  "EXAM SIMULATION": "Exam Simulation",
};

const sectionIcons: Record<string, string> = {
  SPEAKING: "🎙️",
  WRITING: "✍️",
  READING: "📖",
  LISTENING: "🎧",
  INTEGRATED: "🔗",
};

const stageDetails = [
  {
    key: "warmup",
    label: "Warm-up",
    icon: "⚡",
    className: "curriculum-stage-warmup",
  },
  {
    key: "presentation",
    label: "Presentation",
    icon: "📘",
    className: "curriculum-stage-presentation",
  },
  {
    key: "practice",
    label: "Practice",
    icon: "🖊️",
    className: "curriculum-stage-practice",
  },
  {
    key: "review",
    label: "Review",
    icon: "📊",
    className: "curriculum-stage-review",
  },
] as const;

export default function CurriculumLessonLibrary({
  onSelectLesson,
}: CurriculumLessonLibraryProps) {
  const lessons = useMemo(() => getAllCurriculumLessons(), []);
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState<CurriculumLesson | null>(
    null,
  );

  const weeks = useMemo(() => {
    const weekMap = new Map<
      number,
      {
        weekNumber: number;
        lessons: CurriculumLesson[];
      }
    >();

    lessons.forEach((curriculumLesson) => {
      const { lesson } = curriculumLesson;
      const existing = weekMap.get(lesson.weekNumber);

      if (existing) {
        existing.lessons.push(curriculumLesson);
        return;
      }

      weekMap.set(lesson.weekNumber, {
        weekNumber: lesson.weekNumber,
        lessons: [curriculumLesson],
      });
    });

    return Array.from(weekMap.values()).sort(
      (a, b) => a.weekNumber - b.weekNumber,
    );
  }, [lessons]);

  const selectedWeekData = weeks.find(
    (week) => week.weekNumber === selectedWeek,
  );

  if (selectedLesson) {
    return (
      <CurriculumLessonDetail
        curriculumLesson={selectedLesson}
        onBack={() => setSelectedLesson(null)}
      />
    );
  }

  if (!selectedWeekData) {
    return (
      <section className="curriculum-lesson-library curriculum-lesson-library-empty">
        <div className="curriculum-empty-card">
          <div className="curriculum-empty-icon">📚</div>
          <h1>Lesson Plans</h1>
          <p>No curriculum lessons are currently available.</p>
        </div>
      </section>
    );
  }

  const firstLesson = selectedWeekData.lessons[0]?.lesson;
  const section = firstLesson?.section ?? "";
  const sectionLabel = sectionLabels[section] ?? section;
  const sectionIcon = sectionIcons[section] ?? "📚";
  const scoringWeight = firstLesson?.scoringWeight ?? "";

  return (
    <section className="curriculum-lesson-library">
      <div className="curriculum-lesson-library-inner">
        <header className="curriculum-hero">
          <div className="curriculum-hero-main">
            <div className="curriculum-hero-icon" aria-hidden="true">
              📖
            </div>

            <div>
              <div className="curriculum-kicker">8-Week PTE Curriculum</div>
              <h1>Lesson Plans</h1>
              <p>
                A structured 32-lesson teaching programme connecting each PTE
                skill to a clear lesson focus, classroom timing, practice,
                review, and homework.
              </p>
            </div>
          </div>

          <div className="curriculum-hero-summary">
            <div className="curriculum-summary-icon" aria-hidden="true">
              🗓️
            </div>
            <div>
              <strong>8 Weeks</strong>
              <span>32 Lessons</span>
              <small>Complete PTE Academic Teaching Programme</small>
            </div>
          </div>
        </header>

        <section className="curriculum-weeks-panel">
          <div className="curriculum-section-label">Course Weeks</div>

          <div className="curriculum-week-tabs" role="tablist">
            {weeks.map((week) => {
              const isSelected = week.weekNumber === selectedWeek;

              return (
                <button
                  key={week.weekNumber}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`curriculum-week-tab ${
                    isSelected ? "is-selected" : ""
                  }`}
                  onClick={() => setSelectedWeek(week.weekNumber)}
                >
                  <strong>Week {week.weekNumber}</strong>
                  <span>{week.lessons.length} lessons</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="curriculum-week-content">
          <div className="curriculum-week-heading">
            <div>
              <div className="curriculum-kicker">
                Week {selectedWeekData.weekNumber}
              </div>
              <h2>Week {selectedWeekData.weekNumber} Curriculum</h2>
              <p>
                Select a lesson below to open its dedicated lesson view.
              </p>
            </div>

            <div className="curriculum-week-summary">
              <div className="curriculum-week-summary-card curriculum-week-summary-blue">
                <span aria-hidden="true">◷</span>
                <div>
                  <strong>{selectedWeekData.lessons.length} lessons</strong>
                  <small>1 hour each</small>
                </div>
              </div>

              <div className="curriculum-week-summary-card curriculum-week-summary-green">
                <span aria-hidden="true">🎯</span>
                <div>
                  <strong>Focus</strong>
                  <small>
                    {sectionIcon} {sectionLabel}
                  </small>
                  <small>{scoringWeight}</small>
                </div>
              </div>
            </div>
          </div>

          <div className="curriculum-lesson-list">
            {selectedWeekData.lessons.map((curriculumLesson) => {
              const { lesson } = curriculumLesson;
              const sectionText =
                sectionLabels[lesson.section] ?? lesson.section;
              const icon = sectionIcons[lesson.section] ?? "📚";

              return (
                <article
                  key={curriculumLesson.id}
                  className="curriculum-lesson-card"
                >
                  <div className="curriculum-lesson-identity">
                    <div className="curriculum-day-pill">
                      Day {lesson.dayNumber}
                    </div>

                    <div className="curriculum-lesson-section">
                      <div
                        className="curriculum-lesson-section-icon"
                        aria-hidden="true"
                      >
                        {icon}
                      </div>
                      <strong>{sectionText}</strong>
                    </div>

                    <div className="curriculum-yield-badge">
                      {lesson.scoringWeight}
                    </div>
                  </div>

                  <div className="curriculum-lesson-main">
                    <div className="curriculum-lesson-title-row">
                      <div>
                        <h3>{lesson.title}</h3>
                        <p>{lesson.moduleName}</p>
                      </div>

                      <span className="curriculum-difficulty">
                        {difficultyLabels[lesson.difficultyLevel] ??
                          lesson.difficultyLevel}
                      </span>
                    </div>

                    <div className="curriculum-stage-grid">
                      {stageDetails.map((stage) => (
                        <div
                          key={stage.key}
                          className={`curriculum-stage-card ${stage.className}`}
                        >
                          <div className="curriculum-stage-heading">
                            <span aria-hidden="true">{stage.icon}</span>
                            <div>
                              <strong>{stage.label}</strong>
                              <small>
                                {
                                  lesson.timeBoxBreakdown[
                                    stage.key as keyof typeof lesson.timeBoxBreakdown
                                  ]
                                    ?.split(":")[0]
                                    ?.trim()
                                }
                              </small>
                            </div>
                          </div>

                          <p>
                            {lesson.timeBoxBreakdown[
                              stage.key as keyof typeof lesson.timeBoxBreakdown
                            ]
                              ?.replace(/^\s*\d+\s*mins?\s*:\s*/i, "")
                              ?.trim()}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="curriculum-lesson-action">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedLesson(curriculumLesson);
                        onSelectLesson?.(curriculumLesson);
                      }}
                    >
                      <span>Open Lesson</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
