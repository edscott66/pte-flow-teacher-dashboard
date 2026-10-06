import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  doc,
  getDoc,
  getDocs
} from "firebase/firestore";

import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import "./ArchivedClass.css";

export default function ArchivedClass() {
  const { archiveId } = useParams();
  const { roleData } = useAuth();

  const [archive, setArchive] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadArchive() {
      if (!archiveId) {
        setError("No archived class was specified.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const archiveRef = doc(db, "archivedClasses", archiveId);
        const archiveSnap = await getDoc(archiveRef);

        if (!archiveSnap.exists()) {
          throw new Error("Archived class not found.");
        }

        const archiveData = archiveSnap.data();

        if (
          roleData?.role === "teacher" &&
          archiveData.teacherName &&
          archiveData.teacherName !== roleData?.name
        ) {
          throw new Error("You do not have access to this archived class.");
        }

        const studentsSnap = await getDocs(
          collection(db, "archivedClasses", archiveId, "students")
        );

        const studentList = studentsSnap.docs.map((studentDoc) => ({
          id: studentDoc.id,
          ...studentDoc.data()
        }));

        if (!cancelled) {
          setArchive({
            id: archiveSnap.id,
            ...archiveData
          });
          setStudents(studentList);
        }
      } catch (loadError) {
        console.error("Failed to load archived class:", loadError);

        if (!cancelled) {
          setError(
            loadError?.message ||
              "Unable to load this archived class."
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadArchive();

    return () => {
      cancelled = true;
    };
  }, [archiveId, roleData?.role, roleData?.name]);

  const formatDate = (timestamp) => {
    if (!timestamp) {
      return "—";
    }

    try {
      if (typeof timestamp.toDate === "function") {
        return timestamp.toDate().toLocaleDateString();
      }

      return new Date(timestamp).toLocaleDateString();
    } catch {
      return "—";
    }
  };

  if (loading) {
    return (
      <main className="archived-class-page">
        <div className="archived-class-card">
          <p>Loading archived class...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="archived-class-page">
        <div className="archived-class-card archived-class-error">
          <h1>Archived Class</h1>
          <p>{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="archived-class-page">
      <div className="archived-class-header">
        <div>
          <span className="archived-class-badge">READ ONLY</span>
          <h1>{archive?.className || "Archived Class"}</h1>
          <p>
            Historical class snapshot. Active student records are not
            changed from this view.
          </p>
        </div>
      </div>

      <section className="archived-class-card">
        <div className="archived-class-summary">
          <div>
            <span>Teacher</span>
            <strong>{archive?.teacherName || "—"}</strong>
          </div>

          <div>
            <span>Students archived</span>
            <strong>
              {archive?.studentCount ?? students.length}
            </strong>
          </div>

          <div>
            <span>Archived</span>
            <strong>{formatDate(archive?.archivedAt)}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{archive?.status || "Archived"}</strong>
          </div>
        </div>
      </section>

      <section className="archived-class-card">
        <div className="archived-class-section-heading">
          <div>
            <h2>Historical Student Records</h2>
            <p>
              These records are snapshots from when the class was
              archived.
            </p>
          </div>
        </div>

        {students.length === 0 ? (
          <div className="archived-class-empty">
            No student records were found in this archive.
          </div>
        ) : (
          <div className="archived-class-table-wrap">
            <table className="archived-class-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Consultant</th>
                  <th>Class</th>
                  <th>Average Score</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => {
                  const studentName =
                    student.name ||
                    student.fullName ||
                    student.displayName ||
                    student.id;

                  return (
                    <tr key={student.id}>
                      <td>{studentName}</td>
                      <td>{student.consultant || "—"}</td>
                      <td>
                        {student.className ||
                          archive?.className ||
                          "—"}
                      </td>
                      <td>
                        {student.averageScore ??
                          student.avgScore ??
                          "—"}
                      </td>
                      <td>{student.status || "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
}