import React, { useState } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/shopping-cart.png";
import MobileNav from "./mobile-nav/MobileNav.js";
import CartNav from "./cart-nav/CartNav";
import { items as cartItems } from "../../DataSample";

const Navigation = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [cart, setCart] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleOnScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleOnScroll);

  const handleOnClick = () => {
    setMobileNavbar(!mobileNavbar);
  };

  const openCart = () => {
    setCart(!cart);
  };

  return (
    <>
      <MobileNav mobileNavbar={mobileNavbar} handleOnClick={handleOnClick} />
      <CartNav
        cartItems={cartItems}
        setCart={setCart}
        cart={cart}
        openCart={openCart}
      />
      <div
        onClick={() => openCart()}
        className={`page-overlay ${cart ? "open-flex" : "closed-flex"}`}
      ></div>
      <nav className="navbar">
        <div className="container">
          <div className={`nav-container ${sticky ? "sticky-nav" : ""}`}>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={imgLogo}
                alt="logo"
                loading="lazy"
                className="logo-img"
              />
            </Link>

            <div className="nav-links">
              <Link to="/categories/all">categories</Link>
              <Link to="/categories/product">Products page</Link>
              <Link to="/login">
                <i className="fa-solid fa-user"></i>
              </Link>
              <i
                onClick={() => openCart()}
                data-array-length={cartItems.length}
                className={`fa-solid fa-cart-shopping ${
                  cartItems.length < 1
                    ? "cart-icon"
                    : "cart-icon cart-icon-with-items"
                }`}
              ></i>
            </div>

            <div className="hamburger-menu">
              <i
                title="cart"
                onClick={() => openCart()}
                data-array-length={cartItems.length}
                className={`fa-solid fa-cart-shopping hamburger-cart ${
                  cartItems.length < 1
                    ? "cart-icon"
                    : "cart-icon cart-icon-with-items"
                }`}
              ></i>
              <Link to="/login" title="Account">
                <i className="fa-solid fa-user"></i>
              </Link>
              <i
                title="menu"
                className="fa-solid fa-bars burger-menu"
                onClick={() => handleOnClick()}
              ></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
