import { Verification } from "./Verification";
import { useState } from "react";

export function AboutArtist({ bioInfo }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 400;

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortText = bioInfo.biography.text.substring(0, maxLength);

  return (
    <div className="bioInfo-container">
      <h4>Sobre</h4>
      <h2>{bioInfo.name}</h2>
      <Verification />
      <p>
        {isExpanded
          ? bioInfo.biography.text
          : shortText +
            (bioInfo.biography.text.length > maxLength ? "..." : "")}
      </p>
      {bioInfo.biography.text.length > maxLength && (
        <button onClick={toggleReadMore}>
          {isExpanded ? "Leer menos" : "Leer más"}
        </button>
      )}
    </div>
  );
}
