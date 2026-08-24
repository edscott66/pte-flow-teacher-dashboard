import "./Analytics.css";
import { useAuth } from "../AuthContext";

export default function Analytics() {
  const { roleData } = useAuth();
  const role = roleData?.role;
  const displayName = roleData?.name || "User";

  return (
    <div className="page-content">
      <h2>Analytics</h2>
      <p>Analytics dashboard for {displayName}.</p>

      {role === "teacher" && (
        <p>Teacher analytics will appear here.</p>
      )}

      {role === "admin" && (
        <p>Admin analytics will appear here.</p>
      )}

      {role === "consultant" && (
        <p>Consultant analytics will appear here.</p>
      )}
    </div>
  );
}