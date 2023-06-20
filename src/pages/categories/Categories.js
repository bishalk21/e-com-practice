import React from "react";
import "./categories.styles.css";
import { Outlet } from "react-router";
import CategoriesHeader from "./components/categories-header/CategoriesHeader";

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
};

export default Categories;
