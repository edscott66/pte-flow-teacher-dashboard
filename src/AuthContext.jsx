import { createContext, useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import { teacherAuth } from "./teacherFirebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = teacherAuth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        // Load role document
        const roleRef = doc(db, "roles", currentUser.uid);
        const roleSnap = await getDoc(roleRef);
        const roleInfo = roleSnap.exists() ? roleSnap.data() : {};

        // Load teacher profile document
        const teacherRef = doc(db, "teachers", currentUser.uid);
        const teacherSnap = await getDoc(teacherRef);
        const teacherInfo = teacherSnap.exists() ? teacherSnap.data() : {};

        // Load consultant profile document
        const consultantRef = doc(db, "consultants", currentUser.uid);
        const consultantSnap = await getDoc(consultantRef);
        const consultantInfo = consultantSnap.exists()
          ? consultantSnap.data()
          : {};

        // Load admin profile document
        const adminRef = doc(db, "admins", currentUser.uid);
        const adminSnap = await getDoc(adminRef);
        const adminInfo = adminSnap.exists()
          ? adminSnap.data()
          : {};

        // Merge role, teacher, consultant, and admin data
        setRoleData({
          ...roleInfo,
          ...teacherInfo,
          ...consultantInfo,
          ...adminInfo
        });
      } else {
        setRoleData(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, roleData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);