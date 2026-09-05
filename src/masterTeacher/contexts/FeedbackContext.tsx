import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";
import { QUESTIONS_DATA } from "../constants/questionsData";
import { compareTeacherFeedback } from "../utils/compareText";
import { getExercise } from "../constants/exerciseBank";

type Question = (typeof QUESTIONS_DATA)[number];
type Exercise = ReturnType<typeof getExercise>;

interface ErrorChecklistItem {
  id: string;
  keyword?: string;
  [key: string]: unknown;
}

type ComparisonResult = Record<string, any>;

interface FeedbackContextValue {
  QUESTIONS_DATA: typeof QUESTIONS_DATA;
  selectedQuestionId: string;
  currentQuestion: Question;
  exerciseIndex: number;
  setExerciseIndex: (index: number) => void;
  nextExercise: () => void;
  prevExercise: () => void;
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
  runStudentRecordingComparison: (customTranscript?: string) => Promise<ComparisonResult | null>;
  sourceScreen: "marking" | "students";
  setSourceScreen: Dispatch<SetStateAction<"marking" | "students">>;
  studentAudioUrl: string | null;
  setStudentAudioUrl: Dispatch<SetStateAction<string | null>>;
  studentTranscriptText: string;
  setStudentTranscriptText: Dispatch<SetStateAction<string>>;
  clearFeedback: () => void;
  selectQuestion: (questionId: string) => void;
  submissionHistory: ComparisonResult[];
}

const FeedbackContext = createContext<FeedbackContextValue | null>(null);

export function FeedbackProvider({ children }: { children: ReactNode }) {
  const [selectedQuestionId, setSelectedQuestionId] = useState("read-aloud");
  const [exerciseIndex, setExerciseIndexState] = useState(1); // 1 to 100
  const [activeResponseMode, setActiveResponseMode] = useState<"poor" | "good">("poor"); // "poor" or "good"
  const [teacherFeedbackText, setTeacherFeedbackText] = useState("");
  const [checkedErrorIds, setCheckedErrorIds] = useState<string[]>([]);
  const [lastComparisonResult, setLastComparisonResult] = useState<ComparisonResult | null>(null);
  const [isEvaluatingAi, setIsEvaluatingAi] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<ComparisonResult[]>([]);
  const [sourceScreen, setSourceScreen] = useState<"marking" | "students">("marking");
  const [studentAudioUrl, setStudentAudioUrl] = useState<string | null>(null);
  const [studentTranscriptText, setStudentTranscriptText] = useState<string>("");

  // Get selected question object
  const currentQuestion = QUESTIONS_DATA.find(q => q.id === selectedQuestionId) || QUESTIONS_DATA[0]!;

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

  // Toggle Error Tracker Checkbox
  const toggleErrorCheckbox = (errorId: string, keyword?: string) => {
    setCheckedErrorIds((prev: string[]) => {
      const exists = prev.includes(errorId);
      const updated = exists ? prev.filter(id => id !== errorId) : [...prev, errorId];
      if (!exists && keyword) {
        setTeacherFeedbackText((currentText: string) => {
          const trimmed = currentText.trim();
          if (trimmed.toLowerCase().includes(keyword.toLowerCase())) return currentText;
          return trimmed ? `${trimmed}\n- Identified: ${keyword}` : `- Identified: ${keyword}`;
        });
      } else if (exists && keyword) {
        setTeacherFeedbackText((currentText: string) => {
          const targetStr = `- Identified: ${keyword}`;
          if (currentText.includes(targetStr)) {
            return currentText.replace(targetStr, "").replace(/\n\n+/g, "\n").trim();
          }
          return currentText;
        });
      }
      return updated;
    });
  };

  // Run the Combined Offline Rubric Benchmark + Live AI Evaluation
  const runComparison = async (): Promise<ComparisonResult | null> => {
    if (!currentQuestion || !currentExercise) return null;
    setSourceScreen("marking");

    const targetExpertScore = activeResponseMode === "good" ? currentExercise.goodScore : currentExercise.poorScore;
    const expertText = `${targetExpertScore.overall || 'Score N/A'}. ${targetExpertScore.breakdownText || ''} Expert Advice: ${currentExercise.expertAdvice || ''}`;
    const perfectCalibrationResponse = (currentExercise as typeof currentExercise & { perfectCalibrationResponse?: string }).perfectCalibrationResponse;

    const checklistItems: ErrorChecklistItem[] = currentExercise.errorChecklist || [];
    const activeChecklist = checklistItems.filter(item => checkedErrorIds.includes(item.id));

    // 1. Initial Instant Offline Rule-Based Comparison
    const offlineResult = compareTeacherFeedback(teacherFeedbackText, expertText, activeChecklist);

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
      timestamp: new Date().toISOString()
    };

    setLastComparisonResult(initialPayload);
    setIsEvaluatingAi(true);

    // 2. Trigger Live Server-Side Gemini AI Evaluation
    try {
      const currentSample: any = activeResponseMode === "good" ? currentExercise.good : currentExercise.poor;
      const studentResponseText = currentSample?.transcript || currentSample?.text || (currentSample?.answers ? currentSample.answers.join(", ") : "");

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
          expertAdvice: currentExercise.expertAdvice
        })
      });

      if (response.ok) {
        const aiData = await response.json();
        if (aiData.isLiveAi) {
          const mergedPayload = {
            ...initialPayload,
            matchPercentage: aiData.matchPercentage ?? initialPayload.matchPercentage,
            tier: aiData.tier || initialPayload.tier,
            badgeColor: aiData.badgeColor || initialPayload.badgeColor,
            feedbackSummary: aiData.feedbackSummary || initialPayload.feedbackSummary,
            matchedKeywords: aiData.matchedKeywords || initialPayload.matchedKeywords,
            missingKeywords: aiData.missingKeywords || initialPayload.missingKeywords,
            coachingAdviceForTeacher: aiData.coachingAdviceForTeacher,
            studentFacingScript: aiData.studentFacingScript,
            isLiveAi: true
          };

          setLastComparisonResult(mergedPayload);
          setSubmissionHistory((prev: ComparisonResult[]) => [mergedPayload, ...prev.slice(0, 19)]);
          setIsEvaluatingAi(false);
          return mergedPayload;
        }
      }
    } catch (err) {
      console.warn("Live AI Evaluation fallback to offline benchmark:", err);
    }

    setSubmissionHistory((prev: ComparisonResult[]) => [initialPayload, ...prev.slice(0, 19)]);
    setIsEvaluatingAi(false);
    return initialPayload;
  };

  // Run Student Live Recording Analysis Comparison
  const runStudentRecordingComparison = async (customTranscript?: string): Promise<ComparisonResult | null> => {
    if (!currentQuestion) return null;
    setSourceScreen("students");

    const activeStudentText = customTranscript || studentTranscriptText || "Live recorded student response audio.";
    const targetExpertScore = currentExercise?.goodScore || {
      overall: "PTE 65-79 Expected Benchmark",
      breakdownText: `Expected ${currentQuestion.section} standard for ${currentQuestion.title}.`
    };
    const expertText = `${targetExpertScore.overall || 'Score N/A'}. ${targetExpertScore.breakdownText || ''} Expert Advice: ${currentExercise?.expertAdvice || ''}`;

    const checklistItems: ErrorChecklistItem[] = currentQuestion.errorChecklist || [];
    const activeChecklist = checklistItems.filter(item => checkedErrorIds.includes(item.id));

    const offlineResult = compareTeacherFeedback(teacherFeedbackText, expertText, activeChecklist);

    const initialPayload = {
      ...offlineResult,
      questionId: currentQuestion.id,
      questionTitle: currentQuestion.title,
      exerciseIndex: currentExercise?.exerciseIndex || 1,
      topicTitle: currentExercise?.topicTitle || currentQuestion.title,
      section: currentQuestion.section,
      responseMode: "Student Recording Analysis",
      isStudentRecording: true,
      studentTranscriptText: activeStudentText,
      studentAudioUrl,
      teacherInput: teacherFeedbackText,
      expertFeedbackText: targetExpertScore.breakdownText,
      expertAdvice: currentExercise?.expertAdvice || "Guide the candidate on oral fluency, content coverage, and accuracy.",
      expertOverallScore: targetExpertScore.overall,
      checkedErrorIds,
      isLiveAi: false,
      timestamp: new Date().toISOString()
    };

    setLastComparisonResult(initialPayload);
    setIsEvaluatingAi(true);

    try {
      const response = await fetch("/api/evaluate-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionTitle: `${currentQuestion.title} (${currentExercise?.topicTitle || 'Student Recording'})`,
          section: currentQuestion.section,
          timeLimit: currentQuestion.timeLimit,
          scoringCriteria: currentQuestion.scoringCriteria,
          promptText: currentExercise?.promptText || currentQuestion.title,
          studentResponseText: activeStudentText,
          responseMode: "My Student Recording Analysis",
          teacherInput: teacherFeedbackText,
          checkedErrorIds,
          errorChecklist: activeChecklist,
          expertFeedbackObj: targetExpertScore,
          expertAdvice: currentExercise?.expertAdvice || "Check fluency and pronunciation."
        })
      });

      if (response.ok) {
        const aiData = await response.json();
        if (aiData.isLiveAi) {
          const mergedPayload = {
            ...initialPayload,
            matchPercentage: aiData.matchPercentage ?? initialPayload.matchPercentage,
            tier: aiData.tier || initialPayload.tier,
            badgeColor: aiData.badgeColor || initialPayload.badgeColor,
            feedbackSummary: aiData.feedbackSummary || initialPayload.feedbackSummary,
            matchedKeywords: aiData.matchedKeywords || initialPayload.matchedKeywords,
            missingKeywords: aiData.missingKeywords || initialPayload.missingKeywords,
            coachingAdviceForTeacher: aiData.coachingAdviceForTeacher,
            studentFacingScript: aiData.studentFacingScript,
            isLiveAi: true
          };

          setLastComparisonResult(mergedPayload);
          setSubmissionHistory((prev: ComparisonResult[]) => [mergedPayload, ...prev.slice(0, 19)]);
          setIsEvaluatingAi(false);
          return mergedPayload;
        }
      }
    } catch (err) {
      console.warn("Live AI Evaluation fallback to offline benchmark:", err);
    }

    setSubmissionHistory((prev: ComparisonResult[]) => [initialPayload, ...prev.slice(0, 19)]);
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

  const contextValue: FeedbackContextValue = {
        QUESTIONS_DATA,
        selectedQuestionId,
        currentQuestion,
        exerciseIndex,
        setExerciseIndex,
        nextExercise,
        prevExercise,
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
        submissionHistory
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