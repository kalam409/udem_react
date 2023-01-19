import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/trydoRainbowit/Header/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/trydoRainbowit/Pages/Home/Home';
import About from './components/trydoRainbowit/Pages/About/About';
import Pages from './components/trydoRainbowit/Pages/Pages';

const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
      <Header />
      <Pages />
    </>
  );
};

export default App;