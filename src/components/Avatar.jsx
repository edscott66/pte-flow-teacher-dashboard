import { useState } from "react";
import "./Avatar.css";
export default function Avatar({ name, photoUrl }) {
  const [imgError, setImgError] = useState(false);

  const shouldShowImage = photoUrl && !imgError;

  return (
    <>
      {shouldShowImage ? (
        <img
          src={photoUrl}
          alt={name}
          className="avatar"
          onError={() => setImgError(true)}
        />
      ) : (
        <img
          src="/woman-silhouette.png"   // ← served from public/
          alt="avatar placeholder"
          className="avatar"
        />
      )}
    </>
  );
}