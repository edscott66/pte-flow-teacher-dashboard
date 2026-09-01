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
  "Health & Feeling Sick",
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
