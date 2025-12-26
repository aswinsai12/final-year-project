import { alerts } from "../data/mockData";

export default function Alerts() {
  return (
    <main className="main">
      <h1>Alerts</h1>

      {alerts.map(a => (
        <div key={a.id} className="card" style={{ marginBottom: "15px" }}>
          <p className={a.level}>{a.message}</p>
        </div>
      ))}
    </main>
  );
}
