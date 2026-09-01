// Fuzzy Text Matching & Keyword Gap Analysis Engine for PTE Teacher Training

const STOP_WORDS = new Set([
  "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't",
  "as", "at", "be", "because", "been", "before", "being", "below", "between", "both", "but", "by",
  "can", "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing",
  "don't", "down", "during", "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't",
  "have", "haven't", "having", "he", "he'd", "he'll", "he's", "her", "here", "here's", "hers", "herself",
  "him", "himself", "his", "how", "how's", "i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is",
  "isn't", "it", "it's", "its", "itself", "let's", "me", "more", "most", "mustn't", "my", "myself",
  "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "ours",
  "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should",
  "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them",
  "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've",
  "this", "those", "through", "to", "too", "under", "until", "up", "very", "was", "wasn't", "we",
  "we'd", "we'll", "we're", "we've", "were", "weren't", "what", "what's", "when", "when's", "where",
  "where's", "which", "while", "who", "who's", "whom", "why", "why's", "with", "won't", "would",
  "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"
]);

const PTE_TECHNICAL_KEYWORDS = [
  "fluency", "oral fluency", "pronunciation", "content", "intonation", "word stress", "sentence stress",
  "hesitation", "pause", "false start", "self-correction", "rhythm", "thought group", "phrasing", "cadence",
  "form", "word count", "comma splice", "single sentence", "grammar", "vocabulary", "lexical resource",
  "cohesion", "coherence", "spelling", "spelling consistency", "uk spelling", "us spelling",
  "omission", "addition", "word sequence", "capitalization", "punctuation", "negative marking",
  "dictation", "listening", "speaking", "writing", "reading", "template", "enabling skills"
];

function tokenize(text) {
  if (!text) return [];
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w));
}

function calculateJaccardIndex(tokensA, tokensB) {
  if (tokensA.length === 0 || tokensB.length === 0) return 0;
  const setA = new Set(tokensA);
  const setB = new Set(tokensB);
  let intersectionCount = 0;
  setA.forEach(token => {
    if (setB.has(token)) intersectionCount++;
  });
  const unionSize = new Set([...tokensA, ...tokensB]).size;
  return unionSize === 0 ? 0 : intersectionCount / unionSize;
}

function calculateCosineSimilarity(tokensA, tokensB) {
  if (tokensA.length === 0 || tokensB.length === 0) return 0;
  const freqA = {};
  const freqB = {};
  tokensA.forEach(t => freqA[t] = (freqA[t] || 0) + 1);
  tokensB.forEach(t => freqB[t] = (freqB[t] || 0) + 1);
  const allWords = new Set([...Object.keys(freqA), ...Object.keys(freqB)]);
  let dotProduct = 0;
  let magnitudeA = 0;
  let magnitudeB = 0;
  allWords.forEach(word => {
    const valA = freqA[word] || 0;
    const valB = freqB[word] || 0;
    dotProduct += valA * valB;
    magnitudeA += valA * valA;
    magnitudeB += valB * valB;
  });
  const denominator = Math.sqrt(magnitudeA) * Math.sqrt(magnitudeB);
  return denominator === 0 ? 0 : dotProduct / denominator;
}

export function compareTeacherFeedback(userFeedback, expertFeedbackText, errorChecklist = []) {
  const userText = userFeedback || "";
  const expertText = expertFeedbackText || "";
  const userTokens = tokenize(userText);
  const expertTokens = tokenize(expertText);
  const jaccard = calculateJaccardIndex(userTokens, expertTokens);
  const cosine = calculateCosineSimilarity(userTokens, expertTokens);

  let rawScore = (jaccard * 0.4 + cosine * 0.6) * 100;
  const normalizedUserText = userText.toLowerCase();
  const normalizedExpertText = expertText.toLowerCase();

  const matchedKeywords = [];
  const missingKeywords = [];

  errorChecklist.forEach(item => {
    if (item.keyword) {
      const kw = item.keyword.toLowerCase();
      if (normalizedUserText.includes(kw)) {
        if (!matchedKeywords.includes(item.keyword)) matchedKeywords.push(item.keyword);
      } else {
        if (!missingKeywords.includes(item.keyword)) missingKeywords.push(item.keyword);
      }
    }
  });

  PTE_TECHNICAL_KEYWORDS.forEach(kw => {
    if (normalizedExpertText.includes(kw)) {
      if (normalizedUserText.includes(kw)) {
        if (!matchedKeywords.map(k => k.toLowerCase()).includes(kw)) {
          matchedKeywords.push(kw.charAt(0).toUpperCase() + kw.slice(1));
        }
      } else if (!missingKeywords.map(k => k.toLowerCase()).includes(kw)) {
        missingKeywords.push(kw.charAt(0).toUpperCase() + kw.slice(1));
      }
    }
  });

  const totalKeywordsInExpert = matchedKeywords.length + missingKeywords.length;
  const keywordRatio = totalKeywordsInExpert > 0 ? matchedKeywords.length / totalKeywordsInExpert : 0.5;
  let finalPercentage = Math.round(rawScore * 0.5 + keywordRatio * 50);

  if (userText.trim().length < 15) {
    finalPercentage = Math.min(finalPercentage, 25);
  } else {
    finalPercentage = Math.min(98, Math.max(15, finalPercentage));
  }

  let tier = "Emerging Trainer";
  let badgeColor = "#ef4444";
  let feedbackSummary = "Your evaluation captures basic points, but lacks specific PTE technical jargon and enabling skills breakdown.";

  if (finalPercentage >= 80) {
    tier = "Master PTE Assessor";
    badgeColor = "#10b981";
    feedbackSummary = "Outstanding feedback! You hit the key marking heuristics, identified enabling skills precisely, and provided actionable, expert-level critique.";
  } else if (finalPercentage >= 60) {
    tier = "Proficient Instructor";
    badgeColor = "#f59e0b";
    feedbackSummary = "Strong feedback with good foundational insights. Incorporating missing technical terms like '" + (missingKeywords[0] || "Enabling Skills") + "' will elevate your feedback to expert standard.";
  } else if (finalPercentage >= 40) {
    tier = "Developing Evaluator";
    badgeColor = "#3b82f6";
    feedbackSummary = "Fair attempt. Try using the Error Tracker checkboxes to inject technical jargon such as Oral Fluency, Thought Groups, and Form Rules.";
  }

  return {
    matchPercentage: finalPercentage,
    tier,
    badgeColor,
    feedbackSummary,
    matchedKeywords,
    missingKeywords: missingKeywords.slice(0, 6),
    userWordCount: userText.trim().split(/\s+/).filter(Boolean).length,
    expertWordCount: expertText.trim().split(/\s+/).filter(Boolean).length
  };
}
