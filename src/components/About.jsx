import React from "react";
import {
  AboutContainer,
  AboutParagraph,
  IMG,
  Title,
} from "./componentsStyles/About.styled";
import mando from "../assets/mando.png";

const About = () => {
  return (
    <AboutContainer>
      <Title>About Esad</Title>
      <IMG src={mando} alt="picture"></IMG>
      <AboutParagraph>
        <p>
          A web developer who is proficient in front-end frameworks. Has the
          ability to create algorithms, interact positively, and communicate
          appropriately with team members. Able to grasp new technologies and
          concepts quickly to develop innovative and creative solutions to
          problems. Always eager to learn new technologies, tools, libraries and
          other things. Committed to utilizing skills to further the mission of
          a company.
        </p>
      </AboutParagraph>
    </AboutContainer>
  );
};

export default About;
