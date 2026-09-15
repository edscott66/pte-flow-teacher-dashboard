// src/masterTeacher/services/teacherAnalyticsService.ts

import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { teacherAuth, teacherDb } from "../teacherFirebase";

/**
 * Teacher Dashboard Firebase Analytics Service
 *
 * IMPORTANT:
 * - This service uses the separate Teacher Dashboard Firebase project.
 * - It does NOT use the existing Student App Firebase database.
 * - Teacher identity comes from teacherAuth.
 * - All Firestore writes are scoped to the authenticated teacher UID.
 */

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

/**
 * Returns the currently authenticated Teacher Dashboard user.
 *
 * This deliberately uses teacherAuth rather than the existing Student App
 * authentication instance.
 */
export function getCurrentTeacher() {
  return teacherAuth.currentUser;
}

/**
 * Create or update the authenticated teacher's profile.
 *
 * Document path:
 *
 * teachers/{teacherId}
 */
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

/**
 * Save one completed Calibration Lab assessment.
 *
 * Document path:
 *
 * calibrationAttempts/{attemptId}
 *
 * The teacherId is always taken from the authenticated Firebase user rather
 * than supplied by the UI. This is important for security and data integrity.
 */
export async function saveCalibrationAttempt(
  attemptData: Omit<CalibrationAttemptData, "teacherId">
): Promise<string> {
  const teacher = getCurrentTeacher();

  if (!teacher) {
    throw new Error(
      "No Teacher Dashboard user is authenticated. Calibration attempt cannot be saved."
    );
  }

  // Make sure the teacher has a profile before recording performance data.
  await ensureTeacherProfile();

  const attemptsRef = collection(teacherDb, "calibrationAttempts");

  const attempt = {
    ...attemptData,

    // Never trust a teacherId supplied by the UI.
    // Always use the authenticated Teacher Dashboard account.
    teacherId: teacher.uid,

    createdAt: serverTimestamp(),
  };

  const documentRef = await addDoc(attemptsRef, attempt);

  return documentRef.id;
}