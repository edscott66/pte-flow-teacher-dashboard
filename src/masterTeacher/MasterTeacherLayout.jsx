import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import MasterTeacherHome from "./MasterTeacherHome";

import MarkingScreen from "./screens/MarkingScreen";

import ComparisonScreen from "./screens/ComparisonScreen";

import CalibrationProgressScreen from "./screens/CalibrationProgressScreen";

import LiveEvaluationScreen from "./screens/LiveEvaluationScreen";

import CurriculumLessonLibrary from "../lessonPlans/screens/CurriculumLessonLibrary";

import BandScoreTranslator from "./screens/BandScoreTranslator";

import ExaminerStrategyVault from "./screens/ExaminerStrategyVault";

import ReadAloudStrategy from "./screens/ReadAloudStrategy";

import RepeatSentenceStrategy from "./screens/RepeatSentenceStrategy";

import DescribeImageStrategy from "./screens/DescribeImageStrategy";

import RetellLectureStrategy from "./screens/RetellLectureStrategy";

import AnswerShortQuestionStrategy from "./screens/AnswerShortQuestionStrategy";

import SummarizeGroupDiscussionStrategy from "./screens/SummarizeGroupDiscussionStrategy";

import RespondToSituationStrategy from "./screens/RespondToSituationStrategy";

import SummarizeWrittenTextStrategy from "./screens/SummarizeWrittenTextStrategy";

import WriteEssayStrategy from "./screens/WriteEssayStrategy";

import ReadingFillInBlanksDropdownStrategy from "./screens/ReadingFillInBlanksDropdownStrategy";

import ReadingReorderParagraphStrategy from "./screens/ReadingReorderParagraphStrategy";

import ReadingFillInBlanksDragDropStrategy from "./screens/ReadingFillInBlanksDragDropStrategy";

import ReadingMultipleChoiceSingleStrategy from "./screens/ReadingMultipleChoiceSingleStrategy";

import ReadingMultipleChoiceMultipleStrategy from "./screens/ReadingMultipleChoiceMultipleStrategy";

import SummarizeSpokenTextStrategy from "./screens/SummarizeSpokenTextStrategy";

import ListeningMultipleChoiceMultipleStrategy from "./screens/ListeningMultipleChoiceMultipleStrategy";

import ListeningFillInBlanksTypeInStrategy from "./screens/ListeningFillInBlanksTypeInStrategy";
import HighlightCorrectSummaryStrategy from "./screens/HighlightCorrectSummaryStrategy";
import ListeningMultipleChoiceSingleStrategy from "./screens/ListeningMultipleChoiceSingleStrategy";
import SelectMissingWordStrategy from "./screens/SelectMissingWordStrategy";
import HighlightIncorrectWordsStrategy from "./screens/HighlightIncorrectWordsStrategy";
import WriteFromDictationStrategy from "./screens/WriteFromDictationStrategy";
import PersonalIntroductionStrategy from "./screens/PersonalIntroductionStrategy";

function ComingSoon({ title, onNavigate }) {
  return (
    <div className="master-teacher-empty-state">
      <div className="master-teacher-empty-icon">🚀</div>
      <h2>{title}</h2>
      <p>
        This part of the Master Teacher Suite will be connected in the next
        integration stage. The existing dashboard remains fully available.
      </p>
      <button
        type="button"
        className="master-teacher-primary-button"
        onClick={() => onNavigate("home")}
      >
        Back to Master Teacher Home
      </button>
    </div>
  );
}

export default function MasterTeacherLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  /*
   * Determine which Master Teacher section is currently active.
   *
   * Examples:
   * /master-teacher
   * /master-teacher/marking
   * /master-teacher/comparison
   * /master-teacher/progress
   * /master-teacher/students-evaluator
   */
  const subPath = location.pathname
    .replace(/^\/master-teacher\/?/, "")
    .replace(/\/+$/, "");

  /*
   * Central navigation for the Master Teacher workspace.
   *
   * Keeping these routes here means the Home page, top navigation,
   * Calibration Bench, Evaluation Report and Progress screen all use
   * the same routing.
   */
  const navigateWithinSuite = (tab) => {
    const destinations = {
      home: "/master-teacher",
      marking: "/master-teacher/marking",
      comparison: "/master-teacher/comparison",
      progress: "/master-teacher/progress",
      students_evaluator: "/master-teacher/students-evaluator",
      lessons: "/master-teacher/lessons",
      translator: "/master-teacher/translator",
      tips: "/master-teacher/tips",
    };

    navigate(destinations[tab] || "/master-teacher");
  };

  /*
   * Titles displayed in the Master Teacher workspace top bar.
   */
  const titleMap = {
    home: "Master Teacher Home",
    marking: "Calibration Bench",
    comparison: "Evaluation Report",
    progress: "Calibration Progress",
    "students-evaluator": "Live Evaluation",
    lessons: "Lesson Plans",
    translator: "Band & Score Translator",
    tips: "Examiner Strategy Vault",
    "tips/read-aloud": "Read Aloud — Examiner Strategy",
    "tips/repeat-sentence": "Repeat Sentence — Examiner Strategy",
    "tips/describe-image": "Describe Image — Examiner Strategy",
    "tips/retell-lecture": "Retell Lecture — Examiner Strategy",
    "tips/answer-short-question":
      "Answer Short Question — Examiner Strategy",
    "tips/summarize-group-discussion":
      "Summarize Group Discussion — Examiner Strategy",
    "tips/respond-to-a-situation":
      "Respond to a Situation — Examiner Strategy",
    "tips/summarize-written-text":
      "Summarize Written Text — Examiner Strategy",
    "tips/write-essay": "Write Essay — Examiner Strategy",
    "tips/reading-fill-in-blanks-dropdown":
      "Fill in the Blanks (Dropdown) — Examiner Strategy",
    "tips/reading-reorder-paragraph": "Reorder Paragraph — Examiner Strategy",
    "tips/reading-fill-in-blanks-drag-drop":
      "Fill in the Blanks (Drag and Drop) — Examiner Strategy",
    "tips/reading-multiple-choice-single":
      "Multiple Choice, Single Answer — Examiner Strategy",
    "tips/reading-multiple-choice-multiple":
      "Multiple Choice, Multiple Answers — Examiner Strategy",
    "tips/summarize-spoken-text":
      "Summarize Spoken Text — Examiner Strategy",
    "tips/listening-multiple-choice-multiple":
      "Multiple Choice, Multiple Answers (Listening) — Examiner Strategy",
    "tips/listening-fill-in-blanks-type-in":
      "Fill in the Blanks (Type In) — Examiner Strategy",
    "tips/highlight-correct-summary":
      "Highlight Correct Summary — Examiner Strategy",
    "tips/listening-multiple-choice-single":
      "Multiple Choice, Single Answer (Listening) — Examiner Strategy",
    "tips/select-missing-word":
      "Select Missing Word — Examiner Strategy",
    "tips/highlight-incorrect-words":
      "Highlight Incorrect Words — Examiner Strategy",
    "tips/write-from-dictation":
      "Write from Dictation — Examiner Strategy",
    "tips/personal-introduction":
      "Personal Introduction — Examiner Strategy",
  };

  const activeKey = subPath || "home";

  return (
    <div className="master-teacher-workspace">
      {/* ============================================================
          MASTER TEACHER TOP BAR
          ============================================================ */}
      <div className="master-teacher-workspace-topbar">
        <div>
          <span className="master-teacher-workspace-title">
            {"\u{1F451}"} PTE Master Teacher
          </span>
          <span className="master-teacher-workspace-current">
            {titleMap[activeKey] || "Master Teacher"}
          </span>
        </div>

        <div className="master-teacher-workspace-links">
          <button
            type="button"
            onClick={() => navigateWithinSuite("home")}
          >
            Home
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("marking")}
          >
            Calibration
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("comparison")}
          >
            Reports
          </button>

          <button
            type="button"
            onClick={() => navigateWithinSuite("progress")}
          >
            Progress
          </button>
        </div>
      </div>

      {/* ============================================================
          MASTER TEACHER PAGE CONTENT
          ============================================================ */}
      <div className="master-teacher-workspace-body">
        {/* Home */}
        {activeKey === "home" && (
          <MasterTeacherHome onNavigate={navigateWithinSuite} />
        )}

        {/* Calibration Bench / Marking Simulator */}
        {activeKey === "marking" && (
          <MarkingScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Evaluation Report / AI Comparison */}
        {activeKey === "comparison" && (
          <ComparisonScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Calibration Progress */}
        {activeKey === "progress" && (
          <CalibrationProgressScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Live Evaluation */}
        {activeKey === "students-evaluator" && (
          <LiveEvaluationScreen onNavigate={navigateWithinSuite} />
        )}

        {/* Lesson Plans */}
        {activeKey === "lessons" && <CurriculumLessonLibrary />}

        {/* Band & Score Translator */}
        {activeKey === "translator" && <BandScoreTranslator />}

        {/* Examiner Strategy Vault */}
        {activeKey === "tips" && <ExaminerStrategyVault />}

        {/* Read Aloud Strategy */}
        {activeKey === "tips/read-aloud" && <ReadAloudStrategy />}

        {/* Repeat Sentence Strategy */}
        {activeKey === "tips/repeat-sentence" && <RepeatSentenceStrategy />}

        {/* Describe Image Strategy */}
        {activeKey === "tips/describe-image" && <DescribeImageStrategy />}

        {/* Retell Lecture Strategy */}
        {activeKey === "tips/retell-lecture" && <RetellLectureStrategy />}

        {/* Answer Short Question Strategy */}
        {activeKey === "tips/answer-short-question" && (
          <AnswerShortQuestionStrategy />
        )}

        {/* Summarize Group Discussion Strategy */}
        {activeKey === "tips/summarize-group-discussion" && (
          <SummarizeGroupDiscussionStrategy />
        )}

        {/* Respond to a Situation Strategy */}
        {activeKey === "tips/respond-to-a-situation" && (
          <RespondToSituationStrategy />
        )}

        {/* Summarize Written Text Strategy */}
        {activeKey === "tips/summarize-written-text" && (
          <SummarizeWrittenTextStrategy />
        )}

        {/* Write Essay Strategy */}
        {activeKey === "tips/write-essay" && <WriteEssayStrategy />}

        {/* Fill in the Blanks (Dropdown) Strategy */}
        {activeKey === "tips/reading-fill-in-blanks-dropdown" && (
          <ReadingFillInBlanksDropdownStrategy />
        )}

        {activeKey === "tips/reading-reorder-paragraph" && (
          <ReadingReorderParagraphStrategy />
        )}

        {activeKey === "tips/reading-fill-in-blanks-drag-drop" && (
          <ReadingFillInBlanksDragDropStrategy />
        )}

        {activeKey === "tips/reading-multiple-choice-single" && (
          <ReadingMultipleChoiceSingleStrategy />
        )}

        {activeKey === "tips/reading-multiple-choice-multiple" && (
          <ReadingMultipleChoiceMultipleStrategy />
        )}

        {/* Summarize Spoken Text Strategy */}
        {activeKey === "tips/summarize-spoken-text" && (
          <SummarizeSpokenTextStrategy />
        )}

        {activeKey === "tips/listening-multiple-choice-multiple" && (
          <ListeningMultipleChoiceMultipleStrategy />
        )}

        {activeKey === "tips/listening-fill-in-blanks-type-in" && (
          <ListeningFillInBlanksTypeInStrategy />
        )}

        {/* Highlight Correct Summary Strategy */}
        {activeKey === "tips/highlight-correct-summary" && (
          <HighlightCorrectSummaryStrategy />
        )}

        {/* Multiple Choice, Single Answer (Listening) Strategy */}
        {activeKey === "tips/listening-multiple-choice-single" && (
          <ListeningMultipleChoiceSingleStrategy />
        )}

        {/* Select Missing Word Strategy */}
        {activeKey === "tips/select-missing-word" && (
          <SelectMissingWordStrategy />
        )}

        {/* Highlight Incorrect Words Strategy */}
        {activeKey === "tips/highlight-incorrect-words" && (
          <HighlightIncorrectWordsStrategy />
        )}

        {/* Write from Dictation Strategy */}
        {activeKey === "tips/write-from-dictation" && (
          <WriteFromDictationStrategy />
        )}

        {/* Personal Introduction Strategy */}
        {activeKey === "tips/personal-introduction" && (
          <PersonalIntroductionStrategy />
        )}
      </div>
    </div>
  );
}
