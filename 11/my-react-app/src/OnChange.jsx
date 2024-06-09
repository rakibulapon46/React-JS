// onChange  = event handler used primarily with form elements
//            ex/ <input>, <textarea>, <select>, <radio>
//            triggers a function every time the value of the input changes

import { useState } from "react";

function OnChange() {
  const [name, setName] = useState("Guest");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const [quantity, setQuantity] = useState(0);
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  const [comment, setComment] = useState();
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const [payment, setPayment] = useState("Visa");
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  };

  const [shipping, setShipping] = useState("Delivery");
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>

      <input type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Entry delivery instructions"
      ></textarea>
      <p>Comment: {comment}</p>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment: {payment}</p>

      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </>
  );
}

export default OnChange;
