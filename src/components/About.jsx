import React from "react";
import {
  AboutContainer,
  AboutParagraph,
  IMG,
  Title,
} from "./componentsStyles/About.styled";
import pp from "../assets/pp.jpeg";

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>About Esad</Title>
      <IMG src={pp} alt="picture"></IMG>
      <AboutParagraph>
        <p>
          A web developer who is proficient in front-end frameworks. Skilled at devoloping complex solutions, creating user friendly designs, excellent and dependable team player with strong analytical thinking skills. Learns and adapts to new technologies quickly, and create new solutions according to problems.  Knowledgeable in JavaScript, React, Python and Django. Always persist in their goals, self-disciplined and reliable. Committed to utilizing skills to further the mission of a company.
        </p>
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
