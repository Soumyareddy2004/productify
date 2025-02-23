import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BoutiquePage.css"; // Importing CSS

const fabricOptions = [
  {
    id: 1,
    name: "Silk Fabric",
    image: "../src/assets/silk.png",
    description: "Premium quality silk fabric with a smooth finish.",
    fabricCost: 1200,
    stitchingCost: 800,
  },
  {
    id: 2,
    name: "Cotton Fabric",
    image: "../src/assets/cotton.png",
    description: "Soft and breathable cotton fabric, perfect for daily wear.",
    fabricCost: 800,
    stitchingCost: 500,
  },
  {
    id: 3,
    name: "Velvet Fabric",
    image: "../src/assets/velvet.png",
    description: "Luxurious velvet fabric with a rich texture.",
    fabricCost: 1500,
    stitchingCost: 1000,
  },
];

const BoutiquePage = () => {
  const navigate = useNavigate();
  const [selectedFabric, setSelectedFabric] = useState(null);
  const [customerDesign, setCustomerDesign] = useState(null);
  const [measurements, setMeasurements] = useState("");

  const handleCustomerUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCustomerDesign(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!selectedFabric) {
      alert("Please select a fabric before submitting!");
      return;
    }
    alert("Request Submitted Successfully!");
    navigate("/shop");
  };

  return (
    <div className="boutique-container">
      <h2>Customize Your Design</h2>

      {/* Fabric Selection Section */}
      <div className="fabric-selection">
        <h3>Select a Fabric</h3>
        <div className="fabric-options">
          {fabricOptions.map((fabric) => (
            <div
              key={fabric.id}
              className={`fabric-card ${selectedFabric === fabric ? "selected" : ""}`}
              onClick={() => setSelectedFabric(fabric)}
            >
              <img src={fabric.image} alt={fabric.name} />
              <h4>{fabric.name}</h4>
              <p>{fabric.description}</p>
              <p>
                <strong>Fabric Cost:</strong> ₹{fabric.fabricCost} <br />
                <strong>Stitching Cost:</strong> ₹{fabric.stitchingCost}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer's Custom Design Upload */}
      <div className="upload-section">
        <label>Upload Your Design:</label>
        <input type="file" accept="image/*" onChange={handleCustomerUpload} />
        {customerDesign && (
          <div className="image-preview">
            <img src={customerDesign} alt="Design Preview" />
          </div>
        )}
      </div>

      {/* Measurements Input */}
      <div className="upload-section">
        <label>Enter Measurements:</label>
        <textarea
          placeholder="Example: Chest - 36, Waist - 28..."
          value={measurements}
          onChange={(e) => setMeasurements(e.target.value)}
        />
      </div>

      {/* Display Selected Fabric, Uploaded Design & Measurements */}
      {selectedFabric && (
        <div className="summary-section">
          <h3>Summary</h3>
          <p><strong>Selected Fabric:</strong> {selectedFabric.name}</p>
          <p><strong>Fabric Cost:</strong> ₹{selectedFabric.fabricCost}</p>
          <p><strong>Stitching Cost:</strong> ₹{selectedFabric.stitchingCost}</p>
          {customerDesign && <p><strong>Uploaded Design:</strong> Visible above</p>}
          {measurements && <p><strong>Measurements:</strong> {measurements}</p>}
        </div>
      )}

      {/* Submit Button */}
      <button onClick={handleSubmit} className="submit-btn">
        Submit Request
      </button>
    </div>
  );
};

export default BoutiquePage;
