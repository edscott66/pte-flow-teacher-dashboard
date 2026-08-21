import Avatar from "./Avatar";
import "./StudentsTable.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// ⭐ Correct import (named export)
import { createStudentRecord } from "../services/students/createStudent";

export default function StudentsTable({ students, refreshStudents }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    passportNumber: "",
    consultant: "",
    className: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    const result = await createStudentRecord(form);

    if (result.success) {
      alert("Student added successfully!");

      setForm({
        name: "",
        passportNumber: "",
        consultant: "",
        className: "",
        phone: "",
        email: "",
      });

      if (refreshStudents) refreshStudents();
    } else {
      alert("Error adding student.");
    }
  };

  return (
    <>
      <div className="add-student-container">
        <h3>Add New Student</h3>

        <form onSubmit={handleAddStudent} className="add-student-form">
          <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required />
          <input name="passportNumber" placeholder="Passport Number" value={form.passportNumber} onChange={handleChange} />
          <input name="consultant" placeholder="Consultant Name" value={form.consultant} onChange={handleChange} required />
          <input name="className" placeholder="Class" value={form.className} onChange={handleChange} />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
          <button type="submit">Add Student</button>
        </form>
      </div>

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
                <span className={`status-badge ${s.status}`}>{s.status}</span>
              </td>

              <td>{s.joined}</td>

              <td>
                <button className="row-action" onClick={() => navigate(`/students/${s.id}`)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}