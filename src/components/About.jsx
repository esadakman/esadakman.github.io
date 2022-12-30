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
    <AboutContainer id="about">
      <ProjectsTitles>About Esad</ProjectsTitles>
      <IMG src={pp} alt="picture"></IMG>
      <AboutParagraph>
        <p>Hello there! My name is Esad</p>
        <p>
          {" "}
          I am a web developer with expertise in front-end frameworks. I have a
          strong ability to develop complex solutions and create user-friendly
          designs and solid understanding of JavaScript, ReactJS, Python, and
          Django. I am a team player with excellent analytical thinking skills
          and the ability to adapt quickly to new technologies and always
          looking to learn and improve my skills.
        </p>
        <p>
          Thank you for visiting my portfolio site. I hope you find my skills
          and experience to be a good fit for your project or company. I am
          ready to put my skills to work and help your company achieve its
          goals. Let's create something amazing together!
        </p>
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;

// {
//   /* <p>
//     Hello there! My name is Esad and I am a web developer with expertise
//     in front-end frameworks. I have a strong ability to develop complex
//     solutions and create user-friendly designs. I am a team player with
//     excellent analytical thinking skills and the ability to adapt quickly
//     to new technologies.{" "}
//   </p>{" "}
//   <p>
//     I have a solid understanding of JavaScript, React, Python, and Django,
//     and am always looking to learn and improve my skills. I am dedicated
//     to achieving my goals and am committed to using my skills to further
//     the mission of a company. I am self-disciplined, reliable, and always
//     eager to take on new challenges.{" "}
//   </p>{" "}
//   <p>
//     As a web developer, I am passionate about creating solutions that make
//     a real difference. Whether it's building a website, creating a mobile
//     app, or developing a complex system, I am committed to delivering
//     high-quality results that exceed expectations.{" "}
//   </p>{" "}
//   <p>
//     If you're looking for a web developer who is skilled, reliable, and
//     dedicated to their craft, look no further! I am ready to put my skills
//     to work and help your company achieve its goals. Let's work together
//     and create something amazing!
//   </p> */
// }
