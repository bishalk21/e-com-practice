import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/shopping-cart.png";

const Navigation = () => {
  return (
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
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
