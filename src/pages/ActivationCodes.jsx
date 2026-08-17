import TopBar from "../components/TopBar";
import generateActivationCode from "../utils/generateActivationCode";

export default function ActivationCodes() {
  const handleGenerate = () => {
    alert("New activation code: " + generateActivationCode());
  };

  return (
    <>
      <TopBar title="Activation Codes" />
      <div className="page-content">
        <button onClick={handleGenerate}>Generate Activation Code</button>
      </div>
    </>
  );
}