import Avatar from "./Avatar";
import "./StudentsTable.css";
import { useNavigate } from "react-router-dom";

export default function StudentsTable({ students }) {
  const navigate = useNavigate();   // Navigation now works correctly

  return (
    <table className="students-table">
      <thead>
        <tr>
          <th>Student</th>
          <th>Class</th>
          <th>Status</th>
          <th>Joined</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>
              <div className="student-cell">
                <Avatar name={s.name} photoUrl={s.photoUrl} />
                <span>{s.name}</span>
              </div>
            </td>

            <td>{s.className}</td>

            <td>
              <span className={`status-badge ${s.status}`}>
                {s.status}
              </span>
            </td>

            <td>{s.joined}</td>

            <td>
              <button
                className="row-action"
                onClick={() => navigate(`/students/${s.id}`)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}