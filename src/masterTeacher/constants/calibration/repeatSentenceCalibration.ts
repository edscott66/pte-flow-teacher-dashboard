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
        "The results indicate that environmental factors play a significant... role in human behaviour.",
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
  difficulty: "Advanced",
  trainingSkill: "Content",
  diagnosticArea: "Lexical Substitution",
  learningObjective:
    "Identify a meaningful lexical substitution in a Repeat Sentence response and distinguish it from a pronunciation error when the substituted word is clearly pronounced.",

  promptText:
    "The speaker discussed several challenges facing the healthcare system in the coming decade.",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/51.mp3",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/52.mp3",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/53.mp3",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/54.mp3",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/55.mp3",

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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/56.mp3",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/57.mp3",
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
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Phrase-Internal Pausing",
    learningObjective:
      "Identify a controlled but inappropriate pause inside a meaningful phrase while recognising that Content and Pronunciation remain intact.",
    sourceQuestionId: "58",
    promptText:
      "Please check your email for important course updates.",
    promptAudioUrl:
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/58.mp3",
    promptAudio:
      "Please check your email for important course updates.",
    studentTranscript:
      "Please check your email for important (...) course updates.",
    studentResponse: {
      audioDuration: "9.5 seconds",
      wordCount: 9,
      characteristics:
        "All target words are present and clearly pronounced, but a noticeable silent pause interrupts the phrase 'important course updates'."
    },
    diagnosticErrors: [
      "Phrase-internal pausing",
      "Oral Fluency disruption",
      "Interrupted thought group"
    ],
    expertEvidence: [
      "All target words are reproduced",
      "The pause occurs inside the meaningful phrase 'important course updates'",
      "The pause interrupts otherwise continuous delivery",
      "Pronunciation remains clear",
      "There is no substantive Content omission or substitution"
    ],
    expertDiagnosis:
      "The primary issue is Oral Fluency because the student inserts a noticeable pause inside the meaningful phrase 'important course updates'. Content is complete and Pronunciation remains clear. The teacher should identify the phrase-internal fluency disruption rather than diagnosing a Content problem.",
    perfectCalibrationResponse:
      "The student's main issue is Oral Fluency because there is a noticeable pause inside the phrase 'important course updates'. All target words are present and Pronunciation remains clear, so Content is complete. The teacher should focus on maintaining smoother phrase grouping.",
    coachingAdvice:
      "Practise maintaining forward momentum within meaningful phrases. Avoid inserting unnecessary pauses between closely connected words when the Content is already known.",
    cefrLevel: "B2",
    topicTitle: "Course Email Updates",
    good: {
      transcript:
        "Please check your email for important course updates.",
      audioDuration: "7.5 seconds",
      wordCount: 9,
      characteristics:
        "Complete Content with clear Pronunciation and smooth phrase-level delivery."
    },
    poor: {
      transcript:
        "Please check your email for important (...) course updates.",
      audioDuration: "9.5 seconds",
      wordCount: 9,
      characteristics:
        "Complete and clearly pronounced response with a noticeable pause interrupting the phrase 'important course updates'."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear Pronunciation and smooth phrase-level Oral Fluency."
    },
    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "84 / 90",
      breakdownText:
        "A phrase-internal pause disrupts Oral Fluency while Content and Pronunciation remain strong."
    },
    errorChecklist: [
      {
        id: "phrase-internal-pausing",
        label: "Phrase-internal pausing",
        keyword: "Phrase-internal pausing"
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral Fluency disruption",
        keyword: "Oral Fluency disruption"
      },
      {
        id: "interrupted-thought-group",
        label: "Interrupted thought group",
        keyword: "Interrupted thought group"
      }
    ],
    expertAdvice:
      "Focus on the pause inside 'important course updates'. The defining problem is phrase-level Oral Fluency, not missing Content or unclear Pronunciation."
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/59.mp3",
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
      "https://storage.googleapis.com/pte_flow_audio/speaking/repeat_sentence/60.mp3",
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
  
] as const;