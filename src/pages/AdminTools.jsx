import { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "../AuthContext";

export default function AdminTools() {
  const { roleData } = useAuth();

  if (roleData?.role !== "admin") {
    return <p>Access denied.</p>;
  }

  // ⭐ Form states
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherClass, setTeacherClass] = useState("");

  const [consultantEmail, setConsultantEmail] = useState("");
  const [consultantName, setConsultantName] = useState("");

  const [consultantId, setConsultantId] = useState("");
  const [studentId, setStudentId] = useState("");

  const [message, setMessage] = useState("");

  // ⭐ Add Teacher
  async function addTeacher(e) {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        teacherEmail,
        "default123" // You can change this
      );

      const uid = userCred.user.uid;

      await setDoc(doc(db, "teachers", uid), {
        name: teacherName,
        email: teacherEmail,
        role: "teacher",
        className: teacherClass
      });

      setMessage(`Teacher ${teacherName} created successfully.`);
    } catch (err) {
      setMessage("Error creating teacher: " + err.message);
    }
  }

  // ⭐ Add Consultant
  async function addConsultant(e) {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        consultantEmail,
        "default123"
      );

      const uid = userCred.user.uid;

      await setDoc(doc(db, "consultants", uid), {
        name: consultantName,
        email: consultantEmail,
        role: "consultant",
        assignedStudents: []
      });

      setMessage(`Consultant ${consultantName} created successfully.`);
    } catch (err) {
      setMessage("Error creating consultant: " + err.message);
    }
  }

  // ⭐ Assign Student to Consultant
  async function assignStudent(e) {
    e.preventDefault();
    try {
      const ref = doc(db, "consultants", consultantId);

      await updateDoc(ref, {
        assignedStudents: [...roleData.assignedStudents, studentId]
      });

      setMessage(`Student ${studentId} assigned to consultant ${consultantId}.`);
    } catch (err) {
      setMessage("Error assigning student: " + err.message);
    }
  }

  return (
    <div className="admin-tools">
      <h2>Admin Tools</h2>

      <p>{message}</p>

      {/* ⭐ Add Teacher */}
      <div className="admin-section">
        <h3>Add Teacher</h3>
        <form onSubmit={addTeacher}>
          <input
            type="text"
            placeholder="Teacher Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Teacher Email"
            value={teacherEmail}
            onChange={(e) => setTeacherEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Class Name (A1, A2, B1+)"
            value={teacherClass}
            onChange={(e) => setTeacherClass(e.target.value)}
          />
          <button type="submit">Create Teacher</button>
        </form>
      </div>

      {/* ⭐ Add Consultant */}
      <div className="admin-section">
        <h3>Add Consultant</h3>
        <form onSubmit={addConsultant}>
          <input
            type="text"
            placeholder="Consultant Name"
            value={consultantName}
            onChange={(e) => setConsultantName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Consultant Email"
            value={consultantEmail}
            onChange={(e) => setConsultantEmail(e.target.value)}
          />
          <button type="submit">Create Consultant</button>
        </form>
      </div>

      {/* ⭐ Assign Student */}
      <div className="admin-section">
        <h3>Assign Student to Consultant</h3>
        <form onSubmit={assignStudent}>
          <input
            type="text"
            placeholder="Consultant UID"
            value={consultantId}
            onChange={(e) => setConsultantId(e.target.value)}
          />
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
          />
          <button type="submit">Assign Student</button>
        </form>
      </div>
    </div>
  );
}