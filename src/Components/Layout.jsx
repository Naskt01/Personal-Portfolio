import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero-name">Your Name</h1>
      <p className="hero-tagline">
        | Engineer | Programmer | Web Developer | Photographer | Athlete | Artist |
      </p>

      <div className="social-icons">
        <a href="https://github.com/yourprofile" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <a href="#about" className="hero-btn">More about me</a>
    </section>
  );
}

export default Hero;

