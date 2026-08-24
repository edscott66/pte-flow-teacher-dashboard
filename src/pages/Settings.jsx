import "./Settings.css";
import { useAuth } from "../AuthContext";

export default function Settings() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  return (
    <div className="page-content">
      <h2>Settings</h2>
      <p>Settings will appear here.</p>
    </div>
  );
}