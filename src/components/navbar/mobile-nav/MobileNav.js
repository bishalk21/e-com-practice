import React from "react";
import "./mobile-nav.styles.css";
import { Link } from "react-router-dom";
import imgLogo from "../../../assets/images/shopping-cart.png";

const MobileNav = ({ mobileNavbar, handleOnClick }) => {
  return (
    <nav
      className={`mobile-nav-full ${
        mobileNavbar ? "open-flex" : "closed-flex"
      }`}
    >
      <i class="fa-sharp fa-solid fa-xmark" onClick={() => handleOnClick()}></i>

      <div className="logo">
        {" "}
        <Link to="/" onClick={() => handleOnClick()}>
          <img src={imgLogo} alt="logo" loading="lazy" className="logo-img" />
        </Link>
      </div>

      <div className="mobile-links">
        <Link onClick={() => handleOnClick()} to="/categories/all">
          categories
        </Link>
        <Link onClick={() => handleOnClick()} to="/categories/lamps">
          lamps
        </Link>
        <Link onClick={() => handleOnClick()} to="/categories/product/19">
          product page
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
