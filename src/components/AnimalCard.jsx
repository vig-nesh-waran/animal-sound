import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const AnimalCard = ({ name, image, sound }) => {
  const soundRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundRef.current.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-light-green p-2 h-60 w-60 rounded-lg shadow-lg transform transition-colors duration-100 hover:bg-green-600"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-44 object-cover rounded-lg"
      />
      <h3 className="text-center text-lg font-semibold mt-2 text-green-900">
        {name}
      </h3>
      <audio ref={soundRef} src={sound}></audio>

       {/* Conditionally render the speaker icon */}
       {isHovered && (
        <div className="absolute bottom-2 right-2 text-green-900">
          <FontAwesomeIcon icon={faVolumeUp} size="2x" />
        </div>
      )}

    </div>
  );
};

export default AnimalCard;
