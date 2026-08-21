import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "../AuthContext";
import Avatar from "../components/Avatar";
import "./StudentDetail.css";

const classOptions = [
  "Beginners",
  "A1",
  "A2",
  "A2+",
  "B1",
  "B1+",
  "C1",
  "C2"
];

export default function StudentDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { roleData } = useAuth();

  const role = roleData?.role;
  const teacherClass = roleData?.className;
  const consultantList = roleData?.assignedStudents || [];

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAdmin = role === "admin";
  const isTeacher = role === "teacher";
  const isConsultant = role === "consultant";

  const canSeeAnalytics = isAdmin || isTeacher || isConsultant;

  useEffect(() => {
    async function fetchStudent() {
      try {
        const ref = doc(db, "students", id);
        const snap = await getDoc(ref);

        if (!snap.exists()) {
          setStudent(null);
          setLoading(false);
          return;
        }

        const data = { id, ...snap.data() };

        if (isTeacher && data.className !== teacherClass) {
          navigate("/students");
          return;
        }

        if (isConsultant && !consultantList.includes(id)) {
          navigate("/students");
          return;
        }

        setStudent(data);
      } catch (err) {
        console.error("Error fetching student:", err);
        setStudent(null);
      }

      setLoading(false);
    }

    fetchStudent();
  }, [id, role, teacherClass, consultantList, navigate]);

  if (loading) return <p>Loading student...</p>;
  if (!student) return <p>Student not found.</p>;

  return (
    <div className="page-content student-detail">
      <div className="student-detail-container">

        <div className="top-row">
          <button className="back-button" onClick={() => navigate("/students")}>
            ← Back to Students
          </button>

          {/* Admin ONLY: class dropdown */}
          {isAdmin ? (
            <select
              className="class-dropdown"
              value={student.className}
              onChange={async (e) => {
                const newClass = e.target.value;
                await updateDoc(doc(db, "students", id), {
                  className: newClass
                });
                setStudent((prev) => ({ ...prev, className: newClass }));
              }}
            >
              {classOptions.map((cls) => (
                <option key={cls} value={cls}>
                  {cls}
                </option>
              ))}
            </select>
          ) : (
            // Teachers & Consultants: read-only class display
            <div className="class-readonly">
              <strong>Class:</strong> {student.className}
            </div>
          )}
        </div>

        <div className="student-header">
          <Avatar name={student.name} photoUrl={student.photoUrl} />
          <h2>{student.name}</h2>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h4>Status</h4>
            <p>{student.status}</p>
          </div>

          <div className="info-card">
            <h4>Joined</h4>
            <p>{student.joined}</p>
          </div>

          <div className="info-card">
            <h4>Student ID</h4>
            <p>{student.id}</p>
          </div>

          {/* Activation Code: Admin sees it, others only if it exists */}
          {(isAdmin || student.activationCode) && (
            <div className="info-card">
              <h4>Activation Code</h4>
              <p>{student.activationCode || "N/A"}</p>
            </div>
          )}

          <div className="info-card">
            <h4>Last Login</h4>
            <p>{student.lastLogin || "N/A"}</p>
          </div>
        </div>

        {canSeeAnalytics && (
          <div className="detail-section">
            <h3>Progress & Activity</h3>

            <div className="progress-card">
              <p><strong>Lessons Completed:</strong> {student.lessonsCompleted || 0}</p>
              <p><strong>Practice Tests:</strong> {student.practiceTests || 0}</p>
              <p><strong>Average Score:</strong> {student.averageScore || "N/A"}</p>
            </div>

            <div className="activity-section">
              <h4>Recent Activity</h4>
              <ul className="activity-list">
                {student.activity?.length > 0
                  ? student.activity.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))
                  : <li>No recent activity</li>}
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}