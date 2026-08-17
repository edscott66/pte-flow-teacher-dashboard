import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import Classroom from "./pages/Classroom";
import Students from "./pages/Students";
import ActivationCodes from "./pages/ActivationCodes";
import Settings from "./pages/Settings";

import "./styles/global.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/students" element={<Students />} />
          <Route path="/activation-codes" element={<ActivationCodes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}