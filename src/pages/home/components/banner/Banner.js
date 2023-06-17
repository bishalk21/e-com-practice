import React from "react";
import "./banner.styles.css";
import { Link } from "react-router-dom";

const Banner = ({ title, text, img, reverse }) => {
  return (
    <div className="banner">
      <div className="container">
        <div
          className={`banner-container ${
            reverse ? "banner-container-reverse" : ""
          }`}
        >
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="categories/all">
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} loading="lazy" alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
