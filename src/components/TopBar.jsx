import theme from "../theme";

export default function TopBar({ title }) {
  return (
    <div
      className="topbar-container"
      style={{
        backgroundColor: theme.colors.white,
        padding: "16px",
        borderBottom: `1px solid ${theme.colors.borderGrey}`,
        boxShadow: `0 2px 4px ${theme.colors.shadow}`
      }}
    >
      <h1
        className="topbar-title"
        style={{ margin: 0, color: theme.colors.textDark }}
      >
        {title}
      </h1>
    </div>
  );
}