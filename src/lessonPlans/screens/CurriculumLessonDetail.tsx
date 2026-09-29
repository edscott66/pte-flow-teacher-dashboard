import React, { useEffect, useState } from "react";
import type { CurriculumLesson } from "../data/lessonPlanAdapter";
import "./CurriculumLessonDetail.css";

interface CurriculumLessonDetailProps {
  curriculumLesson: CurriculumLesson;
  onBack: () => void;
}

interface LocalFileHandle {
  kind: "file";
  name: string;
  getFile(): Promise<File>;
  createWritable?: () => Promise<{
    write(data: string): Promise<void>;
    close(): Promise<void>;
  }>;
}

interface LocalDirectoryHandle {
  kind: "directory";
  name: string;
  values(): AsyncIterableIterator<LocalFileHandle>;
  getFileHandle(
    name: string,
    options?: { create?: boolean },
  ): Promise<LocalFileHandle>;
  removeEntry?(name: string): Promise<void>;
  queryPermission?(options?: {
    mode?: "read" | "readwrite";
  }): Promise<"granted" | "denied" | "prompt">;
  requestPermission?(options?: {
    mode?: "read" | "readwrite";
  }): Promise<"granted" | "denied" | "prompt">;
}

interface FilePickerWindow extends Window {
  showDirectoryPicker?: (options?: {
    mode?: "read" | "readwrite";
  }) => Promise<LocalDirectoryHandle>;
}

interface TeacherNote {
  id: string;
  fileName: string;
  date: Date;
  text: string;
  fileHandle: LocalFileHandle;
}

const NOTES_DATABASE_NAME = "pte-flow-teacher-notes";
const NOTES_DATABASE_VERSION = 1;
const NOTES_OBJECT_STORE = "settings";
const NOTES_DIRECTORY_KEY = "lesson-notes-directory";

const sectionLabels: Record<string, string> = {
  SPEAKING: "Speaking",
  WRITING: "Writing",
  READING: "Reading",
  LISTENING: "Listening",
  INTEGRATED: "Integrated",
};

const sectionIcons: Record<string, string> = {
  SPEAKING: "🎙️",
  WRITING: "✍️",
  READING: "📖",
  LISTENING: "🎧",
  INTEGRATED: "🔗",
};

const difficultyLabels: Record<string, string> = {
  FOUNDATIONAL: "Foundational",
  INTERMEDIATE: "Intermediate",
  ADVANCED: "Advanced",
  "EXAM SIMULATION": "Exam Simulation",
};

function openNotesDatabase(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(
      NOTES_DATABASE_NAME,
      NOTES_DATABASE_VERSION,
    );

    request.onupgradeneeded = () => {
      const database = request.result;

      if (!database.objectStoreNames.contains(NOTES_OBJECT_STORE)) {
        database.createObjectStore(NOTES_OBJECT_STORE);
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeNotesDirectory(
  directoryHandle: LocalDirectoryHandle,
): Promise<void> {
  try {
    const database = await openNotesDatabase();

    await new Promise<void>((resolve, reject) => {
      const transaction = database.transaction(
        NOTES_OBJECT_STORE,
        "readwrite",
      );
      const store = transaction.objectStore(NOTES_OBJECT_STORE);

      store.put(directoryHandle, NOTES_DIRECTORY_KEY);

      transaction.oncomplete = () => resolve();
      transaction.onerror = () => reject(transaction.error);
    });

    database.close();
  } catch {
    // The application can still use the selected folder for the current session.
  }
}

async function getStoredNotesDirectory(): Promise<
  LocalDirectoryHandle | undefined
> {
  try {
    const database = await openNotesDatabase();

    const directoryHandle = await new Promise<
      LocalDirectoryHandle | undefined
    >((resolve, reject) => {
      const transaction = database.transaction(
        NOTES_OBJECT_STORE,
        "readonly",
      );
      const store = transaction.objectStore(NOTES_OBJECT_STORE);
      const request = store.get(NOTES_DIRECTORY_KEY);

      request.onsuccess = () =>
        resolve(request.result as LocalDirectoryHandle | undefined);
      request.onerror = () => reject(request.error);
    });

    database.close();

    return directoryHandle;
  } catch {
    return undefined;
  }
}

async function ensureDirectoryPermission(
  directoryHandle: LocalDirectoryHandle,
): Promise<boolean> {
  try {
    if (directoryHandle.queryPermission) {
      const currentPermission = await directoryHandle.queryPermission({
        mode: "readwrite",
      });

      if (currentPermission === "granted") {
        return true;
      }
    }

    if (directoryHandle.requestPermission) {
      const requestedPermission = await directoryHandle.requestPermission({
        mode: "readwrite",
      });

      return requestedPermission === "granted";
    }

    return true;
  } catch {
    return false;
  }
}

function sanitizeFileName(value: string): string {
  return value
    .replace(/[<>:"/\\|?*\x00-\x1F]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[. ]+$/g, "");
}

function createNoteFileName(
  curriculumLesson: CurriculumLesson,
  date: Date,
): string {
  const lessonTitle = sanitizeFileName(curriculumLesson.lesson.title);
  const timestamp = date.toISOString().replace(/[:.]/g, "-");

  return `${curriculumLesson.id}__${lessonTitle}__${timestamp}.txt`;
}

function parseNoteDate(fileName: string): Date {
  const match = fileName.match(
    /__(\d{4}-\d{2}-\d{2}T\d{2}-\d{2}-\d{2}-\d{3}Z)\.txt$/,
  );

  if (!match) {
    return new Date();
  }

  const isoTimestamp = match[1].replace(
    /T(\d{2})-(\d{2})-(\d{2})-(\d{3})Z$/,
    "T$1:$2:$3.$4Z",
  );

  const parsedDate = new Date(isoTimestamp);

  return Number.isNaN(parsedDate.getTime()) ? new Date() : parsedDate;
}

function formatNoteDate(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatNoteDateTime(date: Date): string {
  return new Intl.DateTimeFormat(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default function CurriculumLessonDetail({
  curriculumLesson,
  onBack,
}: CurriculumLessonDetailProps) {
  const { lesson } = curriculumLesson;

  const [teacherNotes, setTeacherNotes] = useState("");
  const [savedNotes, setSavedNotes] = useState<TeacherNote[]>([]);
  const [selectedNote, setSelectedNote] = useState<TeacherNote | null>(null);
  const [notesDirectory, setNotesDirectory] =
    useState<LocalDirectoryHandle | null>(null);
  const [notesFolderName, setNotesFolderName] = useState("");
  const [notesStatus, setNotesStatus] = useState("");
  const [notesError, setNotesError] = useState("");
  const [deletionToast, setDeletionToast] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] =
    useState(false);

  const sectionLabel = sectionLabels[lesson.section] ?? lesson.section;
  const sectionIcon = sectionIcons[lesson.section] ?? "📚";

  const loadSavedNotes = async (
    directoryHandle: LocalDirectoryHandle,
  ): Promise<void> => {
    const hasPermission = await ensureDirectoryPermission(directoryHandle);

    if (!hasPermission) {
      setNotesError(
        "Permission to access the selected notes folder was not granted.",
      );
      return;
    }

    try {
      const notes: TeacherNote[] = [];

      for await (const fileHandle of directoryHandle.values()) {
        if (fileHandle.kind !== "file" || !fileHandle.name.endsWith(".txt")) {
          continue;
        }

        if (!fileHandle.name.startsWith(`${curriculumLesson.id}__`)) {
          continue;
        }

        const file = await fileHandle.getFile();
        const text = await file.text();

        notes.push({
          id: fileHandle.name,
          fileName: fileHandle.name,
          date: parseNoteDate(fileHandle.name),
          text,
          fileHandle,
        });
      }

      notes.sort((a, b) => b.date.getTime() - a.date.getTime());

      setSavedNotes(notes);

      if (
        selectedNote &&
        !notes.some((note) => note.id === selectedNote.id)
      ) {
        setSelectedNote(null);
      }
    } catch {
      setNotesError(
        "The selected notes folder could not be read. Please choose it again.",
      );
    }
  };

  useEffect(() => {
    let cancelled = false;

    const restoreNotesDirectory = async () => {
      const storedDirectory = await getStoredNotesDirectory();

      if (cancelled || !storedDirectory) {
        return;
      }

      setNotesDirectory(storedDirectory);
      setNotesFolderName(storedDirectory.name);

      try {
        const permission = storedDirectory.queryPermission
          ? await storedDirectory.queryPermission({ mode: "readwrite" })
          : "granted";

        if (!cancelled && permission === "granted") {
          await loadSavedNotes(storedDirectory);
        }
      } catch {
        // The teacher can choose the folder again if permission is unavailable.
      }
    };

    restoreNotesDirectory();

    return () => {
      cancelled = true;
    };
  }, [curriculumLesson.id]);

  useEffect(() => {
    setTeacherNotes("");
    setSavedNotes([]);
    setSelectedNote(null);
    setNotesStatus("");
    setNotesError("");
    setDeletionToast("");
    setShowDeleteConfirmation(false);

    if (notesDirectory) {
      void loadSavedNotes(notesDirectory);
    }
  }, [curriculumLesson.id]);

  const handleChooseNotesFolder = async () => {
    const filePickerWindow = window as FilePickerWindow;

    if (!filePickerWindow.showDirectoryPicker) {
      setNotesError(
        "Local folder saving is not available in this browser. Please use a recent version of Microsoft Edge or another browser that supports folder access.",
      );
      return;
    }

    setNotesError("");
    setNotesStatus("");

    try {
      const selectedDirectory =
        await filePickerWindow.showDirectoryPicker({
          mode: "readwrite",
        });

      const hasPermission = await ensureDirectoryPermission(
        selectedDirectory,
      );

      if (!hasPermission) {
        setNotesError(
          "Permission to save notes in the selected folder was not granted.",
        );
        return;
      }

      setNotesDirectory(selectedDirectory);
      setNotesFolderName(selectedDirectory.name);

      await storeNotesDirectory(selectedDirectory);
      await loadSavedNotes(selectedDirectory);

      setNotesStatus("Notes folder selected.");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setNotesError(
        "The notes folder could not be selected. Please try again.",
      );
    }
  };

  const handleSaveNote = async () => {
    if (!teacherNotes.trim()) {
      setNotesError("Please enter a note before saving.");
      return;
    }

    setNotesError("");
    setNotesStatus("");

    let directoryHandle = notesDirectory;

    if (!directoryHandle) {
      const filePickerWindow = window as FilePickerWindow;

      if (!filePickerWindow.showDirectoryPicker) {
        setNotesError(
          "Local folder saving is not available in this browser. Please use a recent version of Microsoft Edge or another browser that supports folder access.",
        );
        return;
      }

      try {
        directoryHandle = await filePickerWindow.showDirectoryPicker({
          mode: "readwrite",
        });

        const hasPermission = await ensureDirectoryPermission(
          directoryHandle,
        );

        if (!hasPermission) {
          setNotesError(
            "Permission to save notes in the selected folder was not granted.",
          );
          return;
        }

        setNotesDirectory(directoryHandle);
        setNotesFolderName(directoryHandle.name);
        await storeNotesDirectory(directoryHandle);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        setNotesError(
          "The notes folder could not be selected. Please try again.",
        );
        return;
      }
    }

    const hasPermission = await ensureDirectoryPermission(directoryHandle);

    if (!hasPermission) {
      setNotesError(
        "Permission to access the notes folder was not granted.",
      );
      return;
    }

    try {
      const createdAt = new Date();
      const fileName = createNoteFileName(
        curriculumLesson,
        createdAt,
      );

      const fileHandle = await directoryHandle.getFileHandle(fileName, {
        create: true,
      });

      if (!fileHandle.createWritable) {
        setNotesError(
          "This browser does not currently support writing lesson notes to local files.",
        );
        return;
      }

      const writable = await fileHandle.createWritable();

      await writable.write(teacherNotes.trim());
      await writable.close();

      const newNote: TeacherNote = {
        id: fileName,
        fileName,
        date: createdAt,
        text: teacherNotes.trim(),
        fileHandle,
      };

      setSavedNotes((currentNotes) =>
        [newNote, ...currentNotes].sort(
          (a, b) => b.date.getTime() - a.date.getTime(),
        ),
      );

      setSelectedNote(newNote);
      setTeacherNotes("");
      setNotesStatus("Note saved locally.");
    } catch {
      setNotesError(
        "The note could not be saved. Please check that the selected folder is still available.",
      );
    }
  };

  const handleRequestDeleteNote = () => {
    if (!selectedNote || !notesDirectory) {
      return;
    }

    setNotesError("");
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = async () => {
    if (!selectedNote || !notesDirectory) {
      setShowDeleteConfirmation(false);
      return;
    }

    setNotesError("");

    try {
      const hasPermission = await ensureDirectoryPermission(notesDirectory);

      if (!hasPermission) {
        setShowDeleteConfirmation(false);
        setNotesError(
          "Permission to delete the note was not granted.",
        );
        return;
      }

      if (!notesDirectory.removeEntry) {
        setShowDeleteConfirmation(false);
        setNotesError(
          "This browser does not support deleting local lesson note files.",
        );
        return;
      }

      const noteBeingDeleted = selectedNote;

      await notesDirectory.removeEntry(noteBeingDeleted.fileName);

      setSavedNotes((currentNotes) =>
        currentNotes.filter((note) => note.id !== noteBeingDeleted.id),
      );

      setSelectedNote(null);
      setShowDeleteConfirmation(false);
      setDeletionToast("Note deleted successfully.");

      window.setTimeout(() => {
        setDeletionToast("");
      }, 3500);
    } catch {
      setShowDeleteConfirmation(false);
      setNotesError(
        "The note could not be deleted. Please check that the selected notes folder is still available.",
      );
    }
  };

  return (
    <section className="curriculum-lesson-detail">
      <div className="curriculum-lesson-detail-inner">
        <button
          type="button"
          className="curriculum-detail-back"
          onClick={onBack}
        >
          <span aria-hidden="true">←</span>
          Back to Lesson Plans
        </button>

        <header className="curriculum-detail-hero">
          <div className="curriculum-detail-hero-top">
            <div className="curriculum-detail-identity">
              <div className="curriculum-detail-day">
                Week {lesson.weekNumber} · Day {lesson.dayNumber}
              </div>

              <div className="curriculum-detail-section">
                <span aria-hidden="true">{sectionIcon}</span>
                {sectionLabel}
              </div>

              <div className="curriculum-detail-yield">
                {lesson.scoringWeight}
              </div>
            </div>

            <span className="curriculum-detail-difficulty">
              {difficultyLabels[lesson.difficultyLevel] ??
                lesson.difficultyLevel}
            </span>
          </div>

          <div className="curriculum-detail-title-block">
            <div className="curriculum-kicker">TODAY'S LESSON</div>
            <h1>{lesson.title}</h1>
            <p>{lesson.moduleName}</p>
          </div>

          <div className="curriculum-detail-meta">
            <div>
              <span>Lesson ID</span>
              <strong>{curriculumLesson.id}</strong>
            </div>
            <div>
              <span>Module Key</span>
              <strong>{curriculumLesson.moduleKey}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>60 minutes</strong>
            </div>
          </div>
        </header>

        <section className="curriculum-detail-section-block">
          <div className="curriculum-detail-section-heading">
            <div>
              <div className="curriculum-kicker">THE 60-MINUTE LESSON</div>
              <h2>Lesson Structure</h2>
            </div>
            <span
              className="curriculum-detail-heading-icon"
              aria-hidden="true"
            >
              ⏱️
            </span>
          </div>

          <div className="curriculum-detail-stage-grid">
            <article className="curriculum-detail-stage curriculum-detail-stage-warmup">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">⚡</span>
                <div>
                  <strong>Warm-up</strong>
                  <small>10 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.warmup}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-presentation">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">📘</span>
                <div>
                  <strong>Presentation</strong>
                  <small>15 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.presentation}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-practice">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">🖊️</span>
                <div>
                  <strong>Practice</strong>
                  <small>20 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.practice}</p>
            </article>

            <article className="curriculum-detail-stage curriculum-detail-stage-review">
              <div className="curriculum-detail-stage-title">
                <span aria-hidden="true">📊</span>
                <div>
                  <strong>Review</strong>
                  <small>15 minutes</small>
                </div>
              </div>
              <p>{lesson.timeBoxBreakdown.review}</p>
            </article>
          </div>
        </section>

        <div className="curriculum-detail-two-column">
          <section className="curriculum-detail-content-card">
            <div className="curriculum-detail-card-heading">
              <span className="curriculum-detail-card-icon curriculum-icon-green">
                🎯
              </span>
              <div>
                <div className="curriculum-kicker">TEACHING FOCUS</div>
                <h2>What to Teach</h2>
              </div>
            </div>

            <ol className="curriculum-detail-numbered-list">
              {lesson.teachingPoints.map((point, index) => (
                <li key={`${curriculumLesson.id}-teaching-${index}`}>
                  <span>{index + 1}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="curriculum-detail-content-card">
            <div className="curriculum-detail-card-heading">
              <span className="curriculum-detail-card-icon curriculum-icon-blue">
                💡
              </span>
              <div>
                <div className="curriculum-kicker">TEACHER GUIDANCE</div>
                <h2>Tips &amp; Tricks</h2>
              </div>
            </div>

            <ul className="curriculum-detail-bullet-list">
              {lesson.tipsAndTricks.map((tip, index) => (
                <li key={`${curriculumLesson.id}-tip-${index}`}>
                  <span aria-hidden="true">✓</span>
                  <p>{tip}</p>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <section className="curriculum-detail-content-card curriculum-detail-problems-card">
          <div className="curriculum-detail-card-heading">
            <span className="curriculum-detail-card-icon curriculum-icon-amber">
              🛠️
            </span>
            <div>
              <div className="curriculum-kicker">DIAGNOSTIC GUIDANCE</div>
              <h2>Common Problems &amp; Fixes</h2>
            </div>
          </div>

          <div className="curriculum-detail-problem-grid">
            {lesson.commonProblemsAndFixes.map((item, index) => (
              <article
                key={`${curriculumLesson.id}-problem-${index}`}
                className="curriculum-detail-problem"
              >
                <div className="curriculum-detail-problem-number">
                  {index + 1}
                </div>
                <div>
                  <h3>{item.problem}</h3>
                  <p>{item.fix}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="curriculum-detail-homework">
          <div className="curriculum-detail-homework-icon" aria-hidden="true">
            🏠
          </div>

          <div className="curriculum-detail-homework-main">
            <div className="curriculum-kicker">AFTER CLASS</div>
            <h2>Homework</h2>
            <p>{lesson.homework.task}</p>

            <div className="curriculum-detail-homework-targets">
              <div>
                <span>Target quota</span>
                <strong>{lesson.homework.targetQuota}</strong>
              </div>

              <div>
                <span>Success criteria</span>
                <strong>{lesson.homework.successCriteria}</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="curriculum-detail-content-card curriculum-detail-notes-card">
          <div className="curriculum-detail-card-heading">
            <span className="curriculum-detail-card-icon curriculum-icon-blue">
              📝
            </span>
            <div>
              <div className="curriculum-kicker">TEACHER REFERENCE</div>
              <h2>Teacher Notes</h2>
            </div>
          </div>

          <p className="curriculum-detail-notes-intro">
            Keep a running record of observations, student difficulties,
            teaching ideas, or anything you want to remember when teaching
            this lesson again.
          </p>

          <div className="curriculum-detail-notes-layout">
            <div className="curriculum-detail-notes-editor">
              <div className="curriculum-detail-notes-editor-heading">
                <div>
                  <strong>New Note</strong>
                  <span>Add a new observation for this lesson.</span>
                </div>
              </div>

              <textarea
                value={teacherNotes}
                onChange={(event) => {
                  setTeacherNotes(event.target.value);
                  setNotesStatus("");
                  setNotesError("");
                }}
                placeholder="Write your lesson notes here..."
                rows={11}
                className="curriculum-detail-notes-textarea"
              />

              <div className="curriculum-detail-notes-actions">
                <button
                  type="button"
                  className="curriculum-detail-notes-save"
                  onClick={handleSaveNote}
                >
                  Save Note
                </button>

                <button
                  type="button"
                  className="curriculum-detail-notes-folder"
                  onClick={handleChooseNotesFolder}
                >
                  {notesDirectory
                    ? "Change Notes Folder"
                    : "Choose Notes Folder"}
                </button>
              </div>

              {notesStatus && (
                <div
                  className="curriculum-detail-notes-success"
                  aria-live="polite"
                >
                  ✓ {notesStatus}
                </div>
              )}

              {notesError && (
                <div
                  className="curriculum-detail-notes-error"
                  aria-live="polite"
                >
                  {notesError}
                </div>
              )}
            </div>

            <div className="curriculum-detail-notes-library">
              <div className="curriculum-detail-notes-library-heading">
                <div>
                  <strong>Saved Notes</strong>
                  <span>
                    {savedNotes.length === 0
                      ? "No notes saved yet"
                      : `${savedNotes.length} saved note${
                          savedNotes.length === 1 ? "" : "s"
                        }`}
                  </span>
                </div>
              </div>

              {savedNotes.length > 0 ? (
                <div className="curriculum-detail-notes-grid">
                  {savedNotes.map((note) => (
                    <button
                      type="button"
                      key={note.id}
                      className={`curriculum-detail-note-file ${
                        selectedNote?.id === note.id
                          ? "is-selected"
                          : ""
                      }`}
                      onClick={() => setSelectedNote(note)}
                    >
                      <span
                        className="curriculum-detail-note-file-icon"
                        aria-hidden="true"
                      >
                        📝
                      </span>
                      <span className="curriculum-detail-note-file-date">
                        {formatNoteDate(note.date)}
                      </span>
                      <span className="curriculum-detail-note-file-time">
                        {formatNoteDateTime(note.date).split(", ").pop()}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="curriculum-detail-notes-empty">
                  <span aria-hidden="true">🗂️</span>
                  <strong>No saved notes yet</strong>
                  <p>
                    Your saved lesson notes will appear here as dated files.
                  </p>
                </div>
              )}

              {selectedNote && (
                <article className="curriculum-detail-note-preview">
                  <div className="curriculum-detail-note-preview-heading">
                    <div>
                      <span>Selected Note</span>
                      <strong>{formatNoteDateTime(selectedNote.date)}</strong>
                    </div>
                  </div>

                  <div className="curriculum-detail-note-preview-text">
                    {selectedNote.text}
                  </div>
                </article>
              )}

              {selectedNote && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "14px",
                  }}
                >
                  <button
                    type="button"
                    onClick={handleRequestDeleteNote}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "7px",
                      padding: "10px 16px",
                      border: "1px solid #dc2626",
                      borderRadius: "10px",
                      background: "#dc2626",
                      color: "#ffffff",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "13px",
                      fontWeight: 800,
                      lineHeight: 1,
                      boxShadow: "0 4px 10px rgba(220, 38, 38, 0.18)",
                    }}
                    onMouseEnter={(event) => {
                      event.currentTarget.style.background = "#b91c1c";
                      event.currentTarget.style.borderColor = "#b91c1c";
                    }}
                    onMouseLeave={(event) => {
                      event.currentTarget.style.background = "#dc2626";
                      event.currentTarget.style.borderColor = "#dc2626";
                    }}
                  >
                    <span aria-hidden="true">🗑️</span>
                    Delete Note
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="curriculum-detail-notes-location">
            <span aria-hidden="true">💾</span>
            <div>
              <strong>Local storage</strong>
              <p>
                {notesFolderName
                  ? `Your lesson notes are saved locally in the folder you selected: ${notesFolderName}.`
                  : "Your lesson notes will be saved locally in a folder you select on your computer. No notes are sent to the Student App, Firebase, or an online database."}
              </p>
            </div>
          </div>
        </section>
      </div>

      {showDeleteConfirmation && selectedNote && (
        <div
          role="presentation"
          onClick={handleCancelDelete}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
            background: "rgba(9, 35, 63, 0.52)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-note-title"
            onClick={(event) => event.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "460px",
              overflow: "hidden",
              border: "1px solid #d7e3eb",
              borderRadius: "18px",
              background: "#ffffff",
              boxShadow: "0 24px 70px rgba(15, 39, 66, 0.24)",
            }}
          >
            <div
              style={{
                padding: "20px 22px",
                background:
                  "linear-gradient(135deg, #fff7ed 0%, #fff1f2 100%)",
                borderBottom: "1px solid #fee2e2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "13px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "46px",
                    height: "46px",
                    flexShrink: 0,
                    borderRadius: "13px",
                    background: "#fee2e2",
                    border: "1px solid #fecaca",
                    fontSize: "22px",
                  }}
                >
                  🗑️
                </div>

                <div>
                  <div
                    style={{
                      marginBottom: "3px",
                      color: "#b91c1c",
                      fontSize: "11px",
                      fontWeight: 900,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    Teacher Notes
                  </div>

                  <h2
                    id="delete-note-title"
                    style={{
                      margin: 0,
                      color: "#09233f",
                      fontSize: "20px",
                      fontWeight: 900,
                    }}
                  >
                    Delete this note?
                  </h2>
                </div>
              </div>
            </div>

            <div style={{ padding: "20px 22px" }}>
              <p
                style={{
                  margin: "0 0 8px",
                  color: "#304c67",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                This will permanently remove the saved note from your
                Lesson Notes folder.
              </p>

              <p
                style={{
                  margin: 0,
                  color: "#71859a",
                  fontSize: "12px",
                  lineHeight: 1.5,
                }}
              >
                The other notes in this lesson will not be affected.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
                padding: "14px 22px 18px",
                background: "#f8fafc",
                borderTop: "1px solid #e5edf3",
              }}
            >
              <button
                type="button"
                onClick={handleCancelDelete}
                style={{
                  padding: "10px 16px",
                  border: "1px solid #d3dee7",
                  borderRadius: "10px",
                  background: "#ffffff",
                  color: "#31516f",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 800,
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handleConfirmDelete}
                style={{
                  padding: "10px 17px",
                  border: "1px solid #dc2626",
                  borderRadius: "10px",
                  background: "#dc2626",
                  color: "#ffffff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  fontSize: "13px",
                  fontWeight: 800,
                  boxShadow: "0 4px 10px rgba(220, 38, 38, 0.18)",
                }}
              >
                Delete Note
              </button>
            </div>
          </div>
        </div>
      )}

      {deletionToast && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1100,
            width: "min(390px, calc(100vw - 48px))",
            padding: "18px 20px",
            border: "1px solid #a7f3d0",
            borderRadius: "14px",
            background:
              "linear-gradient(135deg, #047857 0%, #0f766e 100%)",
            color: "#ffffff",
            boxShadow: "0 18px 45px rgba(15, 118, 110, 0.32)",
          }}
          role="status"
          aria-live="polite"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "42px",
                height: "42px",
                flexShrink: 0,
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.18)",
                border: "1px solid rgba(255, 255, 255, 0.28)",
                fontSize: "20px",
                fontWeight: 900,
              }}
            >
              ✓
            </span>

            <div>
              <div
                style={{
                  marginBottom: "2px",
                  fontSize: "15px",
                  fontWeight: 900,
                }}
              >
                Note Deleted
              </div>

              <div
                style={{
                  color: "#d1fae5",
                  fontSize: "12px",
                  lineHeight: 1.45,
                }}
              >
                The note has been removed from your local Lesson Notes
                folder.
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}