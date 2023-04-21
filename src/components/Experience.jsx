import {
  EducationArea,
  EducationContainer,
  EducationInfo,
  SchoolInfos,
} from "./componentsStyles/Education.styled";
import efectura from "../assets/efectura.png";
import dedew from "../assets/dedew.png";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const Experience = () => {
  return (
    <EducationContainer>
      <ProjectsTitles>Experince</ProjectsTitles>
      <EducationArea>
        <EducationInfo>
          <div className="circle">
            <img className="job" src={efectura} alt="education" />
            <div className="straightLine" style={{ height: "300%" }} />
          </div>
          <SchoolInfos>
            <h3>Efectura</h3>
            <h5>Frontend Developer (Internship)</h5>
            <p style={{ fontWeight: "bold" }}>Feb. 2023 - Present</p>
            <p>
              {/* ● Developed UI components with jQuery, HTML, and CSS for a SalesForce-like CRM system.
              ● Contributed to the development of APIs using .NET MVC for frontend applications.
              ● Gained experience in customer relationship management and integrating business processes with the CRM system. */}
              ● Worked as a frontend developer on a CRM system using jQuery, HTML, and CSS for the user interface
              {/* <br /> */}
              {/* ● Leveraged data from .NET MVC backend to inform and enhance frontend development efforts. */}
              <br />
              ● Gained valuable experience in data management and integrating business processes into software applications.
            </p>
          </SchoolInfos>
        </EducationInfo>
        <EducationInfo>
          <div className="circle">
            <img className="job" src={dedew} alt="education" />
            <div />
          </div>
          <SchoolInfos>
            <h3>Dedew</h3>
            <h5>Frontend Developer (Volunteer)</h5>
            <p style={{ fontWeight: "bold" }}>Sep. 2022 - Present</p>
            <p>
              ● Developed and implemented front-end code using HTML, SASS,
              Bootstrap, JavaScript and React to meet business requirements.
              <br />● Collaborated with the team to design new features for our
              web page.
            </p>
          </SchoolInfos>
        </EducationInfo>
      </EducationArea>
    </EducationContainer>
  );
};

export default Experience;
