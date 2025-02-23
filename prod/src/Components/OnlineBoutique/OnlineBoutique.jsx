import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnlineBoutique.css"; // Import the updated CSS

const OnlineBoutique = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/boutique"); // Redirect to Boutique Page
  };

  return (
    <div className="online-boutique-container">
      <div className="boutique-card">
        <h1 className="boutique-title">Stitch Vastra</h1>
        <p className="boutique-subtitle">"Unleash your inner fashionista!"</p>
        <p className="boutique-description">
          Design Your Dream Outfit - Upload your inspiration or request a custom design.
        </p>
        <button onClick={handleExploreClick} className="explore-btn">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default OnlineBoutique;
