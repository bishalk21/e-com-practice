import React from "react";
import { products } from "../../../../DataSample";
import { Link } from "react-router-dom";

const ProductItem = () => {
  const filteredProducts = products.filter((product) => product.id <= 8);
  return (
    <>
      {filteredProducts.map((product) => (
        <div className="product normal" key={product.id}>
          <Link
            to={`/categories/product/${product.id}`}
            onClick={() => window.top(0, 0)}
          >
            {/* <div className="product-overlay lil-overlay"></div> */}

            <div className="product-header">
              <img src={product.img} alt="product1" loading="lazy" />
            </div>

            <div className="product-details">
              <p>{product.description}</p>
              <p className="item-price">AU{product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductItem;
