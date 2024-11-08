import React, { useState } from "react";

const PanNumberField = ({ setPanNumberValid }) => {
  const [panNumber, setPanNumber] = useState("");
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;

  const handleChange = (e) => {
    const value = e.target.value.toUpperCase(); 
    setPanNumber(value);

    const isValid = panRegex.test(value);
    setPanNumberValid(isValid);
  };

  return (
    <div className="pan-number-field">
      <div className={`input-container ${panNumber ? "filled" : ""}`}>
        <input
          type="text"
          id="panNumber"
          value={panNumber}
          onChange={handleChange}
          maxLength="10"
          placeholder=""
        />
        <label htmlFor="panNumber">Enter 10-digit PAN</label>
      </div>
      <span className="counter">{panNumber.length}/10</span>
    </div>
  );
};

export default PanNumberField;
