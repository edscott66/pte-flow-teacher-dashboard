import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const uid = currentUser.uid;

        // Try teacher
        let ref = doc(db, "teachers", uid);
        let snap = await getDoc(ref);

        if (snap.exists()) {
          setRoleData({ role: "teacher", ...snap.data() });
          setLoading(false);
          return;
        }

        // Try consultant
        ref = doc(db, "consultants", uid);
        snap = await getDoc(ref);

        if (snap.exists()) {
          setRoleData({ role: "consultant", ...snap.data() });
          setLoading(false);
          return;
        }

        // Try admin
        ref = doc(db, "admins", uid);
        snap = await getDoc(ref);

        if (snap.exists()) {
          setRoleData({ role: "admin", ...snap.data() });
          setLoading(false);
          return;
        }

        // No role found
        setRoleData(null);
      } else {
        setRoleData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
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