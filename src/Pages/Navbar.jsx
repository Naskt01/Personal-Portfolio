import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaLaptopCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import "../Styles.css";

const Navbar = () => {
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const sections = ["hero", "about", "experience", "portfolio", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const bottom = top + element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="icon-navbar">
      <a href="#hero" className={active === "#hero" ? "active" : ""}><FaHome /></a>
      <a href="#about" className={active === "#about" ? "active" : ""}><FaUser /></a>
      <a href="#experience" className={active === "#experience" ? "active" : ""}><FaLaptopCode /></a>
      <a href="#portfolio" className={active === "#portfolio" ? "active" : ""}><FaProjectDiagram /></a>
      <a href="#contact" className={active === "#contact" ? "active" : ""}><FaEnvelope /></a>
    </nav>
  );
};

export default Navbar;

