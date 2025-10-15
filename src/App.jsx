import React from "react";
import Navbar from "./Pages/Navbar";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Experience from "./Pages/Experience";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

import './Styles.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;