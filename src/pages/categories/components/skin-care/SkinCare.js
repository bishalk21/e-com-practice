import React from "react";
import { products } from "../../../../DataSample";
import ProductItem from "../../../../components/product-item/ProductItem";

const SkinCare = () => {
  const filteredProducts = products.filter(
    (product) => product.category === "skin-care"
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

export default SkinCare;
