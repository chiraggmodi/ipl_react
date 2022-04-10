import React from "react";
import CurrentMatch from "../Components/CurrentMatch";
import Header from "../Components/Header";
import HomeSlider from "../Components/HomeSlider";
import "./cricket_style.css"

const Home = () => {
  return (
    <>
    <Header />
      <HomeSlider />
      <CurrentMatch />
    </>
  );
};

export default Home;
