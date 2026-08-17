import TopBar from "../components/TopBar";

export default function Overview() {
  return (
    <>
      <TopBar title="Overview" />
      <div className="page-content">
        <h2>Welcome back, Teacher</h2>
        <p>This is your dashboard overview.</p>
      </div>
    </>
  );
}