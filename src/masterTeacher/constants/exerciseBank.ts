// Exercise Bank: 100 Common PTE Exam Topics & Practice Items per Question Type
// Progressively structured across CEFR English Proficiency Levels:
// - Questions 1 to 20: A1 Level (Beginner)
// - Questions 21 to 40: A2 Level (Elementary)
// - Questions 41 to 60: B1 Level (Intermediate)
// - Questions 61 to 80: B2 Level (Upper Intermediate)
// - Questions 81 to 90: C1 Level (Advanced)
// - Questions 91 to 100: C2 Level (Proficient / Mastery)

export function getCefrLevel(index: number) {
  const safeIndex = Math.max(1, Math.min(100, index));
  if (safeIndex <= 20) {
    return {
      level: "A1",
      name: "A1 Beginner",
      badgeColor: "bg-emerald-600 text-white",
      borderColor: "border-emerald-500",
      textColor: "text-emerald-700 dark:text-emerald-300",
      description: "Elementary vocabulary, simple short sentences, everyday activities."
    };
  }
  if (safeIndex <= 40) {
    return {
      level: "A2",
      name: "A2 Elementary",
      badgeColor: "bg-teal-600 text-white",
      borderColor: "border-teal-500",
      textColor: "text-teal-700 dark:text-teal-300",
      description: "Routine tasks, basic workplace descriptions, simple facts."
    };
  }
  if (safeIndex <= 60) {
    return {
      level: "B1",
      name: "B1 Intermediate",
      badgeColor: "bg-sky-600 text-white",
      borderColor: "border-sky-500",
      textColor: "text-sky-700 dark:text-sky-300",
      description: "Practical lifestyle, social topics, basic academic context."
    };
  }
  if (safeIndex <= 80) {
    return {
      level: "B2",
      name: "B2 Upper Int",
      badgeColor: "bg-indigo-600 text-white",
      borderColor: "border-indigo-500",
      textColor: "text-indigo-700 dark:text-indigo-300",
      description: "Complex academic themes, technical arguments, professional discourse."
    };
  }
  if (safeIndex <= 90) {
    return {
      level: "C1",
      name: "C1 Advanced",
      badgeColor: "bg-purple-600 text-white",
      borderColor: "border-purple-500",
      textColor: "text-purple-700 dark:text-purple-300",
      description: "Demanding academic papers, implicit meaning, scientific vocabulary."
    };
  }
  return {
    level: "C2",
    name: "C2 Mastery",
    badgeColor: "bg-rose-600 text-white",
    borderColor: "border-rose-500",
    textColor: "text-rose-700 dark:text-rose-300",
    description: "Highly specialized research, complex theoretical synthesis, dense terminology."
  };
}

export const COMMON_PTE_TOPICS = [
  // --- A1 LEVEL (1 to 20) ---
  "Daily Morning Routines",
  "Family & Friends",
  "Favorite Foods & Meals",
  "Hobbies & Free Time",
  "My Home & Neighborhood",
  "Weather & Seasons",
  "Shopping & Groceries",
  "Pets & Animals",
  "School Subjects",
  "City Buses & Public Transport",
  "Workplace Daily Tasks",
  "Birthday Celebrations",
  "Weekend Sports",
  "Clothes & Everyday Fashion",
  "Colors & Numbers",
  "Time & Days of the Week",
  "Food & Drinks",
  "City Parks & Playgrounds",
  "Listening to Music",
  "Smartphones & Laptops",

  // --- A2 LEVEL (21 to 40) ---
  "Buying Bus & Train Tickets",
  "Ordering Food in Restaurants",
  "Preparing for Job Interviews",
  "Gyms & Physical Fitness",
  "Weekend Travel Trips",
  "Public Libraries & Reading",
  "Online Shopping & Delivery",
  "Recycling Household Trash",
  "Cultural Festivals",
  "Visiting Museums & Art",
  "Elementary Science Projects",
  "Sending Workplace Emails",
  "Driving Lessons & Safety",
  "Cooking Kitchen Recipes",
  "Taking Photos & Video",
  "Fixing Home Appliances",
  "Visiting Wildlife Zoos",
  "School Field Trips",
  "TV Shows & Cinema Movies",
  "Community Urban Gardening",

  // --- B1 LEVEL (41 to 60) ---
  "Remote Work & Hybrid Jobs",
  "Social Media & Youth Culture",
  "Home Solar Power Savings",
  "University Dormitory Life",
  "Public Library Modernization",
  "Healthy Diets & Nutrition",
  "E-Learning & Virtual Classes",
  "Urban Bike Lanes & Congestion",
  "Reducing Plastic Waste",
  "Tourism in Local Communities",
  "Student Budgeting & Finance",
  "National Park Wildlife",
  "Managing Workplace Stress",
  "Modern City Skyscrapers",
  "E-Commerce & Small Business",
  "History of Passenger Flight",
  "Clean Drinking Water Access",
  "Language Apps & Memory",
  "Artificial Intelligence Apps",
  "Public Health Campaigns",

  // --- B2 LEVEL (61 to 80) ---
  "Market Research & Strategy",
  "Climate Change Mitigation",
  "AI Medical Diagnostics",
  "Higher Education Mobility",
  "Smart Grids & Electric Power",
  "Biodiversity Conservation",
  "Cognitive Psychology & Sleep",
  "Space Exploration Technology",
  "Global Economic Inflation",
  "Archaeology & Radiocarbon",
  "Agricultural Biotechnology",
  "Hydropower & River Ecology",
  "Neurobiology & Memory",
  "Oceanic Microplastics",
  "Endangered Languages",
  "Architectural Acoustics",
  "Consumer Behavioral Trends",
  "Plate Tectonics & Seismic Data",
  "Vaccine Distribution Logistics",
  "Quantum Cryptography",

  // --- C1 LEVEL (81 to 90) ---
  "Choice Architecture & Nudge Theory",
  "Nanotechnology Oncology Delivery",
  "Aquifer Hydrogeology & Depletion",
  "Volcanic Stratospheric Cooling",
  "Ocean Acidification & Calcification",
  "CRISPR Genomic Editing Ethics",
  "Epistemology of Machine Learning",
  "Central Bank Sovereign Debt Policy",
  "Magnetospheric Solar Storm Physics",
  "Comparative Evolutionary Syntax",

  // --- C2 LEVEL (91 to 100) ---
  "Quantum Chromodynamics & Hadrons",
  "Palaeoclimatological Ice Proxy Analysis",
  "Phenomenological Mind Philosophy",
  "Epigenetic Transgenerational Inheritance",
  "Algorithmic Game Theory & Equilibria",
  "Biosemiotic Non-Human Communication",
  "Thermohaline Circulation Collapse",
  "Computational Aerodynamic Turbulence",
  "Structural Hermeneutics & Epigraphy",
  "Entangled Photon Quantum Cryptanalysis"
];

export const ASQ_QUESTIONS = [
  // A1 Level (1-20)
  { question: "What day comes directly after Monday?", answer: "Tuesday" },
  { question: "What is the opposite temperature of hot?", answer: "Cold" },
  { question: "How many days are there in one single week?", answer: "Seven" },
  { question: "What domestic pet animal makes a 'meow' sound?", answer: "Cat" },
  { question: "What color is the clear sky during a sunny day?", answer: "Blue" },
  { question: "What utensil do students use to write on paper?", answer: "Pen / Pencil" },
  { question: "What season of the year comes after winter?", answer: "Spring" },
  { question: "Which month is the first month of the calendar year?", answer: "January" },
  { question: "What clothing item do people wear on their feet inside shoes?", answer: "Socks" },
  { question: "What number comes directly after nine?", answer: "Ten" },
  { question: "What meal do people usually eat in the morning?", answer: "Breakfast" },
  { question: "What primary language is spoken in Spain?", answer: "Spanish" },
  { question: "What vehicle has two wheels and pedals moved by legs?", answer: "Bicycle / Bike" },
  { question: "What office tool is used to cut paper?", answer: "Scissors" },
  { question: "What device tells you the current time of day?", answer: "Clock / Watch" },
  { question: "Where do people go to purchase fresh groceries and food?", answer: "Supermarket / Market" },
  { question: "Which room in a residential house is used for cooking meals?", answer: "Kitchen" },
  { question: "What liquid falls down from rain clouds in the sky?", answer: "Water / Rain" },
  { question: "What glass object in a wall do you open to look outside?", answer: "Window" },
  { question: "What piece of bedroom furniture do you sleep on at night?", answer: "Bed" },

  // A2 Level (21-40)
  { question: "What official travel document is required for international flights?", answer: "Passport" },
  { question: "What do you call a professional who operates an aircraft?", answer: "Pilot" },
  { question: "What printed list in a restaurant shows all available meals?", answer: "Menu" },
  { question: "What device is used to take photograph images?", answer: "Camera" },
  { question: "What do you call a period of ten consecutive years?", answer: "Decade" },
  { question: "What room in an academic institution contains books for reading?", answer: "Library" },
  { question: "What geometric shape has three sides and three angles?", answer: "Triangle" },
  { question: "What doctor specializes in performing medical surgical operations?", answer: "Surgeon" },
  { question: "What is the solid frozen form of liquid water called?", answer: "Ice" },
  { question: "What device measures human body temperature?", answer: "Thermometer" },
  { question: "What public facility displays historical artifacts and artwork?", answer: "Museum" },
  { question: "What animal class lives both in water and on land?", answer: "Amphibian" },
  { question: "What paper document is issued after paying for goods at a store?", answer: "Receipt" },
  { question: "What season follows summer and precedes winter?", answer: "Autumn / Fall" },
  { question: "What publication is printed daily with current world news?", answer: "Newspaper" },
  { question: "What do you call a person who writes theatrical plays?", answer: "Playwright" },
  { question: "What polygon shape has four equal sides and four right angles?", answer: "Square" },
  { question: "What card is required to borrow books from a public library?", answer: "Library card" },
  { question: "What timing instrument is used to measure exact seconds in a race?", answer: "Stopwatch" },
  { question: "What primary fuel source do green plants synthesize using sunlight?", answer: "Glucose / Sunlight" },

  // B1 Level (41-60)
  { question: "What instrument is used to measure atmospheric pressure?", answer: "Barometer" },
  { question: "What fundamental force pulls objects toward the center of Earth?", answer: "Gravity" },
  { question: "What branch of science studies stars, planets, and space?", answer: "Astronomy" },
  { question: "Which human body organ filters blood and produces urine?", answer: "Kidney" },
  { question: "What do you call a period of one hundred years?", answer: "Century" },
  { question: "What liquid metal is used in traditional glass thermometers?", answer: "Mercury" },
  { question: "What scientist specializes in studying rocks and Earth structure?", answer: "Geologist" },
  { question: "What optical device magnifies microscopic organisms in a lab?", answer: "Microscope" },
  { question: "What natural seismic event is measured on the Richter scale?", answer: "Earthquake" },
  { question: "What gas do human lungs inhale to survive?", answer: "Oxygen" },
  { question: "What compound covers roughly seventy percent of Earth's surface?", answer: "Water" },
  { question: "What field of biology studies organisms and their environment?", answer: "Ecology" },
  { question: "What subatomic particle carries a negative electric charge?", answer: "Electron" },
  { question: "What navigational tool uses a magnetic needle to indicate north?", answer: "Compass" },
  { question: "What do you call an account of a person's life written by another person?", answer: "Biography" },
  { question: "What instrument measures electrical current in an electric circuit?", answer: "Ammeter" },
  { question: "What force resists motion between two sliding solid surfaces?", answer: "Friction" },
  { question: "What branch of mathematics deals with lines, angles, and shapes?", answer: "Geometry" },
  { question: "What musical tool maintains a steady tempo in beats per minute?", answer: "Metronome" },
  { question: "What astronomical facility houses large optical telescopes?", answer: "Observatory" },

  // B2 Level (61-80)
  { question: "What biological study examines the body's immune defense system?", answer: "Immunology" },
  { question: "What chemical process turns solar energy into plant sugars?", answer: "Photosynthesis" },
  { question: "What instrument records seismic shockwaves during earthquakes?", answer: "Seismograph" },
  { question: "What double-helix molecule carries genetic instructions?", answer: "DNA" },
  { question: "What atmospheric layer shields Earth from harmful solar UV radiation?", answer: "Ozone layer" },
  { question: "What term refers to the large-scale clearing of forest trees?", answer: "Deforestation" },
  { question: "What economic term describes a sustained rise in consumer prices?", answer: "Inflation" },
  { question: "What cellular organelle acts as the primary powerhouse of energy?", answer: "Mitochondria" },
  { question: "What mathematical branch calculates continuous rates of change?", answer: "Calculus" },
  { question: "What theory explains the movement of Earth's lithospheric plates?", answer: "Plate tectonics" },
  { question: "What neutral subatomic particle resides inside the atomic nucleus?", answer: "Neutron" },
  { question: "What geological epoch was dominated by global ice ages?", answer: "Pleistocene" },
  { question: "What physical property allows deformed materials to spring back?", answer: "Elasticity" },
  { question: "What legal protection guards original author works from copying?", answer: "Copyright" },
  { question: "What medical term describes cancerous cell movement to distant organs?", answer: "Metastasis" },
  { question: "What meteorological tool measures relative air humidity?", answer: "Hygrometer" },
  { question: "What metallic element exhibits the highest thermal conductivity?", answer: "Silver" },
  { question: "What branch of philosophy studies the nature and limits of knowledge?", answer: "Epistemology" },
  { question: "What physical law states energy can neither be created nor destroyed?", answer: "First law of thermodynamics" },
  { question: "What term describes an organism with foreign DNA inserted artificially?", answer: "Transgenic / GMO" },

  // C1 Level (81-90)
  { question: "What quantum physics state links particles across space instantaneously?", answer: "Quantum entanglement" },
  { question: "What ecological buildup describes toxin accumulation up a food chain?", answer: "Biomagnification" },
  { question: "What neurological deficit causes loss of spoken language understanding?", answer: "Aphasia" },
  { question: "What economic concept denotes incurred costs that cannot be recovered?", answer: "Sunk cost" },
  { question: "What boundary around a black hole prevents anything from escaping?", answer: "Event horizon" },
  { question: "What enzyme cuts DNA at specific palindromic nucleotide sequences?", answer: "Restriction enzyme" },
  { question: "What meteorological event causes intense localized downburst winds?", answer: "Microburst" },
  { question: "What social science studies spatial distances in human interaction?", answer: "Proxemics" },
  { question: "What tectonic process drives one crustal plate beneath another?", answer: "Subduction" },
  { question: "What linguistic field analyzes physical acoustic speech sounds?", answer: "Phonetics" },

  // C2 Level (91-100)
  { question: "What quantum principle states position and momentum cannot be jointly known?", answer: "Heisenberg uncertainty principle" },
  { question: "What paleoclimate method uses isotopic ratios in ice cores for temperature history?", answer: "Isotopic proxy analysis" },
  { question: "What philosophy problem focuses on explaining subjective qualitative experience?", answer: "The hard problem of consciousness" },
  { question: "What biochemical process modifies gene activity without altering DNA sequences?", answer: "Epigenetic methylation" },
  { question: "What mathematical logic theorem proved formal systems have unprovable truths?", answer: "Gödel's incompleteness theorem" },
  { question: "What ocean circulation system is driven by temperature and salinity density gradients?", answer: "Thermohaline circulation" },
  { question: "What scalar boson particle imparts mass to fundamental elementary particles?", answer: "Higgs boson" },
  { question: "What auxiliary historical discipline studies ancient inscriptions on stone and metal?", answer: "Epigraphy" },
  { question: "What dimensionless fluid dynamics ratio predicts laminar versus turbulent flow?", answer: "Reynolds number" },
  { question: "What evolutionary phenomenon leads independent lineages to evolve identical structures?", answer: "Convergent evolution" }
];


// -----------------------------------------------------------------------------
// READ ALOUD CALIBRATION LAB — AUTHORED EXERCISES 1–10
// These exercises are specifically designed for teacher calibration.
// The first ten cases are fully authored and aligned to COMMON_PTE_TOPICS.
// Exercises 11–100 continue to use the existing generator until authored.
// -----------------------------------------------------------------------------

export const READ_ALOUD_CALIBRATION_EXERCISES = [
  {
    exerciseIndex: 1,
    totalExercises: 100,
    difficulty: "Beginner",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Hesitation & Fillers",
    learningObjective:
      "Identify repeated hesitation fillers and distinguish them from normal pauses.",
    promptText:
      "I usually wake up early in the morning. I get out of bed, wash my face, and make a simple breakfast. Then I check my bag and leave home for work. I like to start my day quietly, but sometimes I need a little more time before I am ready to go. After work, I come home and have dinner with my family.",
    promptAudio:
      "I usually wake up early in the morning. I get out of bed, wash my face, and make a simple breakfast. Then I check my bag and leave home for work. I like to start my day quietly, but sometimes I need a little more time before I am ready to go. After work, I come home and have dinner with my family.",
    studentTranscript:
      "I usually wake up, um, early in the morning. I get out of bed, uh, wash my face, and make a simple breakfast. Then I check my bag, er, and leave home for work. I like to start my day quietly, but, um, sometimes I need a little more time before I am ready to go. After work, I come home and have dinner with my family.",
    studentResponse: {
      audioDuration: "34.5 seconds",
      wordCount: 63,
      characteristics:
        "The student remains understandable but inserts four noticeable hesitation fillers during a longer, familiar routine passage."
    },
    diagnosticErrors: ["Hesitation", "Filler words"],
    expertEvidence: [
      "\"um\" occurs after \"wake up\"",
      "\"uh\" occurs after \"bed\"",
      "\"er\" occurs before \"and leave home\"",
      "\"um\" occurs before \"sometimes\"",
      "The student maintains the full content and continues forward after each filler."
    ],
    expertDiagnosis:
      "The main fluency problem is repeated use of hesitation fillers. The student can produce a longer familiar passage, but filler sounds interrupt otherwise continuous delivery at several points.",
    perfectCalibrationResponse:
      "The student's main oral fluency issue is repeated hesitation and filler-word use. \"Um,\" \"uh,\" and \"er\" interrupt an otherwise understandable delivery at several points across the passage. The student maintains the content and continues forward, so the diagnosis should focus on filler-driven hesitation rather than pronunciation or content.",
    coachingAdvice:
      "Teach the student to replace filler sounds with brief silent pauses. Practise longer familiar passages while maintaining forward movement instead of filling thinking time with \"um,\" \"uh\" or \"er\".",
    cefrLevel: "A1",
    topicTitle: "Daily Morning Routines",
    good: {
      transcript:
        "I usually wake up early in the morning. I get out of bed, wash my face, and make a simple breakfast. Then I check my bag and leave home for work. I like to start my day quietly, but sometimes I need a little more time before I am ready to go. After work, I come home and have dinner with my family.",
      audioDuration: "31.5 seconds",
      wordCount: 67,
      characteristics:
        "Natural continuous delivery with appropriate phrasing and no unnecessary fillers."
    },
    poor: {
      transcript:
        "I usually wake up, um, early in the morning. I get out of bed, uh, wash my face, and make a simple breakfast. Then I check my bag, er, and leave home for work. I like to start my day quietly, but, um, sometimes I need a little more time before I am ready to go. After work, I come home and have dinner with my family.",
      audioDuration: "34.5 seconds",
      wordCount: 67,
      characteristics:
        "Repeated hesitation fillers interrupt otherwise understandable delivery."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear, continuous and appropriately paced delivery."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "65 / 90",
      breakdownText:
        "Repeated hesitation fillers interrupt an otherwise understandable delivery."
    },
    errorChecklist: [
      { id: "hesitation", label: "Hesitation", keyword: "Hesitation" },
      { id: "filler-words", label: "Filler words", keyword: "Filler words" }
    ],
    expertAdvice:
      "Focus on reducing hesitation fillers. Encourage brief silent pauses instead of filling thinking time with \"um,\" \"uh\" or \"er\"."
  },

  {
    exerciseIndex: 2,
    totalExercises: 100,
    difficulty: "Beginner",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Unnatural Pauses",
    learningObjective:
      "Identify pauses that break grammatical or meaningful phrase boundaries.",
    promptText:
      "My sister lives nearby, and we often meet at the weekend for coffee. Sometimes we sit in a small cafe and talk about our family. We also like to walk around the town together. It is nice to see her because we are both busy during the week. On Sunday, we usually meet in the afternoon before we go home.",
    promptAudio:
      "My sister lives nearby, and we often meet at the weekend for coffee. Sometimes we sit in a small cafe and talk about our family. We also like to walk around the town together. It is nice to see her because we are both busy during the week. On Sunday, we usually meet in the afternoon before we go home.",
    studentTranscript:
      "My sister lives / nearby, and we / often meet at the weekend / for coffee. Sometimes we sit / in a small cafe / and talk about our family. We also like to walk / around the town together. It is nice to see her / because we are both busy / during the week. On Sunday, we usually meet / in the afternoon / before we go home.",
    studentResponse: {
      audioDuration: "38.5 seconds",
      wordCount: 60,
      characteristics:
        "The student pauses repeatedly inside grammatical and meaningful units throughout an otherwise complete family description."
    },
    diagnosticErrors: ["Unnatural pauses", "Fragmented phrasing"],
    expertEvidence: [
      "Pause after \"lives\" breaks \"lives nearby\"",
      "Pause after \"we\" breaks \"we often meet\"",
      "Pause after \"sit\" separates it from \"in a small cafe\"",
      "Pause after \"walk\" separates it from the following location phrase",
      "The student is not repeating or restarting words"
    ],
    expertDiagnosis:
      "The main problem is unnatural pausing. The student knows the words and does not show significant hesitation, but the pauses divide connected phrases into awkward fragments.",
    perfectCalibrationResponse:
      "The student's main oral fluency issue is unnatural pausing. Pauses occur inside connected phrases such as \"lives nearby,\" \"we often meet,\" and \"sit in a small cafe,\" which breaks the passage into awkward fragments. The student is not mainly struggling with repetition or restarting; the key issue is poor placement of pauses.",
    coachingAdvice:
      "Teach the student to read in sense groups. Practise keeping closely connected words together and moving to the next pause only after a complete thought group.",
    cefrLevel: "A1",
    topicTitle: "Family & Friends",
    good: {
      transcript:
        "My sister lives nearby, and we often meet at the weekend for coffee. Sometimes we sit in a small cafe and talk about our family. We also like to walk around the town together. It is nice to see her because we are both busy during the week. On Sunday, we usually meet in the afternoon before we go home.",
      audioDuration: "31.5 seconds",
      wordCount: 60,
      characteristics:
        "Natural pauses occur at sensible phrase and sentence boundaries."
    },
    poor: {
      transcript:
        "My sister lives / nearby, and we / often meet at the weekend / for coffee. Sometimes we sit / in a small cafe / and talk about our family. We also like to walk / around the town together. It is nice to see her / because we are both busy / during the week. On Sunday, we usually meet / in the afternoon / before we go home.",
      audioDuration: "38.5 seconds",
      wordCount: 60,
      characteristics:
        "Frequent mid-phrase pauses make the passage sound fragmented."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural phrase grouping and continuous delivery."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "68 / 90",
      breakdownText:
        "Frequent pauses occur inside grammatical and meaningful phrase boundaries."
    },
    errorChecklist: [
      { id: "unnatural-pauses", label: "Unnatural pauses", keyword: "Unnatural pauses" },
      { id: "fragmented-phrasing", label: "Fragmented phrasing", keyword: "Fragmented phrasing" }
    ],
    expertAdvice:
      "Teach the student to identify meaningful groups before reading. Avoid pausing between words that belong together."
  },

  {
    exerciseIndex: 3,
    totalExercises: 100,
    difficulty: "Beginner",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Repetition & Restarting",
    learningObjective:
      "Recognise repeated words and restarts that interrupt otherwise continuous speech.",
    promptText:
      "My favorite meal is chicken with rice and fresh vegetables. I usually eat it with my family at home. My mother cooks the chicken, and I help with the vegetables. We sit together at the table, talk about our day, and enjoy the meal slowly. Sometimes we have fruit after dinner, and then I help clean the kitchen.",
    promptAudio:
      "My favorite meal is chicken with rice and fresh vegetables. I usually eat it with my family at home. My mother cooks the chicken, and I help with the vegetables. We sit together at the table, talk about our day, and enjoy the meal slowly. Sometimes we have fruit after dinner, and then I help clean the kitchen.",
    studentTranscript:
      "My favorite meal is chicken with rice—rice and fresh vegetables. I usually eat it with my family at home. My mother cooks the chicken, and I help with the vegetables. We sit together at the table, talk about our day, and enjoy the meal slowly. Sometimes we have fruit after dinner, and then I... I help clean the kitchen.",
    studentResponse: {
      audioDuration: "34.0 seconds",
      wordCount: 60,
      characteristics:
        "The student repeats \"rice\" after successfully producing it and later restarts \"I help\" after a hesitation."
    },
    diagnosticErrors: ["Repetition", "Restarting"],
    expertEvidence: [
      "The word \"rice\" is repeated after it has already been produced",
      "The repeated word interrupts the food description",
      "The student later repeats \"I\" before \"help clean the kitchen\"",
      "The second attempts do not repair missing content"
    ],
    expertDiagnosis:
      "The main fluency problem is unnecessary repetition and restarting. The student successfully begins the relevant phrases, then repeats or restarts instead of continuing forward.",
    perfectCalibrationResponse:
      "The student's main oral fluency issue is unnecessary repetition and restarting. The word \"rice\" is repeated after the phrase has already been produced, and the speaker later restarts \"I help clean the kitchen\" after a hesitation. These repairs interrupt otherwise connected speech; the teacher should identify the fluency pattern without over-penalising content or pronunciation.",
    coachingAdvice:
      "Teach the student to continue after a minor slip instead of repeating a successful word or restarting a phrase. Practise longer familiar descriptions while focusing on forward movement.",
    cefrLevel: "A1",
    topicTitle: "Favorite Foods & Meals",
    good: {
      transcript:
        "My favorite meal is chicken with rice and fresh vegetables. I usually eat it with my family at home. My mother cooks the chicken, and I help with the vegetables. We sit together at the table, talk about our day, and enjoy the meal slowly. Sometimes we have fruit after dinner, and then I help clean the kitchen.",
      audioDuration: "31.5 seconds",
      wordCount: 58,
      characteristics:
        "Continuous delivery without unnecessary repetition or restarting."
    },
    poor: {
      transcript:
        "My favorite meal is chicken with rice—rice and fresh vegetables. I usually eat it with my family at home. My mother cooks the chicken, and I help with the vegetables. We sit together at the table, talk about our day, and enjoy the meal slowly. Sometimes we have fruit after dinner, and then I... I help clean the kitchen.",
      audioDuration: "34.0 seconds",
      wordCount: 60,
      characteristics:
        "Repeated words and a short restart interrupt otherwise understandable connected speech."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Continuous delivery without unnecessary repetition."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "66 / 90",
      breakdownText:
        "Repeated words and restarting interrupt otherwise understandable connected speech."
    },
    errorChecklist: [
      { id: "repetition", label: "Repetition", keyword: "Repetition" },
      { id: "restarting", label: "Restarting", keyword: "Restarting" }
    ],
    expertAdvice:
      "Encourage the student to keep moving forward after a small slip. Repeating a word or restarting a phrase can create a larger fluency problem."
  },

  {
    exerciseIndex: 4,
    totalExercises: 100,
    difficulty: "Beginner",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Phrasing & Word Grouping",
    learningObjective:
      "Identify poorly grouped delivery and teach meaningful phrase-level chunking.",
    promptText:
      "I like reading books and listening to music in my free time. I usually read in the evening when my work is finished. Sometimes I listen to music while I clean my room. On weekends, I also visit the library and choose a new book to read. Reading helps me relax, and music makes simple housework more enjoyable.",
    promptAudio:
      "I like reading books and listening to music in my free time. I usually read in the evening when my work is finished. Sometimes I listen to music while I clean my room. On weekends, I also visit the library and choose a new book to read. Reading helps me relax, and music makes simple housework more enjoyable.",
    studentTranscript:
      "I like / reading books / and listening / to music / in my free time. I usually read / in the evening / when my work / is finished. Sometimes I listen / to music / while I clean / my room. On weekends, I also visit / the library / and choose a new book / to read. Reading helps me relax / and music makes / simple housework more enjoyable.",
    studentResponse: {
      audioDuration: "38.0 seconds",
      wordCount: 58,
      characteristics:
        "The student uses small, mechanical word groups even when words form natural phrases, creating choppy delivery without major hesitation."
    },
    diagnosticErrors: ["Poor phrasing", "Word-by-word grouping"],
    expertEvidence: [
      "\"listening\" is separated from \"to music\"",
      "\"in my\" is kept apart from the larger \"free time\" phrase",
      "\"when my work is finished\" is broken into several small groups",
      "\"visit the library\" and \"choose a new book\" are unnecessarily fragmented",
      "The student produces the words without repeated fillers or restarts"
    ],
    expertDiagnosis:
      "The dominant problem is poor phrasing rather than hesitation or excessive silence. The student reads in small mechanical groups instead of connecting words that form meaningful phrases.",
    perfectCalibrationResponse:
      "The student's dominant oral fluency problem is poor phrasing and word grouping. Natural units such as \"listening to music,\" \"free time,\" \"when my work is finished,\" and \"visit the library\" are broken into small chunks. The issue is choppy phrase-level delivery rather than simple hesitation or excessive silence.",
    coachingAdvice:
      "Teach the student to group words according to meaning. Mark complete sense groups before speaking, then practise connecting the words inside each group.",
    cefrLevel: "A1",
    topicTitle: "Hobbies & Free Time",
    good: {
      transcript:
        "I like reading books and listening to music in my free time. I usually read in the evening when my work is finished. Sometimes I listen to music while I clean my room. On weekends, I also visit the library and choose a new book to read. Reading helps me relax, and music makes simple housework more enjoyable.",
      audioDuration: "31.5 seconds",
      wordCount: 58,
      characteristics:
        "Meaningful phrase groups create a natural rhythm."
    },
    poor: {
      transcript:
        "I like / reading books / and listening / to music / in my free time. I usually read / in the evening / when my work / is finished. Sometimes I listen / to music / while I clean / my room. On weekends, I also visit / the library / and choose a new book / to read. Reading helps me relax / and music makes / simple housework more enjoyable.",
      audioDuration: "38.0 seconds",
      wordCount: 58,
      characteristics:
        "Small mechanical groups make the passage sound choppy and fragmented."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural phrase-level grouping."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "67 / 90",
      breakdownText:
        "Poor phrase grouping makes the passage sound fragmented."
    },
    errorChecklist: [
      { id: "poor-phrasing", label: "Poor phrasing", keyword: "Poor phrasing" },
      { id: "word-by-word-grouping", label: "Word-by-word grouping", keyword: "Word-by-word grouping" }
    ],
    expertAdvice:
      "Have the student underline meaningful phrases before speaking. The target is connected thought groups, not equal-length word groups."
  },

  {
    exerciseIndex: 5,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Speech Rate — Too Slow",
    learningObjective:
      "Distinguish excessively slow delivery from hesitation, pronunciation problems or normal processing pauses.",
    promptText:
      "My home is small but comfortable, with a kitchen, two bedrooms, and a quiet garden. I like the living room because it has a large window. My bedroom is next to the bathroom, and my family often eats together in the kitchen. There is also a small table outside where we sit on warm days. Our home is simple, but it feels calm and friendly.",
    promptAudio:
      "My home is small but comfortable, with a kitchen, two bedrooms, and a quiet garden. I like the living room because it has a large window. My bedroom is next to the bathroom, and my family often eats together in the kitchen. There is also a small table outside where we sit on warm days. Our home is simple, but it feels calm and friendly.",
    studentTranscript:
      "My home is small but comfortable, with a kitchen, two bedrooms, and a quiet garden. I like the living room because it has a large window. My bedroom is next to the bathroom, and my family often eats together in the kitchen. There is also a small table outside where we sit on warm days. Our home is simple, but it feels calm and friendly.",
    studentResponse: {
      audioDuration: "45.0 seconds",
      wordCount: 65,
      characteristics:
        "The student articulates the words clearly but at a deliberately slow overall rate, with only normal sentence pauses and no filler-based hesitation."
    },
    diagnosticErrors: ["Speech rate too slow"],
    expertEvidence: [
      "The full passage is delivered noticeably more slowly than the controlled natural version",
      "The words are articulated clearly and completely throughout",
      "Pauses are mostly limited to normal sentence boundaries and are secondary to the slow rate",
      "There are no significant filler words, repetition or restarting",
      "The primary issue is sustained slow delivery rather than isolated hesitation"
    ],
    expertDiagnosis:
      "The dominant problem is an excessively slow speech rate. The student produces the home-related vocabulary clearly, but the entire passage is delivered at a noticeably reduced pace. Any pauses are secondary and should not distract from the overall rate diagnosis.",
    perfectCalibrationResponse:
      "The student's main oral fluency problem is an excessively slow speech rate. The words are generally clear and accurate, but the entire passage is delivered noticeably more slowly than a controlled natural reading. Pauses are present but are not the main issue; the teacher should distinguish sustained slow rate from filler-based hesitation or word-retrieval difficulty.",
    coachingAdvice:
      "Use short timed repeated readings and gradually increase the speaking rate while keeping the words clear. The goal is continuous, comfortable speech rather than rushing or relying on long pauses between phrases.",
    cefrLevel: "A1",
    topicTitle: "My Home & Neighborhood",
    good: {
      transcript:
        "My home is small but comfortable, with a kitchen, two bedrooms, and a quiet garden. I like the living room because it has a large window. My bedroom is next to the bathroom, and my family often eats together in the kitchen. There is also a small table outside where we sit on warm days. Our home is simple, but it feels calm and friendly.",
      audioDuration: "32.5 seconds",
      wordCount: 65,
      characteristics:
        "Controlled, continuous delivery with clear articulation and comfortable pacing."
    },
    poor: {
      transcript:
        "My home is small but comfortable, with a kitchen, two bedrooms, and a quiet garden. I like the living room because it has a large window. My bedroom is next to the bathroom, and my family often eats together in the kitchen. There is also a small table outside where we sit on warm days. Our home is simple, but it feels calm and friendly.",
      audioDuration: "45.0 seconds",
      wordCount: 65,
      speechRate: 0.45,
      characteristics:
        "The words are clear and complete, but the entire passage is spoken noticeably more slowly than the controlled version. Pauses remain short and secondary to the slow overall rate."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Appropriate controlled speaking rate."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "69 / 90",
      breakdownText:
        "Excessively slow overall rate reduces natural fluency; any pauses are secondary."
    },
    errorChecklist: [
      { id: "speech-rate-too-slow", label: "Speech rate too slow", keyword: "Speech rate too slow" }
    ],
    expertAdvice:
      "Do not confuse every pause with hesitation. In this case the main problem is the overall slow rate. Use timed repeated reading to build a more continuous rhythm."
  },

  {
    exerciseIndex: 6,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Speech Rate — Too Fast",
    learningObjective:
      "Recognise when excessive speed reduces clarity, phrase boundaries and intelligibility.",
    promptText:
      "In rainy weather, I usually carry an umbrella and wear a light jacket. I also check the weather before I leave home. When the rain is heavy, I walk more carefully and take a bus if I need to travel far. I do not mind rainy days because I enjoy the cool air and the sound of rain. Sometimes I stay home and read a book.",
    promptAudio:
      "In rainy weather, I usually carry an umbrella and wear a light jacket. I also check the weather before I leave home. When the rain is heavy, I walk more carefully and take a bus if I need to travel far. I do not mind rainy days because I enjoy the cool air and the sound of rain. Sometimes I stay home and read a book.",
    studentTranscript:
      "In rainy weather, I usually carry an umbrella and wear a light jacket. I also check the weather before I leave home. When the rain is heavy, I walk more carefully and take a bus if I need to travel far. I do not mind rainy days because I enjoy the cool air and the sound of rain. Sometimes I stay home and read a book.",
    studentResponse: {
      audioDuration: "21.0 seconds",
      wordCount: 66,
      characteristics:
        "The complete weather passage is delivered at a rushed rate, with reduced separation between several words and little space for natural phrase boundaries."
    },
    diagnosticErrors: ["Speech rate too fast", "Reduced word boundaries"],
    expertEvidence: [
      "The complete passage is delivered substantially faster than the controlled target",
      "Several word boundaries are difficult to distinguish comfortably",
      "The student gives little space to natural phrase boundaries",
      "The full content is present",
      "The dominant issue is speed rather than missing content or repeated hesitation"
    ],
    expertDiagnosis:
      "The dominant fluency problem is excessive speech rate. The student produces the complete weather information, but the rushed delivery reduces clarity and makes the passage harder to process comfortably.",
    perfectCalibrationResponse:
      "The student's main oral fluency problem is an excessively fast speech rate. The complete passage is produced, but the rushed delivery reduces clear word boundaries and leaves too little space for natural phrase grouping. The teacher should explain that the goal is controlled intelligibility, not maximum speed.",
    coachingAdvice:
      "Train the student to slow down enough to preserve clear word boundaries. Practise the passage in meaningful groups and aim for a steady, comfortable pace rather than maximum speed.",
    cefrLevel: "A1",
    topicTitle: "Weather & Seasons",
    good: {
      transcript:
        "In rainy weather, I usually carry an umbrella and wear a light jacket. I also check the weather before I leave home. When the rain is heavy, I walk more carefully and take a bus if I need to travel far. I do not mind rainy days because I enjoy the cool air and the sound of rain. Sometimes I stay home and read a book.",
      audioDuration: "32.0 seconds",
      wordCount: 66,
      characteristics:
        "Clear controlled speed with natural phrase boundaries."
    },
    poor: {
      transcript:
        "In rainy weather I usually carry an umbrella and wear a light jacket. I also check the weather before I leave home. When the rain is heavy I walk more carefully and take a bus if I need to travel far. I do not mind rainy days because I enjoy the cool air and the sound of rain. Sometimes I stay home and read a book.",
      audioDuration: "21.0 seconds",
      wordCount: 66,
      speechRate: 1.50,
      characteristics:
        "Rushed delivery reduces comfortable word separation and natural phrasing."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear and controlled speaking rate."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 4,
      overall: "64 / 90",
      breakdownText:
        "Excessive speed reduces intelligibility and phrase control."
    },
    errorChecklist: [
      { id: "speech-rate-too-fast", label: "Speech rate too fast", keyword: "Speech rate too fast" },
      { id: "reduced-word-boundaries", label: "Reduced word boundaries", keyword: "Reduced word boundaries" }
    ],
    expertAdvice:
      "The target is controlled, intelligible speed. Do not reward maximum speed if the weather-related words run together."
  },

  {
  exerciseIndex: 7,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "False Starts & Self-Correction",
    learningObjective:
      "Identify unnecessary self-correction and distinguish it from a genuine content repair.",
    promptText:
      "I went to the supermarket yesterday to buy milk, bread, and some fresh fruit. I also wanted to buy eggs, but I forgot to take my shopping list. I walked through the store, checked the prices, and put the food in my basket. Then I paid at the front and carried everything home. After that, I put the food away and made a cup of tea.",
    promptAudio:
      "I went to the supermarket yesterday to buy milk, bread, and some fresh fruit. I also wanted to buy eggs, but I forgot to take my shopping list. I walked through the store, checked the prices, and put the food in my basket. Then I paid at the front and carried everything home. After that, I put the food away and made a cup of tea.",
    studentTranscript:
      "I went to the supermarket yesterday to buy milk, bread, and some fresh... fresh fruit. I also wanted to buy eggs, but I forgot to take my shopping list. I walked through the store, checked the prices, and put the food in, I mean, put the food in my basket. Then I paid at the front and carried everything home. After that, I put the food away and made a cup of tea.",
    studentResponse: {
      audioDuration: "34.5 seconds",
      wordCount: 67,
      characteristics:
        "The student begins the final item as \"fresh\" and immediately restarts it as \"fresh fruit,\" even though the first attempt was understandable."
    },
    diagnosticErrors: ["False start", "Self-correction"],
    expertEvidence: [
      "The student initially produces \"fresh\" successfully",
      "The word \"fresh\" is unnecessarily restarted",
      "The second attempt does not repair missing or incorrect information",
      "The restart interrupts forward movement in an otherwise controlled passage"
    ],
    expertDiagnosis:
      "The main problem is unnecessary self-correction. The student has already produced an acceptable word, then restarts the phrase, creating a false start and reducing fluency.",
    perfectCalibrationResponse:
      "The student's main oral fluency problem is unnecessary false starting and self-correction. The speaker begins the phrase with \"fresh\" successfully, then restarts it as \"fresh fruit\" even though no meaningful repair was needed. The teacher should identify the correction pattern as the fluency issue rather than treating the two productions as separate errors.",
    coachingAdvice:
      "Teach the student to accept a minor imperfection and continue forward. In Read Aloud, unnecessary correction can damage fluency more than the original small slip.",
    cefrLevel: "A1",
    topicTitle: "Shopping & Groceries",
    good: {
      transcript:
        "I went to the supermarket yesterday to buy milk, bread, and some fresh fruit. I also wanted to buy eggs, but I forgot to take my shopping list. I walked through the store, checked the prices, and put the food in my basket. Then I paid at the front and carried everything home. After that, I put the food away and made a cup of tea.",
      audioDuration: "32.5 seconds",
      wordCount: 66,
      characteristics:
        "Continuous shopping-related delivery without unnecessary restarting."
    },
    poor: {
      transcript:
        "I went to the supermarket yesterday to buy milk, bread, and some fresh—fresh fruit. I also wanted to buy eggs, but I forgot to take my shopping list. I walked through the store, checked the prices, and put the food in my basket. Then I paid at the front and carried everything home. After that, I put the food away and made a cup of tea.",
      audioDuration: "34.5 seconds",
      wordCount: 67,
      characteristics:
        "Unnecessary self-correction interrupts an otherwise successful shopping description."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Continuous delivery with appropriate forward movement."
    },
    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "67 / 90",
      breakdownText:
        "Unnecessary self-correction creates a false start and interrupts fluency."
    },
    errorChecklist: [
      { id: "false-start", label: "False start", keyword: "False start" },
      { id: "self-correction", label: "Self-correction", keyword: "Self-correction" }
    ],
    expertAdvice:
      "Help the student accept minor imperfections. Excessive self-monitoring can create a larger fluency problem than the original slip."
  },

 {
  exerciseIndex: 8,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Mixed Fluency Problems",
  learningObjective:
    "Recognise several fluency symptoms while identifying the most disruptive problem.",
  promptText:
    "My dog is friendly and enjoys long walks in the park. He often plays with other dogs and likes to run after a ball. I usually take him outside in the afternoon. Sometimes he stops to smell the trees, and I wait for him before we continue our walk. He is very active, but he is gentle with people. At home, he sleeps near the sofa.",
  promptAudio:
    "My dog is friendly and enjoys long walks in the park. He often plays with other dogs and likes to run after a ball. I usually take him outside in the afternoon. Sometimes he stops to smell the trees, and I wait for him before we continue our walk. He is very active, but he is gentle with people. At home, he sleeps near the sofa.",
  studentTranscript:
    "My dog... is friendly, um, enjoys long walks—long walks, in the park. He often plays with other dogs and likes to run after a ball. I usually take him outside in the afternoon. Sometimes he stops... ...to smell the trees, and I wait for him before we continue our walk. He is very active, but he is gentle with people. At home, he sleeps near the sofa.",

  studentResponse: {
    audioDuration: "38.5 seconds",
    wordCount: 68,
    characteristics:
      "The pet description contains hesitation, a filler, repetition and an unnecessary pause, with hesitation remaining the most disruptive feature."
  },

  diagnosticErrors: [
    "Hesitation",
    "Filler words",
    "Repetition",
    "Unnatural pauses"
  ],

  expertEvidence: [
    "Long hesitation after \"dog\"",
    "Filler \"um\" before \"enjoys\"",
    "Repetition of \"long walks\"",
    "Unnecessary pause before \"to smell the trees\"",
    "The student still delivers the full pet-related content"
  ],

  expertDiagnosis:
    "This is a mixed fluency profile. Hesitation is the most disruptive feature, while filler use, repetition and unnatural pausing also contribute to the breakdown in smooth delivery.",
  perfectCalibrationResponse:
    "The student has a mixed fluency profile, with hesitation as the most disruptive feature. There is a noticeable hesitation after \"dog,\" the filler \"um,\" repetition of \"long walks,\" and an unnecessary pause before \"to smell the trees.\" The teacher should recognise the multiple symptoms but prioritise hesitation rather than treating every symptom as equally severe.",
  coachingAdvice:
    "Start with the hesitation pattern and practise the passage in meaningful groups. Then reduce filler use and repetition while maintaining forward movement.",
  cefrLevel: "A1",
  topicTitle: "Pets & Animals",

  good: {
    transcript:
      "My dog is friendly and enjoys long walks in the park. He often plays with other dogs and likes to run after a ball. I usually take him outside in the afternoon. Sometimes he stops to smell the trees, and I wait for him before we continue our walk. He is very active, but he is gentle with people. At home, he sleeps near the sofa.",
    audioDuration: "33.0 seconds",
    wordCount: 66,
    characteristics:
      "Smooth pet-related delivery with natural phrase grouping."
  },

  poor: {
    transcript:
      "My dog... is friendly, um, enjoys long walks—long walks, in the park. He often plays with other dogs and likes to run after a ball. I usually take him outside in the afternoon. Sometimes he stops... ...to smell the trees, and I wait for him before we continue our walk. He is very active, but he is gentle with people. At home, he sleeps near the sofa.",
    audioDuration: "38.5 seconds",
    wordCount: 68,
    characteristics:
      "Several fluency disruptions occur within the same animal-related passage."
  },

  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Smooth and controlled connected speech."
  },

  poorScore: {
    content: 5,
    fluency: 1,
    pronunciation: 5,
    overall: "61 / 90",
    breakdownText:
      "Multiple fluency disruptions substantially reduce smoothness."
  },

  errorChecklist: [
    { id: "hesitation", label: "Hesitation", keyword: "Hesitation" },
    { id: "filler-words", label: "Filler words", keyword: "Filler words" },
    { id: "repetition", label: "Repetition", keyword: "Repetition" },
    {
      id: "unnatural-pauses",
      label: "Unnatural pauses",
      keyword: "Unnatural pauses"
    }
  ],

  expertAdvice:
    "Do not treat all symptoms as equally important. Begin with the hesitation pattern, then address filler use, repetition and phrase-level pausing."

},
  {
    exerciseIndex: 9,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Subtle Fluency Disruptions",
    learningObjective:
      "Identify minor rhythm problems without over-diagnosing an otherwise strong response.",
    promptText:
      "My favorite school subject is science because I enjoy learning how plants and animals grow. In class, we read short texts, look at pictures, and sometimes do simple experiments. I like science because it helps me understand things around me. My teacher also gives us small questions to discuss with our classmates. We often share our ideas before the lesson ends.",
    promptAudio:
      "My favorite school subject is science because I enjoy learning how plants and animals grow. In class, we read short texts, look at pictures, and sometimes do simple experiments. I like science because it helps me understand things around me. My teacher also gives us small questions to discuss with our classmates. We often share our ideas before the lesson ends.",
    studentTranscript:
      "My favorite school subject is science / because I enjoy learning how plants and animals grow. In class, we read short texts, look at pictures, and sometimes do simple experiments. I like science because it helps me understand things around me. My teacher also gives us small questions to discuss with our classmates. We often share our ideas before the lesson ends.",
    studentResponse: {
      audioDuration: "33.0 seconds",
      wordCount: 61,
      characteristics:
        "Generally strong delivery with one slightly overlong pause after \"science\" that mildly interrupts the rhythm."
    },
    diagnosticErrors: ["Subtle phrasing disruption", "Slightly segmented rhythm"],
    expertEvidence: [
      "The pause after \"science\" is slightly longer than necessary",
      "The remaining thought groups are well controlled",
      "There are no obvious fillers",
      "There are no repetitions or false starts",
      "Overall fluency remains strong"
    ],
    expertDiagnosis:
      "The student demonstrates generally strong fluency with a minor rhythm issue. This is a refinement case, not a major fluency failure.",
    perfectCalibrationResponse:
      "The student demonstrates generally strong oral fluency with only a minor rhythm issue. The pause after \"science\" is slightly longer than necessary, creating a subtle phrasing disruption, but the remaining thought groups are well controlled. This should be treated as a refinement point, not a major fluency failure.",
    coachingAdvice:
      "At an advanced calibration level, avoid treating every pause as a serious error. Focus on slightly smoother continuity while recognising that the overall delivery is already strong.",
    cefrLevel: "A1",
    topicTitle: "School Subjects",
    good: {
      transcript:
        "My favorite school subject is science because I enjoy learning how plants and animals grow. In class, we read short texts, look at pictures, and sometimes do simple experiments. I like science because it helps me understand things around me. My teacher also gives us small questions to discuss with our classmates. We often share our ideas before the lesson ends.",
      audioDuration: "31.0 seconds",
      wordCount: 61,
      characteristics:
        "Natural connected delivery with appropriate rhythm and phrase boundaries."
    },
    poor: {
      transcript:
        "My favorite school subject is science / because I enjoy learning how plants and animals grow. In class, we read short texts, look at pictures, and sometimes do simple experiments. I like science because it helps me understand things around me. My teacher also gives us small questions to discuss with our classmates. We often share our ideas before the lesson ends.",
      audioDuration: "33.0 seconds",
      wordCount: 61,
      characteristics:
        "Mostly strong delivery with one subtle rhythm interruption."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural connected speech with appropriate rhythm."
    },
    poorScore: {
      content: 5,
      fluency: 4,
      pronunciation: 5,
      overall: "84 / 90",
      breakdownText:
        "Minor rhythm and continuity issue, but overall fluency remains strong."
    },
    errorChecklist: [
      { id: "subtle-phrasing-disruption", label: "Subtle phrasing disruption", keyword: "Subtle phrasing disruption" },
      { id: "slightly-segmented-rhythm", label: "Slightly segmented rhythm", keyword: "Slightly segmented rhythm" }
    ],
    expertAdvice:
      "Do not over-diagnose this response. The student is already broadly fluent; feedback should focus on refinement rather than major correction."
  },

  {
    exerciseIndex: 10,
    totalExercises: 100,
    difficulty: "Advanced",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Near-Natural Delivery & Diagnostic Restraint",
    learningObjective:
      "Recognise when a response is sufficiently fluent and avoid inventing errors without clear evidence.",
    promptText:
      "City buses provide an affordable way for people to travel to work, school, and local shops. Many people use buses because they are easy to find in busy areas. I often take the bus when I need to go into the city. It is useful, especially when the roads are busy and parking is difficult. I also like using the bus because I can read or look out of the window.",
    promptAudio:
      "City buses provide an affordable way for people to travel to work, school, and local shops. Many people use buses because they are easy to find in busy areas. I often take the bus when I need to go into the city. It is useful, especially when the roads are busy and parking is difficult. I also like using the bus because I can read or look out of the window.",
    studentTranscript:
      "City buses provide an affordable way for people to travel to work, school, and local shops. Many people use buses because they are easy to find in busy areas. I often take the bus when I need to go into the city. It is useful, especially when the roads are busy and parking is difficult. I also like using the bus because I can read or look out of the window.",
    studentResponse: {
      audioDuration: "34.0 seconds",
      wordCount: 71,
      characteristics:
        "Natural continuous delivery with appropriate rate, phrasing and pauses. No significant fluency error is intentionally present."
    },
    diagnosticErrors: [],
    expertEvidence: [
      "The public-transport passage is delivered continuously",
      "Phrasing follows meaningful grammatical units",
      "Speech rate is controlled and natural",
      "There are no significant fillers, repetitions or restarts",
      "Minor timing variation would not be sufficient evidence of a fluency problem"
    ],
    expertDiagnosis:
      "The student demonstrates strong oral fluency. There is no significant fluency problem requiring correction. This exercise teaches diagnostic restraint: a teacher should not invent a problem simply because the task is labelled as a calibration exercise.",
    perfectCalibrationResponse:
      "The student demonstrates strong, natural oral fluency. The response is continuous, appropriately paced, and grouped into meaningful grammatical units, with no significant fillers, repetitions, restarts, or unnatural pauses. No major fluency error should be diagnosed without clear evidence; this exercise tests the teacher's ability to show appropriate diagnostic restraint.",
    coachingAdvice:
      "Do not invent errors where there is insufficient evidence. Recognise that this response is already sufficiently fluent and avoid forcing a fluency diagnosis simply because the exercise is part of calibration.",
    cefrLevel: "A1",
    topicTitle: "City Buses & Public Transport",
    good: {
      transcript:
        "City buses provide an affordable way for people to travel to work, school, and local shops. Many people use buses because they are easy to find in busy areas. I often take the bus when I need to go into the city. It is useful, especially when the roads are busy and parking is difficult. I also like using the bus because I can read or look out of the window.",
      audioDuration: "33.5 seconds",
      wordCount: 71,
      characteristics:
        "Natural continuous delivery with appropriate phrasing and controlled speed."
    },
    poor: {
      transcript:
        "City buses provide an affordable way for people to travel to work, school, and local shops. Many people use buses because they are easy to find in busy areas. I often take the bus when I need to go into the city. It is useful, especially when the roads are busy and parking is difficult. I also like using the bus because I can read or look out of the window.",
      audioDuration: "34.0 seconds",
      wordCount: 71,
      characteristics:
        "Intentionally near-natural response; there is no significant fluency error to diagnose."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural, controlled and continuous delivery."
    },
    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "89 / 90",
      breakdownText:
        "No significant fluency problem is present; teachers should avoid over-diagnosis."
    },
    errorChecklist: [],
    expertAdvice:
      "The key calibration skill here is restraint. Do not select a fluency error unless the response provides clear evidence for it."
  },

  {
    exerciseIndex: 11,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Insufficient Pausing & Run-On Delivery",

    learningObjective:
      "Recognise when insufficient sentence-boundary pausing makes otherwise clear speech sound rushed or run together.",

    promptText:
      "I usually start work at eight o'clock in the morning. I check my emails and make a short list of tasks for the day. Then I speak with my team about our plans. After lunch, I finish my main tasks and answer any questions from customers. Before I leave, I check my work and prepare for the next morning.",

    promptAudio:
      "I usually start work at eight o'clock in the morning. I check my emails and make a short list of tasks for the day. Then I speak with my team about our plans. After lunch, I finish my main tasks and answer any questions from customers. Before I leave, I check my work and prepare for the next morning.",

    studentTranscript:
      "I usually start work at eight o'clock in the morning I check my emails and make a short list of tasks for the day then I speak with my team about our plans after lunch I finish my main tasks and answer any questions from customers before I leave I check my work and prepare for the next morning.",

    studentResponse: {
      audioDuration: "32.0 seconds",
      wordCount: 65,
      characteristics:
        "The student maintains a generally controlled overall rate and clear words, but uses too little separation between sentence ideas, creating a run-on delivery."
    },

    diagnosticErrors: [
      "Insufficient pausing",
      "Run-on delivery"
    ],

    expertEvidence: [
      "Sentence boundaries receive little or no audible pause",
      "Several complete ideas run directly into the next sentence",
      "The overall speed is not the primary problem",
      "The student does not rely on fillers, repetition or restarting",
      "The reduced separation makes the response harder to process comfortably"
    ],

    expertDiagnosis:
      "The main oral fluency problem is insufficient pausing between complete sentence ideas. The student is not necessarily speaking too fast, but the lack of natural sentence-boundary pauses creates a run-on delivery and reduces the clarity of the overall rhythm.",

    perfectCalibrationResponse:
      "The student's main oral fluency issue is insufficient pausing between sentence-level ideas. The words are generally clear and the overall rate is controlled, but several complete sentences run directly into the next with little separation. This creates a run-on delivery. The teacher should distinguish this from an excessively fast speech rate because the main problem is missing natural pauses, not sustained speed.",

    coachingAdvice:
      "Practise adding brief, purposeful pauses at complete sentence boundaries without slowing the words themselves. The goal is clearer separation of ideas while maintaining a comfortable overall speaking rate.",

    cefrLevel: "A1",
    topicTitle: "Workplace Daily Tasks",

    good: {
      transcript:
        "I usually start work at eight o'clock in the morning. I check my emails and make a short list of tasks for the day. Then I speak with my team about our plans. After lunch, I finish my main tasks and answer any questions from customers. Before I leave, I check my work and prepare for the next morning.",

      audioDuration: "32.0 seconds",
      wordCount: 65,

      characteristics:
        "Natural sentence-boundary pauses with clear continuous workplace-related delivery."
    },

    poor: {
      transcript:
        "I usually start work at eight o'clock in the morning I check my emails and make a short list of tasks for the day then I speak with my team about our plans after lunch I finish my main tasks and answer any questions from customers before I leave I check my work and prepare for the next morning.",

      audioDuration: "31.0 seconds",
      wordCount: 65,

      characteristics:
        "Controlled overall rate but insufficient sentence-boundary pauses create a run-on rhythm."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear continuous delivery with natural sentence-level pauses."
    },

    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "69 / 90",
      breakdownText:
        "Insufficient sentence-boundary pauses create run-on delivery and reduce natural fluency."
    },

    errorChecklist: [
      {
        id: "insufficient-pausing",
        label: "Insufficient pausing",
        keyword: "Insufficient pausing"
      },
      {
        id: "run-on-delivery",
        label: "Run-on delivery",
        keyword: "Run-on delivery"
      }
    ],

    expertAdvice:
      "Do not label this response as simply too fast. The key issue is the lack of natural pauses between complete sentence ideas. Encourage brief sentence-boundary pauses while keeping the overall speaking rate comfortable."
  },

 {
  exerciseIndex: 12,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Excessive Sentence-Boundary Pausing",
  learningObjective:
    "Recognise when overly long pauses between complete sentences interrupt otherwise clear and appropriately paced delivery.",
  promptText:
    "My family usually celebrates birthdays at home. We make a simple cake and prepare some food for everyone. In the afternoon, our relatives arrive and we sit together at the table. We sing a birthday song and give the birthday person a small present. After dinner, we talk and take some photos together.",
  promptAudio:
    "My family usually celebrates birthdays at home. We make a simple cake and prepare some food for everyone. In the afternoon, our relatives arrive and we sit together at the table. We sing a birthday song and give the birthday person a small present. After dinner, we talk and take some photos together.",
  studentTranscript:
    "My family usually celebrates birthdays at home. ... ... We make a simple cake and prepare some food for everyone. ... ... In the afternoon, our relatives arrive and we sit together at the table. ... ... We sing a birthday song and give the birthday person a small present. ... ... After dinner, we talk and take some photos together.",
  studentResponse: {
    audioDuration: "35.5 seconds",
    wordCount: 53,
    characteristics:
      "The student speaks clearly at a generally appropriate overall rate, but uses noticeably long pauses after several complete sentences, creating a segmented delivery."
  },
  diagnosticErrors: [
    "Excessive pausing",
    "Segmented delivery"
  ],
  expertEvidence: [
    "Noticeably long pauses occur after several complete sentences",
    "The pauses occur mainly at sentence boundaries rather than inside grammatical phrases",
    "The words themselves are produced clearly",
    "The overall speaking rate is not excessively slow",
    "There are no significant fillers, repetitions or false starts",
    "The repeated long pauses interrupt the continuity of the response"
  ],
  expertDiagnosis:
    "The main oral fluency problem is excessive sentence-boundary pausing. The student produces the words clearly and maintains a generally appropriate speaking rate, but repeated long pauses between complete sentences make the response sound segmented and less continuous.",
  perfectCalibrationResponse:
    "The student's main oral fluency issue is excessive pausing at sentence boundaries. The words are generally clear and the overall speaking rate is appropriate, but several sentences are followed by noticeably long pauses before the next idea begins. This creates a segmented delivery. The teacher should distinguish this from an excessively slow speech rate because the main problem is the repeated long pauses rather than the speed of the words themselves.",
  coachingAdvice:
    "Practise reducing the length of pauses between complete sentences while keeping natural sentence boundaries. The student should maintain a smooth connection between ideas rather than stopping for too long after each sentence.",
  cefrLevel: "A1",
  topicTitle: "Birthday Celebrations",
  good: {
    transcript:
      "My family usually celebrates birthdays at home. We make a simple cake and prepare some food for everyone. In the afternoon, our relatives arrive and we sit together at the table. We sing a birthday song and give the birthday person a small present. After dinner, we talk and take some photos together.",
    audioDuration: "30.5 seconds",
    wordCount: 53,
    characteristics:
      "Clear, continuous birthday-related delivery with natural sentence-boundary pauses."
  },
  poor: {
    transcript:
      "My family usually celebrates birthdays at home. ... ... We make a simple cake and prepare some food for everyone. ... ... In the afternoon, our relatives arrive and we sit together at the table. ... ... We sing a birthday song and give the birthday person a small present. ... ... After dinner, we talk and take some photos together.",
    audioDuration: "35.5 seconds",
    wordCount: 53,
    characteristics:
      "Clear and appropriately paced words, but repeated long sentence-boundary pauses make the response sound segmented."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear continuous delivery with natural sentence-boundary pauses."
  },
  poorScore: {
    content: 5,
    fluency: 2,
    pronunciation: 5,
    overall: "69 / 90",
    breakdownText:
      "Repeated long pauses between sentences interrupt continuity and create segmented delivery."
  },
  errorChecklist: [
    {
      id: "excessive-pausing",
      label: "Excessive pausing",
      keyword: "Excessive pausing"
    },
    {
      id: "segmented-delivery",
      label: "Segmented delivery",
      keyword: "Segmented delivery"
    }
  ],
  expertAdvice:
    "Do not label this response as simply too slow. The words are produced at a generally appropriate rate. The key problem is the repeated length of the pauses between sentences, which breaks the continuity of the response."
},

 {
    exerciseIndex: 13,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Substitution & Content Accuracy",
    learningObjective:
      "Identify specific words that have been replaced or misread and recognise that word substitutions in Read Aloud affect Content accuracy rather than automatically indicating a pronunciation or fluency problem.",
    promptText:
      "Many people enjoy sports at the weekend. I usually play football with my friends on Saturday morning. In the afternoon, I sometimes watch basketball on television. On Sunday, my family goes to the park, where we walk, play games, and enjoy the fresh air.",
    promptAudio:
      "Many people enjoy sports at the weekend. I usually play football with my friends on Saturday morning. In the afternoon, I sometimes watch basketball on television. On Sunday, my family goes to the park, where we walk, play games, and enjoy the fresh air.",
    studentTranscript:
      "Many people enjoy sports at the weekend. I usually play football with my friends on Sunday morning. In the afternoon, I sometimes watch baseball on television. On Sunday, my family goes to the park, where we walk, play games, and enjoy the fresh air.",
    studentResponse: {
      audioDuration: "23.5 seconds",
      wordCount: 51,
      characteristics:
        "Generally clear and appropriately paced delivery, but two individual words are replaced with different words, reducing Content accuracy."
    },
    diagnosticErrors: [
      "Word substitution",
      "Content accuracy"
    ],
    expertEvidence: [
      "\"Saturday\" is replaced with \"Sunday\"",
      "\"basketball\" is replaced with \"baseball\"",
      "The substitutions are individual word-level changes rather than hesitations or restarts",
      "Overall speech rate remains appropriate",
      "The response is generally continuous without significant fillers or unnatural pauses",
      "The incorrect words are clearly spoken, so the main calibration issue is not automatically a pronunciation problem",
      "The word replacements reduce the accuracy of the student's Read Aloud response"
    ],
    expertDiagnosis:
      "The main problem is Content accuracy. The student reads most of the passage clearly and at an appropriate rate, but replaces two words from the printed text: \"Saturday\" becomes \"Sunday\" and \"basketball\" becomes \"baseball\". These are word substitutions that negatively affect Content in PTE Read Aloud. The teacher should not automatically diagnose the response as a pronunciation or fluency problem simply because the wrong words are clearly spoken.",
    perfectCalibrationResponse:
      "The student's main problem is Content accuracy. The response is generally clear, continuous and appropriately paced, with no significant hesitation or pausing problem. However, two words from the printed passage are replaced: \"Saturday\" is read as \"Sunday\" and \"basketball\" is read as \"baseball\". These word substitutions affect the Content score in PTE Read Aloud. The teacher should distinguish this from a pronunciation or fluency problem because the substituted words are produced clearly and the overall delivery remains fluent.",
    coachingAdvice:
      "Teach the student to check the exact printed words carefully while reading rather than substituting familiar or related words. When assessing the response, identify the specific replacement and recognise it as a Content accuracy problem unless there is separate evidence of a pronunciation or fluency issue.",
    cefrLevel: "A1",
    topicTitle: "Weekend Sports",
    good: {
      transcript:
        "Many people enjoy sports at the weekend. I usually play football with my friends on Saturday morning. In the afternoon, I sometimes watch basketball on television. On Sunday, my family goes to the park, where we walk, play games, and enjoy the fresh air.",
      audioDuration: "22.5 seconds",
      wordCount: 51,
      characteristics:
        "Clear and accurate reading with appropriate pace and continuous delivery."
    },
    poor: {
      transcript:
        "Many people enjoy sports at the weekend. I usually play football with my friends on Sunday morning. In the afternoon, I sometimes watch baseball on television. On Sunday, my family goes to the park, where we walk, play games, and enjoy the fresh air.",
      audioDuration: "23.5 seconds",
      wordCount: 51,
      characteristics:
        "Generally fluent delivery with two clear word substitutions that reduce Content accuracy."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear, accurate and appropriately paced reading."
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "84 / 90",
      breakdownText:
        "Generally fluent and clearly spoken, but two word substitutions reduce Content accuracy."
    },
    errorChecklist: [
      {
        id: "word-substitution",
        label: "Word substitution",
        keyword: "Word substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],
    expertAdvice:
      "Do not diagnose this simply as poor pronunciation or poor fluency. The student maintains an appropriate rate and continuous delivery, and the substituted words are clearly spoken. The key issue is that two words from the printed passage have been replaced, which affects Content in PTE Read Aloud."
  },

   {
    exerciseIndex: 14,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Omission & Insertion",
    learningObjective:
      "Identify words that have been omitted or inserted in a Read Aloud response and recognise that these changes affect Content accuracy even when pronunciation and oral fluency remain strong.",
    promptText:
      "People wear different clothes for different activities. I usually wear a T-shirt and shorts when I play sports. At school, I wear comfortable trousers and a simple shirt. In cold weather, I put on a jacket and warm shoes. My favourite clothes are simple because they are easy to wear.",
    promptAudio:
      "People wear different clothes for different activities. I usually wear a T-shirt and shorts when I play sports. At school, I wear comfortable trousers and a simple shirt. In cold weather, I put on a jacket and warm shoes. My favourite clothes are simple because they are easy to wear.",
    studentTranscript:
      "People wear different clothes for different activities. I wear a T-shirt and shorts when I play sports. At school, I wear comfortable trousers and a simple new shirt. In cold weather, I put on a jacket and warm shoes. My favourite clothes are simple because they are easy to wear.",
    studentResponse: {
      audioDuration: "23.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally clear and appropriately paced delivery, but one word is omitted and one additional word is inserted, reducing Content accuracy."
    },
    diagnosticErrors: [
      "Word omission",
      "Word insertion",
      "Content accuracy"
    ],
    expertEvidence: [
      "\"usually\" is omitted before \"wear\"",
      "\"new\" is inserted before \"shirt\"",
      "The omission and insertion occur at individual word level rather than through hesitation or restarting",
      "Overall speech rate remains appropriate",
      "The response is generally continuous without significant fillers or unnatural pauses",
      "The substituted wording is clearly spoken, so the main calibration issue is Content rather than pronunciation",
      "The omission and insertion reduce the accuracy of the student's Read Aloud response"
    ],
    expertDiagnosis:
      "The main problem is Content accuracy. The student reads most of the passage clearly and at an appropriate rate, but makes two word-level Content errors: \"usually\" is omitted and \"new\" is inserted before \"shirt\". These changes affect the accuracy of the Read Aloud response. The teacher should not diagnose the response as a fluency or pronunciation problem because the delivery remains clear, continuous and appropriately paced.",
    perfectCalibrationResponse:
      "The student's main problem is Content accuracy. The response is generally clear, continuous and appropriately paced, with no significant hesitation or pausing problem. However, two Content errors occur: the word \"usually\" is omitted, and the word \"new\" is inserted before \"shirt\". These word omissions and insertions affect the Content score in PTE Read Aloud. The teacher should distinguish these errors from pronunciation or oral fluency problems because the words are clearly spoken and the overall delivery remains fluent.",
    coachingAdvice:
      "Teach the student to follow the printed text exactly and avoid skipping small words or adding extra words. During Read Aloud practice, compare the spoken response with the original text to identify omissions and insertions while continuing to maintain natural fluency.",
    cefrLevel: "A1",
    topicTitle: "Clothes & Everyday Fashion",
    good: {
      transcript:
        "People wear different clothes for different activities. I usually wear a T-shirt and shorts when I play sports. At school, I wear comfortable trousers and a simple shirt. In cold weather, I put on a jacket and warm shoes. My favourite clothes are simple because they are easy to wear.",
      audioDuration: "22.5 seconds",
      wordCount: 50,
      characteristics:
        "Clear and accurate reading with appropriate pace and continuous delivery."
    },
    poor: {
      transcript:
        "People wear different clothes for different activities. I wear a T-shirt and shorts when I play sports. At school, I wear comfortable trousers and a simple new shirt. In cold weather, I put on a jacket and warm shoes. My favourite clothes are simple because they are easy to wear.",
      audioDuration: "23.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally fluent and clearly spoken, but one word is omitted and one additional word is inserted, reducing Content accuracy."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear, accurate and appropriately paced reading."
    },
    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "84 / 90",
      breakdownText:
        "Generally fluent and clearly spoken, but one omission and one insertion reduce Content accuracy."
    },
    errorChecklist: [
      {
        id: "word-omission",
        label: "Word omission",
        keyword: "Word omission"
      },
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      }
    ],
    expertAdvice:
      "Do not diagnose this simply as poor pronunciation or poor fluency. The student maintains an appropriate rate and continuous delivery, and the words are clearly spoken. The key issue is that one word from the printed passage has been omitted and an additional word has been inserted, both of which affect Content in PTE Read Aloud."
  },

  {
    exerciseIndex: 15,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Pronunciation",
    diagnosticArea: "TH Sound Pronunciation",
    learningObjective:
      "Identify a clear pronunciation problem involving the English /th/ sound and distinguish a specific speech-sound error from problems with oral fluency or speech rate.",
    promptText:
      "There are three main colors on the school poster. The first color is red, the second is blue, and the third is yellow. I like these colors because they are bright and easy to see. Three students helped us make the poster.",
    promptAudio:
      "There are three main colors on the school poster. The first color is red, the second is blue, and the third is yellow. I like these colors because they are bright and easy to see. Three students helped us make the poster.",
    studentTranscript:
      "There are tree main colors on the school poster. The first color is red, the second is blue, and the third is yellow. I like these colors because they are bright and easy to see. Tree students helped us make the poster.",
    studentResponse: {
      audioDuration: "23.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally clear and appropriately paced delivery, but the /th/ sound in 'three' is repeatedly produced as a /t/ sound, creating a noticeable pronunciation problem."
    },
    diagnosticErrors: [
      "TH sound pronunciation",
      "Consonant substitution",
      "Pronunciation accuracy"
    ],
    expertEvidence: [
      "\"three\" is repeatedly pronounced with a /t/ sound, producing \"tree\"",
      "The /th/ pronunciation problem occurs more than once in the response",
      "The rest of the response is generally clear and understandable",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The pronunciation issue is concentrated on a specific consonant sound rather than the student's overall fluency",
      "The repeated /th/ sound error is the main pronunciation feature requiring attention"
    ],
    expertDiagnosis:
      "The main problem is pronunciation accuracy, specifically the production of the /th/ sound. The student repeatedly produces the /th/ sound in \"three\" as a /t/ sound, resulting in \"tree.\" The response remains generally clear, continuous and appropriately paced, so this should not be diagnosed as a speech-rate or oral-fluency problem. The teacher should focus on the specific consonant sound and provide pronunciation-focused feedback.",
    perfectCalibrationResponse:
      "The student's main issue is pronunciation, specifically the /th/ sound in the word \"three.\" The sound is repeatedly produced more like a /t/, so \"three\" sounds like \"tree.\" The response is otherwise clear, continuous and appropriately paced, with no significant hesitation or pausing problem. The teacher should therefore focus on the specific consonant pronunciation rather than diagnosing poor fluency or an inappropriate speaking rate.",
    coachingAdvice:
      "Practise the /th/ sound by placing the tongue lightly between the teeth and allowing air to pass through before moving into the rest of the word. Practise words such as \"three,\" \"think,\" \"Thursday\" and \"thirty\" slowly at first, then use them in short sentences while maintaining natural fluency.",
    cefrLevel: "A1",
    topicTitle: "Colors & Numbers",
    good: {
      transcript:
        "There are three main colors on the school poster. The first color is red, the second is blue, and the third is yellow. I like these colors because they are bright and easy to see. Three students helped us make the poster.",
      audioDuration: "22.5 seconds",
      wordCount: 50,
      characteristics:
        "Clear pronunciation of the /th/ sound with appropriate pace and continuous delivery."
    },
    poor: {
      transcript:
        "There are tree main colors on the school poster. The first color is red, the second is blue, and the third is yellow. I like these colors because they are bright and easy to see. Tree students helped us make the poster.",
      audioDuration: "23.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally clear and appropriately paced delivery, but the /th/ sound in 'three' is repeatedly produced as a /t/ sound."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear pronunciation with appropriate pace and continuous delivery."
    },
    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "Generally fluent and clear, but repeated /th/ sound errors reduce pronunciation accuracy."
    },
    errorChecklist: [
      {
        id: "th-sound-pronunciation",
        label: "TH sound pronunciation",
        keyword: "TH sound pronunciation"
      },
      {
        id: "consonant-substitution",
        label: "Consonant substitution",
        keyword: "Consonant substitution"
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy"
      }
    ],
    expertAdvice:
      "Do not diagnose this simply as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus on the repeated /th/ sound problem in words such as \"three\" and provide specific pronunciation coaching."
  },
  
  {
    exerciseIndex: 16,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Pronunciation",
    diagnosticArea: "Vowel-Like Consonant Pronunciation",
    learningObjective:
      "Identify a specific consonant pronunciation problem involving the /v/ sound and distinguish it from problems with oral fluency, speech rate or Content accuracy.",
    promptText:
      "Every week, I visit my grandparents on Friday afternoon. We usually have tea together and talk about our plans for the weekend. On Saturday, I help them with some jobs around the house. I enjoy visiting them because we always have a good time.",
    promptAudio:
      "Every week, I visit my grandparents on Friday afternoon. We usually have tea together and talk about our plans for the weekend. On Saturday, I help them with some jobs around the house. I enjoy visiting them because we always have a good time.",
    studentTranscript:
      "Every week, I wisit my grandparents on Friday afternoon. We usually have tea together and talk about our plans for the weekend. On Saturday, I help them with some jobs around the house. I enjoy wisiting them because we always have a good time.",
    studentResponse: {
      audioDuration: "23.5 seconds",
      wordCount: 52,
      characteristics:
        "Generally clear and appropriately paced delivery, but the /v/ sound in 'visit' is repeatedly produced more like a /w/ sound."
    },
    diagnosticErrors: [
      "V sound pronunciation",
      "Consonant substitution",
      "Pronunciation accuracy"
    ],
    expertEvidence: [
      "\"visit\" is repeatedly pronounced more like \"wisit\"",
      "The /v/ sound is replaced by a /w/-like sound in more than one occurrence",
      "The pronunciation problem occurs at a specific consonant sound rather than across the whole response",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The student's Content remains substantially intact",
      "The main issue requiring attention is the production of the /v/ sound"
    ],
    expertDiagnosis:
      "The main problem is pronunciation accuracy, specifically the production of the /v/ sound. The student repeatedly produces the initial /v/ sound in \"visit\" more like a /w/ sound. The response remains generally clear, continuous and appropriately paced, so this should not be diagnosed as an oral-fluency or speech-rate problem. The teacher should focus on the specific consonant sound and provide targeted pronunciation coaching.",
    perfectCalibrationResponse:
      "The student's main issue is pronunciation, specifically the /v/ sound in the word \"visit.\" The sound is repeatedly produced more like a /w/ sound, making \"visit\" sound like \"wisit.\" The response is otherwise clear, continuous and appropriately paced, with no significant hesitation or pausing problem. The teacher should therefore focus on the specific consonant pronunciation rather than diagnosing poor fluency or an inappropriate speaking rate.",
    coachingAdvice:
      "Practise the /v/ sound by placing the upper teeth lightly against the lower lip and allowing the air to pass through while the vocal cords vibrate. Contrast /v/ and /w/ in words such as \"visit,\" \"very,\" \"van\" and \"west,\" then practise the words in short sentences while maintaining natural fluency.",
    cefrLevel: "A1",
    topicTitle: "Time & Days of the Week",
    good: {
      transcript:
        "Every week, I visit my grandparents on Friday afternoon. We usually have tea together and talk about our plans for the weekend. On Saturday, I help them with some jobs around the house. I enjoy visiting them because we always have a good time.",
      audioDuration: "22.5 seconds",
      wordCount: 52,
      characteristics:
        "Clear pronunciation of the /v/ sound with appropriate pace and continuous delivery."
    },
    poor: {
      transcript:
        "Every week, I wisit my grandparents on Friday afternoon. We usually have tea together and talk about our plans for the weekend. On Saturday, I help them with some jobs around the house. I enjoy wisiting them because we always have a good time.",
      audioDuration: "23.5 seconds",
      wordCount: 52,
      characteristics:
        "Generally clear and appropriately paced delivery, but the /v/ sound in 'visit' is repeatedly produced more like a /w/ sound."
    },
    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear pronunciation with appropriate pace and continuous delivery."
    },
    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "Generally fluent and clear, but repeated /v/ sound errors reduce pronunciation accuracy."
    },
    errorChecklist: [
      {
        id: "v-sound-pronunciation",
        label: "V sound pronunciation",
        keyword: "V sound pronunciation"
      },
      {
        id: "consonant-substitution",
        label: "Consonant substitution",
        keyword: "Consonant substitution"
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy"
      }
    ],
    expertAdvice:
      "Do not diagnose this simply as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus on the repeated /v/ sound problem in words such as \"visit\" and provide specific pronunciation coaching."
  },

     {
    exerciseIndex: 17,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Pronunciation",
    diagnosticArea: "TH Sound Pronunciation",

    learningObjective:
      "Identify a specific /th/ sound pronunciation problem and distinguish it from problems with oral fluency, speech rate or Content accuracy.",

    promptText:
      "I think healthy food is important for everyone. I usually eat fruit and vegetables every day, and I drink plenty of water. At home, my family tries to cook simple meals with fresh ingredients. We also enjoy walking together because it helps us stay active and healthy.",

    promptAudio:
      "I think healthy food is important for everyone. I usually eat fruit and vegetables every day, and I drink plenty of water. At home, my family tries to cook simple meals with fresh ingredients. We also enjoy walking together because it helps us stay active and healthy.",

    studentTranscript:
      "I tink healthy food is important for everyone. I usually eat fruit and vegetables every day, and I drink plenty of water. At home, my family tries to cook simple meals with fresh ingredients. We also enjoy walking together because it helps us stay active and healthy.",

    studentResponse: {
      audioDuration: "22.5 seconds",
      wordCount: 46,
      characteristics:
        "Generally clear and appropriately paced delivery, but the initial /th/ sound in 'think' is repeatedly produced more like a /t/ sound."
    },

    diagnosticErrors: [
      "TH sound pronunciation",
      "Consonant substitution",
      "Pronunciation accuracy"
    ],

    expertEvidence: [
      "\"think\" is pronounced more like \"tink\"",
      "The initial /th/ sound is replaced by a /t/-like sound",
      "The pronunciation problem occurs at a specific consonant sound rather than across the whole response",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The student's Content remains substantially intact",
      "The main issue requiring attention is the production of the /th/ sound"
    ],

    expertDiagnosis:
      "The main problem is pronunciation, specifically the production of the /th/ sound. The student produces the initial /th/ sound in \"think\" more like a /t/ sound, making the word sound like \"tink.\" The response remains generally clear, continuous and appropriately paced, so this should not be diagnosed as an oral-fluency or speech-rate problem. The teacher should focus on the specific consonant sound and provide targeted pronunciation coaching.",

    perfectCalibrationResponse:
      "The student's main issue is pronunciation, specifically the /th/ sound in the word \"think.\" The /th/ sound is produced more like a /t/ sound, making \"think\" sound like \"tink.\" The response is otherwise clear, continuous and appropriately paced, with no significant hesitation or pausing problem. The teacher should therefore focus on the specific consonant pronunciation rather than diagnosing poor fluency or an inappropriate speaking rate.",

    coachingAdvice:
      "Practise the /th/ sound by placing the tongue lightly between or just behind the upper and lower teeth and allowing air to pass through. Contrast /th/ and /t/ in words such as \"think\" and \"tink,\" then practise the target sound in short phrases and sentences while maintaining natural fluency.",

    cefrLevel: "A1",
    topicTitle: "Food & Drinks",

    good: {
      transcript:
        "I think healthy food is important for everyone. I usually eat fruit and vegetables every day, and I drink plenty of water. At home, my family tries to cook simple meals with fresh ingredients. We also enjoy walking together because it helps us stay active and healthy.",
      audioDuration: "21.5 seconds",
      wordCount: 46,
      characteristics:
        "Clear pronunciation of the /th/ sound with appropriate pace and continuous delivery."
    },

    poor: {
      transcript:
        "I tink healthy food is important for everyone. I usually eat fruit and vegetables every day, and I drink plenty of water. At home, my family tries to cook simple meals with fresh ingredients. We also enjoy walking together because it helps us stay active and healthy.",
      audioDuration: "22.5 seconds",
      wordCount: 46,
      characteristics:
        "Generally clear and appropriately paced delivery, but the /th/ sound in 'think' is produced more like a /t/ sound."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear pronunciation with appropriate pace and continuous delivery."
    },

    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "Generally fluent and clear, but the specific /th/ sound error reduces pronunciation performance."
    },

    errorChecklist: [
      {
        id: "th-sound-pronunciation",
        label: "TH sound pronunciation",
        keyword: "TH sound pronunciation"
      },
      {
        id: "consonant-substitution",
        label: "Consonant substitution",
        keyword: "Consonant substitution"
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy"
      }
    ],

    expertAdvice:
      "Do not diagnose this simply as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus on the specific /th/ sound problem in the word \"think\" and provide targeted pronunciation coaching."
  },

   {
    exerciseIndex: 18,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Insertion & Content Accuracy",

    learningObjective:
      "Identify a specific inserted word in a Read Aloud response and distinguish a Content error from pronunciation or oral-fluency problems.",

    promptText:
      "I often visit the city park near my home after work. I walk along the paths, sit on a bench, and watch children play. At weekends, I sometimes meet my friends there and we talk while we enjoy the fresh air. The park is a simple place, but I like spending time there.",

    promptAudio:
      "I often visit the city park near my home after work. I walk along the paths, sit on a bench, and watch children play. At weekends, I sometimes meet my friends there and we talk while we enjoy the fresh air. The park is a simple place, but I like spending time there.",

    studentTranscript:
      "I often visit the city park near my home after work. I walk along the paths, sit on a bench, and watch children play. At weekends, I sometimes meet my friends there and we talk together while we enjoy the fresh air. The park is a simple place, but I like spending time there.",

    studentResponse: {
      audioDuration: "23.0 seconds",
      wordCount: 54,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'together' after 'talk'."
    },

    diagnosticErrors: [
      "Word insertion",
      "Content accuracy",
      "Extra word"
    ],

    expertEvidence: [
      "The prompt says 'we talk while we enjoy the fresh air'",
      "The student says 'we talk together while we enjoy the fresh air'",
      "The word 'together' is inserted into the response even though it is not present in the prompt",
      "The insertion occurs once and is clearly identifiable",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The main score-impacting issue is the inserted word, not pronunciation or oral fluency"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy. The student inserts the word \"together\" after \"talk,\" although that word does not appear in the prompt. This is a specific word insertion and should be treated as a Content error. The response is otherwise clear, continuous and appropriately paced, so the teacher should not diagnose this as an oral-fluency or pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they insert the extra word \"together\" after \"talk.\" The prompt says \"we talk while we enjoy the fresh air,\" but the student says \"we talk together while we enjoy the fresh air.\" The response is otherwise clear, continuous and appropriately paced, so the teacher should focus on the word insertion rather than diagnosing a pronunciation or fluency problem.",

    coachingAdvice:
      "When marking Read Aloud, compare the student's spoken words directly with the prompt and listen for additions as well as omissions and replacements. In this case, the extra word \"together\" is a Content error even though the resulting sentence remains grammatical and understandable. Avoid overlooking small insertions simply because they do not affect the meaning of the sentence.",

    cefrLevel: "A1",
    topicTitle: "City Parks & Playgrounds",

    good: {
      transcript:
        "I often visit the city park near my home after work. I walk along the paths, sit on a bench, and watch children play. At weekends, I sometimes meet my friends there and we talk while we enjoy the fresh air. The park is a simple place, but I like spending time there.",
      audioDuration: "22.5 seconds",
      wordCount: 53,
      characteristics:
        "Clear and appropriately paced delivery with all prompt words reproduced without additions."
    },

    poor: {
      transcript:
        "I often visit the city park near my home after work. I walk along the paths, sit on a bench, and watch children play. At weekends, I sometimes meet my friends there and we talk together while we enjoy the fresh air. The park is a simple place, but I like spending time there.",
      audioDuration: "23.0 seconds",
      wordCount: 54,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'together' after 'talk'."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear pronunciation and appropriate continuous delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One inserted word creates a Content error; pronunciation and oral fluency remain strong."
    },

    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "extra-word",
        label: "Extra word",
        keyword: "Extra word"
      }
    ],

    expertAdvice:
      "Do not overlook a small insertion simply because the resulting sentence remains grammatical or understandable. Compare the student's words directly with the prompt and identify the extra word as a Content error. Do not diagnose poor fluency or pronunciation when the delivery itself is clear and continuous."
  },

  {
    exerciseIndex: 19,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Omission & Content Accuracy",

    learningObjective:
      "Identify a specific omitted word in a Read Aloud response and distinguish a Content error from pronunciation or oral-fluency problems.",

    promptText:
      "I enjoy listening to music when I have free time. I usually listen to songs on my phone while I walk in the park. At home, I sometimes play quiet music while I study or relax. Music helps me feel calm after a busy day.",

    promptAudio:
      "I enjoy listening to music when I have free time. I usually listen to songs on my phone while I walk in the park. At home, I sometimes play quiet music while I study or relax. Music helps me feel calm after a busy day.",

    studentTranscript:
      "I enjoy listening to music when I have free time. I usually listen to songs on my phone while I walk in the park. At home, I play quiet music while I study or relax. Music helps me feel calm after a busy day.",

    studentResponse: {
      audioDuration: "19.5 seconds",
      wordCount: 44,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student omits the word 'sometimes' before 'play'."
    },

    diagnosticErrors: [
      "Word omission",
      "Content accuracy",
      "Missing word"
    ],

    expertEvidence: [
      "The prompt says 'At home, I sometimes play quiet music while I study or relax'",
      "The student says 'At home, I play quiet music while I study or relax'",
      "The word 'sometimes' is omitted from the response",
      "The omission occurs once and is clearly identifiable",
      "The remaining words are reproduced in the correct sequence",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The main score-impacting issue is the omitted word, not pronunciation or oral fluency"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy. The student omits the word \"sometimes\" from the sentence \"At home, I sometimes play quiet music while I study or relax.\" This is a specific word omission and should be treated as a Content error. The response is otherwise clear, continuous and appropriately paced, so the teacher should not diagnose this as an oral-fluency or pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they omit the word \"sometimes.\" The prompt says \"At home, I sometimes play quiet music while I study or relax,\" but the student says \"At home, I play quiet music while I study or relax.\" The response is otherwise clear, continuous and appropriately paced, so the teacher should focus on the word omission rather than diagnosing a pronunciation or fluency problem.",

    coachingAdvice:
      "When marking Read Aloud, compare the student's spoken words directly with the prompt and listen for omissions as well as insertions and replacements. In this case, the missing word \"sometimes\" is a Content error even though the sentence remains grammatical and understandable. Encourage the student to maintain attention to every word in the prompt while keeping their natural speaking rate.",

    cefrLevel: "A1",
    topicTitle: "Listening to Music",

    good: {
      transcript:
        "I enjoy listening to music when I have free time. I usually listen to songs on my phone while I walk in the park. At home, I sometimes play quiet music while I study or relax. Music helps me feel calm after a busy day.",
      audioDuration: "20.0 seconds",
      wordCount: 45,
      characteristics:
        "Clear and appropriately paced delivery with all prompt words reproduced in the correct sequence."
    },

    poor: {
      transcript:
        "I enjoy listening to music when I have free time. I usually listen to songs on my phone while I walk in the park. At home, I play quiet music while I study or relax. Music helps me feel calm after a busy day.",
      audioDuration: "19.5 seconds",
      wordCount: 44,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student omits the word 'sometimes' before 'play'."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear pronunciation and appropriate continuous delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One omitted word creates a Content error; pronunciation and oral fluency remain strong."
    },

    errorChecklist: [
      {
        id: "word-omission",
        label: "Word omission",
        keyword: "Word omission"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "missing-word",
        label: "Missing word",
        keyword: "Missing word"
      }
    ],

    expertAdvice:
      "Do not overlook a small omission simply because the resulting sentence remains grammatical or understandable. Compare the student's words directly with the prompt and identify the missing word as a Content error. Do not diagnose poor fluency or pronunciation when the delivery itself is clear and continuous."
  },

   {
    exerciseIndex: 20,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Substitution & Content Accuracy",

    learningObjective:
      "Identify a specific substituted word in a Read Aloud response and distinguish a Content error from pronunciation or oral-fluency problems.",

    promptText:
      "I use my smartphone every day to call my family and check messages. At home, I often use my laptop to study and watch videos. I also take photos when I go out with my friends. These devices help me stay connected and organized.",

    promptAudio:
      "I use my smartphone every day to call my family and check messages. At home, I often use my laptop to study and watch videos. I also take photos when I go out with my friends. These devices help me stay connected and organized.",

    studentTranscript:
      "I use my smartphone every day to call my family and check messages. At home, I often use my tablet to study and watch videos. I also take photos when I go out with my friends. These devices help me stay connected and organized.",

    studentResponse: {
      audioDuration: "20.5 seconds",
      wordCount: 45,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student substitutes 'tablet' for the prompt word 'laptop'."
    },

    diagnosticErrors: [
      "Word substitution",
      "Content accuracy",
      "Incorrect word"
    ],

    expertEvidence: [
      "The prompt says 'I often use my laptop to study and watch videos'",
      "The student says 'I often use my tablet to study and watch videos'",
      "The word 'tablet' replaces the prompt word 'laptop'",
      "The substitution occurs once and is clearly identifiable",
      "The remaining words are reproduced in the correct sequence",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The main score-impacting issue is the substituted word, not pronunciation or oral fluency"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy. The student substitutes the word \"tablet\" for the prompt word \"laptop\" in the sentence \"I often use my laptop to study and watch videos.\" This is a specific word substitution and should be treated as a Content error. The response is otherwise clear, continuous and appropriately paced, so the teacher should not diagnose this as an oral-fluency or pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they substitute the word \"tablet\" for \"laptop.\" The prompt says \"I often use my laptop to study and watch videos,\" but the student says \"I often use my tablet to study and watch videos.\" The response is otherwise clear, continuous and appropriately paced, so the teacher should focus on the word substitution rather than diagnosing a pronunciation or fluency problem.",

    coachingAdvice:
      "When marking Read Aloud, compare the student's spoken words directly with the prompt and listen for replacements as well as omissions and insertions. In this case, replacing \"laptop\" with \"tablet\" is a Content error even though both words are meaningful and the sentence remains grammatical. Encourage the student to reproduce the exact words on screen rather than substituting a related word.",

    cefrLevel: "A1",
    topicTitle: "Smartphones & Laptops",

    good: {
      transcript:
        "I use my smartphone every day to call my family and check messages. At home, I often use my laptop to study and watch videos. I also take photos when I go out with my friends. These devices help me stay connected and organized.",
      audioDuration: "20.0 seconds",
      wordCount: 45,
      characteristics:
        "Clear and appropriately paced delivery with all prompt words reproduced in the correct sequence."
    },

    poor: {
      transcript:
        "I use my smartphone every day to call my family and check messages. At home, I often use my tablet to study and watch videos. I also take photos when I go out with my friends. These devices help me stay connected and organized.",
      audioDuration: "20.5 seconds",
      wordCount: 45,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student substitutes 'tablet' for the prompt word 'laptop'."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear pronunciation and appropriate continuous delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One word substitution creates a Content error; pronunciation and oral fluency remain strong."
    },

    errorChecklist: [
      {
        id: "word-substitution",
        label: "Word substitution",
        keyword: "Word substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "incorrect-word",
        label: "Incorrect word",
        keyword: "Incorrect word"
      }
    ],

    expertAdvice:
      "Do not overlook a word substitution simply because the replacement is related in meaning or produces a grammatical sentence. Compare the student's words directly with the prompt and identify the replacement as a Content error. Do not diagnose poor fluency or pronunciation when the delivery itself is clear and continuous."
  },

  // A2 Read Aloud

  {
    exerciseIndex: 21,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Pronunciation",
    diagnosticArea: "Final Consonant Pronunciation",

    learningObjective:
      "Identify a specific final consonant pronunciation problem in a Read Aloud response and distinguish it from Content or oral-fluency problems.",

    promptText:
      "When I travel by bus or train, I usually buy my ticket before I leave home. I check the departure time and make sure I arrive at the station early. If I need help, I ask a staff member which platform I should use. Planning ahead makes my journey easier.",

    promptAudio:
      "When I travel by bus or train, I usually buy my ticket before I leave home. I check the departure time and make sure I arrive at the station early. If I need help, I ask a staff member which platform I should use. Planning ahead makes my journey easier.",

    studentTranscript:
      "When I travel by bus or train, I usually buy my ticke before I leave home. I check the departure time and make sure I arrive at the station early. If I need help, I ask a staff member which platform I should use. Planning ahead makes my journey easier.",

    studentResponse: {
      audioDuration: "21.5 seconds",
      wordCount: 52,
      characteristics:
        "Generally clear and appropriately paced delivery, but the final /t/ sound in 'ticket' is not clearly produced."
    },

    diagnosticErrors: [
      "Final consonant pronunciation",
      "T sound pronunciation",
      "Pronunciation accuracy"
    ],

    expertEvidence: [
      "The target word is 'ticket'",
      "The student's final /t/ sound in 'ticket' is not clearly produced",
      "The pronunciation issue occurs at the end of a specific word rather than throughout the response",
      "The remaining words are delivered clearly",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The Content remains substantially intact",
      "The main issue requiring attention is the final consonant pronunciation"
    ],

    expertDiagnosis:
      "The main problem is pronunciation accuracy, specifically the final /t/ sound in the word \"ticket.\" The student does not clearly produce the final consonant, making the ending of the word sound incomplete. The rest of the response is clear, continuous and appropriately paced, so this should not be diagnosed as an oral-fluency or speech-rate problem. The teacher should focus on the specific final consonant and provide targeted pronunciation coaching.",

    perfectCalibrationResponse:
      "The student's main issue is pronunciation, specifically the final /t/ sound in the word \"ticket.\" The final consonant is not clearly produced, so the ending of the word sounds incomplete. The response is otherwise clear, continuous and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific final consonant pronunciation rather than diagnosing poor fluency or a Content problem.",

    coachingAdvice:
      "Practise the final /t/ sound by bringing the tongue to the area behind the upper teeth and releasing the sound clearly at the end of the word. Contrast words such as \"ticket,\" \"seat,\" \"wait\" and \"right,\" then practise them in short sentences while maintaining a natural speaking rate.",

    cefrLevel: "A2",
    topicTitle: "Buying Bus & Train Tickets",

    good: {
      transcript:
        "When I travel by bus or train, I usually buy my ticket before I leave home. I check the departure time and make sure I arrive at the station early. If I need help, I ask a staff member which platform I should use. Planning ahead makes my journey easier.",
      audioDuration: "21.0 seconds",
      wordCount: 52,
      characteristics:
        "Clear pronunciation of final consonants with appropriate pace and continuous delivery."
    },

    poor: {
      transcript:
        "When I travel by bus or train, I usually buy my ticke before I leave home. I check the departure time and make sure I arrive at the station early. If I need help, I ask a staff member which platform I should use. Planning ahead makes my journey easier.",
      audioDuration: "21.5 seconds",
      wordCount: 52,
      characteristics:
        "Generally clear and appropriately paced delivery, but the final /t/ sound in 'ticket' is not clearly produced."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear pronunciation with appropriate pace and continuous delivery."
    },

    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "A specific final consonant pronunciation problem reduces pronunciation accuracy while Content and Oral Fluency remain strong."
    },

    errorChecklist: [
      {
        id: "final-consonant-pronunciation",
        label: "Final consonant pronunciation",
        keyword: "Final consonant pronunciation"
      },
      {
        id: "t-sound-pronunciation",
        label: "T sound pronunciation",
        keyword: "T sound pronunciation"
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy"
      }
    ],

    expertAdvice:
      "Do not diagnose this as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus on the specific final /t/ sound in \"ticket\" and provide targeted pronunciation coaching while recognising that Content remains substantially intact."
  },

   {
    exerciseIndex: 22,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Insertion & Content Accuracy",

    learningObjective:
      "Identify an extra word inserted into a Read Aloud response and distinguish the Content error from Pronunciation or Oral Fluency problems.",

    promptText:
      "When I eat at a restaurant, I usually look at the menu before I order. I often choose a simple meal with rice and vegetables. I also like to have a cold drink with my food. After dinner, I sometimes order a small dessert. Eating out is a nice way to spend time with friends.",

    promptAudio:
      "When I eat at a restaurant, I usually look at the menu before I order. I often choose a simple meal with rice and vegetables. I also like to have a cold drink with my food. After dinner, I sometimes order a small dessert. Eating out is a nice way to spend time with friends.",

    studentTranscript:
      "When I eat at a restaurant, I usually look at the menu before I order. I often choose a simple meal with rice and vegetables. I also like to have a cold drink with my food. After dinner, I sometimes order a small dessert. Eating out is a nice way to spend time with my friends.",

    studentResponse: {
      audioDuration: "24.0 seconds",
      wordCount: 58,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'my' before 'friends' at the end of the response."
    },

    diagnosticErrors: [
      "Word insertion",
      "Content accuracy",
      "Extra word"
    ],

    expertEvidence: [
      "The prompt ends with 'spend time with friends'",
      "The student says 'spend time with my friends'",
      "The word 'my' is an extra word that does not appear in the reading text",
      "The inserted word occurs at the end of the final sentence",
      "The rest of the response follows the prompt accurately",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "Pronunciation remains generally clear",
      "The main issue requiring attention is Content accuracy caused by the inserted word"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student inserts the extra word \"my\" before \"friends\" in the final sentence. The prompt says \"spend time with friends,\" but the student says \"spend time with my friends.\" Although the added word makes the sentence grammatically natural, it is not present in the reading text and therefore represents a Content error in Read Aloud. The response is otherwise clear, continuous and appropriately paced, so this should not be diagnosed as a Pronunciation or Oral Fluency problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they inserted the extra word \"my\" before \"friends\" in the final sentence. The prompt says \"Eating out is a nice way to spend time with friends,\" but the student says \"Eating out is a nice way to spend time with my friends.\" The inserted word changes the response from the exact reading text and therefore affects the Read Aloud Content score. Pronunciation and Oral Fluency remain strong because the response is otherwise clear, continuous and appropriately paced.",

    coachingAdvice:
      "Train the student to reproduce the reading text exactly rather than adding words that make the sentence sound more natural. Practise reading the final phrase \"spend time with friends\" several times while keeping the original wording unchanged.",

    cefrLevel: "A2",
    topicTitle: "Ordering Food in Restaurants",

    good: {
      transcript:
        "When I eat at a restaurant, I usually look at the menu before I order. I often choose a simple meal with rice and vegetables. I also like to have a cold drink with my food. After dinner, I sometimes order a small dessert. Eating out is a nice way to spend time with friends.",
      audioDuration: "23.5 seconds",
      wordCount: 57,
      characteristics:
        "Accurate reading with clear pronunciation, natural fluency and no inserted words."
    },

    poor: {
      transcript:
        "When I eat at a restaurant, I usually look at the menu before I order. I often choose a simple meal with rice and vegetables. I also like to have a cold drink with my food. After dinner, I sometimes order a small dessert. Eating out is a nice way to spend time with my friends.",
      audioDuration: "24.0 seconds",
      wordCount: 58,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'my' before 'friends'."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate reading with clear pronunciation and natural continuous delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One inserted word reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "extra-word",
        label: "Extra word",
        keyword: "Extra word"
      }
    ],

    expertAdvice:
      "Do not overlook an inserted word simply because it makes the sentence sound natural or grammatically correct. In Read Aloud, the student should reproduce the reading text accurately. Focus on the extra word \"my\" as a Content error while recognising that Pronunciation and Oral Fluency remain strong."
  },

  {
    exerciseIndex: 23,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Sequence Disruption",

    learningObjective:
      "Identify a disruption in the order of words in a Read Aloud response and distinguish the Content problem from Pronunciation or Oral Fluency problems.",

    promptText:
      "When I prepare for a job interview, I usually read about the company first. I think about my experience and prepare answers to common questions. I also choose clean and comfortable clothes for the interview. Before I leave home, I check the time and make sure I know the way to the office.",

    promptAudio:
      "When I prepare for a job interview, I usually read about the company first. I think about my experience and prepare answers to common questions. I also choose clean and comfortable clothes for the interview. Before I leave home, I check the time and make sure I know the way to the office.",

    studentTranscript:
      "When I prepare for a job interview, I usually read about the company first. I think about my experience and prepare answers to common questions. I also choose clean and comfortable clothes for the interview. Before I leave home, I check the time and make sure I know the office to the way.",

    studentResponse: {
      audioDuration: "25.5 seconds",
      wordCount: 60,
      characteristics:
        "Generally clear and appropriately paced delivery, but the final phrase contains a disruption in word sequence: 'the office to the way' instead of 'the way to the office'."
    },

    diagnosticErrors: [
      "Word sequence disruption",
      "Content accuracy",
      "Incorrect word order"
    ],

    expertEvidence: [
      "The prompt says 'make sure I know the way to the office'",
      "The student says 'make sure I know the office to the way'",
      "The words 'the office' and 'to the way' occur in the wrong sequence",
      "The sequence error occurs in the final phrase of the response",
      "The rest of the response follows the reading text accurately",
      "The individual words are generally clearly pronounced",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers, hesitations or unnatural pauses",
      "The main issue requiring attention is Content accuracy caused by incorrect word sequence"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student disrupts the word sequence in the final phrase. The prompt says \"make sure I know the way to the office,\" but the student says \"make sure I know the office to the way.\" The individual words are present, but they are delivered in the wrong order, so the response does not accurately reproduce the reading text. The student's pronunciation and Oral Fluency are otherwise generally strong, so this should not be diagnosed primarily as a pronunciation or fluency problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because the word sequence in the final phrase is incorrect. The prompt says \"make sure I know the way to the office,\" but the student says \"make sure I know the office to the way.\" The words are present but their order has been disrupted, so the response does not accurately reproduce the reading text. Pronunciation and Oral Fluency remain generally strong because the student speaks clearly, continuously and at an appropriate pace.",

    coachingAdvice:
      "Train the student to follow the exact word sequence of the reading text rather than relying only on individual words. Practise the phrase \"know the way to the office\" as one complete unit, then place it back into the full sentence while maintaining natural fluency.",

    cefrLevel: "A2",
    topicTitle: "Preparing for Job Interviews",

    good: {
      transcript:
        "When I prepare for a job interview, I usually read about the company first. I think about my experience and prepare answers to common questions. I also choose clean and comfortable clothes for the interview. Before I leave home, I check the time and make sure I know the way to the office.",
      audioDuration: "25.0 seconds",
      wordCount: 60,
      characteristics:
        "Accurate reading with correct word sequence, clear pronunciation and natural continuous delivery."
    },

    poor: {
      transcript:
        "When I prepare for a job interview, I usually read about the company first. I think about my experience and prepare answers to common questions. I also choose clean and comfortable clothes for the interview. Before I leave home, I check the time and make sure I know the office to the way.",
      audioDuration: "25.5 seconds",
      wordCount: 60,
      characteristics:
        "Generally clear and appropriately paced delivery, but the final phrase contains an incorrect word sequence."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate word sequence with clear pronunciation and natural continuous delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A word-sequence disruption reduces Content accuracy while Pronunciation and Oral Fluency remain strong."
    },

    errorChecklist: [
      {
        id: "word-sequence-disruption",
        label: "Word sequence disruption",
        keyword: "Word sequence disruption"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "incorrect-word-order",
        label: "Incorrect word order",
        keyword: "Incorrect word order"
      }
    ],

    expertAdvice:
      "Do not diagnose this primarily as a fluency or pronunciation problem. The student produces the words clearly and at an appropriate pace, but the order of the words in the final phrase is incorrect. Focus on exact reproduction of the reading text and accurate word sequence."
  },

    {
    exerciseIndex: 24,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Excessive Hesitation",

    learningObjective:
      "Identify repeated hesitation and filler use in a Read Aloud response and distinguish the fluency problem from Content or Pronunciation errors.",

    promptText:
      "Many people go to the gym to improve their health and fitness. I usually exercise three times a week and spend about an hour at the gym. I often use the machines for my arms and legs, and I also walk on the treadmill. Regular exercise helps me feel stronger and more active.",

    promptAudio:
      "Many people go to the gym to improve their health and fitness. I usually exercise three times a week and spend about an hour at the gym. I often use the machines for my arms and legs, and I also walk on the treadmill. Regular exercise helps me feel stronger and more active.",

    studentTranscript:
      "Many people go to the gym, um, to improve their health and fitness. I usually exercise three times a week, um, and spend about an hour at the gym. I often use the machines for my arms and legs, um, and I also walk on the treadmill. Regular exercise helps me feel stronger and more active.",

    studentResponse: {
      audioDuration: "27.5 seconds",
      wordCount: 60,
      characteristics:
        "The response is understandable and mostly accurate, but repeated 'um' fillers interrupt otherwise continuous delivery."
    },

    diagnosticErrors: [
      "Excessive hesitation",
      "Filler words",
      "Interrupted fluency"
    ],

    expertEvidence: [
      "The student inserts 'um' after 'gym'",
      "The student inserts another 'um' after 'week'",
      "A third 'um' occurs before 'and I also walk on the treadmill'",
      "The fillers interrupt otherwise connected speech",
      "The student does not need to add these words to reproduce the reading text",
      "The response remains substantially accurate in Content",
      "Pronunciation is generally clear",
      "The main issue requiring attention is Oral Fluency",
      "The problem is repeated hesitation rather than overall speech rate"
    ],

    expertDiagnosis:
      "The main problem is Oral Fluency because the student repeatedly inserts the filler word \"um\" during the response. These hesitations interrupt otherwise continuous delivery and make the reading less smooth and natural. The Content remains substantially accurate and Pronunciation is generally clear, so this should not be diagnosed primarily as a Content or pronunciation problem. The teacher should focus on reducing filler-based hesitation and maintaining continuous speech.",

    perfectCalibrationResponse:
      "The student's main issue is Oral Fluency because they repeatedly use the filler \"um\" during the reading. The student inserts \"um\" after \"gym,\" after \"week,\" and before \"and I also walk on the treadmill,\" interrupting otherwise continuous delivery. The Content remains substantially accurate and Pronunciation is generally clear. The teacher should therefore focus on reducing hesitation fillers and maintaining smoother continuous speech rather than diagnosing a Content, Pronunciation or speech-rate problem.",

    coachingAdvice:
      "Encourage the student to replace filler words such as \"um\" with brief silent pauses when needed. Practise reading the passage continuously, especially around the points where the fillers occur, while maintaining a natural speaking rate.",

    cefrLevel: "A2",
    topicTitle: "Gyms & Physical Fitness",

    good: {
      transcript:
        "Many people go to the gym to improve their health and fitness. I usually exercise three times a week and spend about an hour at the gym. I often use the machines for my arms and legs, and I also walk on the treadmill. Regular exercise helps me feel stronger and more active.",
      audioDuration: "24.0 seconds",
      wordCount: 57,
      characteristics:
        "Clear, continuous and appropriately paced delivery without unnecessary hesitation fillers."
    },

    poor: {
      transcript:
        "Many people go to the gym, um, to improve their health and fitness. I usually exercise three times a week, um, and spend about an hour at the gym. I often use the machines for my arms and legs, um, and I also walk on the treadmill. Regular exercise helps me feel stronger and more active.",
      audioDuration: "27.5 seconds",
      wordCount: 60,
      characteristics:
        "Repeated 'um' fillers interrupt otherwise continuous delivery and reduce Oral Fluency."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Repeated hesitation fillers interrupt otherwise clear delivery and reduce Oral Fluency."
    },

    errorChecklist: [
      {
        id: "excessive-hesitation",
        label: "Excessive hesitation",
        keyword: "Excessive hesitation"
      },
      {
        id: "filler-words",
        label: "Filler words",
        keyword: "Filler words"
      },
      {
        id: "interrupted-fluency",
        label: "Interrupted fluency",
        keyword: "Interrupted fluency"
      }
    ],

    expertAdvice:
      "Do not diagnose this simply as slow speech or a Content problem. The student's main issue is repeated filler-based hesitation. Focus on the unnecessary 'um' insertions and encourage brief silent pauses while preserving the student's otherwise clear pronunciation and appropriate speaking rate."
  },

    {
    exerciseIndex: 25,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Repetition & Restarting",

    learningObjective:
      "Identify repeated words and restarting in a Read Aloud response and distinguish the fluency problem from Content accuracy, Pronunciation or overall speech-rate problems.",

    promptText:
      "I enjoy taking short trips at the weekend when I have free time. I usually travel by train because it is comfortable and easy. Sometimes I visit a nearby city with my friends and spend the day walking around. We often take photos, try local food and return home in the evening.",

    promptAudio:
      "I enjoy taking short trips at the weekend when I have free time. I usually travel by train because it is comfortable and easy. Sometimes I visit a nearby city with my friends and spend the day walking around. We often take photos, try local food and return home in the evening.",

    studentTranscript:
      "I enjoy taking short trips at the weekend when I have free time. I usually usually travel by train because it is comfortable and easy. Sometimes I visit a nearby city with my friends and spend the day walking around. We often take photos, try local food and return return home in the evening.",

    studentResponse: {
      audioDuration: "25.5 seconds",
      wordCount: 60,
      characteristics:
        "The response is generally clear and appropriately paced, but the student repeats two words unnecessarily during the reading."
    },

    diagnosticErrors: [
      "Repetition",
      "Repeated words",
      "Fluency disruption"
    ],

    expertEvidence: [
      "The student repeats 'usually' in the second sentence",
      "The student repeats 'return' in the final sentence",
      "The repeated words are unnecessary additions to the reading text",
      "The repetitions interrupt otherwise continuous delivery",
      "The overall speaking rate remains appropriate",
      "Pronunciation is generally clear",
      "The response remains understandable",
      "The main issue requiring attention is Oral Fluency",
      "The problem should not be diagnosed primarily as slow or fast speech"
    ],

    expertDiagnosis:
      "The main problem is Oral Fluency because the student unnecessarily repeats words during the reading. The word \"usually\" is repeated in the second sentence, and \"return\" is repeated in the final sentence. These repetitions interrupt otherwise continuous delivery. The student's overall speaking rate remains appropriate and Pronunciation is generally clear, so this should not be diagnosed primarily as a speech-rate or pronunciation problem. The teacher should focus on avoiding unnecessary repetition and maintaining continuous delivery.",

    perfectCalibrationResponse:
      "The student's main issue is Oral Fluency because they unnecessarily repeat words during the reading. They repeat \"usually\" in the second sentence and \"return\" in the final sentence, creating brief disruptions in otherwise continuous delivery. The overall speaking rate remains appropriate and Pronunciation is generally clear. The teacher should therefore focus on reducing unnecessary repetitions and maintaining smooth, continuous speech rather than diagnosing a broader speech-rate or pronunciation problem.",

    coachingAdvice:
      "Encourage the student to continue forward after making a small reading mistake instead of repeating the word. Practise the two target sentences several times, aiming to read each phrase once with a steady, continuous rhythm.",

    cefrLevel: "A2",
    topicTitle: "Weekend Travel Trips",

    good: {
      transcript:
        "I enjoy taking short trips at the weekend when I have free time. I usually travel by train because it is comfortable and easy. Sometimes I visit a nearby city with my friends and spend the day walking around. We often take photos, try local food and return home in the evening.",
      audioDuration: "24.0 seconds",
      wordCount: 58,
      characteristics:
        "Clear, continuous and appropriately paced delivery without unnecessary repetition."
    },

    poor: {
      transcript:
        "I enjoy taking short trips at the weekend when I have free time. I usually usually travel by train because it is comfortable and easy. Sometimes I visit a nearby city with my friends and spend the day walking around. We often take photos, try local food and return return home in the evening.",
      audioDuration: "25.5 seconds",
      wordCount: 60,
      characteristics:
        "Generally clear and appropriately paced delivery, but two unnecessary word repetitions interrupt fluency."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Unnecessary word repetitions interrupt otherwise clear and appropriately paced delivery."
    },

    errorChecklist: [
      {
        id: "repetition",
        label: "Repetition",
        keyword: "Repetition"
      },
      {
        id: "repeated-words",
        label: "Repeated words",
        keyword: "Repeated words"
      },
      {
        id: "fluency-disruption",
        label: "Fluency disruption",
        keyword: "Fluency disruption"
      }
    ],

    expertAdvice:
      "Do not diagnose this simply as a speech-rate problem. The student's rate is appropriate and Pronunciation is generally clear. Focus on the unnecessary repetitions of \"usually\" and \"return\" and coach the student to continue smoothly without repeating words."
  },

   {
    exerciseIndex: 26,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Omission",

    learningObjective:
      "Identify a specific omitted word in a Read Aloud response and distinguish a Content error from oral-fluency or pronunciation problems.",

    promptText:
      "People can use the public library to borrow books and study quietly. I usually visit the library after school because it is close to my home. There are many useful books about history, science, and travel. The library also has computers that students can use for homework.",

    promptAudio:
      "People can use the public library to borrow books and study quietly. I usually visit the library after school because it is close to my home. There are many useful books about history, science, and travel. The library also has computers that students can use for homework.",

    studentTranscript:
      "People can use the public library to borrow books and study quietly. I visit the library after school because it is close to my home. There are many useful books about history, science, and travel. The library also has computers that students can use for homework.",

    studentResponse: {
      audioDuration: "19.5 seconds",
      wordCount: 46,
      characteristics:
        "Generally clear and appropriately paced delivery, but the word 'usually' is omitted from the second sentence."
    },

    diagnosticErrors: [
      "Word omission",
      "Content accuracy",
      "Missing word"
    ],

    expertEvidence: [
      "The prompt contains the word 'usually' in the second sentence",
      "The student omits 'usually' before 'visit the library'",
      "The omission is a specific Content error rather than a fluency problem",
      "The remaining response is delivered clearly",
      "Overall speaking rate remains appropriate",
      "There are no significant fillers, repetitions or unnatural pauses",
      "Pronunciation remains generally clear",
      "The main issue requiring attention is the omitted word"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student omits the word 'usually' from the second sentence. This is a specific Read Aloud Content error. The response is otherwise clear, continuous and appropriately paced, so the teacher should not diagnose a broader oral-fluency or pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they omit the word 'usually' from the second sentence. The prompt says 'I usually visit the library,' but the student says 'I visit the library.' This is a specific word omission that affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",

    coachingAdvice:
      "When assessing Read Aloud, compare the student's words carefully with the prompt. Encourage the student to maintain all words in the reading text while continuing to speak naturally and clearly.",

    cefrLevel: "A2",
    topicTitle: "Public Libraries & Reading",

    good: {
      transcript:
        "People can use the public library to borrow books and study quietly. I usually visit the library after school because it is close to my home. There are many useful books about history, science, and travel. The library also has computers that students can use for homework.",
      audioDuration: "19.0 seconds",
      wordCount: 47,
      characteristics:
        "Clear and complete delivery with all words included and appropriate pacing."
    },

    poor: {
      transcript:
        "People can use the public library to borrow books and study quietly. I visit the library after school because it is close to my home. There are many useful books about history, science, and travel. The library also has computers that students can use for homework.",
      audioDuration: "19.5 seconds",
      wordCount: 46,
      characteristics:
        "Generally clear and appropriately paced, but the word 'usually' is omitted."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One omitted word reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-omission",
        label: "Word omission",
        keyword: "Word omission"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "missing-word",
        label: "Missing word",
        keyword: "Missing word"
      }
    ],

    expertAdvice:
      "Do not diagnose this as poor fluency simply because the response is shorter. Compare the transcript with the prompt and identify the specific omitted word. The main issue is Content accuracy."
  },

  {
    exerciseIndex: 27,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Insertion",

    learningObjective:
      "Identify an extra inserted word in a Read Aloud response and distinguish a Content error from oral-fluency or pronunciation problems.",

    promptText:
      "Online shopping is convenient when people are busy. I often choose an item on a website, check the price, and place my order. The store sends a confirmation email after I pay. A few days later, the delivery arrives at my home.",

    promptAudio:
      "Online shopping is convenient when people are busy. I often choose an item on a website, check the price, and place my order. The store sends a confirmation email after I pay. A few days later, the delivery arrives at my home.",

    studentTranscript:
      "Online shopping is convenient when people are busy. I often choose an item on a website, check the price, and place my order. The store sends a confirmation email quickly after I pay. A few days later, the delivery arrives at my home.",

    studentResponse: {
      audioDuration: "18.5 seconds",
      wordCount: 43,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'quickly'."
    },

    diagnosticErrors: [
      "Word insertion",
      "Content accuracy",
      "Extra word"
    ],

    expertEvidence: [
      "The prompt says 'The store sends a confirmation email after I pay'",
      "The student inserts the word 'quickly' before 'after I pay'",
      "The inserted word is not present in the reading text",
      "The response remains continuous and appropriately paced",
      "There are no significant hesitation or repetition problems",
      "Pronunciation remains generally clear",
      "The main issue requiring attention is the inserted word"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student inserts the word 'quickly' into the third sentence. The prompt does not contain this word. This is a specific Content error, while the student's Oral Fluency and Pronunciation remain generally strong.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they insert the extra word 'quickly' into the third sentence. The prompt says 'The store sends a confirmation email after I pay,' but the student says 'The store sends a confirmation email quickly after I pay.' This is a word insertion that affects the Read Aloud Content score. The response otherwise remains clear, continuous and appropriately paced.",

    coachingAdvice:
      "Teach the student to follow the reading text exactly. In Read Aloud, avoid adding words even when the added word makes the sentence sound natural or logical.",

    cefrLevel: "A2",
    topicTitle: "Online Shopping & Delivery",

    good: {
      transcript:
        "Online shopping is convenient when people are busy. I often choose an item on a website, check the price, and place my order. The store sends a confirmation email after I pay. A few days later, the delivery arrives at my home.",
      audioDuration: "18.0 seconds",
      wordCount: 42,
      characteristics:
        "Complete Content with clear and appropriately paced delivery."
    },

    poor: {
      transcript:
        "Online shopping is convenient when people are busy. I often choose an item on a website, check the price, and place my order. The store sends a confirmation email quickly after I pay. A few days later, the delivery arrives at my home.",
      audioDuration: "18.5 seconds",
      wordCount: 43,
      characteristics:
        "Generally clear and appropriately paced, but one extra word is inserted."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One inserted word reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "extra-word",
        label: "Extra word",
        keyword: "Extra word"
      }
    ],

    expertAdvice:
      "Do not treat the added word as a fluency problem. Compare the student's response with the prompt and identify the specific insertion. The main issue is Content accuracy."
  },

  {
    exerciseIndex: 28,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Excessive Sentence-Boundary Pausing",

    learningObjective:
      "Identify excessive pauses between complete sentences and distinguish segmented delivery from slow speaking rate or pronunciation problems.",

    promptText:
      "Many families try to recycle household waste at home. We separate paper, plastic, glass, and food waste into different containers. Recycling helps reduce the amount of rubbish sent to landfill. It is a simple habit that everyone can practise every day.",

    promptAudio:
      "Many families try to recycle household waste at home. We separate paper, plastic, glass, and food waste into different containers. Recycling helps reduce the amount of rubbish sent to landfill. It is a simple habit that everyone can practise every day.",

    studentTranscript:
      "Many families try to recycle household waste at home. ... ... We separate paper, plastic, glass, and food waste into different containers. ... ... Recycling helps reduce the amount of rubbish sent to landfill. ... ... It is a simple habit that everyone can practise every day.",

    studentResponse: {
      audioDuration: "24.5 seconds",
      wordCount: 41,
      characteristics:
        "The student inserts unusually long pauses after complete sentences, creating a segmented delivery."
    },

    diagnosticErrors: [
      "Excessive pausing",
      "Segmented delivery",
      "Sentence-boundary pauses"
    ],

    expertEvidence: [
      "Long pauses occur after several complete sentences",
      "The pauses are substantially longer than natural sentence-boundary pauses",
      "The student separates each sentence into isolated units",
      "The words themselves are delivered clearly",
      "The overall rate between pauses is appropriate",
      "There are no significant fillers or repetitions",
      "Pronunciation remains generally clear",
      "The main issue is excessive sentence-boundary pausing"
    ],

    expertDiagnosis:
      "The main problem is Oral Fluency because the student uses excessively long pauses after several complete sentences. These pauses make the response sound segmented even though the individual words are clear. This should not be diagnosed simply as slow speech because the problem is the excessive duration and frequency of the sentence-boundary pauses.",

    perfectCalibrationResponse:
      "The student's main oral-fluency issue is excessive sentence-boundary pausing. They insert unusually long pauses after several complete sentences, which makes the response sound segmented. The words are otherwise clear and the speaking rate between pauses is appropriate. The teacher should therefore focus on reducing excessive pauses rather than diagnosing a general speech-rate or pronunciation problem.",

    coachingAdvice:
      "Teach the student to use brief, natural pauses at sentence boundaries rather than stopping for several seconds after every sentence. Practise connecting two or three sentences while maintaining a smooth overall rhythm.",

    cefrLevel: "A2",
    topicTitle: "Recycling Household Trash",

    good: {
      transcript:
        "Many families try to recycle household waste at home. We separate paper, plastic, glass, and food waste into different containers. Recycling helps reduce the amount of rubbish sent to landfill. It is a simple habit that everyone can practise every day.",
      audioDuration: "20.5 seconds",
      wordCount: 41,
      characteristics:
        "Natural sentence-boundary pauses with smooth continuous delivery."
    },

    poor: {
      transcript:
        "Many families try to recycle household waste at home. ... ... We separate paper, plastic, glass, and food waste into different containers. ... ... Recycling helps reduce the amount of rubbish sent to landfill. ... ... It is a simple habit that everyone can practise every day.",
      audioDuration: "24.5 seconds",
      wordCount: 41,
      characteristics:
        "Excessively long pauses after sentences create a segmented delivery."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural pauses support clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "69 / 90",
      breakdownText:
        "Excessive sentence-boundary pauses interrupt otherwise clear delivery."
    },

    errorChecklist: [
      {
        id: "excessive-pausing",
        label: "Excessive pausing",
        keyword: "Excessive pausing"
      },
      {
        id: "segmented-delivery",
        label: "Segmented delivery",
        keyword: "Segmented delivery"
      },
      {
        id: "sentence-boundary-pauses",
        label: "Sentence-boundary pauses",
        keyword: "Sentence-boundary pauses"
      }
    ],

    expertAdvice:
      "Do not diagnose this simply as slow speech. Focus on the unusually long pauses between sentences and the resulting segmented delivery."
  },

  {
    exerciseIndex: 29,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Word Repetition",

    learningObjective:
      "Identify unnecessary word repetitions in a Read Aloud response and distinguish localized repetition from broader speech-rate or pronunciation problems.",

    promptText:
      "Cultural festivals bring people together and help them learn about local traditions. Families often prepare special food, wear traditional clothes, and enjoy music during these events. Some festivals include dancing and games, while others have parades in the streets. These celebrations are an important part of community life.",

    promptAudio:
      "Cultural festivals bring people together and help them learn about local traditions. Families often prepare special food, wear traditional clothes, and enjoy music during these events. Some festivals include dancing and games, while others have parades in the streets. These celebrations are an important part of community life.",

    studentTranscript:
      "Cultural festivals bring people together and help them learn about local traditions. Families often often prepare special food, wear traditional traditional clothes, and enjoy music during these events. Some festivals include dancing and games, while others have parades in the streets. These celebrations are an important part of community life.",

    studentResponse: {
      audioDuration: "20.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally clear and appropriately paced delivery, but several words are unnecessarily repeated."
    },

    diagnosticErrors: [
      "Word repetition",
      "Repeated words",
      "Oral fluency disruption"
    ],

    expertEvidence: [
      "The word 'often' is repeated unnecessarily",
      "The word 'traditional' is repeated unnecessarily",
      "The repetitions occur within otherwise continuous sentences",
      "The student's overall speaking rate remains appropriate",
      "Pronunciation is generally clear",
      "The response does not show a broad hesitation pattern",
      "The main issue is localized word repetition",
      "The repetitions create brief disruptions to Oral Fluency"
    ],

    expertDiagnosis:
      "The main problem is Oral Fluency because the student unnecessarily repeats words during the reading. They repeat 'often' and 'traditional', creating brief disruptions in otherwise continuous delivery. The overall speaking rate remains appropriate and Pronunciation is generally clear, so the teacher should focus on reducing unnecessary repetitions rather than diagnosing a broader speech-rate or pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Oral Fluency because they unnecessarily repeat words during the reading. They repeat 'often' and 'traditional', creating brief disruptions in otherwise continuous delivery. The overall speaking rate remains appropriate and Pronunciation is generally clear. The teacher should therefore focus on reducing unnecessary repetitions and maintaining smooth, continuous speech.",

    coachingAdvice:
      "Encourage the student to keep moving forward after saying a word correctly rather than repeating it. Practise reading short passages with attention to continuous delivery and controlled self-monitoring.",

    cefrLevel: "A2",
    topicTitle: "Cultural Festivals",

    good: {
      transcript:
        "Cultural festivals bring people together and help them learn about local traditions. Families often prepare special food, wear traditional clothes, and enjoy music during these events. Some festivals include dancing and games, while others have parades in the streets. These celebrations are an important part of community life.",
      audioDuration: "19.5 seconds",
      wordCount: 48,
      characteristics:
        "Smooth, continuous delivery without unnecessary word repetition."
    },

    poor: {
      transcript:
        "Cultural festivals bring people together and help them learn about local traditions. Families often often prepare special food, wear traditional traditional clothes, and enjoy music during these events. Some festivals include dancing and games, while others have parades in the streets. These celebrations are an important part of community life.",
      audioDuration: "20.5 seconds",
      wordCount: 50,
      characteristics:
        "Generally clear and appropriately paced, but unnecessary word repetitions interrupt fluency."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Smooth and continuous delivery with clear pronunciation."
    },

    poorScore: {
      content: 5,
      fluency: 2,
      pronunciation: 5,
      overall: "78 / 90",
      breakdownText:
        "Unnecessary word repetitions interrupt otherwise clear and appropriately paced delivery."
    },

    errorChecklist: [
      {
        id: "word-repetition",
        label: "Word repetition",
        keyword: "Word repetition"
      },
      {
        id: "repeated-words",
        label: "Repeated words",
        keyword: "Repeated words"
      },
      {
        id: "oral-fluency-disruption",
        label: "Oral fluency disruption",
        keyword: "Oral fluency disruption"
      }
    ],

    expertAdvice:
      "Do not diagnose this as poor speaking rate. The overall rate is appropriate. Focus on the specific unnecessary repetitions and their effect on Oral Fluency."
  },

  {
    exerciseIndex: 30,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Substitution",

    learningObjective:
      "Identify a specific substituted word in a Read Aloud response and distinguish a Content error from oral-fluency or pronunciation problems.",

    promptText:
      "Visiting a museum can be an interesting way to learn about history and art. I like looking at old paintings, photographs, and objects from different periods. Many museums also offer short tours for visitors. After the visit, I usually talk with my family about the things we learned.",

    promptAudio:
      "Visiting a museum can be an interesting way to learn about history and art. I like looking at old paintings, photographs, and objects from different periods. Many museums also offer short tours for visitors. After the visit, I usually talk with my family about the things we learned.",

    studentTranscript:
      "Visiting a museum can be an interesting way to learn about history and art. I like looking at old posters, photographs, and objects from different periods. Many museums also offer short tours for visitors. After the visit, I usually talk with my family about the things we learned.",

    studentResponse: {
      audioDuration: "20.0 seconds",
      wordCount: 48,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student substitutes 'posters' for 'paintings'."
    },

    diagnosticErrors: [
      "Word substitution",
      "Content accuracy",
      "Incorrect word"
    ],

    expertEvidence: [
      "The prompt says 'old paintings'",
      "The student says 'old posters' instead",
      "The substituted word changes the original reading text",
      "The response remains clear and continuous",
      "Overall speaking rate remains appropriate",
      "There are no significant hesitation or repetition problems",
      "Pronunciation of the substituted word is clear",
      "The main issue requiring attention is Content accuracy"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student substitutes the word 'posters' for 'paintings.' This is a specific word substitution in the reading text. The response remains clear, continuous and appropriately paced, so the teacher should not diagnose a broader Oral Fluency or Pronunciation problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they substitute the word 'posters' for 'paintings.' The prompt says 'I like looking at old paintings,' but the student says 'I like looking at old posters.' This word substitution affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",

    coachingAdvice:
      "When assessing Read Aloud, listen for exact word production rather than judging only whether the sentence makes sense. Encourage the student to follow the original text accurately without replacing words with related vocabulary.",

    cefrLevel: "A2",
    topicTitle: "Visiting Museums & Art",

    good: {
      transcript:
        "Visiting a museum can be an interesting way to learn about history and art. I like looking at old paintings, photographs, and objects from different periods. Many museums also offer short tours for visitors. After the visit, I usually talk with my family about the things we learned.",
      audioDuration: "19.5 seconds",
      wordCount: 48,
      characteristics:
        "Complete Content with clear pronunciation and natural continuous delivery."
    },

    poor: {
      transcript:
        "Visiting a museum can be an interesting way to learn about history and art. I like looking at old posters, photographs, and objects from different periods. Many museums also offer short tours for visitors. After the visit, I usually talk with my family about the things we learned.",
      audioDuration: "20.0 seconds",
      wordCount: 48,
      characteristics:
        "Generally clear and appropriately paced, but one word is substituted."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Complete Content with clear, continuous and appropriately paced delivery."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "One substituted word reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-substitution",
        label: "Word substitution",
        keyword: "Word substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "incorrect-word",
        label: "Incorrect word",
        keyword: "Incorrect word"
      }
    ],

    expertAdvice:
      "Do not diagnose this as a pronunciation problem simply because the student says a different word clearly. The main issue is that the student substituted 'posters' for 'paintings', which is a Content accuracy error."
  },

   {
    exerciseIndex: 31,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Substitution & Content Accuracy",

    learningObjective:
      "Identify a specific word substitution in a Read Aloud response and distinguish Content accuracy errors from pronunciation or oral-fluency problems.",

    promptText:
      "Elementary science projects help students understand simple ideas through practical activities. In class, students may observe plants, measure water, or build small models. Teachers usually explain each step before the activity begins. Working carefully helps students record their results and learn from the experiment.",

    promptAudio:
      "Elementary science projects help students understand simple ideas through practical activities. In class, students may observe plants, measure water, or build small models. Teachers usually explain each step before the activity begins. Working carefully helps students record their results and learn from the experiment.",

    studentTranscript:
      "Elementary science projects help students understand simple ideas through practical activities. In class, students may observe plants, measure water, or build small models. Teachers usually explain each step before the activity begins. Working carefully helps students record their results and learn from the exercise.",

    studentResponse: {
      audioDuration: "24.0 seconds",
      wordCount: 53,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student substitutes 'exercise' for 'experiment' near the end of the response."
    },

    diagnosticErrors: [
      "Word substitution",
      "Content accuracy",
      "Incorrect word reproduction"
    ],

    expertEvidence: [
      "The target word near the end of the response is 'experiment'",
      "The student says 'exercise' instead of 'experiment'",
      "The substituted word changes the exact wording of the reading text",
      "The error is a Content accuracy issue rather than a pronunciation problem",
      "Overall speech rate remains appropriate",
      "The response is continuous without significant fillers or unnatural pauses",
      "Pronunciation is generally clear",
      "The main issue requiring attention is accurate reproduction of the target word"
    ],

    expertDiagnosis:
      "The main problem is Content accuracy because the student substitutes the word \"exercise\" for \"experiment\" near the end of the response. The prompt says \"learn from the experiment,\" but the student says \"learn from the exercise.\" This is a specific word substitution that affects the Read Aloud Content score. The response is otherwise clear, continuous and appropriately paced, so this should not be diagnosed as a pronunciation or oral-fluency problem.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they substitute the word \"exercise\" for \"experiment\" near the end of the response. The prompt says \"learn from the experiment,\" but the student says \"learn from the exercise.\" This specific word substitution affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",

    coachingAdvice:
      "Focus on reproducing every word exactly as it appears in the reading text. Practise the contrast between \"experiment\" and \"exercise,\" then reread the final sentence while maintaining the same natural speaking rate.",

    cefrLevel: "A2",
    topicTitle: "Elementary Science Projects",

    good: {
      transcript:
        "Elementary science projects help students understand simple ideas through practical activities. In class, students may observe plants, measure water, or build small models. Teachers usually explain each step before the activity begins. Working carefully helps students record their results and learn from the experiment.",
      audioDuration: "23.5 seconds",
      wordCount: 53,
      characteristics:
        "Clear and appropriately paced delivery with accurate reproduction of the reading text."
    },

    poor: {
      transcript:
        "Elementary science projects help students understand simple ideas through practical activities. In class, students may observe plants, measure water, or build small models. Teachers usually explain each step before the activity begins. Working carefully helps students record their results and learn from the exercise.",
      audioDuration: "24.0 seconds",
      wordCount: 53,
      characteristics:
        "Generally clear and appropriately paced delivery, but 'experiment' is substituted with 'exercise' near the end."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear pronunciation and appropriate fluency."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A specific word substitution reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-substitution",
        label: "Word substitution",
        keyword: "Word substitution"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "incorrect-word-reproduction",
        label: "Incorrect word reproduction",
        keyword: "Incorrect word reproduction"
      }
    ],

    expertAdvice:
      "Do not diagnose this as a pronunciation or fluency problem. The student's delivery is clear and appropriately paced. Focus on the exact substitution of \"exercise\" for \"experiment\" and explain that accurate reproduction of the reading text is required for full Content marks."
  },

  {
  exerciseIndex: 32,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "False Start & Self-Correction",
  learningObjective:
    "Identify an audible false start and self-correction in a Read Aloud response and distinguish it from Content, Pronunciation, and overall speech-rate problems.",
  promptText:
    "Sending workplace emails is an important part of many jobs. Employees should write clear messages and include the main information in a simple way. A useful email often has a short subject line and a polite greeting. Before sending a message, workers should check the details and make sure the correct person will receive it.",
  promptAudio:
    "Sending workplace emails is an important part of many jobs. Employees should write clear messages and include the main information in a simple way. A useful email often has a short subject line and a polite greeting. Before sending a message, workers should check the details and make sure the correct person will receive it.",
  studentTranscript:
    "Sending workplace emails is an important part of many jobs. Employees should write clear messages and include the main information in a simple way. A useful email often has a short subject line and a polite greeting / sorry, a professional greeting. Before sending a message, workers should check the details and make sure the correct person will receive it.",
  studentResponse: {
    audioDuration: "23.5 seconds",
    wordCount: 61,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker makes an audible false start and immediately self-corrects with 'sorry' before continuing."
  },
  diagnosticErrors: [
    "False start",
    "Self-correction",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The student begins with 'a polite greeting'",
    "The student interrupts the phrase with 'sorry'",
    "The student then changes the wording to 'a professional greeting'",
    "The self-correction creates a noticeable interruption in otherwise continuous delivery",
    "The issue is localized to one phrase rather than the entire response",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is the false start and self-correction"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because they make an audible false start and self-correction in the phrase \"a polite greeting, sorry, a professional greeting.\" The speaker begins one wording, interrupts it with \"sorry,\" and then restarts the phrase with different wording. This creates a noticeable disruption in otherwise continuous delivery. The overall speaking rate and pronunciation are generally clear, so the teacher should focus on reducing false starts and self-corrections rather than diagnosing a general speech-rate or pronunciation problem.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because they make an audible false start and self-correction in the phrase \"a polite greeting, sorry, a professional greeting.\" The speaker begins one wording, interrupts it with \"sorry,\" and then restarts the phrase with different wording. This creates a noticeable disruption in otherwise continuous delivery. The overall speaking rate and Pronunciation are generally clear, so the teacher should focus on reducing false starts and self-corrections rather than diagnosing a general speech-rate or pronunciation problem.",
  coachingAdvice:
    "Plan the phrase before speaking and avoid changing wording mid-sentence. If a mistake occurs, continue smoothly rather than repeatedly restarting or correcting the phrase. Practise short Read Aloud passages while maintaining continuous delivery and allowing only necessary brief pauses.",
  cefrLevel: "A2",
  topicTitle: "Sending Workplace Emails",
  good: {
    transcript:
      "Sending workplace emails is an important part of many jobs. Employees should write clear messages and include the main information in a simple way. A useful email often has a short subject line and a polite greeting. Before sending a message, workers should check the details and make sure the correct person will receive it.",
    audioDuration: "22.5 seconds",
    wordCount: 56,
    characteristics:
      "Clear, continuous and appropriately paced delivery without false starts or unnecessary self-corrections."
  },
  poor: {
    transcript:
      "Sending workplace emails is an important part of many jobs. Employees should write clear messages and include the main information in a simple way. A useful email often has a short subject line and a polite greeting / sorry, a professional greeting. Before sending a message, workers should check the details and make sure the correct person will receive it.",
    audioDuration: "23.5 seconds",
    wordCount: 61,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker makes an audible false start and immediately self-corrects with 'sorry' before continuing."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear and continuous delivery without false starts or unnecessary self-corrections."
  },
  poorScore: {
    content: 4,
    fluency: 3,
    pronunciation: 5,
    overall: "78 / 90",
    breakdownText:
      "An audible false start and self-correction disrupt Oral Fluency, with additional wording affecting Content accuracy."
  },
  errorChecklist: [
    {
      id: "false-start",
      label: "False start",
      keyword: "False start"
    },
    {
      id: "self-correction",
      label: "Self-correction",
      keyword: "Self-correction"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this primarily as a slow speaking rate or pronunciation problem. The key issue is the audible false start and self-correction in 'a polite greeting, sorry, a professional greeting.' Focus on continuous delivery and avoiding unnecessary mid-sentence restarts while recognising that the overall pace and pronunciation remain clear."
},

  {
    exerciseIndex: 33,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Pronunciation",
    diagnosticArea: "Consonant Cluster Simplification",

    learningObjective:
      "Identify a specific consonant-cluster pronunciation problem and distinguish it from Content and Oral Fluency issues.",

    promptText:
      "Driving lessons help new drivers learn how to control a car safely. Students practise starting, stopping, changing direction, and following traffic signs. A good instructor explains the rules and gives clear advice during each lesson. Drivers should stay alert, follow the speed limit, and watch carefully for other vehicles.",

    promptAudio:
      "Driving lessons help new drivers learn how to control a car safely. Students practise starting, stopping, changing direction, and following traffic signs. A good instructor explains the rules and gives clear advice during each lesson. Drivers should stay alert, follow the speed limit, and watch carefully for other vehicles.",

    studentTranscript:
      "Driving lessons help new drivers learn how to control a car safely. Students practise starting, stopping, changing direction, and following traffic signs. A good instructor explains the rules and gives clear advice during each lesson. Drivers should stay alert, follow the speed limit, and watch carefully for other veehicles.",

    studentResponse: {
      audioDuration: "25.0 seconds",
      wordCount: 59,
      characteristics:
        "Generally clear and appropriately paced delivery, but the consonant cluster in 'vehicles' is simplified and the word is produced unclearly as 'veehicles.'"
    },

    diagnosticErrors: [
      "Consonant cluster pronunciation",
      "Pronunciation accuracy",
      "Specific word pronunciation"
    ],

    expertEvidence: [
      "The target word is 'vehicles'",
      "The consonant sequence in the target word is not produced clearly",
      "The pronunciation issue is localized to one specific word",
      "The rest of the response remains generally intelligible",
      "Overall speaking rate remains appropriate",
      "The response is continuous without significant hesitation",
      "Content remains substantially intact",
      "The main issue requiring attention is pronunciation accuracy in the target word"
    ],

    expertDiagnosis:
      "The main issue is Pronunciation accuracy, specifically the production of the consonant sequence in the word \"vehicles.\" The target word is produced unclearly as \"veehicles,\" creating a localized pronunciation problem. The response remains generally clear, continuous and appropriately paced, so this should not be diagnosed as an Oral Fluency or Content problem.",

    perfectCalibrationResponse:
      "The student's main issue is Pronunciation, specifically the consonant sequence in the word \"vehicles.\" The target word is produced unclearly, creating a localized pronunciation problem. The rest of the response is generally clear, continuous and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific word pronunciation rather than diagnosing poor fluency or speech rate.",

    coachingAdvice:
      "Practise the word \"vehicles\" slowly, paying attention to the consonant sequence, then repeat it in short phrases such as \"other vehicles\" and \"many vehicles.\" Gradually increase the speed while keeping the consonants clear.",

    cefrLevel: "A2",
    topicTitle: "Driving Lessons & Safety",

    good: {
      transcript:
        "Driving lessons help new drivers learn how to control a car safely. Students practise starting, stopping, changing direction, and following traffic signs. A good instructor explains the rules and gives clear advice during each lesson. Drivers should stay alert, follow the speed limit, and watch carefully for other vehicles.",
      audioDuration: "24.5 seconds",
      wordCount: 59,
      characteristics:
        "Clear pronunciation with appropriate pace and continuous delivery."
    },

    poor: {
      transcript:
        "Driving lessons help new drivers learn how to control a car safely. Students practise starting, stopping, changing direction, and following traffic signs. A good instructor explains the rules and gives clear advice during each lesson. Drivers should stay alert, follow the speed limit, and watch carefully for other veehicles.",
      audioDuration: "25.0 seconds",
      wordCount: 59,
      characteristics:
        "Generally clear and appropriately paced delivery, but the consonant sequence in 'vehicles' is produced unclearly."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Clear pronunciation, accurate Content and appropriate fluency."
    },

    poorScore: {
      content: 5,
      fluency: 5,
      pronunciation: 3,
      overall: "84 / 90",
      breakdownText:
        "A localized consonant pronunciation problem reduces Pronunciation while Content and Oral Fluency remain strong."
    },

    errorChecklist: [
      {
        id: "consonant-cluster-pronunciation",
        label: "Consonant cluster pronunciation",
        keyword: "Consonant cluster pronunciation"
      },
      {
        id: "pronunciation-accuracy",
        label: "Pronunciation accuracy",
        keyword: "Pronunciation accuracy"
      },
      {
        id: "specific-word-pronunciation",
        label: "Specific word pronunciation",
        keyword: "Specific word pronunciation"
      }
    ],

    expertAdvice:
      "Focus on the localized pronunciation difficulty in \"vehicles.\" Do not diagnose the response as generally unclear, too fast, or poorly fluent because the overall delivery remains appropriate."
  },

  {
    exerciseIndex: 34,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Content Accuracy",
    diagnosticArea: "Word Insertion & Exact Reproduction",

    learningObjective:
      "Identify an unnecessary inserted word in a Read Aloud response and distinguish the Content error from otherwise strong fluency and pronunciation.",

    promptText:
      "Cooking simple recipes can be a useful skill for students and families. Before cooking, people should read the recipe carefully and prepare all the ingredients. It is important to follow the instructions in the correct order. After the meal is ready, everyone can sit together and enjoy the food.",

    promptAudio:
      "Cooking simple recipes can be a useful skill for students and families. Before cooking, people should read the recipe carefully and prepare all the ingredients. It is important to follow the instructions in the correct order. After the meal is ready, everyone can sit together and enjoy the food.",

    studentTranscript:
      "Cooking simple recipes can be a useful skill for students and families. Before cooking, people should read the recipe carefully and prepare all the ingredients. It is important to follow the instructions in the correct order. After the meal is ready, everyone can sit together and enjoy the delicious food.",

    studentResponse: {
      audioDuration: "24.0 seconds",
      wordCount: 57,
      characteristics:
        "Generally clear and appropriately paced delivery, but the student inserts the extra word 'delicious' before 'food' in the final sentence."
    },

    diagnosticErrors: [
      "Word insertion",
      "Content accuracy",
      "Extra word"
    ],

    expertEvidence: [
      "The prompt says 'enjoy the food'",
      "The student says 'enjoy the delicious food'",
      "The word 'delicious' is not present in the reading text",
      "The additional word is a Content accuracy error",
      "The response remains continuous and appropriately paced",
      "Pronunciation remains generally clear",
      "The main issue requiring attention is exact reproduction of the reading text"
    ],

    expertDiagnosis:
      "The main issue is Content accuracy because the student inserts the extra word \"delicious\" before \"food\" in the final sentence. The prompt says \"enjoy the food,\" but the student says \"enjoy the delicious food.\" This unnecessary insertion affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",

    perfectCalibrationResponse:
      "The student's main issue is Content accuracy because they insert the extra word \"delicious\" before \"food\" in the final sentence. The prompt says \"enjoy the food,\" but the student says \"enjoy the delicious food.\" This is a specific word insertion that affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",

    coachingAdvice:
      "Practise reading the text exactly as written without adding descriptive words from memory. Focus especially on reproducing short phrases word for word while maintaining natural fluency.",

    cefrLevel: "A2",
    topicTitle: "Cooking Kitchen Recipes",

    good: {
      transcript:
        "Cooking simple recipes can be a useful skill for students and families. Before cooking, people should read the recipe carefully and prepare all the ingredients. It is important to follow the instructions in the correct order. After the meal is ready, everyone can sit together and enjoy the food.",
      audioDuration: "23.5 seconds",
      wordCount: 56,
      characteristics:
        "Clear and continuous delivery with exact reproduction of the reading text."
    },

    poor: {
      transcript:
        "Cooking simple recipes can be a useful skill for students and families. Before cooking, people should read the recipe carefully and prepare all the ingredients. It is important to follow the instructions in the correct order. After the meal is ready, everyone can sit together and enjoy the delicious food.",
      audioDuration: "24.0 seconds",
      wordCount: 57,
      characteristics:
        "Generally clear and appropriately paced delivery, but an extra word is inserted before 'food.'"
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Accurate Content with clear pronunciation and natural fluency."
    },

    poorScore: {
      content: 4,
      fluency: 5,
      pronunciation: 5,
      overall: "87 / 90",
      breakdownText:
        "A single word insertion reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "word-insertion",
        label: "Word insertion",
        keyword: "Word insertion"
      },
      {
        id: "content-accuracy",
        label: "Content accuracy",
        keyword: "Content accuracy"
      },
      {
        id: "extra-word",
        label: "Extra word",
        keyword: "Extra word"
      }
    ],

    expertAdvice:
      "Do not diagnose the added adjective as a vocabulary or pronunciation issue. The important problem is that the student added a word that was not present in the reading text, reducing Content accuracy."
  },

  {
    exerciseIndex: 35,
    totalExercises: 100,
    difficulty: "Intermediate",
    trainingSkill: "Oral Fluency",
    diagnosticArea: "Choppy Phrasing",

    learningObjective:
      "Identify choppy phrasing caused by frequent short pauses within meaningful phrases and distinguish it from overall slow speech or Content errors.",

    promptText:
      "Taking photos and videos is an easy way to remember special moments. People often use their phones to capture pictures when they travel or spend time with friends. Good lighting can make a photo clearer and more attractive. Before sharing a picture online, people should check that it shows what they want others to see.",

    promptAudio:
      "Taking photos and videos is an easy way to remember special moments. People often use their phones to capture pictures when they travel or spend time with friends. Good lighting can make a photo clearer and more attractive. Before sharing a picture online, people should check that it shows what they want others to see.",

    studentTranscript:
      "Taking photos / and videos is an easy way / to remember special moments. People often use their phones / to capture pictures when they travel / or spend time with friends. Good lighting can make a photo / clearer and more attractive. Before sharing a picture online / people should check that it shows what they want / others to see.",

    studentResponse: {
      audioDuration: "27.0 seconds",
      wordCount: 61,
      characteristics:
        "The response contains frequent short pauses inside meaningful phrases, creating a choppy and fragmented delivery despite an otherwise appropriate overall speaking rate."
    },

    diagnosticErrors: [
      "Choppy phrasing",
      "Frequent phrase-internal pauses",
      "Fragmented delivery"
    ],

    expertEvidence: [
      "Short pauses occur inside meaningful phrases rather than only at sentence boundaries",
      "The pauses interrupt natural word grouping",
      "The response sounds fragmented even though the overall speaking rate is not unusually slow",
      "Content remains substantially intact",
      "Pronunciation is generally clear",
      "The main issue is Oral Fluency and natural phrasing",
      "The problem should not be diagnosed simply as slow speech"
    ],

    expertDiagnosis:
      "The main issue is Oral Fluency because the student uses frequent short pauses inside meaningful phrases, creating choppy and fragmented delivery. The overall speaking rate is not unusually slow, and the words remain substantially accurate and clear. The teacher should focus on grouping words into natural phrases and reducing unnecessary phrase-internal pauses rather than diagnosing a general speech-rate or Content problem.",

    perfectCalibrationResponse:
      "The student's main issue is Oral Fluency because frequent short pauses occur inside meaningful phrases, making the delivery sound choppy and fragmented. The overall speaking rate is not unusually slow, and Content and Pronunciation remain generally strong. The teacher should focus on natural word grouping and reducing unnecessary phrase-internal pauses rather than diagnosing a general slow-rate problem.",

    coachingAdvice:
      "Practise reading in natural word groups rather than stopping after individual words or short phrases. Mark meaningful chunks in the text and practise connecting each group smoothly while keeping brief pauses only where they help the listener.",

    cefrLevel: "A2",
    topicTitle: "Taking Photos & Video",

    good: {
      transcript:
        "Taking photos and videos is an easy way to remember special moments. People often use their phones to capture pictures when they travel or spend time with friends. Good lighting can make a photo clearer and more attractive. Before sharing a picture online, people should check that it shows what they want others to see.",
      audioDuration: "24.5 seconds",
      wordCount: 61,
      characteristics:
        "Natural phrasing with appropriate pauses at meaningful boundaries and continuous delivery."
    },

    poor: {
      transcript:
        "Taking photos / and videos is an easy way / to remember special moments. People often use their phones / to capture pictures when they travel / or spend time with friends. Good lighting can make a photo / clearer and more attractive. Before sharing a picture online / people should check that it shows what they want / others to see.",
      audioDuration: "27.0 seconds",
      wordCount: 61,
      characteristics:
        "Frequent phrase-internal pauses create choppy, fragmented delivery despite an otherwise appropriate overall rate."
    },

    goodScore: {
      content: 5,
      fluency: 5,
      pronunciation: 5,
      overall: "90 / 90",
      breakdownText:
        "Natural phrasing with clear pronunciation and appropriate fluency."
    },

    poorScore: {
      content: 5,
      fluency: 3,
      pronunciation: 5,
      overall: "86 / 90",
      breakdownText:
        "Frequent phrase-internal pauses reduce Oral Fluency while Content and Pronunciation remain strong."
    },

    errorChecklist: [
      {
        id: "choppy-phrasing",
        label: "Choppy phrasing",
        keyword: "Choppy phrasing"
      },
      {
        id: "phrase-internal-pauses",
        label: "Phrase-internal pauses",
        keyword: "Phrase-internal pauses"
      },
      {
        id: "fragmented-delivery",
        label: "Fragmented delivery",
        keyword: "Fragmented delivery"
      }
    ],

    expertAdvice:
      "Do not diagnose this simply as speaking too slowly. The key problem is the placement and frequency of pauses within meaningful phrases. Focus on natural word grouping and connected delivery."
  },

  {
  exerciseIndex: 36,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Content Accuracy",
  diagnosticArea: "Word Omission",
  learningObjective:
    "Identify a specific omitted word in a Read Aloud response and distinguish the Content problem from Oral Fluency and Pronunciation.",
  promptText:
    "When a home appliance stops working, I first check the instructions before asking for help. Sometimes a small problem can be fixed at home without calling a technician. I usually unplug the appliance and check the power connection carefully. If the problem continues, I contact a repair service to make sure the appliance is safe to use.",
  promptAudio:
    "When a home appliance stops working, I first check the instructions before asking for help. Sometimes a small problem can be fixed at home without calling a technician. I usually unplug the appliance and check the power connection carefully. If the problem continues, I contact a repair service to make sure the appliance is safe to use.",
  studentTranscript:
    "When a home appliance stops working, I first check the instructions before asking for help. Sometimes a small problem can be fixed at home without calling a technician. I usually unplug the appliance and check the power connection carefully. If the problem continues, I contact a repair service to make sure the appliance is safe to use.",
  studentResponse: {
    audioDuration: "22.5 seconds",
    wordCount: 58,
    characteristics:
      "Clear and appropriately paced delivery with one specific word omitted from the reading text."
  },
  diagnosticErrors: [
    "Word omission",
    "Content accuracy",
    "Missing word"
  ],
  expertEvidence: [
    "The prompt contains the word 'carefully' after 'check the power connection'",
    "The student omits the word 'carefully'",
    "The rest of the reading text is reproduced accurately",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is the omitted word"
  ],
  expertDiagnosis:
    "The student's main issue is Content accuracy because they omit the word \"carefully\" from the third sentence. The prompt says \"I usually unplug the appliance and check the power connection carefully,\" but the student stops after \"connection.\" This specific word omission affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  perfectCalibrationResponse:
    "The student's main issue is Content accuracy because they omit the word \"carefully\" from the third sentence. The prompt says \"I usually unplug the appliance and check the power connection carefully,\" but the student stops after \"connection.\" This specific word omission affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  coachingAdvice:
    "Focus on reading every word in the text without skipping small details. Practise scanning each sentence for the final word or phrase before speaking, while maintaining a natural speaking rate.",
  cefrLevel: "A2",
  topicTitle: "Fixing Home Appliances",
  good: {
    transcript:
      "When a home appliance stops working, I first check the instructions before asking for help. Sometimes a small problem can be fixed at home without calling a technician. I usually unplug the appliance and check the power connection carefully. If the problem continues, I contact a repair service to make sure the appliance is safe to use.",
    audioDuration: "22.5 seconds",
    wordCount: 59,
    characteristics:
      "Clear, continuous and appropriately paced delivery with all words reproduced accurately."
  },
  poor: {
    transcript:
      "When a home appliance stops working, I first check the instructions before asking for help. Sometimes a small problem can be fixed at home without calling a technician. I usually unplug the appliance and check the power connection. If the problem continues, I contact a repair service to make sure the appliance is safe to use.",
    audioDuration: "22.0 seconds",
    wordCount: 58,
    characteristics:
      "Clear and appropriately paced delivery with the word 'carefully' omitted from the third sentence."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "All words are reproduced accurately with clear and continuous delivery."
  },
  poorScore: {
    content: 4,
    fluency: 5,
    pronunciation: 5,
    overall: "87 / 90",
    breakdownText:
      "A specific word omission reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-omission",
      label: "Word omission",
      keyword: "Word omission"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    },
    {
      id: "missing-word",
      label: "Missing word",
      keyword: "Missing word"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a fluency or pronunciation problem. The student's delivery is clear and appropriately paced. Focus on the specific omitted word 'carefully' and reinforce complete word-for-word reproduction of the reading text."
},

{
  exerciseIndex: 37,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Pronunciation",
  diagnosticArea: "Initial Consonant Pronunciation",
  learningObjective:
    "Identify a specific initial consonant pronunciation problem in a Read Aloud response and distinguish it from Content and Oral Fluency problems.",
  promptText:
    "Visiting a wildlife zoo can be an interesting experience for children and adults. People can learn about different animals and see how they live in protected areas. Many zoos provide information about conservation and explain why some species need extra care. Visitors should follow the rules and avoid disturbing the animals during their visit.",
  promptAudio:
    "Visiting a wildlife zoo can be an interesting experience for children and adults. People can learn about different animals and see how they live in protected areas. Many zoos provide information about conservation and explain why some species need extra care. Visitors should follow the rules and avoid disturbing the animals during their visit.",
  studentTranscript:
    "Visiting a wildlife zoo can be an interesting experience for children and adults. People can learn about different animals and see how they live in protected areas. Many zoos provide information about conservation and explain why some species need extra care. Bisitors should follow the rules and avoid disturbing the animals during their visit.",
  studentResponse: {
    audioDuration: "25.0 seconds",
    wordCount: 61,
    characteristics:
      "Generally clear and appropriately paced delivery, but the initial /v/ sound in 'Visitors' is replaced by a /b/-like sound."
  },
  diagnosticErrors: [
    "Initial consonant pronunciation",
    "V sound pronunciation",
    "Pronunciation accuracy"
  ],
  expertEvidence: [
    "The target word is 'Visitors'",
    "The initial /v/ sound is produced unclearly as a /b/-like sound",
    "The pronunciation problem occurs at the beginning of one specific word",
    "The remaining words are delivered clearly",
    "Overall speech rate remains appropriate",
    "The Content remains substantially intact",
    "The main issue requiring attention is the initial consonant pronunciation"
  ],
  expertDiagnosis:
    "The student's main issue is Pronunciation accuracy, specifically the initial /v/ sound in the word \"Visitors.\" The sound is produced more like a /b/, creating a localized pronunciation problem. The rest of the response is clear and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific initial consonant rather than diagnosing poor fluency or speech rate.",
  perfectCalibrationResponse:
    "The student's main issue is Pronunciation accuracy, specifically the initial /v/ sound in the word \"Visitors.\" The sound is produced more like a /b/, creating a localized pronunciation problem. The rest of the response is clear and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific initial consonant rather than diagnosing poor fluency or speech rate.",
  coachingAdvice:
    "Practise the /v/ sound by placing the upper teeth lightly against the lower lip and allowing the voice to continue through the sound. Contrast 'vest' and 'best,' then practise 'Visitors' in short sentences while maintaining a natural speaking rate.",
  cefrLevel: "A2",
  topicTitle: "Visiting Wildlife Zoos",
  good: {
    transcript:
      "Visiting a wildlife zoo can be an interesting experience for children and adults. People can learn about different animals and see how they live in protected areas. Many zoos provide information about conservation and explain why some species need extra care. Visitors should follow the rules and avoid disturbing the animals during their visit.",
    audioDuration: "25.0 seconds",
    wordCount: 61,
    characteristics:
      "Clear pronunciation of the initial consonants with appropriate pace and continuous delivery."
  },
  poor: {
    transcript:
      "Visiting a wildlife zoo can be an interesting experience for children and adults. People can learn about different animals and see how they live in protected areas. Many zoos provide information about conservation and explain why some species need extra care. Bisitors should follow the rules and avoid disturbing the animals during their visit.",
    audioDuration: "25.0 seconds",
    wordCount: 61,
    characteristics:
      "Generally clear and appropriately paced delivery, but the initial /v/ sound in 'Visitors' is replaced by a /b/-like sound."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear pronunciation with appropriate pace and continuous delivery."
  },
  poorScore: {
    content: 5,
    fluency: 5,
    pronunciation: 3,
    overall: "84 / 90",
    breakdownText:
      "A specific initial consonant pronunciation problem reduces Pronunciation accuracy while Content and Oral Fluency remain strong."
  },
  errorChecklist: [
    {
      id: "initial-consonant",
      label: "Initial consonant pronunciation",
      keyword: "Initial consonant pronunciation"
    },
    {
      id: "v-sound-pronunciation",
      label: "V sound pronunciation",
      keyword: "V sound pronunciation"
    },
    {
      id: "pronunciation-accuracy",
      label: "Pronunciation accuracy",
      keyword: "Pronunciation accuracy"
    }
  ],
  expertAdvice:
    "Do not diagnose this as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus on the initial /v/ sound in 'Visitors' and provide targeted pronunciation coaching."
},

{
  exerciseIndex: 38,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Excessive Phrase-Internal Pausing",
  learningObjective:
    "Identify excessive pauses inside meaningful phrases in a Read Aloud response and distinguish them from sentence-boundary pausing, overall speech rate, and pronunciation problems.",
  promptText:
    "School field trips give students a chance to learn outside the classroom. Teachers may take their classes to museums, science centers, parks, or historical places. Before the trip, students should listen carefully to the instructions and stay with their group. A well-planned field trip can make learning more interesting and memorable.",
  promptAudio:
    "School field trips give students a chance to learn outside the classroom. Teachers may take their classes to museums, science centers, parks, or historical places. Before the trip, students should listen carefully to the instructions and stay with their group. A well-planned field trip can make learning more interesting and memorable.",
  studentTranscript:
    "School field trips give students a chance / to learn outside the classroom. Teachers may take their classes / to museums, science centers, parks, / or historical places. Before the trip, students should listen carefully / to the instructions and stay with their group. A well-planned field trip / can make learning more interesting and memorable.",
  studentResponse: {
    audioDuration: "27.0 seconds",
    wordCount: 57,
    characteristics:
      "The response is generally clear and appropriately paced between pauses, but frequent pauses occur inside meaningful phrases, making the delivery sound fragmented."
  },
  diagnosticErrors: [
    "Excessive phrase-internal pausing",
    "Fragmented delivery",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The student pauses inside meaningful phrases such as 'a chance / to learn'",
    "The student pauses inside 'their classes / to museums'",
    "The student pauses inside 'parks, / or historical places'",
    "The student pauses inside 'listen carefully / to the instructions'",
    "The student pauses inside 'field trip / can make'",
    "These pauses interrupt natural word grouping",
    "The overall speaking rate between pauses remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is excessive phrase-internal pausing"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because frequent pauses occur inside meaningful phrases, interrupting natural word grouping and making the delivery sound fragmented. The overall speaking rate between pauses remains appropriate, so this should not be diagnosed as simply speaking too slowly. Pronunciation is also generally clear. The teacher should focus on reducing unnecessary phrase-internal pauses and maintaining natural thought groups.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because frequent pauses occur inside meaningful phrases, interrupting natural word grouping and making the delivery sound fragmented. The overall speaking rate between pauses remains appropriate, so this should not be diagnosed as simply speaking too slowly. Pronunciation is also generally clear. The teacher should focus on reducing unnecessary phrase-internal pauses and maintaining natural thought groups.",
  coachingAdvice:
    "Practise reading in natural thought groups rather than stopping between closely connected words. For example, say 'a chance to learn' as one smooth phrase and 'their classes to museums' without an unnecessary break. Aim for connected speech while keeping a comfortable overall rate.",
  cefrLevel: "A2",
  topicTitle: "School Field Trips",
  good: {
    transcript:
      "School field trips give students a chance to learn outside the classroom. Teachers may take their classes to museums, science centers, parks, or historical places. Before the trip, students should listen carefully to the instructions and stay with their group. A well-planned field trip can make learning more interesting and memorable.",
    audioDuration: "24.5 seconds",
    wordCount: 57,
    characteristics:
      "Clear, continuous and appropriately paced delivery with natural word grouping."
  },
  poor: {
    transcript:
      "School field trips give students a chance / to learn outside the classroom. Teachers may take their classes / to museums, science centers, parks, / or historical places. Before the trip, students should listen carefully / to the instructions and stay with their group. A well-planned field trip / can make learning more interesting and memorable.",
    audioDuration: "27.0 seconds",
    wordCount: 57,
    characteristics:
      "The response is generally clear and appropriately paced between pauses, but frequent pauses occur inside meaningful phrases, making the delivery sound fragmented."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Natural word grouping with clear and continuous delivery."
  },
  poorScore: {
    content: 5,
    fluency: 3,
    pronunciation: 5,
    overall: "84 / 90",
    breakdownText:
      "Frequent phrase-internal pauses disrupt Oral Fluency while Content and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "excessive-phrase-internal-pausing",
      label: "Excessive phrase-internal pausing",
      keyword: "Excessive phrase-internal pausing"
    },
    {
      id: "fragmented-delivery",
      label: "Fragmented delivery",
      keyword: "Fragmented delivery"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this as simply speaking too slowly. The defining problem is the frequent pauses inside meaningful phrases. Focus on natural word grouping and connected speech while maintaining the same comfortable overall rate."
},

{
  exerciseIndex: 39,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Content Accuracy",
  diagnosticArea: "Word Substitution",
  learningObjective:
    "Identify a specific substituted word in a Read Aloud response and distinguish the Content problem from Oral Fluency and Pronunciation.",
  promptText:
    "Many people enjoy watching TV shows and movies in their free time. Some people prefer comedies because they are funny and relaxing. Others enjoy action films because they like exciting stories and special effects. Watching a good movie can also be a pleasant way to spend an evening with friends or family.",
  promptAudio:
    "Many people enjoy watching TV shows and movies in their free time. Some people prefer comedies because they are funny and relaxing. Others enjoy action films because they like exciting stories and special effects. Watching a good movie can also be a pleasant way to spend an evening with friends or family.",
  studentTranscript:
    "Many people enjoy watching TV shows and movies in their free time. Some people prefer comedies because they are funny and relaxing. Others enjoy action films because they like exciting stories and special effects. Watching a good movie can also be a pleasant way to spend an evening with friends or friends.",
  studentResponse: {
    audioDuration: "24.5 seconds",
    wordCount: 57,
    characteristics:
      "Clear and appropriately paced delivery with one specific word substituted near the end of the response."
  },
  diagnosticErrors: [
    "Word substitution",
    "Content accuracy",
    "Incorrect word reproduction"
  ],
  expertEvidence: [
    "The prompt ends with 'friends or family'",
    "The student says 'friends or friends'",
    "The second occurrence of 'friends' substitutes for the target word 'family'",
    "The rest of the reading text is reproduced accurately",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is the substituted word"
  ],
  expertDiagnosis:
    "The student's main issue is Content accuracy because they substitute the word \"friends\" for \"family\" near the end of the response. The prompt says \"friends or family,\" but the student says \"friends or friends.\" This specific word substitution affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  perfectCalibrationResponse:
    "The student's main issue is Content accuracy because they substitute the word \"friends\" for \"family\" near the end of the response. The prompt says \"friends or family,\" but the student says \"friends or friends.\" This specific word substitution affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  coachingAdvice:
    "Focus on reproducing the exact words in the reading text rather than relying on familiar phrases. Practise the final sentence slowly enough to notice each word, then return to a natural speaking rate.",
  cefrLevel: "A2",
  topicTitle: "TV Shows & Cinema Movies",
  good: {
    transcript:
      "Many people enjoy watching TV shows and movies in their free time. Some people prefer comedies because they are funny and relaxing. Others enjoy action films because they like exciting stories and special effects. Watching a good movie can also be a pleasant way to spend an evening with friends or family.",
    audioDuration: "24.5 seconds",
    wordCount: 57,
    characteristics:
      "Clear, continuous and appropriately paced delivery with accurate word reproduction."
  },
  poor: {
    transcript:
      "Many people enjoy watching TV shows and movies in their free time. Some people prefer comedies because they are funny and relaxing. Others enjoy action films because they like exciting stories and special effects. Watching a good movie can also be a pleasant way to spend an evening with friends or friends.",
    audioDuration: "24.5 seconds",
    wordCount: 57,
    characteristics:
      "Clear and appropriately paced delivery with the word 'friends' substituted for 'family' near the end."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Accurate word reproduction with clear and continuous delivery."
  },
  poorScore: {
    content: 4,
    fluency: 5,
    pronunciation: 5,
    overall: "87 / 90",
    breakdownText:
      "A specific word substitution reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-substitution",
      label: "Word substitution",
      keyword: "Word substitution"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    },
    {
      id: "incorrect-word",
      label: "Incorrect word reproduction",
      keyword: "Incorrect word reproduction"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a pronunciation or fluency problem. The student's delivery is clear and appropriately paced. Focus on the specific substitution of 'friends' for 'family' and reinforce accurate reproduction of the reading text."
},

{
  exerciseIndex: 40,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Word Repetition",
  learningObjective:
    "Identify an unnecessary repeated content word in a Read Aloud response and distinguish repetition from hesitation, speech-rate, pronunciation, and Content problems.",
  promptText:
    "Community gardens give people a chance to grow plants in shared spaces. Neighbors can work together to prepare the soil, plant vegetables, and take care of the garden. These projects can provide fresh food and create friendly connections between local residents. Gardening together can also make empty areas more useful and attractive.",
  promptAudio:
    "Community gardens give people a chance to grow plants in shared spaces. Neighbors can work together to prepare the soil, plant vegetables, and take care of the garden. These projects can provide fresh food and create friendly connections between local residents. Gardening together can also make empty areas more useful and attractive.",
  studentTranscript:
    "Community gardens give people a chance to grow plants in shared spaces. Neighbors can work together to prepare the soil, plant vegetables, and take care of the garden. These projects can provide fresh fresh food and create friendly connections between local residents. Gardening together can also make empty areas more useful and attractive.",
  studentResponse: {
    audioDuration: "25.5 seconds",
    wordCount: 60,
    characteristics:
      "Generally clear and appropriately paced delivery, but the word 'fresh' is unnecessarily repeated before 'food', creating a brief fluency disruption."
  },
  diagnosticErrors: [
    "Word repetition",
    "Unnecessary repetition",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The prompt says 'provide fresh food'",
    "The student says 'provide fresh fresh food'",
    "The word 'fresh' is repeated unnecessarily",
    "The repeated word creates a brief interruption in otherwise continuous delivery",
    "The overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is unnecessary word repetition"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because they unnecessarily repeat the word \"fresh\" in the phrase \"provide fresh fresh food.\" The repeated word creates a brief disruption in otherwise continuous delivery. The overall speaking rate remains appropriate and Pronunciation is generally clear. The teacher should therefore focus on reducing unnecessary repetitions rather than diagnosing a general speech-rate or pronunciation problem.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because they unnecessarily repeat the word \"fresh\" in the phrase \"provide fresh fresh food.\" The repeated word creates a brief disruption in otherwise continuous delivery. The overall speaking rate remains appropriate and Pronunciation is generally clear. The teacher should therefore focus on reducing unnecessary repetitions rather than diagnosing a general speech-rate or pronunciation problem.",
  coachingAdvice:
    "Practise reading in short phrases and focus on moving smoothly from one word to the next without repeating words. If a repetition occurs, continue naturally rather than restarting the phrase.",
  cefrLevel: "A2",
  topicTitle: "Community Urban Gardening",
  good: {
    transcript:
      "Community gardens give people a chance to grow plants in shared spaces. Neighbors can work together to prepare the soil, plant vegetables, and take care of the garden. These projects can provide fresh food and create friendly connections between local residents. Gardening together can also make empty areas more useful and attractive.",
    audioDuration: "24.5 seconds",
    wordCount: 59,
    characteristics:
      "Clear, continuous and appropriately paced delivery without unnecessary word repetitions."
  },
  poor: {
    transcript:
      "Community gardens give people a chance to grow plants in shared spaces. Neighbors can work together to prepare the soil, plant vegetables, and take care of the garden. These projects can provide fresh fresh food and create friendly connections between local residents. Gardening together can also make empty areas more useful and attractive.",
    audioDuration: "25.5 seconds",
    wordCount: 60,
    characteristics:
      "Generally clear and appropriately paced delivery, but the word 'fresh' is unnecessarily repeated before 'food', creating a brief fluency disruption."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear and continuous delivery without unnecessary repetitions."
  },
  poorScore: {
    content: 5,
    fluency: 3,
    pronunciation: 5,
    overall: "84 / 90",
    breakdownText:
      "An unnecessary word repetition creates a brief Oral Fluency disruption while Content and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-repetition",
      label: "Word repetition",
      keyword: "Word repetition"
    },
    {
      id: "unnecessary-repetition",
      label: "Unnecessary repetition",
      keyword: "Unnecessary repetition"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this as poor speech rate or pronunciation. The overall delivery is clear and appropriately paced. Focus specifically on the unnecessary repetition of 'fresh' and maintaining smooth continuous delivery."
},

{
  exerciseIndex: 41,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Content Accuracy",
  diagnosticArea: "Word Sequence Disruption",
  learningObjective:
    "Identify a word-order disruption in a Read Aloud response and distinguish Content accuracy from Oral Fluency and Pronunciation problems.",
  promptText:
    "Remote work has become common in many modern workplaces. Employees can often complete their tasks from home while communicating with colleagues through online tools. Hybrid jobs allow workers to spend some days at home and other days in the office. Good communication and careful planning are important when people work in different locations.",
  promptAudio:
    "Remote work has become common in many modern workplaces. Employees can often complete their tasks from home while communicating with colleagues through online tools. Hybrid jobs allow workers to spend some days at home and other days in the office. Good communication and careful planning are important when people work in different locations.",
  studentTranscript:
    "Remote work has become common in many modern workplaces. Employees can often complete their tasks from home while communicating with colleagues through online tools. Hybrid jobs allow workers to spend some days at home and other days in the office. Good communication and careful planning are important when people work in different locations.",
  studentResponse: {
    audioDuration: "25.5 seconds",
    wordCount: 64,
    characteristics:
      "Generally clear and appropriately paced delivery, but the final phrase contains a word-order disruption."
  },
  diagnosticErrors: [
    "Word sequence disruption",
    "Content accuracy",
    "Incorrect word order"
  ],
  expertEvidence: [
    "The prompt says 'work in different locations'",
    "The student says 'work in locations different'",
    "The words are present but their order has been disrupted",
    "The error occurs in the final phrase",
    "The rest of the response is reproduced accurately",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is Content accuracy"
  ],
  expertDiagnosis:
    "The student's main issue is Content accuracy because the word sequence in the final phrase is incorrect. The prompt says \"work in different locations,\" but the student says \"work in locations different.\" The words are present but their order has been disrupted, so the response does not accurately reproduce the reading text. Oral Fluency and Pronunciation remain generally strong because the student speaks clearly, continuously and at an appropriate pace.",
  perfectCalibrationResponse:
    "The student's main issue is Content accuracy because the word sequence in the final phrase is incorrect. The prompt says \"work in different locations,\" but the student says \"work in locations different.\" The words are present but their order has been disrupted, so the response does not accurately reproduce the reading text. Oral Fluency and Pronunciation remain generally strong because the student speaks clearly, continuously and at an appropriate pace.",
  coachingAdvice:
    "Focus on reproducing the exact sequence of words in each phrase. Practise the final phrase as one unit — 'work in different locations' — while keeping the overall delivery natural and continuous.",
  cefrLevel: "B1",
  topicTitle: "Remote Work & Hybrid Jobs",
  good: {
    transcript:
      "Remote work has become common in many modern workplaces. Employees can often complete their tasks from home while communicating with colleagues through online tools. Hybrid jobs allow workers to spend some days at home and other days in the office. Good communication and careful planning are important when people work in different locations.",
    audioDuration: "25.0 seconds",
    wordCount: 64,
    characteristics:
      "Clear, continuous and appropriately paced delivery with accurate word sequence."
  },
  poor: {
    transcript:
      "Remote work has become common in many modern workplaces. Employees can often complete their tasks from home while communicating with colleagues through online tools. Hybrid jobs allow workers to spend some days at home and other days in the office. Good communication and careful planning are important when people work in locations different.",
    audioDuration: "25.5 seconds",
    wordCount: 64,
    characteristics:
      "Generally clear and appropriately paced delivery, but the final phrase contains a word-order disruption."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Accurate word sequence with clear and continuous delivery."
  },
  poorScore: {
    content: 4,
    fluency: 5,
    pronunciation: 5,
    overall: "87 / 90",
    breakdownText:
      "A specific word-sequence disruption reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-sequence-disruption",
      label: "Word sequence disruption",
      keyword: "Word sequence disruption"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    },
    {
      id: "incorrect-word-order",
      label: "Incorrect word order",
      keyword: "Incorrect word order"
    }
  ],
  expertAdvice:
    "Do not diagnose this primarily as a fluency or pronunciation problem. The student's delivery remains clear and appropriately paced. Focus on the incorrect sequence 'work in locations different' compared with the target 'work in different locations.'"
},

{
  exerciseIndex: 42,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Filler Words",
  learningObjective:
    "Identify repeated filler words in a Read Aloud response and distinguish them from Content, Pronunciation, and overall speech-rate problems.",
  promptText:
    "Social media plays an important role in the lives of many young people. Students use online platforms to communicate with friends, share photos, and discover new ideas. However, spending too much time online can reduce the time available for study, exercise, and face-to-face communication. Young people should try to maintain a healthy balance between online and offline activities.",
  promptAudio:
    "Social media plays an important role in the lives of many young people. Students use online platforms to communicate with friends, share photos, and discover new ideas. However, spending too much time online can reduce the time available for study, exercise, and face-to-face communication. Young people should try to maintain a healthy balance between online and offline activities.",
  studentTranscript:
    "Social media plays an important role in the lives of many young people. Students use online platforms to communicate with friends, um, share photos, and discover new ideas. However, spending too much time online can reduce the time available for study, exercise, um, and face-to-face communication. Young people should try to maintain a healthy balance between online and offline activities.",
  studentResponse: {
    audioDuration: "29.0 seconds",
    wordCount: 64,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker inserts audible 'um' filler words during the reading."
  },
  diagnosticErrors: [
    "Filler words",
    "Hesitation",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The student inserts 'um' after 'friends'",
    "The student inserts another 'um' before 'and face-to-face communication'",
    "The filler words interrupt otherwise continuous delivery",
    "The overall speaking rate remains appropriate",
    "Content remains substantially intact",
    "Pronunciation is generally clear",
    "The main issue requiring attention is the use of filler words"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because they repeatedly use the filler \"um\" during the reading. The student inserts \"um\" after \"friends\" and again before \"and face-to-face communication,\" interrupting otherwise continuous delivery. Content remains substantially accurate and Pronunciation is generally clear. The teacher should therefore focus on reducing vocalized fillers and maintaining smooth, continuous speech rather than diagnosing a Content, Pronunciation or speech-rate problem.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because they repeatedly use the filler \"um\" during the reading. The student inserts \"um\" after \"friends\" and again before \"and face-to-face communication,\" interrupting otherwise continuous delivery. Content remains substantially accurate and Pronunciation is generally clear. The teacher should therefore focus on reducing vocalized fillers and maintaining smooth, continuous speech rather than diagnosing a Content, Pronunciation or speech-rate problem.",
  coachingAdvice:
    "Practise replacing vocalized fillers such as 'um' with brief silent pauses. Read short sections repeatedly while keeping the delivery smooth and continuous without inserting filler words.",
  cefrLevel: "B1",
  topicTitle: "Social Media & Youth Culture",
  good: {
    transcript:
      "Social media plays an important role in the lives of many young people. Students use online platforms to communicate with friends, share photos, and discover new ideas. However, spending too much time online can reduce the time available for study, exercise, and face-to-face communication. Young people should try to maintain a healthy balance between online and offline activities.",
    audioDuration: "27.0 seconds",
    wordCount: 62,
    characteristics:
      "Clear, continuous and appropriately paced delivery without vocalized fillers."
  },
  poor: {
    transcript:
      "Social media plays an important role in the lives of many young people. Students use online platforms to communicate with friends, um, share photos, and discover new ideas. However, spending too much time online can reduce the time available for study, exercise, um, and face-to-face communication. Young people should try to maintain a healthy balance between online and offline activities.",
    audioDuration: "29.0 seconds",
    wordCount: 64,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker inserts audible 'um' filler words during the reading."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Smooth continuous delivery without vocalized fillers."
  },
  poorScore: {
    content: 5,
    fluency: 3,
    pronunciation: 5,
    overall: "84 / 90",
    breakdownText:
      "Repeated filler words disrupt Oral Fluency while Content and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "filler-words",
      label: "Filler words",
      keyword: "Filler words"
    },
    {
      id: "hesitation",
      label: "Hesitation",
      keyword: "Hesitation"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a Content, Pronunciation or general speech-rate problem. The key issue is the audible use of 'um' as a filler. Focus on replacing vocalized fillers with brief silent pauses while maintaining natural continuous speech."
},

{
  exerciseIndex: 43,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Content Accuracy",
  diagnosticArea: "Word Insertion",
  learningObjective:
    "Identify an inserted word in a Read Aloud response and distinguish Content accuracy from Oral Fluency and Pronunciation problems.",
  promptText:
    "Solar power can help households reduce their use of electricity from traditional sources. Many families install solar panels on their roofs to generate energy during the day. The electricity can be used to operate lights, appliances, and other equipment in the home. Over time, solar power may help reduce energy costs and support cleaner energy production.",
  promptAudio:
    "Solar power can help households reduce their use of electricity from traditional sources. Many families install solar panels on their roofs to generate energy during the day. The electricity can be used to operate lights, appliances, and other equipment in the home. Over time, solar power may help reduce energy costs and support cleaner energy production.",
  studentTranscript:
    "Solar power can help households reduce their use of electricity from traditional sources. Many families install solar panels on their roofs to generate energy during the day. The electricity can be used to operate lights, appliances, and other equipment in the home. Over time, solar power may help reduce energy costs and support cleaner energy production.",
  studentResponse: {
    audioDuration: "27.0 seconds",
    wordCount: 63,
    characteristics:
      "Clear and appropriately paced delivery with one additional word inserted into the final sentence."
  },
  diagnosticErrors: [
    "Word insertion",
    "Content accuracy",
    "Extra word"
  ],
  expertEvidence: [
    "The prompt says 'reduce energy costs'",
    "The student says 'reduce energy costs significantly'",
    "The word 'significantly' is an extra word not present in the prompt",
    "The insertion occurs in the final sentence",
    "The rest of the reading text is reproduced accurately",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is Content accuracy"
  ],
  expertDiagnosis:
    "The student's main issue is Content accuracy because they insert the extra word \"significantly\" into the final sentence. The prompt says \"reduce energy costs,\" but the student says \"reduce energy costs significantly.\" This specific word insertion affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  perfectCalibrationResponse:
    "The student's main issue is Content accuracy because they insert the extra word \"significantly\" into the final sentence. The prompt says \"reduce energy costs,\" but the student says \"reduce energy costs significantly.\" This specific word insertion affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  coachingAdvice:
    "Focus on reproducing only the words that appear in the reading text. Practise the final sentence carefully and avoid adding words that seem natural but are not actually written on the screen.",
  cefrLevel: "B1",
  topicTitle: "Home Solar Power Savings",
  good: {
    transcript:
      "Solar power can help households reduce their use of electricity from traditional sources. Many families install solar panels on their roofs to generate energy during the day. The electricity can be used to operate lights, appliances, and other equipment in the home. Over time, solar power may help reduce energy costs and support cleaner energy production.",
    audioDuration: "26.5 seconds",
    wordCount: 62,
    characteristics:
      "Clear, continuous and appropriately paced delivery with exact word reproduction."
  },
  poor: {
    transcript:
      "Solar power can help households reduce their use of electricity from traditional sources. Many families install solar panels on their roofs to generate energy during the day. The electricity can be used to operate lights, appliances, and other equipment in the home. Over time, solar power may help reduce energy costs significantly and support cleaner energy production.",
    audioDuration: "27.0 seconds",
    wordCount: 63,
    characteristics:
      "Clear and appropriately paced delivery with the extra word 'significantly' inserted into the final sentence."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Exact word reproduction with clear and continuous delivery."
  },
  poorScore: {
    content: 4,
    fluency: 5,
    pronunciation: 5,
    overall: "87 / 90",
    breakdownText:
      "A specific word insertion reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-insertion",
      label: "Word insertion",
      keyword: "Word insertion"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    },
    {
      id: "extra-word",
      label: "Extra word",
      keyword: "Extra word"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a pronunciation or fluency problem. The student's delivery is clear and appropriately paced. Focus specifically on the inserted word 'significantly' and reinforce exact reproduction of the reading text."
},

{
  exerciseIndex: 44,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Phrase-Internal Pausing",
  learningObjective:
    "Identify frequent pauses inside meaningful phrases in a Read Aloud response and distinguish them from sentence-boundary pauses and overall slow speech.",
  promptText:
    "Living in a university dormitory can help students become more independent. Students usually share common areas such as kitchens, study rooms, and laundry facilities. They can meet people from different backgrounds and learn how to manage their daily responsibilities. Living with other students can also make university life more social and enjoyable.",
  promptAudio:
    "Living in a university dormitory can help students become more independent. Students usually share common areas such as kitchens, study rooms, and laundry facilities. They can meet people from different backgrounds and learn how to manage their daily responsibilities. Living with other students can also make university life more social and enjoyable.",
  studentTranscript:
    "Living in a university dormitory can help students / become more independent. Students usually share common areas / such as kitchens, study rooms, and laundry facilities. They can meet people from different backgrounds / and learn how to manage their daily responsibilities. Living with other students / can also make university life more social and enjoyable.",
  studentResponse: {
    audioDuration: "29.0 seconds",
    wordCount: 62,
    characteristics:
      "Clear pronunciation and acceptable overall pace, but frequent pauses occur inside meaningful phrases and interrupt natural word grouping."
  },
  diagnosticErrors: [
    "Phrase-internal pausing",
    "Fragmented delivery",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The student pauses between 'students' and 'become more independent'",
    "The student pauses between 'common areas' and 'such as kitchens'",
    "The student pauses between 'backgrounds' and 'and learn'",
    "The student pauses between 'other students' and 'can also make'",
    "The pauses interrupt natural phrase grouping",
    "The overall speaking rate between pauses remains appropriate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is phrase-internal pausing"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because frequent pauses occur inside meaningful phrases, interrupting natural word grouping and making the delivery sound fragmented. The overall speaking rate between pauses remains appropriate, so this should not be diagnosed simply as speaking too slowly. Pronunciation is generally clear. The teacher should focus on connected speech and maintaining natural thought groups.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because frequent pauses occur inside meaningful phrases, interrupting natural word grouping and making the delivery sound fragmented. The overall speaking rate between pauses remains appropriate, so this should not be diagnosed simply as speaking too slowly. Pronunciation is generally clear. The teacher should focus on connected speech and maintaining natural thought groups.",
  coachingAdvice:
    "Practise keeping closely connected words together in natural thought groups. For example, say 'students become more independent' and 'common areas such as kitchens' without stopping inside the phrase.",
  cefrLevel: "B1",
  topicTitle: "University Dormitory Life",
  good: {
    transcript:
      "Living in a university dormitory can help students become more independent. Students usually share common areas such as kitchens, study rooms, and laundry facilities. They can meet people from different backgrounds and learn how to manage their daily responsibilities. Living with other students can also make university life more social and enjoyable.",
    audioDuration: "26.5 seconds",
    wordCount: 62,
    characteristics:
      "Clear, connected and appropriately paced delivery with natural phrase grouping."
  },
  poor: {
    transcript:
      "Living in a university dormitory can help students / become more independent. Students usually share common areas / such as kitchens, study rooms, and laundry facilities. They can meet people from different backgrounds / and learn how to manage their daily responsibilities. Living with other students / can also make university life more social and enjoyable.",
    audioDuration: "29.0 seconds",
    wordCount: 62,
    characteristics:
      "Clear pronunciation and acceptable overall pace, but frequent pauses occur inside meaningful phrases and interrupt natural word grouping."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Natural phrase grouping with clear and continuous delivery."
  },
  poorScore: {
    content: 5,
    fluency: 3,
    pronunciation: 5,
    overall: "84 / 90",
    breakdownText:
      "Frequent phrase-internal pauses disrupt Oral Fluency while Content and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "phrase-internal-pausing",
      label: "Phrase-internal pausing",
      keyword: "Phrase-internal pausing"
    },
    {
      id: "fragmented-delivery",
      label: "Fragmented delivery",
      keyword: "Fragmented delivery"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this simply as slow speaking. The defining issue is the placement of pauses inside meaningful phrases. Focus on connected speech, natural word grouping and maintaining an appropriate overall rate."
},

{
  exerciseIndex: 45,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Pronunciation",
  diagnosticArea: "TH Sound Pronunciation",
  learningObjective:
    "Identify a specific TH sound pronunciation problem in a Read Aloud response and distinguish it from Content and Oral Fluency problems.",
  promptText:
    "Modern public libraries are changing to meet the needs of their communities. Many libraries now provide computers, digital resources, quiet study areas, and spaces for group activities. They may also offer workshops that help people develop useful technology skills. These changes allow libraries to remain valuable places for learning, information, and community connection.",
  promptAudio:
    "Modern public libraries are changing to meet the needs of their communities. Many libraries now provide computers, digital resources, quiet study areas, and spaces for group activities. They may also offer workshops that help people develop useful technology skills. These changes allow libraries to remain valuable places for learning, information, and community connection.",
  studentTranscript:
    "Modern public libraries are changing to meet the needs of their communities. Many libraries now provide computers, digital resources, quiet study areas, and spaces for group activities. They may also offer workshops that help people develop useful technology skills. These changes allow libraries to remain valuable places for learning, information, and community connection.",
  studentResponse: {
    audioDuration: "28.5 seconds",
    wordCount: 65,
    characteristics:
      "Generally clear and appropriately paced delivery, but the initial TH sound in 'These' is replaced by a /t/-like sound."
  },
  diagnosticErrors: [
    "TH sound pronunciation",
    "Initial consonant pronunciation",
    "Pronunciation accuracy"
  ],
  expertEvidence: [
    "The target word is 'These'",
    "The initial voiced TH sound is produced more like a /t/-like sound",
    "The pronunciation issue occurs at the beginning of one specific word",
    "The remaining words are delivered clearly",
    "Overall speaking rate remains appropriate",
    "Content remains substantially intact",
    "The main issue requiring attention is the specific TH sound"
  ],
  expertDiagnosis:
    "The student's main issue is Pronunciation accuracy, specifically the initial TH sound in the word \"These.\" The target sound is produced more like a /t/-like sound, creating a localized pronunciation problem. The rest of the response is clear and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific TH sound rather than diagnosing poor fluency or speech rate.",
  perfectCalibrationResponse:
    "The student's main issue is Pronunciation accuracy, specifically the initial TH sound in the word \"These.\" The target sound is produced more like a /t/-like sound, creating a localized pronunciation problem. The rest of the response is clear and appropriately paced, with the Content substantially intact. The teacher should therefore focus on the specific TH sound rather than diagnosing poor fluency or speech rate.",
  coachingAdvice:
    "Practise the voiced TH sound by placing the tongue lightly between or just behind the teeth and allowing the voice to continue through the sound. Contrast 'these' with 'tease,' then practise 'These changes' in short sentences.",
  cefrLevel: "B1",
  topicTitle: "Public Library Modernization",
  good: {
    transcript:
      "Modern public libraries are changing to meet the needs of their communities. Many libraries now provide computers, digital resources, quiet study areas, and spaces for group activities. They may also offer workshops that help people develop useful technology skills. These changes allow libraries to remain valuable places for learning, information, and community connection.",
    audioDuration: "28.0 seconds",
    wordCount: 65,
    characteristics:
      "Clear pronunciation with accurate TH sounds, appropriate pace and continuous delivery."
  },
  poor: {
    transcript:
      "Modern public libraries are changing to meet the needs of their communities. Many libraries now provide computers, digital resources, quiet study areas, and spaces for group activities. They may also offer workshops that help people develop useful technology skills. Teese changes allow libraries to remain valuable places for learning, information, and community connection.",
    audioDuration: "28.5 seconds",
    wordCount: 65,
    characteristics:
      "Generally clear and appropriately paced delivery, but the initial TH sound in 'These' is replaced by a /t/-like sound."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear pronunciation with accurate TH sounds and continuous delivery."
  },
  poorScore: {
    content: 5,
    fluency: 5,
    pronunciation: 3,
    overall: "84 / 90",
    breakdownText:
      "A localized TH sound pronunciation problem reduces Pronunciation accuracy while Content and Oral Fluency remain strong."
  },
  errorChecklist: [
    {
      id: "th-sound-pronunciation",
      label: "TH sound pronunciation",
      keyword: "TH sound pronunciation"
    },
    {
      id: "initial-consonant-pronunciation",
      label: "Initial consonant pronunciation",
      keyword: "Initial consonant pronunciation"
    },
    {
      id: "pronunciation-accuracy",
      label: "Pronunciation accuracy",
      keyword: "Pronunciation accuracy"
    }
  ],
  expertAdvice:
    "Do not diagnose this as poor fluency or speaking too fast. The student's overall rate and continuity are appropriate. Focus specifically on the initial TH sound in 'These' and provide targeted pronunciation coaching."
},

{
  exerciseIndex: 46,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Pronunciation",
  diagnosticArea: "Initial Consonant Pronunciation",
  learningObjective:
    "Identify a clearly audible consonant pronunciation problem in a common word and distinguish it from Content and Oral Fluency problems.",
  promptText:
    "A healthy diet provides the body with the nutrients it needs to stay strong and active. People should include a variety of fruits, vegetables, grains, and protein in their meals. Drinking enough water is also important for maintaining good health. A balanced diet can improve energy levels and help people develop healthy habits for the future.",
  promptAudio:
    "A healthy diet provides the body with the nutrients it needs to stay strong and active. People should include a variety of fruits, vegetables, grains, and protein in their meals. Drinking enough water is also important for maintaining good health. A balanced diet can improve energy levels and help people develop healthy habits for the future.",
  studentTranscript:
    "A healthy diet provides the body with the nutrients it needs to stay strong and active. People should include a variety of fruits, vegetables, grains, and protein in their meals. Drinking enough water is also important for maintaining good health. A balanced diet can improve energy levels and help people develop healthy habits for the future.",
  studentResponse: {
    audioDuration: "25.0 seconds",
    wordCount: 62,
    characteristics:
      "Generally clear and appropriately paced delivery, but the initial consonant sound in the word 'strong' is changed, making the word sound like 'throng'."
  },
  diagnosticErrors: [
    "Initial consonant pronunciation",
    "Consonant sound substitution",
    "Pronunciation accuracy"
  ],
  expertEvidence: [
    "The target word is 'strong'",
    "The student changes the initial consonant sound in 'strong'",
    "The result sounds like 'throng' rather than 'strong'",
    "The pronunciation problem is localized to one specific word",
    "The remaining words are generally clear",
    "Overall speaking rate remains appropriate",
    "The response is continuous without significant fillers or unnatural pauses",
    "Content remains substantially intact",
    "The main issue requiring attention is Pronunciation accuracy"
  ],
  expertDiagnosis:
    "The student's main issue is Pronunciation accuracy because the initial consonant sound in the word \"strong\" is changed, making the word sound like \"throng.\" This is a localized pronunciation problem. The rest of the response is clear, continuous and appropriately paced, with the Content substantially intact.",
  perfectCalibrationResponse:
    "The student's main issue is Pronunciation accuracy because the initial consonant sound in the word \"strong\" is changed, making the word sound like \"throng.\" This is a localized pronunciation problem. The rest of the response is clear, continuous and appropriately paced, with the Content substantially intact. The teacher should focus on the specific consonant sound rather than diagnosing a Content or Oral Fluency problem.",
  coachingAdvice:
    "Practise the initial consonant cluster in 'strong' and contrast it with 'throng.' Then practise 'strong' in the full sentence while maintaining a natural speaking rate.",
  cefrLevel: "B1",
  topicTitle: "Healthy Diets & Nutrition",
  good: {
    transcript:
      "A healthy diet provides the body with the nutrients it needs to stay strong and active. People should include a variety of fruits, vegetables, grains, and protein in their meals. Drinking enough water is also important for maintaining good health. A balanced diet can improve energy levels and help people develop healthy habits for the future.",
    audioDuration: "24.0 seconds",
    wordCount: 62,
    characteristics:
      "Clear pronunciation with natural fluency and accurate Content."
  },
  poor: {
    transcript:
      "A healthy diet provides the body with the nutrients it needs to stay throng and active. People should include a variety of fruits, vegetables, grains, and protein in their meals. Drinking enough water is also important for maintaining good health. A balanced diet can improve energy levels and help people develop healthy habits for the future.",
    audioDuration: "25.0 seconds",
    wordCount: 62,
    characteristics:
      "Generally clear and appropriately paced delivery, but the word 'strong' is pronounced as the clearly different word 'throng'."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Clear pronunciation with natural fluency and accurate Content."
  },
  poorScore: {
    content: 5,
    fluency: 5,
    pronunciation: 3,
    overall: "84 / 90",
    breakdownText:
      "A clear localized consonant pronunciation problem reduces Pronunciation accuracy while Content and Oral Fluency remain strong."
  },
  errorChecklist: [
    {
      id: "initial-consonant-pronunciation",
      label: "Initial consonant pronunciation",
      keyword: "Initial consonant pronunciation"
    },
    {
      id: "consonant-sound-substitution",
      label: "Consonant sound substitution",
      keyword: "Consonant sound substitution"
    },
    {
      id: "pronunciation-accuracy",
      label: "Pronunciation accuracy",
      keyword: "Pronunciation accuracy"
    }
  ],
  expertAdvice:
    "Focus specifically on the initial consonant sound in 'strong.' Do not diagnose this as a Content or fluency problem because the rest of the response is clear and appropriately paced."
},

  {
  exerciseIndex: 47,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Content Accuracy",
  diagnosticArea: "Word Insertion",
  learningObjective:
    "Identify a clearly audible extra word in a Read Aloud response and distinguish Content accuracy from Oral Fluency and Pronunciation problems.",
  promptText:
    "Online classes have become an important part of modern education. Students can attend lessons from home and communicate with teachers through digital platforms. Many courses also provide recorded lectures that students can watch later. This flexibility helps learners manage their study time more effectively.",
  promptAudio:
    "Online classes have become an important part of modern education. Students can attend lessons from home and communicate with teachers through digital platforms. Many courses also provide recorded lectures that students can watch later. This flexibility helps learners manage their study time more effectively.",
  studentTranscript:
    "Online classes have become an important part of modern education. Students can attend lessons from home and communicate with teachers through digital platforms. Many courses also provide recorded lectures that students can watch later. This flexibility helps learners manage their study time more effectively.",
  studentResponse: {
    audioDuration: "23.5 seconds",
    wordCount: 62,
    characteristics:
      "Clear and appropriately paced delivery with one extra word inserted into the final sentence."
  },
  diagnosticErrors: [
    "Word insertion",
    "Content accuracy",
    "Extra word"
  ],
  expertEvidence: [
    "The prompt says 'manage their study time more effectively'",
    "The student says 'manage their study time very effectively'",
    "The word 'very' is inserted even though it is not present in the prompt",
    "The insertion occurs in the final sentence",
    "The remaining text is reproduced accurately",
    "Overall speaking rate remains appropriate",
    "Pronunciation is generally clear",
    "The response remains continuous without significant hesitation",
    "The main issue requiring attention is Content accuracy"
  ],
  expertDiagnosis:
    "The student's main issue is Content accuracy because they insert the extra word \"very\" into the final sentence. The prompt says \"manage their study time more effectively,\" but the student says \"manage their study time very effectively.\" This specific word insertion affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong.",
  perfectCalibrationResponse:
    "The student's main issue is Content accuracy because they insert the extra word \"very\" into the final sentence. The prompt says \"manage their study time more effectively,\" but the student says \"manage their study time very effectively.\" This specific word insertion affects the Read Aloud Content score. Oral Fluency and Pronunciation remain strong because the response is clear, continuous and appropriately paced.",
  coachingAdvice:
    "Focus on reproducing only the words shown in the reading text. Avoid adding natural-sounding words such as 'very' when they are not present in the prompt.",
  cefrLevel: "B1",
  topicTitle: "E-Learning & Virtual Classes",
  good: {
    transcript:
      "Online classes have become an important part of modern education. Students can attend lessons from home and communicate with teachers through digital platforms. Many courses also provide recorded lectures that students can watch later. This flexibility helps learners manage their study time more effectively.",
    audioDuration: "22.5 seconds",
    wordCount: 61,
    characteristics:
      "Clear, continuous and appropriately paced delivery with exact word reproduction."
  },
  poor: {
    transcript:
      "Online classes have become an important part of modern education. Students can attend lessons from home and communicate with teachers through digital platforms. Many courses also provide recorded lectures that students can watch later. This flexibility helps learners manage their study time very effectively.",
    audioDuration: "23.5 seconds",
    wordCount: 62,
    characteristics:
      "Clear and appropriately paced delivery with the extra word 'very' inserted into the final sentence."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Exact word reproduction with clear and continuous delivery."
  },
  poorScore: {
    content: 4,
    fluency: 5,
    pronunciation: 5,
    overall: "87 / 90",
    breakdownText:
      "A specific word insertion reduces Content accuracy while Oral Fluency and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "word-insertion",
      label: "Word insertion",
      keyword: "Word insertion"
    },
    {
      id: "content-accuracy",
      label: "Content accuracy",
      keyword: "Content accuracy"
    },
    {
      id: "extra-word",
      label: "Extra word",
      keyword: "Extra word"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a pronunciation or fluency problem. The delivery is clear and appropriately paced. Focus specifically on the inserted word 'very' and exact reproduction of the reading text."
},

  {
  exerciseIndex: 48,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Run-On Delivery",
  learningObjective:
    "Identify insufficient sentence-boundary pausing and run-on delivery in a Read Aloud response and distinguish it from overall speech rate.",
  promptText:
    "Cities are building more bicycle lanes to make travel safer and reduce traffic. Dedicated lanes can encourage people to cycle instead of driving short distances. However, successful bike networks require careful planning and connections between different parts of the city. Good design can make cycling more convenient for both workers and families.",
  promptAudio:
    "Cities are building more bicycle lanes to make travel safer and reduce traffic. Dedicated lanes can encourage people to cycle instead of driving short distances. However, successful bike networks require careful planning and connections between different parts of the city. Good design can make cycling more convenient for both workers and families.",
  studentTranscript:
    "Cities are building more bicycle lanes to make travel safer and reduce traffic Dedicated lanes can encourage people to cycle instead of driving short distances However successful bike networks require careful planning and connections between different parts of the city Good design can make cycling more convenient for both workers and families.",
  studentResponse: {
    audioDuration: "22.5 seconds",
    wordCount: 65,
    characteristics:
      "The student reads at an appropriate overall rate but continues directly across sentence boundaries without natural pauses, creating run-on delivery."
  },
  diagnosticErrors: [
    "Run-on delivery",
    "Insufficient sentence-boundary pausing",
    "Oral Fluency disruption"
  ],
  expertEvidence: [
    "The student moves directly from one sentence into the next",
    "There is little or no audible pause after 'traffic'",
    "There is little or no audible pause after 'distances'",
    "There is little or no audible pause after 'city'",
    "The overall speaking rate is not excessively fast",
    "The words remain substantially accurate",
    "Pronunciation is generally clear",
    "The main issue requiring attention is insufficient sentence-boundary pausing"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because they use insufficient pauses at sentence boundaries, causing the response to sound like continuous run-on speech. The overall speaking rate is not excessively fast, so this should not be diagnosed simply as speaking too quickly. Content remains substantially accurate and Pronunciation is generally clear.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because they use insufficient pauses at sentence boundaries, causing the response to sound like continuous run-on speech. There is little or no natural break between several complete sentences. The overall speaking rate is not excessively fast, so this should not be diagnosed simply as speaking too quickly. Content remains substantially accurate and Pronunciation is generally clear.",
  coachingAdvice:
    "Practise taking a short natural pause after each complete sentence. The goal is not to slow the overall speech rate, but to separate complete ideas clearly while maintaining smooth delivery.",
  cefrLevel: "B1",
  topicTitle: "Urban Bike Lanes & Congestion",
  good: {
    transcript:
      "Cities are building more bicycle lanes to make travel safer and reduce traffic. Dedicated lanes can encourage people to cycle instead of driving short distances. However, successful bike networks require careful planning and connections between different parts of the city. Good design can make cycling more convenient for both workers and families.",
    audioDuration: "24.5 seconds",
    wordCount: 65,
    characteristics:
      "Natural sentence-boundary pauses with clear, continuous and appropriately paced delivery."
  },
  poor: {
    transcript:
      "Cities are building more bicycle lanes to make travel safer and reduce traffic Dedicated lanes can encourage people to cycle instead of driving short distances However successful bike networks require careful planning and connections between different parts of the city Good design can make cycling more convenient for both workers and families.",
    audioDuration: "22.5 seconds",
    wordCount: 65,
    characteristics:
      "Appropriate overall rate but little or no pausing between complete sentences, creating run-on delivery."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Natural sentence-boundary pauses with continuous and controlled delivery."
  },
  poorScore: {
    content: 5,
    fluency: 2,
    pronunciation: 5,
    overall: "82 / 90",
    breakdownText:
      "Insufficient sentence-boundary pausing creates run-on delivery and significantly reduces Oral Fluency."
  },
  errorChecklist: [
    {
      id: "run-on-delivery",
      label: "Run-on delivery",
      keyword: "Run-on delivery"
    },
    {
      id: "insufficient-sentence-pausing",
      label: "Insufficient sentence-boundary pausing",
      keyword: "Insufficient sentence-boundary pausing"
    },
    {
      id: "oral-fluency-disruption",
      label: "Oral Fluency disruption",
      keyword: "Oral Fluency disruption"
    }
  ],
  expertAdvice:
    "Do not diagnose this simply as speaking too fast. The overall rate is acceptable. The defining problem is insufficient pausing at sentence boundaries, which creates run-on delivery."
},

{
  exerciseIndex: 49,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Pronunciation",
  diagnosticArea: "Word Pronunciation Distortion",
  learningObjective:
    "Identify a clearly localized word-pronunciation distortion and distinguish it from Content and Oral Fluency problems.",
  promptText:
    "Reducing plastic waste requires changes in both personal habits and public policy. Many communities encourage residents to reuse containers and avoid unnecessary packaging. Local businesses can also offer alternatives to single-use plastic products. These small changes can reduce pollution and protect the environment over time.",
  promptAudio:
    "Reducing plastic waste requires changes in both personal habits and public policy. Many communities encourage residents to reuse containers and avoid unnecessary packaging. Local businesses can also offer alternatives to single-use plastic products. These small changes can reduce pollution and protect the environment over time.",
  studentTranscript:
    "Reducing plastic waste requires changes in both personal habits and public policy. Many communities encourage residents to reuse containers and avoid unnecessary packaging. Local businesses can also offer alternatives to single-use plastic products. These small changes can reduce pollution and protect the envaironment over time.",
  studentResponse: {
    audioDuration: "24.0 seconds",
    wordCount: 63,
    characteristics:
      "Generally clear and appropriately paced delivery, but the word 'environment' is audibly distorted as 'envaironment'."
  },
  diagnosticErrors: [
    "Word pronunciation distortion",
    "Vowel sequence pronunciation",
    "Pronunciation accuracy"
  ],
  expertEvidence: [
    "The target word is 'environment'",
    "The student produces an altered vowel sequence, sounding like 'envaironment'",
    "The pronunciation issue is localized to one specific word",
    "The remaining words are generally clear",
    "Overall speaking rate remains appropriate",
    "There are no significant fillers or unnatural pauses",
    "Content remains substantially intact",
    "The main issue requiring attention is pronunciation of the target word"
  ],
  expertDiagnosis:
    "The student's main issue is Pronunciation accuracy because the word \"environment\" is distorted and sounds like \"envaironment.\" This is a localized word-pronunciation problem rather than a general fluency or Content problem. The rest of the response is clear and appropriately paced.",
  perfectCalibrationResponse:
    "The student's main issue is Pronunciation accuracy because the word \"environment\" is distorted and sounds like \"envaironment.\" This is a localized word-pronunciation problem rather than a general fluency or Content problem. The rest of the response is clear and appropriately paced, with the Content substantially intact. The teacher should focus on accurate pronunciation of the target word.",
  coachingAdvice:
    "Break the word 'environment' into manageable sound groups and practise the correct vowel sequence slowly before returning to a natural speaking rate. Then practise the word in the full sentence.",
  cefrLevel: "B1",
  topicTitle: "Reducing Plastic Waste",
  good: {
    transcript:
      "Reducing plastic waste requires changes in both personal habits and public policy. Many communities encourage residents to reuse containers and avoid unnecessary packaging. Local businesses can also offer alternatives to single-use plastic products. These small changes can reduce pollution and protect the environment over time.",
    audioDuration: "23.0 seconds",
    wordCount: 63,
    characteristics:
      "Clear pronunciation of the target word with natural pace and continuous delivery."
  },
  poor: {
    transcript:
      "Reducing plastic waste requires changes in both personal habits and public policy. Many communities encourage residents to reuse containers and avoid unnecessary packaging. Local businesses can also offer alternatives to single-use plastic products. These small changes can reduce pollution and protect the envaironment over time.",
    audioDuration: "24.0 seconds",
    wordCount: 63,
    characteristics:
      "Generally clear and appropriately paced delivery, but 'environment' is audibly distorted as 'envaironment'."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Accurate target-word pronunciation with clear and continuous delivery."
  },
  poorScore: {
    content: 5,
    fluency: 5,
    pronunciation: 3,
    overall: "84 / 90",
    breakdownText:
      "A localized word-pronunciation distortion reduces Pronunciation accuracy while Content and Oral Fluency remain strong."
  },
  errorChecklist: [
    {
      id: "word-pronunciation-distortion",
      label: "Word pronunciation distortion",
      keyword: "Word pronunciation distortion"
    },
    {
      id: "vowel-sequence-pronunciation",
      label: "Vowel sequence pronunciation",
      keyword: "Vowel sequence pronunciation"
    },
    {
      id: "pronunciation-accuracy",
      label: "Pronunciation accuracy",
      keyword: "Pronunciation accuracy"
    }
  ],
  expertAdvice:
    "Focus specifically on the pronunciation of 'environment.' Do not diagnose this as a fluency or Content problem because the rest of the response is clear and appropriately paced."
},

{
  exerciseIndex: 50,
  totalExercises: 100,
  difficulty: "Intermediate",
  trainingSkill: "Oral Fluency",
  diagnosticArea: "Hesitation with Fillers",
  learningObjective:
    "Identify repeated audible filler sounds during a Read Aloud response and distinguish them from Content, Pronunciation, and speech-rate problems.",
  promptText:
    "Tourism can bring important benefits to local communities. Visitors often spend money at small restaurants, hotels, shops, and cultural attractions. Local tourism can also create jobs and encourage communities to protect interesting places. However, careful planning is needed so that tourism remains sustainable for residents and visitors.",
  promptAudio:
    "Tourism can bring important benefits to local communities. Visitors often spend money at small restaurants, hotels, shops, and cultural attractions. Local tourism can also create jobs and encourage communities to protect interesting places. However, careful planning is needed so that tourism remains sustainable for residents and visitors.",
  studentTranscript:
    "Tourism can bring important benefits to local communities. Visitors often spend money at small restaurants, hotels, uh, shops, and cultural attractions. Local tourism can also create jobs and, uh, encourage communities to protect interesting places. However, careful planning is needed so that tourism remains sustainable for residents and visitors.",
  studentResponse: {
    audioDuration: "26.5 seconds",
    wordCount: 66,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker uses two audible 'uh' filler sounds during the reading."
  },
  diagnosticErrors: [
    "Hesitation with fillers",
    "Filler words",
    "Interrupted fluency"
  ],
  expertEvidence: [
    "The student inserts an audible 'uh' after 'hotels'",
    "The student inserts another audible 'uh' before 'encourage'",
    "The fillers interrupt otherwise continuous delivery",
    "The overall speaking rate remains appropriate",
    "Content remains substantially intact",
    "Pronunciation is generally clear",
    "The main issue requiring attention is Oral Fluency"
  ],
  expertDiagnosis:
    "The student's main issue is Oral Fluency because they use audible filler sounds during the reading. The student inserts \"uh\" after \"hotels\" and again before \"encourage,\" interrupting otherwise continuous delivery. Content remains substantially accurate and Pronunciation is generally clear. The teacher should focus on reducing vocalized fillers rather than diagnosing a Content, Pronunciation or speech-rate problem.",
  perfectCalibrationResponse:
    "The student's main issue is Oral Fluency because they use audible filler sounds during the reading. The student inserts \"uh\" after \"hotels\" and again before \"encourage,\" interrupting otherwise continuous delivery. Content remains substantially accurate and Pronunciation is generally clear. The teacher should focus on reducing vocalized fillers rather than diagnosing a Content, Pronunciation or speech-rate problem.",
  coachingAdvice:
    "Practise replacing vocalized fillers such as 'uh' with brief silent pauses. Read the passage in short thought groups while maintaining smooth, continuous delivery.",
  cefrLevel: "B1",
  topicTitle: "Tourism in Local Communities",
  good: {
    transcript:
      "Tourism can bring important benefits to local communities. Visitors often spend money at small restaurants, hotels, shops, and cultural attractions. Local tourism can also create jobs and encourage communities to protect interesting places. However, careful planning is needed so that tourism remains sustainable for residents and visitors.",
    audioDuration: "24.0 seconds",
    wordCount: 64,
    characteristics:
      "Clear, continuous and appropriately paced delivery without vocalized fillers."
  },
  poor: {
    transcript:
      "Tourism can bring important benefits to local communities. Visitors often spend money at small restaurants, hotels, uh, shops, and cultural attractions. Local tourism can also create jobs and, uh, encourage communities to protect interesting places. However, careful planning is needed so that tourism remains sustainable for residents and visitors.",
    audioDuration: "26.5 seconds",
    wordCount: 66,
    characteristics:
      "Generally clear and appropriately paced delivery, but the speaker uses two audible 'uh' fillers."
  },
  goodScore: {
    content: 5,
    fluency: 5,
    pronunciation: 5,
    overall: "90 / 90",
    breakdownText:
      "Smooth continuous delivery without vocalized fillers."
  },
  poorScore: {
    content: 5,
    fluency: 3,
    pronunciation: 5,
    overall: "84 / 90",
    breakdownText:
      "Audible filler sounds interrupt Oral Fluency while Content and Pronunciation remain strong."
  },
  errorChecklist: [
    {
      id: "hesitation-fillers",
      label: "Hesitation with fillers",
      keyword: "Hesitation with fillers"
    },
    {
      id: "filler-words",
      label: "Filler words",
      keyword: "Filler words"
    },
    {
      id: "interrupted-fluency",
      label: "Interrupted fluency",
      keyword: "Interrupted fluency"
    }
  ],
  expertAdvice:
    "Do not diagnose this as a Content, Pronunciation or general speech-rate problem. The defining issue is the audible use of 'uh' fillers. Coach the student to replace vocalized fillers with brief silent pauses."
},

];

// -----------------------------------------------------------------------------
// End of Read Aloud Calibration Lab authored bank.
// Exercises 11–100 continue to use the existing generator until authored
// calibration cases are added.
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Calibration Lab Exercise Selection
// -----------------------------------------------------------------------------
//
// Returns a random authored Calibration Lab exercise.
//
// For now this selects only from the completed authored bank (Exercises 1–10).
// As Exercises 11–100 are authored, this function will automatically be
// expanded to use the larger calibration pool.
//
// Existing getExercise() behaviour is intentionally unchanged.
// -----------------------------------------------------------------------------

export function getRandomCalibrationExercise() {
  const availableExercises = READ_ALOUD_CALIBRATION_EXERCISES;

  if (availableExercises.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * availableExercises.length);

  return {
    ...availableExercises[randomIndex],
    cefrLevel: getCefrLevel(availableExercises[randomIndex].exerciseIndex)
  };
}

// Weak response generators
export function generateWeakReadAloud(text: string, index: number = 1) {
  if (!text) return {
    sample: { transcript: "Sample response... um...", audioDuration: "15 seconds", characteristics: "Hesitation." },
    score: { content: 2, fluency: 2, pronunciation: 2, overall: "40 / 90", breakdownText: "General deductions." }
  };
  const words = text.split(" ");
  const archetype = index % 5;
  switch (archetype) {
    case 1:
      return {
        sample: {
          transcript: words.map(w => w.replace(/ing\b/gi, "in'").replace(/ed\b/gi, "'d")).join(" "),
          audioDuration: "8 seconds",
          characteristics: "Rushed pacing (>230 wpm), slurred word boundaries, dropped word endings."
        },
        score: { content: 4, fluency: 2, pronunciation: 2, overall: "50 / 90", breakdownText: "Rushed speed degraded articulation." }
      };
    case 2:
      return {
        sample: {
          transcript: "... [3s silent gap] ... " + words.slice(0, Math.floor(words.length * 0.6)).join(" ") + "... [whisper]...",
          audioDuration: "18 seconds",
          characteristics: "Initial 3-second delay, low volume, trailing into inaudible whisper."
        },
        score: { content: 2, fluency: 1, pronunciation: 1, overall: "25 / 90", breakdownText: "Microphone delay and low volume penalty." }
      };
    case 3:
      return {
        sample: {
          transcript: words.map((w, i) => (i % 4 === 0 && i > 0) ? `${w}... um... uh...` : w).join(" "),
          audioDuration: "22 seconds",
          characteristics: "Frequent vocal fillers ('um', 'uh') breaking rhythm."
        },
        score: { content: 3, fluency: 2, pronunciation: 3, overall: "42 / 90", breakdownText: "Vocal fillers reduced Oral Fluency score." }
      };
    case 4:
      return {
        sample: {
          transcript: words.map((w, i) => i % 5 === 0 ? "[skipped]" : w).filter(w => w !== "[skipped]").join(" "),
          audioDuration: "16 seconds",
          characteristics: "Skipping difficult words and inaccurate sentence stress."
        },
        score: { content: 3, fluency: 3, pronunciation: 2, overall: "48 / 90", breakdownText: "Skipped words penalize Content." }
      };
    default:
      return {
        sample: {
          transcript: words.slice(0, Math.floor(words.length * 0.5)).join(" ") + "... [stopped mid-way]",
          audioDuration: "25 seconds",
          characteristics: "Response truncated mid-sentence due to slow pace."
        },
        score: { content: 2, fluency: 2, pronunciation: 3, overall: "38 / 90", breakdownText: "Incomplete content delivery." }
      };
  }
}

export function generateWeakRepeatSentence(text: string, index: number = 1) {
  if (!text) return {
    sample: { transcript: "Sample sentence... um...", audioDuration: "5 seconds", characteristics: "Hesitation." },
    score: { content: 1, fluency: 2, pronunciation: 2, overall: "35 / 90", breakdownText: "Incomplete sentence." }
  };
  const words = text.split(" ");
  const archetype = index % 5;
  switch (archetype) {
    case 1:
      return {
        sample: {
          transcript: words.slice(0, Math.max(2, Math.floor(words.length * 0.5))).join(" ") + "... um... [forgot second half]",
          audioDuration: "5 seconds",
          characteristics: "Dropped second half of sentence (>50% words missing) and added vocal hesitation filler."
        },
        score: { content: 1, fluency: 2, pronunciation: 3, overall: "35 / 90", breakdownText: "Omitted over 50% of target sentence words." }
      };
    case 2: {
      const swapped = words.map((w, i) => (i === 1 || i === Math.floor(words.length / 2)) ? "[substituted word]" : w).join(" ");
      return {
        sample: {
          transcript: `${swapped} ... [hesitated]`,
          audioDuration: "6 seconds",
          characteristics: "Incorrect word substitutions on core vocabulary items and mid-sentence hesitation."
        },
        score: { content: 2, fluency: 3, pronunciation: 2, overall: "44 / 90", breakdownText: "Penalized for vocabulary substitution and slurred phrasing." }
      };
    }
    case 3: {
      const p1 = words.slice(0, Math.min(3, words.length)).join(" ");
      const p2 = words.slice(Math.min(3, words.length)).join(" ");
      return {
        sample: {
          transcript: `${p1}... uh... [3-second pause] ... ${p2}`,
          audioDuration: "8 seconds",
          characteristics: "3-second mid-sentence silent pause and vocal hesitation filler disrupting rhythm."
        },
        score: { content: 3, fluency: 1, pronunciation: 3, overall: "38 / 90", breakdownText: "Oral fluency severely penalized by mid-sentence 3-second pause." }
      };
    }
    case 4: {
      const jumbled = words.length > 4 ? [...words.slice(-3), ...words.slice(0, -3)].join(" ") : words.slice().reverse().join(" ");
      return {
        sample: {
          transcript: `${jumbled}... [scrambled sequence]`,
          audioDuration: "6 seconds",
          characteristics: "Inverted word sequence and scrambled clause arrangement."
        },
        score: { content: 1, fluency: 3, pronunciation: 3, overall: "40 / 90", breakdownText: "Scrambled word order failed content accuracy criteria." }
      };
    }
    default: {
      const trimmed = words.length > 3 ? words.slice(0, -2).join(" ") : words.join(" ");
      return {
        sample: {
          transcript: `${words.slice(0, Math.min(2, words.length)).join(" ")}... ${trimmed}... [mumbled final words]`,
          audioDuration: "7 seconds",
          characteristics: "False start at commencement and mumbled, slurred pronunciation on final words."
        },
        score: { content: 2, fluency: 2, pronunciation: 1, overall: "36 / 90", breakdownText: "False start and unclear pronunciation on final phrase." }
      };
    }
  }
}

export function generateWeakDescribeImage(topicTitle: string, index: number = 1) {
  const archetype = index % 4;
  switch (archetype) {
    case 1:
      return {
        sample: {
          transcript: `This chart shows ${topicTitle.toLowerCase()}... first number is high... then goes down... that is all I can see...`,
          audioDuration: "24 seconds",
          characteristics: "Superficial description lacking technical overview, repetitive generic vocabulary, broken cadence."
        },
        score: { content: 2, fluency: 2, pronunciation: 3, overall: "42 / 90", breakdownText: "Superficial description lacking key data points and trends." }
      };
    case 2:
      return {
        sample: {
          transcript: `Looking at ${topicTitle.toLowerCase()}... um... Group A is 30%... no wait 45%... uh... Group B is lower...`,
          audioDuration: "22 seconds",
          characteristics: "Frequent mid-response self-corrections ('no wait'), vocal fillers ('um', 'uh'), and choppy delivery."
        },
        score: { content: 2, fluency: 1, pronunciation: 2, overall: "35 / 90", breakdownText: "Frequent self-corrections destroyed oral fluency." }
      };
    case 3:
      return {
        sample: {
          transcript: `In this image of ${topicTitle.toLowerCase()}, the numbers rise dramatically from 10 to 9500 units...`,
          audioDuration: "25 seconds",
          characteristics: "Misread numerical data values (hallucinated 9500) and omitted concluding summary."
        },
        score: { content: 1, fluency: 3, pronunciation: 3, overall: "38 / 90", breakdownText: "Inaccurate data reading penalized content accuracy." }
      };
    default:
      return {
        sample: {
          transcript: `This graph illustrates ${topicTitle.toLowerCase()}. It shows relevant data. [stopped speaking at 11 seconds]`,
          audioDuration: "11 seconds",
          characteristics: "Premature stoppage at 11 seconds (failed required 30-40 second speaking window)."
        },
        score: { content: 1, fluency: 1, pronunciation: 2, overall: "28 / 90", breakdownText: "Truncated response under 15 seconds." }
      };
  }
}

export function generateWeakRetellLecture(topicTitle: string, index: number = 1) {
  const archetype = index % 3;
  switch (archetype) {
    case 1:
      return {
        sample: {
          transcript: `The speaker was talking about ${topicTitle.toLowerCase()}... it is very important... he mentioned many details...`,
          audioDuration: "28 seconds",
          characteristics: "Over-reliance on memorized template fillers without summarizing core academic lecture content."
        },
        score: { content: 2, fluency: 3, pronunciation: 3, overall: "44 / 90", breakdownText: "Failed to extract core lecture arguments." }
      };
    case 2:
      return {
        sample: {
          transcript: `In the lecture about ${topicTitle.toLowerCase()}... um... the main point was... [4s silence]... and then conclusion...`,
          audioDuration: "26 seconds",
          characteristics: "Unnatural 4-second silence gap midway through the response."
        },
        score: { content: 2, fluency: 1, pronunciation: 2, overall: "32 / 90", breakdownText: "Long silence (>3 seconds) severely penalized oral fluency." }
      };
    default:
      return {
        sample: {
          transcript: `The professor discussed ${topicTitle.toLowerCase()}. He said one thing, then another thing, and people agreed.`,
          audioDuration: "20 seconds",
          characteristics: "Excessive generic terminology ('one thing', 'another thing') without key technical terms."
        },
        score: { content: 1, fluency: 4, pronunciation: 4, overall: "45 / 90", breakdownText: "Generic non-academic vocabulary failed Content criteria." }
      };
  }
}

export function generateWeakEssay(topicTitle: string, index: number = 1) {
  const archetype = index % 2;
  if (archetype === 1) {
    return {
      sample: {
        transcript: `I think ${topicTitle.toLowerCase()} is good topic. Many people like it. But some people do not like it because it is hard. In conclusion it is important for everyone.`,
        wordCount: 32,
        characteristics: "Only 32 words (failed 200-word minimum requirement), repetitive simple grammar."
      },
      score: { content: 1, form: 0, grammar: 1, vocabulary: 1, overall: "28 / 90", breakdownText: "Failed minimum word count requirement (200-300 words)." }
    };
  } else {
    return {
      sample: {
        transcript: `Nowadays ${topicTitle.toLowerCase()} is very famous issue. Furthermore, secondly, thirdly, in conclusion, agree with this statement.`,
        wordCount: 22,
        characteristics: "Empty template stacking without logical supporting arguments, severe length failure (22 words)."
      },
      score: { content: 1, form: 0, grammar: 1, vocabulary: 1, overall: "22 / 90", breakdownText: "Coherence zero due to empty template repetition and short length." }
    };
  }
}

export function generateWeakSummarizeWrittenText(index: number = 1) {
  const archetype = index % 2;
  if (archetype === 1) {
    return {
      sample: {
        transcript: `The text details key points about the topic. It presents positive outcomes and negative challenges. Therefore citizens must act.`,
        wordCount: 21,
        characteristics: "Written in 3 separate sentences instead of 1 single sentence (Form failure = 0 pts)."
      },
      score: { content: 1, form: 0, grammar: 2, vocabulary: 1, overall: "35 / 90", breakdownText: "Zero score for Form due to multiple sentences (must be single sentence)." }
    };
  } else {
    return {
      sample: {
        transcript: `Although the passage explains how public interest has increased in modern societies, but people still face many financial hurdles.`,
        wordCount: 20,
        characteristics: "Double conjunction grammatical error ('Although' combined with 'but') corrupting single-sentence structure."
      },
      score: { content: 2, form: 1, grammar: 1, vocabulary: 2, overall: "48 / 90", breakdownText: "Corrupted sentence structure with double conjunction." }
    };
  }
}

export function generateWeakSummarizeSpokenText(topicTitle: string, index: number = 1) {
  const archetype = index % 2;
  if (archetype === 1) {
    return {
      sample: {
        transcript: `The lecture discussed ${topicTitle.toLowerCase()}. Important changes happened.`,
        wordCount: 8,
        characteristics: "Only 8 words (failed mandatory 50-70 word length requirement)."
      },
      score: { content: 1, form: 0, grammar: 1, vocabulary: 1, overall: "22 / 90", breakdownText: "Form score 0 for failing the 50-70 word count requirement." }
    };
  } else {
    return {
      sample: {
        transcript: `The speaker discuss about ${topicTitle.toLowerCase()} and they is saying that key factors is missed by researchers.`,
        wordCount: 18,
        characteristics: "Multiple subject-verb agreement errors ('speaker discuss', 'they is', 'factors is') and under word limit."
      },
      score: { content: 2, form: 0, grammar: 1, vocabulary: 2, overall: "38 / 90", breakdownText: "Grammar penalized for agreement errors and length shortfall." }
    };
  }
}

export function generateWeakWriteFromDictation(promptText: string, index: number = 1) {
  const words = promptText ? promptText.split(" ") : ["Sample", "sentence"];
  const archetype = index % 2;
  if (archetype === 1) {
    const truncated = words.slice(0, Math.max(2, words.length - 3)).join(" ");
    return {
      sample: {
        transcript: `${truncated}... [dropped last 3 words]`,
        wordCount: Math.max(2, words.length - 3),
        characteristics: "Omitted trailing 3 words from the dictation sentence."
      },
      score: { content: Math.max(1, words.length - 3), overall: "60%", breakdownText: "Dropped trailing target words from dictation sequence." }
    };
  } else {
    const misspelled = words.map((w, i) => i === words.length - 1 ? w.slice(0, -1) : w).join(" ");
    return {
      sample: {
        transcript: misspelled,
        wordCount: words.length,
        characteristics: "Spelling error on final key word (missing ending suffix/letter)."
      },
      score: { content: words.length - 1, overall: "80%", breakdownText: "Spelling error on key content noun." }
    };
  }
}

export function generateWeakRespondToSituation(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `"Um... hi... I think ${topicTitle.toLowerCase()} is bad... so please fix it... thanks bye."`,
      audioDuration: "8 seconds",
      characteristics: "Abrupt informal register, lacks appropriate situational explanation and polite request phrasing."
    },
    score: { content: 2, fluency: 2, pronunciation: 2, overall: "40 / 90", breakdownText: "Informal tone and truncated situational response." }
  };
}

export function generateWeakSummarizeGroupDiscussion(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `"One speaker said yes, another speaker said no... I agree with both... um... that is all."`,
      audioDuration: "12 seconds",
      characteristics: "Failed to synthesize group perspectives or identify specific participant arguments."
    },
    score: { content: 2, fluency: 2, pronunciation: 3, overall: "42 / 90", breakdownText: "Superficial coverage without synthesis." }
  };
}

export function generateWeakFillInBlanks(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `Selected [makes / create] instead of correct collocations [gives / study] for ${topicTitle.toLowerCase()}`,
      characteristics: "Selected unnatural collocations and incorrect grammatical word forms."
    },
    score: { content: 0, overall: "0%", breakdownText: "Incorrect collocation selected." }
  };
}

export function generateWeakReorderParagraphs(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `Selected paragraph sequence: B -> A -> C for ${topicTitle.toLowerCase()}`,
      characteristics: "Placed sentence with dependent pronoun 'B' before introducing main subject in 'A'."
    },
    score: { content: 0, overall: "0 / 2 Pairs", breakdownText: "Incorrect opening paragraph order." }
  };
}

export function generateWeakMultipleChoice(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `Selected Option C (Minor detail distractor trap regarding ${topicTitle.toLowerCase()})`,
      characteristics: "Fell for secondary detail distractor instead of primary central thesis."
    },
    score: { content: 0, overall: "0 / 1", breakdownText: "Confused supporting detail with primary thesis." }
  };
}

export function generateWeakHighlightIncorrectWords(topicTitle: string, index: number = 1) {
  return {
    sample: {
      transcript: `Clicked [2 correct substituted words, 1 extra incorrect guess word in ${topicTitle.toLowerCase()}]`,
      characteristics: "Excessive guess clicking triggered negative marking penalty."
    },
    score: { content: 1, overall: "50%", breakdownText: "Excessive click triggered negative marking deduction." }
  };
}

export function generateWeakASQ(questionText: string, correctAnswer: string, index: number = 1) {
  return {
    sample: {
      transcript: "I am not sure about this answer... maybe it is something else...",
      audioDuration: "6 seconds",
      characteristics: "Failed to state the target keyword."
    },
    score: { content: 0, overall: "0%", breakdownText: "Target word missing." }
  };
}

// Main Master Exercise Generator (1 to 100 questions per question type)
export function getExercise(questionObj: any, index: number) {
  const safeIndex = Math.max(1, Math.min(100, index));

  // Use the authored Calibration Lab cases for Read Aloud exercises 1–10.
  // All other exercises continue through the existing generator unchanged.
  if (questionObj?.id === "read-aloud") {
    const calibrationExercise = READ_ALOUD_CALIBRATION_EXERCISES.find(
      (exercise) => exercise.exerciseIndex === safeIndex
    );

    if (calibrationExercise) {
      // Keep the existing return contract intact: the UI expects cefrLevel
      // to be the full CEFR descriptor object, not only a level string.
      return {
        ...calibrationExercise,
        cefrLevel: getCefrLevel(safeIndex)
      };
    }
  }

  const cefr = getCefrLevel(safeIndex);
  const topicTitle = COMMON_PTE_TOPICS[safeIndex - 1] || `Topic #${safeIndex}`;
  const lowerTopic = topicTitle.toLowerCase();
  const qId = questionObj ? questionObj.id : "read-aloud";

  let promptText = "";
  let promptAudio = "";
  let defaultGoodTranscript = "";
  let goodSample: any = {};
  let poorSample: any = {};
  let goodScore: any = {};
  let poorScore: any = {};

  // Construct CEFR Level specific topic-matched texts for all 22 question types
  if (cefr.level === "A1") {
    // --- A1 LEVEL: Elementary short sentences, basic everyday vocabulary ---
    switch (qId) {
      case "read-aloud":
        promptText = `Learning about ${lowerTopic} is important for everyday life. Many people enjoy spending time with ${lowerTopic} because it keeps them active and happy.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `My family enjoys learning about ${lowerTopic} every weekend.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[Bar Chart: Survey on ${topicTitle} - Group A: 45%, Group B: 35%, Group C: 20%]`;
        promptAudio = `Bar Chart showing survey results regarding ${topicTitle}: Group A is 45 percent, Group B is 35 percent, and Group C is 20 percent.`;
        defaultGoodTranscript = `This bar chart displays survey data about ${lowerTopic}. Group A represents the highest share at 45 percent, Group B is 35 percent, and Group C is 20 percent. In summary, ${lowerTopic} shows clear comparisons across groups.`;
        break;
      case "retell-lecture":
        promptText = `[Short Talk: Basic overview and practical guide to ${topicTitle}]`;
        promptAudio = `Short presentation discussing ${topicTitle}. The speaker explains how ${lowerTopic} affects daily life and offers practical tips.`;
        defaultGoodTranscript = `The speaker discussed ${lowerTopic} in daily life. Main points included why ${lowerTopic} helps people and how simple habits create positive long-term results.`;
        break;
      case "write-essay":
        promptText = `Write a short essay explaining why ${lowerTopic} is important in daily life.`;
        promptAudio = promptText;
        defaultGoodTranscript = `In my opinion, ${lowerTopic} is very important for everyone in daily life. First, it helps people stay healthy and happy. Second, learning about ${lowerTopic} creates good opportunities for families and communities. In conclusion, everyone should pay attention to ${lowerTopic}.`;
        break;
      case "summarize-written-text":
        promptText = `Many people spend time on ${lowerTopic} every week. It helps individuals learn new skills and connect with others in their community. Spending a few minutes each day on ${lowerTopic} leads to positive long-term results.`;
        promptAudio = `Many people spend time on ${lowerTopic} every week. It helps individuals learn new skills and connect with others in their community.`;
        defaultGoodTranscript = `Spending time on ${lowerTopic} helps individuals develop useful skills and connect with their local community for positive long-term results.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Audio: Short discussion about ${topicTitle} and its everyday benefits]`;
        promptAudio = `Audio presentation discussing ${topicTitle} and its everyday benefits for students and families.`;
        defaultGoodTranscript = `The talk highlighted key benefits of ${lowerTopic}, emphasizing that practical daily habits and community involvement lead to overall well-being.`;
        break;
      case "write-from-dictation":
        promptText = `Learning about ${lowerTopic} is helpful for every student.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `Learning about ${lowerTopic} [1. gives / makes / takes / puts] students new ideas. It is important to [2. study / drink / sleep / run] this topic every week.`;
        promptAudio = `Learning about ${lowerTopic} gives students new ideas. It is important to study this topic every week.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: Many people are interested in ${lowerTopic} today.\nB: They spend time reading and learning about its basic ideas.\nC: As a result, they gain useful knowledge for daily life.`;
        promptAudio = `Many people are interested in ${lowerTopic} today. They spend time reading and learning about its basic ideas. As a result, they gain useful knowledge for daily life.`;
        break;
      case "respond-to-a-situation":
        promptText = `[Scenario: A friend asks you why ${topicTitle} matters to you. Respond clearly in 40 seconds.]`;
        promptAudio = `A friend asks you why ${topicTitle} matters to you. Respond clearly in 40 seconds.`;
        defaultGoodTranscript = `I believe ${lowerTopic} is very important because it helps us stay organized and learn new skills every day. My family also values ${lowerTopic} because it brings people together.`;
        break;
      case "summarize-group-discussion":
        promptText = `[Group Discussion: Three students share their opinions on ${topicTitle}]`;
        promptAudio = `Group discussion with three students sharing their opinions on ${topicTitle}.`;
        defaultGoodTranscript = `In the group discussion, students shared different views on ${lowerTopic}. They agreed that ${lowerTopic} provides great benefits when practiced regularly.`;
        break;
      default:
        promptText = `Every day, people spend time on ${lowerTopic} to learn and improve their skills.`;
        promptAudio = promptText;
        break;
    }
  } else if (cefr.level === "A2") {
    // --- A2 LEVEL: Elementary compound sentences, routine workplace/school ---
    switch (qId) {
      case "read-aloud":
        promptText = `Many people enjoy exploring ${lowerTopic} during their free time. Understanding the basic principles of ${lowerTopic} helps individuals make informed decisions in their everyday activities.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `Our local community provides helpful workshops on ${lowerTopic}.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[Line Graph: Growth Trends in ${topicTitle} from 2015 to 2025]`;
        promptAudio = `Line Graph showing growth trends in ${topicTitle} between 2015 and 2025.`;
        defaultGoodTranscript = `This line graph illustrates growth trends in ${lowerTopic} between 2015 and 2025. The trend shows a steady rise over the decade, reaching its highest level in 2024. In summary, ${lowerTopic} demonstrates consistent growth.`;
        break;
      case "retell-lecture":
        promptText = `[Short Presentation: Key factors and benefits of ${topicTitle} for local communities]`;
        promptAudio = `Presentation on key factors and benefits of ${topicTitle} for local communities.`;
        defaultGoodTranscript = `The presentation focused on ${lowerTopic} and its positive impact on local communities. Key arguments highlighted higher efficiency and public participation. Overall, the speaker recommended expanding community initiatives.`;
        break;
      case "write-essay":
        promptText = `Do you think ${lowerTopic} brings more benefits or disadvantages to modern people? Give reasons for your choice.`;
        promptAudio = promptText;
        defaultGoodTranscript = `In contemporary society, ${lowerTopic} has become an important topic for discussion. On one hand, ${lowerTopic} improves convenience and daily productivity. On the other hand, managing resources requires careful planning. Overall, the benefits of ${lowerTopic} outweigh the drawbacks when used wisely.`;
        break;
      case "summarize-written-text":
        promptText = `Public interest in ${lowerTopic} has grown steadily over the last decade. Educational institutions now offer specialized courses on ${lowerTopic} to prepare students for future careers. Consequently, participation rates have reached record levels.`;
        promptAudio = `Public interest in ${lowerTopic} has grown steadily over the last decade. Educational institutions now offer specialized courses on ${lowerTopic}.`;
        defaultGoodTranscript = `Because public interest in ${lowerTopic} has grown steadily, educational institutions now offer specialized courses, leading to record student participation rates.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Audio Seminar: Educational programs and community engagement in ${topicTitle}]`;
        promptAudio = `Audio seminar discussing educational programs and community engagement in ${topicTitle}.`;
        defaultGoodTranscript = `The seminar explained how educational programs in ${lowerTopic} enhance community engagement, noting that structured training leads to improved outcomes.`;
        break;
      case "write-from-dictation":
        promptText = `The university library provides excellent resources on ${lowerTopic}.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `${topicTitle} provides a helpful [1. way / step / road / door] to improve daily skills. Many people prefer to focus on ${lowerTopic} because the results are [2. positive / heavy / slow / dark].`;
        promptAudio = `${topicTitle} provides a helpful way to improve daily skills. Many people prefer to focus on ${lowerTopic} because the results are positive.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: In recent years, public attention regarding ${lowerTopic} has increased.\nB: Schools and local centers now offer special programs on this subject.\nC: Consequently, participants report higher satisfaction and better skills.`;
        promptAudio = `In recent years, public attention regarding ${lowerTopic} has increased. Schools and local centers now offer special programs on this subject. Consequently, participants report higher satisfaction and better skills.`;
        break;
      default:
        promptText = `Public centers offer useful information regarding ${lowerTopic} for students and residents.`;
        promptAudio = promptText;
        break;
    }
  } else if (cefr.level === "B1") {
    // --- B1 LEVEL: Intermediate multi-clause, social and practical topics ---
    switch (qId) {
      case "read-aloud":
        promptText = `Recent surveys demonstrate that ${lowerTopic} has a significant influence on modern lifestyle. Experts suggest that integrating ${lowerTopic} into daily routines improves productivity and overall well-being.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `Understanding the key principles of ${lowerTopic} is essential for academic success.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[Pie Chart: Distribution of ${topicTitle} Across Different Industry Sectors]`;
        promptAudio = `Pie Chart showing the distribution of ${topicTitle} across different industry sectors.`;
        defaultGoodTranscript = `This pie chart displays the distribution of ${lowerTopic} across four main industry sectors. Sector A accounts for the largest share at 40 percent, followed by Sector B at 30 percent, Sector C at 20 percent, and Sector D at 10 percent. To summarize, ${lowerTopic} remains concentrated in primary sectors.`;
        break;
      case "retell-lecture":
        promptText = `[Lecture: Comprehensive analysis of ${topicTitle} and modern societal impact]`;
        promptAudio = `Lecture analyzing ${topicTitle} and its modern societal impact.`;
        defaultGoodTranscript = `The lecture examined ${lowerTopic} from multiple perspectives. The professor outlined recent trends, highlighting technological integration and policy changes. In conclusion, managing ${lowerTopic} effectively requires balanced stakeholder cooperation.`;
        break;
      case "write-essay":
        promptText = `Some people argue that ${lowerTopic} should be strictly regulated by government authorities, while others advocate for free market choices. Discuss both views.`;
        promptAudio = promptText;
        defaultGoodTranscript = `The question of whether ${lowerTopic} should be regulated by governments or left to free market forces is widely debated. Proponents of regulation argue that government oversight ensures public safety and equal access. Conversely, supporters of free market principles contend that competition fosters innovation. Ultimately, a balanced regulatory framework offers the most effective solution for ${lowerTopic}.`;
        break;
      case "summarize-written-text":
        promptText = `Research indicates that ${lowerTopic} plays a vital role in modern organizational structures. While adopting innovative practices regarding ${lowerTopic} creates strategic advantages, leaders must carefully manage resource allocation and staff training.`;
        promptAudio = `Research indicates that ${lowerTopic} plays a vital role in modern organizational structures.`;
        defaultGoodTranscript = `Although integrating ${lowerTopic} into organizational structures creates competitive advantages, leaders must balance innovation with careful resource allocation and staff training.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Lecture: Organizational management and strategic trends in ${topicTitle}]`;
        promptAudio = `Lecture on organizational management and strategic trends in ${topicTitle}.`;
        defaultGoodTranscript = `The lecture highlighted strategic trends in ${lowerTopic}, emphasizing that organizational success depends on adaptability, data-driven decisions, and ongoing training.`;
        break;
      case "write-from-dictation":
        promptText = `Students must submit their research projects on ${lowerTopic} by next Friday.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `Understanding ${lowerTopic} offers greater [1. flexibility / rigidness / friction / silence] for modern learners. However, individuals must organize their time [2. efficiently / barely / rarely / roughly] to achieve success.`;
        promptAudio = `Understanding ${lowerTopic} offers greater flexibility for modern learners. However, individuals must organize their time efficiently to achieve success.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: Modern initiatives focusing on ${lowerTopic} have gained widespread support.\nB: Institutions that invest in ${lowerTopic} report better community engagement.\nC: Consequently, long-term outcomes show continuous improvement.`;
        promptAudio = `Modern initiatives focusing on ${lowerTopic} have gained widespread support. Institutions that invest in ${lowerTopic} report better community engagement. Consequently, long-term outcomes show continuous improvement.`;
        break;
      default:
        promptText = `Research on ${lowerTopic} reveals significant opportunities for educational and professional growth.`;
        promptAudio = promptText;
        break;
    }
  } else if (cefr.level === "B2") {
    // --- B2 LEVEL: Upper-intermediate technical & academic themes ---
    switch (qId) {
      case "read-aloud":
        promptText = `Market research regarding ${lowerTopic} is a vital component in developing modern business strategy. It involves gathering and analyzing empirical data on consumer preferences to minimize financial risk and maximize efficiency.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `Recent empirical studies regarding ${lowerTopic} indicate significant growth trends.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[Multi-Bar Chart: Regional Comparative Metrics of ${topicTitle} (2020-2025)]`;
        promptAudio = `Multi-Bar Chart showing regional comparative metrics of ${topicTitle} between 2020 and 2025.`;
        defaultGoodTranscript = `This multi-bar chart provides a comparative analysis of ${lowerTopic} across three major geographic regions between 2020 and 2025. Region 1 recorded significant upward growth, whereas Region 2 experienced minor fluctuations before stabilizing. In conclusion, regional variations in ${lowerTopic} reflect differing economic strategies.`;
        break;
      case "retell-lecture":
        promptText = `[Keynote Presentation: Technical advancements and regulatory challenges in ${topicTitle}]`;
        promptAudio = `Keynote presentation on technical advancements and regulatory challenges in ${topicTitle}.`;
        defaultGoodTranscript = `The keynote presentation focused on recent technical breakthroughs in ${lowerTopic}. The speaker highlighted significant performance gains while addressing critical regulatory and ethical challenges. Ultimately, the speaker stressed the need for international standards.`;
        break;
      case "write-essay":
        promptText = `To what extent do advancements in ${lowerTopic} present greater long-term economic opportunities or environmental risks?`;
        promptAudio = promptText;
        defaultGoodTranscript = `Advancements in ${lowerTopic} have sparked significant debate regarding their economic and environmental implications. On one hand, investment in ${lowerTopic} drives technological innovation and creates high-skilled employment. On the other hand, rapid expansion can place considerable pressure on natural resources. In conclusion, maximizing economic benefits while mitigating environmental risks requires strict compliance standards and sustainable practices.`;
        break;
      case "summarize-written-text":
        promptText = `Comprehensive analyses of ${lowerTopic} reveal significant implications for public policy and international trade. Experts emphasize that sustainable implementation of ${lowerTopic} requires rigorous regulatory oversight, continuous data monitoring, and cross-sector collaboration.`;
        promptAudio = `Comprehensive analyses of ${lowerTopic} reveal significant implications for public policy and international trade.`;
        defaultGoodTranscript = `Because implementing ${lowerTopic} impacts public policy and international trade, experts emphasize that long-term sustainability requires rigorous oversight and cross-sector collaboration.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Keynote Address: Strategic frameworks and analytical models in ${topicTitle}]`;
        promptAudio = `Keynote address on strategic frameworks and analytical models in ${topicTitle}.`;
        defaultGoodTranscript = `The keynote address delineated analytical models for ${lowerTopic}, demonstrating that strategic alignment and risk management are crucial for sustainable growth.`;
        break;
      case "write-from-dictation":
        promptText = `Interdisciplinary research regarding ${lowerTopic} will shape future public policy.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `Systematic research on ${lowerTopic} plays an [1. essential / irrelevant / trivial / basic] role in guiding policy. Experts must [2. evaluate / ignore / reject / omit] empirical data carefully to ensure sustainable growth.`;
        promptAudio = `Systematic research on ${lowerTopic} plays an essential role in guiding policy. Experts must evaluate empirical data carefully to ensure sustainable growth.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: Historically, initial investigations into ${lowerTopic} yielded limited results.\nB: Subsequent breakthroughs in the late twentieth century transformed theoretical models.\nC: Today, modern computational tools enable real-time analysis of complex data.`;
        promptAudio = `Historically, initial investigations into ${lowerTopic} yielded limited results. Subsequent breakthroughs in the late twentieth century transformed theoretical models. Today, modern computational tools enable real-time analysis of complex data.`;
        break;
      default:
        promptText = `Systematic analysis of ${lowerTopic} yields valuable insights for public policy and enterprise strategy.`;
        promptAudio = promptText;
        break;
    }
  } else if (cefr.level === "C1") {
    // --- C1 LEVEL: Advanced academic papers, dense syntax, implicit concepts ---
    switch (qId) {
      case "read-aloud":
        promptText = `Behavioral economics and structural analysis of ${lowerTopic} demonstrate that institutional mechanisms systematically distort classical decision-making models under conditions of market uncertainty.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `Cognitive frameworks regarding ${lowerTopic} highlight complex analytical interactions.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[Scatter Plot: Correlation Matrix of ${topicTitle} and Systemic Efficiency Indicators]`;
        promptAudio = `Scatter Plot displaying the correlation matrix of ${topicTitle} and systemic efficiency indicators.`;
        defaultGoodTranscript = `This scatter plot illustrates the empirical correlation between ${lowerTopic} and key systemic efficiency metrics. Data points cluster along a positive linear trajectory, indicating a strong direct relationship with minimal statistical variance. In summary, optimizing ${lowerTopic} correlates directly with elevated operational output.`;
        break;
      case "retell-lecture":
        promptText = `[Academic Seminar: Epistemological frameworks and systemic interactions in ${topicTitle}]`;
        promptAudio = `Academic seminar examining epistemological frameworks and systemic interactions in ${topicTitle}.`;
        defaultGoodTranscript = `The academic seminar explored theoretical frameworks surrounding ${lowerTopic}. The keynote speaker interrogated underlying epistemological assumptions, arguing that dynamic non-linear models yield superior predictive accuracy compared to classical paradigms.`;
        break;
      case "write-essay":
        promptText = `Critically evaluate the systemic risks and institutional challenges associated with ${lowerTopic} in modern global governance.`;
        promptAudio = promptText;
        defaultGoodTranscript = `The rapid evolution of ${lowerTopic} poses profound structural questions for modern global governance. Structurally, uncoordinated national policies regarding ${lowerTopic} risk regulatory arbitrage and systemic instability. Furthermore, institutional inertia frequently hinders timely interventions. Therefore, establishing binding international frameworks is imperative to safeguard governance integrity.`;
        break;
      case "summarize-written-text":
        promptText = `Empirical evaluations of ${lowerTopic} demonstrate that structural and socio-economic variables systematically shape institutional outcomes, necessitating adaptive policy frameworks to mitigate potential systemic imbalances.`;
        promptAudio = `Empirical evaluations of ${lowerTopic} demonstrate that structural variables shape institutional outcomes.`;
        defaultGoodTranscript = `Because structural and socio-economic variables in ${lowerTopic} shape institutional outcomes, adaptive policy frameworks are essential to prevent systemic imbalances.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Academic Seminar: Multi-variable modeling and policy constraints in ${topicTitle}]`;
        promptAudio = `Academic seminar discussing multi-variable modeling and policy constraints in ${topicTitle}.`;
        defaultGoodTranscript = `The seminar analyzed multi-variable models of ${lowerTopic}, demonstrating that dynamic policy constraints and empirical validation are vital for mitigating structural risks.`;
        break;
      case "write-from-dictation":
        promptText = `Empirical findings demonstrate that ${lowerTopic} significantly affects institutional performance.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `Empirical evaluations of ${lowerTopic} demonstrate [1. significant / marginal / trivial / superficial] potential for optimizing systemic efficiency. Scientists argue that [2. cross-disciplinary / isolated / rudimentary / fragmented] cooperation is mandatory.`;
        promptAudio = `Empirical evaluations of ${lowerTopic} demonstrate significant potential for optimizing systemic efficiency. Scientists argue that cross-disciplinary cooperation is mandatory.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: Theoretical models of ${lowerTopic} originally posited linear cause-and-effect relationships.\nB: Empirical observations subsequently revealed non-linear feedback loops that challenged existing paradigms.\nC: Consequently, contemporary researchers utilize non-equilibrium thermodynamics to capture these dynamic interactions.`;
        promptAudio = `Theoretical models of ${lowerTopic} originally posited linear cause-and-effect relationships. Empirical observations subsequently revealed non-linear feedback loops that challenged existing paradigms. Consequently, contemporary researchers utilize non-equilibrium thermodynamics to capture these dynamic interactions.`;
        break;
      default:
        promptText = `Behavioral economics and empirical evaluations of ${lowerTopic} highlight complex institutional interactions.`;
        promptAudio = promptText;
        break;
    }
  } else {
    // --- C2 LEVEL: Mastery / Proficient specialized academic research text ---
    switch (qId) {
      case "read-aloud":
        promptText = `Theoretical investigations into ${lowerTopic} reveal that non-linear parameters mediate complex interactions, exhibiting asymptotic behavior at extreme scales while maintaining equilibrium under standard conditions.`;
        promptAudio = promptText;
        break;
      case "repeat-sentence":
        promptText = `Thermodynamic and structural parameters govern ${lowerTopic} across specialized research paradigms.`;
        promptAudio = promptText;
        break;
      case "describe-image":
        promptText = `[3D Contour Map: Multi-Variable Phase Space Analysis of ${topicTitle}]`;
        promptAudio = `3D Contour Map showing multi-variable phase space analysis of ${topicTitle}.`;
        defaultGoodTranscript = `This 3D contour map presents a multi-variable phase space analysis of ${lowerTopic}. High-density gradient regions indicate non-linear equilibrium states, whereas peripheral zones display transient thermodynamic turbulence. In conclusion, the visualization confirms theoretical predictions regarding ${lowerTopic} stability.`;
        break;
      case "retell-lecture":
        promptText = `[International Symposium: Non-linear dynamics and quantum theoretical models in ${topicTitle}]`;
        promptAudio = `International symposium on non-linear dynamics and quantum theoretical models in ${topicTitle}.`;
        defaultGoodTranscript = `The symposium delivered an advanced theoretical synthesis of ${lowerTopic}. Researchers presented empirical data establishing non-linear feedback mechanisms that reconcile long-standing anomalies within existing quantum models.`;
        break;
      case "write-essay":
        promptText = `Analyze the theoretical and philosophical implications of ${lowerTopic} on contemporary epistemological paradigms.`;
        promptAudio = promptText;
        defaultGoodTranscript = `An inquiry into ${lowerTopic} reveals fundamental tension at the nexus of empirical reductionism and complex systems theory. Theoretically, non-linear feedback loops in ${lowerTopic} challenge deterministic causality. Consequently, adopting integrative epistemological frameworks becomes essential for future scientific discourse.`;
        break;
      case "summarize-written-text":
        promptText = `Recent breakthroughs in computational modeling of ${lowerTopic} demonstrate that non-linear thermodynamic equations accurately predict boundary conditions in high-stress environments, providing superior fidelity over classical linear approximations.`;
        promptAudio = `Recent breakthroughs in computational modeling of ${lowerTopic} demonstrate that non-linear thermodynamic equations accurately predict boundary conditions.`;
        defaultGoodTranscript = `Computational breakthroughs in ${lowerTopic} demonstrate that non-linear thermodynamic models offer superior predictive fidelity over traditional linear approximations in complex boundary environments.`;
        break;
      case "summarize-spoken-text":
        promptText = `[Symposium: High-fidelity computational modeling and theoretical paradigms in ${topicTitle}]`;
        promptAudio = `International symposium on high-fidelity computational modeling and theoretical paradigms in ${topicTitle}.`;
        defaultGoodTranscript = `The symposium demonstrated that non-linear computational modeling of ${lowerTopic} resolves foundational discrepancies in high-stress theoretical paradigms.`;
        break;
      case "write-from-dictation":
        promptText = `Isotopic proxy analysis of ${lowerTopic} reveals precise historical fluctuations across cyclical epochs.`;
        promptAudio = promptText;
        break;
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
        promptText = `Advanced research in ${lowerTopic} illuminates [1. profound / negligible / superficial / elementary] theoretical implications. Researchers must [2. synthesize / discard / overlook / truncate] multi-variable datasets to establish predictive validity.`;
        promptAudio = `Advanced research in ${lowerTopic} illuminates profound theoretical implications. Researchers must synthesize multi-variable datasets to establish predictive validity.`;
        break;
      case "reorder-paragraphs":
        promptText = `A: Epistemological analyses of ${lowerTopic} reveal foundational ambiguities in classical axiomatic formulations.\nB: Recent quantum information theory breakthroughs suggest alternative ontological frameworks.\nC: These insights promise to resolve long-standing paradoxes in quantum measurement theory.`;
        promptAudio = `Epistemological analyses of ${lowerTopic} reveal foundational ambiguities in classical axiomatic formulations. Recent quantum information theory breakthroughs suggest alternative ontological frameworks. These insights promise to resolve long-standing paradoxes in quantum measurement theory.`;
        break;
      default:
        promptText = `Quantum theoretical frameworks and thermodynamic parameters govern ${lowerTopic} across specialized research paradigms.`;
        promptAudio = promptText;
        break;
    }
  }

  // Handle ASQ Special Case
  if (qId === "answer-short-question") {
    const asqObj = ASQ_QUESTIONS[(safeIndex - 1) % ASQ_QUESTIONS.length];
    promptText = asqObj.question;
    promptAudio = asqObj.question;
    goodSample = {
      transcript: asqObj.answer,
      audioDuration: "2 seconds",
      characteristics: "Immediate 1-second onset, exact target word."
    };
    poorSample = generateWeakASQ(asqObj.question, asqObj.answer, safeIndex).sample;
    goodScore = { content: 1, overall: "100%", breakdownText: "Exact correct word delivered." };
    poorScore = { content: 0, overall: "0%", breakdownText: "Incorrect or missing word." };
  } else {
    // Generate appropriate good/poor samples for other question types
    promptAudio = promptAudio || promptText;
    const finalGoodTranscript = defaultGoodTranscript || promptText;
    goodSample = {
      transcript: finalGoodTranscript,
      audioDuration: cefr.level === "A1" ? "12 seconds" : cefr.level === "A2" ? "18 seconds" : "25 seconds",
      characteristics: `Clear oral delivery, steady rhythm, exact ${cefr.level} vocabulary articulation addressing ${topicTitle}.`
    };
    goodScore = { content: 5, fluency: 5, pronunciation: 5, overall: "90 / 90", breakdownText: `Flawless execution matching ${cefr.level} rubric for ${topicTitle}.` };

    switch (qId) {
      case "read-aloud": {
        const weak = generateWeakReadAloud(promptText, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "repeat-sentence": {
        const weak = generateWeakRepeatSentence(promptText, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "describe-image": {
        const weak = generateWeakDescribeImage(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "retell-lecture": {
        const weak = generateWeakRetellLecture(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "write-essay": {
        const weak = generateWeakEssay(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "summarize-written-text": {
        const weak = generateWeakSummarizeWrittenText(safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "summarize-spoken-text": {
        const weak = generateWeakSummarizeSpokenText(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "write-from-dictation": {
        const weak = generateWeakWriteFromDictation(promptText, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "respond-to-a-situation": {
        const weak = generateWeakRespondToSituation(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "summarize-group-discussion": {
        const weak = generateWeakSummarizeGroupDiscussion(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "fill-in-blanks-rw":
      case "fill-in-blanks-r":
      case "fill-in-blanks-l": {
        const weak = generateWeakFillInBlanks(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "reorder-paragraphs": {
        const weak = generateWeakReorderParagraphs(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "multiple-choice-single-r":
      case "multiple-choice-multiple-r":
      case "multiple-choice-single-l":
      case "multiple-choice-multiple-l":
      case "highlight-correct-summary":
      case "select-missing-word": {
        const weak = generateWeakMultipleChoice(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      case "highlight-incorrect-words": {
        const weak = generateWeakHighlightIncorrectWords(topicTitle, safeIndex);
        poorSample = weak.sample;
        poorScore = weak.score;
        break;
      }
      default: {
        const words = promptText ? promptText.split(" ") : [];
        const firstHalf = words.length > 0 ? words.slice(0, Math.max(2, Math.floor(words.length * 0.5))).join(" ") : topicTitle;
        poorSample = {
          transcript: `${firstHalf}... um... [hesitated and omitted rest]`,
          audioDuration: "12 seconds",
          characteristics: `Omitted second half of ${topicTitle.toLowerCase()} prompt response with vocal hesitation.`
        };
        poorScore = { content: 2, fluency: 2, pronunciation: 2, overall: "40 / 90", breakdownText: "Incomplete content delivery and hesitations penalized score." };
        break;
      }
    }
  }

  return {
    exerciseIndex: safeIndex,
    totalExercises: 100,
    cefrLevel: cefr,
    topicTitle: topicTitle,
    promptText,
    promptAudio: promptAudio || promptText,
    good: goodSample,
    poor: poorSample,
    goodScore,
    poorScore,
    expertAdvice: questionObj ? questionObj.expertAdvice : "",
    errorChecklist: questionObj ? (questionObj.errorChecklist || []) : []
  };
}