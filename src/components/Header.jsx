import "./Header.css";
import { useAuth } from "../AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Header({ sidebarOpen }) {
  const { roleData } = useAuth();

  const displayName = roleData?.name || "User";
  const navigate = useNavigate();

  const handleLogout = async () => {
  // await signOut(auth);
  // navigate("/login");   // ⭐ redirect after logout
};

  return (
    <header className={`header ${sidebarOpen ? "shifted" : "collapsed"}`}>
      <div className="header-left">
        <h1>
          Welcome back, {displayName} <span className="wave-hand">👋</span>
        </h1>
      </div>

      <div className="header-right">
        <button className="header-logout" onClick={handleLogout}>
          <FaSignOutAlt size={18} />
          <span>Logout</span>
        </button>

        <img src="/icon.png" alt="Logo" className="header-logo" />
      </div>
    </header>
  );
}