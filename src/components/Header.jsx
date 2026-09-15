import "./Header.css";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { teacherAuth } from "../teacherFirebase";
import { signOut } from "firebase/auth";
import { FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ onAddStudent }) {
  const { roleData } = useAuth();
  const navigate = useNavigate();

  const displayName = roleData?.name || "User";

  const handleLogout = async () => {
    try {
      // Sign out of BOTH Firebase projects.
      //
      // Existing dashboard authentication:
      //     bba-web-e188
      //
      // Teacher analytics authentication:
      //     teacher-dashboard-80e21

      await Promise.allSettled([
        signOut(auth),
        signOut(teacherAuth),
      ]);

      navigate("/login");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="header">
      <div className="header-left">
        <h1>
          Welcome back, {displayName}{" "}
          <span className="wave-hand">👋</span>
        </h1>
      </div>

      <div className="header-right">
        <button
          className="header-add-student"
          onClick={onAddStudent}
        >
          <FaUserPlus size={18} />
          <span>Add Student</span>
        </button>

        <button
          className="header-logout"
          onClick={handleLogout}
        >
          <FaSignOutAlt size={18} />
          <span>Logout</span>
        </button>

        <img
          src="/icon.png"
          alt="Logo"
          className="header-logo"
        />
      </div>
    </header>
  );
}