import React from "react";
import { Body, LinesWrapper, Paragraph, SkewLine } from "./styles/Home.styled";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Body>
        <LinesWrapper>
          <SkewLine>
            <Paragraph></Paragraph>
            <Paragraph>Lorem</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>Lorem</Paragraph>
            <Paragraph>IPSUM</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>IPSUM</Paragraph>
            <Paragraph>DOLOR</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>DOLOR</Paragraph>
            <Paragraph>SIT AMET</Paragraph>
          </SkewLine>
          <SkewLine>
            <Paragraph>SIT AMET</Paragraph>

            <Paragraph></Paragraph>
          </SkewLine>
        </LinesWrapper>
      </Body>
    </div>
  );
};

export default Home;
