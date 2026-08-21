import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import { useAuth } from "../AuthContext";

import TopBar from "../components/TopBar";
import DashboardCard from "../components/DashboardCard";
import StudentsTable from "../components/StudentsTable";
import "./Students.css";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaKey,
  FaBullhorn
} from "react-icons/fa";

export default function Students() {
  const navigate = useNavigate();
  const { roleData } = useAuth();

  const role = roleData?.role;
  const teacherClass = roleData?.className;
  const consultantList = roleData?.assignedStudents || [];

  const [students, setStudents] = useState([]);

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
      const snap = await getDocs(collection(db, "students"));
      let list = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      // ⭐ ROLE‑BASED FILTERING
      if (role === "teacher") {
        list = list.filter((s) => s.className === teacherClass);
      }

      if (role === "consultant") {
        list = list.filter((s) => consultantList.includes(s.id));
      }

      setStudents(list);
    } catch (err) {
      console.error("Error loading students:", err);
    }
  };

  useEffect(() => {
    loadStudents();
  }, [role]);

  return (
    <>
      <TopBar title="Students" />

      <div className="page-content">

        {/* ⭐ ROLE‑BASED ANALYTICS PANELS */}
        <div className="dashboard-grid">

          {/* Teacher Analytics */}
          {role === "teacher" && (
            <>
              <DashboardCard
                title="Class Size"
                value={students.length}
                icon={<FaUserGraduate color="#facc15" />}
              />
              <DashboardCard
                title="Average Class Score"
                value={calculateAverage(students)}
                icon={<FaChalkboardTeacher color="#34d399" />}
              />
              <DashboardCard
                title="Weekly Activity"
                value={calculateWeeklyActivity(students)}
                icon={<FaBullhorn color="#f472b6" />}
              />
            </>
          )}

          {/* Consultant Analytics */}
          {role === "consultant" && (
            <>
              <DashboardCard
                title="Assigned Students"
                value={students.length}
                icon={<FaUserGraduate color="#facc15" />}
              />
              <DashboardCard
                title="Average Progress"
                value={calculateAverage(students)}
                icon={<FaChalkboardTeacher color="#34d399" />}
              />
              <DashboardCard
                title="Recent Activity"
                value={calculateWeeklyActivity(students)}
                icon={<FaBullhorn color="#f472b6" />}
              />
            </>
          )}

          {/* Admin Analytics */}
          {role === "admin" && (
            <>
              <DashboardCard
                title="Total Students"
                value={students.length}
                icon={<FaUserGraduate color="#facc15" />}
              />
              <DashboardCard
                title="Total Classes"
                value={countClasses(students)}
                icon={<FaChalkboardTeacher color="#34d399" />}
              />
              <DashboardCard
                title="School Average Score"
                value={calculateAverage(students)}
                icon={<FaKey color="#fb923c" />}
              />
            </>
          )}

        </div>

        <StudentsTable
          students={students}
          refreshStudents={loadStudents}
          onView={(id) => navigate(`/students/${id}`)}
        />

      </div>
    </>
  );
}