import { useAuth } from "../AuthContext";
import { useLocation } from "react-router-dom";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBullhorn,
  FaChartLine,
  FaKey,
  FaSignOutAlt,
  FaUser
} from "react-icons/fa";
import "./Sidebar.css";

export default function Sidebar({ onToggle, sidebarOpen }) {
  const { roleData, logout } = useAuth();
  const role = roleData?.role;
  const currentPath = useLocation().pathname;

  const isClosed = sidebarOpen === false;

  return (
    <div className="sidebar-wrapper">

      {/* COLLAPSING SIDEBAR */}
      <div className={`sidebar-container ${isClosed ? "closed" : ""}`}>
        <div className="sidebar-card">

          {!isClosed && <h2 className="sidebar-title">Menu</h2>}

          <div className="sidebar-links">

            <a href="/students" className={currentPath === "/students" ? "active" : ""}>
              <FaUserGraduate className="sidebar-icon" color="#facc15" />
              {!isClosed && <span>Students</span>}
            </a>

            <a href="/classes" className={currentPath === "/classes" ? "active" : ""}>
              <FaChalkboardTeacher className="sidebar-icon" color="#22c55e" />
              {!isClosed && <span>Classes</span>}
            </a>

            {(role === "teacher" || role === "admin") && (
              <>
                <a href="/broadcast" className={currentPath === "/broadcast" ? "active" : ""}>
                  <FaBullhorn className="sidebar-icon" color="#ec4899" />
                  {!isClosed && <span>Broadcast</span>}
                </a>

                <a href="/analytics" className={currentPath === "/analytics" ? "active" : ""}>
                  <FaChartLine className="sidebar-icon" color="#3b82f6" />
                  {!isClosed && <span>Analytics</span>}
                </a>
              </>
            )}

            {role === "admin" && (
              <>
                <a href="/activation-codes" className={currentPath === "/activation-codes" ? "active" : ""}>
                  <FaKey className="sidebar-icon" color="#f97316" />
                  {!isClosed && <span>Activation Codes</span>}
                </a>

                <a href="/admin-tools" className={currentPath === "/admin-tools" ? "active" : ""}>
                  <FaKey className="sidebar-icon" color="#f97316" />
                  {!isClosed && <span>Admin Tools</span>}
                </a>
              </>
            )}

            <a href="/profile" className={currentPath === "/profile" ? "active" : ""}>
              <FaUser className="sidebar-icon" color="#ffffff" />
              {!isClosed && <span>Profile</span>}
            </a>
          </div>
        </div>
      </div>

      {/* ALWAYS VISIBLE TOGGLE BUTTON */}
      <div
        className={`sidebar-toggle ${isClosed ? "closed" : ""}`}
        onClick={() => onToggle(prev => !prev)}
      >
        {isClosed ? "→" : "←"}
      </div>

    </div>
  );
}