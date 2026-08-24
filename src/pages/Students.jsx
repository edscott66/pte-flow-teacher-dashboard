import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../AuthContext";
import DashboardCard from "../components/DashboardCard";
import StudentsTable from "../components/StudentsTable";
import AddStudentForm from "../components/Teacher/AddStudentForm";
import QRCode from "react-qr-code";
import "./Students.css";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaKey,
  FaBullhorn,
  FaUserPlus,
  FaTimes
} from "react-icons/fa";

export default function Students() {
  const navigate = useNavigate();
  const location = useLocation();
  const { roleData } = useAuth();
  const qrRef = useRef(null);

  const role = roleData?.role;
  const teacherClass = roleData?.className;
  const consultantList = roleData?.assignedStudents || [];

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);

  const calculateAverage = (list) => {
    const scores = list.map((s) => s.averageScore || 0);
    if (scores.length === 0) return "N/A";
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    return avg.toFixed(1);
  };

  const calculateWeeklyActivity = (list) => {
    return list.reduce((sum, s) => sum + (s.activity?.length || 0), 0);
  };

  const countClasses = (list) => {
    const classes = new Set(list.map((s) => s.className));
    return classes.size;
  };

  const loadStudents = async () => {
    try {
      setLoading(true);
      const snap = await getDocs(collection(db, "students"));
      let list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      if (role === "teacher") {
        list = list.filter((s) => s.className === teacherClass);
      }

      if (role === "consultant") {
        list = list.filter((s) => consultantList.includes(s.id));
      }

      setStudents(list);
    } catch (err) {
      console.error("Error loading students:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [role]);

  // Check if navigation state wants to show the form
  useEffect(() => {
    if (location.state?.showAddForm) {
      setShowAddForm(true);
      navigate("/students", { replace: true, state: {} });
    }
  }, [location, navigate]);

  // Listen for custom event from Header
  useEffect(() => {
    const handleShowForm = () => {
      setShowAddForm(true);
    };
    
    window.addEventListener("showAddStudentForm", handleShowForm);
    
    return () => {
      window.removeEventListener("showAddStudentForm", handleShowForm);
    };
  }, []);

  const handleStudentAdded = () => {
    setShowAddForm(false);
    loadStudents();
  };

  const toggleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  // ===== QR CODE FUNCTIONS =====
  const getRegistrationUrl = () => {
    const baseUrl = "http://192.168.0.150:5173";
    const params = new URLSearchParams();
    if (teacherClass) params.set("class", teacherClass);
    if (roleData?.name) params.set("consultant", roleData.name);
    return `${baseUrl}/register?${params.toString()}`;
  };

  const downloadQRCode = () => {
    const svg = qrRef.current?.querySelector("svg");
    if (!svg) return;
    
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const svgData = new XMLSerializer().serializeToString(svg);
    const img = new Image();
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);
    
    img.onload = () => {
      canvas.width = img.width * 2;
      canvas.height = img.height * 2;
      ctx.scale(2, 2);
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      
      const link = document.createElement("a");
      link.download = `student-registration-qr.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    };
    img.src = url;
  };

  if (loading) {
    return (
      <div className="page-content">
        <div className="spinner"></div>
        <p>Loading students...</p>
      </div>
    );
  }

  return (
    <div className="page-content">

      {/* Header */}
      <div className="students-header">
        <h2>
          Students
          <span>{students.length} total</span>
        </h2>
      </div>

      {/* Stats Cards */}
      <div className="students-stats">
        {role === "teacher" && (
          <>
            <div className="stat-card">
              <h3>Class Size</h3>
              <p>{students.length}</p>
              <div className="stat-sub">Students in {teacherClass}</div>
            </div>
            <div className="stat-card">
              <h3>Average Score</h3>
              <p>{calculateAverage(students)}</p>
              <div className="stat-sub">Class average</div>
            </div>
            <div className="stat-card">
              <h3>Weekly Activity</h3>
              <p>{calculateWeeklyActivity(students)}</p>
              <div className="stat-sub">Total this week</div>
            </div>
          </>
        )}

        {role === "admin" && (
          <>
            <div className="stat-card">
              <h3>Total Students</h3>
              <p>{students.length}</p>
              <div className="stat-sub">School-wide</div>
            </div>
            <div className="stat-card">
              <h3>Total Classes</h3>
              <p>{countClasses(students)}</p>
              <div className="stat-sub">Active classes</div>
            </div>
            <div className="stat-card">
              <h3>School Average</h3>
              <p>{calculateAverage(students)}</p>
              <div className="stat-sub">All students</div>
            </div>
          </>
        )}

        {role === "consultant" && (
          <>
            <div className="stat-card">
              <h3>Assigned Students</h3>
              <p>{students.length}</p>
              <div className="stat-sub">Your caseload</div>
            </div>
            <div className="stat-card">
              <h3>Average Progress</h3>
              <p>{calculateAverage(students)}</p>
              <div className="stat-sub">Across clients</div>
            </div>
            <div className="stat-card">
              <h3>Recent Activity</h3>
              <p>{calculateWeeklyActivity(students)}</p>
              <div className="stat-sub">This week</div>
            </div>
          </>
        )}
      </div>

      {/* ===== QR CODE SECTION ===== */}
      <div className="qr-code-section">
        <div className="qr-code-card">
          <div className="qr-code-header">
            <h3>📱 Student Self-Registration</h3>
            <p>Students can scan this QR code to register themselves</p>
          </div>
          <div className="qr-code-content">
            <div className="qr-code-display" ref={qrRef}>
              <QRCode
                value={getRegistrationUrl()}
                size={180}
                level="H"
                includemargin={true}
                bgColor="#ffffff"
                fgColor="#2563eb"
              />
            </div>
            <div className="qr-code-info">
              <p><strong>Class:</strong> {teacherClass || "All Classes"}</p>
              <p><strong>Consultant:</strong> {roleData?.name || "Not Set"}</p>
              <p><strong>QR Format:</strong> {getRegistrationUrl()}</p>
              <div className="qr-code-buttons">
                <button 
                  className="copy-link-btn"
                  onClick={() => {
                    navigator.clipboard.writeText(getRegistrationUrl());
                    alert("Registration link copied to clipboard!");
                  }}
                >
                  📋 Copy Registration Link
                </button>
                <button 
                  className="download-qr-btn"
                  onClick={downloadQRCode}
                >
                  ⬇️ Download QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MANUAL ADD STUDENT FORM - Only ONE form ===== */}
      {showAddForm && (
        <div className="add-student-section">
          <div className="add-student-header">
            <div className="add-student-title">
              <FaUserPlus className="add-student-icon" />
              <h3>Manual Add Student</h3>
            </div>
            <button className="close-form-btn" onClick={toggleAddForm}>
              <FaTimes />
            </button>
          </div>
          <p className="add-student-hint">
            ⚠️ Use this form only if students are having trouble with the QR code.
            <br />
            <span className="hint-sub">The QR code registration is the recommended method.</span>
          </p>
          <AddStudentForm onStudentAdded={handleStudentAdded} />
        </div>
      )}

      {/* Students Table */}
      <StudentsTable
        students={students}
        refreshStudents={loadStudents}
        onView={(id) => navigate(`/students/${id}`)}
      />

    </div>
  );
}