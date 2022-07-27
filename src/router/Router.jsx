import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "../components/globalStyles/Global.styled";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

const Router = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            {/* <Route path="/project/react" element={<Projects />} /> */}
            {/* <Route path="/project/javaScript" element={<Projects />} /> */}
            {/* <Route path="/project/htmlCss" element={<Projects />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
