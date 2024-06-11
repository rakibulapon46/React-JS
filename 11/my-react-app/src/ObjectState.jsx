import { useState } from "react";

function ObjectState() {
  const [car, setCar] = useState({
    year: 2023,
    make: "Roll-Royce",
    model: "La Rose Noire Droptail",
  });

  const handleYearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };

  const handleMakeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };

  const handleModelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}{" "}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  );
}

export default ObjectState;
