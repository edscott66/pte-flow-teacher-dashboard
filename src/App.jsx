import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Overview from "./pages/Overview";
import Classroom from "./pages/Classroom";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import ActivationCodes from "./pages/ActivationCodes";
import Settings from "./pages/Settings";
import AdminTools from "./pages/AdminTools";
import Profile from "./pages/Profile";
import StudentRegistration from "./pages/StudentRegistration";

import Login from "./pages/Login";
import "./styles/global.css";

import Analytics from "./pages/Analytics";
import Broadcast from "./pages/Broadcast";
import Reports from "./pages/Reports";

export default function App() {
  const { user, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddStudent = () => {
    // If already on students page, just show the form
    if (location.pathname === "/students") {
      // We need to trigger the form to show
      // Using a custom event or we can use a ref
      window.dispatchEvent(new CustomEvent("showAddStudentForm"));
    } else {
      // Navigate to students page with state
      navigate("/students", { state: { showAddForm: true } });
    }
  };

  if (loading) {
    return <div className="app-loading">Loading...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app-container">
      <Sidebar sidebarOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <Header onAddStudent={handleAddStudent} />
      
      <div className={`app-content ${sidebarOpen ? "shifted" : "collapsed"}`}>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/activation-codes" element={<ActivationCodes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin-tools" element={<AdminTools />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/register" element={<StudentRegistration />} />
        </Routes>
      </div>
    </div>
  );
}