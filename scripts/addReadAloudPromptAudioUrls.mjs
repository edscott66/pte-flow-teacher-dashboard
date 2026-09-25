import fs from "node:fs";
import path from "node:path";

const BANK_PATH = path.resolve(
  "src/masterTeacher/constants/exerciseBank.ts"
);

const AUDIO_BASE =
  "https://storage.googleapis.com/pte-flow-teacher-dashboard-audio/calibration-audio/read-aloud/prompts-v1";

const VOICES = [
  "achernar",
  "orus",
  "leda",
  "puck",
  "sulafat",
  "iapetus",
];

const source = fs.readFileSync(BANK_PATH, "utf8");

// Only operate on the Read Aloud calibration array.
const arrayStart = source.indexOf(
  "export const READ_ALOUD_CALIBRATION_EXERCISES"
);

if (arrayStart === -1) {
  throw new Error(
    "Could not find READ_ALOUD_CALIBRATION_EXERCISES in exerciseBank.ts"
  );
}

const before = source.slice(0, arrayStart);
let section = source.slice(arrayStart);

// Find the end of the exported array.
const arrayEnd = section.indexOf("];");

if (arrayEnd === -1) {
  throw new Error(
    "Could not find the end of READ_ALOUD_CALIBRATION_EXERCISES."
  );
}

const arrayBody = section.slice(0, arrayEnd + 2);
const after = section.slice(arrayEnd + 2);

let changed = 0;
let alreadyPresent = 0;
const seenExercises = new Set();

const updatedArrayBody = arrayBody.replace(
  /(\{\s*exerciseIndex:\s*(\d+),[\s\S]*?)(?=\n\s*\},)/g,
  (fullMatch, exerciseBlock, exerciseIndexText) => {
    const exerciseIndex = Number(exerciseIndexText);

    if (
      !Number.isInteger(exerciseIndex) ||
      exerciseIndex < 1 ||
      exerciseIndex > 100
    ) {
      return fullMatch;
    }

    seenExercises.add(exerciseIndex);

    if (/promptAudioUrl\s*:/.test(exerciseBlock)) {
      alreadyPresent++;
      return fullMatch;
    }

    const voice = VOICES[(exerciseIndex - 1) % VOICES.length];

    const promptAudioUrl =
      `${AUDIO_BASE}/exercise-${String(exerciseIndex).padStart(3, "0")}-prompt-${voice}.mp3`;

    // Insert immediately after exerciseIndex.
    return fullMatch.replace(
      new RegExp(
        `(exerciseIndex:\\s*${exerciseIndex},)`
      ),
      `$1\n    promptAudioUrl: "${promptAudioUrl}",`
    );
  }
);

if (seenExercises.size !== 100) {
  throw new Error(
    `Safety check failed: found ${seenExercises.size} Read Aloud exercises, expected 100.`
  );
}

const finalSource = before + updatedArrayBody + after;

fs.writeFileSync(BANK_PATH, finalSource, "utf8");

const promptUrlCount =
  (updatedArrayBody.match(/promptAudioUrl\s*:/g) || []).length;

if (promptUrlCount !== 100) {
  throw new Error(
    `Safety check failed after update: found ${promptUrlCount} promptAudioUrl entries, expected 100.`
  );
}

changed = 100 - alreadyPresent;

console.log("Read Aloud prompt audio URLs updated.");
console.log(`Exercises found: ${seenExercises.size}`);
console.log(`URLs already present: ${alreadyPresent}`);
console.log(`URLs added: ${changed}`);
console.log(`Total promptAudioUrl entries: ${promptUrlCount}`);
console.log(`File updated: ${BANK_PATH}`);