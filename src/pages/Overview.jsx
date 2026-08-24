import "./Overview.css";
import { useAuth } from "../AuthContext";

export default function Overview() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  return (
    <div className="overview-page">
      <h2 className="page-subtitle">This is your dashboard overview.</h2>
    </div>
  );
}