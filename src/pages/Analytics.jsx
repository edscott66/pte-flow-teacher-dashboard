import "./Analytics.css";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import {
  getTeacherCalibrationAttempts,
  getTeacherLiveEvaluationCalibrationAttempts,
} from "../services/teacherAnalyticsService";
import {
  READ_ALOUD_CALIBRATION_EXERCISES,
  getExercise,
} from "../masterTeacher/constants/exerciseBank";
import { QUESTIONS_DATA } from "../masterTeacher/constants/questionsData";

export default function Analytics() {
  const { roleData } = useAuth();

  const role = roleData?.role;
  const displayName = roleData?.name || "User";

  const [attempts, setAttempts] = useState([]);
  const [liveEvaluationAttempts, setLiveEvaluationAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedAttempt, setSelectedAttempt] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadAnalytics() {
      setLoading(true);
      setError("");

      try {
        const [calibrationAttempts, liveAttempts] = await Promise.all([
          getTeacherCalibrationAttempts(),
          getTeacherLiveEvaluationCalibrationAttempts(),
        ]);

        if (isMounted) {
          setAttempts(calibrationAttempts);
          setLiveEvaluationAttempts(liveAttempts);
        }
      } catch (err) {
        console.error("Failed to load teacher analytics:", err);

        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load teacher analytics."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadAnalytics();

    return () => {
      isMounted = false;
    };
  }, []);

  const scores = attempts
    .map((attempt) => attempt.matchPercentage)
    .filter(
      (score) =>
        typeof score === "number" && Number.isFinite(score)
    );

  const completedExercises = attempts.length;

  const averageMatch =
    scores.length > 0
      ? Math.round(
          scores.reduce((total, score) => total + score, 0) /
            scores.length
        )
      : 0;

  const bestMatch =
    scores.length > 0 ? Math.max(...scores) : 0;

  const lowestMatch =
    scores.length > 0 ? Math.min(...scores) : 0;
    const getScoreClass = (score) =>
    score >= 85
      ? "master"
      : score >= 70
        ? "proficient"
        : score >= 50
          ? "developing"
          : "needs-calibration";

  const recentAttempts = attempts.slice(0, 10);

const historyAttempts = attempts;

  const trendAttempts = [...attempts]
    .filter(
      (attempt) =>
        typeof attempt.matchPercentage === "number" &&
        Number.isFinite(attempt.matchPercentage)
    )
    .slice(0, 10)
    .reverse();

  const cefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const cefrPerformance = cefrOrder
    .map((level) => {
      const levelAttempts = attempts.filter(
        (attempt) =>
          String(attempt.cefrLevel ?? "").toUpperCase() === level
      );

      const levelScores = levelAttempts
        .map((attempt) => attempt.matchPercentage)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (levelAttempts.length === 0) {
        return null;
      }

      const average =
        levelScores.length > 0
          ? Math.round(
              levelScores.reduce(
                (total, score) => total + score,
                0
              ) / levelScores.length
            )
          : 0;

      const best =
        levelScores.length > 0
          ? Math.max(...levelScores)
          : 0;

      const lowest =
        levelScores.length > 0
          ? Math.min(...levelScores)
          : 0;

      return {
        level,
        attempts: levelAttempts.length,
        average,
        best,
        lowest,
      };
    })
    .filter(Boolean);

  const diagnosticSkillOrder = [
    "Content Accuracy",
    "Oral Fluency",
    "Pronunciation",
  ];

  const diagnosticPerformance = diagnosticSkillOrder
    .map((skill) => {
      const skillAttempts = attempts.filter((attempt) => {
        const exercise = READ_ALOUD_CALIBRATION_EXERCISES.find(
          (item) => item.exerciseIndex === attempt.exerciseIndex
        );

        return exercise?.trainingSkill === skill;
      });

      const skillScores = skillAttempts
        .map((attempt) => attempt.matchPercentage)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (skillAttempts.length === 0) {
        return null;
      }

      const average =
        skillScores.length > 0
          ? Math.round(
              skillScores.reduce(
                (total, score) => total + score,
                0
              ) / skillScores.length
            )
          : 0;

      const best =
        skillScores.length > 0
          ? Math.max(...skillScores)
          : 0;

      const lowest =
        skillScores.length > 0
          ? Math.min(...skillScores)
          : 0;

      const diagnosticAreas = [
        ...new Set(
          skillAttempts
            .map((attempt) => {
              const exercise =
                READ_ALOUD_CALIBRATION_EXERCISES.find(
                  (item) =>
                    item.exerciseIndex === attempt.exerciseIndex
                );

              return exercise?.diagnosticArea;
            })
            .filter(Boolean)
        ),
      ];

      return {
        skill,
        attempts: skillAttempts.length,
        average,
        best,
        lowest,
        diagnosticAreas,
      };
    })
    .filter(Boolean);

  const liveEvaluationScores = liveEvaluationAttempts
    .map((attempt) => attempt.calibrationScore)
    .filter(
      (score) =>
        typeof score === "number" && Number.isFinite(score)
    );

  const liveEvaluationCompleted = liveEvaluationAttempts.length;

  const liveEvaluationAverage =
    liveEvaluationScores.length > 0
      ? Math.round(
          liveEvaluationScores.reduce(
            (total, score) => total + score,
            0
          ) / liveEvaluationScores.length
        )
      : 0;

  const liveEvaluationHighest =
    liveEvaluationScores.length > 0
      ? Math.max(...liveEvaluationScores)
      : 0;

  const liveEvaluationLowest =
    liveEvaluationScores.length > 0
      ? Math.min(...liveEvaluationScores)
      : 0;

  const liveEvaluationTrendAttempts = [...liveEvaluationAttempts]
    .filter(
      (attempt) =>
        typeof attempt.calibrationScore === "number" &&
        Number.isFinite(attempt.calibrationScore)
    )
    .slice(0, 10)
    .reverse();

  const getLiveEvaluationCefrLevel = (attempt) => {
    const savedLevel = attempt?.cefrLevel;

    if (typeof savedLevel === "string" && savedLevel.trim()) {
      return savedLevel.trim().toUpperCase();
    }

    if (
      savedLevel &&
      typeof savedLevel === "object" &&
      !Array.isArray(savedLevel)
    ) {
      const objectLevel =
        savedLevel.level ||
        savedLevel.label ||
        savedLevel.name ||
        "";

      if (String(objectLevel).trim()) {
        return String(objectLevel).trim().toUpperCase();
      }
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return "";
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    const exerciseCefr = exercise?.cefrLevel;

    if (typeof exerciseCefr === "string" && exerciseCefr.trim()) {
      return exerciseCefr.trim().toUpperCase();
    }

    if (
      exerciseCefr &&
      typeof exerciseCefr === "object" &&
      !Array.isArray(exerciseCefr)
    ) {
      const exerciseLevel =
        exerciseCefr.level ||
        exerciseCefr.label ||
        exerciseCefr.name ||
        "";

      return String(exerciseLevel).trim().toUpperCase();
    }

    return "";
  };

  const liveEvaluationCefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const liveEvaluationCefrPerformance = liveEvaluationCefrOrder
    .map((level) => {
      const levelAttempts = liveEvaluationAttempts.filter(
        (attempt) => getLiveEvaluationCefrLevel(attempt) === level
      );

      const levelScores = levelAttempts
        .map((attempt) => attempt.calibrationScore)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (levelAttempts.length === 0) {
        return null;
      }

      const average =
        levelScores.length > 0
          ? Math.round(
              levelScores.reduce(
                (total, score) => total + score,
                0
              ) / levelScores.length
            )
          : 0;

      const best =
        levelScores.length > 0
          ? Math.max(...levelScores)
          : 0;

      const lowest =
        levelScores.length > 0
          ? Math.min(...levelScores)
          : 0;

      return {
        level,
        attempts: levelAttempts.length,
        average,
        best,
        lowest,
      };
    })
    .filter(Boolean);

  const getLiveEvaluationDiagnosticSkill = (attempt) => {
    const savedSkill = String(attempt?.trainingSkill ?? "").trim();

    if (
      savedSkill === "Content Accuracy" ||
      savedSkill === "Oral Fluency" ||
      savedSkill === "Pronunciation"
    ) {
      return savedSkill;
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return "";
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    const exerciseSkill = String(
      exercise?.trainingSkill ?? ""
    ).trim();

    return (
    exerciseSkill === "Content Accuracy" ||
    exerciseSkill === "Oral Fluency" ||
    exerciseSkill === "Pronunciation"
      ? exerciseSkill
      : ""
  );
  };

  const getLiveEvaluationDiagnosticAreas = (attempt) => {
    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    if (!question || !Number.isFinite(Number(attempt?.exerciseIndex))) {
      return [];
    }

    const exercise = getExercise(
      question,
      Number(attempt.exerciseIndex)
    );

    return [exercise?.diagnosticArea].filter(Boolean);
  };

  const liveEvaluationDiagnosticSkillOrder = [
    "Content Accuracy",
    "Oral Fluency",
    "Pronunciation",
  ];

  const liveEvaluationDiagnosticPerformance =
    liveEvaluationDiagnosticSkillOrder
      .map((skill) => {
        const skillAttempts = liveEvaluationAttempts.filter(
          (attempt) =>
            getLiveEvaluationDiagnosticSkill(attempt) === skill
        );

        const skillScores = skillAttempts
          .map((attempt) => attempt.calibrationScore)
          .filter(
            (score) =>
              typeof score === "number" &&
              Number.isFinite(score)
          );

        const average =
          skillScores.length > 0
            ? Math.round(
                skillScores.reduce(
                  (total, score) => total + score,
                  0
                ) / skillScores.length
              )
            : 0;

        const best =
          skillScores.length > 0
            ? Math.max(...skillScores)
            : 0;

        const lowest =
          skillScores.length > 0
            ? Math.min(...skillScores)
            : 0;

        const diagnosticAreas = [
          ...new Set(
            skillAttempts.flatMap((attempt) =>
              getLiveEvaluationDiagnosticAreas(attempt)
            )
          ),
        ];

        return {
          skill,
          attempts: skillAttempts.length,
          average,
          best,
          lowest,
          diagnosticAreas,
        };
      })
      .filter(Boolean);

  const liveEvaluationRecentAttempts = liveEvaluationAttempts.slice(0, 10);
  const teacherPerformanceAllAttempts = [...liveEvaluationAttempts]
    .filter(
      (attempt) =>
        typeof attempt?.calibrationScore === "number" &&
        Number.isFinite(attempt.calibrationScore)
    )
    .sort((a, b) => {
      const aTime = a?.timestamp ? new Date(a.timestamp).getTime() : 0;
      const bTime = b?.timestamp ? new Date(b.timestamp).getTime() : 0;

      return aTime - bTime;
    });

  let teacherPerformanceRunningTotal = 0;

  const teacherPerformanceDevelopment =
    teacherPerformanceAllAttempts.map((attempt, index) => {
      teacherPerformanceRunningTotal += attempt.calibrationScore;

      return {
        ...attempt,
        developmentIndex: index + 1,
        cumulativeAverage: Math.round(
          teacherPerformanceRunningTotal / (index + 1)
        ),
      };
    });

  const teacherPerformanceChartAttempts =
    teacherPerformanceDevelopment.slice(-10);

  const teacherPerformanceFirstScore =
    teacherPerformanceAllAttempts.length > 0
      ? teacherPerformanceAllAttempts[0].calibrationScore
      : 0;

  const teacherPerformanceLatestScore =
    teacherPerformanceAllAttempts.length > 0
      ? teacherPerformanceAllAttempts[
          teacherPerformanceAllAttempts.length - 1
        ].calibrationScore
      : 0;

  const teacherPerformanceScoreChange =
    teacherPerformanceAllAttempts.length >= 2
      ? teacherPerformanceLatestScore - teacherPerformanceFirstScore
      : null;

  const teacherPerformanceCurrentAverage =
    teacherPerformanceDevelopment.length > 0
      ? teacherPerformanceDevelopment[
          teacherPerformanceDevelopment.length - 1
        ].cumulativeAverage
      : 0;

  const teacherPerformanceDevelopmentLabel =
    teacherPerformanceAllAttempts.length >= 2
      ? "Based on first and latest recorded evaluations"
      : "Complete another Live Evaluation to establish a development change";

  const teacherPerformanceComponentDefinitions = [
    {
      key: "assessmentAccuracy",
      label: "Assessment Accuracy",
      maxScore: 40,
      weight: "40%",
      description: "Accuracy of the teacher's assessment decisions.",
    },
    {
      key: "evidenceAndObservation",
      label: "Evidence & Observation",
      maxScore: 25,
      weight: "25%",
      description: "How well the assessment is supported by observed evidence.",
    },
    {
      key: "writtenFeedbackAccuracy",
      label: "Written Feedback Accuracy",
      maxScore: 20,
      weight: "20%",
      description: "Accuracy and alignment of the teacher's written feedback.",
    },
    {
      key: "calibrationDiscipline",
      label: "Calibration Discipline",
      maxScore: 15,
      weight: "15%",
      description: "Consistency with the calibration process and review requirements.",
    },
  ];

  const teacherPerformanceComponentPerformance =
    teacherPerformanceComponentDefinitions.map((component) => {
      const componentScores = teacherPerformanceAllAttempts
        .map((attempt) => {
          const value = attempt?.scoreBreakdown?.[component.key];

          return typeof value === "number" && Number.isFinite(value)
            ? value
            : null;
        })
        .filter((value) => value !== null);

      const average =
        componentScores.length > 0
          ? Math.round(
              (componentScores.reduce(
                (total, score) => total + score,
                0
              ) /
                componentScores.length) *
                10
            ) / 10
          : 0;

      const attainment =
        component.maxScore > 0
          ? Math.round((average / component.maxScore) * 100)
          : 0;

      return {
        ...component,
        average,
        attainment: Math.min(Math.max(attainment, 0), 100),
        evaluations: componentScores.length,
      };
    });

  const teacherPerformanceCefrOrder = ["A1", "A2", "B1", "B2", "C1", "C2"];

  const teacherPerformanceCefrPerformance = teacherPerformanceCefrOrder
    .map((level) => {
      const levelAttempts = teacherPerformanceAllAttempts.filter(
        (attempt) => getLiveEvaluationCefrLevel(attempt) === level
      );

      if (levelAttempts.length === 0) {
        return null;
      }

      const levelScores = levelAttempts
        .map((attempt) => attempt.calibrationScore)
        .filter(
          (score) =>
            typeof score === "number" && Number.isFinite(score)
        );

      const average =
        levelScores.length > 0
          ? Math.round(
              levelScores.reduce(
                (total, score) => total + score,
                0
              ) / levelScores.length
            )
          : 0;

      const firstScore =
        levelScores.length > 0 ? levelScores[0] : 0;

      const latestScore =
        levelScores.length > 0
          ? levelScores[levelScores.length - 1]
          : 0;

      const change =
        levelScores.length >= 2
          ? latestScore - firstScore
          : null;

      return {
        level,
        evaluations: levelScores.length,
        average,
        firstScore,
        latestScore,
        change,
      };
    })
    .filter(Boolean);

  const teacherPerformanceDiagnosticSkillDefinitions = [
    {
      key: "Content Accuracy",
      label: "Content Accuracy",
      description: "Development in calibration of content and scoring decisions.",
    },
    {
      key: "Oral Fluency",
      label: "Oral Fluency",
      description: "Development in calibration of fluency-related assessment decisions.",
    },
    {
      key: "Pronunciation",
      label: "Pronunciation",
      description: "Development in calibration of pronunciation-related assessment decisions.",
    },
  ];

  const teacherPerformanceDiagnosticDevelopment =
    teacherPerformanceDiagnosticSkillDefinitions.map((skillDefinition) => {
      const skillAttempts = teacherPerformanceAllAttempts
        .filter(
          (attempt) =>
            getLiveEvaluationDiagnosticSkill(attempt) ===
            skillDefinition.key
        )
        .sort((a, b) => {
          const aTime = a?.timestamp
            ? new Date(a.timestamp).getTime()
            : 0;
          const bTime = b?.timestamp
            ? new Date(b.timestamp).getTime()
            : 0;
          return aTime - bTime;
        });

      const skillScores = skillAttempts
        .map((attempt) => attempt.calibrationScore)
        .filter(
          (score) =>
            typeof score === "number" &&
            Number.isFinite(score)
        );

      if (skillScores.length === 0) {
        return {
          ...skillDefinition,
          evaluations: 0,
          average: 0,
          firstScore: 0,
          latestScore: 0,
          change: null,
        };
      }

      const average = Math.round(
        skillScores.reduce(
          (total, score) => total + score,
          0
        ) / skillScores.length
      );

      const firstScore = skillScores[0];
      const latestScore = skillScores[skillScores.length - 1];

      return {
        ...skillDefinition,
        evaluations: skillScores.length,
        average,
        firstScore,
        latestScore,
        change:
          skillScores.length >= 2
            ? latestScore - firstScore
            : null,
      };
    });

  const teacherPerformanceConsistencyScores =
    teacherPerformanceAllAttempts.map((attempt) => attempt.calibrationScore);

  const teacherPerformanceConsistencyAverage =
    teacherPerformanceConsistencyScores.length > 0
      ? teacherPerformanceConsistencyScores.reduce(
          (total, score) => total + score,
          0
        ) / teacherPerformanceConsistencyScores.length
      : 0;

  const teacherPerformanceConsistencyMinimum =
    teacherPerformanceConsistencyScores.length > 0
      ? Math.min(...teacherPerformanceConsistencyScores)
      : 0;

  const teacherPerformanceConsistencyMaximum =
    teacherPerformanceConsistencyScores.length > 0
      ? Math.max(...teacherPerformanceConsistencyScores)
      : 0;

  const teacherPerformanceConsistencyRange =
    teacherPerformanceConsistencyScores.length > 0
      ? teacherPerformanceConsistencyMaximum -
        teacherPerformanceConsistencyMinimum
      : 0;

  const teacherPerformanceConsistencyVariance =
    teacherPerformanceConsistencyScores.length > 0
      ? teacherPerformanceConsistencyScores.reduce(
          (total, score) =>
            total +
            Math.pow(
              score - teacherPerformanceConsistencyAverage,
              2
            ),
          0
        ) / teacherPerformanceConsistencyScores.length
      : 0;

  const teacherPerformanceConsistencyStandardDeviation =
    teacherPerformanceConsistencyScores.length > 0
      ? Math.sqrt(teacherPerformanceConsistencyVariance)
      : 0;

  const teacherPerformanceConsistencyAverageDistance =
    teacherPerformanceConsistencyScores.length > 0
      ? teacherPerformanceConsistencyScores.reduce(
          (total, score) =>
            total +
            Math.abs(
              score - teacherPerformanceConsistencyAverage
            ),
          0
        ) / teacherPerformanceConsistencyScores.length
      : 0;

  const teacherPerformanceConsistencyAttempts =
    teacherPerformanceAllAttempts.slice(-10);

  const teacherPerformanceExerciseMap = new Map();

  teacherPerformanceAllAttempts.forEach((attempt) => {
    const exerciseIndex = Number(attempt?.exerciseIndex);

    if (!Number.isFinite(exerciseIndex)) {
      return;
    }

    if (!teacherPerformanceExerciseMap.has(exerciseIndex)) {
      teacherPerformanceExerciseMap.set(exerciseIndex, []);
    }

    teacherPerformanceExerciseMap.get(exerciseIndex).push(attempt);
  });

  const teacherPerformanceExerciseProgression = Array.from(
    teacherPerformanceExerciseMap.entries()
  )
    .map(([exerciseIndex, exerciseAttempts]) => {
      const orderedAttempts = [...exerciseAttempts].sort((a, b) => {
        const aTime = a?.timestamp
          ? new Date(a.timestamp).getTime()
          : 0;
        const bTime = b?.timestamp
          ? new Date(b.timestamp).getTime()
          : 0;

        return aTime - bTime;
      });

      const scores = orderedAttempts
        .map((attempt) => attempt.calibrationScore)
        .filter(
          (score) =>
            typeof score === "number" && Number.isFinite(score)
        );

      if (scores.length === 0) {
        return null;
      }

      const average = Math.round(
        scores.reduce((total, score) => total + score, 0) /
          scores.length
      );

      const firstScore = scores[0];
      const latestScore = scores[scores.length - 1];

      return {
        exerciseIndex,
        attempts: scores.length,
        average,
        firstScore,
        latestScore,
        change:
          scores.length >= 2
            ? latestScore - firstScore
            : null,
        cefrLevel: getLiveEvaluationCefrLevel(orderedAttempts[0]),
        topicTitle:
          orderedAttempts[0]?.topicTitle ||
          QUESTIONS_DATA.find(
            (item) => item.id === orderedAttempts[0]?.questionId
          )?.title ||
          "Live Evaluation",
      };
    })
    .filter(Boolean)
    .sort((a, b) => a.exerciseIndex - b.exerciseIndex);

  const teacherPerformanceExerciseProgressionVisible =
    teacherPerformanceExerciseProgression.slice(-10);

  const teacherPerformanceProfileCefrLevels = [
    ...new Set(
      teacherPerformanceAllAttempts
        .map((attempt) => getLiveEvaluationCefrLevel(attempt))
        .filter(Boolean)
    ),
  ];

  const teacherPerformanceProfileDiagnosticWithEvidence =
    teacherPerformanceDiagnosticDevelopment.filter(
      (skill) => skill.evaluations > 0
    );

  const teacherPerformanceProfileDiagnosticWithoutEvidence =
    teacherPerformanceDiagnosticDevelopment.filter(
      (skill) => skill.evaluations === 0
    );

  const teacherPerformanceProfileComponentsWithEvidence =
    teacherPerformanceComponentPerformance.filter(
      (component) => component.evaluations > 0
    );

  const teacherPerformanceProfileTrajectoryText =
    teacherPerformanceAllAttempts.length >= 2
      ? `The recorded scores move from ${teacherPerformanceFirstScore}/100 to ${teacherPerformanceLatestScore}/100, a first-to-latest difference of ${teacherPerformanceScoreChange > 0 ? "+" : ""}${teacherPerformanceScoreChange}.`
      : teacherPerformanceAllAttempts.length === 1
        ? `One recorded calibration score is currently available: ${teacherPerformanceFirstScore}/100.`
        : "No Live Evaluation calibration scores have been recorded yet.";

  const teacherPerformanceProfileComponentText =
    teacherPerformanceProfileComponentsWithEvidence.length ===
    teacherPerformanceComponentPerformance.length
      ? `Recorded evidence is currently available for all ${teacherPerformanceComponentPerformance.length} calibration components.`
      : `Recorded evidence is currently available for ${teacherPerformanceProfileComponentsWithEvidence.length} of ${teacherPerformanceComponentPerformance.length} calibration components.`;

  const teacherPerformanceProfileCefrText =
    teacherPerformanceProfileCefrLevels.length > 0
      ? `Recorded evaluations currently span ${teacherPerformanceProfileCefrLevels.join(", ")} CEFR ${teacherPerformanceProfileCefrLevels.length === 1 ? "level" : "levels"}.`
      : "No CEFR levels are currently available in the recorded Live Evaluation evidence.";

  const teacherPerformanceProfileDiagnosticText =
    teacherPerformanceProfileDiagnosticWithEvidence.length > 0
      ? `Recorded diagnostic evidence is available for ${teacherPerformanceProfileDiagnosticWithEvidence.length} of 3 skill areas: ${teacherPerformanceProfileDiagnosticWithEvidence
          .map((skill) => skill.label)
          .join(", ")}.${teacherPerformanceProfileDiagnosticWithoutEvidence.length > 0 ? ` ${teacherPerformanceProfileDiagnosticWithoutEvidence
          .map((skill) => skill.label)
          .join(", ")} ${teacherPerformanceProfileDiagnosticWithoutEvidence.length === 1 ? "has" : "have"} no recorded evaluations yet.` : ""}`
      : "No diagnostic skill areas have recorded Live Evaluation evidence yet.";

  const teacherPerformanceProfileConsistencyText =
    teacherPerformanceAllAttempts.length >= 2
      ? `The recorded scores span ${teacherPerformanceConsistencyRange} points, with a standard deviation of ${teacherPerformanceConsistencyStandardDeviation.toFixed(1)} points.`
      : "At least two recorded evaluations are needed before score variation can be described.";

  const getLiveEvaluationScoreTier = (score) => {
    if (score >= 85) return "PTE Master";
    if (score >= 70) return "Proficient";
    if (score >= 50) return "Developing";
    return "Needs Calibration";
  };

  const getLiveEvaluationAttemptDate = (attempt) => {
    if (!attempt?.timestamp) {
      return "Date unavailable";
    }

    const date = new Date(attempt.timestamp);

    return Number.isNaN(date.getTime())
      ? "Date unavailable"
      : date.toLocaleString();
  };

  const getLiveEvaluationTopicTitle = (attempt) => {
    if (attempt?.topicTitle) {
      return attempt.topicTitle;
    }

    const question = QUESTIONS_DATA.find(
      (item) => item.id === attempt?.questionId
    );

    return question?.title || "Live Evaluation";
  };

  return (
    <div className="page-content analytics-page">
      <div className="analytics-header">
        <div>
          <h2>Teacher Analytics</h2>
          <p>
            Track your Calibration Lab performance and
            marking development.
          </p>
        </div>

        <div className="analytics-welcome">
          <span className="analytics-welcome-icon">📊</span>
          <div>
            <span className="analytics-welcome-label">
              Teacher
            </span>
            <strong>{displayName}</strong>
          </div>
        </div>
      </div>

      {role === "teacher" && (
        <>
          {loading && (
            <div className="analytics-status-card">
              <div className="analytics-loading-spinner" />
              <p>Loading Calibration Lab analytics...</p>
            </div>
          )}

          {!loading && error && (
            <div className="analytics-status-card analytics-error-card">
              <div className="analytics-status-icon">⚠️</div>
              <div>
                <strong>Unable to load analytics</strong>
                <p>{error}</p>
              </div>
            </div>
          )}

          {!loading && !error && (
            <>
              <div className="analytics-domain-header analytics-calibration-domain-header">
                <div className="analytics-domain-header-accent" aria-hidden="true" />
                <div>
                  <span className="analytics-domain-label">Calibration Bench</span>
                  <h3>Teacher Calibration Bench</h3>
                  <p>
                    Track your performance when calibrating against benchmark responses.
                  </p>
                </div>
              </div>

              <section className="analytics-summary-grid">
                <div className="analytics-stat-card analytics-stat-completed">
                  <div className="analytics-stat-icon">🎯</div>
                  <div className="analytics-stat-content">
                    <span>Exercises Completed</span>
                    <strong>{completedExercises}</strong>
                    <small>Calibration attempts</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-average">
                  <div className="analytics-stat-icon">📈</div>
                  <div className="analytics-stat-content">
                    <span>Average Match</span>
                    <strong>{averageMatch}%</strong>
                    <small>Overall calibration score</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-best">
                  <div className="analytics-stat-icon">🏆</div>
                  <div className="analytics-stat-content">
                    <span>Best Match</span>
                    <strong>{bestMatch}%</strong>
                    <small>Highest calibration score</small>
                  </div>
                </div>

                <div className="analytics-stat-card analytics-stat-lowest">
                  <div className="analytics-stat-icon">📉</div>
                  <div className="analytics-stat-content">
                    <span>Lowest Match</span>
                    <strong>{lowestMatch}%</strong>
                    <small>Lowest calibration score</small>
                  </div>
                </div>
              </section>

              <section className="analytics-section-card analytics-trend-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Calibration Performance Trend</h3>
                    <p>
                      See your most recent calibration scores over time.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {trendAttempts.length} score
                    {trendAttempts.length === 1 ? "" : "s"}
                  </span>
                </div>

                {trendAttempts.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      📈
                    </div>
                    <strong>
                      Your performance trend will appear here
                    </strong>
                    <p>
                      Complete Calibration Lab exercises to build a
                      performance trend.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-trend-chart">
                    <div className="analytics-trend-scale">
                      <span>100%</span>
                      <span>75%</span>
                      <span>50%</span>
                      <span>25%</span>
                      <span>0%</span>
                    </div>

                    <div className="analytics-trend-plot">
                      <div className="analytics-trend-grid">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                      </div>

                      <div className="analytics-trend-bars">
                        {trendAttempts.map((attempt, index) => {
                          const score = Math.min(
                            Math.max(attempt.matchPercentage, 0),
                            100
                          );

                          const scoreClass =
                            score >= 85
                              ? "master"
                              : score >= 70
                                ? "proficient"
                                : score >= 50
                                  ? "developing"
                                  : "needs-calibration";

                          return (
                            <div
                              className="analytics-trend-point"
                              key={`${attempt.id}-${index}`}
                              title={`Exercise ${attempt.exerciseIndex}: ${score}%`}
                            >
                              <div
                                className={`analytics-trend-score analytics-trend-score-${scoreClass}`}
                              >
                                {score}%
                              </div>

                              <div className="analytics-trend-bar-track">
                                <div
                                  className={`analytics-trend-bar analytics-trend-bar-${scoreClass}`}
                                  style={{ height: `${score}%` }}
                                />
                              </div>

                              <span className="analytics-trend-label">
                                {attempt.exerciseIndex}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="analytics-trend-legend" aria-label="Calibration score ranges">
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-master" />
                        <div>
                          <strong>85–100%</strong>
                          <span>PTE Master</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-proficient" />
                        <div>
                          <strong>70–84%</strong>
                          <span>Proficient</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-developing" />
                        <div>
                          <strong>50–69%</strong>
                          <span>Developing</span>
                        </div>
                      </div>
                      <div className="analytics-trend-legend-item">
                        <span className="analytics-trend-legend-dot analytics-trend-dot-needs-calibration" />
                        <div>
                          <strong>0–49%</strong>
                          <span>Needs Calibration</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>

              <section className="analytics-section-card analytics-cefr-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Performance by CEFR Level</h3>
                    <p>
                      See how your calibration performance
                      changes as exercise difficulty increases.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {cefrPerformance.length} level
                    {cefrPerformance.length === 1 ? "" : "s"}
                  </span>
                </div>

                {cefrPerformance.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      📊
                    </div>
                    <strong>
                      CEFR performance will appear here
                    </strong>
                    <p>
                      Complete Calibration Lab exercises with
                      CEFR-labelled results to build your
                      performance profile.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-cefr-list">
                    {cefrPerformance.map((item) => (
                      <div
                        className="analytics-cefr-row"
                        key={item.level}
                      >
                        <div className="analytics-cefr-level">
                          <span>{item.level}</span>
                        </div>

                        <div className="analytics-cefr-details">
                          <div className="analytics-cefr-topline">
                            <strong>
                              {item.average}% average
                            </strong>
                            <span>
                              {item.attempts} attempt
                              {item.attempts === 1 ? "" : "s"}
                            </span>
                          </div>

                          <div className="analytics-cefr-bar">
                            <div
                              className={`analytics-cefr-bar-fill analytics-cefr-bar-${getScoreClass(
                                item.average
                              )}`}
                              style={{
                                width: `${Math.min(
                                  Math.max(item.average, 0),
                                  100
                                )}%`,
                              }}
                            />
                          </div>

                          <div className="analytics-cefr-stats">
                            <span>
                              Best: <strong>{item.best}%</strong>
                            </span>
                            <span>
                              Lowest:{" "}
                              <strong>{item.lowest}%</strong>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="analytics-section-card analytics-diagnostic-section">
                <div className="analytics-section-header">
                  <div>
                    <h3>Diagnostic Performance</h3>
                    <p>
                      See how your calibration scores vary across the
                      main diagnostic skill areas.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {diagnosticPerformance.length} area
                    {diagnosticPerformance.length === 1 ? "" : "s"}
                  </span>
                </div>

                {diagnosticPerformance.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      🧭
                    </div>
                    <strong>
                      Diagnostic performance will appear here
                    </strong>
                    <p>
                      Complete calibration exercises across different
                      diagnostic skill areas to build this profile.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-diagnostic-list">
                    {diagnosticPerformance.map((item) => (
                      <div
                        className="analytics-diagnostic-row"
                        key={item.skill}
                      >
                        <div className="analytics-diagnostic-skill">
                          <strong>{item.skill}</strong>
                          <span>
                            {item.attempts} attempt
                            {item.attempts === 1 ? "" : "s"}
                          </span>
                        </div>

                        <div className="analytics-diagnostic-details">
                          <div className="analytics-diagnostic-topline">
                            <strong>{item.average}% average</strong>
                            <span>
                              Best {item.best}% • Lowest {item.lowest}%
                            </span>
                          </div>

                          <div className="analytics-diagnostic-bar">
                            <div
                              className={`analytics-diagnostic-bar-fill analytics-diagnostic-bar-${getScoreClass(
                                item.average
                              )}`}
                              style={{
                                width: `${Math.min(
                                  Math.max(item.average, 0),
                                  100
                                )}%`,
                              }}
                            />
                          </div>

                          <div className="analytics-diagnostic-areas">
                            {item.diagnosticAreas.map((area) => (
                              <span key={area}>{area}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>

              <section className="analytics-section-card">
                <div className="analytics-section-header">
                  <div>
                    <h3>Recent Calibration Results</h3>
                    <p>
                      Your most recent Calibration Lab
                      attempts.
                    </p>
                  </div>

                  <span className="analytics-result-count">
                    {recentAttempts.length} result
                    {recentAttempts.length === 1 ? "" : "s"}
                  </span>
                </div>

                {recentAttempts.length === 0 ? (
                  <div className="analytics-empty-state">
                    <div className="analytics-empty-icon">
                      🎯
                    </div>
                    <strong>
                      No Calibration Lab attempts yet
                    </strong>
                    <p>
                      Complete a Calibration Lab exercise to
                      start building your teacher performance
                      record.
                    </p>
                  </div>
                ) : (
                  <div className="analytics-results-list">
                    {recentAttempts.map((attempt) => {
                      const score =
                        typeof attempt.matchPercentage ===
                        "number"
                          ? attempt.matchPercentage
                          : 0;

                      return (
                        <div
                          className="analytics-result-row"
                          key={attempt.id}
                        >
                          <div className="analytics-result-number">
                            <span>
                              {attempt.exerciseIndex}
                            </span>
                          </div>

                          <div className="analytics-result-main">
                            <div className="analytics-result-title">
                              <strong>
                                Exercise{" "}
                                {attempt.exerciseIndex}
                              </strong>

                              {attempt.cefrLevel && (
                                <span className="analytics-cefr-badge">
                                  {attempt.cefrLevel}
                                </span>
                              )}
                            </div>

                            <span className="analytics-result-topic">
                              {attempt.topicTitle ||
                                "Calibration Exercise"}
                            </span>

                            <span className="analytics-result-meta">
                              {attempt.questionTitle ||
                                "Read Aloud"}{" "}
                              •{" "}
                              {attempt.section ||
                                "Speaking"}
                            </span>
                          </div>

                          <div
                            className={`analytics-result-score analytics-result-score-${getScoreClass(
                              score
                            )}`}
                          >
                            <strong>{score}%</strong>
                            <span>
                              {attempt.tier ||
                                "Calibration Result"}
                            </span>
                          </div>

                          <button
                            type="button"
                            className="analytics-result-view-button"
                            onClick={() => setSelectedAttempt(attempt)}
                          >
                            View Details
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </section>
            </>
          )}
        </>
      )}

      {selectedAttempt && role === "teacher" && (
        <div
          className="analytics-detail-backdrop"
          role="presentation"
          onClick={() => setSelectedAttempt(null)}
        >
          <div
            className="analytics-detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="analytics-detail-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="analytics-detail-header">
              <div>
                <span className="analytics-detail-eyebrow">
                  Calibration Result
                </span>
                <h3 id="analytics-detail-title">
                  Exercise {selectedAttempt.exerciseIndex}
                </h3>
                <p>
                  {selectedAttempt.topicTitle ||
                    "Calibration Exercise"}
                </p>
              </div>

              <button
                type="button"
                className="analytics-detail-close"
                aria-label="Close calibration result details"
                onClick={() => setSelectedAttempt(null)}
              >
                ×
              </button>
            </div>

            <div className="analytics-detail-summary">
              <div>
                <span>Score</span>
                <strong>
                  {typeof selectedAttempt.matchPercentage ===
                  "number"
                    ? selectedAttempt.matchPercentage
                    : 0}%
                </strong>
              </div>
              <div>
                <span>Tier</span>
                <strong>
                  {selectedAttempt.tier ||
                    "Calibration Result"}
                </strong>
              </div>
              <div>
                <span>CEFR</span>
                <strong>
                  {selectedAttempt.cefrLevel || "—"}
                </strong>
              </div>
              <div>
                <span>Section</span>
                <strong>
                  {selectedAttempt.section || "Speaking"}
                </strong>
              </div>
            </div>

            <div className="analytics-detail-content">
              <div className="analytics-detail-section">
                <h4>Teacher's Submitted Feedback</h4>
                <div className="analytics-detail-text">
                  {selectedAttempt.teacherInput ||
                    "No teacher feedback was recorded."}
                </div>
              </div>

              {selectedAttempt.feedbackSummary && (
                <div className="analytics-detail-section">
                  <h4>AI Feedback Summary</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.feedbackSummary}
                  </div>
                </div>
              )}

              <div className="analytics-detail-columns">
                <div className="analytics-detail-section">
                  <h4>Matched Keywords</h4>
                  {selectedAttempt.matchedKeywords?.length ? (
                    <div className="analytics-detail-tags">
                      {selectedAttempt.matchedKeywords.map((keyword) => (
                        <span key={keyword}>{keyword}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="analytics-detail-muted">
                      No matched keywords recorded.
                    </p>
                  )}
                </div>

                <div className="analytics-detail-section">
                  <h4>Missing Keywords</h4>
                  {selectedAttempt.missingKeywords?.length ? (
                    <div className="analytics-detail-tags analytics-detail-tags-missing">
                      {selectedAttempt.missingKeywords.map((keyword) => (
                        <span key={keyword}>{keyword}</span>
                      ))}
                    </div>
                  ) : (
                    <p className="analytics-detail-muted">
                      No missing keywords recorded.
                    </p>
                  )}
                </div>
              </div>

              {selectedAttempt.coachingAdviceForTeacher && (
                <div className="analytics-detail-section analytics-detail-callout">
                  <h4>Coaching Advice for Teacher</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.coachingAdviceForTeacher}
                  </div>
                </div>
              )}

              {selectedAttempt.studentFacingScript && (
                <div className="analytics-detail-section">
                  <h4>Student-Facing Script</h4>
                  <div className="analytics-detail-text">
                    {selectedAttempt.studentFacingScript}
                  </div>
                </div>
              )}

              {(selectedAttempt.expertOverallScore ||
                selectedAttempt.expertFeedbackText ||
                selectedAttempt.expertAdvice) && (
                <div className="analytics-detail-section analytics-detail-expert">
                  <h4>Expert Evaluation</h4>
                  {selectedAttempt.expertOverallScore && (
                    <p>
                      <strong>Overall score:</strong>{" "}
                      {selectedAttempt.expertOverallScore}
                    </p>
                  )}
                  {selectedAttempt.expertFeedbackText && (
                    <div className="analytics-detail-text">
                      {selectedAttempt.expertFeedbackText}
                    </div>
                  )}
                  {selectedAttempt.expertAdvice && (
                    <div className="analytics-detail-text">
                      {selectedAttempt.expertAdvice}
                    </div>
                  )}
                </div>
              )}

              <div className="analytics-detail-footer">
                <span>
                  {selectedAttempt.questionTitle || "Read Aloud"}
                </span>
                <span>•</span>
                <span>
                  {selectedAttempt.timestamp
                    ? new Date(selectedAttempt.timestamp).toLocaleString()
                    : "Date not recorded"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

   <details className="analytics-section-card analytics-history-disclosure">
  <summary className="analytics-section-header">
    <div>
      <h3>Calibration History</h3>
      <p>
        Your complete Calibration Lab attempt history.
      </p>
    </div>

    <span className="analytics-history-toggle">
      View History ▾
    </span>
  </summary>

  {historyAttempts.length === 0 ? (
    <div className="analytics-empty-state">
      <div className="analytics-empty-icon">
        🗂️
      </div>
      <strong>No Calibration History yet</strong>
      <p>
        Complete Calibration Lab exercises to build your
        calibration history.
      </p>
    </div>
  ) : (
    <div className="analytics-results-list">
      {historyAttempts.map((attempt) => {
        const score =
          typeof attempt.matchPercentage === "number"
            ? attempt.matchPercentage
            : 0;

        const attemptDate = attempt.timestamp
          ? new Date(attempt.timestamp).toLocaleString()
          : "Date unavailable";

        return (
          <div
            className="analytics-result-row"
            key={attempt.id}
          >
            <div className="analytics-result-number">
              <span>{attempt.exerciseIndex}</span>
            </div>

            <div className="analytics-result-main">
              <div className="analytics-result-title">
                <strong>
                  Exercise {attempt.exerciseIndex}
                </strong>

                {attempt.cefrLevel && (
                  <span className="analytics-cefr-badge">
                    {attempt.cefrLevel}
                  </span>
                )}
              </div>

              <span className="analytics-result-topic">
                {attempt.topicTitle || "Calibration Exercise"}
              </span>

              <span className="analytics-result-meta">
                {attempt.questionTitle || "Read Aloud"} •{" "}
                {attempt.section || "Speaking"} • {attemptDate}
              </span>
            </div>

            <div
              className={`analytics-result-score analytics-result-score-${getScoreClass(
                score
              )}`}
            >
              <strong>{score}%</strong>
              <span>
                {attempt.tier || "Calibration Result"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  )}
</details>

      <div className="analytics-domain-header analytics-live-domain-header">
        <div className="analytics-domain-header-accent" aria-hidden="true" />
        <div>
          <span className="analytics-domain-label">Live Assessment</span>
          <h3>Live Evaluation</h3>
          <p>
            Track your calibration performance when assessing live student responses.
          </p>
        </div>
      </div>

      <section className="analytics-live-evaluation-section">
        <div className="analytics-section-card">
          <div className="analytics-section-header">
            <div>
              <h3>Live Evaluation Performance</h3>
              <p>
                Track your calibration accuracy when marking live
                student responses.
              </p>
            </div>

            <span className="analytics-result-count analytics-live-result-count">
              {liveEvaluationCompleted} evaluation
              {liveEvaluationCompleted === 1 ? "" : "s"}
            </span>
          </div>

          {liveEvaluationCompleted === 0 ? (
            <div className="analytics-empty-state">
              <div className="analytics-empty-icon">
                🎙️
              </div>
              <strong>
                No Live Evaluation attempts yet
              </strong>
              <p>
                Complete a Live Evaluation assessment to start
                building your teacher calibration performance.
              </p>
            </div>
          ) : (
            <div className="analytics-live-summary-grid">
              <div className="analytics-live-stat-card analytics-live-stat-completed">
                <div className="analytics-live-stat-icon">🎙️</div>
                <div className="analytics-live-stat-content">
                  <span>Evaluations Completed</span>
                  <strong>{liveEvaluationCompleted}</strong>
                  <small>Live Evaluation attempts</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-average">
                <div className="analytics-live-stat-icon">📊</div>
                <div className="analytics-live-stat-content">
                  <span>Average Calibration Score</span>
                  <strong>{liveEvaluationAverage}/100</strong>
                  <small>Overall teacher calibration</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-highest">
                <div className="analytics-live-stat-icon">🏆</div>
                <div className="analytics-live-stat-content">
                  <span>Highest Score</span>
                  <strong>{liveEvaluationHighest}/100</strong>
                  <small>Best calibration result</small>
                </div>
              </div>

              <div className="analytics-live-stat-card analytics-live-stat-lowest">
                <div className="analytics-live-stat-icon">📉</div>
                <div className="analytics-live-stat-content">
                  <span>Lowest Score</span>
                  <strong>{liveEvaluationLowest}/100</strong>
                  <small>Lowest calibration result</small>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="analytics-section-card analytics-live-trend-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Performance Trend</h3>
            <p>
              See your most recent Live Evaluation calibration scores over time.
            </p>
          </div>

          <span className="analytics-result-count">
            {liveEvaluationTrendAttempts.length} score
            {liveEvaluationTrendAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationTrendAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              📈
            </div>
            <strong>
              Your Live Evaluation trend will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments to build a
              calibration performance trend.
            </p>
          </div>
        ) : (
          <div className="analytics-live-trend-chart">
            <div className="analytics-live-trend-scale">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>

            <div className="analytics-live-trend-plot">
              <div className="analytics-live-trend-grid">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="analytics-live-trend-bars">
                {liveEvaluationTrendAttempts.map((attempt, index) => {
                  const score = Math.min(
                    Math.max(attempt.calibrationScore, 0),
                    100
                  );

                  const scoreClass =
                    score >= 85
                      ? "master"
                      : score >= 70
                        ? "proficient"
                        : score >= 50
                          ? "developing"
                          : "needs-calibration";

                  return (
                    <div
                      className="analytics-live-trend-point"
                      key={`${attempt.id}-${index}`}
                      title={`${attempt.questionTitle || "Live Evaluation"}: ${score}/100`}
                    >
                      <div
                        className={`analytics-live-trend-score analytics-live-trend-score-${scoreClass}`}
                      >
                        {score}
                      </div>

                      <div className="analytics-live-trend-bar-track">
                        <div
                          className={`analytics-live-trend-bar analytics-live-trend-bar-${scoreClass}`}
                          style={{ height: `${score}%` }}
                        />
                      </div>

                      <span className="analytics-live-trend-label">
                        {index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="analytics-live-trend-legend"
              aria-label="Live Evaluation calibration score ranges"
            >
              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-master" />
                <div>
                  <strong>85–100%</strong>
                  <span>PTE Master</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-proficient" />
                <div>
                  <strong>70–84%</strong>
                  <span>Proficient</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-developing" />
                <div>
                  <strong>50–69%</strong>
                  <span>Developing</span>
                </div>
              </div>

              <div className="analytics-live-trend-legend-item">
                <span className="analytics-live-trend-legend-dot analytics-live-trend-dot-needs-calibration" />
                <div>
                  <strong>0–49%</strong>
                  <span>Needs Calibration</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>


      <section className="analytics-section-card analytics-live-cefr-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Performance by CEFR Level</h3>
            <p>
              See how your Live Evaluation calibration performance
              changes across exercise difficulty levels.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationCefrPerformance.length} level
            {liveEvaluationCefrPerformance.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationCefrPerformance.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              📊
            </div>
            <strong>
              Live Evaluation CEFR performance will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments with CEFR-labelled
              exercises to build this performance profile.
            </p>
          </div>
        ) : (
          <div className="analytics-cefr-list">
            {liveEvaluationCefrPerformance.map((item) => (
              <div
                className="analytics-cefr-row"
                key={`live-${item.level}`}
              >
                <div className="analytics-cefr-level analytics-live-cefr-level">
                  <span>{item.level}</span>
                </div>

                <div className="analytics-cefr-details">
                  <div className="analytics-cefr-topline">
                    <strong>
                      {item.average}/100 average
                    </strong>
                    <span>
                      {item.attempts} evaluation
                      {item.attempts === 1 ? "" : "s"}
                    </span>
                  </div>

                  <div className="analytics-cefr-bar">
                    <div
                      className={`analytics-cefr-bar-fill analytics-live-cefr-bar-${getScoreClass(
                        item.average
                      )}`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-cefr-stats">
                    <span>
                      Best: <strong>{item.best}/100</strong>
                    </span>
                    <span>
                      Lowest: <strong>{item.lowest}/100</strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="analytics-section-card analytics-diagnostic-section">
        <div className="analytics-section-header">
          <div>
            <h3>Live Evaluation Diagnostic Performance</h3>
            <p>
              See how your Live Evaluation calibration scores vary across
              the main diagnostic skill areas.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationDiagnosticPerformance.length} area
            {liveEvaluationDiagnosticPerformance.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationDiagnosticPerformance.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🧭
            </div>
            <strong>
              Live Evaluation diagnostic performance will appear here
            </strong>
            <p>
              Complete Live Evaluation assessments across different
              diagnostic skill areas to build this profile.
            </p>
          </div>
        ) : (
          <div className="analytics-diagnostic-list">
            {liveEvaluationDiagnosticPerformance.map((item) => (
              <div
                className="analytics-diagnostic-row"
                key={`live-diagnostic-${item.skill}`}
              >
                <div className="analytics-diagnostic-skill">
                  <strong>{item.skill}</strong>
                  <span>
                    {item.attempts} evaluation
                    {item.attempts === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="analytics-diagnostic-details">
                  <div className="analytics-diagnostic-topline">
                    <strong>
                      {item.attempts > 0
                        ? `${item.average}/100 average`
                        : "No evaluations yet"}
                    </strong>
                    <span>
                      {item.attempts > 0
                        ? `Best ${item.best}/100 • Lowest ${item.lowest}/100`
                        : "Complete a Live Evaluation assessment to build this profile"}
                    </span>
                  </div>

                  <div className="analytics-diagnostic-bar">
                    <div
                      className={`analytics-diagnostic-bar-fill analytics-diagnostic-bar-${
                        item.attempts > 0
                          ? getScoreClass(item.average)
                          : "empty"
                      }`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-diagnostic-areas">
                    {item.diagnosticAreas.length > 0 ? (
                      item.diagnosticAreas.map((area) => (
                        <span key={`${item.skill}-${area}`}>{area}</span>
                      ))
                    ) : (
                      <span className="analytics-diagnostic-empty-label">
                        No diagnostic data yet
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>


      <section className="analytics-section-card analytics-live-results-section">
        <div className="analytics-section-header">
          <div>
            <h3>Recent Live Evaluation Results</h3>
            <p>
              Your most recent Live Evaluation calibration assessments.
            </p>
          </div>

          <span className="analytics-result-count analytics-live-result-count">
            {liveEvaluationRecentAttempts.length} result
            {liveEvaluationRecentAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {liveEvaluationRecentAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🎙️
            </div>
            <strong>No Live Evaluation results yet</strong>
            <p>
              Complete a Live Evaluation assessment to start building
              your recent results history.
            </p>
          </div>
        ) : (
          <div className="analytics-results-list">
            {liveEvaluationRecentAttempts.map((attempt) => {
              const score =
                typeof attempt.calibrationScore === "number"
                  ? Math.min(Math.max(attempt.calibrationScore, 0), 100)
                  : 0;

              const cefrLevel = getLiveEvaluationCefrLevel(attempt);
              const tier = getLiveEvaluationScoreTier(score);

              return (
                <div
                  className="analytics-result-row"
                  key={`live-result-${attempt.id}`}
                >
                  <div className="analytics-result-number">
                    <span>{attempt.exerciseIndex}</span>
                  </div>

                  <div className="analytics-result-main">
                    <div className="analytics-result-title">
                      <strong>
                        {attempt.questionTitle || "Live Evaluation"}
                      </strong>

                      {cefrLevel && (
                        <span className="analytics-cefr-badge">
                          {cefrLevel}
                        </span>
                      )}
                    </div>

                    <span className="analytics-result-topic">
                      {getLiveEvaluationTopicTitle(attempt)}
                    </span>

                    <span className="analytics-result-meta">
                      {attempt.trainingSkill || "Live Evaluation"} • {getLiveEvaluationAttemptDate(attempt)}
                    </span>
                  </div>

                  <div
                    className={`analytics-result-score analytics-result-score-${getScoreClass(
                      score
                    )}`}
                  >
                    <strong>{score}/100</strong>
                    <span>{tier}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <details className="analytics-section-card analytics-history-disclosure analytics-live-history-disclosure">
        <summary className="analytics-section-header">
          <div>
            <h3>Live Evaluation History</h3>
            <p>
              Your complete Live Evaluation calibration history.
            </p>
          </div>

          <span className="analytics-history-toggle">
            View History ▾
          </span>
        </summary>

        {liveEvaluationAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">
              🗂️
            </div>

            <strong>No Live Evaluation History yet</strong>

            <p>
              Complete Live Evaluation assessments to build your
              calibration history.
            </p>
          </div>
        ) : (
          <div className="analytics-results-list">
            {liveEvaluationAttempts.map((attempt) => {
              const score =
                typeof attempt.calibrationScore === "number"
                  ? Math.min(Math.max(attempt.calibrationScore, 0), 100)
                  : 0;

              const cefrLevel = getLiveEvaluationCefrLevel(attempt);
              const tier = getLiveEvaluationScoreTier(score);

              return (
                <div
                  className="analytics-result-row"
                  key={`live-history-${attempt.id}`}
                >
                  <div className="analytics-result-number">
                    <span>{attempt.exerciseIndex}</span>
                  </div>

                  <div className="analytics-result-main">
                    <div className="analytics-result-title">
                      <strong>
                        {attempt.questionTitle || "Live Evaluation"}
                      </strong>

                      {cefrLevel && (
                        <span className="analytics-cefr-badge">
                          {cefrLevel}
                        </span>
                      )}
                    </div>

                    <span className="analytics-result-topic">
                      {getLiveEvaluationTopicTitle(attempt)}
                    </span>

                    <span className="analytics-result-meta">
                      {attempt.trainingSkill || "Live Evaluation"} • {getLiveEvaluationAttemptDate(attempt)}
                    </span>
                  </div>

                  <div
                    className={`analytics-result-score analytics-result-score-${getScoreClass(
                      score
                    )}`}
                  >
                    <strong>{score}/100</strong>
                    <span>{tier}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </details>

      <div className="analytics-domain-header analytics-performance-domain-header">
        <div className="analytics-domain-header-accent" aria-hidden="true" />
        <div>
          <span className="analytics-domain-label">Development Overview</span>
          <h3>Teacher Performance Analytics</h3>
          <p>
            Track how your teacher calibration performance develops over time.
          </p>
        </div>
      </div>

      <section className="analytics-section-card analytics-performance-development-section">
        <div className="analytics-section-header">
          <div>
            <h3>Calibration Development</h3>
            <p>
              Follow the cumulative average of your Live Evaluation calibration scores as more evaluations are completed.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceAllAttempts.length} evaluation
            {teacherPerformanceAllAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceDevelopment.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">📈</div>
            <strong>Calibration development will appear here</strong>
            <p>
              Complete Live Evaluation assessments to begin building your teacher performance development record.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-summary-grid">
              <div
                className={`analytics-performance-summary-card analytics-performance-summary-${getScoreClass(
                  teacherPerformanceCurrentAverage
                )}`}
              >
                <span>Current cumulative average</span>
                <strong>{teacherPerformanceCurrentAverage}/100</strong>
                <small>Across the evaluations shown below</small>
              </div>

              <div
                className={`analytics-performance-summary-card analytics-performance-summary-${getScoreClass(
                  teacherPerformanceFirstScore
                )}`}
              >
                <span>First recorded score</span>
                <strong>{teacherPerformanceFirstScore}/100</strong>
                <small>Earliest evaluation in the development record</small>
              </div>

              <div
                className={`analytics-performance-summary-card analytics-performance-summary-${getScoreClass(
                  teacherPerformanceLatestScore
                )}`}
              >
                <span>Latest recorded score</span>
                <strong>{teacherPerformanceLatestScore}/100</strong>
                <small>Most recent evaluation in the development record</small>
              </div>

              <div className="analytics-performance-summary-card analytics-performance-summary-change">
                <span>First → latest score change</span>
                <strong>
                  {teacherPerformanceScoreChange === null
                    ? "—"
                    : `${teacherPerformanceScoreChange > 0 ? "+" : ""}${teacherPerformanceScoreChange}`}
                </strong>
                <small>{teacherPerformanceDevelopmentLabel}</small>
              </div>
            </div>

            <div className="analytics-performance-development-chart" aria-label="Cumulative calibration average development">
              <div className="analytics-performance-development-scale">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="analytics-performance-development-plot">
                <div className="analytics-performance-development-grid" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <div className="analytics-performance-development-bars">
                  {teacherPerformanceChartAttempts.map((attempt) => (
                    <div
                      className="analytics-performance-development-point"
                      key={`development-${attempt.id}-${attempt.developmentIndex}`}
                      title={`Evaluation ${attempt.developmentIndex}: cumulative average ${attempt.cumulativeAverage}/100`}
                    >
                      <div
                        className={`analytics-performance-development-score analytics-performance-development-score-${getScoreClass(
                          attempt.cumulativeAverage
                        )}`}
                      >
                        {attempt.cumulativeAverage}
                      </div>

                      <div className="analytics-performance-development-bar-track">
                        <div
                          className={`analytics-performance-development-bar analytics-performance-development-bar-${getScoreClass(
                            attempt.cumulativeAverage
                          )}`}
                          style={{
                            height: `${Math.min(
                              Math.max(attempt.cumulativeAverage, 0),
                              100
                            )}%`,
                          }}
                        />
                      </div>

                      <span className="analytics-performance-development-label">
                        {attempt.developmentIndex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="analytics-performance-development-footer">
              <span>
                <strong>What this shows:</strong> the cumulative average changes as additional Live Evaluation evidence is added.
              </span>
              <span>
                {teacherPerformanceDevelopment.length < 2
                  ? "A development change is shown after at least two evaluations."
                  : "This is a descriptive development measure, not a prediction of future performance."}
              </span>
            </div>
          </>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-components-section">
        <div className="analytics-section-header">
          <div>
            <h3>Calibration Component Performance</h3>
            <p>
              See how each saved component of your Teacher Calibration Score is performing across your Live Evaluation assessments.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceAllAttempts.length} evaluation
            {teacherPerformanceAllAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceAllAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">🧩</div>
            <strong>Component performance will appear here</strong>
            <p>
              Complete Live Evaluation assessments to build a component-level calibration profile.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-component-list">
              {teacherPerformanceComponentPerformance.map((component) => (
                <div
                  className="analytics-performance-component-row"
                  key={component.key}
                >
                  <div className="analytics-performance-component-heading">
                    <div>
                      <strong>{component.label}</strong>
                      <span>{component.description}</span>
                    </div>
                    <div className="analytics-performance-component-score">
                      <strong
                        className={`analytics-performance-component-score-value analytics-performance-component-score-${getScoreClass(
                          component.attainment
                        )}`}
                      >
                        {component.average}/{component.maxScore}
                      </strong>
                      <span>{component.attainment}% attainment</span>
                    </div>
                  </div>

                  <div className="analytics-performance-component-bar">
                    <div
                      className={`analytics-performance-component-bar-fill analytics-performance-component-bar-${getScoreClass(
                        component.attainment
                      )}`}
                      style={{ width: `${component.attainment}%` }}
                    />
                  </div>

                  <div className="analytics-performance-component-meta">
                    <span>Weight: {component.weight}</span>
                    <span>
                      Based on {component.evaluations} evaluation
                      {component.evaluations === 1 ? "" : "s"}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="analytics-performance-components-note">
              <strong>How to read this:</strong> each component is shown against its defined maximum. The attainment percentage is calculated within that component; it is not a separate overall score.
            </div>
          </>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-cefr-section">
        <div className="analytics-section-header">
          <div>
            <h3>Calibration Development by CEFR Level</h3>
            <p>
              See how your Live Evaluation calibration record develops across different CEFR difficulty levels.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceCefrPerformance.length} level
            {teacherPerformanceCefrPerformance.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceCefrPerformance.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">📊</div>
            <strong>CEFR development will appear here</strong>
            <p>
              Complete Live Evaluation assessments at different CEFR levels to build a developmental profile by difficulty.
            </p>
          </div>
        ) : (
          <div className="analytics-performance-cefr-list">
            {teacherPerformanceCefrPerformance.map((item) => (
              <div
                className="analytics-performance-cefr-row"
                key={`performance-cefr-${item.level}`}
              >
                <div className="analytics-performance-cefr-level">
                  <span>{item.level}</span>
                </div>

                <div className="analytics-performance-cefr-main">
                  <div className="analytics-performance-cefr-heading">
                    <div>
                      <strong
                        className={`analytics-performance-cefr-average analytics-performance-cefr-average-${getScoreClass(
                          item.average
                        )}`}
                      >
                        {item.average}/100 average
                      </strong>
                      <span>
                        {item.evaluations} evaluation
                        {item.evaluations === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="analytics-performance-cefr-change">
                      <span>First → latest</span>
                      <strong>
                        {item.change === null
                          ? "—"
                          : `${item.change > 0 ? "+" : ""}${item.change}`}
                      </strong>
                    </div>
                  </div>

                  <div className="analytics-performance-cefr-bar">
                    <div
                      className={`analytics-performance-cefr-bar-fill analytics-performance-cefr-bar-${getScoreClass(
                        item.average
                      )}`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-performance-cefr-meta">
                    <span>
                      First: <strong>{item.firstScore}/100</strong>
                    </span>
                    <span>
                      Latest: <strong>{item.latestScore}/100</strong>
                    </span>
                    <span>
                      {item.change === null
                        ? "Change available after 2+ evaluations"
                        : "Change based on first and latest evaluation"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-diagnostic-section">
        <div className="analytics-section-header">
          <div>
            <h3>Diagnostic Skill Development</h3>
            <p>
              See how your Live Evaluation calibration record develops across the three diagnostic skill areas.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceAllAttempts.length} evaluation
            {teacherPerformanceAllAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceAllAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">🧭</div>
            <strong>Diagnostic development will appear here</strong>
            <p>
              Complete Live Evaluation assessments to build a developmental profile across Content Accuracy, Oral Fluency, and Pronunciation.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-diagnostic-list">
              {teacherPerformanceDiagnosticDevelopment.map((skill) => (
                <div
                  className="analytics-performance-diagnostic-row"
                  key={skill.key}
                >
                  <div className="analytics-performance-diagnostic-heading">
                    <div>
                      <strong>{skill.label}</strong>
                      <span>{skill.description}</span>
                    </div>

                    <div className="analytics-performance-diagnostic-score">
                      <strong
                        className={`analytics-performance-diagnostic-score-value analytics-performance-diagnostic-score-${getScoreClass(
                          skill.average
                        )}`}
                      >
                        {skill.evaluations > 0
                          ? `${skill.average}/100`
                          : "—"}
                      </strong>
                      <span>
                        {skill.evaluations} evaluation
                        {skill.evaluations === 1 ? "" : "s"}
                      </span>
                    </div>
                  </div>

                  <div className="analytics-performance-diagnostic-bar">
                    {skill.evaluations > 0 && (
                      <div
                        className={`analytics-performance-diagnostic-bar-fill analytics-performance-diagnostic-bar-${getScoreClass(
                          skill.average
                        )}`}
                        style={{
                          width: `${Math.min(
                            Math.max(skill.average, 0),
                            100
                          )}%`,
                        }}
                      />
                    )}
                  </div>

                  <div className="analytics-performance-diagnostic-meta">
                    <span>
                      First: <strong>{skill.evaluations > 0 ? `${skill.firstScore}/100` : "—"}</strong>
                    </span>
                    <span>
                      Latest: <strong>{skill.evaluations > 0 ? `${skill.latestScore}/100` : "—"}</strong>
                    </span>
                    <span>
                      Change: <strong>
                        {skill.change === null
                          ? "—"
                          : `${skill.change > 0 ? "+" : ""}${skill.change}`}
                      </strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="analytics-performance-diagnostic-note">
              <strong>How to read this:</strong> this section describes the teacher's calibration record within each diagnostic skill. A first-to-latest change is shown only when that skill has at least two recorded evaluations.
            </div>
          </>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-exercise-section">
        <div className="analytics-section-header">
          <div>
            <h3>Calibration Progression by Exercise</h3>
            <p>
              See how recorded calibration scores are distributed across the different Live Evaluation exercises you have completed.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceExerciseProgression.length} exercise
            {teacherPerformanceExerciseProgression.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceExerciseProgressionVisible.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">🧩</div>
            <strong>Exercise progression will appear here</strong>
            <p>
              Complete Live Evaluation exercises with recorded calibration scores to build this progression view.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-exercise-list">
              {teacherPerformanceExerciseProgressionVisible.map((item) => (
                <div
                  className="analytics-performance-exercise-row"
                  key={`exercise-progression-${item.exerciseIndex}`}
                >
                  <div className="analytics-performance-exercise-heading">
                    <div className="analytics-performance-exercise-number">
                      <span>Exercise</span>
                      <strong>{item.exerciseIndex}</strong>
                    </div>

                    <div className="analytics-performance-exercise-title">
                      <strong>{item.topicTitle || "Live Evaluation Exercise"}</strong>
                      <span>
                        {item.cefrLevel || "CEFR not recorded"} • {item.attempts} evaluation
                        {item.attempts === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div
                      className={`analytics-performance-exercise-score analytics-performance-exercise-score-${getScoreClass(
                        item.average
                      )}`}
                    >
                      <strong>{item.average}/100</strong>
                      <span>{getLiveEvaluationScoreTier(item.average)}</span>
                    </div>
                  </div>

                  <div className="analytics-performance-exercise-bar">
                    <div
                      className={`analytics-performance-exercise-bar-fill analytics-performance-exercise-bar-${getScoreClass(
                        item.average
                      )}`}
                      style={{
                        width: `${Math.min(
                          Math.max(item.average, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="analytics-performance-exercise-meta">
                    <span>
                      First: <strong>{item.firstScore}/100</strong>
                    </span>
                    <span>
                      Latest: <strong>{item.latestScore}/100</strong>
                    </span>
                    <span>
                      Change: <strong>
                        {item.change === null
                          ? "—"
                          : `${item.change > 0 ? "+" : ""}${item.change}`}
                      </strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="analytics-performance-exercise-note">
              <strong>How to read this:</strong> each row represents a different Live Evaluation exercise. When an exercise has been evaluated more than once, its displayed score is the average of those recorded calibration scores. Exercise number is shown as an identifier; it is not treated as a measure of difficulty.
            </div>
          </>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-consistency-section">
        <div className="analytics-section-header">
          <div>
            <h3>Calibration Consistency</h3>
            <p>
              See how closely your Live Evaluation calibration scores cluster across completed evaluations.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceAllAttempts.length} evaluation
            {teacherPerformanceAllAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceAllAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">📏</div>
            <strong>Calibration consistency will appear here</strong>
            <p>
              Complete Live Evaluation assessments to build enough evidence to examine how closely your calibration scores cluster.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-consistency-summary-grid">
              <div className="analytics-performance-consistency-card">
                <span>Average score</span>
                <strong className={`analytics-performance-consistency-value-${getScoreClass(
                  Math.round(teacherPerformanceConsistencyAverage)
                )}`}>
                  {Math.round(teacherPerformanceConsistencyAverage)}/100
                </strong>
                <small>Mean across recorded evaluations</small>
              </div>

              <div className="analytics-performance-consistency-card">
                <span>Score range</span>
                <strong>{teacherPerformanceConsistencyRange} points</strong>
                <small>Lowest {teacherPerformanceConsistencyMinimum} → highest {teacherPerformanceConsistencyMaximum}</small>
              </div>

              <div className="analytics-performance-consistency-card">
                <span>Standard deviation</span>
                <strong>{teacherPerformanceConsistencyStandardDeviation.toFixed(1)} points</strong>
                <small>How widely scores vary around the average</small>
              </div>

              <div className="analytics-performance-consistency-card">
                <span>Average distance from mean</span>
                <strong>{teacherPerformanceConsistencyAverageDistance.toFixed(1)} points</strong>
                <small>Average absolute distance from the mean score</small>
              </div>
            </div>

            <div className="analytics-performance-consistency-sequence">
              <div className="analytics-performance-consistency-sequence-header">
                <div>
                  <strong>Evaluation score sequence</strong>
                  <span>Last 10 recorded evaluations, shown chronologically.</span>
                </div>
              </div>

              <div className="analytics-performance-consistency-bars">
                {teacherPerformanceConsistencyAttempts.map((attempt, index) => (
                  <div
                    className="analytics-performance-consistency-point"
                    key={`${attempt.id || attempt.questionId || "evaluation"}-${attempt.timestamp || index}`}
                  >
                    <strong
                      className={`analytics-performance-consistency-score analytics-performance-consistency-score-${getScoreClass(
                        attempt.calibrationScore
                      )}`}
                    >
                      {attempt.calibrationScore}
                    </strong>
                    <div className="analytics-performance-consistency-bar-track">
                      <div
                        className={`analytics-performance-consistency-bar analytics-performance-consistency-bar-${getScoreClass(
                          attempt.calibrationScore
                        )}`}
                        style={{
                          height: `${Math.min(
                            Math.max(attempt.calibrationScore, 0),
                            100
                          )}%`,
                        }}
                      />
                    </div>
                    <span>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="analytics-performance-consistency-note">
              <strong>How to read this:</strong> a smaller score spread means the recorded calibration scores are closer together; a larger spread means more variation between evaluations. This is a descriptive measure of the recorded scores, not a judgement about the teacher.
            </div>
          </>
        )}
      </section>

      <section className="analytics-section-card analytics-performance-profile-section">
        <div className="analytics-section-header">
          <div>
            <h3>Teacher Calibration Development Profile</h3>
            <p>
              A concise summary of the patterns currently visible in your recorded Live Evaluation calibration evidence.
            </p>
          </div>

          <span className="analytics-result-count analytics-performance-result-count">
            {teacherPerformanceAllAttempts.length} evaluation
            {teacherPerformanceAllAttempts.length === 1 ? "" : "s"}
          </span>
        </div>

        {teacherPerformanceAllAttempts.length === 0 ? (
          <div className="analytics-empty-state">
            <div className="analytics-empty-icon">🧭</div>
            <strong>Your development profile will appear here</strong>
            <p>
              Complete Live Evaluation assessments to build the recorded evidence used by this profile.
            </p>
          </div>
        ) : (
          <>
            <div className="analytics-performance-profile-grid">
              <article className="analytics-performance-profile-card">
                <span className="analytics-performance-profile-label">Overall recorded trajectory</span>
                <strong>{teacherPerformanceProfileTrajectoryText}</strong>
                <small>Describes the first and latest recorded calibration scores; it does not predict future performance.</small>
              </article>

              <article className="analytics-performance-profile-card">
                <span className="analytics-performance-profile-label">Calibration components</span>
                <strong>{teacherPerformanceProfileComponentText}</strong>
                <small>The component record is based on the saved calibration score breakdown for each Live Evaluation.</small>
              </article>

              <article className="analytics-performance-profile-card">
                <span className="analytics-performance-profile-label">CEFR coverage</span>
                <strong>{teacherPerformanceProfileCefrText}</strong>
                <small>CEFR is reported from the recorded Live Evaluation data and its existing fallback resolution.</small>
              </article>

              <article className="analytics-performance-profile-card">
                <span className="analytics-performance-profile-label">Diagnostic coverage</span>
                <strong>{teacherPerformanceProfileDiagnosticText}</strong>
                <small>Missing diagnostic evidence is shown as missing evidence, not as a zero score.</small>
              </article>

              <article className="analytics-performance-profile-card analytics-performance-profile-card-wide">
                <span className="analytics-performance-profile-label">Score consistency</span>
                <strong>{teacherPerformanceProfileConsistencyText}</strong>
                <small>Consistency measures describe the recorded score distribution only.</small>
              </article>
            </div>

            <div className="analytics-performance-profile-note">
              <strong>How to read this:</strong> this profile brings together the evidence already shown in the Teacher Performance Analytics sections above. It is descriptive rather than predictive, and it does not convert the record into a single overall rating.
            </div>
          </>
        )}
      </section>

      {role === "admin" && (
        <div className="analytics-role-card">
          <h3>Admin Analytics</h3>
          <p>
            Admin analytics will be available here.
          </p>
        </div>
      )}

      {role === "consultant" && (
        <div className="analytics-role-card">
          <h3>Consultant Analytics</h3>
          <p>
            Consultant analytics will be available here.
          </p>
        </div>
      )}
    </div>
  );
}