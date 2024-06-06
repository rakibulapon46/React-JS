import PropTypes from "prop-types";

function List(props) {
  // fruits.sort((a,b) => a.name.localeCompare(b.name));  // ALPHABETICAL
  // fruits.sort((a,b) => b.name.localeCompare(a.name));  // REVERSE ALPHABETICAL
  // fruits.sort((a,b) => a.calories - b.calories)  // NUMERIC
  // fruits.sort((a,b) => b.calories - a.calories)  // REVERSE NUMERIC

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 80);
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 80);

  // const listItems = lowCalFruits.map((lowCalFruit) =>
  //   <li key={lowCalFruit.id}>{lowCalFruit.name} : &nbsp; <b>{lowCalFruit.calories}</b></li>
  // );

  // const listItems = highCalFruits.map((highCalFruit) =>
  //   <li key={highCalFruit.id}>{highCalFruit.name} : &nbsp; <b>{highCalFruit.calories}</b></li>
  // );

  const itemList = props.items;
  const category = props.category;

  const listItems = itemList.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name} : &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list_category">{category}</h3>
      <ol className="list_items">{listItems}</ol>
    </>
  );
}

List.prototype = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
