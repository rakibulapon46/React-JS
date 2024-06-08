import { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");

  const updateName = () => {
    setName("Apon");
  };

  const [age, setAge] = useState(0);

  const incrementAge = () => {
    setAge(age + 2);
  };

  const [isEmployed, setIsEmployed] = useState(false);

  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  }


  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}>Change name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Change name</button>

      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleIsEmployed}>Toggle name</button>
    </>
  );
}

export default MyComponent;
