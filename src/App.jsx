import React from "react";
import Header from "./components/layout/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/layout/HeroSection";
import About from "./components/About/About";
import Features from "./components/Features";
import ValueSection from "./components/ValueSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>
      <Router>
        <HeroSection />
        {/* it contains header(navbar) */}
        {/* <Header /> */}
        <About />
        <Features />
        <ValueSection />
        <Contact />
        <Footer />
      </Router>
    </>
  );
};

export default App;
