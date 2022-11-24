import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Clients from "./Components/Clients";
import Sponsors from "./Components/Sponsors";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Testomonial from "./Components/Testomonial";
import Blog from "./Components/Blog";
import Explore from "./Components/Explore";
import FAQ from "./Components/FAQ";
import Features from "./Components/Features";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Sponsors />
      <Services />
      <Features />
      <Testomonial />
      <Clients />
      <Blog />
      <Explore />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
