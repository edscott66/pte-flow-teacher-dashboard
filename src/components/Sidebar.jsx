import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthContext";
import "./Sidebar.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";

export default function Sidebar({ sidebarOpen, onToggle }) {
  const { roleData } = useAuth();
  const role = roleData?.role;

  return (
    <div className="sidebar-wrapper">
      <div className={`sidebar-container ${sidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-card">
          <h2 className="sidebar-title">Dashboard</h2>

          <nav className="sidebar-links">
            {/* Overview - Using emoji with color */}
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="sidebar-icon" style={{ color: '#3b82f6', fontSize: '22px' }}>📊</span>
              <span>Overview</span>
            </NavLink>

            <NavLink to="/students" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="sidebar-icon" style={{ color: '#22c55e', fontSize: '22px' }}>👨‍🎓</span>
              <span>Students</span>
            </NavLink>

            {role === "teacher" && (
              <>
                <NavLink to="/activation-codes" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#f59e0b', fontSize: '22px' }}>🔑</span>
                  <span>Activation Codes</span>
                </NavLink>

                <NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#8b5cf6', fontSize: '22px' }}>📈</span>
                  <span>Analytics</span>
                </NavLink>

                <NavLink to="/broadcast" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#ec4899', fontSize: '22px' }}>📢</span>
                  <span>Broadcast</span>
                </NavLink>
              </>
            )}

            {role === "admin" && (
              <>
                <NavLink to="/admin-tools" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#ef4444', fontSize: '22px' }}>🛠️</span>
                  <span>Admin Tools</span>
                </NavLink>

                <NavLink to="/classroom" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#06b6d4', fontSize: '22px' }}>🏫</span>
                  <span>Classroom</span>
                </NavLink>

                <NavLink to="/analytics" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#8b5cf6', fontSize: '22px' }}>📈</span>
                  <span>Analytics</span>
                </NavLink>

                <NavLink to="/broadcast" className={({ isActive }) => isActive ? "active" : ""}>
                  <span className="sidebar-icon" style={{ color: '#ec4899', fontSize: '22px' }}>📢</span>
                  <span>Broadcast</span>
                </NavLink>

                <NavLink to="/attendance" className={({ isActive }) => isActive ? "active" : ""}>
                  <FaClipboardList className="sidebar-icon" />
                  <span>Attendance</span>
                </NavLink>
              </>
            )}

            {role === "consultant" && (
              <NavLink to="/reports" className={({ isActive }) => isActive ? "active" : ""}>
                <span className="sidebar-icon" style={{ color: '#f97316', fontSize: '22px' }}>📋</span>
                <span>Reports</span>
              </NavLink>
            )}

            <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="sidebar-icon" style={{ color: '#6366f1', fontSize: '22px' }}>👤</span>
              <span>Profile</span>
            </NavLink>

            <NavLink to="/settings" className={({ isActive }) => isActive ? "active" : ""}>
              <span className="sidebar-icon" style={{ color: '#6b7280', fontSize: '22px' }}>⚙️</span>
              <span>Settings</span>
            </NavLink>
          </nav>
        </div>
      </div>

      <button 
        className={`sidebar-toggle ${sidebarOpen ? "" : "closed"}`}
        onClick={onToggle}
      >
        {sidebarOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
      </button>
    </div>
  );
}