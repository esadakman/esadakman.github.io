import React from "react";
import About from "../components/About";
import Education from "../components/Education";

import Main from "../components/Main";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Projects />
      <Education />
    </div>
  );
};

export default Home;
