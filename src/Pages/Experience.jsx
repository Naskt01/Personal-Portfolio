import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

import "../Styles.css";

const Experience = () => {
  const skills = {
    "Technical Skills": [
      "Web Development & System Design",
      "DBMS, Data Governance & Information Systems",
      "Data Structure & Algorithms",
      "Data Analysis & Visualization",
    ],
    "Web & Database": [
      "HTML/CSS",
      "REST API",
      "SQL, NoSQL, PostgreSQL",
      "Bootstrap",
      "Node.js & Express.js",
      "React.js",
    ],
    "Data Analytics & Visualization": [
      "Python",
      "Power BI",
      "Tableau",
      "Data Analysis",
      "Data Visualization",
    ],
    "Tools & Platforms": [
      "Git & GitHub", 
      "Jira", 
      "VS Code", 
      "Postman",
      "CodeSandbox"
    ],
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="experience-grid">{Object.entries(skills).map(([category, items]) => (
                <div className={`experience-card ${category === "Technical Skills" ? "technical" : ""}`} key={category}>
                    <h3>{category}</h3>
                    <div className="experience-content">
                        {items.map((item) => (
                        <article className="experience-details" key={item}>
                            <BsFillPatchCheckFill className="icons" />
                            <h4>{item}</h4>
                        </article>
                        ))}
                    </div>
                </div>
            ))}</div>
        </div>
    </section>
  );
};

export default Experience;
