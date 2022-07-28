import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import HtmlCssProjects from "../components/projectsComponents/HtmlCssProjects";
import JavaScript from "../components/projectsComponents/JavaScriptProjects";
import ReactProjects from "../components/projectsComponents/ReactProjects";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<ReactProjects />} /> */}
          <Route path="/projects/react" element={<ReactProjects />} />
          <Route path="/projects/javaScript" element={<JavaScript />} />
          <Route path="/projects/htmlCss" element={<HtmlCssProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
