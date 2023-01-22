import React from "react";
import About from "../About/About";
import Services from "../Services/Services";
import HeroOne from "./HeroSection/HeroOne/HeroOne";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <HeroOne />
        <About />
        <Services />
      </div>
    </>
  );
};

export default Home;
