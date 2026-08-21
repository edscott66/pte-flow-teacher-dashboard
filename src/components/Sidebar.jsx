import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Sidebar.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaKey,
  FaBullhorn,
  FaChartLine,
  FaUser,
  FaCog
} from "react-icons/fa";

export default function Sidebar({ sidebarOpen, onToggle }) {
  const { roleData } = useAuth();
  const role = roleData?.role;

  console.log("SIDEBAR LOADED FROM:", import.meta.url);

  return (
    <div className="sidebar-wrapper">

      {/* SIDEBAR CONTAINER (slides in/out) */}
      <div className={`sidebar-container ${sidebarOpen ? "" : "closed"}`}>
        <div className="sidebar-card">
          <h2 className="sidebar-title">Dashboard</h2>

          <div className="sidebar-links">

            <NavLink to="/overview">
              <FaChartLine className="sidebar-icon" color="#60a5fa" />
              <span>Overview</span>
            </NavLink>

            <NavLink to="/students">
              <FaUserGraduate className="sidebar-icon" color="#facc15" />
              <span>Students</span>
            </NavLink>

            {role === "teacher" && (
              <NavLink to="/activation-codes">
                <FaKey className="sidebar-icon" color="#fb923c" />
                <span>Activation Codes</span>
              </NavLink>
            )}

            {role === "consultant" && (
              <NavLink to="/reports">
                <FaChalkboardTeacher className="sidebar-icon" color="#34d399" />
                <span>My Reports</span>
              </NavLink>
            )}

            {role === "admin" && (
              <>
                <NavLink to="/admin-tools">
                  <FaKey className="sidebar-icon" color="#eab308" />
                  <span>Admin Tools</span>
                </NavLink>

                <NavLink to="/classroom">
                  <FaChalkboardTeacher className="sidebar-icon" color="#34d399" />
                  <span>Classes</span>
                </NavLink>

                <NavLink to="/analytics">
                  <FaChartLine className="sidebar-icon" color="#60a5fa" />
                  <span>Analytics</span>
                </NavLink>

                <NavLink to="/broadcast">
                  <FaBullhorn className="sidebar-icon" color="#f472b6" />
                  <span>Broadcast</span>
                </NavLink>
              </>
            )}

            {/* Bottom section */}
            <NavLink to="/profile">
              <FaUser className="sidebar-icon" color="#ffffff" />
              <span>Profile</span>
            </NavLink>

            <NavLink to="/settings">
              <FaCog className="sidebar-icon" color="#ffffff" />
              <span>Settings</span>
            </NavLink>

          </div>
        </div>
      </div>

      {/* TOGGLE BUTTON — OUTSIDE THE CONTAINER */}
      <div
        className={`sidebar-toggle ${sidebarOpen ? "" : "closed"}`}
        onClick={() => onToggle(!sidebarOpen)}
      >
        {sidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </div>

    </div>
  );
}