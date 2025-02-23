import React, { useState } from "react";
import "./AlterationsPage.css";

const AlterationsPage = () => {
  const [measurements, setMeasurements] = useState({
    chest: "",
    waist: "",
    hips: "",
    height: "",
  });

  const handleChange = (e) => {
    setMeasurements({ ...measurements, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Measurements submitted successfully!");
  };

  const products = [
    {
      id: 1,
      name: "Elegant Evening Gown",
      image: "/images/gown.jpg",
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Casual Summer Dress",
      image: "/images/summer-dress.jpg",
      sizes: ["XS", "S", "M", "L"],
    },
  ];

  return (
    <div className="alterations-container">
      <h2>Customize Your Fit</h2>
      <p>Get your outfits tailored to fit you perfectly with our professional alteration services.</p>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Available Sizes: {product.sizes.join(", ")}</p>
            <button>Request Alteration</button>
          </div>
        ))}
      </div>

      <div className="measurement-form">
        <h3>Send Your Measurements</h3>
        <form onSubmit={handleSubmit}>
          <label>Chest (inches):</label>
          <input type="number" name="chest" value={measurements.chest} onChange={handleChange} required />

          <label>Waist (inches):</label>
          <input type="number" name="waist" value={measurements.waist} onChange={handleChange} required />

          <label>Hips (inches):</label>
          <input type="number" name="hips" value={measurements.hips} onChange={handleChange} required />

          <label>Height (inches):</label>
          <input type="number" name="height" value={measurements.height} onChange={handleChange} required />

          <button type="submit">Submit Measurements</button>
        </form>
      </div>
    </div>
  );
};

export default AlterationsPage;
