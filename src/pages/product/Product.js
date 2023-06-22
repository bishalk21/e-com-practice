import React, { createContext, useContext, useState } from "react";
import "./product.styles.css";
import TrendingSlide from "../home/components/trending-slide/TrendingSlide";
import { products } from "../../DataSample";

export const CartContext = createContext();

const Product = () => {
  const productItem = products.filter((item) => item.id === parseInt(item.id));
  //   const { addToCart } = useContext(CartContext);

  const [image, setImage] = useState(productItem[0].img);

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  const [quantity, setQuantity] = useState(1);
  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity) => {
    return quantity * productItem[0].price;
  };

  const [notify, setNotify] = useState(false);

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <div
        onAnimationEnd={() => setNotify(false)}
        className={`notify ${notify ? "slide-in" : ""}`}
      >
        <p>Item has been added to your cart &nbsp; ✅</p>
      </div>

      <div className="product-page-div">
        <div className="container">
          <div className="product-div">
            <h3 className="product-title">Comfy Chair</h3>
            <div className="product-left">
              <div className="main-img">
                <img src={image} alt="main-product" loading="lazy" />
              </div>
              <div className="side-imgs">
                <img
                  src={productItem[0].img}
                  alt="p1"
                  onMouseOver={changeImage}
                />
                <img
                  src={productItem[0].otherImgs[0]}
                  alt="p2"
                  onMouseOver={changeImage}
                />
                <img
                  src={productItem[0].otherImgs[1]}
                  alt="p3"
                  onMouseOver={changeImage}
                />
              </div>
            </div>
            <div className="product-right">
              <p className="product-spec">{productItem[0].specs}</p>
              <div className="product-quant">
                <p>Quantity</p>
                <div className="product-btns">
                  <button onClick={decrease}>-</button>
                  <p className="quantity">{quantity}</p>
                  <button onClick={increase}>+</button>
                </div>
                <div className="product-price">{calcPrice(quantity)}.00$</div>
              </div>

              <div className="atc-buy">
                <button
                  className="atc-btn"
                  //   onClick={() => {
                  //     addToCart(productItem[0]);
                  //     showNotify();
                  //   }}
                >
                  add to cart
                </button>
                <button className="buy-btn">buy now</button>
              </div>
            </div>
          </div>

          <div className="specifications">
            <div className="spec">
              <p className="spec-title">Texture:</p>
              <p className="title-desc">{productItem[0].texture}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Weight:</p>
              <p className="title-desc">{productItem[0].weight}</p>
            </div>
            <div className="spec">
              <p className="spec-title">Size:</p>
              <p className="title-desc">{productItem[0].size}</p>
            </div>
          </div>
        </div>

        <TrendingSlide />
      </div>
    </>
  );
};

export default Product;
