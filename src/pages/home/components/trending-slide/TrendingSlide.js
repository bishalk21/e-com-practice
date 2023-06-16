import React from "react";
import "./trending-slide.styles.css";
import ProductItem from "../../../../components/product-item/ProductItem";

const TrendingSlide = () => {
  const slide = (dir) => {
    let slider = document.getElementById("slider");
    slider.scrollLeft += dir * 235;
  };

  return (
    <div className="trending">
      <div className="container">
        <div className="title-btns">
          <h3>Trending Now</h3>
          <div className="btns">
            <button title="scroll left" onClick={() => slide(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button title="scroll right" onClick={() => slide(1)}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="row-container" id="slider">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingSlide;
