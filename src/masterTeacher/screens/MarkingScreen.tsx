import React, { useState, useEffect } from "react";
import { useFeedback } from "../contexts/FeedbackContext";
import { SECTIONS } from "../constants/questionsData";
import { getCefrLevel, COMMON_PTE_TOPICS } from "../constants/exerciseBank";
import { Target, CheckSquare, Sparkles, Send, RefreshCw, Volume2, Clock, AlertTriangle, ShieldCheck, HelpCircle, ChevronDown, ChevronUp, Edit3, BookOpen, ChevronLeft, ChevronRight, Square } from "lucide-react";

export default function MarkingScreen({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const {
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
    runComparison,
    clearFeedback,
    selectQuestion
  } = useFeedback();

  const [activeSectionFilter, setActiveSectionFilter] = useState("ALL");
  const [showGuide, setShowGuide] = useState(true);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    return () => {
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayAudio = (text: string, id: string) => {
    if (!("speechSynthesis" in window)) return;

    if (isPlayingAudio && currentPlayingId === id) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
      return;
    }

    window.speechSynthesis.cancel();

    const textToSpeak = (text || "")
      .replace(/^\[|\]$/g, "")
      .replace(/[\[\]]/g, " ")
      .trim();

    if (!textToSpeak) return;

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 0.95;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setCurrentPlayingId(null);
    };

    setIsPlayingAudio(true);
    setCurrentPlayingId(id);
    window.speechSynthesis.speak(utterance);
  };

  const handleStopAudio = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setCurrentPlayingId(null);
  };

  const handleSelectQuestion = (qId: string) => {
    handleStopAudio();
    selectQuestion(qId);
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

  const handleSetActiveResponseMode = (mode: "good" | "poor") => {
    handleStopAudio();
    setActiveResponseMode(mode);
  };

  // Keep the selected question and the section filter synchronized.
  // This prevents the browser <select> from displaying a question from one
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
  const filteredQuestions = QUESTIONS_DATA.filter(q => {
    if (activeSectionFilter === "ALL") return true;
    return q.section.toUpperCase() === activeSectionFilter;
  });

  const handleSubmitFeedback = async () => {
    if (!teacherFeedbackText.trim()) {
      alert("Please enter your assessment feedback or check error checklist items first!");
      return;
    }

    handleStopAudio();

    const comparisonResult = await runComparison();

    if (comparisonResult) {
      onNavigate("comparison");
    } else {
      alert("The evaluation could not be completed. Please try again.");
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

  const currentSample = activeResponseMode === "good" ? currentExercise.good : currentExercise.poor;

  return (
    <div className="p-4 space-y-4 pb-24">
      {/* Header Bar */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400">
            <Target className="w-4 h-4" /> Marking Simulator
          </div>
          <h1 className="text-lg font-black text-slate-900 dark:text-white">Evaluate Student Response</h1>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 flex items-center gap-1 border border-indigo-200 dark:border-indigo-800 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Instructions
          </button>
          <button
            onClick={() => {
              handleStopAudio();
              clearFeedback();
            }}
            className="px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 flex items-center gap-1 border border-slate-200 dark:border-slate-800 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" /> Reset
          </button>
        </div>
      </div>

      {/* Teacher Instruction Guide Box */}
      {showGuide && (
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white space-y-3 border border-indigo-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-indigo-800/80 pb-2">
            <div className="flex items-center gap-1.5 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
              <BookOpen className="w-4 h-4" /> How to Use This Marking Simulator
            </div>
            <button
              onClick={() => setShowGuide(false)}
              className="text-xs text-indigo-300 hover:text-white flex items-center gap-0.5 cursor-pointer"
            >
              Hide Guide <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11.5px] leading-relaxed text-indigo-100">
            <div className="p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                1️⃣ Select Task & Sample
              </span>
              <p className="text-slate-300">
                Pick a PTE question type below and toggle between <b>Weak Sample</b> and <b>High Score Sample</b> responses. Use the audio controls to hear prompt and sample playback. Summarize Group Discussion also provides a clearly labelled multi-speaker TTS simulation because the current exercise bank does not contain a separate original group recording.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                2️⃣ Check Observed Errors
              </span>
              <p className="text-slate-300">
                Tick boxes in the <b>Error Tracker Checklist</b>. Checking a box automatically inserts technical PTE rubric notes into your feedback area.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                3️⃣ Write Personal Feedback
              </span>
              <p className="text-slate-300">
                In <b>Your Assessment Feedback</b>, add your own notes, score rationale, or personal coaching points alongside the auto-inserted checklist items.
              </p>
            </div>

            <div className="p-2.5 rounded-lg bg-indigo-950/70 border border-indigo-800/60 space-y-1">
              <span className="font-bold text-amber-300 flex items-center gap-1">
                4️⃣ Live AI Evaluation
              </span>
              <p className="text-slate-300">
                Click <b>Compare Feedback with AI Expert</b> to get instant Gemini Principal Examiner scoring alignment %, feedback gap analysis, and student-facing scripts.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {["ALL", "SPEAKING", "WRITING", "READING", "LISTENING"].map((sec) => (
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
        ))}
      </div>

      {/* Question Selector Dropdown / Scroll */}
      <div className="space-y-1 w-full max-w-full overflow-hidden">
        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Select Question Type ({filteredQuestions.length})
        </label>
        <select
          value={selectedQuestionId}
          onChange={(e) => handleSelectQuestion(e.target.value)}
          className="w-full max-w-full p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs font-bold text-slate-900 dark:text-slate-100 shadow-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden truncate cursor-pointer"
        >
          {filteredQuestions.map((q) => (
            <option key={q.id} value={q.id} className="truncate">
              [{q.section}] {q.title}
            </option>
          ))}
        </select>
      </div>

      {/* Selected Question Details Banner */}
      <div className="p-3.5 rounded-xl bg-slate-900 text-white space-y-2 border border-slate-800">
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-indigo-500 text-white">
            {currentQuestion.section}
          </span>
          <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
            <Clock className="w-3.5 h-3.5 text-indigo-400" /> {currentQuestion.timeLimit}
          </span>
        </div>

        <h2 className="text-sm font-black text-white">{currentQuestion.title}</h2>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {currentQuestion.scoringCriteria.map((c, i) => (
            <span key={i} className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-800 text-slate-300 border border-slate-700">
              {c.name}: {c.max} pts
            </span>
          ))}
        </div>
      </div>

      {/* Sample Response & Exercise Bank Section */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        {/* Toggle between Good and Poor Response Header */}
        <div className="flex items-center justify-end flex-wrap gap-2">
          <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => handleSetActiveResponseMode("poor")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                activeResponseMode === "poor"
                  ? "bg-rose-500 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
              }`}
            >
              <AlertTriangle className="w-3 h-3" /> Weak Sample
            </button>
            <button
              onClick={() => handleSetActiveResponseMode("good")}
              className={`px-2.5 py-1 rounded-md text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                activeResponseMode === "good"
                  ? "bg-emerald-600 text-white shadow-xs"
                  : "text-slate-500 hover:text-slate-800 dark:text-slate-400"
              }`}
            >
              <ShieldCheck className="w-3 h-3" /> High Score Sample
            </button>
          </div>
        </div>

        {/* Clean Topic Header & 1/100 CEFR Level Selector */}
        <div className="p-3 rounded-xl bg-indigo-50/80 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/60 space-y-2 max-w-full overflow-hidden">
          {/* Top Row: Navigation Label, CEFR Badge & 1/100 Dropdown Selector */}
          <div className="flex items-center justify-between gap-2 flex-wrap max-w-full overflow-hidden">
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 shrink-0">
                PTE Exam Topic
              </span>
              {currentExercise?.cefrLevel && (
                <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold shadow-xs shrink-0 ${currentExercise.cefrLevel.badgeColor}`}>
                  {currentExercise.cefrLevel.name}
                </span>
              )}
            </div>

            {/* Prev / Next & 1/100 Dropdown */}
            <div className="flex items-center gap-1.5 min-w-0 max-w-full ml-auto">
              <button
                disabled={exerciseIndex <= 1}
                onClick={handlePrevExercise}
                className="p-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                title="Previous Exercise"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <select
                value={exerciseIndex}
                onChange={(e) => handleSetExerciseIndex(Number(e.target.value))}
                className="px-2 py-1 text-[11px] font-extrabold rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 focus:outline-hidden cursor-pointer min-w-0 max-w-[140px] xs:max-w-[190px] sm:max-w-[250px] truncate"
              >
                <optgroup label="A1 Level (Beginner • Q 1 - 20)">
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [A1] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="A2 Level (Elementary • Q 21 - 40)">
                  {Array.from({ length: 20 }, (_, i) => i + 21).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [A2] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="B1 Level (Intermediate • Q 41 - 60)">
                  {Array.from({ length: 20 }, (_, i) => i + 41).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [B1] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="B2 Level (Upper Int • Q 61 - 80)">
                  {Array.from({ length: 20 }, (_, i) => i + 61).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [B2] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="C1 Level (Advanced • Q 81 - 90)">
                  {Array.from({ length: 10 }, (_, i) => i + 81).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [C1] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="C2 Level (Mastery • Q 91 - 100)">
                  {Array.from({ length: 10 }, (_, i) => i + 91).map((num) => (
                    <option key={num} value={num}>
                      {num}/100 [C2] - {COMMON_PTE_TOPICS[num - 1]}
                    </option>
                  ))}
                </optgroup>
              </select>

              <button
                disabled={exerciseIndex >= 100}
                onClick={handleNextExercise}
                className="p-1 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shrink-0"
                title="Next Exercise"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Full Topic Title placed on a separate line below the selector to prevent truncation */}
          <div className="pt-1.5 border-t border-indigo-100/80 dark:border-indigo-900/50">
            <h3 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white leading-snug break-words">
              {currentExercise.topicTitle}
            </h3>
          </div>
        </div>

        {/* Task Prompt Context Box */}
        {currentExercise.promptText && (
          <div className="p-3 rounded-xl bg-slate-900 text-indigo-100 text-xs border border-slate-800 space-y-1.5">
            <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-amber-400 flex-wrap gap-2">
              <span>Task Prompt ({currentQuestion.title})</span>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <button
                  onClick={() => {
                    const textToPlay = currentExercise.promptAudio || currentExercise.promptText;
                    if (textToPlay) {
                      handlePlayAudio(textToPlay, `prompt-${selectedQuestionId}-${exerciseIndex}`);
                    }
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                    isPlayingAudio && currentPlayingId === `prompt-${selectedQuestionId}-${exerciseIndex}`
                      ? "bg-rose-600 text-white animate-pulse"
                      : "bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30"
                  }`}
                >
                  {isPlayingAudio && currentPlayingId === `prompt-${selectedQuestionId}-${exerciseIndex}` ? (
                    <>
                      <Square className="w-3 h-3 fill-current" /> Stop Prompt Audio
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-amber-400" /> Listen Task Prompt
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
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                      isPlayingAudio && currentPlayingId === `group-discussion-${selectedQuestionId}-${exerciseIndex}`
                        ? "bg-rose-600 text-white animate-pulse"
                        : "bg-indigo-600 text-white border border-indigo-500 hover:bg-indigo-500"
                    }`}
                    title="Synthetic classroom TTS simulation based on the current exercise benchmark text"
                  >
                    {isPlayingAudio && currentPlayingId === `group-discussion-${selectedQuestionId}-${exerciseIndex}` ? (
                      <>
                        <Square className="w-3 h-3 fill-current" /> Stop Discussion
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3.5 h-3.5" /> Listen Group Discussion (TTS)
                      </>
                    )}
                  </button>
                )}

                <span className="text-indigo-300 font-semibold">{exerciseIndex}/100</span>
              </div>
            </div>
            <p className="leading-relaxed font-sans font-medium text-slate-200">{currentExercise.promptText}</p>

            {currentQuestion.id === "summarize-group-discussion" && (
              <p className="text-[10px] leading-relaxed text-indigo-300 border-t border-slate-800 pt-1.5">
                <b>Audio note:</b> the current exercise bank supplies the task description rather than a separate original
                multi-speaker recording. Use <b>Listen Group Discussion (TTS)</b> for a classroom listening simulation
                based on the selected benchmark text.
              </p>
            )}
          </div>
        )}

        {/* Sample Response Box - Identical layout & styling to Task Prompt Box */}
        <div className="p-3 rounded-xl bg-slate-900 text-indigo-100 text-xs border border-slate-800 space-y-1.5">
          <div className="flex items-center justify-between text-[10px] font-extrabold uppercase tracking-wider text-indigo-400 flex-wrap gap-2">
            <span>Student Response ({activeResponseMode === "good" ? "High Score Sample" : "Weak Sample"})</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const sampleText = currentSample.transcript || currentSample.text || (currentSample.answers ? currentSample.answers.join(", ") : "") || currentSample.sequence;
                  if (sampleText) {
                    handlePlayAudio(sampleText, `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}`);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer ${
                  isPlayingAudio && currentPlayingId === `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}`
                    ? "bg-rose-600 text-white animate-pulse"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/40"
                }`}
                title="Listen to the selected benchmark response using browser TTS"
              >
                {isPlayingAudio && currentPlayingId === `sample-${selectedQuestionId}-${exerciseIndex}-${activeResponseMode}` ? (
                  <>
                    <Square className="w-3 h-3 fill-current" /> Stop Audio
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-white" /> Listen to student response
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="leading-relaxed font-sans font-medium text-slate-200">
            "{currentSample.transcript || currentSample.text || (currentSample.answers ? currentSample.answers.join(", ") : "") || currentSample.sequence || "Sample response..."}"
          </p>

          <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-slate-800 text-slate-400 flex-wrap gap-2">
            {currentSample.audioDuration && (
              <span className="font-semibold text-slate-400">Duration: {currentSample.audioDuration}</span>
            )}
            {currentSample.wordCount && (
              <span className="font-semibold text-slate-400">Word Count: {currentSample.wordCount} words</span>
            )}
            <span className="italic text-[10px] text-slate-300">
              Analysis: {currentSample.characteristics}
            </span>
          </div>
        </div>
      </div>

      {/* Error Tracker Checkbox List */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
              <CheckSquare className="w-4 h-4 text-indigo-500" /> Error Tracker Checklist
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Tick observed candidate errors below to automatically insert technical PTE rubric keywords into your assessment feedback notes.
            </p>
          </div>
          <span className="text-[10px] text-indigo-600 dark:text-indigo-400 font-extrabold bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded shrink-0">
            Auto-inserts Notes
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
          {currentQuestion.errorChecklist?.map((item: any) => {
            const isChecked = checkedErrorIds.includes(item.id);
            return (
              <label
                key={item.id}
                onClick={() => toggleErrorCheckbox(item.id, item.keyword)}
                className={`p-2.5 rounded-xl border text-xs font-medium flex items-center gap-2 cursor-pointer transition-all ${
                  isChecked
                    ? "bg-indigo-50 dark:bg-indigo-950/60 border-indigo-300 dark:border-indigo-700 text-indigo-900 dark:text-indigo-200"
                    : "bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}} // Handled by parent label click
                  className="rounded text-indigo-600 focus:ring-indigo-500 w-3.5 h-3.5"
                />
                <span className="text-[11px] leading-tight">{item.label}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Teacher Feedback Text Input Area */}
      <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 dark:text-slate-200">
              <Edit3 className="w-4 h-4 text-emerald-500" /> Your Assessment Feedback & Rationale
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
              Review auto-inserted checklist points and write your personal feedback, score justification, or student-facing recommendations.
            </p>
          </div>
          <span className="text-[10px] text-slate-400 shrink-0">
            {teacherFeedbackText.length} chars
          </span>
        </div>

        <textarea
          rows={5}
          value={teacherFeedbackText}
          onChange={(e) => setTeacherFeedbackText(e.target.value)}
          placeholder="Type your score rationale and personal feedback here (e.g., 'Oral fluency penalized due to hesitations on thought groups, content missed key trend, work on stress and rhythm...')"
          className="w-full p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden leading-relaxed resize-none font-sans"
        />
      </div>

      {/* Submit AI Comparison Action Button */}
      <button
        onClick={handleSubmitFeedback}
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-extrabold flex items-center justify-center gap-2 shadow-md shadow-indigo-900/20 active:scale-98 transition-all"
      >
        <Sparkles className="w-4 h-4 text-amber-300" /> Compare Feedback with AI Expert
      </button>
    </div>
  );
}