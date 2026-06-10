import React from "react";
import {
  AboutContainer,
  AboutParagraph,
  IMG,
} from "./componentsStyles/About.styled";
import pp from "../assets/pp.jpeg";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";
import Reveal from "./Reveal";

const About = () => {
  return (
    <AboutContainer id="about" name="about">
      <Reveal>
        <ProjectsTitles>About Esad</ProjectsTitles>
      </Reveal>
      <Reveal delay={0.1}>
        <IMG src={pp} alt="Esad Akman" />
      </Reveal>
      <AboutParagraph>
        <p>Hello there! My name is Esad</p>
        <p>
          {" "}
          I am a frontend developer who leads a UI development team building
          enterprise, data-heavy web applications. My work centers on complex,
          responsive interfaces, real-time data integration, and clean
          collaboration with backend teams over REST APIs.
        </p>
        <p>
          I have a strong grasp of JavaScript, TypeScript, and the React
          ecosystem, and I enjoy the details that make a product feel solid —
          from building complex, responsive user interfaces to modernizing
          tooling and keeping the codebase fast and maintainable.
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
