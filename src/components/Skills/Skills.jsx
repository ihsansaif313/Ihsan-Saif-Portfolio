import React from "react";
import { skills } from "../../data/constants.js";
import "./Skills.css";

const Skills = () => {
  return (
    <div id="skills" className="skills-section-container">
      <div className="skills-wrapper">
        <h2 className="skills-title">Skills</h2>
        <p className="description">
          Here are some of my skills on which i am working and have made
          projects.
        </p>
        <div className="skills-container">
          {skills.map((item) => {
            return (
              <div className="skill">
                <div className="skill-title">{item.title}</div>
                <div className="skill-list">
                  {item.skills.map((skill) => {
                    return (
                      <div className="skill-item">
                        <img src={skill.image} className="skill-icon" alt="" />
                        <div className="skill-name">{skill.name}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
