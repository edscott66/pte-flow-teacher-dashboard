import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

import { QUESTIONS_DATA } from "../constants/questionsData";
import { compareTeacherFeedback } from "../utils/compareText";
import {
  getExercise,
  getRandomCalibrationExercise,
} from "../constants/exerciseBank";

import {
  getCurrentTeacher,
  getTeacherCalibrationAttempts,
  saveCalibrationAttempt,
} from "../../services/teacherAnalyticsService";

type Question = (typeof QUESTIONS_DATA)[number];
type Exercise = ReturnType<typeof getExercise>;

interface ErrorChecklistItem {
  id: string;
  keyword?: string;
  [key: string]: unknown;
}

type ComparisonResult = Record<string, any>;

interface CalibrationProgress {
  completed: number;
  averageScore: number;
  bestScore: number;
  lowestScore: number;
  currentTier: string;
}

interface FeedbackContextValue {
  QUESTIONS_DATA: typeof QUESTIONS_DATA;
  selectedQuestionId: string;
  currentQuestion: Question;
  exerciseIndex: number;
  setExerciseIndex: (index: number) => void;
  nextExercise: () => void;
  prevExercise: () => void;
  randomCalibrationExercise: () => void;
  currentExercise: Exercise;
  activeResponseMode: "poor" | "good";
  setActiveResponseMode: Dispatch<SetStateAction<"poor" | "good">>;
  teacherFeedbackText: string;
  setTeacherFeedbackText: Dispatch<SetStateAction<string>>;
  checkedErrorIds: string[];
  toggleErrorCheckbox: (errorId: string, keyword?: string) => void;
  lastComparisonResult: ComparisonResult | null;
  isEvaluatingAi: boolean;
  runComparison: () => Promise<ComparisonResult | null>;
  runStudentRecordingComparison: (
    customTranscript?: string
  ) => Promise<ComparisonResult | null>;
  sourceScreen: "marking" | "students";
  setSourceScreen: Dispatch<SetStateAction<"marking" | "students">>;
  studentAudioUrl: string | null;
  setStudentAudioUrl: Dispatch<SetStateAction<string | null>>;
  studentTranscriptText: string;
  setStudentTranscriptText: Dispatch<SetStateAction<string>>;
  clearFeedback: () => void;
  selectQuestion: (questionId: string) => void;
  submissionHistory: ComparisonResult[];
  calibrationHistory: ComparisonResult[];
  calibrationProgress: CalibrationProgress;
}

const FeedbackContext = createContext<FeedbackContextValue | null>(null);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState("read-aloud");
  const [exerciseIndex, setExerciseIndexState] = useState(1); // 1 to 100
  const [activeResponseMode, setActiveResponseMode] =
    useState<"poor" | "good">("poor"); // "poor" or "good"
  const [teacherFeedbackText, setTeacherFeedbackText] = useState("");
  const [checkedErrorIds, setCheckedErrorIds] = useState<string[]>([]);
  const [lastComparisonResult, setLastComparisonResult] =
    useState<ComparisonResult | null>(null);
  const [isEvaluatingAi, setIsEvaluatingAi] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<
    ComparisonResult[]
  >([]);
  const [calibrationHistory, setCalibrationHistory] = useState<
    ComparisonResult[]
  >([]);
  const [sourceScreen, setSourceScreen] = useState<"marking" | "students">(
    "marking"
  );
  const [studentAudioUrl, setStudentAudioUrl] = useState<string | null>(null);
  const [studentTranscriptText, setStudentTranscriptText] =
    useState<string>("");

   // Restore persisted Calibration Lab progress when the
  // Teacher Dashboard account becomes available.
  useEffect(() => {
    let isMounted = true;

    const loadCalibrationProgress = async () => {
      const teacher = getCurrentTeacher();

      if (!teacher) {
        return;
      }

      try {
        const persistedAttempts = await getTeacherCalibrationAttempts();

        if (isMounted) {
          setCalibrationHistory(
            persistedAttempts as ComparisonResult[]
          );
        }
      } catch (error) {
        console.warn(
          "Unable to restore persisted Calibration Lab progress.",
          error
        );
      }
    };

    loadCalibrationProgress();

    return () => {
      isMounted = false;
    };
  }, []);

  // Get selected question object
  const currentQuestion =
    QUESTIONS_DATA.find((q) => q.id === selectedQuestionId) ||
    QUESTIONS_DATA[0]!;

  // Get active exercise object (1 of 100)
  const currentExercise = getExercise(currentQuestion, exerciseIndex);

  // Select new question type
  const selectQuestion = (questionId: string) => {
    setSelectedQuestionId(questionId);
    setExerciseIndexState(1);
    setTeacherFeedbackText("");
    setCheckedErrorIds([]);
    setLastComparisonResult(null);
    setIsEvaluatingAi(false);
  };

  // Change exercise index (1 to 100)
  const setExerciseIndex = (index: number) => {
    const num = Math.max(1, Math.min(100, index));
    setExerciseIndexState(num);
    setTeacherFeedbackText("");
    setCheckedErrorIds([]);
    setLastComparisonResult(null);
    setIsEvaluatingAi(false);
  };

  const nextExercise = () => {
    setExerciseIndex(exerciseIndex + 1);
  };

  const prevExercise = () => {
    setExerciseIndex(exerciseIndex - 1);
  };

  const randomCalibrationExercise = () => {
    const randomExercise = getRandomCalibrationExercise();

    if (!randomExercise) {
      return;
    }

    setExerciseIndex(randomExercise.exerciseIndex);
  };

  // Toggle Error Tracker Checkbox.
  // Diagnostic selections are structured hypotheses only and must never
  // auto-populate or edit the teacher's independently written assessment.
  const toggleErrorCheckbox = (errorId: string, _keyword?: string) => {
    setCheckedErrorIds((prev: string[]) => {
      const exists = prev.includes(errorId);
      return exists
        ? prev.filter((id) => id !== errorId)
        : [...prev, errorId];
    });
  };

  // Record a completed Calibration Lab assessment separately from live
  // student analysis.
  const recordCalibrationResult = (result: ComparisonResult) => {
    setCalibrationHistory((prev: ComparisonResult[]) => [result, ...prev]);
  };

  /**
   * Persist a completed Calibration Lab assessment to the separate
   * Teacher Dashboard Firebase project.
   *
   * IMPORTANT:
   * - This is deliberately non-blocking.
   * - Firebase persistence must never prevent the Calibration Lab result
   *   from being displayed.
   * - If no Teacher Dashboard account is authenticated, the assessment
   *   remains available through the existing in-memory history.
   * - Student Recording Analysis is deliberately NOT persisted here yet.
   * - Only completed Calibration Lab assessments are persisted.
   */
  const persistCalibrationAnalytics = (
    result: ComparisonResult
  ): void => {
    const teacher = getCurrentTeacher();

    if (!teacher) {
      console.warn(
        "Teacher Dashboard analytics not saved: no authenticated Teacher Dashboard user."
      );
      return;
    }

    void saveCalibrationAttempt({
      questionId: String(result.questionId ?? ""),
      questionTitle: String(result.questionTitle ?? ""),
      section: String(result.section ?? ""),
      exerciseIndex: Number(result.exerciseIndex ?? exerciseIndex),
      topicTitle: String(
  result.topicTitle ?? currentExercise?.topicTitle ?? ""
),
cefrLevel:
  typeof currentExercise?.cefrLevel === "object" &&
  currentExercise?.cefrLevel !== null &&
  "level" in currentExercise.cefrLevel
    ? String(
        (currentExercise.cefrLevel as { level?: unknown }).level ?? ""
      )
    : String(currentExercise?.cefrLevel ?? ""),
      responseMode: String(
        result.responseMode ?? activeResponseMode
      ),

   teacherInput: String(result.teacherInput ?? ""),

      matchPercentage:
        typeof result.matchPercentage === "number"
          ? result.matchPercentage
          : Number.isFinite(Number(result.matchPercentage))
            ? Number(result.matchPercentage)
            : null,

      tier: String(result.tier ?? "Not evaluated"),

      feedbackSummary:
        typeof result.feedbackSummary === "string"
          ? result.feedbackSummary
          : undefined,

      matchedKeywords: Array.isArray(result.matchedKeywords)
        ? result.matchedKeywords
        : undefined,

      missingKeywords: Array.isArray(result.missingKeywords)
        ? result.missingKeywords
        : undefined,

      coachingAdviceForTeacher:
        typeof result.coachingAdviceForTeacher === "string"
          ? result.coachingAdviceForTeacher
          : undefined,

      studentFacingScript:
        typeof result.studentFacingScript === "string"
          ? result.studentFacingScript
          : undefined,

      checkedErrorIds: Array.isArray(result.checkedErrorIds)
        ? result.checkedErrorIds
        : undefined,

      expertOverallScore:
        typeof result.expertOverallScore === "string"
          ? result.expertOverallScore
          : undefined,

      expertFeedbackText:
        typeof result.expertFeedbackText === "string"
          ? result.expertFeedbackText
          : undefined,

      expertAdvice:
        typeof result.expertAdvice === "string"
          ? result.expertAdvice
          : undefined,

      isLiveAi: result.isLiveAi === true,

      timestamp:
        typeof result.timestamp === "string"
          ? result.timestamp
          : new Date().toISOString(),
    }).catch((error) => {
      console.warn(
        "Teacher Dashboard analytics persistence failed. Calibration result remains available locally.",
        error
      );
    });
  };

  // Run the Combined Offline Rubric Benchmark + Live AI Evaluation
  const runComparison = async (): Promise<ComparisonResult | null> => {
    if (!currentQuestion || !currentExercise) return null;

    setSourceScreen("marking");

    const targetExpertScore =
      activeResponseMode === "good"
        ? currentExercise.goodScore
        : currentExercise.poorScore;

    const expertText = `${targetExpertScore.overall || "Score N/A"}. ${
      targetExpertScore.breakdownText || ""
    } Expert Advice: ${currentExercise.expertAdvice || ""}`;

    const perfectCalibrationResponse =
      (
        currentExercise as typeof currentExercise & {
          perfectCalibrationResponse?: string;
        }
      ).perfectCalibrationResponse;

    const checklistItems: ErrorChecklistItem[] =
      currentExercise.errorChecklist || [];

    const activeChecklist = checklistItems.filter((item) =>
      checkedErrorIds.includes(item.id)
    );

    // 1. Initial Instant Offline Rule-Based Comparison
    const offlineResult = compareTeacherFeedback(
      teacherFeedbackText,
      expertText,
      activeChecklist
    );

    const initialPayload = {
      ...offlineResult,
      questionId: currentQuestion.id,
      questionTitle: currentQuestion.title,
      exerciseIndex: currentExercise.exerciseIndex,
      topicTitle: currentExercise.topicTitle,
      section: currentQuestion.section,
      responseMode: activeResponseMode,
      teacherInput: teacherFeedbackText,
      expertFeedbackText: targetExpertScore.breakdownText,
      expertAdvice: currentExercise.expertAdvice,
      expertOverallScore: targetExpertScore.overall,
      perfectCalibrationResponse,
      checkedErrorIds,
      isLiveAi: false,
      timestamp: new Date().toISOString(),
    };

    setLastComparisonResult(initialPayload);
    setIsEvaluatingAi(true);

    // 2. Trigger Live Server-Side Gemini AI Evaluation
    try {
      const currentSample: any =
        activeResponseMode === "good"
          ? currentExercise.good
          : currentExercise.poor;

      const studentResponseText =
        currentSample?.transcript ||
        currentSample?.text ||
        (currentSample?.answers
          ? currentSample.answers.join(", ")
          : "");

      const response = await fetch("/api/evaluate-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionTitle: `${currentQuestion.title} (${currentExercise.topicTitle})`,
          section: currentQuestion.section,
          timeLimit: currentQuestion.timeLimit,
          scoringCriteria: currentQuestion.scoringCriteria,
          promptText: currentExercise.promptText,
          studentResponseText,
          responseMode: activeResponseMode,
          teacherInput: teacherFeedbackText,
          checkedErrorIds,
          errorChecklist: activeChecklist,
          expertFeedbackObj: targetExpertScore,
          expertAdvice: currentExercise.expertAdvice,
          perfectCalibrationResponse,
        }),
      });

      if (response.ok) {
        const aiData = await response.json();

        if (aiData.isLiveAi) {
          const mergedPayload = {
            ...initialPayload,
            matchPercentage:
              aiData.matchPercentage ?? initialPayload.matchPercentage,
            tier: aiData.tier || initialPayload.tier,
            badgeColor:
              aiData.badgeColor || initialPayload.badgeColor,
            feedbackSummary:
              aiData.feedbackSummary || initialPayload.feedbackSummary,
            matchedKeywords:
              aiData.matchedKeywords || initialPayload.matchedKeywords,
            missingKeywords:
              aiData.missingKeywords || initialPayload.missingKeywords,
            coachingAdviceForTeacher:
              aiData.coachingAdviceForTeacher,
            studentFacingScript: aiData.studentFacingScript,
            isLiveAi: true,
          };

          setLastComparisonResult(mergedPayload);

          setSubmissionHistory((prev: ComparisonResult[]) => [
            mergedPayload,
            ...prev.slice(0, 19),
          ]);

          recordCalibrationResult(mergedPayload);

          // Persist analytics separately from the existing Calibration Lab
          // state flow. Firebase failure must not affect the evaluation.
          persistCalibrationAnalytics(mergedPayload);

          setIsEvaluatingAi(false);
          return mergedPayload;
        }
      }
    } catch (err) {
      console.warn(
        "Live AI Evaluation fallback to offline benchmark:",
        err
      );
    }

    setSubmissionHistory((prev: ComparisonResult[]) => [
      initialPayload,
      ...prev.slice(0, 19),
    ]);

    recordCalibrationResult(initialPayload);

    // Persist the completed offline fallback result as well.
    persistCalibrationAnalytics(initialPayload);

    setIsEvaluatingAi(false);

    return initialPayload;
  };

  // Run Student Live Recording Analysis Comparison
  const runStudentRecordingComparison = async (
    customTranscript?: string
  ): Promise<ComparisonResult | null> => {
    if (!currentQuestion) return null;

    setSourceScreen("students");

    const activeStudentText =
      customTranscript ||
      studentTranscriptText ||
      "Live recorded student response audio.";

    const targetExpertScore = currentExercise?.goodScore || {
      overall: "PTE 65-79 Expected Benchmark",
      breakdownText: `Expected ${currentQuestion.section} standard for ${currentQuestion.title}.`,
    };

    const expertText = `${targetExpertScore.overall || "Score N/A"}. ${
      targetExpertScore.breakdownText || ""
    } Expert Advice: ${
      currentExercise?.expertAdvice || ""
    }`;

    const checklistItems: ErrorChecklistItem[] =
      currentQuestion.errorChecklist || [];

    const activeChecklist = checklistItems.filter((item) =>
      checkedErrorIds.includes(item.id)
    );

    const offlineResult = compareTeacherFeedback(
      teacherFeedbackText,
      expertText,
      activeChecklist
    );

    const initialPayload = {
      ...offlineResult,
      questionId: currentQuestion.id,
      questionTitle: currentQuestion.title,
      exerciseIndex: currentExercise?.exerciseIndex || 1,
      topicTitle:
        currentExercise?.topicTitle || currentQuestion.title,
      section: currentQuestion.section,
      responseMode: "Student Recording Analysis",
      isStudentRecording: true,
      studentTranscriptText: activeStudentText,
      studentAudioUrl,
      teacherInput: teacherFeedbackText,
      expertFeedbackText: targetExpertScore.breakdownText,
      expertAdvice:
        currentExercise?.expertAdvice ||
        "Guide the candidate on oral fluency, content coverage, and accuracy.",
      expertOverallScore: targetExpertScore.overall,
      checkedErrorIds,
      isLiveAi: false,
      timestamp: new Date().toISOString(),
    };

    setLastComparisonResult(initialPayload);
    setIsEvaluatingAi(true);

    try {
      const response = await fetch("/api/evaluate-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionTitle: `${currentQuestion.title} (${
            currentExercise?.topicTitle || "Student Recording"
          })`,
          section: currentQuestion.section,
          timeLimit: currentQuestion.timeLimit,
          scoringCriteria: currentQuestion.scoringCriteria,
          promptText:
            currentExercise?.promptText || currentQuestion.title,
          studentResponseText: activeStudentText,
          responseMode: "My Student Recording Analysis",
          teacherInput: teacherFeedbackText,
          checkedErrorIds,
          errorChecklist: activeChecklist,
          expertFeedbackObj: targetExpertScore,
          expertAdvice:
            currentExercise?.expertAdvice ||
            "Check fluency and pronunciation.",
        }),
      });

      if (response.ok) {
        const aiData = await response.json();

        if (aiData.isLiveAi) {
          const mergedPayload = {
            ...initialPayload,
            matchPercentage:
              aiData.matchPercentage ?? initialPayload.matchPercentage,
            tier: aiData.tier || initialPayload.tier,
            badgeColor:
              aiData.badgeColor || initialPayload.badgeColor,
            feedbackSummary:
              aiData.feedbackSummary ||
              initialPayload.feedbackSummary,
            matchedKeywords:
              aiData.matchedKeywords ||
              initialPayload.matchedKeywords,
            missingKeywords:
              aiData.missingKeywords ||
              initialPayload.missingKeywords,
            coachingAdviceForTeacher:
              aiData.coachingAdviceForTeacher,
            studentFacingScript:
              aiData.studentFacingScript,
            isLiveAi: true,
          };

          setLastComparisonResult(mergedPayload);

          setSubmissionHistory((prev: ComparisonResult[]) => [
            mergedPayload,
            ...prev.slice(0, 19),
          ]);

          setIsEvaluatingAi(false);
          return mergedPayload;
        }
      }
    } catch (err) {
      console.warn(
        "Live AI Evaluation fallback to offline benchmark:",
        err
      );
    }

    setSubmissionHistory((prev: ComparisonResult[]) => [
      initialPayload,
      ...prev.slice(0, 19),
    ]);

    setIsEvaluatingAi(false);

    return initialPayload;
  };

  const clearFeedback = () => {
    setTeacherFeedbackText("");
    setCheckedErrorIds([]);
    setLastComparisonResult(null);
    setIsEvaluatingAi(false);
    setStudentAudioUrl(null);
    setStudentTranscriptText("");
  };

  const calibrationScores = calibrationHistory
    .map((result) => Number(result.matchPercentage))
    .filter((score) => Number.isFinite(score));

  const calibrationProgress: CalibrationProgress = {
    completed: calibrationHistory.length,
    averageScore: calibrationScores.length
      ? Math.round(
          calibrationScores.reduce(
            (total, score) => total + score,
            0
          ) / calibrationScores.length
        )
      : 0,
    bestScore: calibrationScores.length
      ? Math.max(...calibrationScores)
      : 0,
    lowestScore: calibrationScores.length
      ? Math.min(...calibrationScores)
      : 0,
    currentTier: calibrationHistory[0]?.tier || "Not started",
  };

  const contextValue: FeedbackContextValue = {
    QUESTIONS_DATA,
    selectedQuestionId,
    currentQuestion,
    exerciseIndex,
    setExerciseIndex,
    nextExercise,
    prevExercise,
    randomCalibrationExercise,
    currentExercise,
    activeResponseMode,
    setActiveResponseMode,
    teacherFeedbackText,
    setTeacherFeedbackText,
    checkedErrorIds,
    toggleErrorCheckbox,
    lastComparisonResult,
    isEvaluatingAi,
    runComparison,
    runStudentRecordingComparison,
    sourceScreen,
    setSourceScreen,
    studentAudioUrl,
    setStudentAudioUrl,
    studentTranscriptText,
    setStudentTranscriptText,
    clearFeedback,
    selectQuestion,
    submissionHistory,
    calibrationHistory,
    calibrationProgress,
  };

  return (
    <FeedbackContext.Provider value={contextValue}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback(): FeedbackContextValue {
  const context = useContext(FeedbackContext);

  if (!context) {
    throw new Error("useFeedback must be used within a FeedbackProvider");
  }

  return context;
}