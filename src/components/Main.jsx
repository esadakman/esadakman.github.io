import React from "react";
import {
  Body,
  LinesWrapper,
  Paragraph,
  SkewLine,
} from "./componentsStyles/Main.styled";

const Main = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Body>
        <LinesWrapper>
          <SkewLine>
            <Paragraph></Paragraph>
            <Paragraph>ESAD</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>ESAD</Paragraph>
            <Paragraph>AKMAN</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>AKMAN</Paragraph>
            <Paragraph>Backend</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>Frontend</Paragraph>
            <Paragraph>Developer</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>Developer</Paragraph>

            <Paragraph></Paragraph>
          </SkewLine>
        </LinesWrapper>
      </Body>
    </div>
  );
};

export default Main;
