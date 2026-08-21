import { useState } from "react";
import { useAuth } from "../AuthContext";
import { auth, db } from "../firebase";
import {
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider
} from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import "./Profile.css";

export default function Profile() {
  const { user, roleData } = useAuth();

  const [name, setName] = useState(roleData?.name || "");
  const [photoUrl, setPhotoUrl] = useState(roleData?.photoUrl || "");
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);

  const uid = user?.uid;
  const role = roleData?.role;

  // Firestore collection based on role
  const collectionName =
    role === "teacher"
      ? "teachers"
      : role === "consultant"
      ? "consultants"
      : "admins";

  async function saveProfile(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      // Update Firebase Auth
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl
      });

      // Update Firestore
      await updateDoc(doc(db, collectionName, uid), {
        name,
        photoUrl
      });

      setMessage("Profile updated successfully.");
    } catch (err) {
      setMessage("Error updating profile: " + err.message);
    }

    setSaving(false);
  }

  async function changePassword(e) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    try {
      // Re-authenticate user
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );

      await reauthenticateWithCredential(auth.currentUser, credential);

      // Update password
      await updatePassword(auth.currentUser, newPassword);

      setMessage("Password updated successfully.");
      setNewPassword("");
      setCurrentPassword("");
    } catch (err) {
      setMessage("Error updating password: " + err.message);
    }

    setSaving(false);
  }

  return (
    <div className="profile-page">
      <h2>Profile</h2>

      {message && <p className="profile-message">{message}</p>}

      {/* Avatar Preview */}
      <div className="avatar-preview">
        <img
          src={photoUrl || "https://via.placeholder.com/120"}
          alt="Profile"
          className="avatar-image"
        />
      </div>

      {/* Profile Info */}
      <form className="profile-form" onSubmit={saveProfile}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          disabled={saving}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Photo URL</label>
        <input
          type="text"
          value={photoUrl}
          disabled={saving}
          onChange={(e) => setPhotoUrl(e.target.value)}
        />

        <button type="submit" className="btn-primary" disabled={saving}>
          {saving ? "Saving..." : "Save Profile"}
        </button>
      </form>

      {/* Change Password */}
      <form className="password-form" onSubmit={changePassword}>
        <h3>Change Password</h3>

        <label>Current Password</label>
        <input
          type="password"
          value={currentPassword}
          disabled={saving}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <label>New Password</label>
        <input
          type="password"
          value={newPassword}
          disabled={saving}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <button type="submit" className="btn-warning" disabled={saving}>
          {saving ? "Updating..." : "Update Password"}
        </button>
      </form>

      {/* Read-only Account Info */}
      <div className="readonly-info">
        <h3>Account Info</h3>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Class:</strong> {roleData?.className}</p>
      </div>
    </div>
  );
}