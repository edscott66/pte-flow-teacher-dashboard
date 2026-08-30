import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";  // ← Added Navigate
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
import AttendanceDashboard from "./pages/AttendanceDashboard";

import Login from "./pages/Login";
import "./styles/global.css";

import Analytics from "./pages/Analytics";
import Broadcast from "./pages/Broadcast";
import Reports from "./pages/Reports";

export default function App() {
  const { user, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (loading) {
    return <div className="app-loading">Loading...</div>;
  }

      // ⭐ FORCE /register to render without any authentication checks
    if (window.location.pathname === '/register') {
      return <StudentRegistration />;
    }

  // ✅ Public routes (accessible without login)
  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<StudentRegistration />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  // ✅ Protected routes (require login)
  return (
    <div className="app-container">
      <Sidebar sidebarOpen={sidebarOpen} onToggle={toggleSidebar} />
      <Header />
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
          <Route path="/attendance" element={<AttendanceDashboard />} />
        </Routes>
      </div>
    </div>
  );
}
