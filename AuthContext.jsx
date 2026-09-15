import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { teacherAuth } from "./teacherFirebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Existing Teacher Dashboard / Student App Firebase user.
  // This remains responsible for the existing dashboard functionality.
  const [user, setUser] = useState(null);

  // New Teacher Dashboard Firebase user.
  // This is the authenticated identity used for analytics.
  const [teacherUser, setTeacherUser] = useState(null);

  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    let legacyAuthReady = false;
    let teacherAuthReady = false;

    const finishInitialLoading = () => {
      if (legacyAuthReady && teacherAuthReady && active) {
        setLoading(false);
      }
    };

    // ============================================================
    // EXISTING FIREBASE AUTHENTICATION
    //
    // This remains connected to the existing Student App / BBA-Web
    // Firebase project and continues to provide roleData and the
    // existing dashboard permissions.
    // ============================================================

    const unsubscribeLegacyAuth = auth.onAuthStateChanged(
      async (currentUser) => {
        if (!active) return;

        setUser(currentUser);

        if (currentUser) {
          try {
            // Load existing role document.
            const roleRef = doc(db, "roles", currentUser.uid);
            const roleSnap = await getDoc(roleRef);
            const roleInfo = roleSnap.exists() ? roleSnap.data() : {};

            // Load existing teacher profile document.
            const teacherRef = doc(db, "teachers", currentUser.uid);
            const teacherSnap = await getDoc(teacherRef);
            const teacherInfo = teacherSnap.exists()
              ? teacherSnap.data()
              : {};

            if (!active) return;

            // Preserve the existing dashboard role/profile behaviour.
            setRoleData({
              ...roleInfo,
              ...teacherInfo,
            });
          } catch (error) {
            console.error(
              "Error loading existing teacher role/profile:",
              error
            );

            if (active) {
              setRoleData(null);
            }
          }
        } else {
          setRoleData(null);
        }

        legacyAuthReady = true;
        finishInitialLoading();
      }
    );

    // ============================================================
    // NEW TEACHER DASHBOARD FIREBASE AUTHENTICATION
    //
    // This is deliberately separate from the existing Student App
    // Firebase authentication.
    //
    // teacherUser is the identity used by the new analytics service.
    // ============================================================

    const unsubscribeTeacherAuth = teacherAuth.onAuthStateChanged(
      (currentTeacher) => {
        if (!active) return;

        setTeacherUser(currentTeacher);

        teacherAuthReady = true;
        finishInitialLoading();
      }
    );

    return () => {
      active = false;

      unsubscribeLegacyAuth();
      unsubscribeTeacherAuth();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        teacherUser,
        roleData,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);