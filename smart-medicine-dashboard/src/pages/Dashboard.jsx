import { useState ,useEffect} from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { patient } from "../data/mockData";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export default function Dashboard() {
  const [adherence, setAdherence] = useState(patient.adherence);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Adherence %",
        data: [92, 88, 90, 85, adherence],
        borderColor: "#2563eb",
        tension: 0.4,
      },
    ],
  };
useEffect(() => {
  const unsub = onSnapshot(doc(db, "patients", "patient_001"), (doc) => {
    setAdherence(doc.data().adherenceRate);
  });
  return () => unsub();
}, []);

  return (
    <main className="main">
      <h1>Caregiver Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Patient</h3>
          <p>{patient.name} ({patient.age})</p>
        </div>

        <div className="card">
          <h3>Adherence</h3>
          <p className={adherence > 80 ? "ok" : "bad"}>
            {adherence}%
          </p>
          <button onClick={() => setAdherence(adherence - 5)}>
            Simulate Missed Dose
          </button>
        </div>

        <div className="card">
          <h3>Risk Level</h3>
          <p className="warn">{patient.risk}</p>
        </div>
      </div>

      <div className="card" style={{ maxWidth: "700px" }}>
        <h3>Adherence Trend</h3>
        <Line data={data} />
      </div>
    </main>
  );
}
