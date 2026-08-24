import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import "./StudentRegistration.css";

export default function StudentRegistration() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const className = searchParams.get("class") || "";
  const consultant = searchParams.get("consultant") || "";

  const [form, setForm] = useState({
    name: "",
    passportNumber: "",
    consultant: consultant,
    className: className,
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const studentsCollection = collection(db, "students");

      const newStudent = {
        ...form,
        status: "active",
        joined: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }),
        createdAt: serverTimestamp(),
        lastLogin: null,
        lessonsCompleted: 0,
        practiceTests: 0,
        averageScore: null,
        activity: [],
        currentCourse: {
          courseId: generateNewCourseId(),
          startDate: new Date().toLocaleDateString("en-GB"),
          endDate: nextTwoMonths(),
          lessonsCompleted: 0,
          practiceTests: 0,
          averageScore: null,
          activity: [],
        },
        courses: [],
      };

      await addDoc(studentsCollection, newStudent);

      setSuccess(true);
      setForm({
        name: "",
        passportNumber: "",
        consultant: consultant,
        className: className,
        phone: "",
        email: "",
      });

      // Redirect after 3 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error registering student:", error);
      alert("Error registering: " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  function generateNewCourseId() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
  }

  function nextTwoMonths() {
    const d = new Date();
    d.setMonth(d.getMonth() + 2);
    return d.toLocaleDateString("en-GB");
  }

  return (
    <div className="registration-page">
      <div className="registration-container">
        <div className="registration-header">
          <img src="/icon.png" alt="Logo" className="registration-logo" />
          <h1>Student Registration</h1>
          <p>Please fill in your details below</p>
        </div>

        {success ? (
          <div className="registration-success">
            <div className="success-icon">✅</div>
            <h2>Registration Successful!</h2>
            <p>You have been added to the class. Welcome aboard! 🎉</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="registration-form">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Passport Number / ID *</label>
              <input
                name="passportNumber"
                placeholder="Enter your passport number"
                value={form.passportNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Class</label>
              <input
                name="className"
                placeholder="e.g. A1, B1"
                value={form.className}
                onChange={handleChange}
                readOnly={!!className}
              />
            </div>

            <div className="form-group">
              <label>Consultant Name</label>
              <input
                name="consultant"
                placeholder="Your consultant's name"
                value={form.consultant}
                onChange={handleChange}
                readOnly={!!consultant}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="register-btn">
              {isSubmitting ? "Registering..." : "Register Now"}
            </button>
          </form>
        )}

        <div className="registration-footer">
          <p>Powered by PTE Flow</p>
        </div>
      </div>
    </div>
  );
}
