import React, { useEffect, useState } from "react";
import "./PopupOverlay.css";
import { useNavigate } from "react-router-dom";

const PopupOverlay = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Delay popup appearance (e.g., 5 seconds)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

//   const handleRedirect = () => {
//     navigate("/event"); // Change this to your desired route or external link.
//   };
const handleRedirect = () => {
    window.open("https://www.instagram.com/reel/DQMF8zeidDn/", "_blank");
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>

        <div className="popup-inner">
          {/* Replace below with an actual poster image if you have one */}
          <h1 className="popup-title">🌒 TEDxTIET 2025 - The Unseen Dimensions🪞🔮</h1>
          <p className="popup-subtitle">Some truths whisper in the silence.
Some stories exist between the lines.
And some realities….hide in plain sight.
This year, we invite you to look beyond what you see, to question the obvious, and to uncover what was never meant to be hidden.</p>

          <button className="popup-btn" onClick={handleRedirect}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupOverlay;
