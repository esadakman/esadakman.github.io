import React from "react";
import { motion } from "framer-motion";
import {
  Body,
  HeroActions,
  HeroButton,
  HeroTagline,
  LinesWrapper,
  Paragraph,
  ScrollCue,
  SkewLine,
} from "./componentsStyles/Main.styled";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 69;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Main = () => {
  return (
    <div style={{ minHeight: "100vh", width: "100%", display: "flex" }}>
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
            <Paragraph>Frontend</Paragraph>
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <HeroTagline>
            Frontend developer crafting <span>fast</span>,{" "}
            <span>data-heavy</span> web applications.
          </HeroTagline>
          <HeroActions>
            <HeroButton primary onClick={() => scrollToId("projects")}>
              View Projects
            </HeroButton>
            <HeroButton onClick={() => scrollToId("contact")}>
              Get in Touch
            </HeroButton>
          </HeroActions>
        </motion.div>

        <ScrollCue />
      </Body>
    </div>
  );
};

export default Main;
