import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

// ============================================================
// Repeat Sentence Prompt Audio TTS — Production V1
// ============================================================
//
// PURPOSE
// -------
// Generate the authentic Repeat Sentence PROMPT audio set.
//
// IMPORTANT
// ---------
//
// This generator is deliberately based on the proven
// GenerateRepeatSentenceAudio.mjs implementation.
//
// It:
//
//   - Reads the real calibration file
//   - Validates all 100 calibration exercises
//   - Uses the real promptText for each exercise
//   - Uses the approved six-voice rotation
//   - Uses the validated exact-text TTS instruction
//   - Writes actual MP3 files directly from Google Cloud TTS
//   - Uses a separate prompts-v1 folder
//   - Never modifies repeatSentenceCalibration.ts
//   - Supports targeted generation with --start / --end
//   - Supports deliberate replacement with --force
//
// IMPORTANT
// ---------
//
// These files are PROMPT recordings.
//
// They are NOT student-response recordings.
//
// Student-response recordings remain in:
//
//   generated-audio/repeat-sentence/student-responses-v2
//
// Prompt recordings are generated into:
//
//   generated-audio/repeat-sentence/prompts-v1
//
// Examples:
//
//   Generate Exercise 2:
//
//   node scripts/generateRepeatSentencePromptAudio.mjs --start 2 --end 2 --force
//
//   Generate Exercises 1–100:
//
//   node scripts/generateRepeatSentencePromptAudio.mjs --start 1 --end 100 --force
//
// Without --force:
//
//   Existing MP3 files are skipped.
//
// With --force:
//
//   Only the selected exercise range may be overwritten.
//
// ============================================================


// ============================================================
// Google Cloud / Gemini TTS configuration
// ============================================================

const PROJECT_ID = "gen-lang-client-0294792757";

const MODEL = "gemini-2.5-flash-tts";

const LANGUAGE_CODE = "en-US";

const SPEAKING_RATE = 1.0;


// ============================================================
// Calibration file
// ============================================================

const CALIBRATION_FILE = path.resolve(
  "src/masterTeacher/constants/calibration/repeatSentenceCalibration.ts"
);


// ============================================================
// Prompt audio output folder
// ============================================================
//
// IMPORTANT:
// This is deliberately different from the student-response
// folder.
//
// Student responses:
//   generated-audio/repeat-sentence/student-responses-v2
//
// Prompt recordings:
//   generated-audio/repeat-sentence/prompts-v1
//
// ============================================================

const OUTPUT_DIR = path.resolve(
  "generated-audio/repeat-sentence/prompts-v1"
);


// ============================================================
// Expected calibration exercise count
// ============================================================

const EXPECTED_EXERCISE_COUNT = 100;


// ============================================================
// Approved voice rotation
// ============================================================
//
// 1. Achernar
// 2. Orus
// 3. Leda
// 4. Puck
// 5. Sulafat
// 6. Iapetus
//
// Then repeat.
//
// This produces:
//
// Exercise 1  → Achernar
// Exercise 2  → Orus
// Exercise 3  → Leda
// Exercise 4  → Puck
// Exercise 5  → Sulafat
// Exercise 6  → Iapetus
// Exercise 7  → Achernar
// ...
//
// ============================================================

const VOICES = [
  "Achernar",
  "Orus",
  "Leda",
  "Puck",
  "Sulafat",
  "Iapetus",
];


// ============================================================
// VALIDATED TTS INSTRUCTION
// ============================================================
//
// This is the same instruction used by the already-working
// student-response generator.
//
// Do NOT replace this with a longer generative instruction.
// The previous Vertex AI approach produced unwanted speech
// before the sentence.
//
// ============================================================

const TTS_PROMPT =
  "Say the following exactly as written. Do not add, remove, repeat, paraphrase, or change any words. Use a natural conversational speaking style.";


// ============================================================
// Request throttling / retry configuration
// ============================================================

const REQUEST_DELAY_MS = 3000;

const MAX_429_RETRIES = 5;

const INITIAL_429_RETRY_DELAY_MS = 15000;


// ============================================================
// Proven Google Cloud Text-to-Speech endpoint
// ============================================================
//
// This is the endpoint used successfully by the existing
// GenerateRepeatSentenceAudio.mjs.
//
// ============================================================

const TTS_ENDPOINT =
  "https://texttospeech.googleapis.com/v1/text:synthesize";


// ============================================================
// Command-line arguments
// ============================================================

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


const startExercise = requestedStart
  ? Number.parseInt(requestedStart, 10)
  : 1;


const endExercise = requestedEnd
  ? Number.parseInt(requestedEnd, 10)
  : EXPECTED_EXERCISE_COUNT;


const force = hasFlag("--force");


// ============================================================
// Validate requested range
// ============================================================

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


// ============================================================
// Utility functions
// ============================================================

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function ensureDirectory(directory) {
  fs.mkdirSync(directory, {
    recursive: true,
  });
}


// ============================================================
// Google Cloud authentication
// ============================================================
//
// This deliberately mirrors the already-working generator.
//
// It uses:
//
//   gcloud auth application-default print-access-token
//
// rather than introducing a new authentication mechanism.
//
// ============================================================

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

    console.error(
      "Error code:",
      error?.code
    );

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


// ============================================================
// Calibration extraction
// ============================================================

function extractAllExercises(source) {
  const matches = [
    ...source.matchAll(
      /exerciseIndex\s*:\s*(\d+)[\s\S]*?(?=\n\s*exerciseIndex\s*:|\n\s*\]\s*as\s+const\s*;)/g
    ),
  ];

  const exercises = [];


  for (const match of matches) {
    const exerciseIndex = Number(match[1]);

    const block = match[0];


    const studentTranscriptMatch = block.match(
      /studentTranscript\s*:\s*"((?:\\.|[^"\\])*)"/
    );


    const promptTextMatch = block.match(
      /promptText\s*:\s*"((?:\\.|[^"\\])*)"/
    );


    const sourceQuestionIdMatch = block.match(
      /sourceQuestionId\s*:\s*"([^"]+)"/
    );


    if (!promptTextMatch) {
      throw new Error(
        `Exercise ${exerciseIndex}: promptText was not found.`
      );
    }


    const decodeString = (value) => {
      if (value == null) {
        return "";
      }

      return value
        .replace(/\\"/g, '"')
        .replace(/\\\\/g, "\\");
    };


    exercises.push({
      exerciseIndex,

      promptText: decodeString(
        promptTextMatch[1]
      ),

      studentTranscript: decodeString(
        studentTranscriptMatch?.[1] ?? ""
      ),

      sourceQuestionId:
        sourceQuestionIdMatch?.[1] ?? "",
    });
  }


  return exercises.sort(
    (a, b) =>
      a.exerciseIndex - b.exerciseIndex
  );
}


// ============================================================
// Full calibration validation
// ============================================================

function validateExercises(exercises) {
  if (
    exercises.length !==
    EXPECTED_EXERCISE_COUNT
  ) {
    throw new Error(
      `Expected exactly ${EXPECTED_EXERCISE_COUNT} calibration exercises, but extracted ${exercises.length}. No audio will be generated.`
    );
  }


  for (
    let index = 0;
    index < exercises.length;
    index += 1
  ) {
    const expectedIndex = index + 1;

    const actualIndex =
      exercises[index].exerciseIndex;


    if (
      actualIndex !==
      expectedIndex
    ) {
      throw new Error(
        `Exercise numbering error: expected Exercise ${expectedIndex}, found Exercise ${actualIndex}. No audio will be generated.`
      );
    }


    if (
      !exercises[index].promptText ||
      !exercises[index].promptText.trim()
    ) {
      throw new Error(
        `Exercise ${expectedIndex} has an empty promptText. No audio will be generated.`
      );
    }
  }
}


// ============================================================
// Voice rotation
// ============================================================

function getVoiceForExercise(exerciseIndex) {
  const zeroBasedIndex =
    exerciseIndex - 1;

  return VOICES[
    zeroBasedIndex % VOICES.length
  ];
}


// ============================================================
// Gemini / Google Cloud TTS
// ============================================================
//
// This function intentionally mirrors the working
// GenerateRepeatSentenceAudio.mjs implementation.
//
// The ONLY important content difference is that the caller
// will pass exercise.promptText.
//
// ============================================================

async function synthesizeSpeech({
  accessToken,
  text,
  voice,
  exerciseIndex,
}) {
  const requestBody = {
    input: {
      prompt: TTS_PROMPT,
      text,
    },

    voice: {
      languageCode:
        LANGUAGE_CODE,

      name:
        voice,

      model_name:
        MODEL,
    },

    audioConfig: {
      audioEncoding:
        "MP3",

      speakingRate:
        SPEAKING_RATE,
    },
  };


  let retryCount = 0;


  while (true) {
    const response = await fetch(
      TTS_ENDPOINT,
      {
        method: "POST",

        headers: {
          Authorization:
            `Bearer ${accessToken}`,

          "Content-Type":
            "application/json",

          "x-goog-user-project":
            PROJECT_ID,
        },

        body:
          JSON.stringify(requestBody),
      }
    );


    const responseText =
      await response.text();


    if (response.ok) {
      let data;


      try {
        data =
          JSON.parse(responseText);
      } catch {
        throw new Error(
          `Exercise ${exerciseIndex}: Google returned invalid JSON.`
        );
      }


      if (!data.audioContent) {
        throw new Error(
          `Exercise ${exerciseIndex}: Google response contained no audioContent.`
        );
      }


      return Buffer.from(
        data.audioContent,
        "base64"
      );
    }


    // ========================================================
    // Automatic 429 quota retry
    // ========================================================

    if (
      response.status === 429 &&
      retryCount <
        MAX_429_RETRIES
    ) {
      const retryDelay =
        INITIAL_429_RETRY_DELAY_MS *
        Math.pow(
          2,
          retryCount
        );


      retryCount += 1;


      console.log(
        `  429 quota response — retry ${retryCount}/${MAX_429_RETRIES} in ${Math.round(
          retryDelay / 1000
        )} seconds...`
      );


      await sleep(
        retryDelay
      );


      continue;
    }


    throw new Error(
      `Exercise ${exerciseIndex}: TTS request failed with HTTP ${response.status}: ${responseText}`
    );
  }
}


// ============================================================
// Main
// ============================================================

async function main() {
  console.log("");

  console.log(
    "============================================================"
  );

  console.log(
    " Repeat Sentence Prompt Audio TTS — Production V1"
  );

  console.log(
    "============================================================"
  );

  console.log("");


  console.log(
    `Calibration file: ${CALIBRATION_FILE}`
  );


  console.log(
    `Output folder:    ${OUTPUT_DIR}`
  );


  console.log(
    `Model:            ${MODEL}`
  );


  console.log(
    `Language:         ${LANGUAGE_CODE}`
  );


  console.log(
    `Speaking rate:    ${SPEAKING_RATE}`
  );


  console.log("");


  console.log(
    `Requested range:  ${startExercise}–${endExercise}`
  );


  console.log(
    `Force regeneration: ${force ? "YES" : "NO"}`
  );


  console.log("");


  console.log(
    "Voice rotation:"
  );


  VOICES.forEach(
    (voice, index) => {
      console.log(
        `  ${index + 1}. ${voice}`
      );
    }
  );


  console.log("");


  console.log(
    "TTS instruction:"
  );


  console.log(
    `  ${TTS_PROMPT}`
  );


  console.log("");


  // ==========================================================
  // Validate calibration file
  // ==========================================================

  if (
    !fs.existsSync(
      CALIBRATION_FILE
    )
  ) {
    throw new Error(
      `Calibration file does not exist:\n${CALIBRATION_FILE}`
    );
  }


  const source =
    fs.readFileSync(
      CALIBRATION_FILE,
      "utf8"
    );


  const exercises =
    extractAllExercises(
      source
    );


  console.log(
    `Exercises found: ${exercises.length}`
  );


  validateExercises(
    exercises
  );


  console.log(
    "Exercise numbering verified: 1–100."
  );


  console.log("");

  console.log(
    "Prompt text verified for all 100 exercises."
  );


  console.log("");


  // ==========================================================
  // Select requested exercises
  // ==========================================================

  const selectedExercises =
    exercises.filter(
      (exercise) =>
        exercise.exerciseIndex >=
          startExercise &&
        exercise.exerciseIndex <=
          endExercise
    );


  if (
    selectedExercises.length === 0
  ) {
    throw new Error(
      `No exercises found in requested range ${startExercise}–${endExercise}.`
    );
  }


  console.log(
    `Selected exercises: ${selectedExercises
      .map(
        (exercise) =>
          exercise.exerciseIndex
      )
      .join(", ")}`
  );


  console.log("");


  // ==========================================================
  // Show selected voice mapping
  // ==========================================================

  console.log(
    "============================================================"
  );

  console.log(
    " Selected voice mapping"
  );

  console.log(
    "============================================================"
  );

  console.log("");


  for (
    const exercise of selectedExercises
  ) {
    const voice =
      getVoiceForExercise(
        exercise.exerciseIndex
      );


    console.log(
      `Exercise ${String(
        exercise.exerciseIndex
      ).padStart(3, "0")} → ${voice}`
    );
  }


  console.log("");


  // ==========================================================
  // Create output directory
  // ==========================================================

  ensureDirectory(
    OUTPUT_DIR
  );


  // ==========================================================
  // Authentication
  // ==========================================================

  console.log(
    "Obtaining Google Cloud ADC access token..."
  );


  const accessToken =
    getAccessToken();


  if (!accessToken) {
    throw new Error(
      "Google Cloud returned an empty ADC access token."
    );
  }


  console.log(
    "ADC access token obtained."
  );


  console.log("");


  // ==========================================================
  // Generation
  // ==========================================================

  const report = [];


  let generated = 0;

  let skipped = 0;

  let failed = 0;


  for (
    let index = 0;
    index < selectedExercises.length;
    index += 1
  ) {
    const exercise =
      selectedExercises[index];


    const voice =
      getVoiceForExercise(
        exercise.exerciseIndex
      );


    const filename =
      `exercise-${String(
        exercise.exerciseIndex
      ).padStart(
        3,
        "0"
      )}-prompt-${voice.toLowerCase()}.mp3`;


    const outputPath =
      path.join(
        OUTPUT_DIR,
        filename
      );


    console.log(
      `[${index + 1}/${selectedExercises.length}] ${voice} — Exercise ${exercise.exerciseIndex}`
    );


    console.log(
      `  Prompt: ${exercise.promptText}`
    );


    console.log(
      `  Output: ${filename}`
    );


    // ========================================================
    // Existing file handling
    // ========================================================

    if (
      fs.existsSync(
        outputPath
      ) &&
      !force
    ) {
      console.log(
        "  SKIPPED — file already exists."
      );


      report.push({
        exerciseIndex:
          exercise.exerciseIndex,

        sourceQuestionId:
          exercise.sourceQuestionId,

        voice,

        promptText:
          exercise.promptText,

        outputFile:
          filename,

        status:
          "skipped-existing",

        sizeBytes:
          fs.statSync(
            outputPath
          ).size,
      });


      skipped += 1;


      console.log("");

      continue;
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


    // ========================================================
    // Generate authentic prompt audio
    // ========================================================

    try {
      const audioBuffer =
        await synthesizeSpeech({
          accessToken,

          // IMPORTANT:
          // Prompt audio must use promptText.
          // It must NOT use studentTranscript.
          text:
            exercise.promptText,

          voice,

          exerciseIndex:
            exercise.exerciseIndex,
        });


      fs.writeFileSync(
        outputPath,
        audioBuffer
      );


      const sizeKb =
        audioBuffer.length /
        1024;


      console.log(
        `  OK — ${sizeKb.toFixed(1)} KB`
      );


      report.push({
        exerciseIndex:
          exercise.exerciseIndex,

        sourceQuestionId:
          exercise.sourceQuestionId,

        voice,

        promptText:
          exercise.promptText,

        outputFile:
          filename,

        status:
          "generated",

        sizeBytes:
          audioBuffer.length,
      });


      generated += 1;
    } catch (error) {
      console.error(
        `  FAILED — ${error.message}`
      );


      report.push({
        exerciseIndex:
          exercise.exerciseIndex,

        sourceQuestionId:
          exercise.sourceQuestionId,

        voice,

        promptText:
          exercise.promptText,

        outputFile:
          filename,

        status:
          "failed",

        error:
          error.message,
      });


      failed += 1;
    }


    // ========================================================
    // Rate-limit protection
    // ========================================================

    if (
      index <
      selectedExercises.length - 1
    ) {
      console.log(
        `  Waiting ${REQUEST_DELAY_MS / 1000} seconds before next request...`
      );


      await sleep(
        REQUEST_DELAY_MS
      );
    }


    console.log("");
  }


  // ==========================================================
  // Write generation report
  // ==========================================================

  const reportPath =
    path.join(
      OUTPUT_DIR,
      "generation-report.json"
    );


  const reportPayload = {
    generatedAt:
      new Date().toISOString(),

    projectId:
      PROJECT_ID,

    model:
      MODEL,

    languageCode:
      LANGUAGE_CODE,

    speakingRate:
      SPEAKING_RATE,

    ttsPrompt:
      TTS_PROMPT,

    voiceRotation:
      VOICES,

    expectedExerciseCount:
      EXPECTED_EXERCISE_COUNT,

    requestedStart:
      startExercise,

    requestedEnd:
      endExercise,

    force,

    audioType:
      "repeat-sentence-prompt",

    selectedExercises:
      selectedExercises.map(
        (exercise) =>
          exercise.exerciseIndex
      ),

    generated,

    skipped,

    failed,

    exercises:
      report,
  };


  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      reportPayload,
      null,
      2
    ),
    "utf8"
  );


  // ==========================================================
  // Final validation
  // ==========================================================

  const finalMp3Files =
    fs
      .readdirSync(
        OUTPUT_DIR
      )
      .filter(
        (filename) =>
          filename
            .toLowerCase()
            .endsWith(".mp3")
      );


  const missingSelectedFiles =
    selectedExercises.filter(
      (exercise) => {
        const voice =
          getVoiceForExercise(
            exercise.exerciseIndex
          );


        const filename =
          `exercise-${String(
            exercise.exerciseIndex
          ).padStart(
            3,
            "0"
          )}-prompt-${voice.toLowerCase()}.mp3`;


        return !fs.existsSync(
          path.join(
            OUTPUT_DIR,
            filename
          )
        );
      }
    );


  console.log(
    "============================================================"
  );


  console.log(
    " Prompt V1 generation summary"
  );


  console.log(
    "============================================================"
  );


  console.log("");


  console.log(
    `Generated: ${generated}`
  );


  console.log(
    `Skipped:   ${skipped}`
  );


  console.log(
    `Failed:    ${failed}`
  );


  console.log(
    `MP3 files: ${finalMp3Files.length}`
  );


  console.log("");


  console.log(
    `Output: ${OUTPUT_DIR}`
  );


  console.log(
    `Report: ${reportPath}`
  );


  console.log("");


  // ==========================================================
  // Failure checks
  // ==========================================================

  if (
    failed > 0
  ) {
    throw new Error(
      "Prompt V1 generation completed with failures. Do not integrate the audio yet."
    );
  }


  if (
    missingSelectedFiles.length > 0
  ) {
    throw new Error(
      `Selected exercise validation failed. Missing MP3 files for: ${missingSelectedFiles
        .map(
          (exercise) =>
            exercise.exerciseIndex
        )
        .join(", ")}`
    );
  }


  // ==========================================================
  // IMPORTANT TARGETED-GENERATION RULE
  // ==========================================================
  //
  // Do NOT require 100 files when we are deliberately testing
  // only one exercise.
  //
  // A targeted generation is successful when all selected
  // exercises have successfully generated/verified files.
  //
  // A full 1–100 generation additionally requires exactly
  // 100 MP3 files.
  //
  // ==========================================================

  const isFullGeneration =
    startExercise === 1 &&
    endExercise ===
      EXPECTED_EXERCISE_COUNT;


  if (
    isFullGeneration &&
    finalMp3Files.length !==
      EXPECTED_EXERCISE_COUNT
  ) {
    throw new Error(
      `Prompt V1 validation failed: expected ${EXPECTED_EXERCISE_COUNT} MP3 files, found ${finalMp3Files.length}. Do not integrate the audio yet.`
    );
  }


  // ==========================================================
  // Success message
  // ==========================================================

  console.log(
    "Prompt V1 generation completed successfully."
  );


  if (isFullGeneration) {
    console.log(
      `100 MP3 files verified. Exercises ${startExercise}–${endExercise} are present.`
    );
  } else {
    console.log(
      `Selected exercises ${startExercise}–${endExercise} are present and validated.`
    );
  }


  console.log("");
}


// ============================================================
// Start
// ============================================================

main().catch(
  (error) => {
    console.error("");

    console.error(
      "GENERATION STOPPED"
    );

    console.error(
      error.message
    );

    console.error("");

    process.exit(1);
  }
);