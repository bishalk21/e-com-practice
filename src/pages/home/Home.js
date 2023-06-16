import React from "react";
import "./home.styles.css";
import Hero from "./components/hero/Hero";
import ProudProducts from "./components/proud-product/ProudProducts";
import Banner from "./components/banner/Banner";
import banner1 from "./assets/banner/banner1.jpg";

const Home = () => {
  return (
    <>
      <Hero />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        text="g-shop products are all made to standard sizes so that you can mix and match them freely."
        img={banner1}
      />
    </>
  );
};

export default Home;
