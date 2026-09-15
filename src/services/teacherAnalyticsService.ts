// src/services/teacherAnalyticsService.ts

import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";

import { teacherAuth, teacherDb } from "../teacherFirebase";

export interface TeacherProfileData {
  displayName?: string;
  email?: string;
  photoURL?: string | null;
}

export interface CalibrationAttemptData {
  teacherId: string;

  questionId: string;
  questionTitle: string;
  section: string;

  exerciseIndex: number;
  topicTitle: string;
  cefrLevel?: string;

  responseMode: string;

  teacherInput: string;

  matchPercentage: number | null;
  tier: string;

  feedbackSummary?: string;
  matchedKeywords?: string[];
  missingKeywords?: string[];

  coachingAdviceForTeacher?: string;
  studentFacingScript?: string;

  checkedErrorIds?: string[];

  expertOverallScore?: string;
  expertFeedbackText?: string;
  expertAdvice?: string;

  isLiveAi: boolean;

  timestamp: string;
}

export interface CalibrationAttemptRecord
  extends CalibrationAttemptData {
  id: string;
  createdAt?: unknown;
}

export function getCurrentTeacher() {
  return teacherAuth.currentUser;
}

export async function ensureTeacherProfile(
  profileData: TeacherProfileData = {}
): Promise<void> {
  const teacher = getCurrentTeacher();

  if (!teacher) {
    throw new Error(
      "No Teacher Dashboard user is authenticated. Please sign in to the Teacher Dashboard Firebase account."
    );
  }

  const teacherRef = doc(teacherDb, "teachers", teacher.uid);

  const profile = {
    teacherId: teacher.uid,
    email: profileData.email ?? teacher.email ?? "",
    displayName:
      profileData.displayName ??
      teacher.displayName ??
      teacher.email?.split("@")[0] ??
      "Teacher",
    photoURL: profileData.photoURL ?? teacher.photoURL ?? null,
    updatedAt: serverTimestamp(),
  };

  await setDoc(teacherRef, profile, { merge: true });
}

export async function saveCalibrationAttempt(
  attemptData: Omit<CalibrationAttemptData, "teacherId">
): Promise<string> {
  const teacher = getCurrentTeacher();

  if (!teacher) {
    throw new Error(
      "No Teacher Dashboard user is authenticated. Calibration attempt cannot be saved."
    );
  }

  await ensureTeacherProfile();

  const attemptsRef = collection(
    teacherDb,
    "calibrationAttempts"
  );

  const attempt = {
    ...attemptData,
    teacherId: teacher.uid,
    createdAt: serverTimestamp(),
  };

  const documentRef = await addDoc(attemptsRef, attempt);

  return documentRef.id;
}

/**
 * Convert a Calibration Lab exercise number into its
 * established CEFR level.
 *
 * This is used as a backwards-compatible fallback for
 * older analytics records that were created before
 * cefrLevel was stored correctly.
 */
function getLegacyCefrLevel(
  exerciseIndex: number
): string {
  if (exerciseIndex <= 20) {
    return "A1";
  }

  if (exerciseIndex <= 40) {
    return "A2";
  }

  if (exerciseIndex <= 60) {
    return "B1";
  }

  if (exerciseIndex <= 80) {
    return "B2";
  }

  if (exerciseIndex <= 90) {
    return "C1";
  }

  return "C2";
}

/**
 * Normalize the stored CEFR value.
 *
 * New records store the CEFR level as a string such as
 * "A1".
 *
 * Some older records may have:
 * - no cefrLevel
 * - an object value
 * - the string "[object Object]"
 *
 * In those cases we fall back to the established
 * exercise-number CEFR mapping.
 */
function normalizeCefrLevel(
  storedValue: unknown,
  exerciseIndex: number
): string {
  let storedLevel = "";

  if (typeof storedValue === "string") {
    storedLevel = storedValue.trim();
  } else if (
    storedValue &&
    typeof storedValue === "object" &&
    "level" in storedValue
  ) {
    const level = (
      storedValue as { level?: unknown }
    ).level;

    if (typeof level === "string") {
      storedLevel = level.trim();
    }
  }

  if (
    storedLevel &&
    storedLevel !== "[object Object]"
  ) {
    return storedLevel.toUpperCase();
  }

  return getLegacyCefrLevel(exerciseIndex);
}

export async function getTeacherCalibrationAttempts(): Promise<
  CalibrationAttemptRecord[]
> {
  const teacher = getCurrentTeacher();

  if (!teacher) {
    throw new Error(
      "No Teacher Dashboard user is authenticated. Calibration attempts cannot be loaded."
    );
  }

  const attemptsRef = collection(
    teacherDb,
    "calibrationAttempts"
  );

  const attemptsQuery = query(
    attemptsRef,
    where("teacherId", "==", teacher.uid)
  );

  const snapshot = await getDocs(attemptsQuery);

  const attempts: CalibrationAttemptRecord[] =
    snapshot.docs.map((attemptDoc) => {
      const data = attemptDoc.data();

      const exerciseIndex = Number(
        data.exerciseIndex ?? 0
      );

      const cefrLevel = normalizeCefrLevel(
        data.cefrLevel,
        exerciseIndex
      );

      return {
        id: attemptDoc.id,
        teacherId: String(data.teacherId ?? ""),
        questionId: String(data.questionId ?? ""),
        questionTitle: String(
          data.questionTitle ?? ""
        ),
        section: String(data.section ?? ""),
        exerciseIndex,
        topicTitle: String(data.topicTitle ?? ""),
        cefrLevel,
        responseMode: String(
          data.responseMode ?? ""
        ),
        teacherInput: String(
          data.teacherInput ?? ""
        ),
        matchPercentage:
          typeof data.matchPercentage === "number"
            ? data.matchPercentage
            : null,
        tier: String(data.tier ?? ""),
        feedbackSummary: data.feedbackSummary
          ? String(data.feedbackSummary)
          : undefined,
        matchedKeywords: Array.isArray(
          data.matchedKeywords
        )
          ? data.matchedKeywords.map(String)
          : undefined,
        missingKeywords: Array.isArray(
          data.missingKeywords
        )
          ? data.missingKeywords.map(String)
          : undefined,
        coachingAdviceForTeacher:
          data.coachingAdviceForTeacher
            ? String(data.coachingAdviceForTeacher)
            : undefined,
        studentFacingScript:
          data.studentFacingScript
            ? String(data.studentFacingScript)
            : undefined,
        checkedErrorIds: Array.isArray(
          data.checkedErrorIds
        )
          ? data.checkedErrorIds.map(String)
          : undefined,
        expertOverallScore:
          data.expertOverallScore
            ? String(data.expertOverallScore)
            : undefined,
        expertFeedbackText:
          data.expertFeedbackText
            ? String(data.expertFeedbackText)
            : undefined,
        expertAdvice: data.expertAdvice
          ? String(data.expertAdvice)
          : undefined,
        isLiveAi: Boolean(data.isLiveAi),
        timestamp: String(
          data.timestamp ?? ""
        ),
        createdAt: data.createdAt,
      };
    });

  attempts.sort((a, b) => {
    const aTime =
      a.createdAt &&
      typeof a.createdAt === "object" &&
      "toMillis" in a.createdAt &&
      typeof a.createdAt.toMillis === "function"
        ? a.createdAt.toMillis()
        : 0;

    const bTime =
      b.createdAt &&
      typeof b.createdAt === "object" &&
      "toMillis" in b.createdAt &&
      typeof b.createdAt.toMillis === "function"
        ? b.createdAt.toMillis()
        : 0;

    return bTime - aTime;
  });

  return attempts;
}