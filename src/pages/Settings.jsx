import { useEffect, useState } from "react";
import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  writeBatch
} from "firebase/firestore";
import "./Settings.css";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";

export default function Settings() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  const dashboardViews = [
    { value: "/", label: "Overview" },
    { value: "/students", label: "Students" },
    { value: "/analytics", label: "Analytics" },
    { value: "/broadcast", label: "Broadcast" },
    { value: "/reports", label: "Reports" },
    { value: "/master-teacher", label: "PTE Master Teacher" }
  ];

  const [showArchiveConfirmation, setShowArchiveConfirmation] =
    useState(false);
  const [archivePreview, setArchivePreview] = useState(null);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [archiveComplete, setArchiveComplete] = useState(false);
  const [archivedClasses, setArchivedClasses] = useState([]);
  const [archivedClassesLoading, setArchivedClassesLoading] = useState(true);
  const [archivedClassesError, setArchivedClassesError] = useState("");

  const [defaultDashboardView, setDefaultDashboardView] = useState(
    () => localStorage.getItem("pte_flow_default_dashboard_view") || "/"
  );

  function saveDefaultDashboardView(value) {
    setDefaultDashboardView(value);
    localStorage.setItem("pte_flow_default_dashboard_view", value);
  }

  useEffect(() => {
    let cancelled = false;

    async function loadArchivedClasses() {
      try {
        setArchivedClassesLoading(true);
        setArchivedClassesError("");

        const snap = await getDocs(collection(db, "archivedClasses"));

        let list = snap.docs.map((archiveDoc) => ({
          id: archiveDoc.id,
          ...archiveDoc.data()
        }));

        if (roleData?.role === "teacher") {
          list = list.filter(
            (archive) =>
              !archive.teacherName || archive.teacherName === displayName
          );
        }

        list.sort((a, b) => {
          const aTime = a.archivedAt?.toMillis?.() || 0;
          const bTime = b.archivedAt?.toMillis?.() || 0;
          return bTime - aTime;
        });

        if (!cancelled) {
          setArchivedClasses(list);
        }
      } catch (error) {
        console.error("Failed to load archived classes:", error);

        if (!cancelled) {
          setArchivedClassesError(
            error?.message || "Unable to load archived classes."
          );
        }
      } finally {
        if (!cancelled) {
          setArchivedClassesLoading(false);
        }
      }
    }

    loadArchivedClasses();

    return () => {
      cancelled = true;
    };
  }, [displayName, roleData?.role]);
  async function archiveCurrentClass() {
    try {
      setArchiveLoading(true);
      setArchivePreview(null);
      setArchiveComplete(false);

      const snap = await getDocs(collection(db, "students"));

      let list = snap.docs.map((studentDoc) => ({
        id: studentDoc.id,
        ...studentDoc.data()
      }));

      if (roleData?.role === "teacher") {
        list = list.filter(
          (student) => student.className === roleData?.className
        );
      }

      const className = roleData?.className || "Current class";
      const archiveRef = doc(collection(db, "archivedClasses"));
      const batch = writeBatch(db);

      batch.set(archiveRef, {
        className,
        teacherName: displayName,
        role: roleData?.role || "teacher",
        studentCount: list.length,
        status: "archived",
        archivedAt: serverTimestamp()
      });

      list.forEach((student) => {
        const studentRef = doc(
          db,
          "archivedClasses",
          archiveRef.id,
          "students",
          student.id
        );

        batch.set(studentRef, {
          ...student,
          originalStudentId: student.id
        });
      });

      await batch.commit();

      setArchivePreview({
        className,
        studentCount: list.length,
        archiveId: archiveRef.id
      });

      setArchiveComplete(true);
    } catch (error) {
      console.error("Failed to archive current class:", error);

      setArchivePreview({
        error:
          error?.message ||
          "Unable to archive the current class. No active student records were changed."
      });
    } finally {
      setArchiveLoading(false);
    }
  }

  return (
    <div className="settings-page">
      <section className="settings-hero">
        <div>
          <span className="settings-eyebrow">DASHBOARD SETTINGS</span>
          <h2>Settings</h2>
          <p>
            Manage the general preferences and behaviour of your teacher
            dashboard.
          </p>
        </div>

        <div className="settings-hero-badge">
          <span className="settings-hero-letter">S</span>
          <div>
            <strong>{displayName}</strong>
            <small>Dashboard preferences</small>
          </div>
        </div>
      </section>

      <section className="settings-grid">
        <article className="settings-card settings-card-blue">
          <div className="settings-card-icon">D</div>
          <div>
            <h3>Dashboard Preferences</h3>
            <p>
              General preferences for how the teacher dashboard is organised
              and presented.
            </p>

            <div className="settings-placeholder-row">
              <div>
                <strong>Default dashboard view</strong>
                <span>Choose which dashboard area opens first.</span>
              </div>

              <select
                className="settings-select"
                value={defaultDashboardView}
                onChange={(e) => saveDefaultDashboardView(e.target.value)}
              >
                {dashboardViews.map((view) => (
                  <option key={view.value} value={view.value}>
                    {view.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="settings-placeholder-row">
              <div>
                <strong>Display preferences</strong>
                <span>Control general dashboard display options.</span>
              </div>
              <span className="settings-status">Coming soon</span>
            </div>
          </div>
        </article>

        <article className="settings-card settings-card-yellow">
          <div className="settings-card-icon">N</div>
          <div>
            <h3>Notifications</h3>
            <p>
              Manage teacher-facing notification preferences for important
              dashboard activity.
            </p>

            <div className="settings-placeholder-row">
              <div>
                <strong>Dashboard notifications</strong>
                <span>Control which dashboard notifications are shown.</span>
              </div>
              <span className="settings-status">Coming soon</span>
            </div>

            <div className="settings-placeholder-row">
              <div>
                <strong>Student activity alerts</strong>
                <span>Manage alerts related to student activity.</span>
              </div>
              <span className="settings-status">Coming soon</span>
            </div>
          </div>
        </article>

        <article className="settings-card settings-card-pink">
          <div className="settings-card-icon">S</div>
          <div>
            <h3>Student Management</h3>
            <p>
              General options relating to how students are managed within the
              teacher dashboard.
            </p>

            <div className="settings-placeholder-row">
              <div>
                <strong>Student management preferences</strong>
                <span>General options for your student workflow.</span>
              </div>
              <span className="settings-status">Coming soon</span>
            </div>

            <div className="settings-placeholder-row">
              <div>
                <strong>Roster preferences</strong>
                <span>Control general roster display behaviour.</span>
              </div>
              <span className="settings-status">Coming soon</span>
            </div>
          </div>
        </article>

        <article className="settings-card settings-card-orange">
          <div className="settings-card-icon">C</div>
          <div>
            <h3>Class &amp; Course Management</h3>
            <p>
              Manage the current course cycle and preserve completed classes
              for future reference.
            </p>

            <div className="settings-placeholder-row">
              <div>
                <strong>Finish &amp; Archive Class</strong>
                <span>
                  Save the current class as a historical snapshot when the
                  two-month course is complete.
                </span>
              </div>

              <button
                type="button"
                className="settings-archive-button"
                onClick={() => {
                  setArchivePreview(null);
                  setArchiveComplete(false);
                  setShowArchiveConfirmation(true);
                }}
              >
                Finish &amp; Archive Class
              </button>
            </div>
          </div>
        </article>

        <article className="settings-card settings-card-orange">
          <div className="settings-card-icon">A</div>
          <div>
            <h3>Archived Classes</h3>
            <p>
              Open read-only historical snapshots of completed classes.
            </p>

            {archivedClassesLoading && (
              <div className="settings-placeholder-row">
                <div>
                  <strong>Loading archived classes...</strong>
                  <span>Checking saved historical class snapshots.</span>
                </div>
              </div>
            )}

            {!archivedClassesLoading && archivedClassesError && (
              <div className="settings-placeholder-row">
                <div>
                  <strong>Unable to load archived classes</strong>
                  <span>{archivedClassesError}</span>
                </div>
              </div>
            )}

            {!archivedClassesLoading &&
              !archivedClassesError &&
              archivedClasses.length === 0 && (
                <div className="settings-placeholder-row">
                  <div>
                    <strong>No archived classes yet</strong>
                    <span>
                      Completed class snapshots will appear here.
                    </span>
                  </div>
                </div>
              )}

            {!archivedClassesLoading &&
              !archivedClassesError &&
              archivedClasses.map((archive) => (
                <div className="settings-placeholder-row" key={archive.id}>
                  <div>
                    <strong>{archive.className || "Archived Class"}</strong>
                    <span>
                      {archive.studentCount ?? 0} students
                      {" • "}
                      {archive.archivedAt?.toDate
                        ? archive.archivedAt.toDate().toLocaleDateString()
                        : "Date unavailable"}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="settings-archive-button"
                    onClick={() =>
                      window.open(
                        `${window.location.origin}/archived-class/${archive.id}`,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    View Archive
                  </button>
                </div>
              ))}
          </div>
        </article>
        <article className="settings-card settings-card-green">
          <div className="settings-card-icon">I</div>
          <div>
            <h3>System Information</h3>
            <p>
              Basic information about the teacher dashboard and its current
              environment.
            </p>

            <div className="settings-info-list">
              <div>
                <span>Application</span>
                <strong>PTE Flow Teacher Dashboard</strong>
              </div>
              <div>
                <span>Account</span>
                <strong>{displayName}</strong>
              </div>
              <div>
                <span>Role</span>
                <strong>{roleData?.role || "Teacher"}</strong>
              </div>
            </div>
          </div>
        </article>
      </section>

      {showArchiveConfirmation && (
        <div className="settings-modal-overlay">
          <div
            className="settings-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-class-title"
          >
            <div className="settings-modal-icon">!</div>

            <h3 id="archive-class-title">
              {archiveComplete
                ? "Class Archived Successfully"
                : "Finish & Archive Class?"}
            </h3>

            {!archiveComplete && !archivePreview?.error && (
              <p>
                This will create a read-only historical snapshot of the
                current class. The active class and its students will not be
                changed.
              </p>
            )}

            {archiveLoading && <p>Archiving the current class...</p>}

            {archiveComplete && archivePreview && (
              <p>
                Class: <strong>{archivePreview.className}</strong>
                <br />
                Students archived:{" "}
                <strong>{archivePreview.studentCount}</strong>
                <br />
                <span>
                  The active student records have not been changed.
                </span>
              </p>
            )}

            {archivePreview?.error && (
              <p>{archivePreview.error}</p>
            )}

            <div className="settings-modal-actions">
              {!archiveComplete && (
                <button
                  type="button"
                  className="settings-modal-cancel"
                  onClick={() => setShowArchiveConfirmation(false)}
                  disabled={archiveLoading}
                >
                  Cancel
                </button>
              )}

              {!archiveComplete && (
                <button
                  type="button"
                  className="settings-modal-confirm"
                  onClick={archiveCurrentClass}
                  disabled={archiveLoading}
                >
                  {archiveLoading ? "Archiving..." : "Continue"}
                </button>
              )}

              {archiveComplete && (
                <button
                  type="button"
                  className="settings-modal-confirm"
                  onClick={() => setShowArchiveConfirmation(false)}
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <section className="settings-note">
        <strong>About these settings</strong>
        <p>
          Personal profile information and account controls remain in Profile.
          Settings here are intended for general dashboard preferences.
        </p>
      </section>
    </div>
  );
}