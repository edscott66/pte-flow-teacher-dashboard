import "./ActivationCodes.css";
import generateActivationCode from "../utils/generateActivationCode";
import { useAuth } from "../AuthContext";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function ActivationCodes() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  const handleGenerate = async () => {
    try {
      const code = generateActivationCode();

      await setDoc(doc(db, "verification_codes", code), {
        isUsed: false,
        createdAt: Date.now(),
        createdBy: displayName
      });

      alert("New activation code: " + code);
    } catch (error) {
      console.error("Failed to create activation code:", error);
      alert("Unable to create activation code. Please try again.");
    }
  };

  return (
    <div className="page-content">
      <h2>Activation Codes</h2>
      <p>Generate activation codes for your students.</p>

      <button onClick={handleGenerate}>
        Generate Activation Code
      </button>
    </div>
  );
}