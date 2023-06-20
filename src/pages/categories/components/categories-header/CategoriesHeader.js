import React, { useState } from "react";
import "./cat-header.styles.css";
import { Link } from "react-router-dom";

const CategoriesHeader = () => {
  const [catTitle, setCatTitle] = useState("All");

  const handleOnCatChange = (e) => {
    setCatTitle(e);
  };

  return (
    <div className="container">
      <div className="cat-header">
        <div className="go-to-home">
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <i className="fa-solid fa-angle-left"></i> Home
          </Link>
          <h3>{catTitle} </h3>
        </div>

        <div className="cat-lists">
          <Link to="all">
            <button onClick={() => handleOnCatChange("all")}>All</button>
          </Link>
          <Link to="furnitures">
            <button onClick={() => handleOnCatChange("furnitures")}>
              Furnitures
            </button>
          </Link>
          {""}
          <Link to="electronics">
            <button onClick={() => handleOnCatChange("electronics")}>
              Electronics
            </button>
          </Link>{" "}
          <Link to="lamps">
            <button onClick={() => handleOnCatChange("lamps")}>Lamps</button>
          </Link>{" "}
          <Link to="kitchen">
            <button onClick={() => handleOnCatChange("kitchen")}>
              Kitchen
            </button>
          </Link>{" "}
          <Link to="chairs">
            <button onClick={() => handleOnCatChange("chairs")}>Chairs</button>
          </Link>
          <Link to="skin-care">
            <button onClick={() => handleOnCatChange("skin care")}>
              Skin Care
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesHeader;
