import React from "react";
import "./StudentsTable.css";

export default function StudentsTable({ students, refreshStudents, onView }) {
  if (!students || students.length === 0) {
    return (
      <div className="students-table-wrapper">
        <div className="empty-state">
          <p>No students found.</p>
          <p className="hint">Click "Add Student" in the header to add a new student.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="students-table-wrapper">
      <table className="students-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Class</th>
            <th>Status</th>
            <th>Joined</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <div className="student-name-cell">
                  <span className="student-avatar">
                    {student.name?.charAt(0) || "?"}
                  </span>
                  {student.name || "Unnamed"}
                </div>
              </td>
              <td>{student.className || "-"}</td>
              <td>
                <span className={`status-badge ${student.status || "active"}`}>
                  {student.status || "active"}
                </span>
              </td>
              <td>{student.joined || "-"}</td>
              <td>
                <button 
                  className="view-btn"
                  onClick={() => onView(student.id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}