/**
 * Repeat Sentence Calibration Lab
 *
 * Teacher-calibration layer for Repeat Sentence.
 *
 * IMPORTANT:
 * - Stimulus text and audio are reused from the Student App Repeat Sentence bank.
 * - These are NOT ordinary student practice questions.
 * - Each case contains a controlled student-performance pattern and an expert
 *   diagnostic benchmark so the teacher must identify the primary teaching issue.
 *
 * Current authored block: Exercises 1–25 of 100.
 */

export const REPEAT_SENTENCE_CALIBRATION_EXERCISES = [
  {
    exerciseIndex: 1,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify a brief word repetition in an otherwise accurate Repeat Sentence response and distinguish the fluency disruption from a genuine Content omission or substitution.",
    sourceQuestionId: "38",
    promptText:
      "The speaker highlighted the need for greater collaboration between industry and academia.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-001-prompt-achernar.mp3",
    promptAudio:
      "The speaker highlighted the need for greater collaboration between industry and academia.",
    studentTranscript:
      "The speaker highlighted the need for greater greater collaboration between industry and academia.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "All target words are reproduced, but the word 'greater' is repeated once, creating a brief fluency disruption. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words from the sentence are present",
      "The word 'greater' is produced twice",
      "The repeated word creates a brief disruption in continuous delivery",
      "There is no meaningful target-word omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'greater' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'greater', creating a brief self-repetition. Content is substantially intact and Pronunciation remains clear, so the teacher should focus on the fluency disruption rather than inventing a Content error.",
    coachingAdvice:
      "Practise the phrase 'the need for greater collaboration' at a steady pace. Encourage the student to move forward after 'greater' without repeating the word.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Academic and Industry Collaboration",
    good: {
      transcript:
        "The speaker highlighted the need for greater collaboration between industry and academia.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate reproduction with clear pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The speaker highlighted the need for greater greater collaboration between industry and academia.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "All target words are present, but 'greater' is repeated once, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but a brief word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'greater'. Do not diagnose a Content omission or substitution.",
  },
  {
    exerciseIndex: 2,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Omission",
    learningObjective:
      "Determine whether an omitted content word changes the precision of the student's response and explain why the omission matters rather than simply reporting that a word is missing.",
    sourceQuestionId: "25",
    promptText:
      "The study found a strong correlation between sleep quality and academic performance.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-002-prompt-orus.mp3",
    promptAudio:
      "The study found a strong correlation between sleep quality and academic performance.",
    studentTranscript:
      "The study found a correlation between sleep quality and academic performance.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The response preserves the main relationship but omits the modifier 'strong'. Delivery is otherwise clear and continuous.",
    },
    diagnosticErrors: [
      "Content omission",
      "Loss of meaning precision",
    ],
    expertEvidence: [
      "The noun 'correlation' is reproduced correctly",
      "The relationship between sleep quality and academic performance is retained",
      "The adjective 'strong' is omitted",
      "The omission reduces the precision of the original claim because the strength of the relationship is no longer stated",
      "There is no evidence of a Fluency disruption or Pronunciation problem",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student retains the central relationship but omits 'strong', removing an important qualifier about the strength of the correlation. This is more than a simple missing-word count: the teacher should recognise the loss of semantic precision while avoiding an exaggerated claim that the whole idea was lost.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The response preserves the main idea and the two variables being related, but omits the qualifier 'strong'. That omission weakens the precision of the original statement because the degree of correlation is no longer specified. Fluency and Pronunciation are not the primary issues.",
    coachingAdvice:
      "Explain that the core message was retained, but the qualifier 'strong' carries useful meaning. Practise retaining descriptive modifiers, especially when they change the strength or precision of an academic claim.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Sleep Quality and Academic Performance",
    good: {
      transcript:
        "The study found a strong correlation between sleep quality and academic performance.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 12,
      characteristics:
        "Complete reproduction with accurate content, clear pronunciation and natural fluency.",
    },
    poor: {
      transcript:
        "The study found a correlation between sleep quality and academic performance.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The central relationship is retained, but the important qualifier 'strong' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "The central relationship is reproduced, but omission of 'strong' reduces Content precision. Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-content-omission",
        label: "Meaningful content omission",
        keyword: "Meaningful content omission",
      },
      {
        id: "lost-qualifier",
        label: "Lost qualifier",
        keyword: "Lost qualifier",
      },
      {
        id: "content-precision",
        label: "Loss of content precision",
        keyword: "Loss of content precision",
      },
    ],
    expertAdvice:
      "Do not treat every missing word as equally important. The key teaching point is that 'strong' changes the precision of the academic claim. The response is not a total Content failure.",
  },

  {
    exerciseIndex: 3,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Distinguish a plausible lexical substitution from a pronunciation issue and explain how the substituted word changes the meaning of the sentence.",
    sourceQuestionId: "32",
    promptText:
      "Researchers have identified several variables that may influence the outcome of the study.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-003-prompt-leda.mp3",
    promptAudio:
      "Researchers have identified several variables that may influence the outcome of the study.",
    studentTranscript:
      "Researchers have identified several values that may influence the outcome of the study.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The student produces a clearly audible lexical substitution: 'values' replaces 'variables'. The response is otherwise fluent and clearly pronounced.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing word substitution",
    ],
    expertEvidence: [
      "The sentence structure is reproduced accurately",
      "The word 'variables' is replaced by 'values'",
      "The substitution is not merely a minor pronunciation variation because 'values' is a different lexical item",
      "The changed word alters the intended academic meaning",
      "Delivery is otherwise continuous and pronunciation is clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. 'Values' is a real English word and may sound similar enough to tempt an overconfident teacher into calling this a pronunciation issue, but the student has produced a different lexical item. The substitution changes the meaning of the academic statement.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'values' instead of 'variables'. Because 'values' is a different word with a different meaning, this is a lexical substitution rather than simply a pronunciation error. The rest of the sentence is accurate and fluent.",
    coachingAdvice:
      "Have the student contrast 'variables' and 'values' clearly, then repeat the complete sentence. Emphasise that accurate Repeat Sentence performance requires retaining the intended academic vocabulary, not merely producing a similar-sounding word.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Program Effectiveness",
    good: {
      transcript:
        "Researchers have identified several variables that may influence the outcome of the study.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 13,
      characteristics:
        "Accurate academic vocabulary with clear pronunciation and continuous delivery.",
    },
    poor: {
      transcript:
        "Researchers have identified several values that may influence the outcome of the study.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "One different lexical item, 'values', replaces the target word 'variables'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate academic Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution affects Content while Fluency and general Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "academic-vocabulary",
        label: "Academic vocabulary accuracy",
        keyword: "Academic vocabulary accuracy",
      },
    ],
    expertAdvice:
      "Listen for the actual lexical item before diagnosing Pronunciation. 'Values' and 'variables' are different words. The primary teaching issue is Content accuracy through precise academic vocabulary.",
  },

  {
    exerciseIndex: 4,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Recognise when all or most target words are present but their order has been disrupted, and distinguish the resulting Content problem from a general Fluency complaint.",
    sourceQuestionId: "41",
    promptText:
      "The research team conducted a series of experiments to test the reliability of the new method.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-004-prompt-puck.mp3",
    promptAudio:
      "The research team conducted a series of experiments to test the reliability of the new method.",
    studentTranscript:
      "The research team conducted a series of experiments to test the new method of the reliability.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 15,
      characteristics:
        "The student reproduces the key vocabulary but disrupts the target word order at the end of the sentence, producing an ungrammatical phrase.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Syntactic sequence error",
    ],
    expertEvidence: [
      "The major content words are largely present",
      "The target sequence 'the reliability of the new method' is disrupted",
      "The student produces 'the new method of the reliability'",
      "The altered sequence makes the phrase ungrammatical and less precise",
      "The error is not primarily caused by hesitation or pronunciation",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student remembers the relevant vocabulary but does not reproduce the target sequence accurately. In Repeat Sentence, word order is part of accurate content reproduction, so the teacher should not dismiss this as a minor fluency issue simply because most words are present.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student retains the important vocabulary but changes the required sequence from 'the reliability of the new method' to 'the new method of the reliability'. Because the task requires accurate reproduction of the sentence structure, this is a meaningful word-order Content error. Fluency and Pronunciation are not the main problem.",
    coachingAdvice:
      "Practise the chunk 'the reliability of the new method' as a fixed language unit. Have the student repeat that phrase alone several times before reinserting it into the complete sentence.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Experimental Reliability",
    good: {
      transcript:
        "The research team conducted a series of experiments to test the reliability of the new method.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 15,
      characteristics:
        "Accurate word order with clear pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The research team conducted a series of experiments to test the new method of the reliability.",
      audioDuration: "Controlled calibration response",
      wordCount: 15,
      characteristics:
        "The major words are present, but their order is disrupted in the final phrase.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The key vocabulary is present but word order is disrupted in the final phrase. Fluency and Pronunciation remain generally clear.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "syntactic-sequence-error",
        label: "Syntactic sequence error",
        keyword: "Syntactic sequence error",
      },
      {
        id: "content-sequence",
        label: "Content sequence accuracy",
        keyword: "Content sequence accuracy",
      },
    ],
    expertAdvice:
      "Do not give full Content credit merely because the individual words are present. The target sequence matters. Focus on the chunk 'the reliability of the new method' rather than labelling the response as generally hesitant.",
  },

  {
    exerciseIndex: 5,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a meaning-changing lexical substitution in an otherwise fluent Repeat Sentence response and distinguish it from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "44",
    promptText:
      "The professor encouraged students to think critically about the ethical implications of their work.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-005-prompt-sulafat.mp3",
    promptAudio:
      "The professor encouraged students to think critically about the ethical implications of their work.",
    studentTranscript:
      "The professor encouraged students to think critically about the practical implications of their work.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 14,
      characteristics:
        "The student clearly substitutes 'practical' for the target word 'ethical'. The response is otherwise fluent and clearly pronounced.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'ethical'",
      "The student says 'practical' instead",
      "'Practical' is a different lexical item, not a pronunciation variation",
      "The substitution changes the intended meaning of the implications being discussed",
      "The remainder of the sentence is reproduced accurately",
      "Delivery remains continuous and Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'practical' for 'ethical', producing a different adjective that changes the intended meaning. The response is otherwise fluent and clearly pronounced, so Pronunciation and Oral Fluency are not the main problems.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'practical' instead of the target word 'ethical'. This is a lexical substitution because 'practical' is a different word with a different meaning. The rest of the sentence is accurate and fluent, so Pronunciation and Oral Fluency are not the primary issues.",
    coachingAdvice:
      "Contrast 'ethical implications' with the student's substituted phrase and practise retaining the exact target adjective. Emphasise that a clearly pronounced different word is a Content problem, not a Pronunciation problem.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Ethical Implications of Academic Work",
    good: {
      transcript:
        "The professor encouraged students to think critically about the ethical implications of their work.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 14,
      characteristics:
        "Accurate academic vocabulary with clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "The professor encouraged students to think critically about the practical implications of their work.",
      audioDuration: "Controlled calibration response",
      wordCount: 14,
      characteristics:
        "The student substitutes 'practical' for 'ethical' while maintaining otherwise clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution affects Content while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Listen for the actual lexical item before diagnosing Pronunciation. 'Practical' is a different word from 'ethical', so the primary teaching issue is Content accuracy.",
  },
  {
    exerciseIndex: 6,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Function-Word Omission",
    learningObjective:
      "Identify a small function-word omission without exaggerating its impact, and distinguish a Content accuracy issue from Fluency or Pronunciation problems.",
    sourceQuestionId: "46",
    promptText:
      "The university is committed to creating an inclusive environment for all members of the community.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-006-prompt-iapetus.mp3",
    promptAudio:
      "The university is committed to creating an inclusive environment for all members of the community.",
    studentTranscript:
      "The university is committed to creating an inclusive environment for all members of community.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 13,
      characteristics:
        "The student reproduces the sentence accurately apart from omitting the article 'the' before 'community'. Delivery is continuous and pronunciation is clear.",
    },
    diagnosticErrors: [
      "Function-word omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The sentence structure is otherwise accurately reproduced",
      "The article 'the' is omitted before 'community'",
      "The core meaning remains understandable",
      "The omission is still a Content accuracy issue because the target sentence has not been reproduced exactly",
      "There is no significant Fluency disruption",
      "Pronunciation is clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the function word 'the' before 'community'. This is a relatively small Content error: the main meaning remains intact, so the teacher should not describe it as a major semantic failure. Fluency and Pronunciation are not the problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the article 'the' before 'community'. This is a small function-word omission, so the main meaning remains clear, but the sentence is not reproduced exactly. The teacher should identify the Content error without exaggerating its impact. Fluency and Pronunciation remain clear.",
    coachingAdvice:
      "Point out the missing article without over-correcting the whole response. Practise the final chunk 'for all members of the community' until the function word is retained automatically.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Inclusive University Environment",
    good: {
      transcript:
        "The university is committed to creating an inclusive environment for all members of the community.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 14,
      characteristics:
        "Complete reproduction with accurate Content, clear Pronunciation and continuous delivery.",
    },
    poor: {
      transcript:
        "The university is committed to creating an inclusive environment for all members of community.",
      audioDuration: "Controlled calibration response",
      wordCount: 13,
      characteristics:
        "The sentence is substantially accurate, but the article 'the' is omitted before 'community'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content reproduction with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "A small function-word omission affects Content accuracy while the main meaning, Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "function-word-omission",
        label: "Function-word omission",
        keyword: "Function-word omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
      {
        id: "minor-content-deviation",
        label: "Minor content deviation",
        keyword: "Minor content deviation",
      },
    ],
    expertAdvice:
      "Identify the missing article 'the', but keep the diagnosis proportionate. The core meaning remains intact. Do not turn a small function-word omission into a major semantic error or diagnose Fluency or Pronunciation without evidence.",
  },

  {
    exerciseIndex: 7,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful lexical omission in an otherwise clear Repeat Sentence response and explain why the missing word reduces the specificity of the message.",
    sourceQuestionId: "47",
    promptText:
      "The workshop will introduce practical strategies for managing time more effectively.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-007-prompt-achernar.mp3",
    promptAudio:
      "The workshop will introduce practical strategies for managing time more effectively.",
    studentTranscript:
      "The workshop will introduce strategies for managing time more effectively.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student clearly omits the adjective 'practical'. The remainder of the sentence is reproduced continuously and clearly.",
    },
    diagnosticErrors: [
      "Meaningful content omission",
      "Loss of specificity",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word 'practical' is absent",
      "The remaining sentence structure is accurately reproduced",
      "The omission reduces the specificity of the strategies being introduced",
      "Delivery is continuous",
      "Pronunciation remains clear",
      "There is no primary Oral Fluency or Pronunciation problem",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'practical', which reduces the specificity of the statement by removing the description of the strategies. The rest of the response is clearly and continuously delivered.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'practical', which reduces the specificity of the statement by removing the description of the strategies. The remaining sentence is reproduced accurately, while Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise retaining the phrase 'practical strategies' as one unit. Then repeat the complete sentence while keeping the descriptive word 'practical'.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Time Management Strategies",
    good: {
      transcript:
        "The workshop will introduce practical strategies for managing time more effectively.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 12,
      characteristics:
        "Complete reproduction with clear pronunciation and smooth continuous delivery.",
    },
    poor: {
      transcript:
        "The workshop will introduce strategies for managing time more effectively.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The adjective 'practical' is omitted while the remainder of the sentence remains clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'practical' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-content-omission",
        label: "Meaningful content omission",
        keyword: "Meaningful content omission",
      },
      {
        id: "loss-of-specificity",
        label: "Loss of specificity",
        keyword: "Loss of specificity",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the student omits 'practical', which carries meaningful information about the type of strategies. Do not diagnose Oral Fluency or Pronunciation when the remaining response is clear and continuous.",
  },
  {
    exerciseIndex: 8,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful omitted word in an otherwise accurate Repeat Sentence response and distinguish the Content issue from Fluency or Pronunciation problems.",
    sourceQuestionId: "48",
    promptText:
      "The results indicate that environmental factors play a significant role in human behaviour.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-008-prompt-orus.mp3",
    promptAudio:
      "The results indicate that environmental factors play a significant role in human behaviour.",
    studentTranscript:
      "The results indicate that environmental factors play a role in human behaviour.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The student omits the meaningful word 'significant'. The remainder of the sentence is delivered clearly and continuously.",
    },
    diagnosticErrors: [
      "Meaningful content omission",
      "Loss of descriptive information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word 'significant' is omitted",
      "The main relationship between environmental factors and human behaviour remains",
      "The omission removes useful information about the degree of the role",
      "Delivery remains continuous",
      "Pronunciation remains clear",
      "The primary issue is Content",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'significant', reducing the precision of the statement because the degree of the environmental factors' role is no longer specified. Fluency and Pronunciation remain clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'significant', so the response no longer specifies that environmental factors play a significant role in human behaviour. The remaining sentence is clear and fluent, so Fluency and Pronunciation are not the primary issues.",
    coachingAdvice:
      "Practise retaining the phrase 'play a significant role' as one unit. Then repeat the full sentence while keeping the descriptive word 'significant'.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Environmental Factors and Human Behaviour",
    good: {
      transcript:
        "The results indicate that environmental factors play a significant role in human behaviour.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 14,
      characteristics:
        "Complete reproduction with clear pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The results indicate that environmental factors play a role in human behaviour.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The meaningful word 'significant' is omitted while the remainder of the sentence remains clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'significant' reduces Content precision while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-content-omission",
        label: "Meaningful content omission",
        keyword: "Meaningful content omission",
      },
      {
        id: "lost-descriptive-information",
        label: "Loss of descriptive information",
        keyword: "Loss of descriptive information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'significant' carries meaningful information about the degree of the role. Do not diagnose Fluency or Pronunciation when the response is clearly and continuously delivered.",
  },
  {
  exerciseIndex: 9,
  totalExercises: 100,
  difficulty: "Advanced",
  trainingSkill: "Content",
  diagnosticArea: "Lexical Substitution",
  learningObjective:
    "Identify a meaningful lexical substitution in a Repeat Sentence response and distinguish it from a pronunciation error when the substituted word is clearly pronounced.",

  promptText:
    "The speaker discussed several challenges facing the healthcare system in the coming decade.",

  promptAudioUrl:
    "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-009-prompt-leda.mp3",

  promptAudio:
    "The speaker discussed several challenges facing the healthcare system in the coming decade.",

  studentTranscript:
    "The speaker discussed several changes facing the healthcare system in the coming decade.",

  studentResponse: {
    audioDuration: "9.5 seconds",
    wordCount: 12,
    characteristics:
      "The student reproduces the sentence fluently and clearly but substitutes 'changes' for the target word 'challenges'. The substituted word is clearly pronounced and changes the intended meaning."
  },

  diagnosticErrors: [
    "Lexical substitution",
    "Content accuracy",
    "Meaning-changing word substitution"
  ],

  expertEvidence: [
    "The target word is 'challenges', but the student says 'changes'.",
    "The substituted word 'changes' is a different lexical item, not a pronunciation variant of 'challenges'.",
    "The substitution changes the meaning of the sentence.",
    "The remainder of the sentence is reproduced accurately.",
    "The student's delivery is fluent with no significant hesitation.",
    "Pronunciation of the substituted word is clear."
  ],

  expertDiagnosis:
    "Primary diagnosis: Content. The student substitutes 'changes' for 'challenges', creating a meaningful lexical substitution that alters the intended meaning. Pronunciation and Oral Fluency are not the main problems because the substituted word is clearly pronounced and the sentence is delivered continuously.",

  perfectCalibrationResponse:
    "Primary diagnosis: Content. The student says 'changes' instead of the target word 'challenges'. This is a meaningful lexical substitution because 'changes' is a different word and alters the intended meaning. The substituted word is clearly pronounced and the response remains fluent, so Pronunciation and Oral Fluency are not the main problems.",

  coachingAdvice:
    "When evaluating Repeat Sentence, distinguish a genuine lexical substitution from a pronunciation distortion. Here, 'changes' is a clearly pronounced different word from 'challenges', so the Content error should be prioritised.",

  cefrLevel: {
  level: "B2",
  name: "Upper-Intermediate",
  badgeColor: "bg-purple-100 text-purple-700 border border-purple-200",
},

  topicTitle: "Healthcare System Challenges",

  sourceQuestionId: "49",

  good: {
    transcript:
      "The speaker discussed several challenges facing the healthcare system in the coming decade.",
    audioDuration: "8.8 seconds",
    wordCount: 12,
    characteristics:
      "Accurate reproduction with clear Pronunciation and smooth Oral Fluency."
  },

  poor: {
    transcript:
      "The speaker discussed several changes facing the healthcare system in the coming decade.",
    audioDuration: "9.5 seconds",
    wordCount: 12,
    characteristics:
      "The student clearly substitutes 'changes' for 'challenges' while maintaining otherwise fluent delivery."
  },

  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Accurate Content with clear Pronunciation and smooth Oral Fluency."
  },

  poorScore: {
    content: 3,
    fluency: 5,
    pronunciation: 5,
    overall: "78 / 90",
    breakdownText:
      "A meaningful lexical substitution changes 'challenges' to 'changes', reducing Content accuracy while Pronunciation and Oral Fluency remain clear."
  },

  errorChecklist: [
    {
      id: "lexical-substitution",
      label: "Lexical substitution",
      keyword: "Lexical substitution"
    },
    {
      id: "meaning-changing-word",
      label: "Meaning-changing word",
      keyword: "Meaning-changing word"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    }
  ],

  expertAdvice:
    "Prioritise Content because 'changes' replaces the target word 'challenges' and changes the intended meaning. Do not label this as a Pronunciation error when the substituted word is clearly pronounced. Oral Fluency remains strong."
},

  {
    exerciseIndex: 10,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Recognise when an omitted phrase removes useful information from an otherwise accurate response, and distinguish a meaningful Content omission from a minor delivery issue.",
    sourceQuestionId: "50",
    promptText:
      "The course aims to develop students’ ability to analyze complex information with confidence.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-010-prompt-puck.mp3",
    promptAudio:
      "The course aims to develop students’ ability to analyze complex information with confidence.",
    studentTranscript:
      "The course aims to develop students’ ability to analyze complex information.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student reproduces the main proposition but omits the phrase 'with confidence'. Delivery is clear and continuous.",
    },
    diagnosticErrors: [
      "Phrase omission",
      "Loss of meaningful detail",
    ],
    expertEvidence: [
      "The main proposition about developing students' ability is retained",
      "The phrase 'with confidence' is omitted",
      "The omission removes an intended outcome or quality of the students' ability",
      "The response remains understandable",
      "Delivery is continuous and pronunciation is clear",
      "The primary issue is Content rather than Fluency or Pronunciation",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student retains the central proposition but omits 'with confidence', removing a meaningful part of the intended outcome. This should be recognised as a Content omission without claiming that the entire sentence meaning has been lost.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student reproduces the main proposition but omits the phrase 'with confidence'. This removes a meaningful detail about the quality of the ability being developed. The response remains understandable and fluent, so the teacher should focus on the Content omission rather than diagnosing Fluency or Pronunciation.",
    coachingAdvice:
      "Practise retaining the complete final chunk 'analyze complex information with confidence'. Explain that the omitted phrase is not merely extra wording because it describes an intended quality of the students' ability.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Complex Information Analysis",
    good: {
      transcript:
        "The course aims to develop students’ ability to analyze complex information with confidence.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 14,
      characteristics:
        "Complete reproduction with accurate Content, clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "The course aims to develop students’ ability to analyze complex information.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The central proposition is retained, but the meaningful phrase 'with confidence' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of the meaningful phrase 'with confidence' reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "lost-meaningful-detail",
        label: "Loss of meaningful detail",
        keyword: "Loss of meaningful detail",
      },
      {
        id: "content-precision",
        label: "Content precision",
        keyword: "Content precision",
      },
    ],
    expertAdvice:
      "Do not treat 'with confidence' as disposable wording. It contributes meaningful information about the intended outcome. The main proposition remains intact, so keep the diagnosis proportionate: Content omission, not total Content failure.",
  },

  {
    exerciseIndex: 11,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Word Omission",

    learningObjective:
      "Identify a meaningful omitted word in a Repeat Sentence response and distinguish a Content error from Pronunciation or Oral Fluency problems when the rest of the response is clear and continuous.",

    sourceQuestionId: "51",

    promptText:
      "The library will close early during the holiday period.",

    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-011-prompt-sulafat.mp3",

    promptAudio:
      "The library will close early during the holiday period.",

    studentTranscript:
      "The library will close during the holiday period.",

    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student reproduces the sentence clearly and continuously but omits the meaningful word 'early'. Pronunciation remains clear and there is no significant fluency disruption."
    },

    diagnosticErrors: [
      "Meaningful word omission",
      "Content accuracy",
      "Omission of key modifier"
    ],

    expertEvidence: [
      "The target sentence contains the word 'early'",
      "The student omits 'early'",
      "The remaining sentence structure is accurately reproduced",
      "The omission changes the specific meaning of when the library will close",
      "Pronunciation remains clear",
      "Delivery remains continuous and appropriately paced",
      "The primary issue is Content rather than Pronunciation or Oral Fluency"
    ],

    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the word 'early', which removes an important detail from the target sentence. The remainder of the sentence is reproduced accurately with clear pronunciation and continuous delivery.",

    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'early', which is a meaningful part of the target message. Pronunciation and Oral Fluency remain clear, so the teacher should focus on the missing word rather than diagnosing a delivery problem.",

    coachingAdvice:
      "Ask the student to notice and retain the modifier 'early'. Practise the phrase 'will close early' as one unit, then repeat the complete sentence.",

    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse."
    },

    topicTitle: "Library Holiday Hours",

    good: {
      transcript:
        "The library will close early during the holiday period.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate reproduction with clear pronunciation and continuous delivery."
    },

    poor: {
      transcript:
        "The library will close during the holiday period.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The meaningful modifier 'early' is omitted while the rest of the sentence remains accurate and fluent."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency."
    },

    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaningful word omission affects Content while Pronunciation and Oral Fluency remain clear."
    },

    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "key-modifier-omission",
        label: "Key modifier omitted",
        keyword: "Key modifier omitted"
      }
    ],

    expertAdvice:
      "Prioritise Content because the student omits the target word 'early'. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clearly and continuously delivered."
  },

  {
    exerciseIndex: 12,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",

    learningObjective:
      "Recognise an audible word repetition within an otherwise accurate Repeat Sentence response and distinguish a fluency disruption from a genuine Content omission or substitution.",

    sourceQuestionId: "52",

    promptText:
      "Please submit your assignment before the end of the week.",

    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-012-prompt-iapetus.mp3",

    promptAudio:
      "Please submit your assignment before the end of the week.",

    studentTranscript:
      "Please submit your assignment before before the end of the week.",

    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are reproduced, but the word 'before' is repeated once, creating a brief fluency disruption. Pronunciation remains clear."
    },

    diagnosticErrors: [
      "Word repetition",
      "Interrupted fluency",
      "Self-repetition"
    ],

    expertEvidence: [
      "All target words from the sentence are present",
      "The word 'before' is produced twice",
      "The repeated word creates a brief disruption in continuous delivery",
      "There is no meaningful target-word omission",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency rather than Content"
    ],

    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'before' once, creating a brief self-repetition. The response should not be treated as a major Content failure because the target sentence remains substantially complete.",

    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'before', creating a brief self-repetition. Content is substantially intact and Pronunciation remains clear, so the teacher should focus on the fluency disruption rather than inventing a Content omission.",

    coachingAdvice:
      "Practise the phrase 'assignment before the end' at a steady pace. Encourage the student to continue forward after 'before' rather than repeating the word.",

    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse."
    },

    topicTitle: "Assignment Submission Deadline",

    good: {
      transcript:
        "Please submit your assignment before the end of the week.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate reproduction with natural continuous delivery and clear pronunciation."
    },

    poor: {
      transcript:
        "Please submit your assignment before before the end of the week.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but 'before' is repeated once, creating a brief fluency disruption."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency."
    },

    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but a brief word repetition disrupts Oral Fluency."
    },

    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition"
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption"
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition"
      }
    ],

    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'before'. Do not incorrectly convert the repetition into a Content omission."
  },

  {
    exerciseIndex: 13,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Phrase Omission",

    learningObjective:
      "Identify the omission of a meaningful phrase in a Repeat Sentence response and distinguish a partial-content problem from general Pronunciation or Oral Fluency weakness.",

    sourceQuestionId: "53",

    promptText:
      "The lecture tomorrow will start ten minutes later than usual.",

    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-013-prompt-achernar.mp3",

    promptAudio:
      "The lecture tomorrow will start ten minutes later than usual.",

    studentTranscript:
      "The lecture tomorrow will start later than usual.",

    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student reproduces the sentence clearly but omits the specific phrase 'ten minutes'. Pronunciation remains clear and delivery is continuous."
    },

    diagnosticErrors: [
      "Meaningful phrase omission",
      "Specific-detail omission",
      "Content accuracy"
    ],

    expertEvidence: [
      "The target contains the phrase 'ten minutes'",
      "The student omits 'ten minutes'",
      "The remaining sentence structure is accurately reproduced",
      "The omission removes a specific quantitative detail",
      "Pronunciation remains clear",
      "Delivery remains continuous",
      "The primary issue is Content"
    ],

    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the phrase 'ten minutes', removing a specific and meaningful detail from the target sentence. The rest of the response is clearly and continuously delivered.",

    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the specific phrase 'ten minutes'. The sentence remains understandable, but the quantitative detail is missing. Pronunciation and Oral Fluency remain strong, so the teacher should identify the specific Content loss.",

    coachingAdvice:
      "Practise retaining the complete time expression 'ten minutes later than usual'. Have the student repeat that chunk before returning to the full sentence.",

    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse."
    },

    topicTitle: "Lecture Schedule Change",

    good: {
      transcript:
        "The lecture tomorrow will start ten minutes later than usual.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete reproduction with accurate detail, clear pronunciation and continuous delivery."
    },

    poor: {
      transcript:
        "The lecture tomorrow will start later than usual.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The specific phrase 'ten minutes' is omitted while the remainder of the sentence is reproduced accurately."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency."
    },

    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of the specific phrase 'ten minutes' reduces Content accuracy while Fluency and Pronunciation remain clear."
    },

    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission"
      },
      {
        id: "specific-detail-omission",
        label: "Specific detail omitted",
        keyword: "Specific detail omitted"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],

    expertAdvice:
      "Focus on Content because the student omits the specific phrase 'ten minutes'. Do not overlook a meaningful quantitative detail simply because the overall sentence remains understandable."
  },

  {
    exerciseIndex: 14,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaning-Changing Modal Substitution",

    learningObjective:
      "Recognise when a substituted modal verb changes the strength of the original statement and distinguish a Content error from Pronunciation or Oral Fluency problems.",

    sourceQuestionId: "54",

    promptText:
      "Students must wear their ID cards at all times on campus.",

    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-014-prompt-orus.mp3",

    promptAudio:
      "Students must wear their ID cards at all times on campus.",

    studentTranscript:
      "Students should wear their ID cards at all times on campus.",

    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student produces a fluent and clearly pronounced response but substitutes 'should' for the target word 'must', weakening the obligation expressed by the sentence."
    },

    diagnosticErrors: [
      "Modal verb substitution",
      "Meaning-changing substitution",
      "Content accuracy"
    ],

    expertEvidence: [
      "The target sentence uses the modal verb 'must'",
      "The student says 'should'",
      "'Should' and 'must' are different lexical items",
      "The substitution changes the strength of the obligation",
      "The remainder of the sentence is accurately reproduced",
      "Pronunciation remains clear",
      "Delivery remains continuous",
      "The primary issue is Content"
    ],

    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'should' for 'must'. Although the sentence remains understandable, the modal substitution changes the strength of the obligation expressed in the target sentence. Pronunciation and Oral Fluency remain strong.",

    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'should' instead of 'must'. These are different modal verbs and the substitution changes the strength of the obligation. The rest of the sentence is accurate and fluent, so Pronunciation and Oral Fluency are not the primary concerns.",

    coachingAdvice:
      "Contrast 'must' and 'should' with the student and practise the exact phrase 'students must wear'. Emphasise retaining the original modal because it carries important meaning.",

    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse."
    },

    topicTitle: "Campus Identification Requirements",

    good: {
      transcript:
        "Students must wear their ID cards at all times on campus.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with precise modal meaning, clear pronunciation and continuous delivery."
    },

    poor: {
      transcript:
        "Students should wear their ID cards at all times on campus.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The modal verb 'must' is replaced by 'should', changing the strength of the requirement while the remainder remains accurate."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency."
    },

    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing modal substitution affects Content while Pronunciation and Oral Fluency remain clear."
    },

    errorChecklist: [
      {
        id: "modal-substitution",
        label: "Modal verb substitution",
        keyword: "Modal verb substitution"
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],

    expertAdvice:
      "Prioritise Content because 'should' replaces the target modal 'must' and changes the strength of the requirement. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and the delivery is continuous."
  },

  {
    exerciseIndex: 15,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",

    learningObjective:
      "Identify an inserted filler within an otherwise complete Repeat Sentence response and distinguish the resulting fluency disruption from a Content omission or Pronunciation problem.",

    sourceQuestionId: "55",

    promptText:
      "The cafeteria offers vegetarian meals every day.",

    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-015-prompt-leda.mp3",

    promptAudio:
      "The cafeteria offers vegetarian meals every day.",

    studentTranscript:
      "The cafeteria offers vegetarian meals every, um, day.",

    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "All target words are reproduced accurately, but the inserted filler 'um' interrupts the natural phrase 'every day'. Pronunciation remains clear."
    },

    diagnosticErrors: [
      "Filler insertion",
      "Fluency disruption",
      "Interrupted phrase grouping"
    ],

    expertEvidence: [
      "All target words from the sentence are present",
      "The filler 'um' is inserted between 'every' and 'day'",
      "The filler interrupts a natural two-word phrase",
      "There is no target-word omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency"
    ],

    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but inserts the filler 'um' inside the phrase 'every day'. This interrupts the natural delivery without creating a meaningful Content omission.",

    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student inserts 'um' inside the phrase 'every day'. Content is complete and Pronunciation remains clear, so the teacher should focus on the filler and interrupted phrase grouping.",

    coachingAdvice:
      "Practise 'every day' as one connected phrase. Encourage the student to continue directly from 'every' to 'day' without inserting a filler.",

    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse."
    },

    topicTitle: "Cafeteria Vegetarian Meals",

    good: {
      transcript:
        "The cafeteria offers vegetarian meals every day.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 7,
      characteristics:
        "Complete reproduction with natural phrase grouping, clear pronunciation and continuous delivery."
    },

    poor: {
      transcript:
        "The cafeteria offers vegetarian meals every, um, day.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "All target words are present, but the filler 'um' interrupts the phrase 'every day'."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency."
    },

    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but an inserted filler interrupts Oral Fluency within the phrase 'every day'."
    },

    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion"
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption"
      },
      {
        id: "interrupted-phrase",
        label: "Interrupted phrase grouping",
        keyword: "Interrupted phrase grouping"
      }
    ],

    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the inserted filler 'um' inside 'every day'. Do not diagnose Content when the target sentence itself remains complete."
  },

   {
    exerciseIndex: 16,
    totalExercises: 100,
    difficulty: "Upper Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Function-Word Insertion",
    learningObjective:
      "Identify an unnecessary function-word insertion in a Repeat Sentence response and distinguish the Content issue from Pronunciation and Oral Fluency.",
    sourceQuestionId: "56",
    promptText:
      "Your timetable will be available online next Monday.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-016-prompt-puck.mp3",
    promptAudio:
      "Your timetable will be available online next Monday.",
    studentTranscript:
      "Your timetable will be available online on next Monday.",
    studentResponse: {
      audioDuration: "8.5 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but the student inserts the unnecessary preposition 'on' before 'next Monday'."
    },
    diagnosticErrors: [
      "Function-word insertion",
      "Content accuracy",
      "Unnecessary preposition"
    ],
    expertEvidence: [
      "The target says 'available online next Monday'",
      "The student inserts 'on' before 'next Monday'",
      "The inserted word is not present in the target sentence",
      "The remainder of the sentence is accurately reproduced",
      "Pronunciation remains clear",
      "Delivery remains continuous and appropriately paced"
    ],
    expertDiagnosis:
      "The primary issue is Content accuracy because the student inserts the unnecessary function word 'on' before 'next Monday'. The remainder of the sentence is accurate, with clear Pronunciation and continuous Oral Fluency. The teacher should identify the localized word insertion rather than diagnosing a delivery problem.",
    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they insert the unnecessary word 'on' before 'next Monday'. The rest of the sentence is accurately reproduced with clear Pronunciation and smooth Oral Fluency. The teacher should focus on the added function word rather than diagnosing Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Focus on reproducing the exact target wording. Pay particular attention to short function words and avoid adding unnecessary prepositions before time expressions.",
    cefrLevel: "B2",
    topicTitle: "Online Timetable Availability",
    good: {
      transcript:
        "Your timetable will be available online next Monday.",
      audioDuration: "7.5 seconds",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth, continuous delivery."
    },
    poor: {
      transcript:
        "Your timetable will be available online on next Monday.",
      audioDuration: "8.5 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but an unnecessary function word is inserted before the final time expression."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency."
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A localized function-word insertion affects Content accuracy while Pronunciation and Oral Fluency remain strong."
    },
    errorChecklist: [
      {
        id: "function-word-insertion",
        label: "Function-word insertion",
        keyword: "Function-word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "unnecessary-preposition",
        label: "Unnecessary preposition",
        keyword: "Unnecessary preposition"
      }
    ],
    expertAdvice:
      "Focus specifically on the inserted word 'on'. The target uses 'next Monday' without a preposition. Do not diagnose Pronunciation or Oral Fluency because the response remains clear and continuous."
  },

  {
    exerciseIndex: 17,
    totalExercises: 100,
    difficulty: "Upper Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Meaning-Changing Preposition Substitution",
    learningObjective:
      "Identify a meaning-changing preposition substitution in a Repeat Sentence response and distinguish it from a minor wording variation.",
    sourceQuestionId: "57",
    promptText:
      "The teacher will explain the new topic after the break.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-017-prompt-sulafat.mp3",
    promptAudio:
      "The teacher will explain the new topic after the break.",
    studentTranscript:
      "The teacher will explain the new topic before the break.",
    studentResponse: {
      audioDuration: "8.5 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but the student changes the temporal relationship from 'after' to 'before'."
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Preposition substitution",
      "Content accuracy"
    ],
    expertEvidence: [
      "The target uses the time relationship 'after the break'",
      "The student says 'before the break'",
      "The substitution changes the timing of the teacher's action",
      "All other target words are reproduced accurately",
      "Pronunciation remains clear",
      "Delivery remains continuous"
    ],
    expertDiagnosis:
      "The primary issue is Content accuracy because 'before' replaces the target word 'after', reversing the intended time relationship. This is a meaning-changing substitution rather than a minor lexical variation. Pronunciation and Oral Fluency remain strong.",
    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they say 'before' instead of 'after', which reverses when the teacher will explain the topic. The rest of the sentence is accurate and clearly delivered, so Pronunciation and Oral Fluency are not primary concerns.",
    coachingAdvice:
      "Pay close attention to relationship words such as 'before' and 'after'. These short words can carry important meaning and should be reproduced exactly.",
    cefrLevel: "B2",
    topicTitle: "Lecture Timing",
    good: {
      transcript:
        "The teacher will explain the new topic after the break.",
      audioDuration: "8.0 seconds",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency."
    },
    poor: {
      transcript:
        "The teacher will explain the new topic before the break.",
      audioDuration: "8.0 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but the temporal relationship is reversed by replacing 'after' with 'before'."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with precise temporal wording, clear Pronunciation, and smooth Oral Fluency."
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A meaning-changing preposition substitution affects Content accuracy while Pronunciation and Oral Fluency remain strong."
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution"
      },
      {
        id: "preposition-substitution",
        label: "Preposition substitution",
        keyword: "Preposition substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],
    expertAdvice:
      "Prioritise Content because 'before' replaces 'after' and changes the temporal meaning of the sentence. Do not treat this as Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery is continuous."
  },

  {
    exerciseIndex: 18,
    totalExercises: 100,
    difficulty: "Upper Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful omitted word in an otherwise accurate Repeat Sentence response and distinguish the Content issue from Fluency or Pronunciation problems.",
    sourceQuestionId: "58",
    promptText:
      "Please check your email for important course updates.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-018-prompt-iapetus.mp3",
    promptAudio:
      "Please check your email for important course updates.",
    studentTranscript:
      "Please check your email for course updates.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student clearly omits the meaningful word 'important'. The remainder of the sentence is reproduced continuously and clearly.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of descriptive information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word 'important' is omitted",
      "The main purpose of checking the email remains clear",
      "The omission removes useful information about the course updates",
      "The remaining sentence structure is accurately reproduced",
      "Delivery remains continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'important', reducing the specificity of the sentence because the response no longer describes the course updates as important. Fluency and Pronunciation remain clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the meaningful word 'important', so the response no longer specifies that the course updates are important. The remaining sentence is clear and fluent, so Fluency and Pronunciation are not the primary issues.",
    coachingAdvice:
      "Practise retaining the phrase 'important course updates' as one unit. Emphasise that descriptive words can carry useful meaning even when the main proposition remains understandable.",
    cefrLevel: "B2",
    topicTitle: "Course Email Updates",
    good: {
      transcript:
        "Please check your email for important course updates.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency."
    },
    poor: {
      transcript:
        "Please check your email for course updates.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The meaningful word 'important' is omitted while the remainder of the sentence remains clear and fluent."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency."
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'important' reduces Content specificity while Fluency and Pronunciation remain clear."
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission"
      },
      {
        id: "lost-descriptive-information",
        label: "Loss of descriptive information",
        keyword: "Loss of descriptive information"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],
    expertAdvice:
      "Prioritise Content because 'important' carries meaningful descriptive information. Do not diagnose Fluency or Pronunciation when the remaining response is clearly and continuously delivered."
  },
  {
    exerciseIndex: 19,
    totalExercises: 100,
    difficulty: "Upper Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Adjective Precision",
    learningObjective:
      "Identify a localized adjective substitution that changes a key descriptive detail while distinguishing it from general lexical or pronunciation problems.",
    sourceQuestionId: "59",
    promptText:
      "The meeting has been moved to a larger room.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-019-prompt-achernar.mp3",
    promptAudio:
      "The meeting has been moved to a larger room.",
    studentTranscript:
      "The meeting has been moved to a smaller room.",
    studentResponse: {
      audioDuration: "8.0 seconds",
      wordCount: 9,
      characteristics:
        "Clear and continuous delivery, but the student substitutes 'smaller' for the target adjective 'larger'."
    },
    diagnosticErrors: [
      "Meaning-changing adjective substitution",
      "Content accuracy",
      "Descriptive detail substitution"
    ],
    expertEvidence: [
      "The target specifies a 'larger room'",
      "The student says 'smaller room'",
      "The adjective substitution reverses the intended size relationship",
      "The remainder of the sentence is accurately reproduced",
      "Pronunciation is clear",
      "Delivery remains continuous and appropriately paced"
    ],
    expertDiagnosis:
      "The primary issue is Content accuracy because 'smaller' replaces 'larger' and reverses the key descriptive detail about the room. The rest of the sentence is accurate, with clear Pronunciation and continuous Oral Fluency.",
    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because 'smaller' replaces the target word 'larger', reversing the described size of the room. The remainder is accurately reproduced with clear Pronunciation and smooth Oral Fluency.",
    coachingAdvice:
      "Focus on retaining precise descriptive words. Adjectives such as 'larger' and 'smaller' can carry important meaning even when the surrounding sentence is reproduced accurately.",
    cefrLevel: "B2",
    topicTitle: "Meeting Room Change",
    good: {
      transcript:
        "The meeting has been moved to a larger room.",
      audioDuration: "7.5 seconds",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency."
    },
    poor: {
      transcript:
        "The meeting has been moved to a smaller room.",
      audioDuration: "7.5 seconds",
      wordCount: 9,
      characteristics:
        "Clear and continuous delivery, but the key descriptive adjective is replaced with its opposite."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with precise descriptive wording, clear Pronunciation, and smooth Oral Fluency."
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A meaning-changing adjective substitution affects Content accuracy while Pronunciation and Oral Fluency remain strong."
    },
    errorChecklist: [
      {
        id: "meaning-changing-adjective",
        label: "Meaning-changing adjective",
        keyword: "Meaning-changing adjective"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "descriptive-detail-substitution",
        label: "Descriptive detail substitution",
        keyword: "Descriptive detail substitution"
      }
    ],
    expertAdvice:
      "Prioritise Content because 'smaller' replaces 'larger' and reverses the key descriptive information. Do not diagnose Pronunciation or Oral Fluency because the response is otherwise clear and continuous."
  },

  {
    exerciseIndex: 20,
    totalExercises: 100,
    difficulty: "Upper Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Numerical Detail Substitution",
    learningObjective:
      "Identify a numerical detail substitution in a Repeat Sentence response and recognise the importance of exact quantitative information.",
    sourceQuestionId: "60",
    promptText:
      "You can borrow up to five books from the library.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-020-prompt-orus.mp3",
    promptAudio:
      "You can borrow up to five books from the library.",
    studentTranscript:
      "You can borrow up to four books from the library.",
    studentResponse: {
      audioDuration: "8.5 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but the student changes the quantitative detail from 'five' to 'four'."
    },
    diagnosticErrors: [
      "Numerical substitution",
      "Quantitative detail error",
      "Content accuracy"
    ],
    expertEvidence: [
      "The target specifies the number 'five'",
      "The student says 'four'",
      "The numerical substitution changes the stated borrowing limit",
      "All other target words are reproduced accurately",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous"
    ],
    expertDiagnosis:
      "The primary issue is Content accuracy because the student changes the quantitative detail from 'five' to 'four'. The altered number changes the stated borrowing limit. The remainder of the response is accurate, with clear Pronunciation and strong Oral Fluency.",
    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they say 'four' instead of the target number 'five'. This changes the stated borrowing limit. The rest of the sentence is accurate, clearly pronounced, and continuously delivered.",
    coachingAdvice:
      "Pay close attention to numbers and other quantitative details in Repeat Sentence tasks. A single numerical substitution can change the factual content even when the rest of the sentence is accurate.",
    cefrLevel: "B2",
    topicTitle: "Library Borrowing Limit",
    good: {
      transcript:
        "You can borrow up to five books from the library.",
      audioDuration: "8.0 seconds",
      wordCount: 10,
      characteristics:
        "Accurate quantitative Content with clear Pronunciation and smooth Oral Fluency."
    },
    poor: {
      transcript:
        "You can borrow up to four books from the library.",
      audioDuration: "8.0 seconds",
      wordCount: 10,
      characteristics:
        "Clear and continuous delivery, but the key numerical detail is changed from five to four."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with precise quantitative detail, clear Pronunciation, and smooth Oral Fluency."
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A numerical substitution affects Content accuracy while Pronunciation and Oral Fluency remain strong."
    },
    errorChecklist: [
      {
        id: "numerical-substitution",
        label: "Numerical substitution",
        keyword: "Numerical substitution"
      },
      {
        id: "quantitative-detail-error",
        label: "Quantitative detail error",
        keyword: "Quantitative detail error"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],
    expertAdvice:
      "Prioritise Content because 'four' replaces the target number 'five' and changes the stated borrowing limit. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered."
  },

  {
    exerciseIndex: 21,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Pronunciation",
    diagnosticArea: "Pronunciation — Final Consonant Clarity",
    learningObjective:
      "Identify a final-consonant pronunciation problem in a familiar word and distinguish an unclear word ending from a Content omission when the intended word is otherwise recognisable.",
    sourceQuestionId: "61",
    promptText:
      "The bus to the city leaves every thirty minutes.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-021-prompt-leda.mp3",
    promptAudio:
      "The bus to the city leaves every thirty minutes.",
    studentTranscript:
      "The bus to the city leaves every thirty ticke.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student reproduces the sentence fluently but produces the final word with the final /t/ of 'ticket' insufficiently articulated, sounding closer to 'ticke'. The intended lexical item remains recognisable from context.",
    },
    diagnosticErrors: [
      "Final consonant deletion",
      "Word-final articulation",
      "Pronunciation accuracy",
    ],
    expertEvidence: [
      "The target word is 'ticket'",
      "The final consonant /t/ is not clearly articulated",
      "The problem occurs at the end of the word rather than in the sentence content",
      "The intended word remains recognisable from the surrounding context",
      "The rest of the response is delivered continuously",
      "The primary issue is Pronunciation rather than Content or Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Pronunciation. The student produces the target word 'ticket' with an unclear or deleted final /t/. Because the intended word remains recognisable and the rest of the sentence is accurate and fluent, the teacher should treat this as a word-final pronunciation problem rather than a Content omission.",
    perfectCalibrationResponse:
      "Primary diagnosis: Pronunciation. The student says the final word 'ticket' without a clearly articulated final /t/, making the word sound closer to 'ticke'. The intended word remains recognisable and the rest of the sentence is accurate and fluent, so this is not primarily a Content or Oral Fluency problem.",
    coachingAdvice:
      "Practise the final /t/ in 'ticket' in isolation, then in 'thirty ticket' and finally in the complete sentence. Keep the ending audible without adding an extra vowel after the final consonant.",
    cefrLevel: "A2",
    topicTitle: "Buying Bus & Train Tickets",
    good: {
      transcript:
        "The bus to the city leaves every thirty minutes.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with a clearly articulated final consonant, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The bus to the city leaves every thirty ticke.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The final /t/ in 'ticket' is insufficiently articulated, while the remainder of the response is clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear final-consonant Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "82 / 90",
      breakdownText:
        "The intended word is recognisable, but unclear final-consonant articulation affects Pronunciation while Content and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "final-consonant-deletion",
        label: "Final consonant deletion",
        keyword: "Final consonant deletion",
      },
      {
        id: "word-final-articulation",
        label: "Word-final articulation",
        keyword: "Word-final articulation",
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy",
      },
    ],
    expertAdvice:
      "Listen specifically to the end of 'ticket'. If the final /t/ is not clearly articulated but the intended word is still recognisable, diagnose Pronunciation rather than treating it as a missing Content word."
  },

  {
    exerciseIndex: 22,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and explain why exact reproduction matters.",
    sourceQuestionId: "62",
    promptText:
      "Make sure you save your work before closing the computer.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-022-prompt-puck.mp3",
    promptAudio:
      "Make sure you save your work before closing the computer.",
    studentTranscript:
      "Make sure you save all your work before closing the computer.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student inserts the word 'all' before 'your work'. The rest of the sentence is accurately reproduced with clear pronunciation and continuous delivery.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Content deviation",
      "Unnecessary lexical addition",
    ],
    expertEvidence: [
      "The target phrase is 'save your work'",
      "The student inserts the word 'all'",
      "The insertion changes the exact wording of the instruction",
      "The remainder of the sentence is reproduced accurately",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student inserts 'all' into the phrase 'save your work'. Although the resulting sentence is understandable and natural English, the teacher should recognise the deviation from the target sentence. Pronunciation and Oral Fluency remain strong.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student inserts 'all' before 'your work', changing the target phrase from 'save your work' to 'save all your work'. The rest of the sentence is accurate and fluent, so the main issue is the unnecessary lexical addition rather than Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Train the student to reproduce the exact phrase 'save your work' rather than adding plausible words. In Repeat Sentence, natural-sounding additions can still reduce Content accuracy when they change the target wording.",
    cefrLevel: "A2",
    topicTitle: "Ordering Food in Restaurants",
    good: {
      transcript:
        "Make sure you save your work before closing the computer.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Exact Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Make sure you save all your work before closing the computer.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The word 'all' is inserted before 'your work', while the rest of the response remains accurate and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "An unnecessary word insertion affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "content-deviation",
        label: "Content deviation",
        keyword: "Content deviation",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
    ],
    expertAdvice:
      "Listen for the inserted word 'all'. Do not overlook a Content deviation simply because the resulting sentence sounds natural. Exact reproduction remains the target."
  },

  {
    exerciseIndex: 23,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Recognise an immediate word repetition in an otherwise accurate Repeat Sentence response and distinguish a Fluency disruption from a Content omission or substitution.",
    sourceQuestionId: "63",
    promptText:
      "The science lab requires safety goggles for all experiments.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-023-prompt-sulafat.mp3",
    promptAudio:
      "The science lab requires safety goggles for all experiments.",
    studentTranscript:
      "The science lab requires safety safety goggles for all experiments.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but the word 'safety' is repeated once, creating a brief fluency disruption. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words are present",
      "The word 'safety' is produced twice",
      "The repetition creates a brief disruption in continuous delivery",
      "There is no meaningful target-word omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'safety' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation is clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'safety' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation is clear, so the teacher should focus on the fluency disruption.",
    coachingAdvice:
      "Practise the phrase 'safety goggles for all experiments' at a steady pace. Encourage the student to move forward after 'safety' without repeating the word.",
    cefrLevel: "A2",
    topicTitle: "Science Lab Safety",
    good: {
      transcript:
        "The science lab requires safety goggles for all experiments.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate reproduction with clear pronunciation and smooth continuous delivery.",
    },
    poor: {
      transcript:
        "The science lab requires safety safety goggles for all experiments.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but 'safety' is repeated once, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'safety'. Do not convert the repetition into a Content omission.",
  },
  {
    exerciseIndex: 24,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Recognise when omission of a meaningful phrase removes important information from an otherwise fluent response and distinguish this from a minor wording variation.",
    sourceQuestionId: "64",
    promptText:
      "Please speak clearly so everyone can understand you.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-024-prompt-iapetus.mp3",
    promptAudio:
      "Please speak clearly so everyone can understand you.",
    studentTranscript:
      "Please speak clearly so everyone can understand.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student reproduces the sentence fluently but omits the final pronoun 'you'. The remainder is clearly pronounced and continuous.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content accuracy",
      "Incomplete final phrase",
    ],
    expertEvidence: [
      "The target ends with 'understand you'",
      "The student stops after 'understand'",
      "The final word 'you' is omitted",
      "The main instruction remains understandable",
      "Pronunciation is clear",
      "Delivery is continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the final word 'you', making the response incomplete relative to the target sentence. The omission does not destroy the main instruction, so the teacher should identify a local Content accuracy problem without exaggerating it as total failure.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the final word 'you' from the target phrase 'so everyone can understand you'. The main instruction remains clear, but the response is not fully reproduced. Pronunciation and Oral Fluency remain strong.",
    coachingAdvice:
      "Train the student to carry the final phrase through to the last word. Practise 'so everyone can understand you' as one complete chunk before repeating the whole sentence.",
    cefrLevel: "A2",
    topicTitle: "Gyms & Physical Fitness",
    good: {
      transcript:
        "Please speak clearly so everyone can understand you.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please speak clearly so everyone can understand.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The final word 'you' is omitted, while the remainder is accurately and fluently reproduced.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "A local word omission affects Content accuracy while the main meaning, Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
      {
        id: "incomplete-final-phrase",
        label: "Incomplete final phrase",
        keyword: "Incomplete final phrase",
      },
    ],
    expertAdvice:
      "Notice that the response is understandable and fluent, but the final word 'you' is missing. Diagnose the local Content omission without overstating the severity of the error."
  },

  {
    exerciseIndex: 25,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Quantifier Substitution",
    learningObjective:
      "Identify a small lexical substitution that changes quantity and therefore changes the factual content of an otherwise accurate Repeat Sentence response.",
    sourceQuestionId: "65",
    promptText:
      "The museum offers free entry on the first Sunday of each month.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-025-prompt-achernar.mp3",
    promptAudio:
      "The museum offers free entry on the first Sunday of each month.",
    studentTranscript:
      "The museum offers free entry on the first Sunday of each week.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student clearly substitutes 'week' for the target word 'month'. The remainder of the sentence is accurately reproduced with continuous delivery.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Quantifier/time-unit substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target specifies 'each month'",
      "The student says 'each week'",
      "The substitution changes the frequency of the free-entry offer",
      "The substituted word is a clearly pronounced different lexical item",
      "The remainder of the sentence is accurately reproduced",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'week' for 'month', changing the frequency stated in the sentence. Because the substituted word is clearly pronounced and the response is fluent, the teacher should not classify this as a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'week' instead of 'month', changing the frequency of the museum's free-entry offer from monthly to weekly. The substituted word is clearly pronounced and the rest of the sentence is fluent, so Content is the primary issue.",
    coachingAdvice:
      "Pay close attention to time units and other small factual details. Contrast 'each month' and 'each week' so the student learns to retain the exact frequency expressed in the target sentence.",
    cefrLevel: "A2",
    topicTitle: "Weekend Travel Trips",
    good: {
      transcript:
        "The museum offers free entry on the first Sunday of each month.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate Content with precise time-unit wording, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The museum offers free entry on the first Sunday of each week.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The clearly pronounced word 'week' replaces 'month', changing the frequency while the remainder remains accurate and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with precise time-unit wording, clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A meaning-changing time-unit substitution affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "time-unit-substitution",
        label: "Time-unit substitution",
        keyword: "Time-unit substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'week' replaces 'month' and changes the stated frequency. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery is continuous."
  },

   {
    exerciseIndex: 26,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a small but measurable Content omission in an otherwise accurate Repeat Sentence response and distinguish it from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "66",
    promptText:
      "Your student card can also be used to pay for printing.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-026-prompt-orus.mp3",
    promptAudio:
      "Your student card can also be used to pay for printing.",
    studentTranscript:
      "Your student card can be used to pay for printing.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student omits the target word 'also'. The remaining sentence is reproduced accurately with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the word 'also'",
      "The student omits 'also'",
      "The remaining target words are reproduced accurately",
      "Pronunciation remains clear",
      "Delivery remains continuous",
      "The primary issue is Content rather than Pronunciation or Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the target word 'also', while the remainder of the sentence is accurately and fluently reproduced. The teacher should identify the local Content omission without incorrectly diagnosing Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits the word 'also' from the target sentence. The rest of the sentence is accurate, clearly pronounced and fluently delivered, so the main issue is a meaningful word omission rather than Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Practise retaining every target word, including small function and linking words such as 'also'. Encourage the student to listen for the complete word sequence rather than reproducing only the main content words.",
    cefrLevel: "A2",
    topicTitle: "Student Cards & Printing",
    good: {
      transcript:
        "Your student card can also be used to pay for printing.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate Content with all target words retained, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Your student card can be used to pay for printing.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The word 'also' is omitted, while the remaining sentence is clearly pronounced and continuously delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "All target words are reproduced accurately with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A single meaningful word omission affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the target word 'also' is omitted. Do not diagnose Pronunciation or Oral Fluency when the remaining words are clearly pronounced and continuously delivered."
  },

  {
    exerciseIndex: 27,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and explain why exact reproduction matters.",
    sourceQuestionId: "67",
    promptText:
      "The weather is expected to be warm and sunny this weekend.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-027-prompt-leda.mp3",
    promptAudio:
      "The weather is expected to be warm and sunny this weekend.",
    studentTranscript:
      "The weather is expected to be very warm and sunny this weekend.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The student inserts the word 'very' before 'warm'. The rest of the sentence is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'warm and sunny'",
      "The student inserts the word 'very' before 'warm'",
      "The inserted word is not part of the target",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts the word 'very', which is not present in the target sentence. The remainder is accurately and fluently delivered, so the teacher should not classify the issue as Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts 'very' before 'warm', adding a word that is not present in the target. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise reproducing the exact target wording without adding plausible extra words. Encourage the student to retain the heard sequence rather than expanding it from memory.",
    cefrLevel: "A2",
    topicTitle: "Weather & Weekend Plans",
    good: {
      transcript:
        "The weather is expected to be warm and sunny this weekend.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate Content with exact wording, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The weather is expected to be very warm and sunny this weekend.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The unnecessary word 'very' is inserted before 'warm', while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary inserted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'very' is inserted into the target sentence. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered."
  },

  {
    exerciseIndex: 28,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution in an otherwise fluent Repeat Sentence response and distinguish it from a Pronunciation problem.",
    sourceQuestionId: "68",
    promptText:
      "The library has extended its opening hours for exam season.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-028-prompt-puck.mp3",
    promptAudio:
      "The library has extended its opening hours for exam season.",
    studentTranscript:
      "The library has increased its opening hours for exam season.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'increased' for 'extended'. The rest of the sentence is fluent and clearly pronounced.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'extended'",
      "The student says 'increased' instead",
      "'Increased' is a different lexical item, not a pronunciation variant",
      "The substitution changes the exact wording and meaning emphasis of the response",
      "The remainder of the sentence is reproduced accurately",
      "Delivery remains fluent and pronunciation is clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'increased' for 'extended'. Because 'increased' is a different lexical item and is clearly pronounced, this is a lexical substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'increased' instead of the target word 'extended'. This is a lexical substitution because the student produces a different word rather than a pronunciation variant. The rest of the response is fluent and clearly pronounced.",
    coachingAdvice:
      "Contrast 'extended' and 'increased' and practise reproducing the exact target word. Then repeat the complete sentence while maintaining the same fluent delivery.",
    cefrLevel: "A2",
    topicTitle: "Library Opening Hours",
    good: {
      transcript:
        "The library has extended its opening hours for exam season.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library has increased its opening hours for exam season.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'increased' for 'extended' while maintaining otherwise fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A lexical substitution affects Content while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Listen for the actual lexical item before diagnosing Pronunciation. 'Increased' and 'extended' are different words. The primary teaching issue is Content accuracy, while Oral Fluency remains clear.",
  },
  {
    exerciseIndex: 29,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify an unnecessary immediate word repetition in an otherwise accurate Repeat Sentence response and distinguish the fluency disruption from a Content error.",
    sourceQuestionId: "69",
    promptText:
      "Please turn off your mobile phone during the presentation.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-029-prompt-sulafat.mp3",
    promptAudio:
      "Please turn off your mobile phone during the presentation.",
    studentTranscript:
      "Please turn off your mobile mobile phone during the presentation.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student repeats the word 'mobile' once before continuing with the target sentence. The remaining wording is accurate and clearly pronounced.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Immediate repetition",
      "Oral Fluency disruption",
    ],
    expertEvidence: [
      "The target contains one occurrence of 'mobile'",
      "The student repeats 'mobile' immediately",
      "The target wording resumes correctly after the repetition",
      "The intended Content remains recoverable",
      "Pronunciation is generally clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'mobile' immediately before continuing with the target sentence. Because the intended wording remains clear and the repetition is the defining disruption, this should not be treated primarily as a Content or Pronunciation problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student says 'mobile' twice in succession before continuing with 'phone'. The target content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the main fluency disruption.",
    coachingAdvice:
      "Practise continuing forward after each successfully produced word. If a repetition occurs, avoid restarting unnecessarily and work on maintaining a steady sequence through the sentence.",
    cefrLevel: "A2",
    topicTitle: "Mobile Phones in Presentations",
    good: {
      transcript:
        "Please turn off your mobile phone during the presentation.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth continuous Oral Fluency.",
    },
    poor: {
      transcript:
        "Please turn off your mobile mobile phone during the presentation.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The word 'mobile' is repeated immediately, creating a noticeable fluency disruption while the intended sentence remains clear.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "An unnecessary word repetition disrupts Oral Fluency while Content and Pronunciation remain strong.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "immediate-repetition",
        label: "Immediate repetition",
        keyword: "Immediate repetition",
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because 'mobile' is repeated unnecessarily. Do not diagnose Content or Pronunciation when the intended wording remains clear and the words are clearly articulated."
  },

  {
    exerciseIndex: 30,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Time Expression Substitution",
    learningObjective:
      "Identify a lexical substitution involving a time expression that changes the meaning of an otherwise accurate Repeat Sentence response.",
    sourceQuestionId: "70",
    promptText:
      "The teacher will give feedback on your project next week.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-030-prompt-iapetus.mp3",
    promptAudio:
      "The teacher will give feedback on your project next week.",
    studentTranscript:
      "The teacher will give feedback on your project next month.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'month' for the target word 'week'. The remainder of the sentence is accurately reproduced with continuous delivery.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Time-expression substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target specifies 'next week'",
      "The student says 'next month'",
      "The substitution changes when the teacher will give feedback",
      "The substituted word is clearly pronounced",
      "The remainder of the sentence is accurately reproduced",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'month' for 'week', changing the time at which the feedback will be given. Because the substituted word is clearly pronounced and delivery remains fluent, Content is the primary issue.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'next month' instead of 'next week', changing the timing of the teacher's feedback. The substituted word is clearly pronounced and the rest of the sentence is fluent, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Pay close attention to short time expressions such as 'next week'. Practise retaining the exact time reference because changing it can alter the meaning of the complete sentence.",
    cefrLevel: "A2",
    topicTitle: "Teacher Feedback on Projects",
    good: {
      transcript:
        "The teacher will give feedback on your project next week.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with the exact time expression, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will give feedback on your project next month.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The clearly pronounced word 'month' replaces 'week', changing the time reference while the remainder remains accurate and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with precise time wording, clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A meaning-changing time-expression substitution affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "time-expression-substitution",
        label: "Time-expression substitution",
        keyword: "Time-expression substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'month' replaces 'week' and changes the stated time. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery is continuous."
  },

   {
    exerciseIndex: 31,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Modal Omission",
    learningObjective:
      "Recognise when omitting a modal verb changes the strength of an instruction and distinguish the resulting Content error from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "71",
    promptText:
      "You must register for the workshop before Friday.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-031-prompt-achernar.mp3",
    promptAudio:
      "You must register for the workshop before Friday.",
    studentTranscript:
      "You register for the workshop before Friday.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The student omits the modal verb 'must', changing the strength of the requirement while the remaining words are clearly pronounced and fluently delivered.",
    },
    diagnosticErrors: [
      "Modal verb omission",
      "Meaning-changing omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target requires the modal verb 'must'",
      "The student omits 'must'",
      "The omission changes the force of the instruction",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits 'must', which changes the strength of the requirement in the target sentence. The remainder is accurately and fluently delivered, so the teacher should not misdiagnose Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits the word 'must', which changes the strength of the instruction. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a meaning-changing Content omission rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining short modal verbs such as 'must' when repeating instructions. Encourage the student to listen for the complete grammatical frame rather than reproducing only the main content words.",
    cefrLevel: "A2",
    topicTitle: "Workshop Registration Requirements",
    good: {
      transcript:
        "You must register for the workshop before Friday.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Exact Content with the required modal, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "You register for the workshop before Friday.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The modal 'must' is omitted, weakening the instruction while the rest is clearly and fluently reproduced.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing modal omission affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "modal-omission",
        label: "Modal verb omission",
        keyword: "Modal verb omission",
      },
      {
        id: "meaning-changing-omission",
        label: "Meaning-changing omission",
        keyword: "Meaning-changing omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because omitting 'must' changes the strength of the workshop registration requirement. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 32,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful omitted word in an otherwise accurate Repeat Sentence response and distinguish the Content issue from Fluency or Pronunciation problems.",
    sourceQuestionId: "72",
    promptText:
      "The classroom has been rearranged to allow more space.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-032-prompt-orus.mp3",
    promptAudio:
      "The classroom has been rearranged to allow more space.",
    studentTranscript:
      "The classroom has been rearranged to allow space.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student omits the meaningful word 'more'. The rest of the sentence is delivered clearly and continuously.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of descriptive information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the word 'more'",
      "The student omits 'more'",
      "The remaining sentence structure is reproduced accurately",
      "The omission reduces the intended meaning by removing the comparison of available space",
      "Delivery remains continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'more', reducing the meaning of the statement because the target specifies an increase in available space. Fluency and Pronunciation remain clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'more', so the response no longer expresses the intended increase in available space. The remaining sentence is clear and fluent, so Fluency and Pronunciation are not the primary issues.",
    coachingAdvice:
      "Practise the phrase 'to allow more space' as one unit. Encourage the student to retain the comparative word 'more' when reproducing the complete sentence.",
    cefrLevel: "A2",
    topicTitle: "Classroom Space Arrangement",
    good: {
      transcript:
        "The classroom has been rearranged to allow more space.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with natural phrase grouping, clear Pronunciation and continuous delivery.",
    },
    poor: {
      transcript:
        "The classroom has been rearranged to allow space.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The meaningful word 'more' is omitted while the rest of the sentence remains clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'more' reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "lost-descriptive-information",
        label: "Loss of descriptive information",
        keyword: "Loss of descriptive information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'more' carries meaningful comparative information. Do not diagnose Fluency or Pronunciation when the response is clearly and continuously delivered.",
  },
  {
    exerciseIndex: 33,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Recognise the omission of a meaningful descriptive word in an otherwise accurate Repeat Sentence response and distinguish the Content loss from strong Pronunciation and Oral Fluency.",
    sourceQuestionId: "73",
    promptText:
      "Please keep your desk clean and tidy at all times.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-033-prompt-leda.mp3",
    promptAudio:
      "Please keep your desk clean and tidy at all times.",
    studentTranscript:
      "Please keep your desk clean at all times.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student omits the word 'tidy' while accurately reproducing the rest of the sentence with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the coordinated description 'clean and tidy'",
      "The student omits 'tidy'",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
      "The primary issue is the missing Content item",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits 'tidy' from the target description 'clean and tidy'. The remainder is accurate and fluently delivered, so the teacher should identify the local Content omission rather than misdiagnosing Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits the word 'tidy' from 'clean and tidy'. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a meaningful Content omission rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining paired descriptive phrases such as 'clean and tidy'. Encourage the student to listen for linked words rather than dropping the second item in a coordinated phrase.",
    cefrLevel: "A2",
    topicTitle: "Keeping Desks Clean and Tidy",
    good: {
      transcript:
        "Please keep your desk clean and tidy at all times.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please keep your desk clean at all times.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The word 'tidy' is omitted while the remaining sentence is clearly and fluently reproduced.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A meaningful word omission affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'tidy' is omitted from the target phrase 'clean and tidy'. Do not diagnose Pronunciation or Oral Fluency when the response remains clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 34,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Time Expression Substitution",
    learningObjective:
      "Identify a substituted time expression that changes the timing of an event and distinguish the Content error from otherwise clear Pronunciation and Oral Fluency.",
    sourceQuestionId: "74",
    promptText:
      "The school will host a cultural festival next month.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-034-prompt-puck.mp3",
    promptAudio:
      "The school will host a cultural festival next month.",
    studentTranscript:
      "The school will host a cultural festival next week.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student substitutes 'next week' for 'next month'. The rest of the sentence is accurately reproduced with clear Pronunciation and smooth Oral Fluency.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Time-expression substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'next month'",
      "The student says 'next week'",
      "The substitution changes the stated timing of the festival",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'next week' for 'next month', changing the timing of the cultural festival. The substituted phrase is clearly pronounced and the rest of the response is fluent, so the issue is a meaning-changing Content substitution.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'next week' instead of the target 'next month', changing the stated timing of the festival. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a Content substitution rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining short time expressions exactly as heard, especially contrasts such as 'next week' and 'next month'. Encourage the student to preserve the full time reference before moving on to the rest of the sentence.",
    cefrLevel: "A2",
    topicTitle: "School Cultural Festival",
    good: {
      transcript:
        "The school will host a cultural festival next month.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school will host a cultural festival next week.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The time expression is changed from 'next month' to 'next week', while the rest remains accurate and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "81 / 90",
      breakdownText:
        "A meaning-changing time-expression substitution affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "time-expression-substitution",
        label: "Time-expression substitution",
        keyword: "Time-expression substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'next week' replaces the target 'next month' and changes the timing of the event. Do not diagnose Pronunciation or Oral Fluency when the substituted phrase is clearly pronounced and delivery is continuous.",
  },

  {
    exerciseIndex: 35,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Identify an inserted filler within an otherwise complete Repeat Sentence response and distinguish the Fluency disruption from Content or Pronunciation problems.",
    sourceQuestionId: "75",
    promptText:
      "The computer system will be updated overnight.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-035-prompt-sulafat.mp3",
    promptAudio:
      "The computer system will be updated overnight.",
    studentTranscript:
      "The computer system will be updated, um, overnight.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "All target words are reproduced accurately, but the inserted filler 'um' interrupts the final phrase. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Oral Fluency disruption",
      "Interrupted delivery",
    ],
    expertEvidence: [
      "All target words are present",
      "The filler 'um' is not part of the target sentence",
      "The filler interrupts delivery before 'overnight'",
      "The target Content remains complete",
      "Pronunciation remains clear",
      "The defining issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but inserts the filler 'um' before 'overnight', interrupting otherwise continuous delivery. Content remains complete and Pronunciation is clear, so the filler should be treated as a Fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student reproduces all target words but inserts 'um' before 'overnight'. Content remains complete and Pronunciation is clear, so the defining issue is filler-related Fluency disruption rather than a Content or Pronunciation problem.",
    coachingAdvice:
      "Practise continuing directly through the final phrase without inserting a filler. Encourage the student to use the heard phrase as one continuous sequence rather than filling a brief planning gap with 'um'.",
    cefrLevel: "A2",
    topicTitle: "Computer System Updates",
    good: {
      transcript:
        "The computer system will be updated overnight.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 7,
      characteristics:
        "Complete Content with clear Pronunciation and continuous Oral Fluency.",
    },
    poor: {
      transcript:
        "The computer system will be updated, um, overnight.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "All target words are present, but an inserted filler interrupts delivery before 'overnight'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content and Pronunciation remain strong, but an inserted filler disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
      {
        id: "interrupted-delivery",
        label: "Interrupted delivery",
        keyword: "Interrupted delivery",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are reproduced accurately and the only clear disruption is the inserted filler 'um'. Do not convert the filler into a Content omission or Pronunciation diagnosis.",
  },

  {
    exerciseIndex: 36,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful location word in an otherwise accurate Repeat Sentence response and distinguish the Content loss from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "76",
    promptText:
      "Please follow the signs to the main entrance.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-036-prompt-iapetus.mp3",
    promptAudio:
      "Please follow the signs to the main entrance.",
    studentTranscript:
      "Please follow the signs to the entrance.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student omits the meaningful word 'main' while reproducing the remainder clearly and fluently. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the word 'main'",
      "The student omits 'main'",
      "The remaining target words are accurately reproduced",
      "The omission removes a meaningful location detail",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the word 'main', removing a meaningful location detail from the target sentence. The rest of the sentence is accurately and fluently reproduced, so Pronunciation and Oral Fluency are not the primary concerns.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits 'main' from the target sentence, removing a meaningful location detail. The remaining words are accurate, clearly pronounced and fluently delivered, so this is a Content omission rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining short descriptive words such as 'main' rather than focusing only on the larger content words. Encourage the student to reproduce the complete location phrase 'the main entrance'.",
    cefrLevel: "A2",
    topicTitle: "Main Entrance Directions",
    good: {
      transcript:
        "Please follow the signs to the main entrance.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please follow the signs to the entrance.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The meaningful word 'main' is omitted, while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A meaningful omitted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'main' is omitted from the target sentence and carries meaningful location information. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clear and continuous.",
  },

  {
    exerciseIndex: 37,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify an immediate word repetition in an otherwise complete Repeat Sentence response and distinguish the Fluency disruption from a Content or Pronunciation problem.",
    sourceQuestionId: "77",
    promptText:
      "The teacher will check attendance at the beginning of class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-037-prompt-achernar.mp3",
    promptAudio:
      "The teacher will check attendance at the beginning of class.",
    studentTranscript:
      "The teacher will check check attendance at the beginning of class.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are reproduced, but the student immediately repeats 'check' before continuing. Pronunciation remains clear and the target content remains understandable.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Immediate repetition",
      "Oral Fluency disruption",
    ],
    expertEvidence: [
      "All target words are present",
      "The word 'check' is repeated immediately",
      "The repetition interrupts forward delivery",
      "The target Content remains complete",
      "Pronunciation remains clear",
      "The defining issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'check' immediately before continuing with 'attendance'. Because the target Content remains complete and Pronunciation is clear, the unnecessary repetition is the defining Fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'check' immediately before continuing with 'attendance'. All target content remains present and Pronunciation is clear, so the unnecessary repetition disrupts Fluency rather than indicating a Content or Pronunciation problem.",
    coachingAdvice:
      "Practise continuing forward after successfully producing a word rather than restarting it. Encourage steady delivery through the phrase 'check attendance'.",
    cefrLevel: "A2",
    topicTitle: "Class Attendance",
    good: {
      transcript:
        "The teacher will check attendance at the beginning of class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will check check attendance at the beginning of class.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The word 'check' is repeated immediately, creating a brief Oral Fluency disruption while Content remains complete.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content and Pronunciation remain strong, but immediate word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "immediate-repetition",
        label: "Immediate repetition",
        keyword: "Immediate repetition",
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target words are all present and the only defining disruption is the immediate repetition of 'check'. Do not convert the repetition into a Content or Pronunciation diagnosis.",
  },

  {
    exerciseIndex: 38,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and distinguish the Content error from strong Pronunciation and Oral Fluency.",
    sourceQuestionId: "78",
    promptText:
      "The library is a quiet area for study and reading.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-038-prompt-orus.mp3",
    promptAudio:
      "The library is a quiet area for study and reading.",
    studentTranscript:
      "The library is a quiet area for study and quiet reading.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student inserts the word 'quiet' before 'reading'. The remaining target sequence is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'for study and reading'",
      "The student inserts an additional 'quiet' before 'reading'",
      "The inserted word is not part of the target sequence",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts an additional 'quiet' before 'reading', creating a word that is not present in the target sentence. The rest is accurately and fluently delivered, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts an extra 'quiet' before 'reading'. The rest of the target is accurately reproduced with clear Pronunciation and smooth Oral Fluency, so the defining issue is the unnecessary Content insertion.",
    coachingAdvice:
      "Practise reproducing the exact target sequence without carrying an earlier adjective forward into a later phrase. Encourage attention to the complete phrase 'study and reading'.",
    cefrLevel: "A2",
    topicTitle: "Library Study and Reading",
    good: {
      transcript:
        "The library is a quiet area for study and reading.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library is a quiet area for study and quiet reading.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "An unnecessary second 'quiet' is inserted before 'reading', while the remaining sentence is clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary inserted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the student adds a second 'quiet' that is not part of the target. Do not diagnose Pronunciation or Oral Fluency when the inserted word is clearly pronounced and delivery remains continuous.",
  },

  {
    exerciseIndex: 39,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Identify an inserted filler in an otherwise complete Repeat Sentence response and distinguish the resulting Fluency disruption from Content or Pronunciation weakness.",
    sourceQuestionId: "79",
    promptText:
      "You can ask the receptionist for help if you need it.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-039-prompt-leda.mp3",
    promptAudio:
      "You can ask the receptionist for help if you need it.",
    studentTranscript:
      "You can ask the receptionist for help if, um, you need it.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words are reproduced accurately, but the inserted filler 'um' interrupts the phrase 'if you need it'. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Oral Fluency disruption",
      "Interrupted delivery",
    ],
    expertEvidence: [
      "All target words are present",
      "The filler 'um' is not part of the target sentence",
      "The filler interrupts delivery before 'you need it'",
      "The target Content remains complete",
      "Pronunciation remains clear",
      "The defining issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but inserts the filler 'um' before 'you need it', interrupting otherwise continuous delivery. Content remains complete and Pronunciation is clear, so the filler is the defining Fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student reproduces all target words but inserts 'um' before 'you need it'. Content remains complete and Pronunciation is clear, so this is a filler-related Fluency disruption rather than a Content or Pronunciation problem.",
    coachingAdvice:
      "Practise continuing directly through the phrase 'if you need it' without inserting a filler. Encourage the student to maintain forward momentum once the sentence structure is established.",
    cefrLevel: "A2",
    topicTitle: "Receptionist Assistance",
    good: {
      transcript:
        "You can ask the receptionist for help if you need it.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content with clear Pronunciation and continuous Oral Fluency.",
    },
    poor: {
      transcript:
        "You can ask the receptionist for help if, um, you need it.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words are present, but an inserted filler interrupts delivery before 'you need it'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content and Pronunciation remain strong, but the inserted filler disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
      {
        id: "interrupted-delivery",
        label: "Interrupted delivery",
        keyword: "Interrupted delivery",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are reproduced accurately and the only clear disruption is the inserted filler 'um'. Do not convert the filler into a Content omission or Pronunciation diagnosis.",
  },

  {
    exerciseIndex: 40,
    totalExercises: 100,
    difficulty: "Elementary",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Modal Substitution",
    learningObjective:
      "Identify a modal substitution that changes the certainty of a Repeat Sentence statement and distinguish the Content error from clear Pronunciation and Oral Fluency.",
    sourceQuestionId: "80",
    promptText:
      "The bus service may be delayed due to heavy traffic.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-040-prompt-puck.mp3",
    promptAudio:
      "The bus service may be delayed due to heavy traffic.",
    studentTranscript:
      "The bus service will be delayed due to heavy traffic.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student substitutes 'will' for 'may', changing a possibility into a definite statement while the remainder is clearly and fluently reproduced.",
    },
    diagnosticErrors: [
      "Modal substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target uses the modal 'may'",
      "The student substitutes 'will'",
      "The substitution changes possibility into certainty",
      "The remainder of the target is accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'will' for 'may', changing the statement from a possibility to a definite prediction. The rest of the sentence is accurately and fluently delivered, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'will' instead of 'may', changing the meaning from possibility to certainty. The remainder is clearly pronounced and fluently delivered, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining short modal words such as 'may' because they can change the certainty of the whole statement. Contrast 'may be delayed' with 'will be delayed' so the student notices the meaning difference.",
    cefrLevel: "A2",
    topicTitle: "Bus Service Delays",
    good: {
      transcript:
        "The bus service may be delayed due to heavy traffic.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with precise modal meaning, clear Pronunciation and continuous Oral Fluency.",
    },
    poor: {
      transcript:
        "The bus service will be delayed due to heavy traffic.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The modal 'may' is replaced by 'will', changing the degree of certainty while the remainder remains accurate and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing modal substitution affects Content while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "modal-substitution",
        label: "Modal verb substitution",
        keyword: "Modal verb substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'will' replaces the target modal 'may' and changes the certainty of the statement. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery remains continuous.",
  },

  {
    exerciseIndex: 41,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful target word in an otherwise accurate Repeat Sentence response and distinguish the Content loss from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "81",
    promptText:
      "Please return the equipment after you finish using it.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-041-prompt-sulafat.mp3",
    promptAudio:
      "Please return the equipment after you finish using it.",
    studentTranscript:
      "Please return the equipment after using it.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The student omits the meaningful phrase 'you finish'. The remaining sentence is clearly pronounced and fluently delivered.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the phrase 'you finish using it'",
      "The student omits the words 'you finish'",
      "The remaining target sequence is accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the words 'you finish', removing a meaningful part of the time clause. The remainder is clearly pronounced and fluently delivered, so this is a Content omission rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits 'you finish' from the time clause. The rest of the sentence remains accurate, clearly pronounced and fluent, so the main issue is a meaningful Content omission rather than Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Practise retaining the complete time clause 'after you finish using it'. Encourage the student to reproduce the full sequence rather than compressing the sentence to its main action.",
    cefrLevel: "B1",
    topicTitle: "Returning Equipment",
    good: {
      transcript:
        "Please return the equipment after you finish using it.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please return the equipment after using it.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The words 'you finish' are omitted while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of the meaningful words 'you finish' reduces Content accuracy while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the meaningful words 'you finish' are missing. Do not diagnose Pronunciation or Oral Fluency when the remaining words are clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 42,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and explain why exact reproduction matters.",
    sourceQuestionId: "82",
    promptText:
      "The school store sells notebooks, pens, and other supplies.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-042-prompt-iapetus.mp3",
    promptAudio:
      "The school store sells notebooks, pens, and other supplies.",
    studentTranscript:
      "The school store sells notebooks, pens, and other school supplies.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student inserts the word 'school' before 'supplies'. The rest of the sentence is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target ends with 'other supplies'",
      "The student inserts 'school' before 'supplies'",
      "The inserted word is not part of the target",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts the word 'school', which is not present in the target sentence. The remainder is accurate and fluent, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts 'school' before 'supplies', adding a word that is not present in the target. The rest of the sentence is accurate, clearly pronounced and fluent, so the issue is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise reproducing the exact final phrase 'and other supplies' without expanding it from memory. Encourage the student to trust the heard sequence rather than adding a plausible modifier.",
    cefrLevel: "B1",
    topicTitle: "School Store Supplies",
    good: {
      transcript:
        "The school store sells notebooks, pens, and other supplies.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school store sells notebooks, pens, and other school supplies.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The unnecessary word 'school' is inserted before 'supplies' while the remainder remains clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary inserted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'school' is inserted into the target phrase. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 43,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Identify an inserted filler within an otherwise complete Repeat Sentence response and distinguish the fluency disruption from a Content omission or Pronunciation problem.",
    sourceQuestionId: "83",
    promptText:
      "The next class will focus on improving speaking skills.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-043-prompt-achernar.mp3",
    promptAudio:
      "The next class will focus on improving speaking skills.",
    studentTranscript:
      "The next class will focus on improving, um, speaking skills.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words are reproduced accurately, but the inserted filler 'um' interrupts the phrase 'improving speaking skills'. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Oral Fluency disruption",
      "Interrupted delivery",
    ],
    expertEvidence: [
      "All target words are present",
      "The student inserts the filler 'um'",
      "The filler interrupts the target phrase",
      "Pronunciation remains clear",
      "The defining problem is the disruption to continuous delivery",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but inserts the filler 'um', interrupting an otherwise continuous phrase. Content and Pronunciation remain strong, so the teacher should identify the fluency disruption rather than a Content omission or Pronunciation problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student includes all target words but inserts 'um' before 'speaking skills', interrupting the natural flow. Content and Pronunciation remain strong, so the defining issue is filler insertion rather than Content or Pronunciation.",
    coachingAdvice:
      "Practise moving directly through the phrase 'improving speaking skills' without inserting a filler. Encourage the student to maintain forward momentum rather than filling a brief planning gap with 'um'.",
    cefrLevel: "B1",
    topicTitle: "Improving Speaking Skills",
    good: {
      transcript:
        "The next class will focus on improving speaking skills.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The next class will focus on improving, um, speaking skills.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words remain present, but the filler 'um' interrupts continuous delivery before 'speaking skills'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but the inserted filler disrupts Oral Fluency while Pronunciation remains clear.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "interrupted-delivery",
        label: "Interrupted delivery",
        keyword: "Interrupted delivery",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are reproduced accurately and the defining problem is the inserted filler 'um'. Do not convert the filler into a Content or Pronunciation diagnosis.",
  },

  {
    exerciseIndex: 44,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify an unnecessary immediate word repetition in an otherwise accurate Repeat Sentence response and distinguish the resulting fluency disruption from a Content error.",
    sourceQuestionId: "84",
    promptText:
      "Please wait in line until it is your turn.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-044-prompt-orus.mp3",
    promptAudio:
      "Please wait in line until it is your turn.",
    studentTranscript:
      "Please wait wait in line until it is your turn.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student repeats 'wait' immediately before continuing with the target sentence. All intended content remains present and Pronunciation is clear.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Immediate repetition",
      "Oral Fluency disruption",
    ],
    expertEvidence: [
      "The target contains one occurrence of 'wait'",
      "The student says 'wait' twice in succession",
      "The intended target content remains clear",
      "Pronunciation remains generally accurate",
      "The repetition interrupts forward delivery",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'wait' immediately before continuing with the target sentence. The target content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the defining fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'wait' before continuing with 'in line'. The target content remains clear and Pronunciation is accurate, so the unnecessary repetition disrupts fluency rather than indicating a Content omission.",
    coachingAdvice:
      "Practise continuing forward after each successfully produced word. If a repetition occurs, avoid restarting the phrase and work on maintaining a steady sequence through the sentence.",
    cefrLevel: "B1",
    topicTitle: "Waiting in Line",
    good: {
      transcript:
        "Please wait in line until it is your turn.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please wait wait in line until it is your turn.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The word 'wait' is repeated immediately while the rest of the sentence remains accurate and clearly delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but the immediate word repetition disrupts Oral Fluency while Pronunciation remains clear.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "immediate-repetition",
        label: "Immediate repetition",
        keyword: "Immediate repetition",
      },
      {
        id: "fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target content remains present and the defining problem is the repeated word 'wait'. Do not incorrectly convert the repetition into a Content omission.",
  },

  {
    exerciseIndex: 45,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution that changes the meaning of a Repeat Sentence response and distinguish the Content error from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "85",
    promptText:
      "The teacher will explain the homework at the end of class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-045-prompt-leda.mp3",
    promptAudio:
      "The teacher will explain the homework at the end of class.",
    studentTranscript:
      "The teacher will explain the classwork at the end of class.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student clearly substitutes 'classwork' for the target word 'homework'. The remainder is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing word substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target uses the word 'homework'",
      "The student says 'classwork'",
      "The substituted word is clearly pronounced",
      "The substitution changes the intended referent",
      "The remainder of the sentence is accurately reproduced",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'classwork' for 'homework', changing the intended referent while the rest of the sentence remains accurate and fluent. This is a meaning-changing lexical substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'classwork' instead of 'homework', changing the intended referent. The substituted word is clearly pronounced and the rest of the sentence is fluent, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Listen for the exact noun in the target phrase 'explain the homework'. Practise distinguishing closely related school vocabulary so the student retains the specific word that was heard.",
    cefrLevel: "B1",
    topicTitle: "Homework Instructions",
    good: {
      transcript:
        "The teacher will explain the homework at the end of class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will explain the classwork at the end of class.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The word 'homework' is replaced by the clearly pronounced word 'classwork', changing the intended referent while delivery remains fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution affects Content while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-word",
        label: "Meaning-changing word",
        keyword: "Meaning-changing word",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'classwork' replaces the target word 'homework' and changes the intended referent. Do not diagnose Pronunciation when the substituted word is clearly pronounced, and do not diagnose Oral Fluency when delivery remains continuous.",
  },

  {
    exerciseIndex: 46,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify when a meaningful phrase is omitted from an otherwise accurate Repeat Sentence response and distinguish the Content loss from Pronunciation or Oral Fluency problems.",
    sourceQuestionId: "86",
    promptText:
      "The library staff can help you find the books you need.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-046-prompt-puck.mp3",
    promptAudio:
      "The library staff can help you find the books you need.",
    studentTranscript:
      "The library staff can help you find the books.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student reproduces the sentence clearly but omits the meaningful phrase 'you need'. Pronunciation remains clear and delivery is continuous.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target ends with 'the books you need'",
      "The student stops after 'the books'",
      "The phrase 'you need' is omitted",
      "The omission removes meaningful information about which books are required",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the phrase 'you need', removing meaningful information from the target sentence. The remainder is clearly pronounced and fluently delivered, so the issue should not be misdiagnosed as Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits the phrase 'you need' from the target sentence. The remaining words are accurate, clearly pronounced and fluently delivered, so this is a meaningful Content omission rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining the complete final chunk 'the books you need'. Encourage the student to listen for short grammatical phrases that complete the meaning rather than reproducing only the main content words.",
    cefrLevel: "B1",
    topicTitle: "Library Staff Assistance",
    good: {
      transcript:
        "The library staff can help you find the books you need.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library staff can help you find the books.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The phrase 'you need' is omitted while the remainder is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaningful phrase omission affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the student omits 'you need', which completes the meaning of the target sentence. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 47,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Word Substitution",
    learningObjective:
      "Identify a meaning-changing lexical substitution in an otherwise fluent and clearly pronounced Repeat Sentence response.",
    sourceQuestionId: "87",
    promptText:
      "The building will be closed for maintenance this weekend.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-047-prompt-sulafat.mp3",
    promptAudio:
      "The building will be closed for maintenance this weekend.",
    studentTranscript:
      "The building will be closed for maintenance next weekend.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student substitutes 'next' for 'this' while reproducing the remainder accurately with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Lexical substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'this weekend'",
      "The student says 'next weekend'",
      "The time reference changes",
      "The remainder of the sentence is accurately reproduced",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'next' for 'this', changing the time reference for the building closure. The substituted word is clearly pronounced and the response remains fluent, so this is a Content substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'next weekend' instead of 'this weekend', changing the time reference in the sentence. The rest of the response is accurate, clearly pronounced and fluent, so this is a meaning-changing Content substitution.",
    coachingAdvice:
      "Practise retaining short time expressions such as 'this weekend'. Encourage the student to reproduce the complete time reference rather than relying on a similar phrase with a different meaning.",
    cefrLevel: "B1",
    topicTitle: "Building Maintenance Closure",
    good: {
      transcript:
        "The building will be closed for maintenance this weekend.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The building will be closed for maintenance next weekend.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student substitutes 'next' for 'this', changing the time reference while maintaining clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing time-reference substitution affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'next' replaces 'this' and changes the time reference. Do not classify the clearly pronounced substituted word as a Pronunciation error.",
  },

  {
    exerciseIndex: 48,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and distinguish the Content issue from strong Pronunciation and Oral Fluency.",
    sourceQuestionId: "88",
    promptText:
      "Please check the notice board for important announcements.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-048-prompt-iapetus.mp3",
    promptAudio:
      "Please check the notice board for important announcements.",
    studentTranscript:
      "Please check the notice board for important new announcements.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student inserts the word 'new' before 'announcements'. The rest of the sentence is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'important announcements'",
      "The student inserts 'new' before 'announcements'",
      "The inserted word is not part of the target",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts the word 'new', which is not present in the target sentence. The remainder is accurately and fluently delivered, so the teacher should not misdiagnose Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts 'new' before 'announcements', adding a word that is not present in the target. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise reproducing the exact target wording without adding plausible extra words. Encourage the student to retain the heard sequence rather than expanding it from memory.",
    cefrLevel: "B1",
    topicTitle: "Notice Board Announcements",
    good: {
      transcript:
        "Please check the notice board for important announcements.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please check the notice board for important new announcements.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The unnecessary word 'new' is inserted before 'announcements', while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary inserted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'new' is inserted into the target sentence. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 49,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify an unnecessary immediate word repetition that disrupts Oral Fluency while the target Content remains substantially intact.",
    sourceQuestionId: "89",
    promptText:
      "The school encourages students to join after-school clubs.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-049-prompt-achernar.mp3",
    promptAudio:
      "The school encourages students to join after-school clubs.",
    studentTranscript:
      "The school encourages students students to join after-school clubs.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student repeats 'students' immediately before continuing with the target sentence. The intended Content remains clear and Pronunciation is generally accurate.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Immediate repetition",
      "Oral Fluency disruption",
    ],
    expertEvidence: [
      "The target contains 'students' once",
      "The student says 'students' twice in succession",
      "The repeated word is unnecessary",
      "The remaining target content is accurately reproduced",
      "Pronunciation remains generally clear",
      "The repetition is the defining delivery disruption",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'students' immediately before continuing with the target sentence. The intended Content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the main fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'students' twice in succession before continuing with the sentence. The target Content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the main fluency disruption rather than a Content or Pronunciation problem.",
    coachingAdvice:
      "Practise maintaining forward momentum after successfully producing each word. Encourage the student to continue through the sentence without going back to repeat a word.",
    cefrLevel: "B1",
    topicTitle: "After-School Clubs",
    good: {
      transcript:
        "The school encourages students to join after-school clubs.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school encourages students students to join after-school clubs.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The word 'students' is repeated immediately, creating an Oral Fluency disruption while the intended Content remains clear.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but immediate word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "immediate-repetition",
        label: "Immediate repetition",
        keyword: "Immediate repetition",
      },
      {
        id: "fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words remain present and the defining issue is the immediate repetition of 'students'. Do not convert the repetition into a Content omission.",
  },

  {
    exerciseIndex: 50,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Time Expression Substitution",
    learningObjective:
      "Identify a meaning-changing time-expression substitution and distinguish the resulting Content problem from Pronunciation or Oral Fluency issues.",
    sourceQuestionId: "90",
    promptText:
      "The exam results will be released next Wednesday.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-050-prompt-orus.mp3",
    promptAudio:
      "The exam results will be released next Wednesday.",
    studentTranscript:
      "The exam results will be released next Friday.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student substitutes 'Friday' for 'Wednesday'. The substituted word is clearly pronounced and the rest of the sentence is fluently delivered.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Time-expression substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'next Wednesday'",
      "The student says 'next Friday'",
      "The day of release is changed",
      "The remainder of the sentence is accurately reproduced",
      "The substituted word is clearly pronounced",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'Friday' for 'Wednesday', changing the specific day on which the exam results will be released. The substituted word is clearly pronounced and the rest of the response is fluent, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'next Friday' instead of 'next Wednesday', changing the specific release day. The substituted word is clearly pronounced and the rest of the sentence is fluent, so this is a meaning-changing Content substitution.",
    coachingAdvice:
      "Practise retaining specific day and time expressions such as 'next Wednesday'. Encourage the student to preserve the exact time reference rather than replacing it with a similar-sounding or familiar alternative.",
    cefrLevel: "B1",
    topicTitle: "Exam Results Release",
    good: {
      transcript:
        "The exam results will be released next Wednesday.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The exam results will be released next Friday.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student substitutes 'Friday' for 'Wednesday', changing the release day while maintaining clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing day substitution affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "time-expression-substitution",
        label: "Time-expression substitution",
        keyword: "Time-expression substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'Friday' replaces the target day 'Wednesday' and changes the meaning of the time reference. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and the delivery remains fluent.",
  },

   {
    exerciseIndex: 51,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful omitted word in an otherwise accurate Repeat Sentence response and distinguish the Content problem from Pronunciation or Oral Fluency.",
    sourceQuestionId: "91",
    promptText:
      "Please keep your voice down while others are studying.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-051-prompt-leda.mp3",
    promptAudio:
      "Please keep your voice down while others are studying.",
    studentTranscript:
      "Please keep your voice down while others studying.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student omits the word 'are' before 'studying'. The remaining sentence is clearly pronounced and fluently delivered.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the phrase 'others are studying'",
      "The student says 'others studying'",
      "The auxiliary verb 'are' is omitted",
      "The omission affects the grammatical and accurate reproduction of the target",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the word 'are' from the phrase 'others are studying'. The rest of the sentence is accurately and fluently delivered, so this is a Content omission rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits 'are' from 'others are studying'. The remainder of the sentence is accurate, clearly pronounced and fluent, so the main issue is a meaningful Content omission rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining short grammatical words such as the auxiliary 'are'. Encourage the student to reproduce complete grammatical sequences rather than focusing only on the main vocabulary.",
    cefrLevel: "B1",
    topicTitle: "Keeping Quiet While Studying",
    good: {
      transcript:
        "Please keep your voice down while others are studying.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please keep your voice down while others studying.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The auxiliary verb 'are' is omitted while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A meaningful grammatical word omission affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'are' is omitted from the target phrase 'others are studying'. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 52,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Recognise an immediate word repetition in an otherwise accurate Repeat Sentence response and distinguish the Fluency disruption from a Content error.",
    sourceQuestionId: "92",
    promptText:
      "The teacher will hand out the worksheets shortly.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-052-prompt-puck.mp3",
    promptAudio:
      "The teacher will hand out the worksheets shortly.",
    studentTranscript:
      "The teacher will hand hand out the worksheets shortly.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but the word 'hand' is repeated once, creating a brief fluency disruption. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words are present",
      "The word 'hand' is produced twice",
      "The repetition creates a brief interruption in continuous delivery",
      "There is no meaningful target-word omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'hand' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation is clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'hand' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation is clear, so the teacher should focus on the fluency disruption.",
    coachingAdvice:
      "Practise the phrase 'hand out the worksheets' at a steady pace. Encourage the student to move forward after 'hand' without repeating the word.",
    cefrLevel: "B1",
    topicTitle: "Handing Out Worksheets",
    good: {
      transcript:
        "The teacher will hand out the worksheets shortly.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will hand hand out the worksheets shortly.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but 'hand' is repeated once, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'hand'. Do not convert the repetition into a Content omission.",
  },
  {
    exerciseIndex: 53,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word Insertion",
    learningObjective:
      "Identify an unnecessary inserted word in an otherwise accurate Repeat Sentence response and distinguish the Content issue from strong Pronunciation and Oral Fluency.",
    sourceQuestionId: "93",
    promptText:
      "The bus stop is located just outside the main gate.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-053-prompt-sulafat.mp3",
    promptAudio:
      "The bus stop is located just outside the main gate.",
    studentTranscript:
      "The bus stop is located just outside the main front gate.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student inserts the word 'front' before 'gate'. The rest of the sentence is accurately reproduced with clear Pronunciation and continuous Oral Fluency.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'the main gate'",
      "The student says 'the main front gate'",
      "The inserted word 'front' is not part of the target",
      "The remaining target words are accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts the word 'front', which is not present in the target sentence. The remainder is accurately and fluently delivered, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts 'front' before 'gate', adding a word that is not present in the target. The rest of the sentence is accurate, clearly pronounced and fluent, so this is a Content insertion rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise reproducing the exact target wording without adding plausible descriptive words. Encourage the student to retain the heard sequence rather than expanding it from memory.",
    cefrLevel: "B1",
    topicTitle: "Bus Stop Location",
    good: {
      transcript:
        "The bus stop is located just outside the main gate.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The bus stop is located just outside the main front gate.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The unnecessary word 'front' is inserted before 'gate', while the remaining sentence is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary inserted word affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'front' is inserted into the target sentence. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 54,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify an unnecessary immediate word repetition that disrupts Oral Fluency while the target Content remains substantially intact.",
    sourceQuestionId: "94",
    promptText:
      "Please bring your textbook to every class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-054-prompt-iapetus.mp3",
    promptAudio:
      "Please bring your textbook to every class.",
    studentTranscript:
      "Please bring your textbook textbook to every class.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student repeats 'textbook' immediately before continuing with the target sentence. The intended Content remains clear and Pronunciation is generally accurate.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Immediate repetition",
      "Oral Fluency disruption",
    ],
    expertEvidence: [
      "The target contains 'textbook' once",
      "The student says 'textbook' twice in succession",
      "The repeated word is unnecessary",
      "The remaining target Content is accurately reproduced",
      "Pronunciation remains generally clear",
      "The repetition is the defining delivery disruption",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'textbook' immediately before continuing with the target sentence. The intended Content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the main fluency disruption.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'textbook' twice in succession before continuing with the sentence. The target Content remains clear and Pronunciation is generally accurate, so the unnecessary repetition is the main fluency disruption rather than a Content or Pronunciation problem.",
    coachingAdvice:
      "Practise continuing forward after successfully producing each word. Encourage the student to avoid going back to repeat a word when the intended sentence sequence is already clear.",
    cefrLevel: "B1",
    topicTitle: "Bringing Textbooks to Class",
    good: {
      transcript:
        "Please bring your textbook to every class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please bring your textbook textbook to every class.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The word 'textbook' is repeated immediately, creating an Oral Fluency disruption while the intended Content remains clear.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but immediate word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "immediate-repetition",
        label: "Immediate repetition",
        keyword: "Immediate repetition",
      },
      {
        id: "fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target Content remains clear and the defining issue is the immediate repetition of 'textbook'. Do not convert the repetition into a Content omission.",
  },

  {
    exerciseIndex: 55,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Time Expression Substitution",
    learningObjective:
      "Identify a meaning-changing time-expression substitution and distinguish the resulting Content problem from Pronunciation or Oral Fluency issues.",
    sourceQuestionId: "95",
    promptText:
      "The school will organize a field trip in early June.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-055-prompt-achernar.mp3",
    promptAudio:
      "The school will organize a field trip in early June.",
    studentTranscript:
      "The school will organize a field trip in late June.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student substitutes 'late' for 'early'. The substituted word is clearly pronounced and the remainder of the sentence is fluently delivered.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Time-expression substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'in early June'",
      "The student says 'in late June'",
      "The time reference changes from early to late in the month",
      "The remainder of the sentence is accurately reproduced",
      "The substituted word is clearly pronounced",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'late' for 'early', changing the intended time reference within June. The substituted word is clearly pronounced and the rest of the response is fluent, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'late June' instead of 'early June', changing the intended time reference. The substituted word is clearly pronounced and the rest of the sentence is fluent, so this is a meaning-changing Content substitution rather than a Pronunciation or Oral Fluency problem.",
    coachingAdvice:
      "Practise retaining precise time expressions such as 'in early June'. Encourage the student to reproduce the exact temporal detail rather than replacing it with a similar but meaning-changing expression.",
    cefrLevel: "B1",
    topicTitle: "School Field Trip Planning",
    good: {
      transcript:
        "The school will organize a field trip in early June.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school will organize a field trip in late June.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student substitutes 'late' for 'early', changing the time reference while maintaining clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing time-expression substitution affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "time-expression-substitution",
        label: "Time-expression substitution",
        keyword: "Time-expression substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'late' replaces the target word 'early' and changes the intended timing of the field trip. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery remains fluent.",
  },

  {
    exerciseIndex: 56,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution that changes the meaning of a Repeat Sentence response and distinguish it from a Pronunciation error.",
    sourceQuestionId: "96",
    promptText:
      "The computer lab is open until eight in the evening.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-056-prompt-orus.mp3",
    promptAudio:
      "The computer lab is open until eight in the evening.",
    studentTranscript:
      "The computer lab is open until wait in the evening.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'wait' for the target word 'eight'. The substituted word is clearly pronounced, but it is a different lexical item and therefore changes the accuracy of the response.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'eight'",
      "The student says 'wait'",
      "The substituted word is clearly pronounced",
      "The two words are different lexical items",
      "The substitution means the target sentence has not been reproduced accurately",
      "The remainder of the sentence is reproduced accurately",
      "Oral Fluency remains generally clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'wait' for the target word 'eight', so the required lexical item is not reproduced accurately. Although the two words share the /eɪt/ sound sequence, 'wait' is a different word because it begins with /w/. The substituted word is clearly pronounced and the response remains fluent, so this should not be diagnosed as a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'wait' for the target word 'eight', so the required lexical item is not reproduced accurately. Although the words sound similar, 'wait' is a different word because it includes an initial /w/ sound. The substituted word is clearly pronounced and the rest of the response is fluent, so the main issue is Content rather than Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Contrast the target word 'eight' with the student's substitution 'wait'. Practise the exact phrase 'until eight in the evening' and focus on reproducing the correct lexical item rather than accepting a similar-sounding word.",
    cefrLevel: "B1",
    topicTitle: "Computer Lab Opening Hours",
    good: {
      transcript:
        "The computer lab is open until eight in the evening.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The computer lab is open until wait in the evening.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'wait' for 'eight' while maintaining otherwise clear Pronunciation and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution reduces Content accuracy while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'wait' replaces the target word 'eight', so the required lexical item is not reproduced accurately. The substitution is clearly pronounced and delivery remains fluent. Do not diagnose Pronunciation simply because the two words sound similar.",
  },

  {
    exerciseIndex: 57,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify a meaningful omitted word in a short Repeat Sentence response and distinguish the Content problem from Pronunciation and Oral Fluency.",
    sourceQuestionId: "97",
    promptText:
      "Please make sure your phone is on silent mode.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-057-prompt-leda.mp3",
    promptAudio:
      "Please make sure your phone is on silent mode.",
    studentTranscript:
      "Please make sure your phone is on mode.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student omits the meaningful word 'silent'. The remaining sentence is clearly pronounced and continuously delivered.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Content omission",
      "Loss of key descriptor",
    ],
    expertEvidence: [
      "The target contains the phrase 'on silent mode'",
      "The student says 'on mode'",
      "The adjective 'silent' is omitted",
      "The omission removes an important property of the phone setting",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits 'silent', removing the key descriptor from the phrase 'silent mode'. The remainder is clearly pronounced and fluently delivered, so the main issue is Content rather than Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student omits 'silent' from 'silent mode', removing an important detail about the phone setting. The rest of the response is clear and fluent, so the teacher should focus on the Content omission rather than diagnosing Pronunciation or Oral Fluency.",
    coachingAdvice:
      "Practise retaining the complete chunk 'is on silent mode'. Emphasise that 'silent' carries important information and should not be dropped from the repeated sentence.",
    cefrLevel: "B1",
    topicTitle: "Phone Silent Mode",
    good: {
      transcript:
        "Please make sure your phone is on silent mode.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please make sure your phone is on mode.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The meaningful word 'silent' is omitted while the remainder is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaningful word omission affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-omission",
        label: "Content omission",
        keyword: "Content omission",
      },
      {
        id: "key-descriptor-omission",
        label: "Key descriptor omission",
        keyword: "Key descriptor omission",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'silent' is omitted from the target phrase 'silent mode'. Do not diagnose Pronunciation or Oral Fluency when the remaining response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 58,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution in an otherwise fluent Repeat Sentence response and distinguish it from a Pronunciation problem.",
    sourceQuestionId: "98",
    promptText:
      "The teacher will review the answers with the class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-058-prompt-puck.mp3",
    promptAudio:
      "The teacher will review the answers with the class.",
    studentTranscript:
      "The teacher will review the questions with the class.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'questions' for 'answers'. The rest of the sentence is reproduced fluently and clearly.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'answers'",
      "The student says 'questions' instead",
      "'Questions' is a different lexical item, not a pronunciation variant",
      "The substitution changes the meaning of what the teacher will review",
      "The remainder of the sentence is reproduced accurately",
      "Delivery remains fluent and Pronunciation is clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'questions' for 'answers'. Because 'questions' is a different word and is clearly pronounced, this is a lexical substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'questions' instead of the target word 'answers'. This is a lexical substitution because the student produces a different word with a different meaning. The rest of the response is fluent and clearly pronounced.",
    coachingAdvice:
      "Contrast 'answers' and 'questions' and practise reproducing the exact target word. Then repeat the full sentence while maintaining the same fluent delivery.",
    cefrLevel: "B1",
    topicTitle: "Teacher Reviewing Answers",
    good: {
      transcript:
        "The teacher will review the answers with the class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will review the questions with the class.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'questions' for 'answers' while maintaining otherwise fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution affects Content while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Listen for the actual lexical item before diagnosing Pronunciation. 'Questions' and 'answers' are different words. The primary teaching issue is Content accuracy while Oral Fluency remains strong.",
  },
  {
    exerciseIndex: 59,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Unnecessary Word Insertion",
    learningObjective:
      "Identify an unnecessary lexical insertion in an otherwise accurate Repeat Sentence response and distinguish the Content issue from Pronunciation and Oral Fluency.",
    sourceQuestionId: "99",
    promptText:
      "The library offers free Wi-Fi for all students.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-059-prompt-sulafat.mp3",
    promptAudio:
      "The library offers free Wi-Fi for all students.",
    studentTranscript:
      "The library offers free Wi-Fi for all university students.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student inserts the word 'university' before 'students'. The rest of the sentence is clearly pronounced and fluently delivered.",
    },
    diagnosticErrors: [
      "Word insertion",
      "Unnecessary lexical addition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'for all students'",
      "The student says 'for all university students'",
      "The word 'university' is not present in the target",
      "The inserted word adds information that was not stated",
      "The remaining sentence is accurately reproduced",
      "Pronunciation and Oral Fluency remain clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student inserts 'university' before 'students', adding a word that is not part of the target sentence. The rest of the response is clear and fluent, so the teacher should diagnose the unnecessary Content insertion rather than Pronunciation or Oral Fluency.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student inserts 'university' into the phrase 'for all students'. The extra word is not part of the target sentence, while the rest of the response is clear and fluent. The main issue is unnecessary Content insertion.",
    coachingAdvice:
      "Practise reproducing the exact phrase 'for all students' without adding plausible context. Encourage the student to retain the original wording rather than expanding it from expectation.",
    cefrLevel: "B1",
    topicTitle: "Library Wi-Fi Access",
    good: {
      transcript:
        "The library offers free Wi-Fi for all students.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library offers free Wi-Fi for all university students.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The unnecessary word 'university' is inserted before 'students' while the remainder is clearly and fluently delivered.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "An unnecessary lexical insertion affects Content accuracy while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion",
      },
      {
        id: "unnecessary-lexical-addition",
        label: "Unnecessary lexical addition",
        keyword: "Unnecessary lexical addition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'university' is inserted even though it is not part of the target sentence. Do not diagnose Pronunciation or Oral Fluency when the response is clearly pronounced and continuously delivered.",
  },

  {
    exerciseIndex: 60,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Location Substitution",
    learningObjective:
      "Identify a meaning-changing location substitution and distinguish the Content problem from Pronunciation and Oral Fluency.",
    sourceQuestionId: "100",
    promptText:
      "Please hand in your homework at the front desk.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-060-prompt-iapetus.mp3",
    promptAudio:
      "Please hand in your homework at the front desk.",
    studentTranscript:
      "Please hand in your homework at the main desk.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student substitutes 'main' for 'front'. The substituted word is clearly pronounced and the remainder of the sentence is fluently delivered.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Location-expression substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target says 'at the front desk'",
      "The student says 'at the main desk'",
      "The location expression has been changed",
      "The substituted word is a different lexical item",
      "The remainder of the sentence is accurately reproduced",
      "Pronunciation remains clear",
      "Oral Fluency remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student substitutes 'main' for 'front', changing the target location expression. The substituted word is clearly pronounced and the remainder is fluent, so this is a Content substitution rather than a Pronunciation or Oral Fluency problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content accuracy. The student says 'main desk' instead of the target 'front desk'. This changes the location expression, while Pronunciation and Oral Fluency remain strong. The teacher should focus on the lexical substitution rather than diagnosing a delivery problem.",
    coachingAdvice:
      "Practise retaining the exact location phrase 'at the front desk'. Contrast 'front' and 'main' so the student recognises that a plausible alternative is still a Content substitution in Repeat Sentence.",
    cefrLevel: "B1",
    topicTitle: "Handing In Homework",
    good: {
      transcript:
        "Please hand in your homework at the front desk.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please hand in your homework at the main desk.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student substitutes 'main' for 'front', changing the location expression while maintaining clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing location substitution affects Content while Pronunciation and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "location-expression-substitution",
        label: "Location-expression substitution",
        keyword: "Location-expression substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'main' replaces the target word 'front' and changes the location expression. Do not diagnose Pronunciation or Oral Fluency when the substituted word is clearly pronounced and delivery remains continuous.",
  },

  {
    exerciseIndex: 61,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Recognise a word-order disruption in an otherwise complete Repeat Sentence response and distinguish the Content error from Fluency or Pronunciation problems.",
    sourceQuestionId: "101",
    promptText:
      "The class will begin as soon as everyone is seated.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-061-prompt-achernar.mp3",
    promptAudio:
      "The class will begin as soon as everyone is seated.",
    studentTranscript:
      "The class will begin as everyone is seated as soon.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are reproduced, but the final phrase is placed in the wrong sequence. Delivery remains continuous and pronunciation is clear.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Syntactic sequence error",
      "Content accuracy",
    ],
    expertEvidence: [
      "All major target words are present",
      "The target sequence is 'as soon as everyone is seated'",
      "The student produces 'as everyone is seated as soon'",
      "The altered sequence disrupts the target sentence structure",
      "Delivery remains continuous",
      "Pronunciation remains clear",
      "The primary issue is Content accuracy",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student reproduces the relevant vocabulary but changes the required word order in the phrase 'as soon as everyone is seated'. Because Repeat Sentence requires accurate reproduction of the sequence, this is a meaningful Content error rather than a Fluency or Pronunciation problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student retains the target words but changes their order from 'as soon as everyone is seated' to 'as everyone is seated as soon'. The disrupted sequence means the sentence has not been reproduced accurately. Fluency and Pronunciation remain clear.",
    coachingAdvice:
      "Practise the chunk 'as soon as everyone is seated' as a fixed language unit. Then repeat the complete sentence while preserving the original word order.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Timing and Attendance",
    good: {
      transcript:
        "The class will begin as soon as everyone is seated.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete reproduction with accurate word order, clear pronunciation and smooth continuous delivery.",
    },
    poor: {
      transcript:
        "The class will begin as everyone is seated as soon.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All major target words are present, but the final phrase is reproduced in the wrong sequence.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The target vocabulary is present but word order is disrupted, affecting Content while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "syntactic-sequence-error",
        label: "Syntactic sequence error",
        keyword: "Syntactic sequence error",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the target words are present but the sequence is wrong. Focus on the phrase 'as soon as everyone is seated' and do not diagnose Fluency or Pronunciation when the delivery itself is clear.",
  },
  {
    exerciseIndex: 62,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Numerical Substitution",
    learningObjective:
      "Recognise when a numerical detail is replaced with a different value and explain why the substitution affects Content accuracy even though the rest of the sentence is reproduced correctly.",
    sourceQuestionId: "102",
    promptText:
      "The school cafeteria closes at three in the afternoon.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-062-prompt-orus.mp3",
    promptAudio:
      "The school cafeteria closes at three in the afternoon.",
    studentTranscript:
      "The school cafeteria closes at two in the afternoon.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The response is otherwise accurate and fluent, but the numerical detail 'three' is replaced by 'two'.",
    },
    diagnosticErrors: [
      "Numerical substitution",
      "Meaning-changing detail",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target time is 'three in the afternoon'",
      "The student says 'two in the afternoon'",
      "The numerical substitution changes the stated closing time",
      "The remainder of the sentence is reproduced accurately",
      "Delivery remains fluent",
      "The primary issue is Content accuracy rather than Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student changes the numerical detail from three to two, producing a different closing time. The rest of the sentence is accurate and fluent, so the teacher should identify the specific meaning-changing substitution rather than treating the whole response as inaccurate.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'two' instead of the target 'three'. This changes the stated closing time, so it is a meaning-changing numerical substitution. The rest of the sentence is accurate and fluent.",
    coachingAdvice:
      "Train the student to retain numerical details exactly. Practise the complete phrase 'closes at three in the afternoon' and then repeat the full sentence without changing the time.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "School Cafeteria Opening Hours",
    good: {
      transcript:
        "The school cafeteria closes at three in the afternoon.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with the correct numerical detail, clear pronunciation and smooth fluency.",
    },
    poor: {
      transcript:
        "The school cafeteria closes at two in the afternoon.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The sentence is otherwise accurate, but 'two' replaces the target numerical detail 'three'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with correct numerical detail, clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The numerical substitution changes the stated closing time, reducing Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "numerical-substitution",
        label: "Numerical substitution",
        keyword: "Numerical substitution",
      },
      {
        id: "meaning-changing-detail",
        label: "Meaning-changing detail",
        keyword: "Meaning-changing detail",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'two' replaces the target numerical detail 'three' and changes the stated closing time. The rest of the response is accurate and fluent.",
  },

  {
    exerciseIndex: 63,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify a meaningful omitted phrase in an otherwise accurate response and distinguish a specific Content omission from a general failure to reproduce the sentence.",
    sourceQuestionId: "103",
    promptText:
      "Please check the schedule for any room changes.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-063-prompt-leda.mp3",
    promptAudio:
      "Please check the schedule for any room changes.",
    studentTranscript:
      "Please check the schedule for any changes.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student reproduces the instruction clearly but omits the phrase 'room' before 'changes', reducing the specificity of what should be checked.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Loss of specificity",
      "Content accuracy",
    ],
    expertEvidence: [
      "The instruction to check the schedule is reproduced",
      "The student omits 'room' from 'room changes'",
      "The omission makes the object of 'changes' less specific",
      "The response remains understandable",
      "Pronunciation and Fluency remain clear",
      "The primary issue is Content accuracy",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'room', changing the specific instruction about checking for room changes into the broader instruction to check for changes. The core instruction remains understandable, but meaningful specificity has been lost.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'room' from the phrase 'room changes'. The response remains understandable, but the omission removes important specificity about the type of changes being checked. Fluency and Pronunciation remain clear.",
    coachingAdvice:
      "Practise the complete phrase 'for any room changes' as a unit. Emphasise that short modifiers can carry useful information and should not automatically be treated as disposable words.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Schedule Changes",
    good: {
      transcript:
        "Please check the schedule for any room changes.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete reproduction with accurate Content, clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "Please check the schedule for any changes.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The response is clear and fluent but omits the word 'room', reducing the specificity of the instruction.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "Omission of 'room' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "loss-of-specificity",
        label: "Loss of specificity",
        keyword: "Loss of specificity",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Identify the omitted word 'room' and explain its function: it specifies the type of changes being checked. Keep the diagnosis proportionate; this is a Content precision issue, not a total failure to understand the sentence.",
  },

  {
    exerciseIndex: 64,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Recognise unnecessary word repetition as an Oral Fluency issue when the target Content is otherwise reproduced accurately.",
    sourceQuestionId: "104",
    promptText:
      "The teacher will give a short quiz at the end of the lesson.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-064-prompt-puck.mp3",
    promptAudio:
      "The teacher will give a short quiz at the end of the lesson.",
    studentTranscript:
      "The teacher will give a short short quiz at the end of the lesson.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The target sentence is reproduced with one unnecessary repetition of 'short'. The rest of the response is continuous and clearly pronounced.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Interrupted fluency",
    ],
    expertEvidence: [
      "The target word 'short' is repeated unnecessarily",
      "The rest of the sentence is reproduced accurately",
      "The repetition interrupts the natural flow of the phrase 'a short quiz'",
      "There is no meaningful Content omission",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'short' before continuing with 'quiz'. The target content is otherwise present, so the teacher should identify the repetition as a delivery disruption rather than a Content omission.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student unnecessarily repeats 'short' in 'a short short quiz'. The target Content is otherwise reproduced, so the main issue is the disruption to smooth delivery rather than Content accuracy.",
    coachingAdvice:
      "Practise the chunk 'a short quiz' without restarting or repeating the adjective. Then repeat the full sentence while maintaining the same phrase as one continuous unit.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Quiz Instructions",
    good: {
      transcript:
        "The teacher will give a short quiz at the end of the lesson.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 11,
      characteristics:
        "Accurate reproduction with smooth phrase grouping and clear pronunciation.",
    },
    poor: {
      transcript:
        "The teacher will give a short short quiz at the end of the lesson.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The target sentence is reproduced, but 'short' is unnecessarily repeated before 'quiz'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains accurate overall, but unnecessary word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "complete-content",
        label: "Complete Content",
        keyword: "Complete Content",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the response contains the target information but unnecessarily repeats 'short'. Do not mark the repetition as a Content omission or Pronunciation problem.",
  },

  {
    exerciseIndex: 65,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly different lexical item that replaces a target word and explain the resulting Content problem without confusing it with a general Fluency issue.",
    sourceQuestionId: "105",
    promptText:
      "The building has elevators on both sides of the hall.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-065-prompt-sulafat.mp3",
    promptAudio:
      "The building has elevators on both sides of the hall.",
    studentTranscript:
      "The building has escalators on both sides of the hall.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The response is fluent and clearly pronounced, but 'escalators' replaces the target word 'elevators', changing the type of facility being described.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing word",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'elevators'",
      "The student says 'escalators'",
      "The two words refer to different types of transport within a building",
      "The substitution changes the intended meaning",
      "The remainder of the sentence is reproduced accurately",
      "Fluency and general Pronunciation remain clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'escalators' for 'elevators'. Both are valid English words, but they refer to different facilities, so the substitution changes the meaning of the sentence. The rest of the response is fluent and clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'escalators' instead of 'elevators'. This is a genuine lexical substitution because the two words refer to different facilities and therefore change the meaning. The remainder of the sentence is accurate and fluent.",
    coachingAdvice:
      "Contrast 'elevators' and 'escalators' explicitly, then practise the full sentence with the target word 'elevators'. Focus on retaining the exact lexical item rather than relying on a related building word.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Building Facilities",
    good: {
      transcript:
        "The building has elevators on both sides of the hall.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with the correct facility term, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The building has escalators on both sides of the hall.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'escalators' for the target word 'elevators' while maintaining fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-word",
        label: "Meaning-changing word",
        keyword: "Meaning-changing word",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'escalators' replaces 'elevators' and changes the meaning. Both are clearly pronounced words, so this should not be treated as a general Fluency problem.",
  },

    {
    exerciseIndex: 66,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify a meaningful omitted phrase in an otherwise accurate Repeat Sentence response and distinguish specific Content loss from a general delivery problem.",
    sourceQuestionId: "106",
    promptText:
      "Please keep your belongings with you at all times.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-066-prompt-iapetus.mp3",
    promptAudio:
      "Please keep your belongings with you at all times.",
    studentTranscript:
      "Please keep your belongings at all times.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The response is clear and fluent but omits the phrase 'with you', removing an important part of the instruction.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Loss of instruction detail",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the phrase 'with you'",
      "The student omits 'with you'",
      "The remaining sentence is reproduced accurately",
      "The omission changes the specificity of the instruction",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'with you', which is an important part of the instruction about keeping belongings with the speaker. The rest of the sentence is accurate and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'with you', which removes an important part of the instruction. The rest of the sentence is accurate and fluent, so this should be diagnosed as a specific Content omission rather than a general delivery problem.",
    coachingAdvice:
      "Practise the complete chunk 'keep your belongings with you'. Emphasise that short phrases can carry important meaning and should be retained in Repeat Sentence.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Personal Belongings and Responsibility",
    good: {
      transcript:
        "Please keep your belongings with you at all times.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete reproduction with accurate Content, clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please keep your belongings at all times.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The response is fluent and clear but omits 'with you', reducing Content accuracy.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'with you' removes an important instruction detail while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "instruction-detail-loss",
        label: "Loss of instruction detail",
        keyword: "Loss of instruction detail",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'with you' is omitted. The response is otherwise fluent and clear. Do not diagnose a Fluency problem simply because the response is shorter.",
  },

  {
    exerciseIndex: 67,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Recognise when the key vocabulary is present but the target sequence has been disrupted, making word order itself the primary Content issue.",
    sourceQuestionId: "107",
    promptText:
      "The library has a quiet study area on the second floor.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-067-prompt-achernar.mp3",
    promptAudio:
      "The library has a quiet study area on the second floor.",
    studentTranscript:
      "The library has a quiet study area on the floor second.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student reproduces the target vocabulary but disrupts the word order in the final phrase, producing 'the floor second'.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Syntactic sequence error",
      "Content accuracy",
    ],
    expertEvidence: [
      "The main target vocabulary is present",
      "The target phrase is 'the second floor'",
      "The student produces 'the floor second'",
      "The sequence is grammatically disrupted",
      "The issue is not caused by a missing key concept",
      "Fluency and Pronunciation remain generally clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student remembers the relevant words but does not reproduce their required sequence. In Repeat Sentence, accurate word order is part of accurate Content reproduction.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student includes the correct vocabulary but changes the required sequence from 'the second floor' to 'the floor second'. The problem is word-order accuracy rather than a general Fluency or Pronunciation issue.",
    coachingAdvice:
      "Practise 'on the second floor' as a fixed phrase. Then repeat the complete sentence while preserving the target word order.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Library Study Facilities",
    good: {
      transcript:
        "The library has a quiet study area on the second floor.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 12,
      characteristics:
        "Accurate word order with clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "The library has a quiet study area on the floor second.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The key words are present, but the order of 'second floor' is disrupted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The target vocabulary is present but word order is disrupted, reducing Content accuracy.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "syntactic-sequence-error",
        label: "Syntactic sequence error",
        keyword: "Syntactic sequence error",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Do not give full Content credit merely because the individual words are present. The target sequence 'the second floor' must be reproduced accurately.",
  },

  {
    exerciseIndex: 68,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the loss of a specific instructional phrase and distinguish it from a minor function-word error.",
    sourceQuestionId: "108",
    promptText:
      "The school will provide materials for the workshop.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-068-prompt-orus.mp3",
    promptAudio:
      "The school will provide materials for the workshop.",
    studentTranscript:
      "The school will provide materials.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main proposition is reproduced, but the phrase 'for the workshop' is omitted, removing the purpose of the materials.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Loss of purpose information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The student correctly reproduces the main proposition",
      "The phrase 'for the workshop' is missing",
      "The omission removes information about the intended purpose of the materials",
      "The response remains understandable",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'for the workshop', removing useful information about the purpose of the materials. The response is not a total Content failure, but the omitted phrase is meaningful.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'for the workshop', which removes the purpose information attached to the materials. The main proposition remains, but the sentence is less precise.",
    coachingAdvice:
      "Practise the final chunk 'materials for the workshop' as one unit. Reinforce that purpose phrases should be retained because they add specific meaning.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Workshop Materials",
    good: {
      transcript:
        "The school will provide materials for the workshop.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete reproduction with accurate Content and clear delivery.",
    },
    poor: {
      transcript:
        "The school will provide materials.",
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main proposition is retained, but the meaningful phrase 'for the workshop' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'for the workshop' removes meaningful purpose information and reduces Content accuracy.",
    },
    errorChecklist: [
      {
        id: "phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "purpose-information-loss",
        label: "Loss of purpose information",
        keyword: "Loss of purpose information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the omitted phrase specifies the purpose of the materials. The response remains understandable, so do not exaggerate the extent of the Content failure.",
  },

  {
    exerciseIndex: 69,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Recognise an inserted hesitation filler as an Oral Fluency issue when the target Content remains complete.",
    sourceQuestionId: "109",
    promptText:
      "Please raise your hand if you have a question.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-069-prompt-leda.mp3",
    promptAudio:
      "Please raise your hand if you have a question.",
    studentTranscript:
      "Please raise your hand, um, if you have a question.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but the student inserts the filler 'um' into the middle of the sentence.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words are reproduced",
      "The filler 'um' is not part of the target sentence",
      "The filler interrupts the phrase 'raise your hand if you have a question'",
      "There is no meaningful Content omission",
      "The target words remain clearly pronounced",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces the target sentence but inserts 'um' into the middle of the response. The filler interrupts otherwise continuous delivery while Content remains complete.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student inserts the filler 'um' after 'hand'. All target Content is present, so the main issue is the interruption to smooth delivery rather than Content accuracy.",
    coachingAdvice:
      "Practise the complete chunk 'raise your hand if you have a question' without inserting a filler. Encourage the student to continue through the phrase rather than filling a hesitation with 'um'.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Questions",
    good: {
      transcript:
        "Please raise your hand if you have a question.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete reproduction with smooth delivery and clear Pronunciation.",
    },
    poor: {
      transcript:
        "Please raise your hand, um, if you have a question.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but an unnecessary filler interrupts the sentence.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but filler insertion interrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "complete-content",
        label: "Complete Content",
        keyword: "Complete Content",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target sentence is complete. The inserted 'um' interrupts otherwise continuous delivery and should not be treated as a Content error.",
  },

  {
    exerciseIndex: 70,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Time Substitution",
    learningObjective:
      "Identify a changed time reference as a specific Content error when the remainder of the sentence is accurately reproduced.",
    sourceQuestionId: "110",
    promptText:
      "The teacher will explain the project guidelines today.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-070-prompt-puck.mp3",
    promptAudio:
      "The teacher will explain the project guidelines today.",
    studentTranscript:
      "The teacher will explain the project guidelines tomorrow.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The sentence is otherwise accurately reproduced, but 'tomorrow' replaces the target time reference 'today'.",
    },
    diagnosticErrors: [
      "Time-reference substitution",
      "Meaning-changing detail",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target time reference is 'today'",
      "The student says 'tomorrow'",
      "The substitution changes when the teacher will explain the guidelines",
      "The remainder of the sentence is accurate",
      "Delivery is continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student changes the time reference from 'today' to 'tomorrow', which changes the meaning of the sentence. The rest of the response is accurate and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'tomorrow' for 'today'. This changes the timing of the event, so it is a meaning-changing Content error. The rest of the sentence is accurately reproduced.",
    coachingAdvice:
      "Practise retaining time expressions exactly, especially short words such as 'today' and 'tomorrow'. Repeat the full sentence while maintaining the correct time reference.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Project Guidelines and Deadlines",
    good: {
      transcript:
        "The teacher will explain the project guidelines today.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate time reference with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will explain the project guidelines tomorrow.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The sentence is otherwise accurate, but 'tomorrow' replaces the target time reference 'today'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with correct time reference, clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The changed time reference alters the meaning while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "time-reference-substitution",
        label: "Time-reference substitution",
        keyword: "Time-reference substitution",
      },
      {
        id: "meaning-changing-detail",
        label: "Meaning-changing detail",
        keyword: "Meaning-changing detail",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'tomorrow' changes the target time reference 'today'. Do not overlook short time words simply because the rest of the sentence is accurate.",
  },

  {
    exerciseIndex: 71,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Numerical Substitution",
    learningObjective:
      "Recognise a changed numerical detail as a Content error and distinguish it from a general Fluency or Pronunciation problem.",
    sourceQuestionId: "111",
    promptText:
      "The bus arrives at the station every fifteen minutes.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-071-prompt-sulafat.mp3",
    promptAudio:
      "The bus arrives at the station every fifteen minutes.",
    studentTranscript:
      "The bus arrives at the station every twenty minutes.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The response is fluent and clear, but the numerical detail 'fifteen' is replaced by 'twenty'.",
    },
    diagnosticErrors: [
      "Numerical substitution",
      "Meaning-changing detail",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target interval is 'fifteen minutes'",
      "The student says 'twenty minutes'",
      "The numerical substitution changes the bus frequency",
      "The rest of the sentence is reproduced accurately",
      "Fluency remains continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student changes the numerical interval from fifteen to twenty minutes, altering the stated bus frequency. The rest of the sentence is accurate and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'twenty' instead of 'fifteen', changing the stated bus frequency. The remainder of the sentence is accurate, so this is a specific numerical Content error.",
    coachingAdvice:
      "Practise retaining the complete numerical phrase 'every fifteen minutes'. Encourage accurate recall of numbers rather than approximate substitution.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Bus Frequency and Timetables",
    good: {
      transcript:
        "The bus arrives at the station every fifteen minutes.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate numerical detail with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The bus arrives at the station every twenty minutes.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The sentence is otherwise accurate, but 'twenty' replaces the target numerical detail 'fifteen'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with the correct numerical detail and clear delivery.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The numerical substitution changes the stated frequency while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "numerical-substitution",
        label: "Numerical substitution",
        keyword: "Numerical substitution",
      },
      {
        id: "meaning-changing-detail",
        label: "Meaning-changing detail",
        keyword: "Meaning-changing detail",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'twenty' replaces 'fifteen' and changes the stated bus frequency. The delivery itself remains clear.",
  },

    {
    exerciseIndex: 72,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Recognise unnecessary repetition of a target word as a fluency disruption when the sentence Content is otherwise intact.",
    sourceQuestionId: "113",
    promptText:
      "The school encourages students to read every day.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-072-prompt-iapetus.mp3",
    promptAudio:
      "The school encourages students to read every day.",
    studentTranscript:
      "The school encourages students to read read every day.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The target sentence is reproduced with one unnecessary repetition of 'read'. The rest of the response is fluent.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "The target word 'read' is repeated",
      "The repeated word is not required by the target sentence",
      "The rest of the sentence is reproduced accurately",
      "There is no meaningful Content omission",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student unnecessarily repeats 'read' before continuing with 'every day'. Content is otherwise complete.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'read' in 'read read every day'. The target Content is otherwise complete, so the repetition should be diagnosed as a fluency disruption.",
    coachingAdvice:
      "Practise the phrase 'to read every day' without restarting or repeating the verb. Then repeat the full sentence with continuous delivery.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Reading Habits",
    good: {
      transcript:
        "The school encourages students to read every day.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with smooth delivery and clear Pronunciation.",
    },
    poor: {
      transcript:
        "The school encourages students to read read every day.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The target sentence is reproduced, but 'read' is unnecessarily repeated.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but unnecessary repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "complete-content",
        label: "Complete Content",
        keyword: "Complete Content",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target words are present and the main disruption is the unnecessary repetition of 'read'.",
  },

  {
    exerciseIndex: 73,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful modifier and distinguish it from a minor function-word error.",
    sourceQuestionId: "114",
    promptText:
      "The teacher will show a short video during the lesson.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-073-prompt-achernar.mp3",
    promptAudio:
      "The teacher will show a short video during the lesson.",
    studentTranscript:
      "The teacher will show a video during the lesson.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student omits the adjective 'short' but otherwise reproduces the sentence accurately and fluently.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Lost modifier",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the modifier 'short'",
      "The student omits 'short'",
      "The noun 'video' remains accurate",
      "The omission removes information about the video's duration",
      "Delivery remains continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the meaningful modifier 'short', reducing the precision of the original statement. The response remains understandable and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'short' before 'video'. The main proposition is retained, but useful information about the video is lost. Fluency and Pronunciation remain clear.",
    coachingAdvice:
      "Practise retaining the phrase 'a short video'. Explain that descriptive modifiers can carry useful information and should not automatically be dropped.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Video Activities",
    good: {
      transcript:
        "The teacher will show a short video during the lesson.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete reproduction with accurate Content and clear delivery.",
    },
    poor: {
      transcript:
        "The teacher will show a video during the lesson.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The response is fluent and clear but omits the meaningful modifier 'short'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "Omission of 'short' reduces Content precision while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "lost-modifier",
        label: "Lost modifier",
        keyword: "Lost modifier",
      },
      {
        id: "content-precision",
        label: "Content precision",
        keyword: "Content precision",
      },
    ],
    expertAdvice:
      "Identify the missing modifier 'short'. The omission affects Content precision, but the core proposition remains intact. Do not exaggerate this into a total Content failure.",
  },

  {
    exerciseIndex: 74,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly different lexical item replacing a target word and distinguish a genuine Content substitution from a pronunciation or Fluency problem.",
    sourceQuestionId: "115",
    promptText:
      "Please keep the classroom clean and organized.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-074-prompt-orus.mp3",
    promptAudio:
      "Please keep the classroom clean and organized.",
    studentTranscript:
      "Please keep the classroom clean and tidy.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The response is fluent and clearly pronounced, but 'tidy' replaces the target word 'organized'.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing word",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'organized'",
      "The student says 'tidy'",
      "The substituted word is a different lexical item",
      "The substitution changes the wording and reduces exact Content reproduction",
      "The remainder of the sentence is accurate",
      "Fluency and Pronunciation remain clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'tidy' for 'organized'. Although the words are related in meaning, 'tidy' is not the target lexical item, so the response does not reproduce the sentence exactly. The delivery remains fluent and clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'tidy' instead of the target word 'organized'. This is a lexical substitution. The words are related, but the target lexical item has not been reproduced. Fluency and Pronunciation remain clear.",
    coachingAdvice:
      "Practise the exact phrase 'clean and organized'. Explain that related vocabulary is not automatically equivalent to accurate Repeat Sentence reproduction.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Classroom Organisation",
    good: {
      transcript:
        "Please keep the classroom clean and organized.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Exact lexical reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please keep the classroom clean and tidy.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student substitutes 'tidy' for the target word 'organized' while maintaining fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Exact Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A lexical substitution reduces exact Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-word",
        label: "Different lexical item",
        keyword: "Different lexical item",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'tidy' replaces the target word 'organized'. The words are related, but the student has produced a different lexical item. Fluency and Pronunciation remain clear.",
  },

  {
    exerciseIndex: 75,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the omission of a meaningful phrase in a Repeat Sentence response while distinguishing it from Fluency and Pronunciation problems.",
    sourceQuestionId: "116",
    promptText:
      "The library offers free workshops on research skills.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-075-prompt-leda.mp3",
    promptAudio:
      "The library offers free workshops on research skills.",
    studentTranscript:
      "The library offers free workshops.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main proposition is reproduced clearly, but the meaningful phrase 'on research skills' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Loss of specific information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the phrase 'on research skills'",
      "The student omits 'on research skills'",
      "The main proposition about free workshops remains",
      "The omission removes the subject or focus of the workshops",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'on research skills', removing important information about what the workshops cover. The remaining response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'on research skills', so the response no longer specifies what the workshops are about. The main proposition remains, but meaningful Content has been lost.",
    coachingAdvice:
      "Practise the complete chunk 'free workshops on research skills'. Encourage the student to retain the final information-bearing phrase rather than stopping after the main noun phrase.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Library Research Workshops",
    good: {
      transcript:
        "The library offers free workshops on research skills.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library offers free workshops.",
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The response is clear and fluent but omits the meaningful phrase 'on research skills'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'on research skills' removes important information while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "specific-information-loss",
        label: "Loss of specific information",
        keyword: "Loss of specific information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the student omits 'on research skills', which identifies the subject of the workshops. Fluency and Pronunciation remain clear.",
  },

    {
    exerciseIndex: 76,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Identify a word-order disruption in an otherwise substantially complete Repeat Sentence response and distinguish it from a Pronunciation or Oral Fluency problem.",
    sourceQuestionId: "117",
    promptText:
      "The next lesson will focus on listening practice.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-076-prompt-puck.mp3",
    promptAudio:
      "The next lesson will focus on listening practice.",
    studentTranscript:
      "The next lesson will focus on practice listening.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The major target words are reproduced, but the final phrase is reordered from 'listening practice' to 'practice listening'. Pronunciation remains clear and delivery remains continuous.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Content sequence error",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target phrase is 'listening practice'",
      "The student says 'practice listening'",
      "The key vocabulary is present but the required sequence is changed",
      "The altered sequence affects accurate Content reproduction",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student reproduces the key vocabulary but changes the required sequence from 'listening practice' to 'practice listening'. Because accurate word order is part of Repeat Sentence Content reproduction, this is a meaningful Content error. Pronunciation and Oral Fluency are not the main problems.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student changes the target phrase 'listening practice' to 'practice listening', so the key vocabulary is present but the required word order is not reproduced accurately. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the fixed chunk 'listening practice' as one unit. Encourage the student to retain the original word order rather than reconstructing the phrase from individual words.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Listening Practice Lesson",
    good: {
      transcript:
        "The next lesson will focus on listening practice.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The next lesson will focus on practice listening.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The key vocabulary is present, but the final phrase is reproduced in the wrong order.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The target vocabulary is present but the phrase order is disrupted. Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "content-sequence-error",
        label: "Content sequence error",
        keyword: "Content sequence error",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'practice listening' replaces the target sequence 'listening practice'. Do not misclassify the altered sequence as Pronunciation or Oral Fluency when both delivery dimensions remain clear.",
  },

  {
    exerciseIndex: 77,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify a brief word repetition in an otherwise complete Repeat Sentence response and distinguish the Fluency disruption from Content loss.",
    sourceQuestionId: "118",
    promptText:
      "Please arrive five minutes early for your appointment.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-077-prompt-sulafat.mp3",
    promptAudio:
      "Please arrive five minutes early for your appointment.",
    studentTranscript:
      "Please arrive five minutes minutes early for your appointment.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are reproduced, but the word 'minutes' is repeated once, creating a brief fluency disruption. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words from the sentence are present",
      "The word 'minutes' is produced twice",
      "The repeated word creates a brief disruption in continuous delivery",
      "There is no meaningful Content omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'minutes' once, creating a brief self-repetition. Content remains substantially complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'minutes', creating a brief self-repetition. Content is substantially intact and Pronunciation remains clear, so the teacher should focus on the fluency disruption.",
    coachingAdvice:
      "Practise 'five minutes early' as one connected phrase. Encourage the student to continue forward after 'minutes' without repeating the word.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Appointment Arrival Time",
    good: {
      transcript:
        "Please arrive five minutes early for your appointment.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete Content with clear Pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "Please arrive five minutes minutes early for your appointment.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are present, but 'minutes' is repeated once, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but a brief word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the clear disruption is the repeated word 'minutes'. Do not diagnose a Content omission or substitution.",
  },
  {
    exerciseIndex: 78,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful word that changes the specificity of a Repeat Sentence response while distinguishing it from Pronunciation and Oral Fluency problems.",
    sourceQuestionId: "119",
    promptText:
      "The school will host a guest speaker next week.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-078-prompt-iapetus.mp3",
    promptAudio:
      "The school will host a guest speaker next week.",
    studentTranscript:
      "The school will host a speaker next week.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The main sentence structure is reproduced clearly, but the meaningful word 'guest' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of specific information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the word 'guest'",
      "The student omits 'guest'",
      "The remaining sentence structure is accurately reproduced",
      "The omission removes useful information about the speaker",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the meaningful word 'guest', reducing the specificity of the target sentence. The remaining response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the meaningful word 'guest', so the response no longer specifies that the speaker is a guest. The main proposition remains, but specific Content has been lost. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete chunk 'a guest speaker next week'. Encourage the student to retain descriptive words that add specific information to the sentence.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Guest Speaker Visit",
    good: {
      transcript:
        "The school will host a guest speaker next week.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school will host a speaker next week.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The response remains clear and fluent but omits the meaningful word 'guest'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'guest' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "specific-information-loss",
        label: "Loss of specific information",
        keyword: "Loss of specific information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'guest' adds meaningful information about the speaker. Do not dismiss the omission simply because the remaining sentence is understandable and fluent.",
  },

  {
    exerciseIndex: 79,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify a brief self-repetition in an otherwise complete Repeat Sentence response and distinguish it from a Content error.",
    sourceQuestionId: "120",
    promptText:
      "Please check your work carefully before submitting it.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-079-prompt-achernar.mp3",
    promptAudio:
      "Please check your work carefully before submitting it.",
    studentTranscript:
      "Please check your work carefully before before submitting it.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but the word 'before' is repeated once, creating a brief fluency disruption.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Fluency disruption",
      "Self-repetition",
    ],
    expertEvidence: [
      "All target words are present",
      "The word 'before' is repeated once",
      "The repetition creates a brief delivery disruption",
      "The target Content remains substantially complete",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but repeats 'before' once, creating a brief self-repetition. Content remains substantially intact and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'before', creating a brief self-repetition. Content remains substantially intact and Pronunciation remains clear, so the teacher should focus on the fluency disruption rather than inventing a Content omission.",
    coachingAdvice:
      "Practise the phrase 'carefully before submitting it' at a steady pace. Encourage the student to continue forward after 'before' rather than repeating the word.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Work Submission Check",
    good: {
      transcript:
        "Please check your work carefully before submitting it.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate reproduction with natural continuous delivery and clear pronunciation.",
    },
    poor: {
      transcript:
        "Please check your work carefully before before submitting it.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but 'before' is repeated once, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but a brief word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'before'. Do not incorrectly convert the repetition into a Content omission.",
  },

  {
    exerciseIndex: 80,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution that changes the meaning of a Repeat Sentence response and distinguish it from a Pronunciation error.",
    sourceQuestionId: "121",
    promptText:
      "The teacher will collect the forms at the end of class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-080-prompt-orus.mp3",
    promptAudio:
      "The teacher will collect the forms at the end of class.",
    studentTranscript:
      "The teacher will submit the forms at the end of class.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'submit' for 'collect' while maintaining otherwise continuous delivery.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target verb is 'collect'",
      "The student says 'submit'",
      "The substituted word has a different meaning",
      "The word is clearly pronounced",
      "The remainder of the sentence is reproduced accurately",
      "Oral Fluency remains generally clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'submit' for the target word 'collect', changing the meaning of the action. The substituted word is clearly pronounced and the response remains fluent, so Pronunciation and Oral Fluency are not the main problems.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'submit' for 'collect', changing the meaning of the sentence. The substituted word is clearly pronounced and the rest of the response is fluent, so the teacher should prioritise the meaning-changing lexical substitution rather than diagnosing Pronunciation.",
    coachingAdvice:
      "Contrast 'collect the forms' and 'submit the forms' with the student. Practise the exact target chunk 'will collect the forms' so the correct action is retained.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Form Collection",
    good: {
      transcript:
        "The teacher will collect the forms at the end of class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will submit the forms at the end of class.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The student clearly substitutes 'submit' for 'collect' while maintaining otherwise fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution reduces Content accuracy while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'submit' replaces the target word 'collect' and changes the intended meaning. Do not label this as a Pronunciation error when the substituted word is clearly pronounced.",
  },

  {
    exerciseIndex: 81,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Identify an inserted filler within an otherwise complete Repeat Sentence response and distinguish the resulting fluency disruption from a Content error.",
    sourceQuestionId: "122",
    promptText:
      "The cafeteria is offering new menu options this month.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-081-prompt-leda.mp3",
    promptAudio:
      "The cafeteria is offering new menu options this month.",
    studentTranscript:
      "The cafeteria is offering new, um, menu options this month.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are reproduced accurately, but the filler 'um' interrupts the natural phrase 'new menu options'. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Fluency disruption",
      "Interrupted phrase grouping",
    ],
    expertEvidence: [
      "All target words are present",
      "The filler 'um' is inserted after 'new'",
      "The filler interrupts the phrase 'new menu options'",
      "There is no target-word omission or substitution",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces all target words but inserts the filler 'um' inside the phrase 'new menu options'. Content is complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student inserts 'um' inside the phrase 'new menu options'. Content is complete and Pronunciation remains clear, so the teacher should focus on the filler and interrupted phrase grouping.",
    coachingAdvice:
      "Practise 'new menu options' as one connected phrase. Encourage the student to continue directly through the phrase without inserting a filler.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Cafeteria Menu Options",
    good: {
      transcript:
        "The cafeteria is offering new menu options this month.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete reproduction with natural phrase grouping, clear pronunciation and continuous delivery.",
    },
    poor: {
      transcript:
        "The cafeteria is offering new, um, menu options this month.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "All target words are present, but the inserted filler interrupts the natural phrase 'new menu options'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but a filler interrupts natural phrase grouping and reduces Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "interrupted-phrase-grouping",
        label: "Interrupted phrase grouping",
        keyword: "Interrupted phrase grouping",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because every target word is present. The filler 'um' interrupts 'new menu options', so do not convert the disruption into a Content error.",
  },

  {
    exerciseIndex: 82,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the omission of a meaningful condition from a Repeat Sentence response and distinguish the resulting Content loss from otherwise clear delivery.",
    sourceQuestionId: "123",
    promptText:
      "Please turn off the lights when you leave the room.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-082-prompt-puck.mp3",
    promptAudio:
      "Please turn off the lights when you leave the room.",
    studentTranscript:
      "Please turn off the lights.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main instruction is reproduced clearly, but the condition 'when you leave the room' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Loss of condition",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the condition 'when you leave the room'",
      "The student stops after 'turn off the lights'",
      "The omitted phrase specifies when the action should occur",
      "The main instruction remains understandable",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'when you leave the room', removing the condition attached to the instruction. The main proposition remains, but meaningful Content has been lost.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'when you leave the room', so the response gives the instruction but removes the condition specifying when it should be followed. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete chunk 'turn off the lights when you leave the room'. Encourage the student to retain the final condition rather than stopping after the main instruction.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Leaving the Room",
    good: {
      transcript:
        "Please turn off the lights when you leave the room.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please turn off the lights.",
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main instruction is clear, but the meaningful condition 'when you leave the room' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of the condition 'when you leave the room' reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "condition-loss",
        label: "Loss of condition",
        keyword: "Loss of condition",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'when you leave the room' provides an important condition for the instruction. Do not give full Content credit merely because the main instruction is understandable.",
  },

  {
    exerciseIndex: 83,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Specific Information Omission",
    learningObjective:
      "Identify the loss of a meaningful descriptive detail in a Repeat Sentence response while distinguishing it from Pronunciation and Oral Fluency problems.",
    sourceQuestionId: "124",
    promptText:
      "The school will send an email with further instructions.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-083-prompt-sulafat.mp3",
    promptAudio:
      "The school will send an email with further instructions.",
    studentTranscript:
      "The school will send an email with instructions.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The sentence is reproduced clearly, but the meaningful modifier 'further' is omitted.",
    },
    diagnosticErrors: [
      "Specific information omission",
      "Meaningful word omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the modifier 'further'",
      "The student omits 'further'",
      "The remaining sentence structure is accurate",
      "The omission reduces the specificity of the instructions",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'further', reducing the specificity of the information being communicated. The rest of the response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the meaningful modifier 'further', so the response loses some specificity about the instructions being sent. The remaining sentence is accurate, and Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the chunk 'with further instructions' as a complete unit. Encourage the student to retain descriptive modifiers that contribute to the intended meaning.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Further Instructions",
    good: {
      transcript:
        "The school will send an email with further instructions.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school will send an email with instructions.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The response is clear and fluent but omits the meaningful modifier 'further'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'further' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "specific-information-omission",
        label: "Specific information omission",
        keyword: "Specific information omission",
      },
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'further' contributes meaningful specificity to the target. Do not diagnose Pronunciation or Oral Fluency when the omitted word is simply absent from the response.",
  },

  {
    exerciseIndex: 84,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Identify a structural word-order error in a substantially complete Repeat Sentence response and distinguish it from a fluency problem.",
    sourceQuestionId: "125",
    promptText:
      "The library has computers available for student use.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-084-prompt-iapetus.mp3",
    promptAudio:
      "The library has computers available for student use.",
    studentTranscript:
      "The library has computers for student available use.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The major target vocabulary is present, but the phrase 'available for student use' is reproduced with disrupted word order.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Syntactic sequence error",
      "Content sequence accuracy",
    ],
    expertEvidence: [
      "The target sequence is 'available for student use'",
      "The student changes the sequence to 'for student available use'",
      "The major vocabulary is present",
      "The phrase structure is no longer reproduced accurately",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student retains the important vocabulary but disrupts the required word order in 'available for student use'. Because accurate sequence is part of Repeat Sentence Content reproduction, this is a meaningful Content error.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student retains the key vocabulary but changes the required sequence from 'available for student use' to 'for student available use'. The phrase structure is therefore not reproduced accurately, while Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the chunk 'available for student use' as a fixed phrase. Have the student repeat the complete phrase before reinserting it into the full sentence.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Library Computer Access",
    good: {
      transcript:
        "The library has computers available for student use.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate word order with clear Pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The library has computers for student available use.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The major vocabulary is present, but the final phrase is reproduced with disrupted word order.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The key vocabulary is present but the phrase sequence is disrupted. Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "syntactic-sequence-error",
        label: "Syntactic sequence error",
        keyword: "Syntactic sequence error",
      },
      {
        id: "content-sequence-accuracy",
        label: "Content sequence accuracy",
        keyword: "Content sequence accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the phrase 'available for student use' is reproduced in the wrong sequence. Do not reduce the diagnosis to generic fluency weakness when the main problem is structural Content accuracy.",
  },

  {
    exerciseIndex: 85,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Substitution",
    learningObjective:
      "Identify a clearly pronounced substitution that changes the temporal meaning of a Repeat Sentence response and distinguish it from a Pronunciation problem.",
    sourceQuestionId: "126",
    promptText:
      "Please wait outside until the teacher arrives.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-085-prompt-achernar.mp3",
    promptAudio:
      "Please wait outside until the teacher arrives.",
    studentTranscript:
      "Please wait outside before the teacher arrives.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student clearly substitutes 'before' for 'until', changing the temporal relationship while maintaining otherwise fluent delivery.",
    },
    diagnosticErrors: [
      "Meaning-changing substitution",
      "Temporal meaning change",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'until'",
      "The student says 'before'",
      "The substitution changes the temporal meaning",
      "The substituted word is clearly pronounced",
      "The remainder of the sentence is reproduced accurately",
      "Oral Fluency remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'before' for the target word 'until', changing the temporal meaning of the instruction. Pronunciation remains clear and the response is fluent, so the teacher should prioritise the meaning-changing substitution.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'before' for 'until', changing the temporal meaning of the instruction. The substituted word is clearly pronounced and the remainder of the sentence is fluent, so the teacher should identify the lexical Content error rather than a Pronunciation problem.",
    coachingAdvice:
      "Contrast the meanings of 'wait until the teacher arrives' and 'wait before the teacher arrives'. Practise the exact chunk 'wait outside until the teacher arrives' to reinforce the target temporal relationship.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Waiting for the Teacher",
    good: {
      transcript:
        "Please wait outside until the teacher arrives.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please wait outside before the teacher arrives.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student clearly substitutes 'before' for 'until', changing the temporal meaning while maintaining otherwise fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing temporal substitution reduces Content accuracy while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "temporal-meaning-change",
        label: "Temporal meaning change",
        keyword: "Temporal meaning change",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'before' replaces 'until' and changes the temporal relationship. Do not label this as a Pronunciation error when the substituted word is clearly pronounced and the delivery remains fluent.",
  },

    {
    exerciseIndex: 86,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful word in an otherwise clear Repeat Sentence response and distinguish it from Pronunciation and Oral Fluency problems.",
    sourceQuestionId: "127",
    promptText:
      "The class will continue after a short break.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-086-prompt-orus.mp3",
    promptAudio:
      "The class will continue after a short break.",
    studentTranscript:
      "The class will continue after a break.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The sentence is reproduced clearly, but the meaningful word 'short' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of descriptive information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the word 'short'",
      "The student omits 'short'",
      "The remaining sentence structure is accurate",
      "The omission removes a meaningful description of the break",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the meaningful word 'short', reducing the specificity of the target sentence. The remaining response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the meaningful word 'short', so the response no longer specifies that the break is short. The remaining sentence is accurate, while Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete chunk 'after a short break'. Encourage the student to retain descriptive words that add meaningful information.",
    cefrLevel: {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description:
        "Complex academic and professional language with precise information and extended meaning.",
    },
    topicTitle: "Short Break",
    good: {
      transcript:
        "The class will continue after a short break.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The class will continue after a break.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The response remains clear and fluent but omits the meaningful word 'short'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'short' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "descriptive-information-loss",
        label: "Loss of descriptive information",
        keyword: "Loss of descriptive information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'short' contributes meaningful descriptive information. Do not diagnose Pronunciation or Oral Fluency when the omitted word is simply absent from the response.",
  },

  {
    exerciseIndex: 87,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Function-Word Omission",
    learningObjective:
      "Identify a small function-word omission in an otherwise accurate Repeat Sentence response and distinguish the Content issue from Fluency or Pronunciation problems.",
    sourceQuestionId: "128",
    promptText:
      "The school encourages students to participate in sports.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-087-prompt-leda.mp3",
    promptAudio:
      "The school encourages students to participate in sports.",
    studentTranscript:
      "The school encourages students participate in sports.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student omits the function word 'to' before 'participate'. The core meaning remains clear, and delivery is otherwise fluent and clearly pronounced.",
    },
    diagnosticErrors: [
      "Function-word omission",
      "Content accuracy",
      "Minor content deviation",
    ],
    expertEvidence: [
      "The target sentence contains 'to participate'",
      "The student omits the function word 'to'",
      "The core meaning remains understandable",
      "The remaining target vocabulary is reproduced accurately",
      "Delivery remains continuous",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy. The student omits the function word 'to' before 'participate'. The core meaning remains clear, so this is a relatively small Content deviation rather than a major semantic failure. Fluency and Pronunciation are not the problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the function word 'to' before 'participate'. The main meaning remains clear, but the target sentence has not been reproduced exactly. Fluency and Pronunciation remain clear, so the teacher should keep the Content diagnosis proportionate.",
    coachingAdvice:
      "Practise the phrase 'to participate in sports' as one unit. Focus on retaining short function words that connect the sentence grammatically.",
    cefrLevel: {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description:
        "Complex academic and professional language with precise information and extended meaning.",
    },
    topicTitle: "Student Sports Participation",
    good: {
      transcript:
        "The school encourages students to participate in sports.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The school encourages students participate in sports.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The function word 'to' is omitted, but the remainder of the response remains clear and fluent.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "A small function-word omission affects Content accuracy while the main meaning, Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "function-word-omission",
        label: "Function-word omission",
        keyword: "Function-word omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
      {
        id: "minor-content-deviation",
        label: "Minor content deviation",
        keyword: "Minor content deviation",
      },
    ],
    expertAdvice:
      "Identify the missing function word 'to', but keep the diagnosis proportionate because the core meaning remains clear. Do not diagnose Fluency or Pronunciation without evidence.",
  },
  {
    exerciseIndex: 88,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution that changes the intended meaning of a Repeat Sentence response.",
    sourceQuestionId: "129",
    promptText:
      "Please check the weather before planning outdoor activities.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-088-prompt-puck.mp3",
    promptAudio:
      "Please check the weather before planning outdoor activities.",
    studentTranscript:
      "Please check the weather before planning outdoor events.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student clearly substitutes 'events' for 'activities' while maintaining otherwise fluent delivery.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'activities'",
      "The student says 'events'",
      "The substituted word is clearly pronounced",
      "The lexical substitution changes the target meaning",
      "The remainder of the sentence is accurate",
      "Oral Fluency remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'events' for 'activities', changing the intended meaning of the final phrase. The substituted word is clearly pronounced and delivery remains fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'events' for 'activities', changing the intended meaning of the final phrase. The substituted word is clearly pronounced and the rest of the response is fluent, so the teacher should prioritise the lexical Content error.",
    coachingAdvice:
      "Contrast 'outdoor activities' and 'outdoor events'. Practise the exact target chunk 'planning outdoor activities' to reinforce the intended vocabulary.",
    cefrLevel: {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description:
        "Complex academic and professional language with precise information and extended meaning.",
    },
    topicTitle: "Outdoor Activity Planning",
    good: {
      transcript:
        "Please check the weather before planning outdoor activities.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please check the weather before planning outdoor events.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student clearly substitutes 'events' for 'activities' while maintaining fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A lexical substitution changes the intended meaning while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'events' replaces 'activities' and changes the intended meaning. Do not diagnose Pronunciation when the substituted word is clearly pronounced.",
  },

  {
    exerciseIndex: 89,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify a brief self-repetition in a substantially complete Repeat Sentence response and distinguish it from a Content error.",
    sourceQuestionId: "130",
    promptText:
      "The teacher will explain the grammar rules again.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-089-prompt-sulafat.mp3",
    promptAudio:
      "The teacher will explain the grammar rules again.",
    studentTranscript:
      "The teacher will explain the grammar grammar rules again.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are present, but 'grammar' is repeated once, creating a brief fluency disruption.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "All target words are present",
      "The word 'grammar' is repeated",
      "The repetition creates a brief delivery disruption",
      "Content remains substantially complete",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. All target words are present, but the student repeats 'grammar' once. Content remains substantially complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student repeats 'grammar', creating a brief self-repetition. Content remains substantially intact and Pronunciation remains clear, so the teacher should focus on the fluency disruption.",
    coachingAdvice:
      "Practise the phrase 'explain the grammar rules again' at a steady pace. Encourage the student to continue forward without repeating 'grammar'.",
    cefrLevel: {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description:
        "Complex academic and professional language with precise information and extended meaning.",
    },
    topicTitle: "Grammar Rules Review",
    good: {
      transcript:
        "The teacher will explain the grammar rules again.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate reproduction with natural continuous delivery and clear Pronunciation.",
    },
    poor: {
      transcript:
        "The teacher will explain the grammar grammar rules again.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are present, but 'grammar' is repeated once.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but word repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present and the only clear disruption is the repeated word 'grammar'. Do not convert the repetition into a Content omission.",
  },

  {
    exerciseIndex: 90,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the omission of a meaningful phrase from a Repeat Sentence response while recognising that the remaining delivery may remain clear and fluent.",
    sourceQuestionId: "131",
    promptText:
      "The library will host a reading event next Friday.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-090-prompt-iapetus.mp3",
    promptAudio:
      "The library will host a reading event next Friday.",
    studentTranscript:
      "The library will host a reading event.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The main proposition is reproduced clearly, but the meaningful time phrase 'next Friday' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Time-detail omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains the time phrase 'next Friday'",
      "The student omits 'next Friday'",
      "The main proposition remains understandable",
      "The omission removes a specific scheduling detail",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'next Friday', removing the specific time information from the target sentence. The remaining response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the specific time phrase 'next Friday', so the response no longer communicates when the reading event will occur. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete ending 'a reading event next Friday'. Encourage the student to retain the final scheduling detail.",
    cefrLevel: {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description:
        "Complex academic and professional language with precise information and extended meaning.",
    },
    topicTitle: "Library Reading Event",
    good: {
      transcript:
        "The library will host a reading event next Friday.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The library will host a reading event.",
      audioDuration: "Controlled calibration response",
      wordCount: 7,
      characteristics:
        "The main proposition is clear, but the specific time phrase 'next Friday' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'next Friday' removes important scheduling information while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "time-detail-omission",
        label: "Time-detail omission",
        keyword: "Time-detail omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'next Friday' provides important scheduling information. Do not give full Content credit simply because the main event is correctly reproduced.",
  },

  {
    exerciseIndex: 91,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Function-Word Omission",
    learningObjective:
      "Identify a small but meaningful function-word omission in a complete Repeat Sentence response and distinguish it from Pronunciation or Oral Fluency weakness.",
    sourceQuestionId: "132",
    promptText:
      "Please bring a notebook to take notes during the lecture.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-091-prompt-achernar.mp3",
    promptAudio:
      "Please bring a notebook to take notes during the lecture.",
    studentTranscript:
      "Please bring notebook to take notes during the lecture.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The content words are reproduced accurately, but the article 'a' is omitted before 'notebook'.",
    },
    diagnosticErrors: [
      "Function-word omission",
      "Article omission",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target contains 'a notebook'",
      "The student says 'notebook' without the article 'a'",
      "The remainder of the sentence is accurately reproduced",
      "The omission is audible and identifiable",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content accuracy at the function-word level. The student omits the article 'a' from the target phrase 'a notebook'. The main meaning remains understandable, but the target sentence is not reproduced exactly.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the article 'a' from the target phrase 'a notebook'. The main meaning remains understandable, but the sentence is not reproduced completely. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete phrase 'bring a notebook'. Encourage the student to retain small function words when reproducing the full sentence.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Lecture Note-Taking",
    good: {
      transcript:
        "Please bring a notebook to take notes during the lecture.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please bring notebook to take notes during the lecture.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The response is otherwise accurate but omits the article 'a'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The function-word omission reduces exact Content reproduction while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "function-word-omission",
        label: "Function-word omission",
        keyword: "Function-word omission",
      },
      {
        id: "article-omission",
        label: "Article omission",
        keyword: "Article omission",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the article 'a' is part of the target phrase 'a notebook'. The omission is small but identifiable; do not confuse it with Pronunciation or Oral Fluency.",
  },

  {
    exerciseIndex: 92,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Filler Insertion",
    learningObjective:
      "Identify an inserted filler in an otherwise complete Repeat Sentence response and distinguish it from Content loss.",
    sourceQuestionId: "133",
    promptText:
      "The school will provide transportation for the trip.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-092-prompt-orus.mp3",
    promptAudio:
      "The school will provide transportation for the trip.",
    studentTranscript:
      "The school will provide, um, transportation for the trip.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are present, but the filler 'um' interrupts continuous delivery.",
    },
    diagnosticErrors: [
      "Filler insertion",
      "Fluency disruption",
      "Interrupted delivery",
    ],
    expertEvidence: [
      "All target words are present",
      "The filler 'um' is inserted after 'provide'",
      "The filler interrupts continuous delivery",
      "There is no Content omission",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. All target words are present, but the inserted filler 'um' interrupts continuous delivery. Content is complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. All target words are present, but the student inserts 'um' after 'provide', interrupting continuous delivery. Content is complete and Pronunciation remains clear.",
    coachingAdvice:
      "Practise 'provide transportation for the trip' as one continuous phrase. Encourage the student to avoid inserting a filler before the object.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Trip Transportation",
    good: {
      transcript:
        "The school will provide transportation for the trip.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete reproduction with clear Pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The school will provide, um, transportation for the trip.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "All target words are present, but an inserted filler disrupts continuous delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains complete, but the inserted filler disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "filler-insertion",
        label: "Filler insertion",
        keyword: "Filler insertion",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
      {
        id: "interrupted-delivery",
        label: "Interrupted delivery",
        keyword: "Interrupted delivery",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because all target words are present. The filler interrupts otherwise continuous delivery and should not be treated as a Content error.",
  },

  {
    exerciseIndex: 93,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the omission of a meaningful condition from a Repeat Sentence response while distinguishing it from otherwise clear delivery.",
    sourceQuestionId: "134",
    promptText:
      "Please keep your phone away during the lesson.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-093-prompt-leda.mp3",
    promptAudio:
      "Please keep your phone away during the lesson.",
    studentTranscript:
      "Please keep your phone away.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main instruction is reproduced clearly, but the meaningful contextual phrase 'during the lesson' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful phrase omission",
      "Contextual information loss",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes 'during the lesson'",
      "The student omits the final phrase",
      "The main instruction remains understandable",
      "The omission removes the context specifying when the instruction applies",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'during the lesson', removing the context specifying when the instruction applies. The main proposition remains, but meaningful Content has been lost.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'during the lesson', so the response gives the instruction but removes the context specifying when it applies. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete chunk 'keep your phone away during the lesson'. Encourage the student to retain the final contextual phrase.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Phone Use During Lessons",
    good: {
      transcript:
        "Please keep your phone away during the lesson.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please keep your phone away.",
      audioDuration: "Controlled calibration response",
      wordCount: 6,
      characteristics:
        "The main instruction is clear, but the contextual phrase 'during the lesson' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of the contextual phrase reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-phrase-omission",
        label: "Meaningful phrase omission",
        keyword: "Meaningful phrase omission",
      },
      {
        id: "contextual-information-loss",
        label: "Contextual information loss",
        keyword: "Contextual information loss",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'during the lesson' provides important context for the instruction. Do not give full Content credit when that contextual phrase is missing.",
  },

  {
    exerciseIndex: 94,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Word-Order Disruption",
    learningObjective:
      "Identify a structural word-order disruption in an otherwise substantially complete Repeat Sentence response.",
    sourceQuestionId: "135",
    promptText:
      "The teacher will answer questions at the end of the class.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-094-prompt-puck.mp3",
    promptAudio:
      "The teacher will answer questions at the end of the class.",
    studentTranscript:
      "The teacher will answer at the end of the class questions.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The major vocabulary is present, but 'questions' is moved from its target position and the phrase structure is disrupted.",
    },
    diagnosticErrors: [
      "Word-order disruption",
      "Syntactic sequence error",
      "Content sequence accuracy",
    ],
    expertEvidence: [
      "The target sequence is 'answer questions at the end of the class'",
      "The student moves 'questions' after 'class'",
      "The key vocabulary remains present",
      "The sentence structure is disrupted",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student retains the key vocabulary but changes the required sequence by moving 'questions' to the end of the sentence. Accurate word order is therefore not maintained.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student retains the key vocabulary but moves 'questions' from its target position, disrupting the sequence 'answer questions at the end of the class'. Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the chunk 'answer questions at the end of the class' as a fixed sequence. Encourage the student to preserve the original grammatical order.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Class Question Session",
    good: {
      transcript:
        "The teacher will answer questions at the end of the class.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Accurate sequence with clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will answer at the end of the class questions.",
      audioDuration: "Controlled calibration response",
      wordCount: 10,
      characteristics:
        "The key vocabulary is present, but the word order is disrupted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content sequence with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "The vocabulary is present but the sentence sequence is disrupted, reducing Content accuracy.",
    },
    errorChecklist: [
      {
        id: "word-order-disruption",
        label: "Word-order disruption",
        keyword: "Word-order disruption",
      },
      {
        id: "syntactic-sequence-error",
        label: "Syntactic sequence error",
        keyword: "Syntactic sequence error",
      },
      {
        id: "content-sequence-accuracy",
        label: "Content sequence accuracy",
        keyword: "Content sequence accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because the target word order is disrupted even though the key vocabulary is present. Do not reduce the diagnosis to generic Oral Fluency weakness.",
  },

  {
    exerciseIndex: 95,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Lexical Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution in a complete Repeat Sentence response and distinguish the Content problem from Fluency or Pronunciation issues.",
    sourceQuestionId: "136",
    promptText:
      "The library is offering free printing this week.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-095-prompt-sulafat.mp3",
    promptAudio:
      "The library is offering free printing this week.",
    studentTranscript:
      "The library is offering free copying this week.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student clearly substitutes 'copying' for the target word 'printing'. The remainder of the sentence is fluent and clearly pronounced.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'printing'",
      "The student says 'copying' instead",
      "'Copying' is a different lexical item, not a pronunciation variation",
      "The substitution changes the specific service described by the sentence",
      "All other target words are reproduced accurately",
      "Delivery remains continuous and Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'copying' for 'printing', producing a different word and changing the specific service described. The response is otherwise fluent and clearly pronounced.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student says 'copying' instead of the target word 'printing'. This is a lexical substitution because 'copying' is a different word and changes the specific service being described. The rest of the response is fluent and clearly pronounced.",
    coachingAdvice:
      "Listen for the actual lexical item before diagnosing Pronunciation. Practise retaining the target word 'printing' and contrast it with the substituted word 'copying'.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Free Library Printing",
    good: {
      transcript:
        "The library is offering free printing this week.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Complete Content with clear Pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The library is offering free copying this week.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student substitutes 'copying' for 'printing' while maintaining otherwise clear and fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution affects Content while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'copying' replaces the target word 'printing' and changes the specific meaning. Do not label this as a Pronunciation error when the substituted word is clearly pronounced and delivery is fluent.",
  },
  {
    exerciseIndex: 96,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Word Omission",
    learningObjective:
      "Identify the omission of a meaningful action word in a Repeat Sentence response and distinguish it from a general fluency or pronunciation issue.",
    sourceQuestionId: "137",
    promptText:
      "Please follow the instructions carefully.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-096-prompt-iapetus.mp3",
    promptAudio:
      "Please follow the instructions carefully.",
    studentTranscript:
      "Please follow the instructions.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 5,
      characteristics:
        "The main instruction is reproduced clearly, but the meaningful adverb 'carefully' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of manner information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes 'carefully'",
      "The student omits 'carefully'",
      "The main instruction remains understandable",
      "The omission removes information about how the action should be performed",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits 'carefully', removing meaningful information about how the instructions should be followed. The remaining response is clear and fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits 'carefully', so the response no longer specifies how the instructions should be followed. The main instruction remains, while Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the complete phrase 'follow the instructions carefully'. Encourage the student to retain the final manner expression.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Following Instructions",
    good: {
      transcript:
        "Please follow the instructions carefully.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 5,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "Please follow the instructions.",
      audioDuration: "Controlled calibration response",
      wordCount: 4,
      characteristics:
        "The main instruction is clear, but the meaningful word 'carefully' is omitted.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'carefully' removes meaningful manner information while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "manner-information-loss",
        label: "Loss of manner information",
        keyword: "Loss of manner information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'carefully' adds meaningful information about how the instructions should be followed. Do not overlook the omission simply because the main instruction remains understandable.",
  },

  {
    exerciseIndex: 97,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Substitution",
    learningObjective:
      "Identify a clearly pronounced substitution that changes the intended action in a Repeat Sentence response.",
    sourceQuestionId: "138",
    promptText:
      "The next class will focus on reading comprehension.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-097-prompt-achernar.mp3",
    promptAudio:
      "The next class will focus on reading comprehension.",
    studentTranscript:
      "The next class will focus on reading competition.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student clearly substitutes 'competition' for 'comprehension' while maintaining otherwise fluent delivery.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'comprehension'",
      "The student says 'competition'",
      "The substituted word is clearly pronounced",
      "The substitution changes the intended meaning",
      "The remainder of the sentence is accurate",
      "Oral Fluency remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'competition' for 'comprehension', changing the intended meaning of the lesson focus. The substituted word is clearly pronounced and delivery remains fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'competition' for 'comprehension', changing the intended meaning of the lesson focus. The substituted word is clearly pronounced and the remainder of the response is fluent, so the teacher should prioritise the lexical Content error.",
    coachingAdvice:
      "Contrast the meanings and pronunciation of 'reading comprehension' and 'reading competition'. Practise the exact target chunk until the intended word is retained accurately.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Reading Comprehension",
    good: {
      transcript:
        "The next class will focus on reading comprehension.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 8,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The next class will focus on reading competition.",
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The student clearly substitutes 'competition' for 'comprehension' while maintaining fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution reduces Content accuracy while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'competition' replaces 'comprehension' and changes the intended meaning. Do not label this as Pronunciation when the substituted word is clearly pronounced.",
  },

  {
    exerciseIndex: 98,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Word Repetition",
    learningObjective:
      "Identify a brief repeated word in a complete Repeat Sentence response and distinguish the fluency problem from Content loss.",
    sourceQuestionId: "139",
    promptText:
      "Please check the lost and found for missing items.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-098-prompt-orus.mp3",
    promptAudio:
      "Please check the lost and found for missing items.",
    studentTranscript:
      "Please check the lost and lost and found for missing items.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student repeats 'lost and' once, creating a brief fluency disruption while retaining the target Content.",
    },
    diagnosticErrors: [
      "Word repetition",
      "Self-repetition",
      "Fluency disruption",
    ],
    expertEvidence: [
      "The target Content remains substantially present",
      "The phrase 'lost and' is repeated",
      "The repetition interrupts natural delivery",
      "There is no meaningful Content omission",
      "Pronunciation remains clear",
      "The primary issue is Oral Fluency",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student repeats 'lost and', creating a brief self-repetition. Content remains substantially complete and Pronunciation remains clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student repeats 'lost and', creating a brief self-repetition while the target Content remains substantially complete. Pronunciation remains clear, so the teacher should focus on the fluency disruption.",
    coachingAdvice:
      "Practise the phrase 'check the lost and found' smoothly as one unit. Encourage the student to continue forward without repeating the phrase.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Lost and Found",
    good: {
      transcript:
        "Please check the lost and found for missing items.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate reproduction with clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "Please check the lost and lost and found for missing items.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The phrase 'lost and' is repeated, creating a brief fluency disruption.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and natural Oral Fluency.",
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "82 / 90",
      breakdownText:
        "Content remains substantially complete, but self-repetition disrupts Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition",
      },
      {
        id: "self-repetition",
        label: "Self-repetition",
        keyword: "Self-repetition",
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption",
      },
    ],
    expertAdvice:
      "Prioritise Oral Fluency because the target Content remains substantially complete. The repeated phrase is the diagnostic feature; do not invent a Content omission.",
  },

  {
    exerciseIndex: 99,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaningful Phrase Omission",
    learningObjective:
      "Identify the omission of a meaningful introductory phrase in a Repeat Sentence response and distinguish it from clear Pronunciation and Oral Fluency.",
    sourceQuestionId: "140",
    promptText:
      "The teacher will give a short introduction to the topic.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-099-prompt-leda.mp3",
    promptAudio:
      "The teacher will give a short introduction to the topic.",
    studentTranscript:
      "The teacher will give an introduction to the topic.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 8,
      characteristics:
        "The response is clear and fluent, but the meaningful adjective 'short' is omitted.",
    },
    diagnosticErrors: [
      "Meaningful word omission",
      "Loss of descriptive information",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target includes the adjective 'short'",
      "The student omits 'short'",
      "The remaining sentence is reproduced accurately",
      "The omission reduces descriptive specificity",
      "Pronunciation remains clear",
      "Delivery remains continuous",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student omits the meaningful adjective 'short', reducing the specificity of the introduction being described. Pronunciation and Oral Fluency remain clear.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student omits the meaningful adjective 'short', so the response no longer specifies the length or nature of the introduction. The remaining sentence is accurate, while Pronunciation and Oral Fluency remain clear.",
    coachingAdvice:
      "Practise the phrase 'a short introduction to the topic' as a complete chunk. Encourage the student to retain descriptive adjectives during repetition.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Topic Introduction",
    good: {
      transcript:
        "The teacher will give a short introduction to the topic.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 10,
      characteristics:
        "Complete Content reproduction with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The teacher will give an introduction to the topic.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The response is clear and fluent but omits the meaningful adjective 'short'.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Omission of 'short' reduces Content specificity while Fluency and Pronunciation remain clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-word-omission",
        label: "Meaningful word omission",
        keyword: "Meaningful word omission",
      },
      {
        id: "descriptive-information-loss",
        label: "Loss of descriptive information",
        keyword: "Loss of descriptive information",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'short' contributes meaningful descriptive information. Do not diagnose Pronunciation or Oral Fluency when the response is otherwise clear and continuous.",
  },

  {
    exerciseIndex: 100,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Content — Meaning-Changing Substitution",
    learningObjective:
      "Identify a clearly pronounced lexical substitution that changes the intended meaning of a Repeat Sentence response and distinguish it from Pronunciation difficulty.",
    sourceQuestionId: "141",
    promptText:
      "The school will organize a charity event next month.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/prompts-v1/exercise-100-prompt-puck.mp3",
    promptAudio:
      "The school will organize a charity event next month.",
    studentTranscript:
      "The school will organize a community event next month.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student clearly substitutes 'community' for 'charity', changing the intended type of event while maintaining fluent delivery.",
    },
    diagnosticErrors: [
      "Lexical substitution",
      "Meaning-changing substitution",
      "Content accuracy",
    ],
    expertEvidence: [
      "The target word is 'charity'",
      "The student says 'community'",
      "The substituted word is clearly pronounced",
      "The substitution changes the type and meaning of the event",
      "The remainder of the sentence is accurately reproduced",
      "Oral Fluency remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content. The student substitutes 'community' for 'charity', changing the intended type of event. The substituted word is clearly pronounced and the rest of the response remains fluent.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content. The student substitutes 'community' for 'charity', changing the intended type of event. The substituted word is clearly pronounced and the remainder of the response is fluent, so the teacher should prioritise the meaning-changing lexical substitution rather than diagnosing Pronunciation.",
    coachingAdvice:
      "Contrast 'charity event' and 'community event' with the student. Practise the exact chunk 'organize a charity event next month' to reinforce the target vocabulary and meaning.",
    cefrLevel: {
      level: "C2",
      name: "C2 Proficient",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-600",
      textColor: "text-slate-700 dark:text-slate-300",
      description:
        "Highly precise academic, professional and complex language use.",
    },
    topicTitle: "Charity Event",
    good: {
      transcript:
        "The school will organize a charity event next month.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 9,
      characteristics:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poor: {
      transcript:
        "The school will organize a community event next month.",
      audioDuration: "Controlled calibration response",
      wordCount: 9,
      characteristics:
        "The student clearly substitutes 'community' for 'charity', changing the intended meaning while maintaining fluent delivery.",
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear Pronunciation and smooth Oral Fluency.",
    },
    poorScore: {
      content: 3,
      fluency: 5,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "A meaning-changing lexical substitution reduces Content accuracy while Pronunciation and Oral Fluency remain clear.",
    },
    errorChecklist: [
      {
        id: "lexical-substitution",
        label: "Lexical substitution",
        keyword: "Lexical substitution",
      },
      {
        id: "meaning-changing-substitution",
        label: "Meaning-changing substitution",
        keyword: "Meaning-changing substitution",
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy",
      },
    ],
    expertAdvice:
      "Prioritise Content because 'community' replaces 'charity' and changes the intended meaning of the event. Do not diagnose Pronunciation when the substituted word is clearly pronounced and the delivery remains fluent.",
  },

] as const;