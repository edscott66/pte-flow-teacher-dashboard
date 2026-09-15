import { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { teacherAuth } from "../teacherFirebase";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoggingIn(true);

    let teacherDashboardSignedIn = false;
    let existingDashboardSignedIn = false;

    try {
      // ============================================================
      // 1. SIGN IN TO THE NEW TEACHER DASHBOARD FIREBASE
      //
      // This authentication is required for persistent analytics.
      // ============================================================

      await signInWithEmailAndPassword(
        teacherAuth,
        email.trim(),
        password
      );

      teacherDashboardSignedIn = true;

      // ============================================================
      // 2. SIGN IN TO THE EXISTING FIREBASE
      //
      // The existing dashboard still depends on this authentication
      // for roles, students, permissions and other legacy features.
      // ============================================================

      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      existingDashboardSignedIn = true;

      // App.jsx will automatically move away from /login once the
      // existing authentication state has been established.
    } catch (err) {
      console.error("Login error:", err);

      // ============================================================
      // ROLLBACK
      //
      // If only one Firebase authentication succeeded, sign it out.
      // We do not want the application left in a partially
      // authenticated state.
      // ============================================================

      try {
        if (teacherDashboardSignedIn) {
          await signOut(teacherAuth);
        }

        if (existingDashboardSignedIn) {
          await signOut(auth);
        }
      } catch (signOutError) {
        console.error(
          "Error rolling back partial authentication:",
          signOutError
        );
      }

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

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        {error && <p className="login-error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loggingIn}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loggingIn}
          required
        />

        <button type="submit" disabled={loggingIn}>
          {loggingIn ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}