import fs from "node:fs";
import path from "node:path";

const FILE = path.resolve(
  "src/masterTeacher/constants/calibration/repeatSentenceCalibration.ts"
);

const BASE_URL =
  "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/repeat-sentence/student-responses-v2";

const VOICES = [
  "achernar",
  "orus",
  "leda",
  "puck",
  "sulafat",
  "iapetus",
];

const source = fs.readFileSync(FILE, "utf8");

const exerciseMatches = [
  ...source.matchAll(
    /(?:^|\r?\n)\s*exerciseIndex\s*:\s*(\d+)\s*,/g
  ),
];

if (exerciseMatches.length !== 100) {
  throw new Error(
    `Expected 100 Repeat Sentence exercises, found ${exerciseMatches.length}.`
  );
}

const exercises = [];

for (let i = 0; i < exerciseMatches.length; i += 1) {
  const exerciseIndex = Number.parseInt(
    exerciseMatches[i][1],
    10
  );

  const start = exerciseMatches[i].index;

  const end =
    i + 1 < exerciseMatches.length
      ? exerciseMatches[i + 1].index
      : source.length;

  exercises.push({
    exerciseIndex,
    start,
    end,
  });
}

let updated = source;
let added = 0;
let alreadyPresent = 0;

for (let i = exercises.length - 1; i >= 0; i -= 1) {
  const exercise = exercises[i];

  const block = updated.slice(
    exercise.start,
    exercise.end
  );

  if (block.includes("studentResponseAudioUrl:")) {
    alreadyPresent += 1;
    continue;
  }

  const voice =
    VOICES[(exercise.exerciseIndex - 1) % VOICES.length];

  const filename =
    `exercise-${String(exercise.exerciseIndex).padStart(3, "0")}-student-${voice}.mp3`;

  const url = `${BASE_URL}/${filename}`;

  const promptAudioMatch = block.match(
    /(\r?\n\s*promptAudioUrl\s*:\s*"[^"]+"\s*,)/
  );

  if (!promptAudioMatch) {
    throw new Error(
      `Exercise ${exercise.exerciseIndex}: promptAudioUrl was not found.`
    );
  }

  const replacement =
    `${promptAudioMatch[1]}\r\n` +
    `    studentResponseAudioUrl:\r\n` +
    `      "${url}",`;

  const updatedBlock = block.replace(
    promptAudioMatch[1],
    replacement
  );

  updated =
    updated.slice(0, exercise.start) +
    updatedBlock +
    updated.slice(exercise.end);

  added += 1;
}

fs.writeFileSync(FILE, updated, "utf8");

const totalEntries = (
  updated.match(/studentResponseAudioUrl\s*:/g) || []
).length;

console.log("");
console.log(
  "Repeat Sentence student-response audio URLs updated."
);
console.log(`Exercises found: ${exercises.length}`);
console.log(`URLs already present: ${alreadyPresent}`);
console.log(`URLs added: ${added}`);
console.log(
  `Total studentResponseAudioUrl entries: ${totalEntries}`
);
console.log(`File updated: ${FILE}`);