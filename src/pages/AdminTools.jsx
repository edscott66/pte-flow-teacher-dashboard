import { useState } from "react";
import { db } from "../firebase";
import { teacherUserCreationAuth } from "../teacherFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion
} from "firebase/firestore";
import { useAuth } from "../AuthContext";
import "./AdminTools.css";

export default function AdminTools() {
  const { roleData } = useAuth();

  if (roleData?.role !== "admin") {
    return <p>Access denied.</p>;
  }

  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherClass, setTeacherClass] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");

  const [consultantEmail, setConsultantEmail] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [consultantPassword, setConsultantPassword] = useState("");

  const [consultantId, setConsultantId] = useState("");
  const [studentId, setStudentId] = useState("");

  const [message, setMessage] = useState("");

  async function addTeacher(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        teacherUserCreationAuth,
        teacherEmail,
        teacherPassword
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

  async function addConsultant(e) {
    e.preventDefault();

    try {
      const userCred = await createUserWithEmailAndPassword(
        teacherUserCreationAuth,
        consultantEmail,
        consultantPassword
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

  async function assignStudent(e) {
    e.preventDefault();

    try {
      const ref = doc(db, "consultants", consultantId);

      await updateDoc(ref, {
        assignedStudents: arrayUnion(studentId)
      });

      setMessage(
        `Student ${studentId} assigned to consultant ${consultantId}.`
      );
    } catch (err) {
      setMessage("Error assigning student: " + err.message);
    }
  }

  return (
    <div className="admin-tools-page">
      <div className="admin-tools-header">
        <div>
          <span className="admin-tools-eyebrow">ADMINISTRATION</span>
          <h1>Admin Tools</h1>
          <p>Manage teacher accounts, consultants and student assignments.</p>
        </div>
      </div>

      {message && (
        <div
          className={`admin-tools-message ${
            message.startsWith("Error") ? "admin-tools-message--error" : ""
          }`}
          role="status"
          aria-live="polite"
        >
          {message}
        </div>
      )}

      <div className="admin-tools-grid">
        <section className="admin-section admin-section--teacher">
          <div className="admin-section-heading">
            <div className="admin-section-icon" aria-hidden="true">
              🎓
            </div>
            <div>
              <h2>Add Teacher</h2>
              <p>Create a teacher account and assign a class.</p>
            </div>
          </div>

          <form onSubmit={addTeacher} className="admin-tools-form">
            <div className="admin-form-field">
              <label htmlFor="teacher-name">Teacher Name</label>
              <input
                id="teacher-name"
                type="text"
                placeholder="Enter teacher name"
                value={teacherName}
                onChange={(e) => setTeacherName(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="teacher-email">Teacher Email</label>
              <input
                id="teacher-email"
                type="email"
                placeholder="Enter teacher email"
                value={teacherEmail}
                onChange={(e) => setTeacherEmail(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="teacher-class">Class Name</label>
              <input
                id="teacher-class"
                type="text"
                placeholder="e.g. A1, A2, B1+"
                value={teacherClass}
                onChange={(e) => setTeacherClass(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="teacher-password">Initial Password</label>
              <input
                id="teacher-password"
                type="password"
                placeholder="Minimum 6 characters"
                value={teacherPassword}
                onChange={(e) => setTeacherPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" className="admin-action-button">
                Create Teacher
              </button>
            </div>
          </form>
        </section>

        <section className="admin-section admin-section--consultant">
          <div className="admin-section-heading">
            <div className="admin-section-icon" aria-hidden="true">
              👥
            </div>
            <div>
              <h2>Add Consultant</h2>
              <p>Create a consultant account for student support.</p>
            </div>
          </div>

          <form onSubmit={addConsultant} className="admin-tools-form">
            <div className="admin-form-field">
              <label htmlFor="consultant-name">Consultant Name</label>
              <input
                id="consultant-name"
                type="text"
                placeholder="Enter consultant name"
                value={consultantName}
                onChange={(e) => setConsultantName(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="consultant-email">Consultant Email</label>
              <input
                id="consultant-email"
                type="email"
                placeholder="Enter consultant email"
                value={consultantEmail}
                onChange={(e) => setConsultantEmail(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="consultant-password">Initial Password</label>
              <input
                id="consultant-password"
                type="password"
                placeholder="Minimum 6 characters"
                value={consultantPassword}
                onChange={(e) => setConsultantPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" className="admin-action-button">
                Create Consultant
              </button>
            </div>
          </form>
        </section>

        <section className="admin-section admin-section--assignment">
          <div className="admin-section-heading">
            <div className="admin-section-icon" aria-hidden="true">
              🔗
            </div>
            <div>
              <h2>Assign Student to Consultant</h2>
              <p>Connect a student record to the responsible consultant.</p>
            </div>
          </div>

          <form onSubmit={assignStudent} className="admin-tools-form">
            <div className="admin-form-field">
              <label htmlFor="consultant-uid">Consultant UID</label>
              <input
                id="consultant-uid"
                type="text"
                placeholder="Enter consultant UID"
                value={consultantId}
                onChange={(e) => setConsultantId(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-field">
              <label htmlFor="student-id">Student ID</label>
              <input
                id="student-id"
                type="text"
                placeholder="Enter student ID"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>

            <div className="admin-form-actions">
              <button type="submit" className="admin-action-button">
                Assign Student
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}