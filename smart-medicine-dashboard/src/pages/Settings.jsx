import { useState } from "react";

export default function Settings() {
  const [threshold, setThreshold] = useState(80);

  return (
    <main className="main">
      <h1>System Settings</h1>

      <div className="card" style={{ maxWidth: "400px" }}>
        <h3>Alert Threshold</h3>
        <p>Notify if adherence drops below:</p>

        <input
          type="number"
          value={threshold}
          onChange={(e) => setThreshold(e.target.value)}
        />
        <p>Current threshold: {threshold}%</p>
      </div>
    </main>
  );
}
