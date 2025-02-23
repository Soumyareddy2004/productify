import React, { useState } from 'react';
import './CustomTailoring.css'; // Add styles specific to this page

const CustomTailoring = () => {
  const [selectedOption, setSelectedOption] = useState('Embroidery');
  const [cart, setCart] = useState([]); // Cart to store selected items

  const tailoringDetails = {
    Embroidery: {
      description: 'Explore our intricate embroidery designs for a variety of outfits.',
      images: ['image.png', 'img2.webp', 'img3.webp', 'img4.avif','img5.avif','img6.jpg'],
      costs: {
        Blouse: '$30',
        Frock: '$50',
        Saree: '$100',
      },
    },
    'Maggam Work': {
      description: 'Premium maggam work with fine craftsmanship tailored to perfection.',
      images: ['mag1.jpeg', 'mag2.jpg', 'mag3.webp','mag4.jpg','mag6.jpg','mag5.webp'],
      costs: {
        Blouse: '$40',
        Frock: '$60',
        Saree: '$120',
      },
    },
    'Tassels': {
      description: 'Choose from a wide range of luxurious and high-quality fabrics.',
      images: ['tas1.avif', 'tas2.jpg', 'tas3.jpg','tas4.jpg','tas5.jpg','tas6.jpg'],
      costs: {
        Cotton: '$10 per meter',
        Silk: '$20 per meter',
        Velvet: '$30 per meter',
      },
    },
  };

  // Add to cart handler
  const handleAddToCart = (item, image) => {
    setCart([...cart, { item, image }]);
    alert(`${item} has been added to the cart!`);
  };

  return (
    <div className="custom-tailoring-page">
      <header className="tailoring-header">
        <h1>Custom Tailoring Services</h1>
        <p>Experience the finest tailoring with personalized options to suit your style.</p>
      </header>

      <section className="tailoring-content">
        {/* Left side: Options */}
        <div className="options-container">
          {Object.keys(tailoringDetails).map((option) => (
            <div
              key={option}
              className={`option-card ${selectedOption === option ? 'active' : ''}`}
              onClick={() => setSelectedOption(option)}
            >
              <h3>{option}</h3>
              <p>{tailoringDetails[option].description}</p>
            </div>
          ))}
        </div>

        {/* Right side: Details */}
        <div className="details-container">
          <h2>{selectedOption}</h2>
          <p>{tailoringDetails[selectedOption].description}</p>

          {/* Image Gallery */}
          <div className="image-gallery">
            {tailoringDetails[selectedOption].images.map((image, index) => (
              <div key={index} className="image-item">
                <img
                  src={`/images/${image}`} // Public folder path
                  alt={`${selectedOption} ${index + 1}`}
                  className="vertical-image"
                />
                <div className="image-options">
                  <h4>Choose an item:</h4>
                  {Object.keys(tailoringDetails[selectedOption].costs).map((item) => (
                    <button
                      key={item}
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(item, image)}
                    >
                      {item} - {tailoringDetails[selectedOption].costs[item]}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <footer className="tailoring-footer">
        <p>Contact us at: <strong>tailoring@stitchvastra.com</strong></p>
      </footer>
    </div>
  );
};

export default CustomTailoring;
