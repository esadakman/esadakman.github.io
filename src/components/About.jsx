import React from "react";
import {
  AboutContainer,
  AboutParagraph,
  IMG,
} from "./componentsStyles/About.styled";
import pp from "../assets/pp.jpeg";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const About = () => {
  return (
    <AboutContainer id="about" name="about">
      <ProjectsTitles>About Esad</ProjectsTitles>
      <IMG src={pp} alt="picture"></IMG>
      <AboutParagraph>
        <p>Hello there! My name is Esad</p>
        <p>
          {" "}
          I am a web developer with expertise in front-end frameworks, skilled
          in creating complex solutions and user-friendly designs. I have a
          strong grasp of JavaScript, jQuery and ReactJS. As a team player with
          excellent analytical skills, I quickly adapt to new technologies and
          constantly seek to improve my abilities.
        </p>
        <p>
          Thank you for visiting my portfolio site. I am excited to leverage my
          skills to help your company achieve its goals. Let's create something
          amazing together!
        </p>
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
