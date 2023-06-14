import React from "react";
import "./empty-cart.styles.css";
import emptyCart from "../../../assets/cart/empty-cart.png";

const EmptyCart = ({ openCart }) => {
  return (
    <div className="empty-cart">
      <img src={emptyCart} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={() => openCart()}>Keep Browsing</button>
    </div>
  );
};

export default EmptyCart;
