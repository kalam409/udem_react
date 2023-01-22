import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/trydoRainbowit/Header/Header";
import Home from "./components/trydoRainbowit/Pages/Home/Home";
import Services from "./components/trydoRainbowit/Pages/Services/Services";
import About from "./components/trydoRainbowit/Pages/About/About";
import Blogs from "./components/trydoRainbowit/Pages/Blogs/Blogs";
import Contact from "./components/trydoRainbowit/Pages/Contact/Contact";
import PortfolioDetails from "./components/trydoRainbowit/OurWorks/Carousel/PortfolioDetails/PortfolioDetails";

const App = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}>
            {/* <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/protfolio-details" element={<PortfolioDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;