import React from "react";
import "./cart-nav.styles.css";
import EmptyCart from "./EmptyCart";
import CartWithItems from "./CartWithItems";

const CartNav = ({ cartItems, setCart, cart, openCart }) => {
  return (
    <div className={`cart-div ${cart ? "open-cart" : "closed-cart"}`}>
      <div className="cart-title-btn">
        <h2 className="cart-full-h2">
          Your Shopping Cart ({cartItems.length})
        </h2>
        <i
          onClick={() => openCart()}
          className="fa-sharp fa-solid fa-xmark"
        ></i>
      </div>

      <div className="cart-body">
        {cartItems.length < 1 ? (
          <EmptyCart openCart={openCart} />
        ) : (
          <CartWithItems cartItems={cartItems} setCart={setCart} />
        )}
      </div>
    </div>
  );
};

export default CartNav;
