import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>SmartMed</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/patients">Patients</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/settings">Settings</Link>
      </nav>
    </aside>
  );
}
