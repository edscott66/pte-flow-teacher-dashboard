import { useEffect, useMemo, useState } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";

function parseJsonValue(value) {
  if (!value) return null;

  if (typeof value !== "string") return value;

  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function getStudentAppData(student) {
  if (!student?.activationCode) {
    return { status: "No activation code" };
  }

  return null;
}

function formatDate(value) {
  if (!value) return "N/A";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function formatDateTime(value) {
  if (!value) return "N/A";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return String(value);

  return date.toLocaleString();
}

function valueOrNA(value) {
  return value === undefined || value === null || value === "" ? "N/A" : value;
}

function Section({ title, children, accent = "#2563eb" }) {
  return (
    <section
      style={{
        marginTop: "28px",
        padding: "22px",
        background: "#ffffff",
        border: "1px solid #dbe4ef",
        borderTop: `5px solid ${accent}`,
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)"
      }}
    >
      <h2
        style={{
          margin: "0 0 18px",
          color: accent,
          fontSize: "22px"
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function InfoGrid({ items }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
        gap: "20px 28px"
      }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <div
            style={{
              fontWeight: 700,
              marginBottom: "7px",
              color: "#111827"
            }}
          >
            {item.label}
          </div>
          <div style={{ color: "#1f2937" }}>
            {valueOrNA(item.value)}
          </div>
        </div>
      ))}
    </div>
  );
}

function PerformanceCard({ title, accent, metrics }) {
  return (
    <div
      style={{
        border: "1px solid #dbe4ef",
        borderTop: `5px solid ${accent}`,
        borderRadius: "10px",
        padding: "18px",
        background: "#f8fafc"
      }}
    >
      <h3
        style={{
          margin: "0 0 14px",
          color: accent,
          fontSize: "18px"
        }}
      >
        {title}
      </h3>

      {metrics.map((metric) => (
        <div
          key={metric.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            padding: "9px 0",
            borderBottom: "1px solid #e5e7eb"
          }}
        >
          <span>{metric.label}</span>
          <strong>{valueOrNA(metric.value)}</strong>
        </div>
      ))}
    </div>
  );
}

function StudentReport({ student, studentAppData, onBack }) {
  function downloadPdf() {
    window.print();
  }
  const accuracy = studentAppData?.attemptedQuestions
    ? Math.round(
        ((studentAppData.correctQuestions ?? 0) /
          studentAppData.attemptedQuestions) *
          100
      )
    : 0;

  const performance = studentAppData?.performanceData;
  const currentCourse = student.currentCourse || {};
  const pastCourses = Array.isArray(student.courses)
    ? student.courses
    : [];
  const mockTestResults = Array.isArray(student.mockTestResults)
    ? student.mockTestResults
    : [];

  return (
    <div
      className="page-content"
      style={{ maxWidth: "1400px" }}
    >
      <div
        className="report-actions"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        <button
          type="button"
          onClick={downloadPdf}
          className="report-download-button"
          style={{
            border: "none",
            background: "#2563eb",
            color: "#ffffff",
            padding: "10px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: 700
          }}
        >
          Download PDF
        </button>

        <button
          type="button"
          onClick={onBack}
        style={{
          border: "none",
          background: "#f3f4f6",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "15px"
        }}
      >
          ← Back to Students
        </button>
      </div>

      <div className="report-print-header">
        <div className="report-print-logo">
          <img
            src="/icon.png"
            alt="Big Ben"
          />
        </div>

        <div className="report-print-details">
          <div>
            <span>Name</span>
            <strong>{student.name || "Unnamed Student"}</strong>
          </div>

          <div>
            <span>Class</span>
            <strong>{valueOrNA(student.className)}</strong>
          </div>

          <div>
            <span>Consultant</span>
            <strong>{valueOrNA(student.consultant)}</strong>
          </div>
        </div>
      </div>

      <style>{`
        .report-print-header {
          display: none;
        }

        @media print {
          body {
            background: #ffffff !important;
          }

          .header,
          .sidebar-wrapper {
            display: none !important;
          }

          .app-content,
          .app-content.shifted {
            margin-left: 0 !important;
            width: 100% !important;
          }

          .report-actions {
            display: none !important;
          }

          .report-print-header {
            display: block !important;
            width: 100% !important;
            margin: -10px 0 24px !important;
            padding: 0 0 5px !important;
            border-bottom: 2px solid #dbe4ef !important;
            box-sizing: border-box !important;
            overflow: visible !important;
            position: relative !important;
            z-index: 9999 !important;
            top: 0 !important;
          }

          .report-print-logo {
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
            margin-bottom: 16px !important;
          }

          .report-print-logo img {
            width: 215px !important;
            height: 215px !important;
            object-fit: contain !important;
          }

          .report-print-details {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 24px !important;
            text-align: center !important;
          }

          .report-print-details > div {
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
          }

          .report-print-details span {
            color: #64748b !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            text-transform: uppercase !important;
            letter-spacing: 0.08em !important;
          }

          .report-print-details strong {
            color: #111827 !important;
            font-size: 16px !important;
          }

          .page-content {
            max-width: none !important;
            width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }

          section {
            break-inside: avoid;
            box-shadow: none !important;
          }
        }
      `}</style>

      <Section
        title="Student Report"
        accent="#2563eb"
      >
        <h3
          style={{
            margin: "0 0 22px",
            fontSize: "22px"
          }}
        >
          {student.name || "Unnamed Student"}
        </h3>

        <InfoGrid
          items={[
            {
              label: "Student ID",
              value: student.id
            },
            {
              label: "Class",
              value: student.className
            },
            {
              label: "Status",
              value: student.status
            },
            {
              label: "Joined",
              value: student.joined
            },
            {
              label: "Email",
              value: student.email
            },
            {
              label: "Phone",
              value: student.phone
            },
            {
              label: "Consultant",
              value: student.consultant
            },
            {
              label: "Passport / ID",
              value: student.passportNumber
            },
            {
              label: "Activation Code",
              value: student.activationCode
            }
          ]}
        />
      </Section>

      <Section
        title="Course Information"
        accent="#7c3aed"
      >
        <InfoGrid
          items={[
            {
              label: "Course ID",
              value: currentCourse.courseId
            },
            {
              label: "Course Start",
              value: currentCourse.startDate
            },
            {
              label: "Course Finish",
              value: currentCourse.endDate
            },
            {
              label: "Lessons Completed",
              value:
                currentCourse.lessonsCompleted ??
                student.lessonsCompleted ??
                0
            },
            {
              label: "Practice Tests",
              value:
                currentCourse.practiceTests ??
                student.practiceTests ??
                0
            },
            {
              label: "Average Score",
              value:
                currentCourse.averageScore ??
                student.averageScore ??
                "N/A"
            },
            {
              label: "Exercises Completed",
              value: `${studentAppData?.attemptedQuestions ?? 0} / 3,188`
            }
          ]}
        />

        <div style={{ marginTop: "26px" }}>
          <h3
            style={{
              color: "#7c3aed",
              marginBottom: "14px"
            }}
          >
            Mock Test Results
          </h3>

          {mockTestResults.length > 0 ? (
            <div
              style={{
                display: "grid",
                gap: "8px"
              }}
            >
              {mockTestResults.map((result) => (
                <div
                  key={
                    result.id ||
                    `${result.testNumber}-${result.date}`
                  }
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "1fr 1fr auto",
                    gap: "12px",
                    alignItems: "center",
                    padding: "11px 13px",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px"
                  }}
                >
                  <span>
                    Mock Test{" "}
                    {valueOrNA(result.testNumber)}
                  </span>

                  <span>
                    {valueOrNA(result.date)}
                  </span>

                  <strong>
                    {valueOrNA(result.score)} / 90
                  </strong>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ margin: 0 }}>
              No Mock Test results recorded.
            </p>
          )}
        </div>

        <div style={{ marginTop: "26px" }}>
          <h3
            style={{
              color: "#7c3aed",
              marginBottom: "14px"
            }}
          >
            Past Courses
          </h3>

          {pastCourses.length > 0 ? (
            <div
              style={{
                display: "grid",
                gap: "10px"
              }}
            >
              {pastCourses.map((course, index) => (
                <details
                  key={`${course.courseId || "course"}-${index}`}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 700
                    }}
                  >
                    {valueOrNA(course.courseId)} —{" "}
                    {valueOrNA(student.className)}
                  </summary>

                  <div
                    style={{
                      padding:
                        "12px 0 4px 18px",
                      color: "#374151"
                    }}
                  >
                    <p>
                      <strong>Start:</strong>{" "}
                      {valueOrNA(course.startDate)}
                    </p>

                    <p>
                      <strong>End:</strong>{" "}
                      {valueOrNA(course.endDate)}
                    </p>

                    <p>
                      <strong>Activity:</strong>
                    </p>

                    <ul>
                      {course.activity?.length > 0 ? (
                        course.activity.map(
                          (
                            activity,
                            activityIndex
                          ) => (
                            <li key={activityIndex}>
                              {activity}
                            </li>
                          )
                        )
                      ) : (
                        <li>
                          No activity recorded
                        </li>
                      )}
                    </ul>
                  </div>
                </details>
              ))}
            </div>
          ) : (
            <p style={{ margin: 0 }}>
              No past courses recorded.
            </p>
          )}
        </div>
      </Section>

      <Section
        title="Student App"
        accent="#059669"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "18px"
          }}
        >
          <div>
            <strong>Status</strong>

            <p
              style={{
                color:
                  studentAppData?.status ===
                  "Active"
                    ? "#15803d"
                    : "#374151",
                fontWeight: 700,
                marginBottom: 0
              }}
            >
              {valueOrNA(
                studentAppData?.status
              )}
            </p>
          </div>

          <div>
            <strong>Name</strong>

            <p style={{ marginBottom: 0 }}>
              {valueOrNA(studentAppData?.name)}
            </p>
          </div>

          <div>
            <strong>Last Update</strong>

            <p style={{ marginBottom: 0 }}>
              {studentAppData?.lastUpdate
                ? formatDateTime(
                    studentAppData.lastUpdate
                  )
                : "N/A"}
            </p>
          </div>

          <div>
            <strong>
              Attempted Questions
            </strong>

            <p style={{ marginBottom: 0 }}>
              {studentAppData?.attemptedQuestions ??
                0}
            </p>
          </div>

          <div>
            <strong>
              Correct Questions
            </strong>

            <p style={{ marginBottom: 0 }}>
              {studentAppData?.correctQuestions ??
                0}
            </p>
          </div>

          <div>
            <strong>Accuracy</strong>

            <p
              style={{
                marginBottom: 0,
                fontWeight: 700,
                color:
                  accuracy >= 80
                    ? "#047857"
                    : accuracy >= 60
                      ? "#d97706"
                      : "#dc2626"
              }}
            >
              {accuracy}%
            </p>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          <h3
            style={{
              color: "#059669",
              marginBottom: "10px"
            }}
          >
            Recent Activity
          </h3>

          {studentAppData?.recentActivity ? (
            <p style={{ margin: 0 }}>
              {studentAppData.recentActivity
                .moduleTitle ||
                studentAppData.recentActivity
                  .moduleId ||
                "Activity"}

              {" — Question "}

              {studentAppData.recentActivity
                .questionIndex ?? "N/A"}
            </p>
          ) : (
            <p style={{ margin: 0 }}>
              No recent activity recorded.
            </p>
          )}
        </div>
      </Section>

      <Section
        title="Progress & Activity"
        accent="#0f766e"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px"
          }}
        >
          <div
            style={{
              padding: "16px",
              border: "1px solid #cbd5e1",
              borderRadius: "9px",
              background: "#f8fafc"
            }}
          >
            <strong>
              Exercises Completed:
            </strong>{" "}
            {studentAppData?.attemptedQuestions ??
              0}{" "}
            / 3,188
          </div>

          <div
            style={{
              padding: "16px",
              border: "1px solid #cbd5e1",
              borderRadius: "9px",
              background: "#f8fafc"
            }}
          >
            <strong>
              Correct Questions:
            </strong>{" "}
            {studentAppData?.correctQuestions ??
              0}
          </div>
        </div>
      </Section>

      <Section
        title="Performance Results"
        accent="#2563eb"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(2, minmax(0, 1fr))",
            gap: "18px"
          }}
        >
          <PerformanceCard
            title="Reading Performance"
            accent="#4f46e5"
            metrics={[
              {
                label:
                  "Reading Speed (words/min)",
                value:
                  performance?.reading_speed
              }
            ]}
          />

          <PerformanceCard
            title="Writing Performance"
            accent="#10b981"
            metrics={[
              {
                label: "Grammar (%)",
                value: performance?.grammar
              },
              {
                label: "Vocabulary (%)",
                value:
                  performance?.vocabulary
              },
              {
                label: "Accuracy (%)",
                value:
                  performance?.writing_accuracy
              }
            ]}
          />

          <PerformanceCard
            title="Speaking Performance"
            accent="#f59e0b"
            metrics={[
              {
                label: "Fluency (%)",
                value: performance?.fluency
              },
              {
                label: "Pronunciation (%)",
                value:
                  performance?.pronunciation
              }
            ]}
          />

          <PerformanceCard
            title="Listening Performance"
            accent="#ec4899"
            metrics={[
              {
                label:
                  "Listening Recall (%)",
                value:
                  performance?.listening_recall
              }
            ]}
          />
        </div>
      </Section>

      <Section
        title="Attendance"
        accent="#64748b"
      >
        <div
          style={{
            border: "1px solid #dbe4ef",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#ffffff"
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse"
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f8fafc"
                }}
              >
                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom:
                      "1px solid #dbe4ef"
                  }}
                >
                  Date
                </th>

                <th
                  style={{
                    padding: "12px",
                    textAlign: "left",
                    borderBottom:
                      "1px solid #dbe4ef"
                  }}
                >
                  Attendance
                </th>
              </tr>
            </thead>

            <tbody />
          </table>
        </div>

        <p
          style={{
            marginBottom: 0,
            marginTop: "12px",
            color: "#64748b"
          }}
        >
          Attendance data is temporarily
          unavailable and has been left blank.
        </p>
      </Section>
    </div>
  );
}

export default function Reports() {
  const navigate = useNavigate();
  const { roleData } = useAuth();

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] =
    useState(null);
  const [studentAppData, setStudentAppData] =
    useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const role = roleData?.role;
  const consultantList =
    roleData?.assignedStudents || [];

  useEffect(() => {
    async function loadStudents() {
      if (!role) return;

      try {
        setLoading(true);
        setError("");

        const snap = await getDocs(
          collection(db, "students")
        );

        let list = snap.docs.map(
          (studentDoc) => ({
            id: studentDoc.id,
            ...studentDoc.data()
          })
        );

        if (role === "teacher") {
          list = list.filter(
            (student) =>
              student.className ===
              roleData?.className
          );
        }

        if (role === "consultant") {
          list = list.filter((student) =>
            consultantList.includes(student.id)
          );
        }

        setStudents(list);
      } catch (err) {
        console.error(
          "Error loading report students:",
          err
        );

        setError(
          "Unable to load students for reporting."
        );
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, [
    role,
    roleData?.className,
    consultantList
  ]);

  async function loadStudentAppData(student) {
    if (!student?.activationCode) {
      return getStudentAppData(student);
    }

    try {
      const activationRef = doc(
        db,
        "verification_codes",
        student.activationCode
      );

      const activationSnap =
        await getDoc(activationRef);

      if (!activationSnap.exists()) {
        return {
          status: "Activation code not found"
        };
      }

      const activationData =
        activationSnap.data();

      if (
        !activationData.isUsed ||
        !activationData.usedBy
      ) {
        return {
          status: "Not activated"
        };
      }

      const leaderboardRef = doc(
        db,
        "leaderboard",
        activationData.usedBy
      );

      const leaderboardSnap =
        await getDoc(leaderboardRef);

      if (!leaderboardSnap.exists()) {
        return {
          status:
            "Activated — no activity record yet"
        };
      }

      const leaderboardData =
        leaderboardSnap.data();

      const rawQuestions =
        leaderboardData?.localBackup
          ?.pte_flow_attempted_questions ??
        leaderboardData?.attemptedQuestions;

      let attemptedQuestions = 0;

      if (Array.isArray(rawQuestions)) {
        attemptedQuestions =
          rawQuestions.length;
      } else if (
        typeof rawQuestions === "string"
      ) {
        try {
          const parsed =
            JSON.parse(rawQuestions);

          attemptedQuestions =
            Array.isArray(parsed)
              ? parsed.length
              : 0;
        } catch {
          attemptedQuestions = 0;
        }
      }

      return {
        status: "Active",

        name:
          leaderboardData?.localBackup
            ?.name ||
          leaderboardData?.name ||
          "N/A",

        lastUpdate:
          leaderboardData?.lastUpdate ||
          null,

        score:
          leaderboardData?.localBackup
            ?.score ??
          leaderboardData?.score ??
          null,

        attemptedQuestions,

        correctQuestions: Number(
          leaderboardData?.localBackup
            ?.pte_flow_cfa ?? 0
        ),

        incorrectQuestions: Number(
          leaderboardData?.localBackup
            ?.pte_flow_ffa ?? 0
        ),

        totalStudyTime: Number(
          leaderboardData?.localBackup
            ?.pte_flow_total_study_time ?? 0
        ),

        recentActivity: parseJsonValue(
          leaderboardData?.localBackup
            ?.pte_flow_recent_activity
        ),

        performanceData: parseJsonValue(
          leaderboardData?.localBackup
            ?.pte_flow_performance_data
        )
      };
    } catch (err) {
      console.error(
        "Error loading Student App report data:",
        err
      );

      return {
        status:
          "Student App data unavailable"
      };
    }
  }

  async function openReport(student) {
    setSelectedStudent(student);
    setStudentAppData(null);

    const appData =
      await loadStudentAppData(student);

    setStudentAppData(appData);
  }

  const studentRows = useMemo(
    () => students,
    [students]
  );

  if (selectedStudent) {
    return (
      <StudentReport
        student={selectedStudent}
        studentAppData={studentAppData}
        onBack={() => {
          setSelectedStudent(null);
          setStudentAppData(null);
        }}
      />
    );
  }

  return (
    <div className="page-content">
      <h1 className="page-title">
        My Reports
      </h1>

      {loading && (
        <p>Loading students...</p>
      )}

      {error && (
        <p style={{ color: "#dc2626" }}>
          {error}
        </p>
      )}

      {!loading &&
        !error &&
        studentRows.length === 0 && (
          <div className="page-card">
            <p>
              No students are currently
              available for reporting.
            </p>
          </div>
        )}

      {!loading &&
        !error &&
        studentRows.length > 0 && (
          <div
            className="page-card"
            style={{
              padding: 0,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "2fr 1fr 1fr 1fr auto",
                gap: "18px",
                padding: "16px 20px",
                background: "#f8fafc",
                borderBottom:
                  "1px solid #e2e8f0",
                fontWeight: 700
              }}
            >
              <span>STUDENT</span>
              <span>CLASS</span>
              <span>STATUS</span>
              <span>JOINED</span>
              <span>ACTIONS</span>
            </div>

            {studentRows.map((student) => (
              <div
                key={student.id}
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "2fr 1fr 1fr 1fr auto",
                  gap: "18px",
                  alignItems: "center",
                  padding: "20px",
                  borderBottom:
                    "1px solid #e2e8f0"
                }}
              >
                <strong>
                  {student.name ||
                    "Unnamed Student"}
                </strong>

                <span>
                  {valueOrNA(
                    student.className
                  )}
                </span>

                <span>
                  {valueOrNA(
                    student.status
                  )}
                </span>

                <span>
                  {formatDate(student.joined)}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    openReport(student)
                  }
                  style={{
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border:
                      "1px solid #94a3b8",
                    background: "#ffffff",
                    cursor: "pointer"
                  }}
                >
                  View
                </button>
              </div>
            ))}
          </div>
        )}

      <button
        type="button"
        onClick={() =>
          navigate("/students")
        }
        style={{
          marginTop: "24px",
          border: "none",
          background: "#f3f4f6",
          padding: "10px 16px",
          borderRadius: "8px",
          cursor: "pointer"
        }}
      >
        ← Back to Students
      </button>
    </div>
  );
}
