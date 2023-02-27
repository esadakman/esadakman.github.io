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
          <div className="circle" style={{ background: "white" }}>
            <img className="job" src={efectura} alt="education" />
            <div className="straightLine" style={{ height: "8rem" }} />
          </div>
          <SchoolInfos>
            <h3>Efectura</h3>
            <h5>Frontend Developer (Internship)</h5>
            <p style={{ fontWeight: "bold" }}>Feb. 2023 - Present</p>
          </SchoolInfos>
        </EducationInfo>
        <EducationInfo>
          <div className="circle" style={{ background: "white" }}>
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
