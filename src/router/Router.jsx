import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Navbar from "../components/Navbar";
import HtmlCssProjects from "../components/projectsComponents/HtmlCssProjects";
import JavaScript from "../components/projectsComponents/JavaScriptProjects";
import ReactProjects from "../components/projectsComponents/ReactProjects";
import ScrolToTop from "../pages/ScrolToTop";
import Home from "../pages/Home";
import DjangoProjects from "../components/projectsComponents/DjangoProjects";
// import Projects from "../pages/Projects";

const Router = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Navbar />
        <ScrolToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/projects" element={<ReactProjects />} /> */}
          <Route path="/react" exact element={<ReactProjects />} />
          <Route path="/javaScript" exact element={<JavaScript />} />
          <Route path="/htmlCss" exact element={<HtmlCssProjects />} />
          <Route path="/django" exact element={<DjangoProjects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
