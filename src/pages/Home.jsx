import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Main from "../components/Main";
import Skills from "../components/Skills";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
