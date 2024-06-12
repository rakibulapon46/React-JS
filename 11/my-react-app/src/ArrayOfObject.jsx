import { useState } from "react";

function ArrayOfObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (index) => {
    setCars(c => c.filter((_,i) => i!==index))
  };

  const handleCarYear = (event) => {
    setCarYear(event.target.value);
  };

  const handleCarMake = (event) => {
    setCarMake(event.target.value);
  };

  const handleCarModel = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h2>Lists of Cars</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)} >
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleCarYear} /> <br />
      <input
        type="text"
        value={carMake}
        onChange={handleCarMake}
        placeholder="Enter Car Make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleCarModel}
        placeholder="Enter Car Model"
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default ArrayOfObject;
