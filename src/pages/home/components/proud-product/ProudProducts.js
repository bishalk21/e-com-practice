import React from "react";
import "./proud-product.styles.css";
import { products } from "../../../../DataSample";
import ProductItem from "../../../../components/product-item/ProductItem";

const ProudProducts = () => {
  const filteredProducts = products.filter((product) => product.id <= 8);

  return (
    <div className="proud-container">
      <h2 className="container proud-h2">Products we are proud of</h2>
      <div className="container">
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductItem {...product} product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProudProducts;
