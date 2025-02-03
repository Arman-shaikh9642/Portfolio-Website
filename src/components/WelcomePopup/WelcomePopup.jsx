import React, { useState, useEffect } from "react";
import "./WelcomePopup.css";

const WelcomePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Set the popup to disappear after 5 seconds or when "Get Started" is clicked
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  }, []);

  const handleGetStarted = () => {
    setShowPopup(false); // Close the popup when "Get Started" is clicked
  };

  return (
    showPopup && (
      <div className="popup">
        <div className="popup-content">
          <h1>Welcome to My Website!</h1>
          <p>Explore and enjoy the content!</p>
          <button className="get-started-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    )
  );
};

export default WelcomePopup;
