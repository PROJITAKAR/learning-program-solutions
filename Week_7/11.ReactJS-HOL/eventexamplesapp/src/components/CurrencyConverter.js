import React, { useState } from "react";

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = () => {
    const euroRate = 0.011; // Approx conversion rate
    const converted = (parseFloat(rupees) * euroRate).toFixed(2);
    setEuros(converted);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter amount in ₹"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros && <p>Converted to Euro: €{euros}</p>}
    </div>
  );
};

export default CurrencyConverter;
