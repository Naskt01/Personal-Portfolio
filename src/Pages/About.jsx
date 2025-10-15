import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

import '../Styles.css';


const About = () => {
  return (
  <section className="about-section" id="about">
    <img className= "about_img" src= "/Assets/Myimg2.jpg" alt="About" />
    <div className="right_container">
      <h5>Get To Know</h5>
      <h2>About Me!</h2>
      <h3>Hello, I’m Taniya Naskar — an <span className="color_bg"> MBA</span> graduate and a soon-to-be <span className="color_bg"> Master's in Information Systems</span> , I am passionate about building responsive, interactive, and perfomance-optimized web applications.</h3>
      <h3>When I’m not coding, you’ll probably find me geeking out over the latest <span className="color_bg"> React tricks,</span> testing shiny tools like Tailwind and Framer Motion, or breaking (and fixing) my own portfolio site.</h3>
      <article className="section_cards">
        {/* Section Header */}
        <div className="header">
          <FaGraduationCap className="header_icon" />
          <h4 className="heading">Education</h4>
        </div>
        {/* Education Cards Wrapper */}
        <div className="edu_cards">
          <div className="edu_card">
            <div className="edu_card_header">
              <h2 className="edu_university">Indiana Institute of Technology</h2>
              <img src="/Assets/indytechLogo.jpg" alt="Indiana Tech Logo" className="edu_logo1"/>
            </div>
            <div className="edu_card_body">
              <h6>MS – Information Systems</h6>
              <h6>Graduated: October 2025</h6>
              <h6>GPA: 3.9/4.0</h6>
            </div>              
          </div>
          <div className="edu_card">
            <div className="edu_card_header">
              <h2 className="edu_university">Purdue University</h2>
              <img src="/Assets/purduelogo1.svg" alt="Purdue Logo" className="edu_logo2"/>
            </div>
            <div className="edu_card_body">
              <h6>MBA – Business Analytics</h6>
              <h6>Graduated: May 2024</h6>
              <h6>GPA: 3.9/4.0</h6>
              <h6>Award: Top 50 Student Award</h6>
              <h6>Member: Beta Gamma Sigma Honor Society</h6>
            </div>
          </div>
        </div>
      </article>
      <a href="#contact" className="hero-btn">Let's Talk!</a>
    </div>
  </section>
  );
};

export default About;