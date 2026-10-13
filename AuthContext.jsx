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
      console.log(
        "AUTH CONTEXT - auth state changed:",
        currentUser?.email || "NO USER"
      );
      console.log(
        "AUTH CONTEXT - UID:",
        currentUser?.uid || "NO UID"
      );

      setUser(currentUser);

      if (currentUser) {
        try {
          // Load generic role document
          const roleRef = doc(db, "roles", currentUser.uid);
          const roleSnap = await getDoc(roleRef);
          const roleInfo = roleSnap.exists()
            ? roleSnap.data()
            : {};

          console.log(
            "AUTH CONTEXT - roles document exists:",
            roleSnap.exists()
          );

          // Load teacher profile
          const teacherRef = doc(
            db,
            "teachers",
            currentUser.uid
          );
          const teacherSnap = await getDoc(teacherRef);
          const teacherInfo = teacherSnap.exists()
            ? teacherSnap.data()
            : {};

          console.log(
            "AUTH CONTEXT - teacher document exists:",
            teacherSnap.exists()
          );

          // Load consultant profile
          const consultantRef = doc(
            db,
            "consultants",
            currentUser.uid
          );
          const consultantSnap = await getDoc(
            consultantRef
          );
          const consultantInfo = consultantSnap.exists()
            ? consultantSnap.data()
            : {};

          console.log(
            "AUTH CONTEXT - consultant document exists:",
            consultantSnap.exists()
          );

          // Load admin profile
          const adminRef = doc(
            db,
            "admins",
            currentUser.uid
          );
          const adminSnap = await getDoc(adminRef);
          const adminInfo = adminSnap.exists()
            ? adminSnap.data()
            : {};

          console.log(
            "AUTH CONTEXT - admin document exists:",
            adminSnap.exists()
          );
          console.log(
            "AUTH CONTEXT - admin data:",
            adminInfo
          );

          // Merge available profile data.
          // Later collections override earlier collections
          // when the same field exists.
          const mergedRoleData = {
            ...roleInfo,
            ...teacherInfo,
            ...consultantInfo,
            ...adminInfo
          };

          console.log(
            "AUTH CONTEXT - final roleData:",
            mergedRoleData
          );

          setRoleData(mergedRoleData);
        } catch (err) {
          console.error(
            "Error loading user role data:",
            err
          );

          setRoleData(null);
        }
      } else {
        console.log(
          "AUTH CONTEXT - no authenticated user, clearing roleData"
        );

        setRoleData(null);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        roleData,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);