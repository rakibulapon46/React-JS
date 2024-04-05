function Food() {

  const food1 = "Banana";
  const food2 = "coconut";

  return (
    <div>
      <ul>
        <li>
          <a href="#">Apple</a>
        </li>
        <li>
          <a href="#">{food1}</a>
        </li>
        <li>
          <a href="#">{food2.toUpperCase()}</a>
        </li>
        <li>
          <a href="#">Kiwi</a>
        </li>
      </ul>
    </div>
  );
}
export default Food