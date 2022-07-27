import React from "react";
import { SkillIcons, SkillsContainer } from "./componentsStyles/Skills.styled";

const Skills = () => {
  return (
    <SkillsContainer>
      <h1 className="title">Skills</h1>
      <SkillIcons>
        <div className="iconContainer">
          <i className="icon devicon-html5-plain"></i>
          <span className="name">HTML 5</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-css3-plain"></i>
          <span className="name">CSS 3</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-sass-plain"></i>
          <span className="name">Sass</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-javascript-plain"></i>
          <span className="name">JavaScript</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-python-plain"></i>
          <span className="name">Python</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-react-plain"></i>
          <span className="name">React</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-redux-original"></i>
          <span className="name">Redux</span>
        </div>

        <div className="iconContainer">
          <i className="icon devicon-git-plain"></i>
          <span className="name">Git</span>
        </div>

        <div className="iconContainer">
          <i className="icon devicon-visualstudio-plain"></i>
          <span className="name">Visual Studio</span>
        </div>
      </SkillIcons>
    </SkillsContainer>
  );
};

export default Skills;
