import { useState } from "react";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword
} from "firebase/auth";
import { teacherAuth } from "../teacherFirebase";
import "./Login.css";

export default function Login() {
  const [selectedRole, setSelectedRole] = useState("teacher");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [resettingPassword, setResettingPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");
    setLoggingIn(true);

    try {
      await signInWithEmailAndPassword(
        teacherAuth,
        email.trim(),
        password
      );

      // The selector is UI context only.
      // Firebase authentication and Firestore role data
      // remain authoritative for permissions.
      console.log("Login role selected:", selectedRole);
    } catch (err) {
      console.error("Login error:", err);

      if (err?.code === "auth/invalid-credential") {
        setError("Invalid email or password.");
      } else if (err?.code === "auth/user-not-found") {
        setError("No account was found for this email address.");
      } else if (err?.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (err?.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else {
        setError(
          err?.message ||
            "Login failed. Please check your email and password."
        );
      }
    } finally {
      setLoggingIn(false);
    }
  };

  const handleForgotPassword = async () => {
    setError("");
    setSuccess("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setError("Please enter your email address first.");
      return;
    }

    setResettingPassword(true);

    try {
      await sendPasswordResetEmail(teacherAuth, trimmedEmail);

      setSuccess(
        "Password reset email sent. Please check your inbox."
      );
    } catch (err) {
      console.error("Password reset error:", err);

      if (err?.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (err?.code === "auth/user-not-found") {
        setError("No account was found for this email address.");
      } else {
        setError(
          err?.message ||
            "Unable to send the password reset email. Please try again."
        );
      }
    } finally {
      setResettingPassword(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-shell">
        <div className="login-brand-area">
          <img
            src="/icon2.png"
            alt="PTE @ Big Ben"
            className={`login-logo ${
              loggingIn ? "login-logo--rotating" : ""
            }`}
          />
        </div>

        <div className="login-card">
          <div className="login-content">
            <h1>Teacher Dashboard</h1>

            <p className="login-subtitle">
              Sign in to continue to your Big Ben Academy dashboard
            </p>

            <form className="login-form" onSubmit={handleLogin}>
              {error && <p className="login-error">{error}</p>}

              {success && (
                <p className="login-success">{success}</p>
              )}

              <div className="login-field">
                <label htmlFor="login-role">Login as</label>

                <select
                  id="login-role"
                  value={selectedRole}
                  onChange={(e) =>
                    setSelectedRole(e.target.value)
                  }
                  disabled={loggingIn || resettingPassword}
                >
                  <option value="teacher">Teacher</option>
                  <option value="consultant">Consultant</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="login-field">
                <label htmlFor="login-email">Email</label>

                <input
                  id="login-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loggingIn || resettingPassword}
                  required
                />
              </div>

              <div className="login-field">
                <label htmlFor="login-password">Password</label>

                <input
                  id="login-password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loggingIn || resettingPassword}
                  required
                />
              </div>

              <button
                type="submit"
                className="login-button"
                disabled={loggingIn || resettingPassword}
              >
                {loggingIn ? "Logging in..." : "Login"}
              </button>

              <button
                type="button"
                className="forgot-password-button"
                onClick={handleForgotPassword}
                disabled={loggingIn || resettingPassword}
              >
                {resettingPassword
                  ? "Sending reset email..."
                  : "Forgot Password?"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}