import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import CTA from "../Components/CTA"
import "../Styles.css";

function Hero() {
  return (
    <section className="hero" id ="hero">
        <div className= "top">
            <img className="circle-img" src= "/Assets/Myimg.jpg" alt="Taniya Naskar"/>
        </div>
        <h1 className="hero-name">Hi! I'm Taniya Naskar</h1>
        <p className="hero-tagline">
            | Web Developer | MS Information Systems | Coffee Enthusiast | Traveler | Foodie | Lifelong Learner |        </p>
      <div className="social-icons">
        <a href="https://github.com/Naskt01" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/taniya.naskar" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/__hazylnutt__/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/taniyanaskar07/" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <div className="hero-buttons">
        <CTA />
        <a href="#about" className="hero-btn">More About Me</a>
      </div>
    </section>
  ); 
}

export default Hero;
