import { useNavigate } from "react-router-dom";
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

  const students = [
    {
      id: "1",   // ⭐ Make IDs strings to match Firestore document IDs later
      name: "Alicia Tan",
      className: "Class A1",
      status: "active",
      joined: "12 Jan 2024",
      photoUrl: "https://example.com/alicia.jpg"
    },
    {
      id: "2",
      name: "Ben Wong",
      className: "Class B",
      status: "inactive",
      joined: "03 Feb 2024",
      photoUrl: null
    }
  ];

  return (
    <>
      <TopBar title="Students" />

      <div className="page-content">

        <div className="dashboard-grid">
          <DashboardCard
            title="Total Students"
            value="128"
            icon={<FaUserGraduate color="#facc15" />}
          />
          <DashboardCard
            title="Active Classes"
            value="6"
            icon={<FaChalkboardTeacher color="#34d399" />}
          />
          <DashboardCard
            title="Activation Codes"
            value="42"
            icon={<FaKey color="#fb923c" />}
          />
          <DashboardCard
            title="Broadcast Messages"
            value="12"
            icon={<FaBullhorn color="#f472b6" />}
          />
        </div>

        <StudentsTable
          students={students}
          onView={(id) => navigate(`/students/${id}`)}   // ⭐ Pass navigate handler
        />

      </div>
    </>
  );
}