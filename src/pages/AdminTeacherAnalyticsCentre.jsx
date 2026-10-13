
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { teacherAnalyticsAdminAuth } from "../teacherFirebase";
import { getTeacherProfiles } from "../services/teacherAnalyticsService";
import "./AdminTeacherAnalyticsCentre.css";
import { useNavigate } from "react-router-dom";

export default function AdminTeacherAnalyticsCentre() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    let unsubscribe = () => {};

    setLoading(true);
    setError("");

    unsubscribe = onAuthStateChanged(
      teacherAnalyticsAdminAuth,
      async (user) => {
        if (!isMounted) return;

        if (user?.uid !== "qBmXU22ln4UoVDqiiDa455miIIT2") {
          navigate("/analytics", {
            replace: true,
            state: {
              analyticsView: "written-report",
              requireAdminAnalyticsSignIn: true,
              returnToAdminCentre: true,
            },
          });
          return;
        }

        try {
          const profiles = await getTeacherProfiles();

          if (isMounted) {
            setTeachers(profiles);
            setError("");
          }
        } catch (err) {
          console.error("Failed to load Admin Teacher Analytics Centre:", err);

          if (isMounted) {
            setError(
              err instanceof Error
                ? err.message
                : "Unable to load teacher profiles."
            );
          }
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      }
    );

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, [navigate]);

  return (
    <main className="admin-teacher-centre">
      <header className="admin-teacher-centre-header">
        <div>
          <span className="admin-teacher-centre-eyebrow">
            ADMINISTRATION
          </span>

          <h1>Admin Teacher Analytics Centre</h1>

          <p>
            Select a teacher to review their Calibration Lab and Live
            Evaluation performance.
          </p>
        </div>

        <div
          className="admin-teacher-centre-admin-badge"
          aria-label="Administrator view"
        >
          <span aria-hidden="true">🛡️</span>
          <span>Admin View</span>
        </div>
      </header>

      <section
        className="admin-teacher-centre-section"
        aria-labelledby="admin-teacher-centre-teachers-heading"
      >
        <div className="admin-teacher-centre-section-heading">
          <div>
            <h2 id="admin-teacher-centre-teachers-heading">
              Teacher Directory
            </h2>
            <p>
              {loading
                ? "Loading teacher profiles..."
                : `${teachers.length} ${
                    teachers.length === 1 ? "teacher" : "teachers"
                  } available`}
            </p>
          </div>
        </div>

        {loading && (
          <div className="admin-teacher-centre-message" role="status">
            Loading teacher profiles...
          </div>
        )}

        {!loading && error && (
          <div className="admin-teacher-centre-error" role="alert">
            <strong>Unable to load teachers</strong>
            <p>{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        )}

        {!loading && !error && teachers.length === 0 && (
          <div className="admin-teacher-centre-message">
            <h3>No teacher profiles found</h3>
            <p>
              Teacher profiles will appear here when they are available
              in the Teacher Dashboard database.
            </p>
          </div>
        )}

        {!loading && !error && teachers.length > 0 && (
          <div className="admin-teacher-centre-grid">
            {teachers.map((teacher) => (
                            <article
                className="admin-teacher-card"
                key={teacher.teacherId}
              >
                <div className="admin-teacher-card-avatar" aria-hidden="true">
                  {teacher.displayName?.trim().charAt(0).toUpperCase() || "T"}
                </div>

                <div className="admin-teacher-card-details">
                  <h3>{teacher.displayName || "Teacher"}</h3>
                  <p>{teacher.email || "No email recorded"}</p>
                </div>

                <div
                  className="admin-teacher-card-status"
                  aria-label="Teacher profile available"
                  title="Teacher profile available"
                >
                  <span />
                  Profile available
                </div>

                <div className="admin-teacher-card-actions">
                  <button
                    type="button"
                    onClick={() =>
                    navigate(
                      `/analytics?teacherId=${encodeURIComponent(teacher.teacherId)}&teacherName=${encodeURIComponent(teacher.displayName)}&view=analytics`,
                      {
                        state: {
                          selectedTeacherId: teacher.teacherId,
                          selectedTeacherName: teacher.displayName,
                          analyticsView: "analytics",
                        },
                      }
                    )
                  }
                  >
                    Analytics
                  </button>

                  <button
                    type="button"
                   onClick={() =>
                    navigate(
                      `/analytics?teacherId=${encodeURIComponent(teacher.teacherId)}&teacherName=${encodeURIComponent(teacher.displayName)}&view=written-report`,
                      {
                        state: {
                          selectedTeacherId: teacher.teacherId,
                          selectedTeacherName: teacher.displayName,
                          analyticsView: "written-report",
                        },
                      }
                    )
                  }
                  >
                    Written Report
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}


