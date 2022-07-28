import React from "react";
import { useNavigate } from "react-router-dom";
import { MainProjectsContainer, ProjectsIcons } from "./styles/Projects.styled";
// import ReactProjects from "../components/projectsComponents/ReactProjects";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainProjectsContainer>
        <h1 className="title">My Projects</h1>
        <ProjectsIcons>
          <div
            className="iconContainer"
            onClick={() => navigate("/projects/react")}
          >
            <i className="icon devicon-react-plain"></i>
            <span className="name">React Projects</span>
          </div>
          <div
            className="iconContainer"
            onClick={() => navigate("/projects/javaScript")}
          >
            <i className="icon devicon-javascript-plain"></i>
            <span className="name">JavaScript Projects</span>
          </div>
          <div
            className="iconContainer"
            onClick={() => navigate("/projects/htmlCss")}
          >
            <i className="icon devicon-html5-plain"></i>
            <span className="name">HTML & CSS Projects</span>
          </div>
        </ProjectsIcons>
      </MainProjectsContainer>
    </>
  );
};

export default Projects;
