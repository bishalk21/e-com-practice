import React, { useState } from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/shopping-cart.png";
import MobileNav from "./mobile-nav/MobileNav.js";

const Navigation = () => {
  const [mobileNavbar, setMobileNavbar] = useState(false);

  const cartItems = ["apple", "banana", "mango", "banana", "mango"];

  const handleOnClick = () => {
    setMobileNavbar(!mobileNavbar);
  };

  return (
    <>
      <MobileNav mobileNavbar={mobileNavbar} handleOnClick={handleOnClick} />
      <nav className="navbar">
        <div className="container">
          <div className="nav-container">
            <Link to="/">
              <img src={imgLogo} alt="logo" className="logo-img" />
            </Link>

            <div className="nav-links">
              <Link to="/categories/all">categories</Link>
              <Link to="/categories/product">Products page</Link>
              <Link to="/login">
                <i class="fa-solid fa-user"></i>
              </Link>
              <i
                data-array-length={cartItems.length}
                class={`fa-solid fa-cart-shopping ${
                  cartItems.length < 1
                    ? "cart-icon"
                    : "cart-icon cart-icon-with-items"
                }`}
              ></i>
            </div>

            <div className="hamburger-menu">
              <i
                data-array-length={cartItems.length}
                class={`fa-solid fa-cart-shopping hamburger-cart ${
                  cartItems.length < 1
                    ? "cart-icon"
                    : "cart-icon cart-icon-with-items"
                }`}
              ></i>
              <i
                class="fa-solid fa-burger burger-menu"
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
