import { NavLink } from "react-router-dom";
import theme from "../theme";
import "../styles/sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>PTE Flow</h2>
        <p>Teacher Dashboard</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/" className="nav-item">Overview</NavLink>
        <NavLink to="/classroom" className="nav-item">Classroom</NavLink>
        <NavLink to="/students" className="nav-item">Students</NavLink>
        <NavLink to="/activation-codes" className="nav-item">Activation Codes</NavLink>
        <NavLink to="/settings" className="nav-item">Settings</NavLink>
      </nav>
    </div>
  );
}