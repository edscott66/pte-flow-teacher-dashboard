import React, { useState } from "react";
import { createStudentRecord } from "../services/createStudent";

export default function AddStudentForm({ onStudentAdded }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await createStudentRecord(form);

    if (result.success) {
      if (onStudentAdded) onStudentAdded(result.studentId);
      alert("Student added successfully!");

      setForm({
        name: "",
        passportNumber: "",
        consultant: "",
        className: "",
        phone: "",
        email: "",
      });
    } else {
      alert("Error adding student.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} required />
      <input name="passportNumber" placeholder="Passport Number" value={form.passportNumber} onChange={handleChange} />
      <input name="consultant" placeholder="Consultant Name" value={form.consultant} onChange={handleChange} required />
      <input name="className" placeholder="Class" value={form.className} onChange={handleChange} />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />

      <button type="submit">Add Student</button>
    </form>
  );
}