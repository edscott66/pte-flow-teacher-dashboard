import "./Broadcast.css";
import { useAuth } from "../AuthContext";

export default function Broadcast() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  const handleLock = () => {
    alert("All student devices locked.");
  };

  const handleUnlock = () => {
    alert("All student devices unlocked.");
  };

  const handlePushActivity = () => {
    alert("Activity pushed to all students.");
  };

  return (
    <div className="page-content">
      <h2>Broadcast Controls</h2>
      <p>Manage student device controls for {displayName}.</p>

      <div className="broadcast-controls">
        <button onClick={handleLock}>Lock Devices</button>
        <button onClick={handleUnlock}>Unlock Devices</button>
        <button onClick={handlePushActivity}>Push Activity</button>
      </div>
    </div>
  );
}