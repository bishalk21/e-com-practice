import React from "react";
import "./home.styles.css";
import Hero from "./components/hero/Hero";
import ProudProducts from "./components/proud-product/ProudProducts";
import Banner from "./components/banner/Banner";
import banner1 from "./assets/banner/banner1.jpg";
import banner2 from "./assets/banner/banner2.jpg";
import TrendingSlide from "./components/trending-slide/TrendingSlide";

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
      <TrendingSlide />
      <Banner
        reverse={true}
        title="Comfortable & Elegant Living"
        text="g-shop products are all made to standard sizes so that you can mix and match them freely."
        img={banner2}
      />
    </>
  );
};

export default Home;
