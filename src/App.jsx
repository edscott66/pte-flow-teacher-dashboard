import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./AuthContext";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Overview from "./pages/Overview";
import Classroom from "./pages/Classroom";
import Students from "./pages/Students";
import StudentDetail from "./pages/StudentDetail";
import ActivationCodes from "./pages/ActivationCodes";
import Settings from "./pages/Settings";
import AdminTools from "./pages/AdminTools";   // ⭐ Make sure this is imported
import Profile from "./pages/Profile";

import Login from "./pages/Login";
import "./styles/global.css";

export default function App() {
  const { user, roleData, loading } = useAuth();

  // ⭐ Add this here
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (loading) {
    return <div className="app-loading">Loading...</div>;
  }

  // TEMPORARILY DISABLED LOGIN
if (!user) {
  return <Login />;
 }

  return (
    <div className="app-container">
      <Header sidebarOpen={sidebarOpen} />
      <Sidebar onToggle={setSidebarOpen} sidebarOpen={sidebarOpen} />

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
        </Routes>
      </div>
    </div>
  );
}