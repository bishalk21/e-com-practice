import React from "react";
import { products } from "../../../../DataSample";
import ProductItem from "../../../../components/product-item/ProductItem";

const Furnitures = () => {
  const filteredProducts = products.filter(
    (product) => product.category === "furniture"
  );

  return (
    <div className="proud-container">
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

export default Furnitures;
