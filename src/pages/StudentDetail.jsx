import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "../AuthContext";
import Avatar from "../components/Avatar";
import "./StudentDetail.css";

// Recharts imports (make sure recharts is installed)
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar
} from "recharts";

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

function parseActivityLog(activityArray) {
  if (!Array.isArray(activityArray)) return [];

  return activityArray.map((entry) => {
    // Default parsed object
    const parsed = {
      date: null,
      lessons: 0,
      tests: 0,
      score: null
    };

    // Extract date (last part of string)
    const dateMatch = entry.match(/(\d{1,2}\s\w{3})/); // e.g. "15 Aug"
    if (dateMatch) {
      const raw = dateMatch[1];
      const [day, month] = raw.split(" ");
      const monthMap = {
        Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
        Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
      };
      const d = new Date();
      d.setMonth(monthMap[month]);
      d.setDate(day);
      parsed.date = d.toISOString().split("T")[0]; // YYYY-MM-DD
    }

    // Detect lesson completion
    if (entry.toLowerCase().includes("lesson")) {
      parsed.lessons = 1;
    }

    // Detect practice test
    if (entry.toLowerCase().includes("test")) {
      parsed.tests = 1;
    }

    // Detect score
    const scoreMatch = entry.match(/(\d{1,3})%/);
    if (scoreMatch) {
      parsed.score = Number(scoreMatch[1]);
    }

    return parsed;
  });
}

// Helper functions for course cycles
function generateNewCourseId() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function today() {
  return new Date().toLocaleDateString("en-GB");
}

function nextTwoMonths() {
  const d = new Date();
  d.setMonth(d.getMonth() + 2);
  return d.toLocaleDateString("en-GB");
}

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
  const canManageCourses = isAdmin || isTeacher;

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

        // Ensure course structure exists
        if (!data.currentCourse) {
          data.currentCourse = {
            courseId: generateNewCourseId(),
            startDate: today(),
            endDate: nextTwoMonths(),
            lessonsCompleted: 0,
            practiceTests: 0,
            averageScore: null,
            activity: []
          };
        }

        if (!data.courses) {
          data.courses = [];
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

  // Archive current course and start new one
  async function endCourse() {
    const ref = doc(db, "students", id);

    const archivedCourse = { ...student.currentCourse };

    const newCourse = {
      courseId: generateNewCourseId(),
      startDate: today(),
      endDate: nextTwoMonths(),
      lessonsCompleted: 0,
      practiceTests: 0,
      averageScore: null,
      activity: []
    };

    await updateDoc(ref, {
      courses: [...student.courses, archivedCourse],
      currentCourse: newCourse
    });

    setStudent((prev) => ({
      ...prev,
      courses: [...prev.courses, archivedCourse],
      currentCourse: newCourse
    }));

    alert("Course archived and new course started!");
  }

  // Chart data: currentCourse.activity should be an array of objects like:
  // { date: "2026-08-15", lessons: 1, tests: 0, score: 78 }
  const activityData = parseActivityLog(student.currentCourse.activity || []);
  const pastCoursesData = student.courses || [];

  return (
    <div className="page-content student-detail">
      <div className="student-detail-container">

        <div className="top-row">
          <button className="back-button" onClick={() => navigate("/students")}>
            ← Back to Students
          </button>

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
            <div className="class-readonly">
              <strong>Class:</strong> {student.className}
            </div>
          )}
        </div>

        <div className="student-header">
          <Avatar name={student.name} photoUrl={student.photoUrl} />
          <h2>{student.name}</h2>
        </div>

        {/* INFO GRID */}
        <div className="info-grid">

          {/* Editable Status */}
          <div className="info-card">
            <h4>Status</h4>
            {isAdmin || isTeacher ? (
              <select
                value={student.status}
                onChange={(e) =>
                  setStudent({ ...student, status: e.target.value })
                }
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="completed">Completed</option>
              </select>
            ) : (
              <p>{student.status}</p>
            )}
          </div>

          {/* Joined */}
          <div className="info-card">
            <h4>Joined</h4>
            <p>{student.joined}</p>
          </div>

          {/* Student ID */}
          <div className="info-card">
            <h4>Student ID</h4>
            <p>{student.id}</p>
          </div>

          {/* Activation Code */}
          {(isAdmin || student.activationCode) && (
            <div className="info-card">
              <h4>Activation Code</h4>
              <p>{student.activationCode || "N/A"}</p>
            </div>
          )}

          {/* Editable Phone */}
          <div className="info-card">
            <h4>Phone</h4>
            {isAdmin || isTeacher ? (
              <input
                type="text"
                value={student.phone || ""}
                onChange={(e) =>
                  setStudent({ ...student, phone: e.target.value })
                }
              />
            ) : (
              <p>{student.phone || "N/A"}</p>
            )}
          </div>

          {/* Editable Email */}
          <div className="info-card">
            <h4>Email</h4>
            {isAdmin || isTeacher ? (
              <input
                type="text"
                value={student.email || ""}
                onChange={(e) =>
                  setStudent({ ...student, email: e.target.value })
                }
              />
            ) : (
              <p>{student.email || "N/A"}</p>
            )}
          </div>

          {/* Editable Consultant */}
          <div className="info-card">
            <h4>Consultant</h4>
            {isAdmin || isTeacher ? (
              <input
                type="text"
                value={student.consultant || ""}
                onChange={(e) =>
                  setStudent({ ...student, consultant: e.target.value })
                }
              />
            ) : (
              <p>{student.consultant || "N/A"}</p>
            )}
          </div>

          {/* Last Login */}
          <div className="info-card">
            <h4>Last Login</h4>
            <p>{student.lastLogin || "N/A"}</p>
          </div>

        </div>

        {/* Save Button */}
        {(isAdmin || isTeacher) && (
          <button
            className="save-button"
            onClick={async () => {
              await updateDoc(doc(db, "students", id), {
                status: student.status,
                phone: student.phone,
                email: student.email,
                consultant: student.consultant
              });
              alert("Student details updated!");
            }}
          >
            Save Changes
          </button>
        )}

        {/* COURSE CYCLE SYSTEM */}
        {canManageCourses && (
          <div className="course-section">
            <h3>Course Cycle</h3>

            <div className="current-course-card">
              <h4>Current Course</h4>
              <p><strong>Course ID:</strong> {student.currentCourse.courseId}</p>
              <p><strong>Start:</strong> {student.currentCourse.startDate}</p>
              <p><strong>End:</strong> {student.currentCourse.endDate}</p>
              <p><strong>Lessons:</strong> {student.currentCourse.lessonsCompleted}</p>
              <p><strong>Tests:</strong> {student.currentCourse.practiceTests}</p>
              <p><strong>Average Score:</strong> {student.currentCourse.averageScore || "N/A"}</p>

              <button className="end-course-button" onClick={endCourse}>
                End Course & Start New
              </button>
            </div>

            {/* Accordion Past Courses */}
            <div className="past-courses">
              <h4>Past Courses</h4>

              {student.courses.length === 0 && <p>No past courses</p>}

              {student.courses.map((course, index) => (
                <details key={index} className="course-accordion">
                  <summary>
                    {course.courseId} — {student.className}
                  </summary>
                  <div className="course-details">
                    <p><strong>Start:</strong> {course.startDate}</p>
                    <p><strong>End:</strong> {course.endDate}</p>
                    <p><strong>Lessons:</strong> {course.lessonsCompleted}</p>
                    <p><strong>Tests:</strong> {course.practiceTests}</p>
                    <p><strong>Average Score:</strong> {course.averageScore || "N/A"}</p>
                    <p><strong>Activity:</strong></p>
                    <ul>
                      {course.activity?.length > 0
                        ? course.activity.map((a, i) => <li key={i}>{a}</li>)
                        : <li>No activity recorded</li>}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS + CHARTS */}
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

            {/* COURSE PROGRESS CHARTS */}
            <div className="charts-section">

              {/* Lessons Completed Over Time */}
              <div className="chart-card">
                <h4>Lessons Completed Over Time</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="lessons" stroke="#4f46e5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Practice Tests Over Time */}
              <div className="chart-card">
                <h4>Practice Tests Over Time</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="tests" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Average Score Trend */}
              <div className="chart-card">
                <h4>Average Score Trend</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#f59e0b" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Past Course Comparison */}
              <div className="chart-card">
                <h4>Past Course Comparison</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pastCoursesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="courseId" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="lessonsCompleted" fill="#4f46e5" name="Lessons" />
                    <Bar dataKey="practiceTests" fill="#10b981" name="Tests" />
                    <Bar dataKey="averageScore" fill="#f59e0b" name="Score" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}