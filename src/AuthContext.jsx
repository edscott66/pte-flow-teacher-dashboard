import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
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

        // Merge both documents
        setRoleData({
          ...roleInfo,
          ...teacherInfo
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