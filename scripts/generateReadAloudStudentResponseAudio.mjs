import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const PROJECT_ID = "gen-lang-client-0294792757";
const MODEL = "gemini-2.5-flash-tts";
const LANGUAGE_CODE = "en-US";

const DEFAULT_SPEAKING_RATE = 1.25;

/*
 * Exercise-specific speaking rates.
 *
 * Exercise 5 is deliberately designed as a
 * Speech Rate — Too Slow calibration exercise.
 *
 * Exercise 6 is deliberately designed as a
 * Speech Rate — Too Fast calibration exercise.
 */
const EXERCISE_SPEAKING_RATES = {
  5: 0.85,
  6: 1.60,
  31: 1.40,
  36: 1.40,
  39: 1.40,
  46: 1.40,
  48: 1.60,
  49: 1.40,
  52: 1.40,
  60: 1.40,
  67: 1.10,
  68: 1.15,
  71: 1.40,
  72: 1.40,
  73: 1.10,
  74: 1.10,
  76: 1.05,
  78: 1.40,
  81: 1.15,
  85: 1.25,
  86: 1.20,
  87: 1.30,
  88: 1.20,
  92: 1.40,
  93: 1.30,
  96: 1.35,
  98: 1.10,
  100: 1.20,
};

const CALIBRATION_FILE = path.resolve(
  "src/masterTeacher/constants/exerciseBank.ts"
);

const OUTPUT_DIR = path.resolve(
  "generated-audio/read-aloud/student-responses-v1"
);

const EXPECTED_EXERCISE_COUNT = 100;

const VOICES = [
  "Achernar",
  "Orus",
  "Leda",
  "Puck",
  "Sulafat",
  "Iapetus",
];

const TTS_PROMPT =
  "Perform the following Read Aloud student response as a natural English-speaking student. Preserve the wording exactly as written, including omissions, substitutions, repetitions, filler words, hesitations, and other deliberate response errors. Do not correct, improve, paraphrase, or add words. Use a natural conversational pace and clear but realistic student delivery. Treat [short pause], [medium pause], and [long pause] as silent pauses only. Insert the requested silence naturally and do not speak the pause instruction aloud.";

const EXERCISE_TTS_PROMPTS = {
  37:
    "Perform the following Read Aloud student response as a natural English-speaking student. Preserve every word exactly as written. This is a pronunciation calibration case: in the target word written as \"Bisitors\", deliberately pronounce the initial consonant as a voiced /b/ sound, not /v/. The result should begin with a clear /b/ sound while the remainder of the word stays as close as possible to the written target. Do not normalize or correct the word to \"Visitors\". Do not change any other word. Use a natural conversational pace and clear but realistic student delivery.",
  48:
  "Read the following Read Aloud student response as one continuous, controlled spoken delivery. Preserve every word exactly as written. This is a run-on delivery calibration case. Do not insert deliberate pauses between the sentence ideas. Continue directly from 'traffic' into 'Dedicated', from 'distances' into 'However', and from 'city' into 'Good'. Do not add words, remove words, or paraphrase. Keep the overall speaking rate natural and controlled, not excessively fast. The intended characteristic is insufficient sentence-boundary pausing, not excessive speech rate.",
  };

function getTtsPrompt(exerciseIndex) {
  /*
   * These exercises must send only the student response text.
   *
   * The generic Gemini TTS prompt has previously leaked into the
   * spoken audio, beginning with phrases such as "Preserve..."
   * Exercise 54 already uses this mode successfully.
   */
  const promptlessExercises = new Set([
    31,
    41,
    45,
    54,
    59,
    60,
    81,
    86,
    88,
    89,
    90,
    91,
    98,
    99,
    100,
    ]);

  if (promptlessExercises.has(exerciseIndex)) {
    return null;
  }

  return EXERCISE_TTS_PROMPTS[exerciseIndex] ?? TTS_PROMPT;
}

const args = process.argv.slice(2);

function getArgValue(name) {
  const index = args.indexOf(name);

  if (index === -1) {
    return null;
  }

  return args[index + 1] ?? null;
}

function hasFlag(name) {
  return args.includes(name);
}

const requestedStart = getArgValue("--start");
const requestedEnd = getArgValue("--end");
const force = hasFlag("--force");

const startExercise = requestedStart
  ? Number.parseInt(requestedStart, 10)
  : 1;

const endExercise = requestedEnd
  ? Number.parseInt(requestedEnd, 10)
  : EXPECTED_EXERCISE_COUNT;

if (
  !Number.isInteger(startExercise) ||
  !Number.isInteger(endExercise) ||
  startExercise < 1 ||
  endExercise < startExercise ||
  endExercise > EXPECTED_EXERCISE_COUNT
) {
  throw new Error(
    `Invalid exercise range. Use --start N --end N where 1 <= N <= ${EXPECTED_EXERCISE_COUNT} and start <= end.`
  );
}

function fail(message) {
  throw new Error(message);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getVoiceForExercise(exerciseIndex) {
  return VOICES[
    (exerciseIndex - 1) % VOICES.length
  ];
}

function getSpeakingRate(exerciseIndex) {
  return (
    EXERCISE_SPEAKING_RATES[exerciseIndex] ??
    DEFAULT_SPEAKING_RATE
  );
}

function getAccessToken() {
  try {
    return execFileSync(
      "cmd.exe",
      [
        "/c",
        "gcloud",
        "auth",
        "application-default",
        "print-access-token",
      ],
      {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "pipe"],
      }
    ).trim();
  } catch (error) {
    console.error("");
    console.error(
      "DEBUG: Node could not obtain the Google ADC token."
    );
    console.error("Error code:", error?.code);
    console.error(
      "Error message:",
      error?.message
    );
    console.error(
      "Error stderr:",
      error?.stderr?.toString?.()
    );
    console.error(
      "Error stdout:",
      error?.stdout?.toString?.()
    );

    throw new Error(
      "Could not obtain an ADC access token. Run: gcloud auth application-default login"
    );
  }
}

/*
 * Convert calibration notation into explicit TTS pause instructions.
 *
 * Existing:
 *   ...          -> [long pause]
 *
 * Slash notation:
 *   /            -> [short pause]
 *
 * The slash is used in the calibration transcript as a visual
 * indication of a phrase boundary. It must not be spoken aloud.
 *
 * Multiple slash markers are converted individually.
 */
function normalizeStudentTranscriptForTts(
  transcript
) {
  let text = String(transcript ?? "");

  text = text.replace(
    /\(\s*\.\.\.\s*\)/g,
    " [long pause] "
  );

  text = text.replace(
    /\.\.\.\s*\.\.\./g,
    " [long pause] "
  );

  text = text.replace(
    /\.\.\./g,
    " [long pause] "
  );

  /*
   * Convert slash markers into explicit short pauses.
   *
   * The slash itself must never be spoken by the TTS engine.
   */
  text = text.replace(
    /\s*\/\s*/g,
    " [short pause] "
  );

  text = text
    .replace(/\s+/g, " ")
    .trim();

  return text;
}

function extractReadAloudExercises(
  source
) {
  const declaration =
    "export const READ_ALOUD_CALIBRATION_EXERCISES = [";

  const arrayStart =
    source.indexOf(declaration);

  if (arrayStart === -1) {
    fail(
      `Could not find ${declaration} in ${CALIBRATION_FILE}.`
    );
  }

  const arrayEnd =
    source.indexOf(
      "\n];",
      arrayStart +
        declaration.length
    );

  if (arrayEnd === -1) {
    fail(
      "Could not find the end of READ_ALOUD_CALIBRATION_EXERCISES."
    );
  }

  const calibrationSource =
    source.slice(
      arrayStart +
        declaration.length,
      arrayEnd
    );

  const indexMatches = [
    ...calibrationSource.matchAll(
      /(?:^|\n)\s*exerciseIndex\s*:\s*(\d+)\s*,/g
    ),
  ];

  if (
    indexMatches.length !==
    EXPECTED_EXERCISE_COUNT
  ) {
    fail(
      `Expected exactly ${EXPECTED_EXERCISE_COUNT} Read Aloud exerciseIndex entries, but found ${indexMatches.length}. No audio will be generated.`
    );
  }

  const exercises = [];

  for (
    let i = 0;
    i < indexMatches.length;
    i += 1
  ) {
    const match =
      indexMatches[i];

    const exerciseIndex =
      Number.parseInt(
        match[1],
        10
      );

    const blockStart =
      match.index;

    const blockEnd =
      i + 1 <
      indexMatches.length
        ? indexMatches[i + 1].index
        : calibrationSource.length;

    const block =
      calibrationSource.slice(
        blockStart,
        blockEnd
      );

    const studentTranscriptMatch =
      block.match(
        /studentTranscript\s*:\s*"((?:\\.|[^"\\])*)"/
      );

    const promptTextMatch =
      block.match(
        /promptText\s*:\s*"((?:\\.|[^"\\])*)"/
      );

    if (!studentTranscriptMatch) {
      fail(
        `Exercise ${exerciseIndex}: studentTranscript was not found. No audio will be generated.`
      );
    }

    if (!promptTextMatch) {
      fail(
        `Exercise ${exerciseIndex}: promptText was not found. No audio will be generated.`
      );
    }

    function decodeString(value) {
      try {
        return JSON.parse(
          `"${value}"`
        );
      } catch {
        return value
          .replace(/\\"/g, '"')
          .replace(
            /\\\\/g,
            "\\"
          );
      }
    }

    exercises.push({
      exerciseIndex,
      promptText:
        decodeString(
          promptTextMatch[1]
        ),
      studentTranscript:
        decodeString(
          studentTranscriptMatch[1]
        ),
    });
  }

  return exercises.sort(
    (a, b) =>
      a.exerciseIndex -
      b.exerciseIndex
  );
}

function validateExercises(
  exercises
) {
  if (
    exercises.length !==
    EXPECTED_EXERCISE_COUNT
  ) {
    fail(
      `Expected exactly ${EXPECTED_EXERCISE_COUNT} Read Aloud calibration exercises, but extracted ${exercises.length}. No audio will be generated.`
    );
  }

  for (
    let i = 0;
    i < exercises.length;
    i += 1
  ) {
    const expectedIndex =
      i + 1;

    const exercise =
      exercises[i];

    if (
      exercise.exerciseIndex !==
      expectedIndex
    ) {
      fail(
        `Exercise numbering error: expected ${expectedIndex}, found ${exercise.exerciseIndex}. No audio will be generated.`
      );
    }

    if (
      !exercise.promptText.trim()
    ) {
      fail(
        `Exercise ${expectedIndex} has an empty promptText. No audio will be generated.`
      );
    }

    if (
      !exercise.studentTranscript.trim()
    ) {
      fail(
        `Exercise ${expectedIndex} has an empty studentTranscript. No audio will be generated.`
      );
    }
  }
}

async function synthesizeSpeech({
  accessToken,
  text,
  voiceName,
  speakingRate,
  exerciseIndex,
}) {
  const url =
    "https://texttospeech.googleapis.com/v1/text:synthesize";

  const input = {
    text,
  };

  const ttsPrompt = getTtsPrompt(exerciseIndex);

  /*
   * Exercise 54 deliberately sends NO prompt field.
   *
   * The previous approach used prompt: "" / null, but the model
   * still vocalized the instruction beginning with "Preserve...".
   * Omitting the property entirely removes that instruction from
   * the request.
   */
  if (ttsPrompt) {
  input.prompt = ttsPrompt;
}

  const requestBody = {
    input,
    voice: {
      languageCode: LANGUAGE_CODE,
      name: voiceName,
      modelName: MODEL,
    },
    audioConfig: {
      audioEncoding: "MP3",
      speakingRate,
    },
  };

  const maxRetries = 5;

  for (
    let attempt = 0;
    attempt <= maxRetries;
    attempt += 1
  ) {
    try {
      const response =
        await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type":
              "application/json",
            "x-goog-user-project":
              PROJECT_ID,
          },
          body: JSON.stringify(
            requestBody
          ),
        });

      if (response.ok) {
        const data =
          await response.json();

        if (!data.audioContent) {
          throw new Error(
            "Google TTS returned a successful response but no audioContent."
          );
        }

        return Buffer.from(
          data.audioContent,
          "base64"
        );
      }

      const responseText =
        await response.text();

      const retryable =
        response.status === 429 ||
        response.status >= 500;

      if (
        !retryable ||
        attempt === maxRetries
      ) {
        throw new Error(
          `Google TTS request failed with HTTP ${response.status}: ${responseText}`
        );
      }

      const delayMs =
        2000 *
        Math.pow(
          2,
          attempt
        );

      console.warn(
        `  TTS request returned HTTP ${response.status}. Retrying in ${delayMs} ms...`
      );

      await sleep(
        delayMs
      );
    } catch (error) {
      if (
        attempt === maxRetries
      ) {
        throw error;
      }

      if (
        error?.message?.includes(
          "Google TTS request failed with HTTP"
        )
      ) {
        throw error;
      }

      const delayMs =
        2000 *
        Math.pow(
          2,
          attempt
        );

      console.warn(
        `  TTS request error. Retrying in ${delayMs} ms...`
      );

      await sleep(
        delayMs
      );
    }
  }

  throw new Error(
    "TTS synthesis failed after all retries."
  );
}

function ensureOutputDirectory() {
  fs.mkdirSync(
    OUTPUT_DIR,
    {
      recursive: true,
    }
  );
}

function getOutputPath(
  exerciseIndex,
  voiceName
) {
  const filename =
    `read-aloud-${String(
      exerciseIndex
    ).padStart(
      3,
      "0"
    )}-${voiceName.toLowerCase()}.mp3`;

  return path.join(
    OUTPUT_DIR,
    filename
  );
}

function validateGeneratedFile({
  outputPath,
  exercise,
  voiceName,
}) {
  if (
    !fs.existsSync(
      outputPath
    )
  ) {
    throw new Error(
      `Expected generated file does not exist: ${outputPath}`
    );
  }

  const stat =
    fs.statSync(
      outputPath
    );

  if (
    stat.size < 1000
  ) {
    throw new Error(
      `Generated MP3 is unexpectedly small (${stat.size} bytes): ${outputPath}`
    );
  }

  const expectedFilename =
    path.basename(
      getOutputPath(
        exercise.exerciseIndex,
        voiceName
      )
    );

  if (
    path.basename(
      outputPath
    ) !==
    expectedFilename
  ) {
    throw new Error(
      `Generated filename mismatch. Expected ${expectedFilename}, got ${path.basename(outputPath)}.`
    );
  }

  return {
    filename:
      expectedFilename,
    fileSizeBytes:
      stat.size,
  };
}

function countMp3Files() {
  if (
    !fs.existsSync(
      OUTPUT_DIR
    )
  ) {
    return 0;
  }

  return fs
    .readdirSync(
      OUTPUT_DIR
    )
    .filter(
      (filename) =>
        filename
          .toLowerCase()
          .endsWith(".mp3")
    ).length;
}

function validateVoiceRotation(
  exercises
) {
  const expectedVoices =
    exercises.map(
      (exercise) =>
        getVoiceForExercise(
          exercise.exerciseIndex
        )
    );

  for (
    let i = 1;
    i < expectedVoices.length;
    i += 1
  ) {
    if (
      expectedVoices[i] ===
      expectedVoices[i - 1]
    ) {
      fail(
        `Voice rotation error: Exercise ${i} and Exercise ${i + 1} would both use ${expectedVoices[i]}.`
      );
    }
  }
}

function validateSpeakingRates(
  exercises
) {
  for (
    const exercise of exercises
  ) {
    const rate =
      getSpeakingRate(
        exercise.exerciseIndex
      );

    if (
      !Number.isFinite(rate) ||
      rate <= 0
    ) {
      fail(
        `Exercise ${exercise.exerciseIndex} has invalid speaking rate: ${rate}.`
      );
    }
  }
}

function createExerciseManifest(
  exercises
) {
  return exercises.map(
    (exercise) => ({
      exerciseIndex:
        exercise.exerciseIndex,

      voice:
        getVoiceForExercise(
          exercise.exerciseIndex
        ),

      speakingRate:
        getSpeakingRate(
          exercise.exerciseIndex
        ),

      exerciseSpecificSpeakingRate:
        EXERCISE_SPEAKING_RATES[
          exercise.exerciseIndex
        ] !== undefined,

      promptText:
        exercise.promptText,

      studentTranscript:
        exercise.studentTranscript,

      normalizedStudentTranscriptForTts:
        normalizeStudentTranscriptForTts(
          exercise.studentTranscript
        ),

      ttsPromptMode:
        exercise.exerciseIndex ===
        54
          ? "none"
          : EXERCISE_TTS_PROMPTS[
                exercise.exerciseIndex
            ]
            ? "exercise-specific"
            : "default",
    })
  );
}

function writeExerciseManifest(
  exercises
) {
  const manifestPath =
    path.join(
      OUTPUT_DIR,
      "student-response-manifest.json"
    );

  const manifest = {
    generatedAt:
      new Date().toISOString(),

    sourceFile:
      CALIBRATION_FILE,

    outputDirectory:
      OUTPUT_DIR,

    projectId:
      PROJECT_ID,

    model:
      MODEL,

    languageCode:
      LANGUAGE_CODE,

    defaultSpeakingRate:
      DEFAULT_SPEAKING_RATE,

    exerciseSpeakingRates:
      EXERCISE_SPEAKING_RATES,

    voiceRotation:
      VOICES,

    exercises:
      createExerciseManifest(
        exercises
      ),
  };

  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      manifest,
      null,
      2
    ),
    "utf8"
  );

  return manifestPath;
}

function createTranscriptAudit(
  exercises
) {
  return exercises.map(
    (exercise) => ({
      exerciseIndex:
        exercise.exerciseIndex,

      speakingRate:
        getSpeakingRate(
          exercise.exerciseIndex
        ),

      promptAndStudentTranscriptIdentical:
        exercise.promptText.trim() ===
        exercise.studentTranscript.trim(),

      promptText:
        exercise.promptText,

      studentTranscript:
        exercise.studentTranscript,

      normalizedStudentTranscriptForTts:
        normalizeStudentTranscriptForTts(
          exercise.studentTranscript
        ),
    })
  );
}

function writeTranscriptAudit(
  exercises
) {
  const auditPath =
    path.join(
      OUTPUT_DIR,
      "student-response-audit.json"
    );

  const audit = {
    generatedAt:
      new Date().toISOString(),

    sourceFile:
      CALIBRATION_FILE,

    description:
      "Audit of Read Aloud promptText, studentTranscript, voice, speaking-rate values and TTS pause normalization used by the student-response audio generator.",

    exercises:
      createTranscriptAudit(
        exercises
      ),
  };

  fs.writeFileSync(
    auditPath,
    JSON.stringify(
      audit,
      null,
      2
    ),
    "utf8"
  );

  return auditPath;
}

function printSpeakingRateSummary(
  exercises
) {
  console.log(
    "Speaking-rate configuration:"
  );

  for (
    const exercise of exercises
  ) {
    const rate =
      getSpeakingRate(
        exercise.exerciseIndex
      );

    const marker =
      EXERCISE_SPEAKING_RATES[
        exercise.exerciseIndex
      ] !== undefined
        ? "  ← exercise-specific"
        : "";

    console.log(
      `  Exercise ${String(
        exercise.exerciseIndex
      ).padStart(
        3,
        "0"
      )}: ${rate}${marker}`
    );
  }

  console.log("");
}

function writeGenerationReport(
  report
) {
  const timestamp =
    new Date()
      .toISOString()
      .replace(
        /[:.]/g,
        "-"
      );

  const reportPath =
    path.join(
      OUTPUT_DIR,
      `generation-report-${timestamp}.json`
    );

  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      report,
      null,
      2
    ),
    "utf8"
  );

  return reportPath;
}

async function generateExerciseAudio({
  accessToken,
  exercise,
}) {
  const exerciseIndex =
    exercise.exerciseIndex;

  const voiceName =
    getVoiceForExercise(
      exerciseIndex
    );

  const speakingRate =
    getSpeakingRate(
      exerciseIndex
    );

  const studentText =
    normalizeStudentTranscriptForTts(
      exercise.studentTranscript
    );

  const outputPath =
    getOutputPath(
      exerciseIndex,
      voiceName
    );

  console.log(
    `\nExercise ${String(
      exerciseIndex
    ).padStart(
      3,
      "0"
    )} → ${voiceName}`
  );

  console.log(
    `  Speaking rate: ${speakingRate}${
      EXERCISE_SPEAKING_RATES[
        exerciseIndex
      ] !== undefined
        ? " (exercise-specific)"
        : ""
    }`
  );

  console.log(
    `  Student response: "${studentText}"`
  );

  console.log(
    `  Output: ${path.basename(
      outputPath
    )}`
  );

  if (
    fs.existsSync(
      outputPath
    ) &&
    !force
  ) {
    console.log(
      "  SKIP — file already exists. Use --force to regenerate."
    );

    return {
      exerciseIndex,
      voiceName,
      speakingRate,
      status: "skipped",
      outputPath,
      filename:
        path.basename(
          outputPath
        ),
    };
  }

  if (
    fs.existsSync(
      outputPath
    ) &&
    force
  ) {
    console.log(
      "  FORCE — replacing existing file."
    );
  }

  const audioBuffer =
    await synthesizeSpeech({
      accessToken,
      text: studentText,
      voiceName,
      speakingRate,
      exerciseIndex,
    });

  fs.writeFileSync(
    outputPath,
    audioBuffer
  );

  const validation =
    validateGeneratedFile({
      outputPath,
      exercise,
      voiceName,
    });

  console.log(
    `  OK — ${(
      validation.fileSizeBytes /
      1024
    ).toFixed(
      1
    )} KB`
  );

  return {
    exerciseIndex,
    voiceName,
    speakingRate,
    status: "generated",
    outputPath,
    filename:
      validation.filename,
    fileSizeBytes:
      validation.fileSizeBytes,
  };
}

async function main() {
  console.log("");
  console.log(
    "============================================================"
  );
  console.log(
    "Read Aloud Student-Response Audio Generator"
  );
  console.log(
    "============================================================"
  );
  console.log("");

  console.log(
    `Calibration source: ${CALIBRATION_FILE}`
  );

  console.log(
    `Output directory: ${OUTPUT_DIR}`
  );

  console.log(
    `Google Cloud project: ${PROJECT_ID}`
  );

  console.log(
    `Gemini TTS model: ${MODEL}`
  );

  console.log(
    `Language: ${LANGUAGE_CODE}`
  );

  console.log(
    `Default speaking rate: ${DEFAULT_SPEAKING_RATE}`
  );

  console.log(
    `Requested range: ${startExercise}-${endExercise}`
  );

  console.log(
    `Force regeneration: ${force ? "YES" : "NO"}`
  );

  console.log("");

  if (
    !fs.existsSync(
      CALIBRATION_FILE
    )
  ) {
    fail(
      `Calibration file not found: ${CALIBRATION_FILE}`
    );
  }

  const source =
    fs.readFileSync(
      CALIBRATION_FILE,
      "utf8"
    );

  const exercises =
    extractReadAloudExercises(
      source
    );

  console.log(
    `Read Aloud exercises found: ${exercises.length}`
  );

  validateExercises(
    exercises
  );

  validateVoiceRotation(
    exercises
  );

  validateSpeakingRates(
    exercises
  );

  console.log(
    `Validated exercises 1-${EXPECTED_EXERCISE_COUNT}.`
  );

  const selectedExercises =
    exercises.filter(
      (exercise) =>
        exercise.exerciseIndex >=
          startExercise &&
        exercise.exerciseIndex <=
          endExercise
    );

  console.log(
    `Generating exercises ${startExercise}-${endExercise}.`
  );

  console.log("");

  printSpeakingRateSummary(
    selectedExercises
  );

  ensureOutputDirectory();

  /*
   * Write these before generation so the exact source data and
   * speaking-rate configuration used for this run are preserved.
   */
  const manifestPath =
    writeExerciseManifest(
      exercises
    );

  const auditPath =
    writeTranscriptAudit(
      exercises
    );

  console.log(
    `Exercise manifest: ${manifestPath}`
  );

  console.log(
    `Transcript audit: ${auditPath}`
  );

  console.log("");

  const accessToken =
    getAccessToken();

  console.log(
    "Google ADC access token obtained."
  );

  console.log("");

  const results = [];

  for (
    let i = 0;
    i <
    selectedExercises.length;
    i += 1
  ) {
    const exercise =
      selectedExercises[i];

    try {
      const result =
        await generateExerciseAudio({
          accessToken,
          exercise,
        });

      results.push(
        result
      );
    } catch (error) {
      console.error("");

      console.error(
        `  FAILED — Exercise ${String(
          exercise.exerciseIndex
        ).padStart(
          3,
          "0"
        )}`
      );

      console.error(
        `  ${error?.message || error}`
      );

      results.push({
        exerciseIndex:
          exercise.exerciseIndex,
        voiceName:
          getVoiceForExercise(
            exercise.exerciseIndex
          ),
        speakingRate:
          getSpeakingRate(
            exercise.exerciseIndex
          ),
        status: "failed",
        error:
          error?.message ||
          String(error),
      });
    }

    /*
     * Keep a short delay between requests to reduce the likelihood
     * of rate-limit responses from the TTS API.
     *
     * The delay is skipped after the final requested exercise.
     */
    if (
      i <
      selectedExercises.length - 1
    ) {
      await sleep(3000);
    }
  }

  console.log("");
  console.log(
    "============================================================"
  );
  console.log(
    "Generation Summary"
  );
  console.log(
    "============================================================"
  );

  const generatedCount =
    results.filter(
      (result) =>
        result.status ===
        "generated"
    ).length;

  const skippedCount =
    results.filter(
      (result) =>
        result.status ===
        "skipped"
    ).length;

  const failedCount =
    results.filter(
      (result) =>
        result.status ===
        "failed"
    ).length;

  console.log(
    `Requested: ${selectedExercises.length}`
  );

  console.log(
    `Generated: ${generatedCount}`
  );

  console.log(
    `Skipped:   ${skippedCount}`
  );

  console.log(
    `Failed:    ${failedCount}`
  );

  console.log(
    `MP3 files currently present: ${countMp3Files()}`
  );

  console.log("");

  /*
   * Save a run-specific report without replacing the authoritative
   * exercise manifest or transcript audit.
   */
  const report = {
    generatedAt:
      new Date().toISOString(),

    sourceFile:
      CALIBRATION_FILE,

    outputDirectory:
      OUTPUT_DIR,

    projectId:
      PROJECT_ID,

    model:
      MODEL,

    languageCode:
      LANGUAGE_CODE,

    defaultSpeakingRate:
      DEFAULT_SPEAKING_RATE,

    exerciseSpeakingRates:
      EXERCISE_SPEAKING_RATES,

    voiceRotation:
      VOICES,

    requestedRange: {
      start:
        startExercise,
      end:
        endExercise,
    },

    force,

    requestedCount:
      selectedExercises.length,

    generatedCount,

    skippedCount,

    failedCount,

    results:
      results.map(
        (result) => ({
          ...result,
          outputPath:
            result.outputPath
              ? path.relative(
                  process.cwd(),
                  result.outputPath
                )
              : undefined,
        })
      ),
  };

  const reportPath =
    writeGenerationReport(
      report
    );

  console.log(
    `Generation report: ${reportPath}`
  );

  console.log("");

  if (
    failedCount > 0
  ) {
    console.error(
      "GENERATION COMPLETED WITH FAILURES."
    );

    process.exitCode = 1;

    return;
  }

  console.log(
    "Generation completed successfully."
  );
}

main().catch(
  (error) => {
    console.error("");
    console.error(
      "============================================================"
    );
    console.error(
      "GENERATION STOPPED"
    );
    console.error(
      "============================================================"
    );
    console.error("");
    console.error(
      error?.message ||
        error
    );

    process.exitCode = 1;
  }
);