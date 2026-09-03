// PTE Academic 22 Question Types Master Database (The "PTE Brain")

export const SECTIONS = {
  SPEAKING: "Speaking",
  WRITING: "Writing",
  READING: "Reading",
  LISTENING: "Listening"
};

export const QUESTIONS_DATA = [
  // --- SPEAKING ---
  {
    id: "read-aloud",
    title: "Read Aloud",
    section: SECTIONS.SPEAKING,
    timeLimit: "30-40 seconds per prompt (Preparation: 30-40s)",
    skillsAssessed: ["Speaking", "Reading"],
    scoringCriteria: [
      { name: "Content", max: 5, description: "Each word spoken correctly. Omissions, replacements, and additions subtract points." },
      { name: "Oral Fluency", max: 5, description: "Smooth, effortless speech with natural phrasing and appropriate pauses. No hesitation or repetition." },
      { name: "Pronunciation", max: 5, description: "Vowel and consonant clarity, correct word stress, and sentence-level intonation understandable to native speakers." }
    ],
    errorChecklist: [
      { id: "fluency_hesitation", label: "Hesitation / Unnatural Pause", keyword: "Hesitation" },
      { id: "pronunciation_stress", label: "Incorrect Word/Sentence Stress", keyword: "Word Stress" },
      { id: "content_omission", label: "Omission / Skipping Words", keyword: "Content Omission" },
      { id: "intonation_robotic", label: "Monotone / Robotic Rhythm", keyword: "Intonation" },
      { id: "fluency_false_start", label: "Self-Correction / False Start", keyword: "False Start" },
      { id: "pronunciation_unclear", label: "Mispronunciation / Unclear Sounds", keyword: "Pronunciation" },
      { id: "fluency_phrasing", label: "Poor Phrasing / Word Grouping", keyword: "Phrasing" },
      { id: "fluency_rate", label: "Speech Rate Too Fast / Too Slow", keyword: "Oral Fluency" },
      { id: "pronunciation_intelligibility", label: "Reduced Intelligibility / Difficult to Understand", keyword: "Intelligibility" }
    ],
    expertAdvice: `Read Aloud evaluates Enabling Skills: Oral Fluency, Pronunciation, and Content accuracy. A critical marking trap for teachers is over-penalizing accent. PTE algorithm assesses intelligibility, stress patterns, and rhythm rather than native accent. Teachers often misgrade by rewarding slow, over-articulated speech. In reality, unnatural slow pace breaks phrasing and lowers Fluency scores. Instructors must evaluate whether the candidate maintains continuous speech without false starts or self-corrections. A single 3-second pause will terminate the microphone recording automatically! Always check if punctuation marks (commas, full stops) were used for natural breath pauses rather than random stops mid-clause.`,
    exampleResponse: {
      promptText: "Market research is a key component in the development of any business strategy. It involves gathering, analyzing, and interpreting information about a market, including potential customers and competitors.",
      good: {
        transcript: "Market research is a key component in the development of any business strategy. It involves gathering, analyzing, and interpreting information about a market, including potential customers and competitors.",
        audioDuration: "11 seconds",
        characteristics: "Rhythmic phrasing, stress on key content words ('market', 'development', 'strategy'), steady natural cadence, zero hesitation."
      },
      poor: {
        transcript: "Market... market research is a key component... in the... dev-elop-ment of any business strategy. It involves... gathering, analyze... analyzing information about market.",
        audioDuration: "24 seconds",
        characteristics: "Frequent false starts ('market... market'), broken phrasing, word substitution ('analyze' for 'analyzing'), and long unnatural pauses between clauses."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 5,
        fluency: 5,
        pronunciation: 5,
        overall: "90 / 90",
        breakdownText: "Excellent execution. Perfect word preservation with 100% content capture. Fluency is smooth and continuous with natural thought-group pauses. Pronunciation displays correct sentence stress on key content nouns and proper vowel reduction in function words."
      },
      poorScore: {
        content: 2,
        fluency: 2,
        pronunciation: 2,
        overall: "42 / 90",
        breakdownText: "Candidate suffered significant loss in Fluency due to false starts ('market... market') and self-correction ('analyze... analyzing'). Content score penalized due to omitted word 'and interpreting' and missing article 'a market'. Monotone cadence with mid-phrase hesitations degraded Pronunciation score."
      }
    }
  },

  {
    id: "repeat-sentence",
    title: "Repeat Sentence",
    section: SECTIONS.SPEAKING,
    timeLimit: "15 seconds (Prompt length: 3-5s)",
    skillsAssessed: ["Speaking", "Listening"],
    scoringCriteria: [
      { name: "Content", max: 3, description: "3 = All words in sequence; 2 = At least 50% words in sequence; 1 = Less than 50% words; 0 = Almost no words." },
      { name: "Oral Fluency", max: 5, description: "Rhythm, pacing, lack of hesitation or repetition." },
      { name: "Pronunciation", max: 5, description: "Clarity of speech sound, word accentuation, and intonation." }
    ],
    errorChecklist: [
      { id: "sequence_error", label: "Word Order / Sequence Error", keyword: "Word Sequence" },
      { id: "fluency_mumble", label: "Mumbling / Unclear Phrasing", keyword: "Clarity & Mumbling" },
      { id: "memory_drop", label: "Dropped Second Half of Sentence", keyword: "Content Retention" },
      { id: "intonation_flat", label: "Monotone / No Stress Pattern", keyword: "Sentence Intonation" }
    ],
    expertAdvice: `Repeat Sentence is the highest weightage item in the PTE Speaking and Listening modules combined. Teachers frequently make two errors: first, judging student output solely on memory rather than fluency. In PTE, fluency carries 5 points while content carries 3 points! If a student misses 2 words but delivers the rest with flawless fluency and native-like rhythm, they secure 11/13 points. Second, teachers fail to spot subtle 'filler insertions' (like 'uh', 'um') which destroy fluency. Instructors should train students to mimic the original speaker's stress and intonation chunks instead of trying to memorize individual isolated words.`,
    exampleResponse: {
      promptText: "Factors such as overall customer satisfaction and price determine brand loyalty.",
      good: {
        transcript: "Factors such as overall customer satisfaction and price determine brand loyalty.",
        audioDuration: "4 seconds",
        characteristics: "Exact word match, perfect stress on 'customer satisfaction' and 'brand loyalty', immediate response upon beep."
      },
      poor: {
        transcript: "Factors such... customer satisfaction... and... brand loyalty price.",
        audioDuration: "7 seconds",
        characteristics: "Omitted 'as overall', swapped 'price' to the end, 2-second hesitation after 'such'."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 3,
        fluency: 5,
        pronunciation: 5,
        overall: "90 / 90",
        breakdownText: "Flawless repetition. 100% word order accuracy. Immediate speech onset prevents microphone timeout. Excellent oral fluency with natural connected speech."
      },
      poorScore: {
        content: 1,
        fluency: 2,
        pronunciation: 3,
        overall: "48 / 90",
        breakdownText: "Content score reduced to 1 due to word sequence disruption and omission of 'as overall'. Fluency penalized significantly due to a 2-second mid-sentence gap and irregular rhythm."
      }
    }
  },

  {
    id: "describe-image",
    title: "Describe Image",
    section: SECTIONS.SPEAKING,
    timeLimit: "40 seconds (Preparation: 25s)",
    skillsAssessed: ["Speaking"],
    scoringCriteria: [
      { name: "Content", max: 5, description: "Identifies key elements, relationships, trends, and conclusions from bar/line/pie chart or diagram." },
      { name: "Oral Fluency", max: 5, description: "Smooth continuous stream of speech without hesitation or fillers." },
      { name: "Pronunciation", max: 5, description: "Clear articulation, appropriate intonation and stress." }
    ],
    errorChecklist: [
      { id: "content_trend", label: "Missed Key Trend / High-Low", keyword: "Key Trend Identification" },
      { id: "fluency_template", label: "Template Stumbling / Hesitation", keyword: "Template Fluency" },
      { id: "pronunciation_data", label: "Mispronounced Data Points/Numbers", keyword: "Data Pronunciation" },
      { id: "time_overrun", label: "Cut off before Conclusion", keyword: "Time Management & Conclusion" }
    ],
    expertAdvice: `Describe Image tests the candidate's ability to synthesize structured visual data into coherent speech under time pressure. The biggest misconception among teachers is that candidate responses require complex statistical analysis or sophisticated vocabulary. PTE score algorithms prioritize continuous oral fluency over deep statistical insight. If a candidate stumbles over numerical figures, their Fluency score drops drastically. Teachers must ensure candidates use a repeatable structural framework (Title & Topic -> High/Low Key Features -> Trend/Comparison -> Conclusion) delivered effortlessly without hesitation. Never let students pause to calculate exact percentages!`,
    exampleResponse: {
      promptText: "[Bar Chart: Global Renewable Energy Usage 2010 vs 2025 - Solar, Wind, Hydro]",
      good: {
        transcript: "The given bar chart illustrates global renewable energy usage comparing 2010 and 2025 across solar, wind, and hydro sectors. Overall, hydro remains the largest contributor, starting at 50% in 2010 and reaching 60% in 2025. In contrast, solar energy displays the fastest growth rate, rising dramatically from 10% to 35%. In conclusion, the chart highlights a significant global shift toward sustainable power sources.",
        audioDuration: "35 seconds",
        characteristics: "Logical sequence, smooth transitions ('Overall', 'In contrast', 'In conclusion'), precise stress on numbers, clear conclusion before 38s."
      },
      poor: {
        transcript: "This bar chart show renewable energy... 2010 and 2025. First is solar... solar is 10 percent... then 35 percent... um... hydro is 50... no 60 percent. Wind is... wind is middle... So energy is going up.",
        audioDuration: "38 seconds",
        characteristics: "Grammatical errors ('chart show'), vocal fillers ('um'), self-correction ('50... no 60'), choppy phrasing."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 5,
        fluency: 5,
        pronunciation: 5,
        overall: "90 / 90",
        breakdownText: "Outstanding description. Content covers title, maximum/minimum metrics, comparative trends, and a clear concluding synthesis. Oral fluency is unbroken with superb phrasing and cadence."
      },
      poorScore: {
        content: 2,
        fluency: 2,
        pronunciation: 3,
        overall: "45 / 90",
        breakdownText: "Content score severely impacted due to missing key comparative trend language. Fluency score damaged by vocal fillers ('um') and self-correction. Unstructured final sentence lacks formal conclusion."
      }
    }
  },

  {
    id: "retell-lecture",
    title: "Re-tell Lecture",
    section: SECTIONS.SPEAKING,
    timeLimit: "40 seconds (Preparation: 10s after audio)",
    skillsAssessed: ["Speaking", "Listening"],
    scoringCriteria: [
      { name: "Content", max: 5, description: "Captures main ideas, supporting points, key concepts, and logical relationships from audio." },
      { name: "Oral Fluency", max: 5, description: "Continuous speech flow, effortless transitions." },
      { name: "Pronunciation", max: 5, description: "Intelligibility and stress." }
    ],
    errorChecklist: [
      { id: "content_keywords", label: "Missing Core Lecture Keywords", keyword: "Key Lecture Concepts" },
      { id: "note_taking_lag", label: "Stumbling over Handwritten Notes", keyword: "Note-Taking & Delivery" },
      { id: "grammar_template", label: "Broken Template Connectors", keyword: "Cohesive Connectors" }
    ],
    expertAdvice: `Re-tell Lecture evaluates note-taking efficiency, auditory comprehension, and oral delivery. Teachers frequently advise students to write full sentences in 10 seconds, which leads to candidates reading haltingly from their notepad during recording. Instructors should train candidates to capture 4-5 noun phrases or subject-verb pairs during the audio, then fit these phrases smoothly into a mastered speech frame. Evaluators must verify that the student mentions core terminology from the lecture to score high in Content, while maintaining uninterrupted pace for Fluency.`,
    exampleResponse: {
      promptText: "[Audio snippet discussing Climate Change Impact on Coral Reef Ecosystems and Bleaching Events]",
      good: {
        transcript: "The lecture provided comprehensive insights into climate change impact on coral reef ecosystems. The speaker emphasized that rising sea temperatures trigger severe coral bleaching events. Furthermore, marine biologists noted a thirty percent reduction in biodiversity across affected reefs. In conclusion, urgent global action is required to preserve ocean habitats.",
        audioDuration: "33 seconds",
        characteristics: "Captures main theme, specific technical terms ('coral bleaching', 'biodiversity reduction'), smooth transitions."
      },
      poor: {
        transcript: "The speaker was talking about climate... climate change and sea temperature. Water is becoming hot... so coral reef is dying. Also... biologist said biodiversity... um... biodiversity goes down. That is main point.",
        audioDuration: "30 seconds",
        characteristics: "Limited vocabulary, repetitive syntax, hesitation on 'biodiversity', informal tone."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 5,
        fluency: 5,
        pronunciation: 5,
        overall: "90 / 90",
        breakdownText: "Ideal delivery. Captures all core lecture pillars (climate change, sea temperature, coral bleaching, biodiversity reduction). Fluency is seamless with precise academic vocabulary."
      },
      poorScore: {
        content: 2,
        fluency: 3,
        pronunciation: 3,
        overall: "52 / 90",
        breakdownText: "Content score suffers from incomplete coverage of marine biology context. Basic syntax ('water is becoming hot') weakens formal academic oral score."
      }
    }
  },

  {
    id: "answer-short-question",
    title: "Answer Short Question",
    section: SECTIONS.SPEAKING,
    timeLimit: "10 seconds per item",
    skillsAssessed: ["Speaking", "Listening"],
    scoringCriteria: [
      { name: "Content", max: 1, description: "1 = Correct word/phrase; 0 = Incorrect word." },
      { name: "Oral Fluency / Speed", max: 0, description: "No separate fluency score, but hesitation before speaking can fail item." }
    ],
    errorChecklist: [
      { id: "delay_start", label: "Delayed Onset (>3 sec silent)", keyword: "Microphone Timeout" },
      { id: "extra_explanation", label: "Unnecessary Explanation / Long Sentence", keyword: "Concise Single Word" }
    ],
    expertAdvice: `Answer Short Question is a binary item (1 or 0) for content. Teachers should remind students that giving a full sentence answer (e.g. 'The answer to your question is thermometer') is unnecessary and risks introducing hesitation. Single-word or 2-word answers (e.g., 'Thermometer') are optimal. The critical trap is delaying speech onset for more than 3 seconds, which turns off the microphone automatically.`,
    exampleResponse: {
      promptText: "What instrument is used to measure body temperature?",
      good: { transcript: "Thermometer.", audioDuration: "1 second", characteristics: "Immediate, clear, concise." },
      poor: { transcript: "Um... it is called a temperature meter... or thermometer?", audioDuration: "5 seconds", characteristics: "Hesitation, incorrect term preceding correct term." }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "90 / 90", breakdownText: "Correct single-word response. Immediate response onset." },
      poorScore: { content: 0, overall: "10 / 90", breakdownText: "Inaccurate vocabulary initial guess and hesitation reduce response score." }
    }
  },

  {
    id: "summarize-group-discussion",
    title: "Summarize Group Discussion",
    section: SECTIONS.SPEAKING,
    timeLimit: "40 seconds (Preparation: 10s after audio/video)",
    skillsAssessed: ["Speaking", "Listening"],
    scoringCriteria: [
      { name: "Content", max: 5, description: "Captures primary consensus, key participant viewpoints, and major arguments from the group discussion." },
      { name: "Oral Fluency", max: 5, description: "Smooth continuous speech flow without mid-phrase stumbles or hesitations." },
      { name: "Pronunciation", max: 5, description: "Intelligibility, correct word stress, and natural academic intonation." }
    ],
    errorChecklist: [
      { id: "content_group_perspectives", label: "Missing Group Perspectives / Consensus", keyword: "Group Perspectives" },
      { id: "fluency_note_taking", label: "Hesitation / Lag from Note-Taking", keyword: "Note-Taking Hesitation" },
      { id: "content_single_speaker", label: "Over-focus on Single Speaker Only", keyword: "Balanced Summary" },
      { id: "cohesive_connectors", label: "Lacks Transition & Discourse Connectors", keyword: "Cohesive Connectors" }
    ],
    expertAdvice: `Summarize Group Discussion evaluates auditory comprehension across multiple speakers, note-taking, and oral synthesis. Instructors should train candidates to capture the central topic, the distinct arguments raised by different group members, and any final consensus reached. Candidates must deliver their summary smoothly using structured discourse frames (e.g. 'The group discussed...', 'While one participant emphasized...', 'Ultimately, they agreed that...'). Over-focusing on just one speaker or hesitating while reading notes will deduct significant points in Content and Fluency.`,
    exampleResponse: {
      promptText: "[Audio/Video: Group Discussion among 3 researchers regarding Sustainable Urban Transportation and congestion pricing]",
      good: {
        transcript: "The group discussion focused on sustainable urban transportation strategies. While one speaker highlighted congestion pricing to reduce city center traffic, another participant raised concerns about equity for low-income commuters. Ultimately, the group agreed that revenue generated from toll pricing must be directly reinvested into expanding electric public transit.",
        audioDuration: "34 seconds",
        characteristics: "Synthesizes multiple viewpoints, clear transition markers ('While one speaker', 'another participant', 'Ultimately'), steady fluency."
      },
      poor: {
        transcript: "The people were talking about cars and traffic... um... one guy said toll money is good. Then the woman said... uh... poor people cannot pay for cars. So they talk more about bus and train.",
        audioDuration: "28 seconds",
        characteristics: "Informal phrasing ('one guy', 'the woman'), vocal fillers ('um', 'uh'), lacks formal academic synthesis."
      }
    },
    expertFeedback: {
      goodScore: { content: 5, fluency: 5, pronunciation: 5, overall: "90 / 90", breakdownText: "Flawless group discussion summary. Captures all key participant perspectives, contrasting arguments, and final consensus. Fluency and academic vocabulary are outstanding." },
      poorScore: { content: 2, fluency: 2, pronunciation: 3, overall: "42 / 90", breakdownText: "Content penalized due to superficial coverage of discussion points and lack of synthesis terminology. Fluency degraded by vocal fillers and choppy sentence structures." }
    }
  },

  {
    id: "respond-to-situation",
    title: "Respond to a Situation",
    section: SECTIONS.SPEAKING,
    timeLimit: "40 seconds (Preparation: 20s)",
    skillsAssessed: ["Speaking"],
    scoringCriteria: [
      { name: "Content", max: 5, description: "Fully addresses scenario requirements, delivers appropriate pragmatic functions (apologizing, requesting, negotiating), and provides complete context." },
      { name: "Oral Fluency", max: 5, description: "Smooth, natural speech rhythm without hesitation or unnatural pauses." },
      { name: "Pronunciation", max: 5, description: "Clear articulation, appropriate word/sentence stress, and polite spoken tone." }
    ],
    errorChecklist: [
      { id: "scenario_relevance", label: "Off-Topic / Missed Key Request Detail", keyword: "Scenario Relevance" },
      { id: "register_inappropriate", label: "Inappropriate Register / Informal Tone", keyword: "Pragmatic Tone" },
      { id: "fluency_hesitation", label: "Mid-Sentence Hesitation / Pauses", keyword: "Oral Fluency" },
      { id: "resolution_incomplete", label: "Missing Solution or Proposed Action", keyword: "Resolution Completeness" }
    ],
    expertAdvice: `Respond to a Situation measures real-world pragmatic spoken English in academic and professional contexts. Candidates are given a scenario (e.g., requesting an assignment deadline extension from a professor due to illness) and must formulate a polite, complete, and fluent response. Evaluators must check whether the candidate maintains an appropriate level of formality, states their situation clearly, provides a reasonable justification, and offers a specific resolution. Hesitations, over-explaining, or using overly informal slang harm Fluency and Content ratings.`,
    exampleResponse: {
      promptText: "[Scenario: You missed your lab presentation because your flight was delayed due to severe weather. Speak to your professor to explain the situation and request a reschedule.]",
      good: {
        transcript: "Hello Professor Smith. I am calling to sincerely apologize for missing yesterday's lab presentation. Unfortunately, my return flight was grounded due to severe weather conditions. I would be extremely grateful if I could reschedule my presentation during your upcoming office hours or next week's lab session.",
        audioDuration: "22 seconds",
        characteristics: "Formal polite register, immediate state of purpose, valid justification, explicit proposed alternative."
      },
      poor: {
        transcript: "Hi professor... sorry I didn't come to presentation. My plane was late because bad storm weather... so I couldn't make it. Can I do it another day? Thanks.",
        audioDuration: "16 seconds",
        characteristics: "Abrupt phrasing, overly simple syntax, informal tone, lacks structured academic request."
      }
    },
    expertFeedback: {
      goodScore: { content: 5, fluency: 5, pronunciation: 5, overall: "90 / 90", breakdownText: "Exceptional situational response. Perfect academic register, polite tone, clear justification, and explicit request for rescheduling. Oral fluency is natural and uninterrupted." },
      poorScore: { content: 2, fluency: 3, pronunciation: 3, overall: "48 / 90", breakdownText: "Content score penalized for truncated explanation and basic phrasing. Fails to provide specific alternative times or formal opening/closing." }
    }
  },

  // --- WRITING ---
  {
    id: "summarize-written-text",
    title: "Summarize Written Text",
    section: SECTIONS.WRITING,
    timeLimit: "10 minutes per prompt",
    skillsAssessed: ["Writing", "Reading"],
    scoringCriteria: [
      { name: "Content", max: 2, description: "2 = Summarizes all main points; 1 = Misses key aspects; 0 = Completely off topic." },
      { name: "Form", max: 1, description: "1 = EXACTLY ONE SINGLE SENTENCE between 5 and 75 words ending with a full stop. 0 = Multiple sentences, under 5 or over 75 words." },
      { name: "Grammar", max: 2, description: "2 = Correct grammatical structure; 1 = Minor errors; 0 = Severe structural breakdown." },
      { name: "Vocabulary", max: 2, description: "2 = Appropriate word choice; 1 = Basic/repetitive; 0 = Incorrect vocabulary usage." }
    ],
    errorChecklist: [
      { id: "form_multiple_sentences", label: "Multiple Sentences / Missing Full Stop", keyword: "Form Violation (Single Sentence)" },
      { id: "word_count_bounds", label: "Word Count (<5 or >75 words)", keyword: "Word Count Range" },
      { id: "grammar_comma_splice", label: "Comma Splice / Run-on Sentence", keyword: "Comma Splice Error" },
      { id: "content_minor_detail", label: "Focused on Example instead of Main Point", keyword: "Main vs Minor Idea" }
    ],
    expertAdvice: `Summarize Written Text (SWT) carries a fatal Form constraint: if the summary is NOT a single sentence (or is <5 or >75 words), Form receives 0, which immediately zeros out the entire item score! Teachers often fail to check for comma splices—joining two independent clauses with a comma without a coordinating conjunction (e.g. 'and', 'but') or subordinating conjunction ('although', 'because'). Instructors must train candidates to construct a compound-complex sentence using appropriate connectors (e.g., 'Although [Clause A], [Clause B], which [Clause C].').`,
    exampleResponse: {
      promptText: "Text regarding urban farming benefits, environmental sustainability, and economic challenges faced by city vertical farmers.",
      good: {
        transcript: "Although vertical urban farming offers significant environmental benefits by reducing agricultural land usage and carbon emissions, city farmers face substantial economic challenges due to high initial capital investment and energy costs.",
        wordCount: 35,
        characteristics: "Single sentence, 35 words, clear complex structure, covers environmental benefit and economic challenge."
      },
      poor: {
        transcript: "Vertical urban farming is good for the environment because it reduces carbon emissions, however farmers face big financial problems. They need high investment for equipment and lighting.",
        wordCount: 31,
        characteristics: "TWO sentences (Form fail = 0 score!). Comma splice before 'however'."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 2, form: 1, grammar: 2, vocabulary: 2, overall: "90 / 90",
        breakdownText: "Perfect summary. Form criteria met (single sentence of 35 words). Grammar is flawless with a sophisticated complex clause. Content accurately captures both main pillars."
      },
      poorScore: {
        content: 0, form: 0, grammar: 0, vocabulary: 1, overall: "10 / 90",
        breakdownText: "CRITICAL FORM FAILURE: Submission contains 2 sentences. As per PTE guidelines, Form = 0 results in an automatic 0 for Content and Grammar."
      }
    }
  },

  {
    id: "write-essay",
    title: "Write Essay",
    section: SECTIONS.WRITING,
    timeLimit: "20 minutes per prompt",
    skillsAssessed: ["Writing"],
    scoringCriteria: [
      { name: "Content", max: 3, description: "3 = Adequately deals with prompt topic; 0 = Completely off topic." },
      { name: "Form", max: 2, description: "2 = Between 200 and 300 words. 1 = 120-199 or 301-380 words. 0 = <120 or >380 words." },
      { name: "Development & Structure", max: 2, description: "Logical paragraph flow, introduction, body, conclusion." },
      { name: "Grammar & Spelling", max: 4, description: "Grammatical accuracy, consistent spelling convention (US or UK)." }
    ],
    errorChecklist: [
      { id: "word_count_essay", label: "Word Count Outside 200-300 Range", keyword: "Essay Word Count" },
      { id: "off_topic_prompt", label: "Off-Topic / Failed Prompt Keywords", keyword: "Prompt Keyword Alignment" },
      { id: "spelling_mixing", label: "Mixed UK/US Spelling Conventions", keyword: "Spelling Consistency" },
      { id: "paragraph_lacking", label: "Lacks Structured 4-Paragraph Layout", keyword: "Paragraph Structure" }
    ],
    expertAdvice: `Write Essay evaluates written discourse, vocabulary, and grammatical range. Teachers frequently focus heavily on creative ideas, whereas the automated scoring engine prioritizes structural coherence, prompt keyword alignment, word count compliance (200-300 words), and consistent spelling conventions. A key trap is mixing UK ('organise', 'colour') and US ('organize', 'color') spelling in the same essay—PTE penalizes mixed conventions. Instructors should enforce a clear 4-paragraph structure: Introduction (restate prompt + thesis), Body Paragraph 1 (Argument + Example), Body Paragraph 2 (Counter-argument / Second perspective + Example), and Conclusion.`,
    exampleResponse: {
      promptText: "Should artificial intelligence be regulated by international governments to prevent workplace displacement?",
      good: {
        transcript: "In recent years, the rapid advancement of artificial intelligence has sparked intense debate regarding international regulation. While proponents argue that global oversight is essential to protect workers from technological displacement, others contend that excessive restriction hinders technological innovation. This essay will analyze both perspectives before proposing a balanced approach.\n\nOn one hand, unregulated AI implementation poses significant risks to employment across various industries. Automating administrative and analytical tasks could lead to widespread job loss, creating economic instability. For instance, automated customer service algorithms have replaced thousands of entry-level positions worldwide. Therefore, international labor standards are required to ensure a smooth transition for workforce reskilling.\n\nOn the other hand, over-regulating emerging technologies might stifle economic growth and competitive technological research. Strict legislative frameworks can slow down medical and scientific AI breakthroughs. Consequently, international bodies should focus on ethical guidelines rather than rigid prohibitions.\n\nIn conclusion, international regulation is necessary to safeguard employment standards without impeding technological progress. A collaborative international framework remains the most effective policy solution.",
        wordCount: 242,
        characteristics: "242 words, structured 4 paragraphs, balanced arguments, advanced cohesion and formal academic vocabulary."
      },
      poor: {
        transcript: "AI is changing everything in modern world. Some people like AI but many workers lose job because robot can do work faster and cheaper. Government must stop company from using AI too much. If people lose job they cannot buy food. I think AI is dangerous for future. We should be careful about technology.",
        wordCount: 62,
        characteristics: "Only 62 words (Form = 0!). Informal tone, simple repetitive sentence patterns, no structured paragraphs."
      }
    },
    expertFeedback: {
      goodScore: {
        content: 3, form: 2, grammar: 2, vocabulary: 2, overall: "90 / 90",
        breakdownText: "Exemplary essay. Word count (242 words) falls squarely within the optimal 200-300 word band. Content addresses all aspects of international regulation and workforce displacement with high lexical diversity."
      },
      poorScore: {
        content: 1, form: 0, grammar: 1, vocabulary: 1, overall: "28 / 90",
        breakdownText: "Severe length penalty: 62 words triggers Form = 0 score. Lack of complex sentences and limited vocabulary severely restrict Enabling Skills scores."
      }
    }
  },

  // --- READING ---
  {
    id: "fill-in-blanks-rw",
    title: "Reading & Writing: Fill in the Blanks",
    section: SECTIONS.READING,
    timeLimit: "Self-paced (Recommended: ~2 minutes per text)",
    skillsAssessed: ["Reading", "Writing"],
    scoringCriteria: [
      { name: "Partial Credit", max: 5, description: "1 point for each correctly filled drop-down blank." }
    ],
    errorChecklist: [
      { id: "collocation_error", label: "Ignored Academic Collocation", keyword: "Academic Collocations" },
      { id: "grammar_part_speech", label: "Part of Speech Misalignment (Noun/Verb/Adj)", keyword: "Part of Speech Context" },
      { id: "context_clue", label: "Missed Sentence Tone / Logic Clue", keyword: "Contextual Cohesion" }
    ],
    expertAdvice: `Reading & Writing: Fill in the Blanks contributes significantly to both Reading AND Writing scores. Each blank offers a drop-down menu with 4 options. The primary teacher mistake is treating this purely as a reading comprehension exercise. In reality, option selection relies heavily on Academic Collocations (e.g., 'play a crucial role', 'conduct research') and Grammatical Agreement (e.g., subject-verb agreement, verb tense, prepositional collocation). Instructors must teach candidates to identify the required part of speech before looking at options.`,
    exampleResponse: {
      promptText: "Scientific research [1. plays / makes / gives / performs] a vital role in technological advancement. Scientists must [2. conduct / make / create / deliver] rigorous experiments to validate hypotheses.",
      good: { answers: ["1. plays", "2. conduct"], score: "2 / 2" },
      poor: { answers: ["1. makes", "2. create"], score: "0 / 2" }
    },
    expertFeedback: {
      goodScore: { content: 2, overall: "100%", breakdownText: "Both collocations selected correctly ('plays a role', 'conduct experiments')." },
      poorScore: { content: 0, overall: "0%", breakdownText: "Selected unnatural collocations. 'Makes a role' is ungrammatical in formal English." }
    }
  },

  {
    id: "reorder-paragraphs",
    title: "Re-order Paragraphs",
    section: SECTIONS.READING,
    timeLimit: "Self-paced (Recommended: ~2-3 minutes)",
    skillsAssessed: ["Reading"],
    scoringCriteria: [
      { name: "Pair Credit", max: 4, description: "1 point for each correct adjacent pair (e.g., if correct sequence is A-B-C-D, pairs are A-B, B-C, C-D)." }
    ],
    errorChecklist: [
      { id: "topic_sentence", label: "Selected Dependent Clause as Topic Sentence", keyword: "Independent Topic Sentence" },
      { id: "pronoun_reference", label: "Unmatched Pronoun Reference (He/They/This)", keyword: "Anaphoric Reference / Pronoun Link" }
    ],
    expertAdvice: `Re-order Paragraphs is scored on ADJACENT PAIRS, not individual positions! For example, if the correct order is A-B-C-D and a student answers B-C-D-A, they still get 2 points for pairs B-C and C-D. Teachers often forget to explain this pair-scoring mechanic. Instructors should train students to find the standalone 'Topic Sentence' first (which contains no unexplained pronouns like 'this theory', 'he', 'these results') and then construct noun-pronoun and chronological chains.`,
    exampleResponse: {
      promptText: "4 jumbled text boxes about Isaac Newton's early life and discoveries.",
      good: { sequence: "A -> C -> B -> D", pairsCorrect: 3, maxPairs: 3 },
      poor: { sequence: "C -> A -> D -> B", pairsCorrect: 0, maxPairs: 3 }
    },
    expertFeedback: {
      goodScore: { content: 3, overall: "3 / 3 Pair Points", breakdownText: "Flawless pair matching. Identified independent topic sentence A first." },
      poorScore: { content: 0, overall: "0 / 3 Pair Points", breakdownText: "Placed dependent pronoun sentence C at the start. Failed to establish chronological link." }
    }
  },

  {
    id: "fill-in-blanks-r",
    title: "Reading: Fill in the Blanks",
    section: SECTIONS.READING,
    timeLimit: "Self-paced (Recommended: ~1.5-2 minutes)",
    skillsAssessed: ["Reading"],
    scoringCriteria: [
      { name: "Partial Credit", max: 5, description: "1 point per correct drag-and-drop word into blank." }
    ],
    errorChecklist: [
      { id: "drag_grammar", label: "Grammar Tense / Plural Misalignment", keyword: "Grammatical Fit" }
    ],
    expertAdvice: `Unlike R&W Fill in the Blanks, this drag-and-drop task presents a single pool of extra distractor words at the bottom. Teachers must teach candidates to eliminate options based on grammar (e.g., if the blank follows 'an', the word must start with a vowel sound; if it follows 'has been', it requires a past participle verb).`,
    exampleResponse: {
      promptText: "Renewable energy has become an [essential] component of global power generation.",
      good: { answers: ["essential"], score: "1 / 1" },
      poor: { answers: ["essentially"], score: "0 / 1" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "100%", breakdownText: "Correct adjective selected after article 'an'." },
      poorScore: { content: 0, overall: "0%", breakdownText: "Incorrectly placed adverb 'essentially' before noun 'component'." }
    }
  },

  {
    id: "mcq-multiple-reading",
    title: "Multiple Choice, Choose Multiple Answers (Reading)",
    section: SECTIONS.READING,
    timeLimit: "Self-paced",
    skillsAssessed: ["Reading"],
    scoringCriteria: [
      { name: "Negative Marking", max: 3, description: "+1 for correct choice, -1 for incorrect choice. Minimum score for item is 0." }
    ],
    errorChecklist: [
      { id: "negative_marking_overselect", label: "Selected Uncertain Options (Negative Marking Trap)", keyword: "Negative Marking Strategy" }
    ],
    expertAdvice: `CRITICAL TEACHING POINT: Negative marking applies here! If a student chooses 1 correct and 1 incorrect option, their score is 1 - 1 = 0! Teachers MUST instruct students: 'If you are not 100% sure about a second option, SELECT ONLY ONE OPTION.' Selecting 1 correct option guarantees +1 point rather than risking 0 points.`,
    exampleResponse: {
      promptText: "Academic passage about archaeological carbon dating methods.",
      good: { selected: ["Option B (Verified)"], score: "1 / 2" },
      poor: { selected: ["Option B (Correct)", "Option D (Guess/Incorrect)"], score: "0 / 2" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 2 (+1 net)", breakdownText: "Smart single selection avoided negative marking penalty on uncertain options." },
      poorScore: { content: 0, overall: "0 / 2 (1 - 1 = 0)", breakdownText: "Guessing Option D wiped out the positive point earned from Option B." }
    }
  },

  {
    id: "mcq-single-reading",
    title: "Multiple Choice, Choose Single Answer (Reading)",
    section: SECTIONS.READING,
    timeLimit: "Self-paced",
    skillsAssessed: ["Reading"],
    scoringCriteria: [
      { name: "Correct / Incorrect", max: 1, description: "1 point for correct option, 0 for incorrect. No negative marking." }
    ],
    errorChecklist: [
      { id: "time_wasted_single", label: "Spent >2 minutes on low-weight item", keyword: "Time Allocation" }
    ],
    expertAdvice: `This is a low-weightage question type worth 1 point per item without negative marking. Teachers must instruct candidates not to spend more than 1 minute here, as remaining time is critical for higher-weight reading fill-in-the-blanks.`,
    exampleResponse: {
      promptText: "Short text on deep sea ocean currents.",
      good: { answer: "Option C", score: "1 / 1" },
      poor: { answer: "Option A", score: "0 / 1" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 1", breakdownText: "Accurate main idea identification within 45 seconds." },
      poorScore: { content: 0, overall: "0 / 1", breakdownText: "Confused supporting detail with primary thesis." }
    }
  },

  // --- LISTENING ---
  {
    id: "summarize-spoken-text",
    title: "Summarize Spoken Text",
    section: SECTIONS.LISTENING,
    timeLimit: "10 minutes per item (Audio: 60-90s)",
    skillsAssessed: ["Listening", "Writing"],
    scoringCriteria: [
      { name: "Content", max: 2, description: "2 = Correctly summarizes main key ideas; 1 = Misses key ideas; 0 = Off topic." },
      { name: "Form", max: 1, description: "1 = 50 to 70 words. 0 = <50 or >70 words." },
      { name: "Grammar & Spelling", max: 4, description: "Grammatical correctness and spelling accuracy." },
      { name: "Vocabulary", max: 2, description: "Appropriate academic lexical choice." }
    ],
    errorChecklist: [
      { id: "sst_form_length", label: "Word Count Outside 50-70 Words", keyword: "SST Word Count Bounds" },
      { id: "sst_spelling_auditory", label: "Spelling Mistake from Audio Terms", keyword: "Auditory Spelling Accuracy" },
      { id: "sst_grammar_structure", label: "Fragmented Sentences", keyword: "Sentence Structure" }
    ],
    expertAdvice: `Summarize Spoken Text (SST) carries individual 10-minute timers! Unlike the rest of the Listening section where time is pooled, SST gives a dedicated 10 minutes per question. Word count MUST be between 50 and 70 words. Teachers should remind students that unlike Summarize Written Text, multiple sentences ARE required here! Instructors should advise candidates to write 3-4 clear sentences capturing key lecture terms.`,
    exampleResponse: {
      promptText: "[Audio snippet discussing drivers of global urbanization and rural migration]",
      good: {
        transcript: "The speaker discussed the fundamental drivers of global urbanization and economic migration. Industrial development and higher education opportunities in metropolitan areas attract rural populations. However, rapid urban expansion creates severe infrastructure pressure and housing shortages. Consequently, urban planners must implement sustainable development policies.",
        wordCount: 56,
        characteristics: "56 words (50-70 range), 4 distinct sentences, captures core lecture terms."
      },
      poor: {
        transcript: "Urbanization is increasing because people move to big cities for work and study. Big cities have better hospitals and schools. But city has too much traffic and garbage problem so planners need to fix it.",
        wordCount: 37,
        characteristics: "37 words (FORM FAILURE: Under 50 words!). Informal vocabulary ('big cities', 'fix it')."
      }
    },
    expertFeedback: {
      goodScore: { content: 2, form: 1, grammar: 2, vocabulary: 2, overall: "90 / 90", breakdownText: "Ideal summary. Met 50-70 word constraint (56 words). Excellent academic vocabulary and sentence structure." },
      poorScore: { content: 0, form: 0, grammar: 1, vocabulary: 1, overall: "22 / 90", breakdownText: "FORM FAIL: 37 words is under the mandatory 50-word minimum, resulting in severe point deductions across content." }
    }
  },

  {
    id: "write-from-dictation",
    title: "Write From Dictation",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer (Prompt: 3-5s)",
    skillsAssessed: ["Listening", "Writing"],
    scoringCriteria: [
      { name: "Partial Credit per Word", max: 15, description: "+1 point for every correct word spelled correctly in the exact sentence." }
    ],
    errorChecklist: [
      { id: "wfd_spelling_error", label: "Spelling Error / Singular vs Plural (-s/-es)", keyword: "Spelling & Plural Ending (-s)" },
      { id: "wfd_capital_first", label: "Missing Initial Capital Letter / Period", keyword: "Punctuation & Capitalization" },
      { id: "wfd_time_ran_out", label: "Ran out of time before reaching last question", keyword: "Listening Time Management" }
    ],
    expertAdvice: `Write From Dictation (WFD) is arguably the single most important question type in the entire PTE Academic exam, contributing massive points to both Listening and Writing scores! It appears at the very END of the Listening test. The most common teacher failure is not preparing students for time management, causing candidates to run out of time before reaching WFD. Teachers must also instruct students on singular/plural endings ('s' or 'es') and correct capitalization at the beginning of the sentence. Extra word strategy: PTE system counts unique matching words, so if unsure of singular or plural, typing both (e.g. 'student students') can capture the point without penalty!`,
    exampleResponse: {
      promptText: "The academic calendar may be subject to change due to unforeseen circumstances.",
      good: { transcript: "The academic calendar may be subject to change due to unforeseen circumstances.", score: "11 / 11 words correct" },
      poor: { transcript: "The academic calendars may be subject to changes due to unforseen circumstance.", score: "7 / 11 words correct" }
    },
    expertFeedback: {
      goodScore: { content: 11, overall: "100%", breakdownText: "Flawless sentence transcription. Capital letter and period included, 100% word accuracy." },
      poorScore: { content: 7, overall: "63%", breakdownText: "Penalized for singular/plural mismatch ('calendars' vs 'calendar', 'circumstance' vs 'circumstances') and spelling error ('unforseen')." }
    }
  },

  {
    id: "highlight-incorrect-words",
    title: "Highlight Incorrect Words",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening", "Reading"],
    scoringCriteria: [
      { name: "Negative Marking", max: 7, description: "+1 for correct highlighted word, -1 for incorrect highlight. Min score 0." }
    ],
    errorChecklist: [
      { id: "hiw_negative_marking", label: "Randomly Clicking Words (Negative Marking)", keyword: "HIW Negative Marking Trap" }
    ],
    expertAdvice: `Highlight Incorrect Words carries NEGATIVE MARKING! Candidates listen to an audio while reading a transcript on screen with intentional word substitutions. Candidates must click words that differ. Teachers must emphasize: 'Do not click unless you clearly heard a different word spoken.' Random clicking reduces total points.`,
    exampleResponse: {
      promptText: "Audio says 'financial', text shows 'fiscal'. Audio says 'rapid', text shows 'sudden'.",
      good: { clicked: ["fiscal", "sudden"], score: "2 / 2" },
      poor: { clicked: ["fiscal", "sudden", "economic (guess)"], score: "1 / 2 (2 - 1 = 1)" }
    },
    expertFeedback: {
      goodScore: { content: 2, overall: "100%", breakdownText: "Accurate auditory detection of substituted words without extra false clicks." },
      poorScore: { content: 1, overall: "50%", breakdownText: "Excessive click on 'economic' triggered negative marking deduction." }
    }
  },

  {
    id: "fill-blanks-listening",
    title: "Listening: Fill in the Blanks",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening", "Writing"],
    scoringCriteria: [
      { name: "Partial Credit", max: 5, description: "1 point per correctly spelled missing word." }
    ],
    errorChecklist: [
      { id: "l_fib_spelling", label: "Incorrect Spelling of Auditory Word", keyword: "Auditory Spelling Precision" }
    ],
    expertAdvice: `In Listening Fill in the Blanks, spelling MUST be 100% accurate. Even a single letter error (e.g. 'goverment' instead of 'government') forfeits the point. Instructors should advise candidates to type quick shorthand in their notepad during audio playback, then type and double-check spelling carefully during the pause.`,
    exampleResponse: {
      promptText: "Audio: 'Environmental conservation requires international cooperation and strict regulations.'",
      good: { answers: ["conservation", "cooperation", "regulations"], score: "3 / 3" },
      poor: { answers: ["conservasion", "cooperation", "regulation"], score: "1 / 3" }
    },
    expertFeedback: {
      goodScore: { content: 3, overall: "100%", breakdownText: "All words captured with accurate spelling and plural endings." },
      poorScore: { content: 1, overall: "33%", breakdownText: "Lost points on spelling ('conservasion') and missing plural suffix ('regulation' vs 'regulations')." }
    }
  },

  {
    id: "mcq-multiple-listening",
    title: "Multiple Choice, Choose Multiple Answers (Listening)",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening"],
    scoringCriteria: [
      { name: "Negative Marking", max: 3, description: "+1 for correct, -1 for incorrect option. Min score 0." }
    ],
    errorChecklist: [
      { id: "mcq_l_overselect", label: "Overselected choices under negative marking", keyword: "Selective Selection Strategy" }
    ],
    expertAdvice: `Negative marking applies! Teachers should advise students: 'Choose only 1 option if not entirely sure of the second option.'`,
    exampleResponse: {
      promptText: "Audio discussing planetary orbit mechanics.",
      good: { selected: ["Option A"], score: "1 / 2" },
      poor: { selected: ["Option A", "Option C (Wrong)"], score: "0 / 2" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 2", breakdownText: "Conservative strategy preserved positive score." },
      poorScore: { content: 0, overall: "0 / 2", breakdownText: "Negative marking cancelled out correct choice." }
    }
  },

  {
    id: "highlight-correct-summary",
    title: "Highlight Correct Summary",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening", "Reading"],
    scoringCriteria: [
      { name: "Correct / Incorrect", max: 1, description: "1 point for selecting the accurate summary option." }
    ],
    errorChecklist: [
      { id: "hcs_detail_trap", label: "Selected option containing a true detail but missing main thesis", keyword: "Main Synthesis vs Isolated Detail" }
    ],
    expertAdvice: `Distractor options often include sentences that are factually true according to the audio, but focus only on a minor supporting detail rather than the overall summary. Teachers must train candidates to look for holistic main idea synthesis.`,
    exampleResponse: {
      promptText: "Audio on renewable energy transition challenges.",
      good: { selected: ["Option B (Holistic Summary)"], score: "1 / 1" },
      poor: { selected: ["Option A (Minor detail trap)"], score: "0 / 1" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 1", breakdownText: "Accurately selected overall summary." },
      poorScore: { content: 0, overall: "0 / 1", breakdownText: "Fell for secondary detail distractor." }
    }
  },

  {
    id: "mcq-single-listening",
    title: "Multiple Choice, Choose Single Answer (Listening)",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening"],
    scoringCriteria: [
      { name: "Correct / Incorrect", max: 1, description: "1 point for correct option." }
    ],
    errorChecklist: [
      { id: "mcq_s_time", label: "Spent excessive time post-audio", keyword: "Rapid Decision" }
    ],
    expertAdvice: `Low weightage item. Select an option immediately after audio completes and move to next question.`,
    exampleResponse: {
      promptText: "Short audio on campus library hours.",
      good: { answer: "Option B", score: "1 / 1" },
      poor: { answer: "Option D", score: "0 / 1" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 1", breakdownText: "Quick accurate response." },
      poorScore: { content: 0, overall: "0 / 1", breakdownText: "Incorrect option selected." }
    }
  },

  {
    id: "select-missing-word",
    title: "Select Missing Word",
    section: SECTIONS.LISTENING,
    timeLimit: "Integrated in Listening timer",
    skillsAssessed: ["Listening"],
    scoringCriteria: [
      { name: "Correct / Incorrect", max: 1, description: "1 point for selecting the word/phrase replacing the beep." }
    ],
    errorChecklist: [
      { id: "smw_context_tone", label: "Missed final sentence tone/connector (e.g., 'however')", keyword: "Tone & Conjunction Prediction" }
    ],
    expertAdvice: `The audio ends with a 'beep' sound replacing the final word or phrase. Teachers should teach candidates to focus intensely on the final sentence's cohesive conjunctions (e.g. 'therefore', 'however') to predict if the missing word has a positive, negative, or concluding tone.`,
    exampleResponse: {
      promptText: "Audio: 'Although the project suffered severe delays, the final outcome was [BEEP].'",
      good: { selected: ["successful"], score: "1 / 1" },
      poor: { selected: ["delayed"], score: "0 / 1" }
    },
    expertFeedback: {
      goodScore: { content: 1, overall: "1 / 1", breakdownText: "Correctly recognized contrast introduced by 'Although'." },
      poorScore: { content: 0, overall: "0 / 1", breakdownText: "Ignored the contrastive conjunction." }
    }
  }
];
