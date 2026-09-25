import { useState, useEffect, useRef } from "react";
import { useFeedback } from "../contexts/FeedbackContext";
import { COMMON_PTE_TOPICS, getExercise } from "../constants/exerciseBank";
import "./calibrationBench.css";
import {
  Target,
  Sparkles,
  RefreshCw,
  Volume2,
  Clock,
  AlertTriangle,
  ShieldCheck,
  HelpCircle,
  ChevronUp,
  Edit3,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Square,
} from "lucide-react";

export default function MarkingScreen({
  onNavigate,
}: {
  onNavigate: (tab: string) => void;
}) {
  const {
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
    runComparison,
    clearFeedback,
    selectQuestion,
    isEvaluatingAi,
  } = useFeedback();

  const [activeSectionFilter, setActiveSectionFilter] = useState("ALL");
  const [showGuide, setShowGuide] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);
  const [showResetConfirmation, setShowResetConfirmation] = useState(false);
  const [isQuestionMenuOpen, setIsQuestionMenuOpen] = useState(false);
  const [assessmentWarning, setAssessmentWarning] = useState<{
    title: string;
    message: string;
    tip?: string;
  } | null>(null);

  const pauseTimeoutRef = useRef<number | null>(null);
  const playbackTokenRef = useRef(0);
  const externalAudioRef = useRef<HTMLAudioElement | null>(null);

  const diagnosticChecklist = Array.isArray(currentExercise?.errorChecklist)
    ? currentExercise.errorChecklist
    : currentQuestion.errorChecklist || [];

  const calibrationDifficulty = (
    currentExercise as { difficulty?: string } | null
  )?.difficulty;

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      playbackTokenRef.current += 1;

      if (pauseTimeoutRef.current !== null) {
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }

      externalAudioRef.current?.pause();
      externalAudioRef.current = null;

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayAudio = (
    text: string,
    id: string,
    speechRate = 0.95
  ) => {
    if (!("speechSynthesis" in window)) return;

    if (isPlayingAudio && currentPlayingId === id) {
      playbackTokenRef.current += 1;

      if (pauseTimeoutRef.current !== null) {
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }

      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
      return;
    }

    playbackTokenRef.current += 1;
    const playbackToken = playbackTokenRef.current;

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }

    window.speechSynthesis.cancel();

    // Calibration notation is kept visible on screen, but certain symbols
    // also control how the sample is spoken.
    //
    // "/" marks an intentional unnatural pause.
    // "..." marks a hesitation/pause within a spoken segment.
    // "... ..." marks a longer deliberate pause.
    //
    // Slashes are handled as separate speech segments. Ellipses are converted
    // into separate segments so the browser cannot decide the pause duration
    // itself. This gives calibration samples more reliable pause timing.

    const cleanedText = (text || "")
      .replace(/^\[|\]$/g, "")
      .replace(/\[|\]/g, " ")
      .replace(/\*\*/g, "")
      .replace(/\_{1,2}/g, "")
      .replace(/\s+/g, " ")
      .trim();

    if (!cleanedText) return;

    const segments: { text: string; pauseAfter: number }[] = [];

    const addSegment = (segment: string, pauseAfter: number) => {
      const trimmed = segment.trim();

      if (trimmed) {
        segments.push({
          text: trimmed,
          pauseAfter,
        });
      }
    };

    // First split on "/" because the existing calibration behaviour uses
    // slashes as intentional pause markers.
    const slashParts = cleanedText.split(/\s*\/\s*/);

    slashParts.forEach((slashPart, slashIndex) => {
      // Within each slash segment, recognise ellipsis notation.
      //
      // "... ..." = longer pause
      // "..."     = normal hesitation/pause
      const ellipsisParts = slashPart.split(
        /(\.\.\.\s*\.\.\.)|(\.\.\.)/
      );

      let pendingText = "";

      ellipsisParts.forEach((part) => {
        if (!part) return;

        if (/^\.\.\.\s*\.\.\.$/.test(part)) {
          addSegment(pendingText, 1200);
          pendingText = "";
        } else if (/^\.\.\.$/.test(part)) {
          addSegment(pendingText, 100);
          pendingText = "";
        } else {
          pendingText += part;
        }
      });

      addSegment(
        pendingText,
        slashIndex < slashParts.length - 1 ? 100 : 0
      );
    });

    setIsPlayingAudio(true);
    setCurrentPlayingId(id);

    const finishPlayback = () => {
      if (playbackTokenRef.current !== playbackToken) return;

      if (pauseTimeoutRef.current !== null) {
        window.clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }

      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    };

    const speakSegment = (segmentIndex: number) => {
      if (playbackTokenRef.current !== playbackToken) return;

      if (segmentIndex >= segments.length) {
        finishPlayback();
        return;
      }

      const currentSegment = segments[segmentIndex];

      const utterance = new SpeechSynthesisUtterance(
        currentSegment.text
      );

      utterance.rate = speechRate;
      utterance.pitch = 0.95;

      utterance.onend = () => {
        if (playbackTokenRef.current !== playbackToken) return;

        const pauseDuration = currentSegment.pauseAfter;

        if (pauseDuration > 0) {
          pauseTimeoutRef.current = window.setTimeout(() => {
            pauseTimeoutRef.current = null;
            speakSegment(segmentIndex + 1);
          }, pauseDuration);
        } else {
          speakSegment(segmentIndex + 1);
        }
      };

      utterance.onerror = () => {
        if (playbackTokenRef.current !== playbackToken) return;
        finishPlayback();
      };

      window.speechSynthesis.speak(utterance);
    };

    speakSegment(0);
  };

  const handlePlayExternalAudio = (url: string, id: string) => {
    if (isPlayingAudio && currentPlayingId === id) {
      externalAudioRef.current?.pause();

      if (externalAudioRef.current) {
        externalAudioRef.current.currentTime = 0;
      }

      externalAudioRef.current = null;
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
      return;
    }

    playbackTokenRef.current += 1;

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    externalAudioRef.current?.pause();

    const audio = new Audio(url);
    externalAudioRef.current = audio;

    setIsPlayingAudio(true);
    setCurrentPlayingId(id);

    audio.onended = () => {
      if (externalAudioRef.current !== audio) return;

      externalAudioRef.current = null;
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    };

    audio.onerror = () => {
      if (externalAudioRef.current !== audio) return;

      externalAudioRef.current = null;
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    };

    void audio.play();
  };

  const handleStopAudio = () => {
    playbackTokenRef.current += 1;

    if (pauseTimeoutRef.current !== null) {
      window.clearTimeout(pauseTimeoutRef.current);
      pauseTimeoutRef.current = null;
    }

    externalAudioRef.current?.pause();
    externalAudioRef.current = null;

    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }

    setIsPlayingAudio(false);
    setCurrentPlayingId(null);
  };

  const handleSelectQuestion = (qId: string) => {
    const selectedQuestion = QUESTIONS_DATA.find((q) => q.id === qId);

    if (!selectedQuestion) {
      return;
    }

    const activeQuestionTypes = new Set([
      "read-aloud",
      "repeat-sentence",
    ]);

    if (!activeQuestionTypes.has(selectedQuestion.id)) {
      setAssessmentWarning({
        title: "Coming Soon",
        message:
          `${selectedQuestion.title} is planned for a future update. Read Aloud and Repeat Sentence are currently available in the Teacher Dashboard.`,
        tip:
          "Your current question selection has not been changed. You can continue working with Read Aloud or Repeat Sentence.",
      });
      return;
    }

    setAssessmentWarning(null);
    handleStopAudio();
    selectQuestion(selectedQuestion.id);
  };

  const handleQuestionMenuSelect = (qId: string) => {
    setIsQuestionMenuOpen(false);
    handleSelectQuestion(qId);
  };

  const handleSetExerciseIndex = (idx: number) => {
    handleStopAudio();
    setExerciseIndex(idx);
  };

  const handleNextExercise = () => {
    handleStopAudio();
    nextExercise();
  };
  const handlePrevExercise = () => {
    handleStopAudio();
    prevExercise();
  };

  const handleRandomCalibrationExercise = () => {
    handleStopAudio();
    randomCalibrationExercise();
  };

  const handleSetActiveResponseMode = (mode: "good" | "poor") => {
    handleStopAudio();
    setActiveResponseMode(mode);
  };

  // Keep the selected question and the section filter synchronized.
  // This prevents the question selector from displaying a question from one
  // section while currentQuestion belongs to another section.
  useEffect(() => {
    if (activeSectionFilter === "ALL") return;

    const sectionQuestions = QUESTIONS_DATA.filter(
      (q) => q.section.toUpperCase() === activeSectionFilter
    );

    const currentQuestionIsVisible = sectionQuestions.some(
      (q) => q.id === selectedQuestionId
    );

    if (!currentQuestionIsVisible && sectionQuestions.length > 0) {
      handleStopAudio();
      selectQuestion(sectionQuestions[0].id);
    }
  }, [activeSectionFilter, selectedQuestionId, QUESTIONS_DATA]);

  // Filter questions based on section tab
  const filteredQuestions = QUESTIONS_DATA.filter((q) => {
    if (activeSectionFilter === "ALL") return true;
    return q.section.toUpperCase() === activeSectionFilter;
  });

  const handleSubmitFeedback = async () => {
    const feedback = teacherFeedbackText.trim();
    const wordCount = feedback
      ? feedback.split(/\s+/).filter(Boolean).length
      : 0;

    // Calibration must include genuine teacher-written reasoning.
    // Checklist selections are diagnosis data only and are deliberately not
    // copied into the feedback field.
    if (!feedback) {
      setAssessmentWarning({
        title: "Please write your assessment",
        message:
          "Checklist selections alone are not enough for calibration. Your written assessment must explain what you heard and why it matters.",
        tip:
          "Don't just list the error names. Describe the evidence you heard and use the relevant PTE terminology.",
      });
      return;
    }

    if (feedback.length < 60 || wordCount < 10) {
      setAssessmentWarning({
        title: "Please provide a fuller assessment",
        message:
          "Write at least 10 words and 60 characters explaining the evidence you heard and why it matters.",
        tip:
          "A strong calibration response identifies the PTE term, gives specific evidence from the response, and explains the impact on performance.",
      });
      return;
    }

    handleStopAudio();

    const comparisonResult = await runComparison();

    if (comparisonResult) {
      onNavigate("comparison");
    } else {
      setAssessmentWarning({
        title: "Evaluation could not be completed",
        message:
          "The AI evaluation was not completed successfully. Please check your connection and try again.",
        tip:
          "Your written assessment has not been lost.",
      });
    }
  };

  // The current ExerciseBank contains prompt text for Summarize Group
  // Discussion, but it does not contain a separate multi-speaker recording.
  // This creates a clearly-labelled classroom TTS simulation from the
  // selected exercise benchmark text rather than pretending it is a Pearson
  // recording.
  const getGroupDiscussionSimulation = () => {
    const topic = currentExercise?.topicTitle || "the topic";
    const lowerTopic = topic.toLowerCase();

    const sourceSummary =
      currentExercise?.good?.transcript ||
      `The group discussed ${lowerTopic} and considered several different viewpoints.`;

    const sentences = sourceSummary
      .split(/(?<=[.!?])\s+/)
      .map((sentence) => sentence.trim())
      .filter(Boolean);

    if (sentences.length >= 3) {
      return [
        `Speaker 1: ${sentences[0]}`,
        `Speaker 2: ${sentences[1]}`,
        `Speaker 3: ${sentences[2]}`,
      ].join(" ");
    }

    if (sentences.length === 2) {
      return [
        `Speaker 1: ${sentences[0]}`,
        `Speaker 2: I agree, but I think there is another side to ${lowerTopic}.`,
        `Speaker 3: ${sentences[1]}`,
      ].join(" ");
    }

    return [
      `Speaker 1: I think ${lowerTopic} has several important benefits.`,
      `Speaker 2: I agree, although there may also be some disadvantages.`,
      `Speaker 3: Perhaps the best approach is to consider both sides before reaching a conclusion.`,
    ].join(" ");
  };

  const currentSample =
    activeResponseMode === "good"
      ? currentExercise.good
      : currentExercise.poor;

  const isReadAloudCalibration =
    currentQuestion.id === "read-aloud" ||
    currentQuestion.title === "Read Aloud";

  const calibrationExerciseMetadata = currentExercise as {
    diagnosticArea?: string;
    promptAudioUrl?: string;
    studentResponseAudioUrl?: string;
    cefrLevel?: { level?: string };
  } | null;

  const isRepeatSentenceCalibration =
    currentQuestion.id === "repeat-sentence" &&
    Boolean(calibrationExerciseMetadata?.diagnosticArea);

  const isCalibrationExercise =
    isReadAloudCalibration || isRepeatSentenceCalibration;

  return (
    <>
      <div className="calibration-bench p-4 space-y-4 pb-24">

        {/* Header Bar */}
        <div className="calibration-header flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="calibration-kicker flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
              <Target className="w-4 h-4" /> Marking Simulator
            </div>

            <h1 className="calibration-main-title text-lg font-black text-slate-900 dark:text-white">
              Evaluate Student Response
            </h1>
          </div>

          <div className="calibration-header-actions flex items-center gap-1.5">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="calibration-tool-button px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center gap-1 border border-indigo-200 dark:border-indigo-800 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Instructions
            </button>

            <button
              onClick={() => {
                handleStopAudio();
                clearFeedback();
                setShowResetConfirmation(true);

                setTimeout(() => {
                  setShowResetConfirmation(false);
                }, 1500);
              }}
              className="calibration-tool-button calibration-reset-button px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 border border-slate-200 dark:border-slate-800 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              {showResetConfirmation ? "Reset Complete" : "Reset"}
            </button>
          </div>
        </div>

        {/* Teacher Instruction Guide Box */}
        {showGuide && (
          <div className="calibration-guide p-4 rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white space-y-3 border border-indigo-800 shadow-sm relative overflow-hidden">
            <div className="calibration-guide-header flex items-center justify-between border-b border-indigo-800/80 pb-2">
              <div className="calibration-guide-title flex items-center gap-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                How to Use This Marking Simulator
              </div>

              <button
                onClick={() => setShowGuide(false)}
                className="calibration-hide-guide-button text-xs flex items-center gap-0.5 cursor-pointer"
              >
                Hide Guide
                <ChevronUp className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11.5px] leading-relaxed text-indigo-100">

              <div className="calibration-guide-step p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  1️⃣ Select Task & Sample
                </span>

                <p className="text-slate-300">
                  Pick a PTE question type below and toggle between{" "}
                  <b>Weak Sample</b> and <b>High Score Sample</b> responses.
                  Use the audio controls to hear prompt and sample playback.
                  Summarize Group Discussion also provides a clearly labelled
                  multi-speaker TTS simulation because the current exercise
                  bank does not contain a separate original group recording.
                </p>
              </div>

              <div className="calibration-guide-step p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  2️⃣ Check Observed Errors
                </span>

                <p className="text-slate-300">
                  Listen to the student response before reviewing the diagnostic
                  focus. The response transcript and analysis are hidden during
                  calibration exercises so your diagnosis is based on what you
                  actually hear.
                </p>
              </div>

              <div className="calibration-guide-step p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  3️⃣ Write Your Assessment
                </span>

                <p className="text-slate-300">
                  State the relevant PTE term(s), describe the evidence you heard,
                  explain the impact on performance, and give appropriate advice
                  where useful. The AI will assess the quality of your written
                  rationale independently of the diagnostic prompts.
                </p>
              </div>

              <div className="calibration-guide-step p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
                <span className="font-bold text-amber-300 flex items-center gap-1">
                  4️⃣ Live AI Evaluation
                </span>

                <p className="text-slate-300">
                  Click <b>Compare Feedback with AI Expert</b> to get instant
                  Gemini Principal Examiner scoring alignment %, feedback gap
                  analysis, and student-facing scripts.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Section Filter Pills */}
        <div className="calibration-filter-bar flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {["ALL", "SPEAKING", "WRITING", "READING", "LISTENING"].map(
            (sec) => (
              <button
                key={sec}
                onClick={() => setActiveSectionFilter(sec)}
                className={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeSectionFilter === sec
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "bg-slate-200/70 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-300"
                }`}
              >
                {sec}
              </button>
            )
          )}
        </div>
        {/* Question Selector Dropdown */}
        <div className="calibration-question-selector space-y-1 w-full max-w-full">
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Select Question Type ({filteredQuestions.length})
          </label>

          <div className="relative">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isQuestionMenuOpen}
              onClick={() =>
                setIsQuestionMenuOpen((open) => !open)
              }
              className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-300 bg-white p-2.5 text-left text-xs font-bold text-slate-900 shadow-xs transition-colors hover:border-indigo-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              <span className="min-w-0 truncate">
                [{currentQuestion.section}] {currentQuestion.title}
              </span>

              <ChevronUp
                className={`h-4 w-4 shrink-0 transition-transform ${
                  isQuestionMenuOpen
                    ? "rotate-0"
                    : "rotate-180"
                }`}
              />
            </button>

            {isQuestionMenuOpen && (
              <div
                role="listbox"
                aria-label="Select Question Type"
                className="absolute left-0 right-0 top-full z-[10000] mt-1 max-h-72 overflow-y-auto rounded-xl border border-slate-200 bg-white p-1 shadow-2xl dark:border-slate-700 dark:bg-slate-900"
              >
                {filteredQuestions.map((q) => {
                  const isActiveQuestion =
                    q.id === selectedQuestionId;

                  const isAvailableQuestion =
                    q.id === "read-aloud" ||
                    q.id === "repeat-sentence";

                  return (
                    <button
                      key={q.id}
                      type="button"
                      role="option"
                      aria-selected={isActiveQuestion}
                      onClick={() =>
                        handleQuestionMenuSelect(q.id)
                      }
                      className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors ${
                        isActiveQuestion
                          ? "bg-indigo-50 font-extrabold text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300"
                          : "font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span className="min-w-0 truncate">
                        [{q.section}] {q.title}
                      </span>

                      {!isAvailableQuestion && (
                        <span className="shrink-0 rounded-full bg-amber-100 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                          Coming Soon
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Selected Question Details Banner */}
        <div className="calibration-task-details p-3.5 rounded-xl bg-slate-900 text-white space-y-2 border border-slate-800">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-500 text-white">
              {currentQuestion.section}
            </span>

            <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              {currentQuestion.timeLimit}
            </span>
          </div>

          <h2 className="text-sm font-black text-white">
            {currentQuestion.title}
          </h2>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {currentQuestion.scoringCriteria.map((c, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700"
              >
                {c.name}: {c.max} pts
              </span>
            ))}
          </div>
        </div>

        {/* Sample Response & Exercise Bank Section */}
        <div className="calibration-workspace p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">

          {/* Toggle between Good and Poor Response Header */}
          <div className="calibration-sample-toggle flex flex-wrap items-center gap-2">
            <div className="flex items-center shrink-0 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">

              <button
                onClick={() =>
                  handleSetActiveResponseMode("poor")
                }
                className={`calibration-sample-button calibration-weak-button px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  activeResponseMode === "poor"
                    ? "bg-rose-500 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
                }`}
              >
                <AlertTriangle className="w-3 h-3" />
                Weak Sample
              </button>

              <button
                onClick={() =>
                  handleSetActiveResponseMode("good")
                }
                className={`calibration-sample-button calibration-good-button px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  activeResponseMode === "good"
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
                }`}
              >
                <ShieldCheck className="w-3 h-3" />
                High Score Sample
              </button>

              <button
                type="button"
                onClick={handleRandomCalibrationExercise}
                className="calibration-random-button ml-0.5 flex h-[37px] shrink-0 items-center justify-center gap-1.5 rounded-lg border border-indigo-500 bg-indigo-600 px-3 py-1 text-[10px] font-extrabold text-white shadow-sm transition-all cursor-pointer hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                title="Choose a random authored Calibration Lab exercise"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                <span>Random</span>
              </button>

            </div>
          </div>

          {/* Clean Topic Header & 1/100 CEFR Level Selector */}
          <div className="calibration-exercise-header p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 space-y-2 max-w-full overflow-hidden">

            {/* Top Row: Navigation Label, CEFR Badge & 1/100 Dropdown Selector */}
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] items-center gap-2 max-w-full overflow-hidden">

              <div className="flex items-center gap-2 min-w-0">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 shrink-0">
                  PTE Exam Topic
                </span>

                {(currentExercise as typeof currentExercise & {
                  difficulty?: string;
                })?.difficulty && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-extrabold shadow-xs shrink-0 bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Calibration:{" "}
                    {
                      (
                        currentExercise as typeof currentExercise & {
                          difficulty?: string;
                        }
                      ).difficulty
                    }
                  </span>
                )}
              </div>

              {/* Prev / Next & 1/100 Dropdown */}
              <div className="flex items-center gap-1.5 min-w-0 max-w-full ml-auto">

                <button
                  disabled={exerciseIndex <= 1}
                  onClick={handlePrevExercise}
                  className="calibration-nav-button p-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                  title="Previous Exercise"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <select
                  value={exerciseIndex}
                  onChange={(e) =>
                    handleSetExerciseIndex(
                      Number(e.target.value)
                    )
                  }
                  className="px-2 py-1 text-[11px] font-extrabold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 focus:outline-hidden cursor-pointer min-w-0 max-w-[140px] xs:max-w-[190px] sm:max-w-[250px] truncate"
                >
                  <optgroup label="A1 Level (Beginner • Q 1 - 20)">
                    {Array.from(
                      { length: 20 },
                      (_, i) => i + 1
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [A1] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [A1] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="A2 Level (Elementary • Q 21 - 40)">
                    {Array.from(
                      { length: 20 },
                      (_, i) => i + 21
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [A2] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [A2] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="B1 Level (Intermediate • Q 41 - 60)">
                    {Array.from(
                      { length: 20 },
                      (_, i) => i + 41
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [B1] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [B1] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="B2 Level (Upper Int • Q 61 - 80)">
                    {Array.from(
                      { length: 20 },
                      (_, i) => i + 61
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [B2] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [B2] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="C1 Level (Advanced • Q 81 - 90)">
                    {Array.from(
                      { length: 10 },
                      (_, i) => i + 81
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [C1] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [C1] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="C2 Level (Mastery • Q 91 - 100)">
                    {Array.from(
                      { length: 10 },
                      (_, i) => i + 91
                    ).map((num) => (
                      <option key={num} value={num}>
                        {isRepeatSentenceCalibration
                          ? `${num}/100 [C2] - ${
                              getExercise(
                                currentQuestion,
                                num
                              ).topicTitle
                            }`
                          : `${num}/100 [C2] - ${
                              COMMON_PTE_TOPICS[
                                num - 1
                              ]
                            }`}
                      </option>
                    ))}
                  </optgroup>
                </select>

                <button
                  disabled={exerciseIndex >= 100}
                  onClick={handleNextExercise}
                  className="calibration-nav-button p-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                  title="Next Exercise"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

              </div>
            </div>

            {/* Topic Title + Calibration Difficulty */}
            <div className="pt-1.5 border-t border-indigo-100/80 dark:border-indigo-900/50">
              <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug break-words">
                {currentExercise.topicTitle}
              </h3>

              {calibrationDifficulty && (
                <div className="mt-1.5">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-extrabold shadow-xs bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Calibration: {calibrationDifficulty}
                  </span>
                </div>
              )}
            </div>

          </div>
          {/* Task Prompt Context Box */}
          {currentExercise.promptText && (
            <div className="calibration-prompt-card p-3 rounded-xl bg-slate-900 text-indigo-100 text-xs border border-slate-800 space-y-1.5">

              <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex-wrap gap-2">

                <span>
                  Task Prompt ({currentQuestion.title})
                </span>

                <div className="flex items-center gap-2 flex-wrap justify-end">

                  <button
                    onClick={() => {
                      const promptAudioUrl = (
                        currentExercise as {
                          promptAudioUrl?: string;
                        }
                      ).promptAudioUrl;

                      if (
                        (isReadAloudCalibration ||
                          isRepeatSentenceCalibration) &&
                        promptAudioUrl
                      ) {
                        handlePlayExternalAudio(
                          promptAudioUrl,
                          `prompt-${selectedQuestionId}-${exerciseIndex}`
                        );
                        return;
                      }

                      const textToPlay =
                        currentExercise.promptAudio ||
                        currentExercise.promptText;

                      if (textToPlay) {
                        handlePlayAudio(
                          textToPlay,
                          `prompt-${selectedQuestionId}-${exerciseIndex}`
                        );
                      }
                    }}
                    className={`calibration-audio-button px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                      isPlayingAudio &&
                      currentPlayingId ===
                        `prompt-${selectedQuestionId}-${exerciseIndex}`
                        ? "bg-rose-600 text-white animate-pulse"
                        : "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
                    }`}
                  >
                    {isPlayingAudio &&
                    currentPlayingId ===
                      `prompt-${selectedQuestionId}-${exerciseIndex}` ? (
                      <>
                        <Square className="w-3 h-3 fill-current" />
                        Stop Prompt Audio
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                        Listen Task Prompt
                      </>
                    )}
                  </button>

                  {currentQuestion.id === "summarize-group-discussion" && (
                    <button
                      onClick={() => {
                        handlePlayAudio(
                          getGroupDiscussionSimulation(),
                          `group-discussion-${selectedQuestionId}-${exerciseIndex}`
                        );
                      }}
                      className={`calibration-audio-button calibration-discussion-button px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                        isPlayingAudio &&
                        currentPlayingId ===
                          `group-discussion-${selectedQuestionId}-${exerciseIndex}`
                          ? "bg-rose-600 text-white animate-pulse"
                          : "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-500"
                      }`}
                      title="Synthetic classroom TTS simulation based on the current exercise benchmark text"
                    >
                      {isPlayingAudio &&
                      currentPlayingId ===
                        `group-discussion-${selectedQuestionId}-${exerciseIndex}` ? (
                        <>
                          <Square className="w-3 h-3 fill-current" />
                          Stop Discussion
                        </>
                      ) : (
                        <>
                          <Volume2 className="w-3.5 h-3.5" />
                          Listen Group Discussion (TTS)
                        </>
                      )}
                    </button>
                  )}

                  <span className="text-indigo-300 font-semibold">
                    {exerciseIndex}/100
                  </span>

                </div>
              </div>

              <p className="leading-relaxed font-sans font-medium text-slate-200">
                {currentExercise.promptText}
              </p>

              {currentQuestion.id === "summarize-group-discussion" && (
                <p className="text-[10px] leading-relaxed text-indigo-300 border-t border-slate-800 pt-1.5">
                  <b>Audio note:</b> the current exercise bank supplies the
                  task description rather than a separate original
                  multi-speaker recording. Use{" "}
                  <b>Listen Group Discussion (TTS)</b> for a classroom
                  listening simulation based on the selected benchmark text.
                </p>
              )}

            </div>
          )}

          {/* Sample Response Box - Identical layout & styling to Task Prompt Box */}
          <div className="calibration-response-card calibration-prompt-card p-3 rounded-xl bg-slate-900 text-indigo-100 text-xs border border-slate-800 space-y-1.5">

            <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 flex-wrap gap-2">

              <span>
                Student Response (
                {activeResponseMode === "good"
                  ? "High Score Sample"
                  : "Weak Sample"}
                )
              </span>

              <div className="flex items-center gap-2">

                <button
                  onClick={() => {
                    const sampleAudioUrl = (
                      currentExercise as {
                        studentResponseAudioUrl?: string;
                      }
                    ).studentResponseAudioUrl;

                    const sampleAudioId =
                      `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}`;

                    // Read Aloud and Repeat Sentence calibration exercises use
                    // the fixed Gemini-generated student-response recording.
                    // Other question types continue to use browser TTS.
                    if (isCalibrationExercise && sampleAudioUrl) {
                      handlePlayExternalAudio(
                        sampleAudioUrl,
                        sampleAudioId
                      );
                      return;
                    }

                    const sampleText =
                      currentSample.transcript ||
                      currentSample.text ||
                      (currentSample.answers
                        ? currentSample.answers.join(", ")
                        : "") ||
                      currentSample.sequence;

                    if (sampleText) {
                      const sampleSpeechRate =
                        typeof (
                          currentSample as {
                            speechRate?: unknown;
                          }
                        )?.speechRate === "number"
                          ? (
                              currentSample as {
                                speechRate: number;
                              }
                            ).speechRate
                          : 0.95;

                      handlePlayAudio(
                        sampleText,
                        sampleAudioId,
                        sampleSpeechRate
                      );
                    }
                  }}
                  className={`calibration-audio-button calibration-response-audio-button px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    isPlayingAudio &&
                    currentPlayingId ===
                      `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}`
                      ? "bg-rose-600 text-white animate-pulse"
                      : "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/40"
                  }`}
                  title={
                    isReadAloudCalibration
                      ? "Listen to the fixed Gemini calibration recording"
                      : "Listen to the selected benchmark response using browser TTS"
                  }
                >
                  {isPlayingAudio &&
                  currentPlayingId ===
                    `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}` ? (
                    <>
                      <Square className="w-3 h-3 fill-current" />
                      Stop Audio
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-white" />
                      Listen to student response
                    </>
                  )}
                </button>

              </div>
            </div>

            {!isCalibrationExercise && (
              <>
                <p className="leading-relaxed font-sans font-medium text-slate-200">
                  "
                  {currentSample.transcript ||
                    currentSample.text ||
                    (currentSample.answers
                      ? currentSample.answers.join(", ")
                      : "") ||
                    currentSample.sequence ||
                    "Sample response..."}
                  "
                </p>

                <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800 text-slate-400 flex-wrap gap-2">

                  {currentSample.audioDuration && (
                    <span className="font-semibold text-slate-400">
                      Duration: {currentSample.audioDuration}
                    </span>
                  )}

                  {currentSample.wordCount && (
                    <span className="font-semibold text-slate-400">
                      Word Count: {currentSample.wordCount} words
                    </span>
                  )}

                  <span className="italic text-[10px] text-slate-300">
                    Analysis: {currentSample.characteristics}
                  </span>

                </div>
              </>
            )}

            {isCalibrationExercise && (
              <div className="text-[11px] leading-relaxed text-indigo-300 pt-1.5 border-t border-slate-800">
                Listen carefully to the student response. The response transcript
                and analysis are hidden during Calibration Lab exercises so your
                diagnosis must be based on what you actually hear.
              </div>
            )}

          </div>
        </div>

        {/* Diagnostic Focus visual styling.
            The project CSS applies !important to .calibration-error-tracker,
            so this scoped rule intentionally uses !important to make the
            Diagnostic Focus panel styling reliable. */}
        <style>{`
          .calibration-bench .calibration-error-tracker.diagnostic-focus-panel {
            background: linear-gradient(145deg, #eef2ff 0%, #f5f7ff 52%, #fff7ed 100%) !important;
            border: 1px solid #cbddec !important;
            border-radius: 20px !important;
            box-shadow:
              0 8px 22px rgba(79, 70, 229, 0.08),
              0 2px 8px rgba(15, 23, 42, 0.05) !important;
          }

          .dark .calibration-bench .calibration-error-tracker.diagnostic-focus-panel {
            background: linear-gradient(145deg, rgba(49, 46, 129, 0.34) 0%, rgba(15, 23, 42, 0.96) 52%, rgba(120, 53, 15, 0.22) 100%) !important;
            border-color: #334155 !important;
          }

          .calibration-bench .diagnostic-focus-panel .diagnostic-focus-card {
            border-radius: 16px !important;
          }
        `}</style>

        {/* Diagnostic Focus Prompts */}
        <div
          className="diagnostic-focus-outer-frame"
          style={{
            background: "#ffffff",
            border: "1px solid #ffffff",
            borderRadius: "20px",
            padding: "18px",
            boxShadow:
              "0 8px 22px rgba(79, 70, 229, 0.08), 0 2px 8px rgba(15, 23, 42, 0.05)",
          }}
        >
          <div className="calibration-error-tracker diagnostic-focus-panel p-4 rounded-xl space-y-3">

            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
                  <Target className="w-4 h-4 text-indigo-500" />
                  Diagnostic Focus — What to Listen For
                </div>

                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Use these diagnostic prompts as clues while listening. They
                  are not checkboxes and they do not add anything to your
                  assessment. Only discuss a feature when you can support it
                  with evidence from the student response.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
              {diagnosticChecklist.map((item: any) => (
                <div
                  key={item.id}
                  className="diagnostic-focus-card p-3 rounded-2xl min-h-[145px] border border-indigo-100 dark:border-indigo-900/60 text-slate-800 dark:text-slate-200 shadow-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #eef2ff 0%, #ffffff 52%, #fff7ed 100%)",
                  }}
                >
                  <div className="flex flex-col items-start gap-2">
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "10px",
                        background:
                          "linear-gradient(135deg, #eef2ff 0%, #e0e7ff 100%)",
                        color: "#4f46e5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid #c7d2fe",
                        boxShadow:
                          "0 2px 6px rgba(79, 70, 229, 0.10)",
                      }}
                    >
                      <Target
                        style={{
                          width: "16px",
                          height: "16px",
                        }}
                      />
                    </div>

                    <div className="min-w-0 w-full">
                      <div className="flex items-center gap-2 flex-wrap">
                        <div className="text-[12px] font-extrabold leading-tight text-slate-800 dark:text-slate-100">
                          {item.label}
                        </div>

                        <span
                          style={{
                            fontSize: "9px",
                            fontWeight: 800,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            padding: "3px 7px",
                            borderRadius: "999px",
                            background: "#fef3c7",
                            color: "#92400e",
                            border: "1px solid #fde68a",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Listen
                        </span>
                      </div>

                      <div className="mt-1 text-[10px] leading-relaxed text-slate-500 dark:text-slate-400">
                        Listen for clear evidence of this feature before mentioning it in your assessment.
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Teacher Assessment */}
        <div className="calibration-assessment-panel p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
            <Edit3 className="w-4 h-4 text-indigo-500" />
            Your Assessment
          </div>

          <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            Write your own diagnostic assessment before comparing it with the
            AI expert. Use specific evidence from the audio and explain why
            the issue matters.
          </p>

          <textarea
            value={teacherFeedbackText}
            onChange={(e) => setTeacherFeedbackText(e.target.value)}
            placeholder="Example: The main issue is Oral Fluency because the student repeats a word and briefly interrupts the flow. Content and Pronunciation remain otherwise clear."
            className="w-full min-h-[130px] resize-y rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2.5 text-xs leading-relaxed text-slate-900 dark:text-slate-100 outline-hidden focus:ring-2 focus:ring-indigo-500"
          />

          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-[10px] text-slate-400">
              {teacherFeedbackText
                .trim()
                .split(/\s+/)
                .filter(Boolean).length}{" "}
              words
            </span>

            <button
              onClick={handleSubmitFeedback}
              disabled={isEvaluatingAi}
              className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-[11px] font-extrabold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {isEvaluatingAi ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  Comparing...
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  Compare Feedback with AI Expert
                </>
              )}
            </button>
          </div>

        </div>

        {assessmentWarning && (
          <div
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-[2px]"
            role="presentation"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setAssessmentWarning(null);
              }
            }}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-labelledby="assessment-warning-title"
              className="w-full max-w-md rounded-2xl border border-amber-300 bg-amber-50 p-5 shadow-2xl dark:border-amber-700 dark:bg-slate-900"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>

                <div className="min-w-0 flex-1">
                  <div
                    id="assessment-warning-title"
                    className="text-sm font-extrabold text-amber-950 dark:text-amber-200"
                  >
                    {assessmentWarning.title}
                  </div>

                  <div className="mt-1.5 text-xs leading-relaxed text-amber-900 dark:text-slate-200">
                    {assessmentWarning.message}
                  </div>

                  {assessmentWarning.tip && (
                    <div className="mt-2 rounded-lg border border-amber-200 bg-white/70 px-3 py-2 text-[11px] leading-relaxed text-amber-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {assessmentWarning.tip}
                    </div>
                  )}

                  <button
                    type="button"
                    autoFocus
                    onClick={() => setAssessmentWarning(null)}
                    className="mt-4 rounded-lg bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
