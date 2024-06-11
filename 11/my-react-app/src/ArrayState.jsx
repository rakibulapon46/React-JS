import { useState } from "react";

function ArrayState() {
  const [foods, SetFoods] = useState(["apple", "orange", "banana"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    SetFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    SetFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>

      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default ArrayState;
