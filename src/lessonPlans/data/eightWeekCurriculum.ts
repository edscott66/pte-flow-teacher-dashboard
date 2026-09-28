// 8-Week PTE Master Lesson Plan Data - PTE Examiner Curriculum
// 1 hour/day, 4 days/week, 8 weeks = 32 Total 1-Hour Lessons

export interface DailyLesson {
  dayNumber: number; // 1 to 32
  weekNumber: number; // 1 to 8
  dayOfWeek: number; // 1 to 4
  title: string;
  moduleKey: string; // e.g. "read-aloud", "write-from-dictation"
  moduleName: string;
  section: "SPEAKING" | "WRITING" | "READING" | "LISTENING" | "INTEGRATED";
  scoringWeight: "ULTRA HIGH YIELD" | "HIGH YIELD" | "MEDIUM YIELD" | "LOW YIELD" | "MOCK EXAM";
  scoreImpactText: string; // e.g. "Contributes ~25% to Listening & Writing"
  difficultyLevel: "FOUNDATIONAL" | "INTERMEDIATE" | "ADVANCED" | "EXAM SIMULATION";
  timeBoxBreakdown: {
    warmup: string; // 10 mins
    presentation: string; // 15 mins
    practice: string; // 20 mins
    review: string; // 15 mins
  };
  teachingPoints: string[];
  tipsAndTricks: string[];
  commonProblemsAndFixes: { problem: string; fix: string }[];
  homework: {
    task: string;
    targetQuota: string;
    successCriteria: string;
  };
}

export interface WeeklyPlan {
  weekNumber: number;
  weekTitle: string;
  weekFocusSummary: string;
  yieldTier: string;
  days: DailyLesson[];
}

export const EIGHT_WEEK_PTE_PLAN: WeeklyPlan[] = [
  {
    weekNumber: 1,
    weekTitle: "Week 1: High-Yield Speaking Foundations & Acoustic Energy",
    weekFocusSummary: "Master oral fluency, rhythm, natural thought group chunking, and 3-second mic rules in Read Aloud and Repeat Sentence.",
    yieldTier: "ULTRA HIGH YIELD (~42% of overall PTE score)",
    days: [
      {
        dayNumber: 1,
        weekNumber: 1,
        dayOfWeek: 1,
        title: "Read Aloud (RA) - The 3-Pillar Scoring Model & Natural Chunking",
        moduleKey: "read-aloud",
        moduleName: "Read Aloud",
        section: "SPEAKING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~20% of total score across Speaking & Reading",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Tongue twister speed drill & acoustic energy check.",
          presentation: "15 mins: The PTE machine engine mechanics: Fluency (5), Pronunciation (5), Content (5). The 3-second silent mic rule.",
          practice: "20 mins: Thought group chunking practice using slash marks (/) at punctuation and prepositions.",
          review: "15 mins: Pair recording & peer audit using 3-pillar checklist."
        },
        teachingPoints: [
          "Explain that speech recognition evaluates smooth acoustic energy flow rather than artificial fast speed.",
          "Demonstrate natural thought groups: pause only at commas, full stops, and prepositional boundaries.",
          "Enforce the Golden Rule: NEVER self-correct or restart a word if you stumble; keep moving forward smoothly."
        ],
        tipsAndTricks: [
          "Microphone positioning: Place mic 2 fingers away from lower lip, slightly below airflow to prevent popping noises.",
          "3-Second Rule: If you stay silent for 3 seconds, the microphone shuts off permanently for that question!",
          "Do not try to mimic an American or British accent; clear native cadence with flat pitch variation scores highest."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Student stops to correct mispronounced words (e.g. 'bio... I mean biodiversity').",
            fix: "Teach 'Forward Velocity': Self-correction penalizes Fluency heavily (drops score to 1-2), whereas 1 mispronounced word only deducts 0.1 from Content."
          },
          {
            problem: "Monotone, word-by-word staccato reading ('The... study... shows... that...').",
            fix: "Group 3-5 words into single breath phrases. Stress nouns/verbs, glaze over prepositions."
          }
        ],
        homework: {
          task: "Record 10 Read Aloud exercises in the PTE Flow App.",
          targetQuota: "10 Prompts",
          successCriteria: "Achieve >85% Oral Fluency score with zero mid-phrase hesitations or self-corrections."
        }
      },
      {
        dayNumber: 2,
        weekNumber: 1,
        dayOfWeek: 2,
        title: "Read Aloud (RA) - Word Stress, Polysyllabic Academic Terms & Intonation",
        moduleKey: "read-aloud",
        moduleName: "Read Aloud",
        section: "SPEAKING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~20% of total score across Speaking & Reading",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Academic Word List (AWL) stress decoding warm-up.",
          presentation: "15 mins: Primary vs secondary syllable stress in 3+ syllable academic terms (e.g. in-fras-TRUC-ture).",
          practice: "20 mins: Live app recording drills targeting passages with complex medical/scientific vocabulary.",
          review: "15 mins: Teacher feedback on cadence, rising/falling intonation at full stops."
        },
        teachingPoints: [
          "Highlight content words (nouns, main verbs, adjectives) vs function words (articles, prepositions, auxiliary verbs).",
          "Show how falling intonation at the end of sentences signals sentence closure to the speech engine.",
          "Teach silent scanning during the 35-40 second preparation time: identify difficult words in advance and whisper them twice."
        ],
        tipsAndTricks: [
          "During 35s prep time: Read the full text out loud quietly to pre-program vocal muscle memory.",
          "If an unknown academic word appears (e.g. 'epidemiological'), say a smooth simplified approximation with full confidence rather than hesitating!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Stumbling over long academic words during live recording.",
            fix: "Pre-scan for multi-syllabic words during 35s prep. Break them into syllables: ep-i-de-mi-o-log-i-cal."
          },
          {
            problem: "High-pitched rising tone at the end of every sentence like a question.",
            fix: "Enforce falling pitch at full stops. Lower your voice pitch slightly on the final syllable."
          }
        ],
        homework: {
          task: "Complete 10 Read Aloud passages targeting AWL vocabulary in App.",
          targetQuota: "10 Passages",
          successCriteria: "Pronunciation score >80 with accurate syllable stress on complex terms."
        }
      },
      {
        dayNumber: 3,
        weekNumber: 1,
        dayOfWeek: 3,
        title: "Repeat Sentence (RS) - Auditory Memory & Continuous Cadence",
        moduleKey: "repeat-sentence",
        moduleName: "Repeat Sentence",
        section: "SPEAKING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~22% of total score across Speaking & Listening",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Short audio memory retention drill (5-7 word sentences).",
          presentation: "15 mins: RS Scoring breakdown: Content (3), Fluency (5), Pronunciation (5). Why Fluency beats 100% Content accuracy.",
          practice: "20 mins: Live audio playback & immediate response drills in App.",
          review: "15 mins: Error analysis: Identifying missing endings (-s, -ed) vs cadence drops."
        },
        teachingPoints: [
          "Explain that RS is the 2nd highest score contributor in the entire PTE exam (~22%).",
          "Teach the 'Fluency First' principle: Repeating 60-70% of words with 100% smooth rhythm scores higher than 100% words with hesitations!",
          "Demonstrate visual chunking: Close eyes during playback, visualize the meaning/action instead of memorizing individual letters."
        ],
        tipsAndTricks: [
          "Start speaking within 1 second of the recording status bar appearing; there is NO beep sound in Repeat Sentence!",
          "If you miss the middle or end of a long sentence, speak the part you remembered clearly and end smoothly."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Candidate says 'um... I forgot...' or trails off into silence when sentence is long.",
            fix: "Ban filler words! If memory fails, speak the first half smoothly and stop cleanly. Never speak non-content filler."
          },
          {
            problem: "Waiting for a beep sound and losing the initial 2 seconds of recording.",
            fix: "Watch the screen indicator: As soon as 'Current Status' changes to 'Recording', start immediately!"
          }
        ],
        homework: {
          task: "Complete 20 Repeat Sentence drills in the PTE Flow App.",
          targetQuota: "20 Audio Prompts",
          successCriteria: "Zero hesitation pauses; Fluency score consistently >= 85."
        }
      },
      {
        dayNumber: 4,
        weekNumber: 1,
        dayOfWeek: 4,
        title: "Repeat Sentence (RS) - Phrasal Units, Sequence Retention & Speed Control",
        moduleKey: "repeat-sentence",
        moduleName: "Repeat Sentence",
        section: "SPEAKING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~22% of total score across Speaking & Listening",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Fast-paced 10-sentence speed warm-up.",
          presentation: "15 mins: Meaning-based retention vs rote memory. Phrasal structure: Subject + Verb + Object.",
          practice: "20 mins: Partner shadowing & playback practice with 12-15 word complex academic sentences.",
          review: "15 mins: Class diagnostic review & weekly score progress check."
        },
        teachingPoints: [
          "Teach students to parse sentences into functional units: [Subject] [Action Verb] [Location/Object].",
          "Emphasize listening to the native speaker's speed and imitating their exact pace and intonation contour.",
          "Review common academic prefixes and suffixes that recur in lecture sentences."
        ],
        tipsAndTricks: [
          "Shadowing Technique: Copy the speaker's vocal pitch and emotion. If they sound authoritative, match their tone.",
          "Keep your eyes focused on a fixed point on the screen to avoid distraction during audio playback."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Swapping word order (e.g. 'The library has books' instead of 'The books are in the library').",
            fix: "Focus on key noun-verb relationships rather than isolated words. Meaning-driven recall preserves order."
          },
          {
            problem: "Dropping plural '-s' or past tense '-ed' on sentence-final words.",
            fix: "Train trailing ear listening: Pay extra attention to the final word of every audio prompt."
          }
        ],
        homework: {
          task: "Complete 25 Repeat Sentence exercises in App & review weak recordings.",
          targetQuota: "25 Prompts",
          successCriteria: "Achieve >=80% content accuracy with 100% unbroken oral fluency."
        }
      }
    ]
  },
  {
    weekNumber: 2,
    weekTitle: "Week 2: High-Yield Writing & Critical Dictation Mechanics",
    weekFocusSummary: "Master Write From Dictation (the #1 score contributor in PTE) and Summarize Written Text single-sentence constraints.",
    yieldTier: "ULTRA HIGH YIELD (~35% of overall PTE score)",
    days: [
      {
        dayNumber: 5,
        weekNumber: 2,
        dayOfWeek: 1,
        title: "Write From Dictation (WFD) - The #1 Single Question Type in PTE",
        moduleKey: "write-from-dictation",
        moduleName: "Write From Dictation",
        section: "LISTENING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~25% of total score across Listening & Writing!",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Live dictation spelling warm-up (frequently misspelled academic words).",
          presentation: "15 mins: The WFD Scoring System: 1 mark for every correct word spelled accurately. Partial credit rules.",
          practice: "20 mins: Initial letter shorthand writing technique on erasable booklet.",
          review: "15 mins: Live transcription verification & spelling audit."
        },
        teachingPoints: [
          "Explain that WFD provides up to 25-30 marks to both Listening AND Writing sections.",
          "Teach the Initial Letter Method: As audio plays, write only the first letter of each word (e.g., 'A s c r' -> 'A student conducts research').",
          "Enforce exact spelling requirements: A single typo yields 0 marks for that specific word!"
        ],
        tipsAndTricks: [
          "Always capitalize the very first letter of the sentence!",
          "Always end your response with a single period / full stop (.).",
          "PTE Machine Scorer Rule: You can add extra word variations if uncertain about singular/plural (e.g. 'student students') without penalty!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Student forgets initial capital letter or terminal full stop.",
            fix: "Build a habit loop: Before clicking Next, check 2 checkpoints: 1) Capital first letter? 2) Period at the end?"
          },
          {
            problem: "Slow typing speed causing loss of trailing words.",
            fix: "Use the pen and notepad to write initial letters during audio, then type into the screen box calmly."
          }
        ],
        homework: {
          task: "Complete 15 Write From Dictation exercises in the PTE Flow App.",
          targetQuota: "15 Dictations",
          successCriteria: "Achieve 100% correct spelling and punctuation across all 15 sentences."
        }
      },
      {
        dayNumber: 6,
        weekNumber: 2,
        dayOfWeek: 2,
        title: "Write From Dictation (WFD) - Grammar Rules: Student vs. Students & Suffixes",
        moduleKey: "write-from-dictation",
        moduleName: "Write From Dictation",
        section: "LISTENING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~25% of total score across Listening & Writing!",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Subject-verb agreement & plural suffix diagnostic test.",
          presentation: "15 mins: The 'Student vs. Students' Grammar Principle in academic sentences.",
          practice: "20 mins: Live audio dictation focusing on ambiguous trailing '-s' and '-ed' sounds.",
          review: "15 mins: Peer review & spelling rule check."
        },
        teachingPoints: [
          "Deep Dive into 'Student vs Students' Agreement:",
          "  • Rule 1: 'A student' (Singular + Article 'a') -> Verb must be singular: 'A student learns fast.'",
          "  • Rule 2: 'Students' (Plural + Zero Article) -> Verb must be plural: 'Students learn fast.'",
          "  • Rule 3: 'The student's' (Possessive) -> Noun follows: 'The student's results were published.'",
          "Demonstrate how grammatical context resolves unclear audio recordings."
        ],
        tipsAndTricks: [
          "Look for verb indicators: If the verb is 'is/was/has/does', the subject MUST be singular ('student'). If 'are/were/have/do', plural ('students').",
          "Common academic spelling traps: 'environment', 'government', 'accommodation', 'necessary', 'definitely'."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Confusing 'student's' (possessive) with 'students' (plural).",
            fix: "Analyze sentence structure: If a noun follows immediately ('results', 'book'), it is possessive. If a verb follows, it is plural."
          },
          {
            problem: "Missing hidden '-ed' past tense markers on soft verbs ('discussed', 'developed').",
            fix: "Check auxiliary verbs: If preceded by 'has/have/had' or 'was/were', the verb requires '-ed'."
          }
        ],
        homework: {
          task: "Complete 20 WFD drills in App focusing on plural endings & grammar checks.",
          targetQuota: "20 Dictations",
          successCriteria: "Zero singular/plural errors; 95%+ total word accuracy."
        }
      },
      {
        dayNumber: 7,
        weekNumber: 2,
        dayOfWeek: 3,
        title: "Summarize Written Text (SWT) - The Exact Single-Sentence Constraint",
        moduleKey: "summarize-written-text",
        moduleName: "Summarize Written Text",
        section: "WRITING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score across Reading & Writing",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Clause connection warm-up (and, but, although, which, because).",
          presentation: "15 mins: The Strict Form Rule: EXACTLY ONE sentence (5–75 words). 0 for Form = 0 for entire question!",
          practice: "20 mins: Guided passage breakdown & main thesis extraction.",
          review: "15 mins: Live sentence parsing & grammar verification."
        },
        teachingPoints: [
          "Emphasize the Golden Rule of SWT: You MUST submit EXACTLY ONE sentence ending with ONE period.",
          "If you write 2 sentences or forget the period, the Form score becomes 0, which zeroes out Content and Grammar!",
          "Target Word Count Range: 25 to 45 words is the sweet spot for maximum grammatical accuracy and complete content coverage."
        ],
        tipsAndTricks: [
          "Formula for Perfect SWT: [Main Point 1 from Para 1] + ', which ' or ', and ' + [Main Point 2 from Para 2] + '.'",
          "Never copy examples, statistics, percentages, or quotes; extract only core topic ideas."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Comma Splice Error (joining two independent clauses with a comma without a conjunction).",
            fix: "Always pair commas with fanboys conjunctions (for, and, nor, but, or, yet, so) or relative pronouns (which, who, where)."
          },
          {
            problem: "Writing a second sentence accidentally (e.g. 'In conclusion, this is important.').",
            fix: "Check period count before submitting: Press Ctrl+F and search for '.'. Ensure exactly ONE period exists at the end."
          }
        ],
        homework: {
          task: "Write 3 Summarize Written Text summaries for passages in the App.",
          targetQuota: "3 Passages",
          successCriteria: "100% Form compliance (1 sentence, 25-45 words, 0 comma splices)."
        }
      },
      {
        dayNumber: 8,
        weekNumber: 2,
        dayOfWeek: 4,
        title: "Summarize Written Text (SWT) - Complex Synthesis & Punctuation Audit",
        moduleKey: "summarize-written-text",
        moduleName: "Summarize Written Text",
        section: "WRITING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score across Reading & Writing",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Complex sentence building drill (Although..., ...).",
          presentation: "15 mins: Punctuation rules for semicolon (;), dash (-), and subordinating conjunctions in SWT.",
          practice: "20 mins: Individual drafting on complex multi-paragraph academic articles.",
          review: "15 mins: Class critique & examiner score breakdown."
        },
        teachingPoints: [
          "Teach the Semicolon Hack: A semicolon (;) can join two related independent clauses without needing a conjunction!",
          "Show how to eliminate redundant modifier phrases to keep word count under 50 words.",
          "Demonstrate proofreading for capital letters: Capitalize ONLY the first word and proper nouns."
        ],
        tipsAndTricks: [
          "Semicolon Formula: [Independent Clause 1]; furthermore, [Independent Clause 2].",
          "Word Count Indicator: Keep an eye on the live word counter on screen. Stop typing as soon as you reach 35-40 words."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Exceeding 75 words or falling under 5 words.",
            fix: "Set a hard target of 30-40 words. Edit out unnecessary adjectives and background fluff."
          },
          {
            problem: "Capitalizing random words mid-sentence.",
            fix: "Review capitalization rules: Only capitalize the very first word of the sentence and official proper nouns (e.g. 'Australia', 'Harvard')."
          }
        ],
        homework: {
          task: "Complete 3 SWT exercises in App & verify against grammar checker.",
          targetQuota: "3 Passages",
          successCriteria: "Achieve 7/7 full marks on Grammar, Form, Content, and Vocabulary."
        }
      }
    ]
  },
  {
    weekNumber: 3,
    weekTitle: "Week 3: High-Yield Reading & Cloze Masterclass",
    weekFocusSummary: "Master Reading & Writing Fill in the Blanks (Dropdown) and Reading Fill in the Blanks (Drag & Drop) through collocations and grammar.",
    yieldTier: "HIGH YIELD (~33% of overall PTE score)",
    days: [
      {
        dayNumber: 9,
        weekNumber: 3,
        dayOfWeek: 1,
        title: "Reading & Writing FIB (Dropdown) - Academic Collocations & Word Pairs",
        moduleKey: "fill-in-blanks-rw",
        moduleName: "Reading & Writing: Fill in the Blanks",
        section: "READING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~18% of total score across Reading & Writing",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Academic collocation matching game (Verb + Noun).",
          presentation: "15 mins: The power of collocations in PTE Reading. Why standard dictionary definitions fail without word pairing context.",
          practice: "20 mins: Live dropdown FIB passage solving in App with collocation breakdown.",
          review: "15 mins: Class discussion & collocation notebook entry."
        },
        teachingPoints: [
          "Explain that R&W FIB is the single highest-scoring task in the Reading section (~18% of total test).",
          "Teach Academic Collocations: Native academic English uses fixed pairings (e.g. 'play a ROLE', 'conduct an EXPERIMENT', 'raise AWARENESS').",
          "Demonstrate pre-position reading: Look at prepositions immediately following the blank (e.g., '____ in', '____ to', '____ with')."
        ],
        tipsAndTricks: [
          "If options are: 'do', 'make', 'conduct', 'perform' before 'research' -> 'conduct research' is the official academic collocation!",
          "Preposition Triggers: 'attribute TO', 'associated WITH', 'consist OF', 'participate IN'."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Choosing a word based on direct translation rather than English collocation.",
            fix: "Train students to memorize word pairs as single units (e.g. 'pivotal role', 'vital importance', 'striking contrast')."
          },
          {
            problem: "Spending over 2.5 minutes on a single FIB passage.",
            fix: "Enforce time budgeting: Allocate maximum 1.5 to 2 minutes per passage (roughly 30 seconds per blank)."
          }
        ],
        homework: {
          task: "Complete 10 R&W FIB (Dropdown) passages in the App.",
          targetQuota: "10 Passages",
          successCriteria: "Achieve >=80% accuracy (e.g. 4/5 correct per passage)."
        }
      },
      {
        dayNumber: 10,
        weekNumber: 3,
        dayOfWeek: 2,
        title: "Reading & Writing FIB (Dropdown) - Part of Speech & Grammar Elimination",
        moduleKey: "fill-in-blanks-rw",
        moduleName: "Reading & Writing: Fill in the Blanks",
        section: "READING",
        scoringWeight: "ULTRA HIGH YIELD",
        scoreImpactText: "Contributes ~18% of total score across Reading & Writing",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Part of speech identification speed drill (Noun, Verb, Adj, Adv).",
          presentation: "15 mins: Structural grammar elimination: Subject-Verb-Object positions and article clues.",
          practice: "20 mins: Solving difficult dropdown passages by eliminating grammatically impossible options.",
          review: "15 mins: Error analysis & strategy validation."
        },
        teachingPoints: [
          "Teach Grammar Elimination Rules:",
          "  • Rule A: After 'a/an/the' and before a noun -> Blank MUST be an Adjective or Noun Adjunct.",
          "  • Rule B: After 'to' -> Blank MUST be a Base Verb (Infinitive), unless prepositional.",
          "  • Rule C: After 'have/has/had' -> Blank MUST be a Past Participle (V3).",
          "Show how grammar reduces 4 choices down to 1 or 2 options before even considering meaning."
        ],
        tipsAndTricks: [
          "Vowel sound rule: 'an ____ outcome' requires an adjective starting with a vowel sound (e.g. 'unexpected', 'adverse').",
          "Parallel Structure Rule: In a list ('A, B, and C'), all items must share the same part of speech!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Selecting a verb form that breaks tense consistency with surrounding sentences.",
            fix: "Check the main tense of the paragraph: Is it historical past or general present research?"
          },
          {
            problem: "Confusing active vs passive voice forms (e.g. 'is conduct' vs 'is conducted').",
            fix: "Auxiliary 'is/are/was/were' + V3 indicates passive voice."
          }
        ],
        homework: {
          task: "Complete 10 R&W FIB exercises applying Part-of-Speech elimination.",
          targetQuota: "10 Passages",
          successCriteria: "Identify part of speech for every blank before choosing option."
        }
      },
      {
        dayNumber: 11,
        weekNumber: 3,
        dayOfWeek: 3,
        title: "Reading FIB (Drag & Drop) - Pool Elimination & Preposition Triggers",
        moduleKey: "fill-in-blanks-r",
        moduleName: "Reading: Fill in the Blanks",
        section: "READING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~15% of total score to Reading section",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Drag-and-drop pool elimination warm-up.",
          presentation: "15 mins: Key differences between Dropdown FIB and Drag & Drop FIB. Managing the bottom word pool (3 extra distractors).",
          practice: "20 mins: Live Drag & Drop exercises in App.",
          review: "15 mins: Strategy audit: Easiest blanks first vs sequential solving."
        },
        teachingPoints: [
          "Explain Drag & Drop mechanics: You have 4-5 blanks and a pool of 6-8 words at the bottom (3 extra distractors).",
          "Teach Non-Sequential Solving: Do NOT solve blank 1 first if hard! Solve the easiest, most obvious blanks first to reduce the pool size.",
          "Focus on tone matching: Is the passage positive, neutral, or critical?"
        ],
        tipsAndTricks: [
          "Pool Shrink Strategy: Drag obvious answers into place first. Every correct drag narrows down options for remaining blanks!",
          "If a word doesn't fit grammatically in any blank, it is one of the 3 distractor words."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Candidate gets stuck on Blank 1 for 2 minutes and panics.",
            fix: "Skip Blank 1 immediately! Solve Blank 3 or 4 first, then return to Blank 1 when pool is smaller."
          },
          {
            problem: "Leaving blanks empty because time ran out.",
            fix: "Never leave any blank empty! There is NO negative marking in Reading FIB. Drag any remaining word into empty slots before timer expires."
          }
        ],
        homework: {
          task: "Complete 10 Reading FIB (Drag & Drop) exercises in App.",
          targetQuota: "10 Passages",
          successCriteria: "Complete each passage in under 1 minute 45 seconds with >=75% accuracy."
        }
      },
      {
        dayNumber: 12,
        weekNumber: 3,
        dayOfWeek: 4,
        title: "Reading Cloze Speed Drills & Section Time-Management",
        moduleKey: "fill-in-blanks-r",
        moduleName: "Reading Cloze Speed Drills",
        section: "READING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~33% of total score across Reading section",
        difficultyLevel: "ADVANCED",
        timeBoxBreakdown: {
          warmup: "10 mins: Rapid 30-second vocabulary recognition warm-up.",
          presentation: "15 mins: Overall Reading Section Time Strategy (29-30 minutes total for 13-18 questions).",
          practice: "20 mins: Timed 5-passage Cloze marathon in App under exam clock.",
          review: "15 mins: Diagnostic review of wrong answers & time log."
        },
        teachingPoints: [
          "Master the Reading Timer Budget:",
          "  • R&W FIB (Dropdown): 1.5 - 2 mins per passage max.",
          "  • R FIB (Drag & Drop): 1.5 mins per passage max.",
          "  • Re-order Paragraphs: 2 mins max.",
          "  • Multiple Choice Single/Multiple: 30-45 seconds max!",
          "Teach decision-making under time pressure: When 90 seconds pass, pick best guess and MOVE ON."
        ],
        tipsAndTricks: [
          "The '30-Second Rule': If you cannot decide between 2 words after 30 seconds, choose the one that forms a more common academic collocation.",
          "Keep track of the overall Reading timer in the top right corner throughout the section."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Spending 4 minutes on 1 difficult reading passage and running out of time for the last 2 FIBs.",
            fix: "Set a strict mental stopwatch: Never spend more than 2 minutes on any single reading item."
          },
          {
            problem: "Second-guessing correct initial instincts and changing answers right before clicking Next.",
            fix: "Research shows initial grammatical intuition is correct 80%+ of the time. Only change if you discover an explicit grammatical rule violation."
          }
        ],
        homework: {
          task: "Run a full 15-minute Reading Section Speed Drill in App.",
          targetQuota: "7 Cloze Passages",
          successCriteria: "Finish all 7 passages within 15 minutes with >=80% total score."
        }
      }
    ]
  },
  {
    weekNumber: 4,
    weekTitle: "Week 4: High-Yield Listening & Spoken Integration",
    weekFocusSummary: "Master Summarize Spoken Text, Retell Lecture, and keyphrase extraction from fast academic audio clips.",
    yieldTier: "HIGH YIELD (~25% of overall PTE score)",
    days: [
      {
        dayNumber: 13,
        weekNumber: 4,
        dayOfWeek: 1,
        title: "Summarize Spoken Text (SST) - Note-Taking Shorthand & 50-70 Word Limit",
        moduleKey: "summarize-spoken-text",
        moduleName: "Summarize Spoken Text",
        section: "LISTENING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10-12% of total score across Listening & Writing",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Audio shorthand symbols & speed note-taking warm-up.",
          presentation: "15 mins: SST Form Rule: 50 to 70 words. Scoring breakdown: Content (2), Form (2), Grammar (2), Vocab (2), Spelling (2).",
          practice: "20 mins: Listening to 60-90s academic lectures & writing noun-phrase shorthand.",
          review: "15 mins: Word count audit & grammar review."
        },
        teachingPoints: [
          "Explain the Strict Form Rule: Summary MUST be between 50 and 70 words! 49 words or 71 words loses Form points instantly.",
          "Teach Noun Phrase Shorthand: Capture 3-4 distinct meaningful noun phrases during audio (e.g. 'climate change impact', 'renewable energy adoption', 'economic sustainability').",
          "Demonstrate connecting extracted phrases with formal academic transitions."
        ],
        tipsAndTricks: [
          "Ideal Word Count Target: Aim for 55 to 65 words to give yourself a safe buffer away from boundaries!",
          "Use a reliable grammatical template: 'The lecture provided comprehensive insights into [Topic]. Firstly, the speaker emphasized [Keyphrase 1]. Furthermore, the presentation highlighted [Keyphrase 2]. In conclusion, [Keyphrase 3] plays a crucial role.'"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Writing 45 words or 75 words due to poor word count management.",
            fix: "Check live word counter on screen. If under 50 words, add a supporting descriptive clause. If over 70, delete fluff adjectives."
          },
          {
            problem: "Spelling audio words wrong (e.g., 'substainable' instead of 'sustainable').",
            fix: "Only use academic words in your summary that you know 100% how to spell correctly."
          }
        ],
        homework: {
          task: "Complete 2 Summarize Spoken Text exercises in the App.",
          targetQuota: "2 Audio Lectures",
          successCriteria: "Word count strictly between 52 and 68 words; 0 spelling errors."
        }
      },
      {
        dayNumber: 14,
        weekNumber: 4,
        dayOfWeek: 2,
        title: "Summarize Spoken Text (SST) - Academic Grammar & Error-Free Proofreading",
        moduleKey: "summarize-spoken-text",
        moduleName: "Summarize Spoken Text",
        section: "LISTENING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10-12% of total score across Listening & Writing",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Diagnostic proofreading of flawed SST drafts (finding spelling/grammar bugs).",
          presentation: "15 mins: The 2-Minute Proofreading Routine: Grammar, Tense, Punctuation, and Word Count check.",
          practice: "20 mins: Drafting and auditing 2 full SST tasks under 10-minute timer per item.",
          review: "15 mins: Teacher scoring & feedback."
        },
        teachingPoints: [
          "Teach the 10-Minute Time Box per SST item:",
          "  • 0:00 - 1:30: Listen to audio & take noun phrase notes on booklet.",
          "  • 1:30 - 7:30: Type summary into text box (6 minutes).",
          "  • 7:30 - 10:00: Dedicated Proofreading Audit (2.5 minutes).",
          "Highlight Subject-Verb Agreement: 'The speaker explains...' vs 'Researchers explain...'"
        ],
        tipsAndTricks: [
          "Spelling Checklist: Double-check double consonants ('accommodation', 'occurrence', 'successful').",
          "Never write in bullet points or multiple paragraphs; write ONE structured single paragraph!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Running out of time mid-sentence when the 10-minute timer expires.",
            fix: "Finish drafting by minute 7:30 so you never get cut off mid-thought."
          },
          {
            problem: "Using informal spoken abbreviations ('e.g.', 'etc.', 'info', 'stats').",
            fix: "Spell out full formal words: 'for example', 'and so on', 'information', 'statistics'."
          }
        ],
        homework: {
          task: "Complete 3 SST exercises in App under strict 10-minute timers.",
          targetQuota: "3 Lectures",
          successCriteria: "Achieve 10/10 full score on automated scoring evaluation."
        }
      },
      {
        dayNumber: 15,
        weekNumber: 4,
        dayOfWeek: 3,
        title: "Retell Lecture (RL) - Keyphrase Extraction & Continuous Oral Flow",
        moduleKey: "retell-lecture",
        moduleName: "Retell Lecture",
        section: "SPEAKING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score across Speaking & Listening",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Fast note-taking & immediate oral delivery warm-up.",
          presentation: "15 mins: Retell Lecture vs Describe Image structure. Note-taking during audio vs 10-second prep time.",
          practice: "20 mins: Live lecture listening and 40-second oral retelling drills in App.",
          review: "15 mins: Oral fluency audit & peer feedback."
        },
        teachingPoints: [
          "Explain that Retell Lecture tests both Listening comprehension and Speaking oral fluency.",
          "Teach the 10-Second Prep Strategy: As soon as audio finishes, you have 10 seconds to organize your notes before the beep!",
          "Enforce Continuous Delivery: Speak smoothly for 32-36 seconds without long pauses or stumbles."
        ],
        tipsAndTricks: [
          "Template Framework: 'The speaker provided an informative lecture on [Topic]. Firstly, he discussed [Keyphrase 1]. Secondly, he highlighted [Keyphrase 2]. Furthermore, the lecture noted [Keyphrase 3]. In conclusion, [Summary Statement].'",
          "If an image or slide accompanies the audio, combine image labels with audio keyphrases!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Candidate tries to write full sentences during audio and misses subsequent points.",
            fix: "Write ONLY 3-4 word phrases (keywords/nouns) during audio; do not attempt full verbatim sentences."
          },
          {
            problem: "Long 4-second hesitation after the beep while reading notes.",
            fix: "Start speaking your introductory template sentence immediately upon hearing the beep sound!"
          }
        ],
        homework: {
          task: "Practice 5 Retell Lecture tasks in the PTE Flow App.",
          targetQuota: "5 Audio Lectures",
          successCriteria: "Speak continuously for 32-38 seconds with Fluency >= 85."
        }
      },
      {
        dayNumber: 16,
        weekNumber: 4,
        dayOfWeek: 4,
        title: "Retell Lecture (RL) - Fast Accents, Noise Resistance & Complex Synthesis",
        moduleKey: "retell-lecture",
        moduleName: "Retell Lecture",
        section: "SPEAKING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score across Speaking & Listening",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Accent identification warm-up (UK, US, AU, Indian academic speakers).",
          presentation: "15 mins: Filtering out audio background noise and speaker hesitation ('um', 'you know') in real lectures.",
          practice: "20 mins: Retelling complex lectures with fast-paced delivery and dense technical content.",
          review: "15 mins: Weekly progress review & score report check."
        },
        teachingPoints: [
          "Expose students to diverse English accents used in PTE Academic recordings.",
          "Show how to identify signpost words in lectures ('The main reason is...', 'In contrast...', 'Crucially...', 'To summarize...').",
          "Demonstrate maintaining flat, confident pitch and natural rhythm regardless of topic difficulty."
        ],
        tipsAndTricks: [
          "Signpost Listening: When you hear 'However', 'Therefore', or 'The key finding is', write down the phrase immediately following it!",
          "If you miss a section of the lecture, speak your captured phrases smoothly and extend your concluding sentence."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Panicking when lecture topic is unfamiliar (e.g. quantum physics or medieval art).",
            fix: "Focus on capturing nouns and verbs phonetically. The speech engine evaluates your delivery rhythm, not your subject expertise!"
          },
          {
            problem: "Speaking too fast and running out of things to say at 20 seconds.",
            fix: "Pace your delivery: Spend ~6-7 seconds on each of your 4 captured keyphrase points."
          }
        ],
        homework: {
          task: "Complete 5 RL exercises in App with challenging academic lectures.",
          targetQuota: "5 Lectures",
          successCriteria: "Maintain 35-second speech duration with zero fluency drops."
        }
      }
    ]
  },
  {
    weekNumber: 5,
    weekTitle: "Week 5: Intermediate Speaking & Written Expressive Skills",
    weekFocusSummary: "Master Describe Image oral structures and Write Essay 4-paragraph architecture, featuring the 'Student vs Students' grammar rule.",
    yieldTier: "HIGH YIELD (~22% of overall PTE score)",
    days: [
      {
        dayNumber: 17,
        weekNumber: 5,
        dayOfWeek: 1,
        title: "Describe Image (DI) - Bar Charts, Line Graphs & Pie Charts Mechanics",
        moduleKey: "describe-image",
        moduleName: "Describe Image",
        section: "SPEAKING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score to Speaking section",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Chart vocabulary warm-up (increased, reached a peak, plummeted, accounted for).",
          presentation: "15 mins: The 4-Step Universal Describe Image Structure: Title -> Highest Value -> Lowest Value -> Conclusion.",
          practice: "20 mins: 25-second preparation and 40-second oral recording on live charts in App.",
          review: "15 mins: Timing check & oral fluency evaluation."
        },
        teachingPoints: [
          "Teach the 25-Second Prep Strategy: Identify the image title, horizontal/vertical axis units, highest bar, and lowest bar.",
          "Emphasize Oral Fluency: You do NOT need to describe every single number! Mentioning 2 key data points smoothly yields maximum marks.",
          "Target Speech Length: 32 to 36 seconds."
        ],
        tipsAndTricks: [
          "Universal DI Template: 'This graph illustrates information about [Title]. On the one hand, the highest value is observed in [Category A] at [Number]. On the other hand, the lowest figure is seen in [Category B] at [Number]. In conclusion, [General Trend].'",
          "If units are in millions or percentages, state them clearly ('35 percent', '50 million dollars')."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Trying to read every single bar/data point and getting cut off at 40 seconds.",
            fix: "Select ONLY the highest point and lowest point. Quality of speech beats quantity of numbers."
          },
          {
            problem: "Long pauses while reading small axis numbers.",
            fix: "Round numbers off smoothly: 'approximately 50' or 'nearly 100' instead of stumbling over '49.87'."
          }
        ],
        homework: {
          task: "Record 8 Describe Image tasks (charts & graphs) in the App.",
          targetQuota: "8 Images",
          successCriteria: "Fluency >= 85; speech duration between 32 and 36 seconds."
        }
      },
      {
        dayNumber: 18,
        weekNumber: 5,
        dayOfWeek: 2,
        title: "Describe Image (DI) - Maps, Flowcharts, Processes & Picture Visuals",
        moduleKey: "describe-image",
        moduleName: "Describe Image",
        section: "SPEAKING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score to Speaking section",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Directional & sequential vocabulary drill (North, South, initially, subsequently).",
          presentation: "15 mins: Adapting structure for non-numerical visuals: Process flowcharts, historical maps, and life cycles.",
          practice: "20 mins: Live recording drills on complex process diagrams and map comparisons in App.",
          review: "15 mins: Class feedback & strategy polish."
        },
        teachingPoints: [
          "Process Chart Formula: Mention the starting stage, total number of steps, intermediate key transformation, and final output.",
          "Map Comparison Formula: Identify expansion, removal, or new construction between Map 1 (Past) and Map 2 (Present).",
          "Reiterate: Never pause or hesitate; describe visual elements left-to-right or step-by-step."
        ],
        tipsAndTricks: [
          "Process Template: 'This flowchart depicts the step-by-step process of [Topic]. Initially, the process begins with [Step 1]. Subsequently, it moves to [Step 2] and [Step 3]. Finally, the process concludes with [Final Step].'",
          "Map Template: 'This map compares the development of [Location] between [Year 1] and [Year 2]. Key changes include [Feature A] in the North and [Feature B] in the South.'"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Freezing when seeing a complex scientific diagram (e.g. water cycle or photosynthesis).",
            fix: "Read the printed text labels directly off the screen in sequence. The labels ARE your script!"
          },
          {
            problem: "Hesitating over technical term pronunciation.",
            fix: "Say labels with confident forward rhythm even if pronunciation is approximate."
          }
        ],
        homework: {
          task: "Complete 8 Describe Image tasks (maps & processes) in App.",
          targetQuota: "8 Visual Prompts",
          successCriteria: "Complete all 8 visuals with zero 2-second silent gaps."
        }
      },
      {
        dayNumber: 19,
        weekNumber: 5,
        dayOfWeek: 3,
        title: "Write Essay (WE) - 4-Paragraph Architecture & Word Count Bounds",
        moduleKey: "write-essay",
        moduleName: "Write Essay",
        section: "WRITING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10-12% of total score to Writing section",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Brainstorming arguments for common PTE essay prompts.",
          presentation: "15 mins: Strict Form Rules: 200 to 300 words. The 4-Paragraph Academic Blueprint.",
          practice: "20 mins: Drafting Introduction & Body Paragraph 1 on live essay prompt in App.",
          review: "15 mins: Word count check & structural critique."
        },
        teachingPoints: [
          "Explain the Essay Word Count Rule: Must be between 200 and 300 words. Under 120 or over 380 words receives 0 for Form!",
          "Target Word Count Range: 240 to 270 words is ideal.",
          "Teach the 4-Paragraph Structure:",
          "  • Para 1: Introduction + Thesis Statement (~45 words)",
          "  • Para 2: Primary Argument + Explanation + Example (~70 words)",
          "  • Para 3: Secondary Argument + Counterpoint + Example (~70 words)",
          "  • Para 4: Conclusion + Final Takeaway (~45 words)"
        ],
        tipsAndTricks: [
          "Time Management (20 mins total): 2 mins planning -> 15 mins typing -> 3 mins proofreading.",
          "Use strong transition words: 'Furthermore', 'On the other hand', 'Consequently', 'In conclusion'."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Candidate writes 180 words or 320 words due to poor pacing.",
            fix: "Monitor the on-screen word counter at every paragraph break: Para 1 (~45w), Para 2 (~115w), Para 3 (~185w), Para 4 (~245w)."
          },
          {
            problem: "Writing 1 giant single block paragraph.",
            fix: "Always separate your essay into 4 distinct paragraphs using double Enter line breaks."
          }
        ],
        homework: {
          task: "Write 1 complete Write Essay task in the PTE Flow App.",
          targetQuota: "1 Full Essay",
          successCriteria: "Word count between 240 and 270 words; 4 balanced paragraphs."
        }
      },
      {
        dayNumber: 20,
        weekNumber: 5,
        dayOfWeek: 4,
        title: "Write Essay (WE) - Grammar, 'Student vs. Students' Agreement & Academic Register",
        moduleKey: "write-essay",
        moduleName: "Write Essay",
        section: "WRITING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10-12% of total score to Writing section",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Academic register vs informal slang correction drill.",
          presentation: "15 mins: Subject-Verb Agreement Deep Dive: 'Student vs. Students' in academic essay writing.",
          practice: "20 mins: Full 20-minute timed essay writing exercise in App with real-time feedback.",
          review: "15 mins: Grammar audit & error breakdown."
        },
        teachingPoints: [
          "Master the 'Student or Students' Essay Writing Rule:",
          "  • INCORRECT: 'A student have many responsibilities and they learns from teacher.' (Grammar Fail!)",
          "  • CORRECT (Singular): 'A student HAS many responsibilities and HE/SHE LEARNS from the teacher.'",
          "  • CORRECT (Plural - Recommended!): 'Students HAVE many responsibilities and THEY LEARN from teachers.'",
          "Explain why Plural ('Students learn...') is preferred in essay writing: It avoids awkward gender pronouns ('he/she')!",
          "Ban informal conversational slang: Replace 'kids' with 'children', 'lots of' with 'numerous', 'super good' with 'highly advantageous'."
        ],
        tipsAndTricks: [
          "Grammar Hack: Use plural subjects throughout your essay ('schools', 'governments', 'students', 'researchers') to automatically ensure plural verb agreements!",
          "3-Minute Proofreading Checklist: 1) Spell check, 2) 'Student vs Students' verb agreement check, 3) Word count check."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Subject-verb mismatch (e.g. 'Government need to...' or 'A student learn...').",
            fix: "Audit every sentence subject: Singular subject + 's' on verb ('student learns'); Plural subject + base verb ('students learn')."
          },
          {
            problem: "Using informal contractions ('don't', 'can't', 'it's').",
            fix: "Always write full uncontracted forms in academic essays: 'do not', 'cannot', 'it is'."
          }
        ],
        homework: {
          task: "Complete 1 full Write Essay prompt in App & perform 'Student vs Students' grammar audit.",
          targetQuota: "1 Full Essay",
          successCriteria: "Achieve >=80% automated score with zero informal register or agreement errors."
        }
      }
    ]
  },
  {
    weekNumber: 6,
    weekTitle: "Week 6: Re-ordering, Listening Accuracy & Negative Marking Avoidance",
    weekFocusSummary: "Master Re-order Paragraphs, Highlight Incorrect Words, and Listening Fill in the Blanks while managing negative marking traps.",
    yieldTier: "HIGH YIELD (~22% of overall PTE score)",
    days: [
      {
        dayNumber: 21,
        weekNumber: 6,
        dayOfWeek: 1,
        title: "Re-order Paragraphs (RO) - Cohesion Markers & Noun-Pronoun Sequences",
        moduleKey: "reorder-paragraphs",
        moduleName: "Re-order Paragraphs",
        section: "READING",
        scoringWeight: "MEDIUM YIELD",
        scoreImpactText: "Contributes ~5-6% of total score to Reading section",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Noun to pronoun matching warm-up exercise.",
          presentation: "15 mins: RO Pair Scoring Rules: Points are awarded for correct ADJACENT PAIRS (A-B, B-C, C-D).",
          practice: "20 mins: Identifying independent topic sentences and cohesive connectors in live App drills.",
          review: "15 mins: Strategy verification & pair alignment."
        },
        teachingPoints: [
          "Explain RO Scoring: Points are given for adjacent pairs! If correct order is A-B-C-D, pair A-B gives 1 pt, B-C gives 1 pt, C-D gives 1 pt.",
          "Teach Topic Sentence Identification: The 1st sentence is independent—it has NO starting pronouns ('he', 'they', 'these'), NO transition words ('however', 'therefore', 'furthermore').",
          "Demonstrate Noun-Pronoun Chain: Sentence 1 introduces 'Dr. Smith' -> Sentence 2 refers to 'He' -> Sentence 3 refers to 'This researcher'."
        ],
        tipsAndTricks: [
          "Chronological Clues: Dates and time sequences move forward ('In 1990...' -> 'A decade later...' -> 'Today...').",
          "Definite Article Rule: 'A new technology' (Indefinite 'a' introduced first) -> 'The technology' (Definite 'the' follows)."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Selecting a sentence starting with 'However' or 'These results' as the 1st sentence.",
            fix: "Check first word rule: Sentence 1 must be standalone and self-contained."
          },
          {
            problem: "Spending over 3 minutes re-arranging blocks.",
            fix: "Set a 2-minute hard time limit per RO question. Focus on finding 2 solid adjacent pairs."
          }
        ],
        homework: {
          task: "Complete 8 Re-order Paragraph exercises in the PTE Flow App.",
          targetQuota: "8 Re-order Prompts",
          successCriteria: "Achieve >=75% correct adjacent pair matching."
        }
      },
      {
        dayNumber: 22,
        weekNumber: 6,
        dayOfWeek: 2,
        title: "Highlight Incorrect Words (HIW) - Trailing Finger Technique & Negative Marking",
        moduleKey: "highlight-incorrect-words",
        moduleName: "Highlight Incorrect Words",
        section: "LISTENING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~10% of total score across Listening & Reading",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Auditory word substitution speed drill.",
          presentation: "15 mins: The Negative Marking Rule: +1 for correct click, -1 for wrong click! Total score cannot fall below 0.",
          practice: "20 mins: Trailing cursor reading technique on fast audio clips in App.",
          review: "15 mins: Error analysis: Over-clicking vs conservative selection."
        },
        teachingPoints: [
          "Explain Negative Marking: HIW is one of the few question types with negative marking! Random guessing DESTROYS your score.",
          "Teach the 'Trailing Cursor Method': Place your mouse cursor directly under each printed word as the audio plays, moving at exact voice speed.",
          "Golden Rule: ONLY click a word if you are 100% CERTAIN the spoken word differed from the printed text!"
        ],
        tipsAndTricks: [
          "Do NOT read ahead or fall behind the speaker's voice; sync your eyes directly with audio playback.",
          "Common HIW word swaps: 'increase' vs 'decrease', 'financial' vs 'fiscal', 'important' vs 'essential', singular vs plural."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Clicking uncertain words and losing hard-earned points due to -1 penalties.",
            fix: "Adopt the Conservative Rule: When in doubt, DO NOT CLICK! A skipped word gives 0, whereas an incorrect click loses 1 point."
          },
          {
            problem: "Cursor falling behind fast speakers.",
            fix: "Increase reading speed practice. If lost, skip to the next paragraph immediately when the speaker reaches it."
          }
        ],
        homework: {
          task: "Complete 10 Highlight Incorrect Words exercises in App.",
          targetQuota: "10 Audio Transcripts",
          successCriteria: "Zero false-positive negative penalties; 90%+ net accuracy."
        }
      },
      {
        dayNumber: 23,
        weekNumber: 6,
        dayOfWeek: 3,
        title: "Listening FIB - Real-Time Typing Shorthand & Suffix Audits",
        moduleKey: "fill-in-blanks-l",
        moduleName: "Listening: Fill in the Blanks",
        section: "LISTENING",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Contributes ~8% of total score across Listening & Writing",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Fast typing spelling warm-up for academic listening terms.",
          presentation: "15 mins: Real-time typing into text fields vs notepad shorthand. Suffix verification (-s, -ed, -ing, -tion).",
          practice: "20 mins: Live audio playback with 4-6 blanks per passage in App.",
          review: "15 mins: Post-listening spelling & grammar review."
        },
        teachingPoints: [
          "Explain L FIB mechanics: You hear an audio clip while reading a text transcript with missing blank boxes.",
          "Teach Real-Time Input: Type directly into the blank box on screen as the speaker says the word, or write shorthand on your pad.",
          "Enforce Post-Audio Review (30 seconds): Verify spelling, capital letters, and plural '-s' endings before moving on."
        ],
        tipsAndTricks: [
          "Use Tab Key: Press 'Tab' on your keyboard to instantly jump to the next blank box without reaching for the mouse!",
          "Contextual Grammar Check: If the sentence reads 'a series of ____', the blank MUST be a plural noun or descriptive noun."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Student hears word correctly but misspells it (e.g. 'enviroment' instead of 'environment').",
            fix: "Compile a personal 'L FIB Misspelled Words Log' and review daily."
          },
          {
            problem: "Getting stuck on Blank 1 and missing Blanks 2 and 3 while typing.",
            fix: "Type initial 3-4 letters fast and hit Tab! Do not stop to polish spelling while audio is still playing."
          }
        ],
        homework: {
          task: "Complete 10 Listening FIB exercises in the App.",
          targetQuota: "10 Audio Passages",
          successCriteria: "Achieve >=85% correct spelling across all blanks."
        }
      },
      {
        dayNumber: 24,
        weekNumber: 6,
        dayOfWeek: 4,
        title: "Integrated Listening & Reading Accuracy Drill",
        moduleKey: "fill-in-blanks-l",
        moduleName: "Integrated Accuracy Drill",
        section: "INTEGRATED",
        scoringWeight: "HIGH YIELD",
        scoreImpactText: "Combines RO, HIW, L FIB for comprehensive score boost",
        difficultyLevel: "ADVANCED",
        timeBoxBreakdown: {
          warmup: "10 mins: Rapid-fire multi-item warm-up.",
          presentation: "15 mins: Cross-credited score linkage: How Listening accuracy protects Writing and Reading scores.",
          practice: "20 mins: Timed multi-task integration test (3 RO + 3 HIW + 3 L FIB).",
          review: "15 mins: Score analytics breakdown & diagnostic review."
        },
        teachingPoints: [
          "Demonstrate how HIW and L FIB feed cross-credited marks directly into Reading and Writing score bars.",
          "Reinforce time budgeting across integrated task types.",
          "Review student error logs and eliminate recurring spelling and punctuation oversights."
        ],
        tipsAndTricks: [
          "Keyboard Shortcut Mastery: Use Tab for navigation, spacebar for audio replay when allowed, Ctrl+A for quick edit.",
          "Maintain calm composure when audio speed accelerates."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Fatigue causing loss of concentration during final audio tasks.",
            fix: "Train active listening focus in 20-minute uninterrupted study sprints."
          },
          {
            problem: "Inconsistent performance between easy and fast audio clips.",
            fix: "Practice audio clips at 1.1x speed in training to make real exam speed feel relaxed."
          }
        ],
        homework: {
          task: "Complete 1 full Integrated Accuracy Drill block in App.",
          targetQuota: "9 Mixed Tasks",
          successCriteria: "Overall section accuracy >= 82%."
        }
      }
    ]
  },
  {
    weekNumber: 7,
    weekTitle: "Week 7: Secondary Question Types & Time-Budgeting Strategies",
    weekFocusSummary: "Master lower-yield tasks (RTS, SGD, ASQ, MCQA, MCSA, SMW, HCS) efficiently without wasting valuable preparation time.",
    yieldTier: "MEDIUM & LOW YIELD (~15% of overall PTE score)",
    days: [
      {
        dayNumber: 25,
        weekNumber: 7,
        dayOfWeek: 1,
        title: "Respond to Situation (RTS) & Summarize Group Discussion (SGD)",
        moduleKey: "respond-to-situation",
        moduleName: "Respond to Situation & Group Discussion",
        section: "SPEAKING",
        scoringWeight: "MEDIUM YIELD",
        scoreImpactText: "Contributes ~5-8% to Speaking & Listening",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Pragmatic register & polite request formula warm-up.",
          presentation: "15 mins: RTS & SGD format guidelines: Scenario analysis, immediate 1.5s onset response, pragmatic appropriateness.",
          practice: "20 mins: Live scenario prompts and multi-speaker discussion retelling in App.",
          review: "15 mins: Peer review on oral fluency and polite register."
        },
        teachingPoints: [
          "Explain Respond to Situation (RTS): You read/hear a practical scenario (e.g. requesting a deadline extension from a professor) and provide a polite, effective 20-second spoken response.",
          "Explain Summarize Group Discussion (SGD): You listen to 3 speakers debating a topic and summarize their arguments and consensus.",
          "Emphasize starting speech within 1.5 seconds after the beep sound to avoid microphone cutoff!"
        ],
        tipsAndTricks: [
          "RTS Formula: [Polite Greeting] + [Clear Statement of Problem] + [Valid Reason] + [Specific Proposed Solution/Request].",
          "Example: 'Hello Professor, I am calling regarding my assignment. My research server crashed last night, corrupting my data. Could I please request a two-day submission extension?'"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Using overly informal conversational slang in RTS ('Hey buddy, my computer broke, can I turn it in later?').",
            fix: "Enforce formal academic register ('Good morning Dr. Smith', 'I would appreciate if...')."
          },
          {
            problem: "Hesitating while thinking of what to say after the beep.",
            fix: "Use the 10-second preparation time to write down your 3 core bullet points."
          }
        ],
        homework: {
          task: "Complete 5 RTS scenarios and 3 SGD tasks in the App.",
          targetQuota: "8 Speaking Tasks",
          successCriteria: "Flawless formal register with zero initial hesitation pauses."
        }
      },
      {
        dayNumber: 26,
        weekNumber: 7,
        dayOfWeek: 2,
        title: "Answer Short Question (ASQ) - Fast Vocabulary Recall & 1-Word Efficiency",
        moduleKey: "answer-short-question",
        moduleName: "Answer Short Question",
        section: "SPEAKING",
        scoringWeight: "LOW YIELD",
        scoreImpactText: "Contributes ~2-3% to Speaking & Listening",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: General knowledge & academic vocabulary trivia warm-up.",
          presentation: "15 mins: ASQ Scoring Rules: 1 mark for correct target word. Why spending excess time here is counterproductive.",
          practice: "20 mins: Rapid-fire 30-question ASQ drill in App.",
          review: "15 mins: Answer key review & trivia list download."
        },
        teachingPoints: [
          "Explain ASQ mechanics: You hear a simple question (e.g. 'What instrument is used to measure temperature?') and answer with 1 or 2 words ('Thermometer').",
          "Emphasize Conciseness: Say ONLY the target word! Do not add long conversational sentences like 'I believe the instrument is a thermometer.'",
          "If you don't know the answer, state a logical guess immediately or say nothing to let the microphone transition cleanly."
        ],
        tipsAndTricks: [
          "Article Inclusion: You can say 'A thermometer' or simply 'Thermometer'—both receive full credit.",
          "Do not panic if you miss 2-3 ASQ questions! ASQ accounts for less than 3% of your total score."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Adding unnecessary explanatory preamble ('The answer to your question is...').",
            fix: "Train 1-word reflex: Hear question -> Say target noun instantly."
          },
          {
            problem: "Unnecessary stress over unknown general knowledge questions.",
            fix: "Remind students of score weighting: Prioritize WFD, RS, and RA over ASQ."
          }
        ],
        homework: {
          task: "Complete 30 Answer Short Question items in the App.",
          targetQuota: "30 Questions",
          successCriteria: "Achieve >=85% accuracy with 1-second response onset."
        }
      },
      {
        dayNumber: 27,
        weekNumber: 7,
        dayOfWeek: 3,
        title: "Multiple Choice Questions (MCQA & MCSA) - Negative Marking Management",
        moduleKey: "multiple-choice-reading",
        moduleName: "Multiple Choice Questions (Reading & Listening)",
        section: "READING",
        scoringWeight: "LOW YIELD",
        scoreImpactText: "Contributes ~2-4% total score across Reading & Listening",
        difficultyLevel: "FOUNDATIONAL",
        timeBoxBreakdown: {
          warmup: "10 mins: Option elimination speed exercise.",
          presentation: "15 mins: MCQA vs MCSA scoring differences: Multiple Answer has negative marking (-1 for wrong choice)! Single Answer has NO negative marking.",
          practice: "20 mins: Timed MCQA and MCSA exercise solving under strict 45-second clocks.",
          review: "15 mins: Trap choice analysis (extreme statements, false inferences)."
        },
        teachingPoints: [
          "CRITICAL EXAMINER RULE FOR MCQA (Multiple Answers):",
          "  • MCQA has negative marking! (+1 for correct option, -1 for wrong option).",
          "  • Golden Strategy: Select ONLY ONE option that you are 100% sure about! Never pick a 2nd option unless completely certain.",
          "MCSA (Single Answer): No negative marking. Always select 1 option, guess if necessary, and move on in <45 seconds."
        ],
        tipsAndTricks: [
          "Time Budget Warning: Never spend more than 1 minute on any Multiple Choice question in Reading or Listening!",
          "In Listening, read the question prompt BEFORE the audio starts playing to know what specific detail to listen for."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Student spends 4 minutes reading a long passage for a 1-mark MCQA question.",
            fix: "Enforce strict timer discipline: 45 seconds max. Protect time for high-value Cloze and Dictation!"
          },
          {
            problem: "Selecting 3 options in MCQA and ending up with 0 net marks due to negative deductions.",
            fix: "Apply the 'Single-Choice Safety Net': Select ONLY 1 strong option in MCQA to guarantee +1 mark without risk."
          }
        ],
        homework: {
          task: "Complete 10 MCSA/MCQA items in App under 45-second timers.",
          targetQuota: "10 Questions",
          successCriteria: "Zero negative marking point deductions."
        }
      },
      {
        dayNumber: 28,
        weekNumber: 7,
        dayOfWeek: 4,
        title: "Select Missing Word (SMW) & Highlight Correct Summary (HCS)",
        moduleKey: "select-missing-word",
        moduleName: "Select Missing Word & Highlight Correct Summary",
        section: "LISTENING",
        scoringWeight: "LOW YIELD",
        scoreImpactText: "Contributes ~2-3% of total score to Listening section",
        difficultyLevel: "INTERMEDIATE",
        timeBoxBreakdown: {
          warmup: "10 mins: Audio trajectory & tone prediction warm-up.",
          presentation: "15 mins: SMW audio beep timing & HCS gist matching strategy.",
          practice: "20 mins: Solving SMW and HCS tasks on live audio clips in App.",
          review: "15 mins: Strategy recap & time management audit."
        },
        teachingPoints: [
          "Explain Select Missing Word (SMW): You listen to a lecture that ends with a 'beep' sound, then select the most logical final word/phrase.",
          "Explain Highlight Correct Summary (HCS): You listen to a 60s lecture and select the 1 option that best summarizes the gist.",
          "Emphasize: These are low-weight items (~1-2 marks each). Do NOT let them delay you from reaching Write From Dictation!"
        ],
        tipsAndTricks: [
          "SMW Strategy: Watch the audio progress bar! When it reaches 80%, focus intensely on the speaker's tone and final conjunction ('therefore', 'however').",
          "HCS Strategy: Note down the main thesis during audio; eliminate options that contain incorrect numbers or extreme claims."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Overthinking HCS options while the Listening section clock runs down.",
            fix: "Select the option that matches your main audio notes and click Next within 30 seconds of audio ending."
          },
          {
            problem: "Missing the final audio words in SMW.",
            fix: "Keep eyes glued to the audio progress bar so you know exactly when the final sentence arrives."
          }
        ],
        homework: {
          task: "Complete 5 SMW and 5 HCS exercises in the App.",
          targetQuota: "10 Listening Tasks",
          successCriteria: "Complete all tasks in under 45 seconds post-audio."
        }
      }
    ]
  },
  {
    weekNumber: 8,
    weekTitle: "Week 8: Full Diagnostic Simulation, Speed Drills & Examiner Audit",
    weekFocusSummary: "Execute full section mock exams under realistic exam conditions, perform score diagnostic audits, and finalize test day strategies.",
    yieldTier: "FULL EXAM INTEGRATION (100% Test Readiness)",
    days: [
      {
        dayNumber: 29,
        weekNumber: 8,
        dayOfWeek: 1,
        title: "Full Timed Speaking & Writing Mock Diagnostic",
        moduleKey: "full-mock-speaking-writing",
        moduleName: "Full Mock: Speaking & Writing",
        section: "INTEGRATED",
        scoringWeight: "MOCK EXAM",
        scoreImpactText: "Full Section Diagnostic (54 minutes live test simulation)",
        difficultyLevel: "EXAM SIMULATION",
        timeBoxBreakdown: {
          warmup: "10 mins: Microphone positioning, voice level calibration & mental focus.",
          presentation: "5 mins: Mock exam rules & timing guidelines.",
          practice: "35 mins: Full Speaking & Writing Mock Test execution in App under strict exam timer.",
          review: "10 mins: Immediate score generation & performance breakdown."
        },
        teachingPoints: [
          "Simulate full PTE Academic exam environment: No pauses, no retakes, strict timers.",
          "Test exam stamina: Maintaining vocal energy from Read Aloud through Essay Writing.",
          "Monitor microphone acoustic levels and room noise isolation techniques."
        ],
        tipsAndTricks: [
          "Vocal Endurance: Maintain steady projection throughout the 35 minutes; do not let your voice volume drop toward the end.",
          "If you make a mistake in Repeat Sentence, reset your mind instantly for Describe Image—never carry frustration to the next task!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Candidate gets flustered after a difficult Repeat Sentence and stumbles on the next Describe Image.",
            fix: "Train 'Mental Compartmentalization': Treat every single question as an isolated 100% fresh opportunity."
          },
          {
            problem: "Running out of time on Essay Writing during full mock.",
            fix: "Stick strictly to the 15-minute drafting blueprint."
          }
        ],
        homework: {
          task: "Review full diagnostic score report in App; analyze Fluency & Form scores.",
          targetQuota: "1 Full Diagnostic Report",
          successCriteria: "Overall Speaking & Writing score >= 65 (or target 79+)."
        }
      },
      {
        dayNumber: 30,
        weekNumber: 8,
        dayOfWeek: 2,
        title: "Full Timed Reading & Listening Mock Diagnostic",
        moduleKey: "full-mock-reading-listening",
        moduleName: "Full Mock: Reading & Listening",
        section: "INTEGRATED",
        scoringWeight: "MOCK EXAM",
        scoreImpactText: "Full Section Diagnostic (60 minutes live test simulation)",
        difficultyLevel: "EXAM SIMULATION",
        timeBoxBreakdown: {
          warmup: "10 mins: Reading cloze & listening speed calibration.",
          presentation: "5 mins: Section clock management & Write From Dictation time reservation.",
          practice: "35 mins: Full Reading & Listening Mock Test execution in App under strict exam clock.",
          review: "10 mins: Immediate score calculation & cross-credited analysis."
        },
        teachingPoints: [
          "CRITICAL LISTENING CLOCK RULE: In the Listening section, the overall timer covers all question types! You MUST save at least 5-6 minutes for Write From Dictation at the end!",
          "Speed through MCSA, MCQA, HCS, and SMW so you never get cut off before completing all 3-4 Write From Dictation questions.",
          "Audit cross-credited scores: Linking Listening results to Writing performance."
        ],
        tipsAndTricks: [
          "The 'WFD Time Protection Rule': Check the overall Listening clock when reaching HIW. Ensure at least 6 minutes remain!",
          "In Reading, if a Cloze question takes >90 seconds, pick your best collocation guess and click Next immediately."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Running out of time in Listening and missing the last 2 Write From Dictation questions (losing ~15-20 marks!).",
            fix: "Enforce rapid clicking on low-value Multiple Choice items to guarantee full time for WFD."
          },
          {
            problem: "Careless spelling errors in L FIB during timed mock.",
            fix: "Use 20 seconds post-audio for mandatory spelling audit."
          }
        ],
        homework: {
          task: "Review full Reading & Listening diagnostic report in App.",
          targetQuota: "1 Full Diagnostic Report",
          successCriteria: "Overall Reading & Listening score >= 65 (or target 79+)."
        }
      },
      {
        dayNumber: 31,
        weekNumber: 8,
        dayOfWeek: 3,
        title: "PTE Score Card Breakdown & Target Skill Remediation",
        moduleKey: "score-audit-remediation",
        moduleName: "Score Card Audit & Remediation",
        section: "INTEGRATED",
        scoringWeight: "MOCK EXAM",
        scoreImpactText: "Diagnostic evaluation across all 22 question types",
        difficultyLevel: "ADVANCED",
        timeBoxBreakdown: {
          warmup: "10 mins: Analyzing individual score breakdown reports.",
          presentation: "15 mins: The PTE Algorithm Cross-Crediting Map (Tracing Writing drops to WFD/SST/R&W FIB).",
          practice: "20 mins: Target drill remediation on student's top 3 weakest question types in App.",
          review: "15 mins: Re-testing remediated items & score verification."
        },
        teachingPoints: [
          "Teach students how to diagnose their PTE Score Card:",
          "  • Low Writing score? Don't blame the Essay! Check Write From Dictation, Summarize Spoken Text, and R&W FIB Dropdown.",
          "  • Low Reading score? Check Read Aloud, R&W FIB, R FIB, and Highlight Incorrect Words.",
          "  • Low Listening score? Check Repeat Sentence, Write From Dictation, and Retell Lecture.",
          "Focus 100% of final remediation effort on Ultra High Yield tasks (WFD, RS, RA, R&W FIB)."
        ],
        tipsAndTricks: [
          "The 80/20 PTE Rule: 80% of your total score comes from just 6 question types (WFD, RS, RA, R&W FIB, R FIB, SST). Master these 6 to guarantee 79+!",
          "Redo your weakest exercise bank questions until scoring >=90%."
        ],
        commonProblemsAndFixes: [
          {
            problem: "Student wastes final study days practicing low-yield ASQ or MCQA questions.",
            fix: "Redirect 100% of remaining study hours to Write From Dictation spelling and Read Aloud fluency."
          },
          {
            problem: "Anxiety over past mock scores.",
            fix: "Show clear empirical progress data and review mastered templates."
          }
        ],
        homework: {
          task: "Complete 20 WFDs, 15 RSs, and 10 RAs targeting previously missed items in App.",
          targetQuota: "45 Targeted Exercises",
          successCriteria: "Achieve >=90% accuracy on all remediated items."
        }
      },
      {
        dayNumber: 32,
        weekNumber: 8,
        dayOfWeek: 4,
        title: "Final Test Day Protocols, Examiner Mindset & Score Guarantee",
        moduleKey: "final-test-day-mastery",
        moduleName: "Final Test Day Masterclass",
        section: "INTEGRATED",
        scoringWeight: "MOCK EXAM",
        scoreImpactText: "Final exam execution & confidence building",
        difficultyLevel: "EXAM SIMULATION",
        timeBoxBreakdown: {
          warmup: "10 mins: Final 3-Second Mic Rule & Checklist review.",
          presentation: "15 mins: Test center environment survival guide: Noise handling, erasable booklet management, equipment check.",
          practice: "20 mins: Warm-up oral sprint (5 RA + 10 RS + 5 WFD) to calibrate vocal muscles.",
          review: "15 mins: Final Q&A, teacher encouragement & course graduation!"
        },
        teachingPoints: [
          "Test Day Equipment Check:",
          "  • Test your headset microphone during the initial warm-up screen! Record a sample and listen back for clarity and volume.",
          "  • Request 2 fine-tip markers for your erasable booklet; test them immediately to ensure ink flows smoothly.",
          "Test Center Noise Management: The exam room will be noisy with other candidates speaking. Maintain focused vocal projection and ignore background voices.",
          "Final 24-Hour Protocol: Rest well, review WFD spelling list, review templates, and enter the test center with 79+ confidence!"
        ],
        tipsAndTricks: [
          "Microphone Test Hack: During the pre-exam mic check, adjust the mic boom to sit parallel to your mouth, slightly below the nostrils. Say 'Testing 1 2 3' with full projection.",
          "Erasable Pen Tip: Keep the cap on markers when not writing so the ink doesn't dry out during audio clips!",
          "Believe in your preparation: You have completed 32 hours of rigorous CELTA-aligned examiner training!"
        ],
        commonProblemsAndFixes: [
          {
            problem: "Being distracted by louder candidates speaking nearby during Read Aloud.",
            fix: "Focus entirely on your own screen and microphone. Speak with confident, clear projection."
          },
          {
            problem: "Cramming late into the night before test day.",
            fix: "Enforce complete rest the night before to ensure peak mental sharpness."
          }
        ],
        homework: {
          task: "Rest, hydrate, and take the official PTE Academic Exam with total confidence!",
          targetQuota: "Official Exam",
          successCriteria: "Achieve Target Score (65+ / 79+ Overall)."
        }
      }
    ]
  }
];
