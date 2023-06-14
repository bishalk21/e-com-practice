import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";

const CartWithItems = ({ cartItems, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);
  return (
    <>
      <div className="full-cart-div">
        <div className="full-cart">
          {cartItems.map((item, id) =>
            cartItems.length !== 0 ? (
              <CartItem
                key={id}
                item={item}
                cartItems={cartItems}
                setCart={setCart}
              />
            ) : (
              <EmptyCart key={id} />
            )
          )}
        </div>
      </div>
      <div className="subtotal-div">
        <div className="sub-right">
          <p>Subtotal</p>
          <p className="total-price">${totalPrice}.99</p>
        </div>
        <div className="sub-left">
          <Link to="/checkout">Go to Checkout</Link>
        </div>
      </div>
    </>
  );
};

export default CartWithItems;
