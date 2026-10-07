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

  const [saveConfirmation, setSaveConfirmation] = useState(false);

  const [studentAppData, setStudentAppData] = useState(null);

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

        // Read-only Student App lookup through the existing activation code.

        setStudentAppData(null);

        if (data.activationCode) {

          const activationRef = doc(

            db,

            "verification_codes",

            data.activationCode

          );

          const activationSnap = await getDoc(activationRef);

          if (activationSnap.exists()) {

            const activationData = activationSnap.data();

            if (activationData.isUsed && activationData.usedBy) {

              const leaderboardRef = doc(

                db,

                "leaderboard",

                activationData.usedBy

              );

              const leaderboardSnap = await getDoc(leaderboardRef);

              if (leaderboardSnap.exists()) {

                const leaderboardData = leaderboardSnap.data();

                setStudentAppData({

                  status: "Active",

                  name:

                    leaderboardData?.localBackup?.name ||

                    leaderboardData?.name ||

                    "N/A",

                  lastUpdate: leaderboardData?.lastUpdate || null,

                  score:

                    leaderboardData?.localBackup?.score ??

                    leaderboardData?.score ??

                    null,

                  attemptedQuestions: (() => {

                    const rawQuestions =

                      leaderboardData?.localBackup?.pte_flow_attempted_questions ??

                      leaderboardData?.attemptedQuestions;

                    if (Array.isArray(rawQuestions)) {

                      return rawQuestions.length;

                    }

                    if (typeof rawQuestions === "string") {

                      try {

                        const parsed = JSON.parse(rawQuestions);

                        return Array.isArray(parsed) ? parsed.length : 0;

                      } catch {

                        return 0;

                      }

                    }

                    return 0;

                  })(),

                  correctQuestions: Number(

                    leaderboardData?.localBackup?.pte_flow_cfa ?? 0

                  ),

                  incorrectQuestions: Number(

                    leaderboardData?.localBackup?.pte_flow_ffa ?? 0

                  ),

                  totalStudyTime: Number(

                    leaderboardData?.localBackup?.pte_flow_total_study_time ?? 0

                  ),

                  recentActivity: (() => {

                    const rawActivity =

                      leaderboardData?.localBackup?.pte_flow_recent_activity;

                    if (!rawActivity) return null;

                    try {

                      return typeof rawActivity === "string"

                        ? JSON.parse(rawActivity)

                        : rawActivity;

                    } catch {

                      return null;

                    }

                  })(),

                  performanceData: (() => {

                    const rawPerformance =

                      leaderboardData?.localBackup?.pte_flow_performance_data;

                    if (!rawPerformance) return null;

                    try {

                      return typeof rawPerformance === "string"

                        ? JSON.parse(rawPerformance)

                        : rawPerformance;

                    } catch {

                      return null;

                    }

                  })()

                });

              } else {

                setStudentAppData({

                  status: "Activated — no activity record yet"

                });

              }

            } else {

              setStudentAppData({ status: "Not activated" });

            }

          } else {

            setStudentAppData({ status: "Activation code not found" });

          }

        } else {

          setStudentAppData({ status: "No activation code" });

        }

        // Ensure course structure exists

        if (!data.currentCourse) {

          data.currentCourse = {

            courseId: generateNewCourseId(),

            startDate: today(),

            endDate: nextTwoMonths(),

            lessonsCompleted: data.lessonsCompleted || 0,

            practiceTests: data.practiceTests || 0,

            averageScore: data.averageScore ?? null,

            activity: data.activity || []

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

  }, [id, role, teacherClass, navigate]);

  if (loading) return <p>Loading student...</p>;

  if (!student) return <p>Student not found.</p>;

  // Archive current course and start new one

  async function addMockTestResult(date, score) {

    const normalizedScore = Number(score);

    if (!date || !Number.isFinite(normalizedScore) || normalizedScore < 0 || normalizedScore > 90) {

      alert("Please enter a valid date and a score from 0 to 90.");

      return false;

    }

    const existingResults = Array.isArray(student.mockTestResults)

      ? student.mockTestResults

      : [];

    const newResult = {

      id: String(Date.now()),

      testNumber: existingResults.length + 1,

      date,

      score: normalizedScore

    };

    const updatedResults = [...existingResults, newResult];

    await updateDoc(doc(db, "students", id), {

      mockTestResults: updatedResults

    });

    setStudent((prev) => ({

      ...prev,

      mockTestResults: updatedResults

    }));

    return true;

  }

  async function endCourse() {

    const ref = doc(db, "students", id);

    const archivedCourse = { ...student.currentCourse };

    const newCourse = {

      courseId: generateNewCourseId(),

      startDate: "",

      endDate: student.currentCourse.endDate,

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

  const activityData = parseActivityLog(

  student.currentCourse.activity?.length

    ? student.currentCourse.activity

    : student.activity || []

  );

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

          {/* Passport / ID */}

          <div className="info-card">

            <h4>Passport / ID</h4>

            {isAdmin || isTeacher ? (

              <input

                type="text"

                value={student.passportNumber || ""}

                onChange={(e) =>

                  setStudent({ ...student, passportNumber: e.target.value })

                }

              />

            ) : (

              <p>{student.passportNumber || "N/A"}</p>

            )}

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

          {/* Student App */}

          <div

            className="info-card"

            style={{ gridColumn: "1 / -1" }}

          >

            <h4>Student App</h4>

            <p
              style={{
                color:
                  studentAppData?.status === "Active"
                    ? "#15803d"
                    : studentAppData?.status === "Inactive"
                      ? "#dc2626"
                      : undefined,
                fontWeight: 700,
              }}
            >
              {studentAppData?.status || "Checking..."}
            </p>

            {studentAppData?.name && (

              <p><strong>Name:</strong> {studentAppData.name}</p>

            )}

            {studentAppData?.lastUpdate && (

              <p>

                <strong>Last Update:</strong>{" "}

                <span
                  style={{
                    color:
                      Date.now() - new Date(studentAppData.lastUpdate).getTime() <=
                      24 * 60 * 60 * 1000
                        ? "#15803d"
                        : Date.now() - new Date(studentAppData.lastUpdate).getTime() <=
                            72 * 60 * 60 * 1000
                          ? "#d97706"
                          : "#dc2626",
                    fontWeight: 700,
                  }}
                >
                  {new Date(studentAppData.lastUpdate).toLocaleString()}
                </span>

              </p>

            )}

            <p>

              <strong>Attempted Questions:</strong>{" "}

              {studentAppData?.attemptedQuestions ?? 0}

            </p>

            <p>

              <strong>Correct Questions:</strong>{" "}

              {studentAppData?.correctQuestions ?? 0}

            </p>

            <p>
              <strong>Accuracy:</strong>{" "}
              <span
                className="font-bold"
                style={{
                  color:
                    (studentAppData?.attemptedQuestions
                      ? Math.round(
                          ((studentAppData.correctQuestions ?? 0) /
                            studentAppData.attemptedQuestions) *
                            100
                        )
                      : 0) >= 80
                      ? "#047857"
                      : (studentAppData?.attemptedQuestions
                          ? Math.round(
                              ((studentAppData.correctQuestions ?? 0) /
                                studentAppData.attemptedQuestions) *
                                100
                            )
                          : 0) >= 60
                      ? "#d97706"
                      : "#dc2626"
                }}
              >
                {studentAppData?.attemptedQuestions
                  ? Math.round(
                      ((studentAppData.correctQuestions ?? 0) /
                        studentAppData.attemptedQuestions) *
                        100
                    )
                  : 0}
                %
              </span>
            </p>

            {studentAppData?.recentActivity && (

            <p>

              <strong>Recent Activity:</strong>

              <span style={{ display: "block", marginTop: "2px" }}>

                {studentAppData.recentActivity.moduleTitle ||

                  studentAppData.recentActivity.moduleId ||

                  "Activity"}

                {" — Question "}

                {studentAppData.recentActivity.questionIndex ?? "N/A"}

              </span>

            </p>

          )}

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

                consultant: student.consultant,

                passportNumber: student.passportNumber,

                currentCourse: student.currentCourse

              });

              setSaveConfirmation(true);

            }}

          >

            Save Changes

          </button>

        )}

        {saveConfirmation && (

          <div className="student-save-modal-overlay">

            <div

              className="student-save-modal"

              role="dialog"

              aria-modal="true"

              aria-labelledby="student-save-title"

            >

              <div className="student-save-modal-icon">✓</div>

              <h3 id="student-save-title">Student Details Updated</h3>

              <p>

                The student information has been saved successfully.

              </p>

              <button

                type="button"

                className="student-save-modal-button"

                onClick={() => setSaveConfirmation(false)}

              >

                Done

              </button>

            </div>

          </div>

        )}

        {/* COURSE CYCLE SYSTEM */}

        {canManageCourses && (

          <div className="course-section">

            <h3>Course Cycle</h3>

            <div className="current-course-card">

              <h4>Current Course</h4>

              <p><strong>Course ID:</strong> {student.currentCourse.courseId}</p>

              <p>

                <strong>Course Start:</strong>

                <input

                  type="text"

                  value={student.currentCourse.startDate || ""}

                  placeholder="e.g. 12 Jan 2024"

                  onChange={(e) =>

                    setStudent({

                      ...student,

                      currentCourse: {

                        ...student.currentCourse,

                        startDate: e.target.value

                      }

                    })

                  }

                />

              </p>

              <p>

                <strong>Course Finish:</strong>

                <input

                  type="text"

                  value={student.currentCourse.endDate || ""}

                  placeholder="e.g. 12 Mar 2024"

                  onChange={(e) =>

                    setStudent({

                      ...student,

                      currentCourse: {

                        ...student.currentCourse,

                        endDate: e.target.value

                      }

                    })

                  }

                />

              </p>

              <p><strong>Exercises Completed:</strong> {studentAppData?.attemptedQuestions ?? 0} / 3,188</p>

              <div

                className="mock-test-results-section"

                style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #E2E8F0" }}

              >

                <h4>Mock Test Results</h4>

                {(student.mockTestResults || []).length > 0 ? (

                  <div

                    className="mock-test-results-list"

                    style={{ display: "grid", gap: "8px", marginBottom: "12px" }}

                  >

                    {student.mockTestResults.map((result) => (

                      <div

                        key={result.id}

                        className="mock-test-result-row"

                        style={{ display: "flex", justifyContent: "space-between", gap: "12px", alignItems: "center", padding: "10px 12px", background: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: "8px" }}

                      >

                        <span>Mock Test {result.testNumber}</span>

                        <span>{result.date}</span>

                        <strong>{result.score} / 90</strong>

                      </div>

                    ))}

                  </div>

                ) : (

                  <p>No Mock Test results recorded.</p>

                )}

                <form

                  style={{ display: "flex", flexWrap: "wrap", gap: "8px", alignItems: "center" }}

                  onSubmit={async (e) => {

                    e.preventDefault();

                    const form = e.currentTarget;

                    const date = form.elements.mockTestDate.value.trim();

                    const score = form.elements.mockTestScore.value.trim();

                    const saved = await addMockTestResult(date, score);

                    if (saved) form.reset();

                  }}

                >

                  <input

                    name="mockTestDate"

                    type="text"

                    placeholder="Date e.g. 07/10/2026"

                    aria-label="Mock Test date"

                    style={{ flex: "1 1 180px", minWidth: "160px" }}

                  />

                  <input

                    name="mockTestScore"

                    type="number"

                    min="0"

                    max="90"

                    step="1"

                    placeholder="Score / 90"

                    aria-label="Mock Test score"

                    style={{ flex: "0 1 130px", minWidth: "110px" }}

                  />

                  <button type="submit" className="save-button">Add Mock Test Result</button>

                </form>

              </div>

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

              <p><strong>Exercises Completed:</strong> {studentAppData?.attemptedQuestions ?? 0} / 3,188</p>

              <p><strong>Correct Questions:</strong> {studentAppData?.correctQuestions ?? 0}</p>

            </div>

            <div className="activity-section">

              <h4>Recent Activity</h4>

              <ul className="activity-list">

                {studentAppData?.recentActivity

                  ? <li>

                      {studentAppData.recentActivity.moduleTitle ||

                        studentAppData.recentActivity.moduleId ||

                        "Activity"}

                      {" — Question "}

                      {studentAppData.recentActivity.questionIndex ?? "N/A"}

                    </li>

                  : <li>No recent activity</li>}

              </ul>

            </div>

            {/* COURSE PROGRESS CHARTS */}

            <div className="charts-section">

              {/* Reading Performance */}

              <div className="chart-card">
                <h4>Reading Performance</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={
                      studentAppData?.performanceData
                        ? [
                            {
                              metric: "Reading Speed (words/min)",
                              score: Number(studentAppData.performanceData.reading_speed ?? 0)
                            }
                          ]
                        : []
                    }
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="score" fill="#4f46e5" name="Reading" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Writing Performance */}

              <div className="chart-card">
                <h4>Writing Performance</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={
                      studentAppData?.performanceData
                        ? [
                            {
                              metric: "Grammar (%)",
                              score: Number(studentAppData.performanceData.grammar ?? 0)
                            },
                            {
                              metric: "Vocabulary (%)",
                              score: Number(studentAppData.performanceData.vocabulary ?? 0)
                            },
                            {
                              metric: "Accuracy (%)",
                              score: Number(studentAppData.performanceData.writing_accuracy ?? 0)
                            }
                          ]
                        : []
                    }
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#10b981" name="Writing" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Speaking Performance */}

              <div className="chart-card">
                <h4>Speaking Performance</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={
                      studentAppData?.performanceData
                        ? [
                            {
                              metric: "Fluency (%)",
                              score: Number(studentAppData.performanceData.fluency ?? 0)
                            },
                            {
                              metric: "Pronunciation (%)",
                              score: Number(studentAppData.performanceData.pronunciation ?? 0)
                            }
                          ]
                        : []
                    }
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#f59e0b" name="Speaking" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Listening Performance */}

              <div className="chart-card">
                <h4>Listening Performance</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart
                    data={
                      studentAppData?.performanceData
                        ? [
                            {
                              metric: "Listening Recall (%)",
                              score: Number(studentAppData.performanceData.listening_recall ?? 0)
                            }
                          ]
                        : []
                    }
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="metric" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#ec4899" name="Listening" />
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
