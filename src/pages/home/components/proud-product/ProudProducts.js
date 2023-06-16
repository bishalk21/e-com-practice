import React from "react";
import "./proud-product.styles.css";
import ProductItem from "../../../../components/product-item/ProductItem";

const ProudProducts = () => {
  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Products we are proud of</h2>
      <div className="container">
        <div className="products-grid">
          <ProductItem />
        </div>
      </div>
    </div>
  );
};

export default ProudProducts;
