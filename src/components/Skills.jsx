import React from "react";
import { SkillIcons, SkillsContainer } from "./componentsStyles/Skills.styled";
import styled from "../assets/styledComponents.svg";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const Skills = () => {
  return (
    <SkillsContainer> 
      <ProjectsTitles>Skills</ProjectsTitles>
      <SkillIcons>
        <div className="iconContainer">
          <i className="icon devicon-html5-plain"></i>
          <span className="name">HTML5</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-css3-plain"></i>
          <span className="name">CSS3</span>
        </div>

        <div className="iconContainer">
          <i className="icon devicon-javascript-plain"></i>
          <span className="name">JavaScript</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-react-plain"></i>
          <span className="name">ReactJS</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-redux-original"></i>
          <span className="name">Redux</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-python-plain"></i>
          <span className="name">Python</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-django-plain"></i>
          <span className="name">Django</span>
        </div> 
        <div className="iconContainer">
          <i className="icon devicon-sass-plain"></i>
          <span className="name">Sass</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-bootstrap-plain"></i>
          <span className="name">Bootstrap</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-tailwindcss-plain"></i> 
          <span className="name">TailwindCSS</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-materialui-plain"></i>
          <span className="name">Material UI</span>
        </div>
        <div className="iconContainer">
          <img src={styled} alt="" />
          <span className="name">Styled Comp.</span>
        </div> 
        <div className="iconContainer">
          <i className="icon devicon-firebase-plain"></i>
          <span className="name">Firebase</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-git-plain"></i>
          <span className="name">Git</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-github-original"></i>
          <span className="name">Github</span>
        </div>

        <div className="iconContainer">
          <i className="icon devicon-linux-plain"></i>
          <span className="name">Linux</span>
        </div>

        <div className="iconContainer">
          <i className="icon devicon-visualstudio-plain"></i>
          <span className="name">Visual Studio</span>
        </div>
        <div className="iconContainer">
          <i className="icon devicon-jira-plain"></i>
          <span className="name">Jira</span>
        </div>
      </SkillIcons>
    </SkillsContainer>
  );
};

export default Skills;
