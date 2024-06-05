function List() {
  const fruits = [
    { id: 1, name: "apple", calories: 52 },
    { id: 2, name: "orange", calories: 47 },
    { id: 3, name: "coconut", calories: 354 },
    { id: 4, name: "banana", calories: 89 },
    { id: 5, name: "pineapple", calories: 50 },
  ];

  // fruits.sort((a,b) => a.name.localeCompare(b.name));  // ALPHABETICAL
  // fruits.sort((a,b) => b.name.localeCompare(a.name));  // REVERSE ALPHABETICAL
  // fruits.sort((a,b) => a.calories - b.calories)  // NUMERIC
  // fruits.sort((a,b) => b.calories - a.calories)  // REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 80);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 80);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  // const listItems = lowCalFruits.map((lowCalFruit) =>
  //   <li key={lowCalFruit.id}>{lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b></li>
  // );

  // const listItems = highCalFruits.map((highCalFruit) =>
  //   <li key={highCalFruit.id}>{highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b></li>
  // );

  return (
    <>
      <ol>{listItems}</ol>
    </>
  );
}

export default List;
