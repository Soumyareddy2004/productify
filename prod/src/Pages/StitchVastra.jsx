
// src/Pages/StitchVastra.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CustomTailoring.jsx';
import './StitchVastra.css'; // You can style this page here
import OnlineBoutique from "../Components/OnlineBoutique/OnlineBoutique";
const StitchVastra = () => {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="stitch-vastra-page">
      <header className="stitch-header">
        <h1>Welcome to StitchVastra</h1>
        <p>Your destination for premium stitching and custom tailoring services.</p>
      </header>

      <section className="stitch-vastra-services">
        {/* <h2>Our Services</h2> */}
        <div className="services-container">
          <div 
            className="service-card" 
            onClick={() => handleCardClick('/custom-tailoring')}>
            <h3>Custom Tailoring</h3>
            <p>Get your clothes custom-made according to your measurements and preferences.</p>
          </div>
          <div 
            className="service-card" 
            onClick={() => handleCardClick('/alterations')}>
            <h3>Alterations</h3>
            <p>We provide alteration services to fit your clothes perfectly.</p>
          </div>
          <div 
            className="service-card" 
            onClick={() => handleCardClick('/stitching-services')}>
            <h3>Stitching for Men, Women, and Kids</h3>
            <p>We specialize in stitching for all age groups with a focus on quality.</p>
          </div>
          <div 
            className="service-card" 
            onClick={() => handleCardClick('/exclusive-offers')}>
            <h3>Exclusive Stitching Offers</h3>
            <p>Take advantage of our exclusive offers on custom stitching services.</p>
          </div>
        </div>
      </section>
   
       <OnlineBoutique/>
      

      <footer className="stitch-footer">
        <p>Contact us at: <strong>contact@stitchvastra.com</strong></p>
      </footer>
    </div>
  );
};

export default StitchVastra;
