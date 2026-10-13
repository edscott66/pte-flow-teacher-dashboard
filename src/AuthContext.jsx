import { createContext, useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";
import { teacherAuth } from "./teacherFirebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const unsubscribe = teacherAuth.onAuthStateChanged(
      async (currentUser) => {
        if (!active) return;

        setLoading(true);
        setUser(currentUser);
        setRoleData(null);

        try {
          if (!currentUser) {
            return;
          }

          const collectionNames = [
            "roles",
            "teachers",
            "consultants",
            "admins",
          ];

          const snapshots = await Promise.all(
            collectionNames.map((collectionName) =>
              getDoc(doc(db, collectionName, currentUser.uid))
            )
          );

          if (!active) return;

          const [roleSnap, teacherSnap, consultantSnap, adminSnap] =
            snapshots;

          setRoleData({
            ...(roleSnap.exists() ? roleSnap.data() : {}),
            ...(teacherSnap.exists() ? teacherSnap.data() : {}),
            ...(consultantSnap.exists() ? consultantSnap.data() : {}),
            ...(adminSnap.exists() ? adminSnap.data() : {}),
          });
        } catch (error) {
          console.error("Failed to load user role/profile:", error);
        } finally {
          if (active) {
            setLoading(false);
          }
        }
      }
    );

    return () => {
      active = false;
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, roleData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}