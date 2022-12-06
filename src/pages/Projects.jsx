import React from "react";
import { useNavigate } from "react-router-dom";
import { ProjectsTitles } from "../components/componentsStyles/ReactProjects.styled";
import { MainProjectsContainer, ProjectsIcons } from "./styles/Projects.styled";
// import ReactProjects from "../components/projectsComponents/ReactProjects";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainProjectsContainer id="projects">
        <ProjectsTitles>My Projects</ProjectsTitles>
        <ProjectsIcons>
          <div className="iconContainer react" onClick={() => navigate("/react")}>
            <i className="icon devicon-react-plain"></i>
            <span className="name">React Projects</span>
          </div>
          <div
            className="iconContainer js"
            onClick={() => navigate("/javaScript")}
          >
            <i className="icon devicon-javascript-plain "></i>
            <span className="name">JavaScript Projects</span>
          </div>
          <div className="iconContainer html" onClick={() => navigate("/htmlCss")}>
            <i className="icon devicon-html5-plain"></i>
            <span className="name">HTML & CSS Projects</span>
          </div>
          <div className="iconContainer django" onClick={() => navigate("/django")}>
            <i className="icon devicon-django-plain"></i>
            <span className="name">Django</span>
          </div>
        </ProjectsIcons>
      </MainProjectsContainer>
    </>
  );
};

export default Projects;
