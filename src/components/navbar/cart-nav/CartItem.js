import React, { useState } from "react";
import "./cart-item.styles.css";

const CartItem = ({ cartItems }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  return (
    <>
      {cartItems.map((item, id) => (
        <div className="cart-item" key={id}>
          <div className="cart-img">
            <img src={item.img} alt={item.description} />
          </div>

          <div className="cart-middle">
            <p className="cart-name">{item.description}</p>
            <div className="cart-btns">
              <button onClick={() => decreaseQty()}>-</button>
              <p className="quantity">{quantity}</p>
              <button onClick={() => increaseQty()}>+</button>
            </div>
          </div>

          <div className="cart-right">
            <p className="cart-price">AU{calcPrice(quantity, item.price)}.99</p>
            <i className="fa-sharp fa-solid fa-xmark"></i>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartItem;
