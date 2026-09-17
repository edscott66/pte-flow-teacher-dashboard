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
 * Current authored block: Exercises 1–10 of 100.
 */

export const REPEAT_SENTENCE_CALIBRATION_EXERCISES = [
  {
    exerciseIndex: 1,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Phrase-Internal Pausing",
    learningObjective:
      "Distinguish accurate Content from a meaningful Fluency disruption, identify the exact location of the disruption, and give focused coaching.",
    sourceQuestionId: "38",
    promptText:
      "The speaker highlighted the need for greater collaboration between industry and academia.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/38.mp3",
    promptAudio:
      "The speaker highlighted the need for greater collaboration between industry and academia.",
    studentTranscript:
      "The speaker highlighted the need for greater collaboration between industry... ... and academia.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words are reproduced accurately. One substantial pause interrupts the natural phrase 'between industry and academia'. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Phrase-internal pause",
      "Interrupted phrase grouping",
    ],
    expertEvidence: [
      "All target words are present",
      "There is no Content omission or substitution",
      "The pause occurs after 'industry' inside the phrase 'between industry and academia'",
      "Pronunciation remains clear",
      "The evidence supports Oral Fluency as the primary diagnosis",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. The student reproduces the complete sentence accurately but introduces a substantial pause inside the phrase 'between industry and academia'. There is no evidence of a Content or Pronunciation problem.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. Content is complete because all target words are reproduced. The important evidence is the substantial phrase-internal pause after 'industry'. Pronunciation remains clear, so Content omission and Pronunciation should not be diagnosed from this response.",
    coachingAdvice:
      "Acknowledge the accurate reproduction first. Practise 'between industry and academia' as one connected thought group, then repeat the full sentence while keeping that phrase together.",
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
        "Accurate reproduction with clear pronunciation, natural phrase grouping and continuous delivery.",
    },
    poor: {
      transcript:
        "The speaker highlighted the need for greater collaboration between industry... ... and academia.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "All target words are reproduced accurately, but a substantial pause interrupts the phrase 'between industry and academia'.",
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
        "Content is complete and pronunciation is clear. Oral Fluency is affected by a substantial pause inside the phrase 'between industry and academia'.",
    },
    errorChecklist: [
      {
        id: "phrase-internal-pause",
        label: "Phrase-internal pause",
        keyword: "Phrase-internal pause",
      },
      {
        id: "interrupted-phrase-grouping",
        label: "Interrupted phrase grouping",
        keyword: "Interrupted phrase grouping",
      },
    ],
    expertAdvice:
      "Recognise that all target words are present. Focus on the substantial pause inside 'between industry and academia'. Do not diagnose Content omission or Pronunciation without additional evidence.",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/25.mp3",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/32.mp3",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/41.mp3",
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
    diagnosticArea: "Content + Oral Fluency — Diagnostic Prioritisation",
    learningObjective:
      "Identify the primary problem when a response contains both a content omission and a fluency disruption, and avoid producing an unfocused list of every observable error.",
    sourceQuestionId: "44",
    promptText:
      "The professor encouraged students to think critically about the ethical implications of their work.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/44.mp3",
    promptAudio:
      "The professor encouraged students to think critically about the ethical implications of their work.",
    studentTranscript:
      "The professor encouraged students to think... ... about the ethical implications of their work.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 14,
      characteristics:
        "The student omits the word 'critically' and also inserts a substantial pause after 'think'. Pronunciation is otherwise clear.",
    },
    diagnosticErrors: [
      "Meaningful content omission",
      "Phrase-internal pause",
      "Diagnostic prioritisation",
    ],
    expertEvidence: [
      "The target word 'critically' is absent",
      "The omission changes the intended instruction: students are encouraged to think, but the specific manner of thinking is lost",
      "A substantial pause occurs after 'think'",
      "The pause is audible but the sentence remains understandable",
      "Pronunciation is otherwise clear",
      "The teacher should prioritise the Content omission before the secondary Fluency issue because the missing word changes the instructional meaning",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content, with a secondary Oral Fluency issue. The omission of 'critically' removes a meaningful part of the professor's instruction. The pause after 'think' is also observable, but it should not distract the teacher from the more important content loss.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content, secondary Oral Fluency. The student omits 'critically', which changes the meaning of the instruction by removing the required manner of thinking. There is also a substantial pause after 'think', but the content omission should receive priority because it affects what the student actually reproduced. Pronunciation is not the issue.",
    coachingAdvice:
      "Correct the missing word first by practising 'to think critically about the ethical implications'. Then work on delivering that complete phrase without the pause between 'think' and 'about'. Keep the feedback focused rather than presenting every issue as equally important.",
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
      wordCount: 15,
      characteristics:
        "Complete reproduction with accurate Content, clear Pronunciation and natural Oral Fluency.",
    },
    poor: {
      transcript:
        "The professor encouraged students to think... ... about the ethical implications of their work.",
      audioDuration: "Controlled calibration response",
      wordCount: 14,
      characteristics:
        "The word 'critically' is omitted and a substantial pause occurs after 'think'. Pronunciation remains clear.",
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
      fluency: 4,
      pronunciation: 5,
      overall: "76 / 90",
      breakdownText:
        "Omission of 'critically' affects Content, while a secondary phrase-internal pause affects Oral Fluency. Pronunciation remains clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-content-omission",
        label: "Meaningful content omission",
        keyword: "Meaningful content omission",
      },
      {
        id: "phrase-internal-pause",
        label: "Phrase-internal pause",
        keyword: "Phrase-internal pause",
      },
      {
        id: "diagnostic-prioritisation",
        label: "Diagnostic prioritisation",
        keyword: "Diagnostic prioritisation",
      },
    ],
    expertAdvice:
      "This case deliberately contains two observable problems. The teacher should prioritise the missing word 'critically' because it changes the instructional meaning. The pause is secondary. Avoid turning the feedback into an unfocused list of equal-weight errors.",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/46.mp3",
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
    trainingSkill: "Content + Oral Fluency",
    diagnosticArea: "Content + Oral Fluency — Priority of Meaningful Omission",
    learningObjective:
      "Prioritise a meaningful lexical omission when the response also contains a secondary hesitation, rather than treating every observable feature as equally important.",
    sourceQuestionId: "47",
    promptText:
      "The workshop will introduce practical strategies for managing time more effectively.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/47.mp3",
    promptAudio:
      "The workshop will introduce practical strategies for managing time more effectively.",
    studentTranscript:
      "The workshop will introduce strategies... ... for managing time more effectively.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The student omits the adjective 'practical' and also pauses briefly before 'for'. The rest of the sentence is clearly reproduced.",
    },
    diagnosticErrors: [
      "Meaningful content omission",
      "Secondary hesitation",
      "Diagnostic prioritisation",
    ],
    expertEvidence: [
      "The word 'practical' is omitted",
      "The remaining noun phrase 'strategies for managing time' is reproduced",
      "The omission reduces the specificity of what kind of strategies the workshop will introduce",
      "A pause occurs after 'strategies'",
      "The pause is secondary to the missing content word",
      "Pronunciation remains clear",
    ],
    expertDiagnosis:
      "The primary diagnosis is Content, with a secondary Oral Fluency issue. The omission of 'practical' reduces the specificity of the statement, while the pause after 'strategies' is a lesser delivery issue. The teacher should prioritise the meaningful content omission rather than treating both issues as equal.",
    perfectCalibrationResponse:
      "Primary diagnosis: Content, secondary Oral Fluency. The student omits 'practical', which reduces the specificity of the statement by removing the description of the strategies. There is also a brief pause after 'strategies', but this is secondary. Pronunciation remains clear.",
    coachingAdvice:
      "First practise retaining the phrase 'practical strategies'. Then practise connecting 'practical strategies for managing time' without the pause after 'strategies'. Keep the feedback focused on the main Content issue.",
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
        "The workshop will introduce strategies... ... for managing time more effectively.",
      audioDuration: "Controlled calibration response",
      wordCount: 11,
      characteristics:
        "The adjective 'practical' is omitted and a secondary pause occurs after 'strategies'.",
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
      fluency: 4,
      pronunciation: 5,
      overall: "76 / 90",
      breakdownText:
        "Omission of 'practical' reduces Content precision, while a secondary pause affects Oral Fluency. Pronunciation remains clear.",
    },
    errorChecklist: [
      {
        id: "meaningful-content-omission",
        label: "Meaningful content omission",
        keyword: "Meaningful content omission",
      },
      {
        id: "secondary-hesitation",
        label: "Secondary hesitation",
        keyword: "Secondary hesitation",
      },
      {
        id: "diagnostic-prioritisation",
        label: "Diagnostic prioritisation",
        keyword: "Diagnostic prioritisation",
      },
    ],
    expertAdvice:
      "Prioritise the omitted word 'practical' because it carries meaning about the type of strategies being introduced. The pause is secondary. Do not allow a delivery feature to overshadow the more meaningful Content issue.",
  },

  {
    exerciseIndex: 8,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Oral Fluency — Hesitation with Complete Content",
    learningObjective:
      "Recognise a Fluency problem when Content is completely reproduced, and avoid inventing a Content or Pronunciation problem where none is supported.",
    sourceQuestionId: "48",
    promptText:
      "The results indicate that environmental factors play a significant role in human behaviour.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/48.mp3",
    promptAudio:
      "The results indicate that environmental factors play a significant role in human behaviour.",
    studentTranscript:
      "The results indicate that environmental factors play a significant... ... role in human behaviour.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 13,
      characteristics:
        "All target words are reproduced accurately, but a substantial pause interrupts the phrase 'a significant role'. Pronunciation remains clear.",
    },
    diagnosticErrors: [
      "Phrase-internal hesitation",
      "Interrupted fluency",
    ],
    expertEvidence: [
      "All target words are present",
      "The complete phrase 'a significant role' is reproduced",
      "A substantial pause occurs inside the phrase",
      "The pause interrupts otherwise continuous delivery",
      "Pronunciation remains clear",
      "There is no evidence supporting a Content omission or substitution",
    ],
    expertDiagnosis:
      "The primary diagnosis is Oral Fluency. Content is complete and the target vocabulary is reproduced accurately. The defining problem is the substantial hesitation inside the phrase 'a significant role'. The teacher should not invent a Content problem simply because the delivery is interrupted.",
    perfectCalibrationResponse:
      "Primary diagnosis: Oral Fluency. The student reproduces every target word, so Content is complete. The main problem is the substantial pause inside the phrase 'a significant role'. Pronunciation remains clear, so the teacher should focus on fluency and phrase grouping rather than Content accuracy.",
    coachingAdvice:
      "Practise 'a significant role' as one connected chunk, then place it back into the full sentence. Aim for continuous delivery through the phrase rather than stopping between 'significant' and 'role'.",
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
        "Complete reproduction with clear pronunciation and smooth phrase grouping.",
    },
    poor: {
      transcript:
        "The results indicate that environmental factors play a significant... ... role in human behaviour.",
      audioDuration: "Controlled calibration response",
      wordCount: 14,
      characteristics:
        "All target words are present, but a substantial hesitation interrupts the phrase 'a significant role'.",
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
        "Content remains complete and Pronunciation is clear, but a substantial phrase-internal hesitation reduces Oral Fluency.",
    },
    errorChecklist: [
      {
        id: "phrase-internal-hesitation",
        label: "Phrase-internal hesitation",
        keyword: "Phrase-internal hesitation",
      },
      {
        id: "interrupted-fluency",
        label: "Interrupted fluency",
        keyword: "Interrupted fluency",
      },
      {
        id: "complete-content",
        label: "Complete Content",
        keyword: "Complete Content",
      },
    ],
    expertAdvice:
      "The key diagnostic clue is that every target word is present. Focus on the hesitation inside 'a significant role'. Do not diagnose Content omission or Pronunciation when the evidence does not support either.",
  },

  {
    exerciseIndex: 9,
    totalExercises: 100,
    difficulty: "Intermediate+",
    trainingSkill: "Pronunciation",
    diagnosticArea: "Pronunciation — Localised Word Distortion",
    learningObjective:
      "Distinguish a localised pronunciation distortion from a lexical substitution by considering whether the intended word remains recognisable and whether the rest of the response is accurate.",
    sourceQuestionId: "49",
    promptText:
      "The speaker discussed several challenges facing the healthcare system in the coming decade.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/49.mp3",
    promptAudio:
      "The speaker discussed several challenges facing the healthcare system in the coming decade.",
    studentTranscript:
      "The speaker discussed several challenges facing the health-care system in the coming decade.",
    studentResponse: {
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The target phrase is reproduced with a localised pronunciation distortion in 'healthcare'. The intended word remains recognisable and the rest of the sentence is accurate and fluent.",
    },
    diagnosticErrors: [
      "Localised pronunciation distortion",
      "Word-level pronunciation accuracy",
    ],
    expertEvidence: [
      "The intended lexical item is 'healthcare'",
      "The distortion is localised to the pronunciation of that word",
      "The intended meaning remains identifiable",
      "The remainder of the sentence is accurately reproduced",
      "Delivery remains continuous and appropriately paced",
      "There is no evidence of a broader Content or Fluency problem",
    ],
    expertDiagnosis:
      "The primary diagnosis is Pronunciation. The student's difficulty is localised to the pronunciation of 'healthcare', while the intended word remains identifiable and the rest of the sentence is accurate. The teacher should focus on the specific pronunciation rather than treating the response as a Content or Fluency failure.",
    perfectCalibrationResponse:
      "Primary diagnosis: Pronunciation. The issue is a localised pronunciation distortion in the word 'healthcare'. The intended word remains recognisable, the rest of the sentence is accurately reproduced, and delivery is fluent. The teacher should therefore focus on the word-level pronunciation rather than diagnosing Content or Oral Fluency.",
    coachingAdvice:
      "Practise 'healthcare' separately, focusing on the complete word and its natural stress pattern. Then place it back into 'the healthcare system' and repeat the full sentence at a natural rate.",
    cefrLevel: {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description:
        "Complex academic themes, technical arguments, professional discourse.",
    },
    topicTitle: "Healthcare System Challenges",
    good: {
      transcript:
        "The speaker discussed several challenges facing the healthcare system in the coming decade.",
      audioDuration: "Controlled benchmark delivery",
      wordCount: 12,
      characteristics:
        "Accurate reproduction with clear pronunciation and natural continuous delivery.",
    },
    poor: {
      transcript:
        "The speaker discussed several challenges facing the health-care system in the coming decade.",
      audioDuration: "Controlled calibration response",
      wordCount: 12,
      characteristics:
        "The intended word remains recognisable, but its pronunciation is locally distorted.",
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
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "A localised pronunciation distortion affects the target word while Content and Oral Fluency remain strong.",
    },
    errorChecklist: [
      {
        id: "localised-pronunciation",
        label: "Localised pronunciation distortion",
        keyword: "Localised pronunciation distortion",
      },
      {
        id: "word-level-pronunciation",
        label: "Word-level pronunciation accuracy",
        keyword: "Word-level pronunciation accuracy",
      },
      {
        id: "recognisable-target-word",
        label: "Recognisable target word",
        keyword: "Recognisable target word",
      },
    ],
    expertAdvice:
      "Focus specifically on the pronunciation of 'healthcare'. The intended word remains recognisable and the rest of the response is accurate. Do not diagnose a Content or Fluency problem without additional evidence.",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/50.mp3",
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
] as const;