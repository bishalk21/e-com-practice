import React from "react";
import "./footer.styles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/about">About</Link>
        <Link to="/store-locator">Store Locator</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/news">News</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact-us">Contact Us</Link>
      </div>

      <p className="love">
        Design by
        <a
          href="http://karkibishal.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bishal Karki
        </a>
      </p>
    </footer>
  );
};

export default Footer;
