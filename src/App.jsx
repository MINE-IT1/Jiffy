import React from "react";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/layout/HeroSection";
import About from "./components/About/About";

const App = () => {
  return (
    <>
      <Router>
      
        <HeroSection />{/* it contains header(navbar) */}
        <About />
        <div className="text-center">Jiffy home page</div>
      </Router>
    </>
  );
};

export default App;
