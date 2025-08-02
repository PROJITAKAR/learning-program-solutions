import React from "react";
import "./App.css";
import officeImage from "./image.png"; // Make sure to add an image named 'office.jpg' in the /src folder

function App() {
  const heading = "Office Space";
  const jsxatt = (
    <img src={officeImage} width="25%" height="25%" alt="Office Space" />
  );

  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "WeWork", Rent: 70000, Address: "Bangalore" },
    { Name: "Regus", Rent: 55000, Address: "Hyderabad" },
    { Name: "SmartSpace", Rent: 80000, Address: "Mumbai" },
  ];

  return (
    <div className="App">
      <h1>
        {heading}, at Affordable Range
      </h1>
      {jsxatt}

      {officeList.map((office, index) => {
        const rentColor = office.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} className="office-card">
            <h2>Name: {office.Name}</h2>
            <h3 className={rentColor}>Rent: ₹{office.Rent}</h3>
            <h3>Address: {office.Address}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
