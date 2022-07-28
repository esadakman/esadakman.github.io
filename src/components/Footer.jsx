import React from "react";
import FooterStyle, {
  Logos,
  TextStyle,
} from "./componentsStyles/Footer.styled";

const Footer = () => {
  return (
    <FooterStyle>
      <TextStyle>
        <p>
          Copyright &#169;
          {new Date().getFullYear()} Esad Akman
        </p>
      </TextStyle>
      <Logos>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <i className="icon twitter devicon-twitter-original" />
        </a>
        <a href="https://github.com/esadakman" target="_blank" rel="noreferrer">
          <i className="icon github  devicon-github-original" />
        </a>
        <a
          href="https://www.linkedin.com/in/esadakman/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="icon linkedin devicon-linkedin-plain" />
        </a>
      </Logos>
    </FooterStyle>
  );
};

export default Footer;
