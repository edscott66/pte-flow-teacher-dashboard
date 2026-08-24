import "./ActivationCodes.css";
import generateActivationCode from "../utils/generateActivationCode";
import { useAuth } from "../AuthContext";

export default function ActivationCodes() {
  const { roleData } = useAuth();
  const displayName = roleData?.name || "User";

  const handleGenerate = () => {
    alert("New activation code: " + generateActivationCode());
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