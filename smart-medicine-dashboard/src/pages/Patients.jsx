import { patient } from "../data/mockData";

export default function Patients() {
  return (
    <main className="main">
      <h1>Patients</h1>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td className="warn">{patient.risk}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
