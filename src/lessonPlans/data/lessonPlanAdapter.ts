import {
  EIGHT_WEEK_PTE_PLAN,
  type DailyLesson,
} from "./eightWeekCurriculum";

/**
 * Internal identity for a curriculum lesson.
 *
 * This deliberately sits outside the existing curriculum data so the
 * original eight-week plan remains unchanged.
 */
export type CurriculumLessonId = `week-${number}-day-${number}`;

/**
 * A lesson as understood by the new Lesson Plans system.
 *
 * The complete DailyLesson remains available through `lesson`, while the
 * stable curriculum identity is kept separately from the existing moduleKey.
 */
export interface CurriculumLesson {
  id: CurriculumLessonId;
  weekNumber: number;
  dayNumber: number;
  moduleKey: string;
  lesson: DailyLesson;
}

/**
 * Create the stable internal identity for a curriculum lesson.
 */
export function getCurriculumLessonId(
  weekNumber: number,
  dayNumber: number,
): CurriculumLessonId {
  return `week-${weekNumber}-day-${dayNumber}`;
}

/**
 * Convert the existing eight-week curriculum into the new Lesson Plans
 * representation without changing the source curriculum.
 */
export function getAllCurriculumLessons(): CurriculumLesson[] {
  return EIGHT_WEEK_PTE_PLAN.flatMap((week) =>
    week.days.map((day) => ({
      id: getCurriculumLessonId(week.weekNumber, day.dayNumber),
      weekNumber: week.weekNumber,
      dayNumber: day.dayNumber,
      moduleKey: day.moduleKey,
      lesson: day,
    })),
  );
}

/**
 * Retrieve one curriculum lesson by its stable Lesson Plans identity.
 */
export function getCurriculumLesson(
  lessonId: CurriculumLessonId,
): CurriculumLesson | undefined {
  return getAllCurriculumLessons().find((lesson) => lesson.id === lessonId);
}

/**
 * Retrieve all curriculum lessons belonging to a specific week.
 */
export function getCurriculumLessonsForWeek(
  weekNumber: number,
): CurriculumLesson[] {
  return getAllCurriculumLessons().filter(
    (lesson) => lesson.weekNumber === weekNumber,
  );
}
