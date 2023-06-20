import React from "react";
import { products } from "../../../../DataSample";
import ProductItem from "../../../../components/product-item/ProductItem";

const AllCategories = () => {
  return (
    <>
      <div className="proud-container">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <ProductItem {...product} product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCategories;
