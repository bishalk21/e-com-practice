import React from "react";
import { Link } from "react-router-dom";
import "./hero.styles.css";
import imgFurniture from "../assets/header/home-img-1.jpg";
import imgSkinCare from "../assets/header/home-img-2.jpg";
import imgKitchen from "../assets/header/home-img-3.jpg";
import imgElectronics from "../assets/header/home-img-4.jpg";

const Hero = () => {
  return (
    <div className="home-container">
      <div className="container">
        <div className="grid-container">
          <div className="featured grid-one">
            <Link to="categories/furnitures">
              <div id="img1" className="lil-overlay"></div>
              <img src={imgFurniture} loading="lazy" alt="img1" />
              <p className="main-description">Live Confortably</p>
            </Link>
          </div>

          <div className="featured grid-two">
            <Link to="categories/skin-care">
              <div id="img2" className="lil-overlay"></div>
              <img src={imgSkinCare} loading="lazy" alt="img2" />
              <p className="main-description">Skin Care</p>
            </Link>
          </div>

          <div className="featured grid-four">
            <Link to="categories/kitchen">
              <div id="img3" className="lil-overlay"></div>
              <img src={imgKitchen} loading="lazy" alt="img3" />
              <p className="main-description">Kitchens & Bathrooms</p>
            </Link>
          </div>
          <div className="featured grid-four-low">
            <Link to="categories/electronics">
              <div id="img4" className="lil-overlay"></div>
              <img src={imgElectronics} loading="lazy" alt="img4" />
              <p className="main-description">Electronic Devices</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
