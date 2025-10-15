import React from 'react';

import "../Styles.css";

const data = [

  {
    id: 1,
    image: "/Assets/project1.png",
    title: "Dice Game",
    github: "https://github.com/Naskt01/The-Dice-Challenge",
    demo: "https://naskt01.github.io/The-Dice-Challenge/",
  },

  {
    id: 2,
    image: "/Assets/project2.png",
    title: "Drum Kit",
    github: "https://github.com/Naskt01/Drum-Kit",
    demo: "https://naskt01.github.io/Drum-Kit/",
  },

  {
    id: 3,
    image: "/Assets/project3.png",
    title: "The Simon Game",
    github: "https://github.com/Naskt01/The-Simon-Game",
    demo: "https://naskt01.github.io/The-Simon-Game/",
  },
  {
    id: 4,
    image: "/Assets/project4.png",
    title: "ClassTime-a teacher scheduling web app",
    github: "https://github.com/Naskt01/ClassTime.git",
    demo: "https://youtu.be/yfIacRiZpy4",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-heading">
        <h5>My Recent Projects</h5>
        <h2>Portfolio</h2>
      </div>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} loading="lazy" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="hero-btn" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
                <a href={demo} className="hero-btn" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <p className="end-line">
        more coming soon<span className="dots"></span>
      </p>
    </section>
  );
}

export default Portfolio;
