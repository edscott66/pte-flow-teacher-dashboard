import TopBar from "../components/TopBar";
import "./Overview.css";

export default function Overview() {
  return (
    <>
      <TopBar title="Overview" />
      <div className="overview-page">
        <h2>Welcome back, Teacher</h2>
        <p>This is your dashboard overview.</p>
      </div>
    </>
  );
}