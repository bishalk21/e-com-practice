import React from "react";
import "./home.styles.css";
import Hero from "./components/hero/Hero";
import ProudProducts from "./components/proud-product/ProudProducts";

const Home = () => {
  return (
    <>
      <Hero />
      <ProudProducts />
    </>
  );
};

export default Home;
