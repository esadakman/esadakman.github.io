import {
  EducationArea,
  EducationContainer,
  EducationInfo,
  SchoolInfos,
} from "./componentsStyles/Education.styled";
import efectura from "../assets/efectura.png";
import dedew from "../assets/dedew.png";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <EducationContainer>
      <Reveal>
        <ProjectsTitles>Experience</ProjectsTitles>
      </Reveal>
      <EducationArea>
        <EducationInfo>
          <div className="circle">
            <img className="job" src={efectura} alt="Efectura logo" />
            <div className="straightLine" />
          </div>
          <SchoolInfos>
            <h3>Efectura</h3>
            <h5>Frontend Developer (Fulltime)</h5>
            <p style={{ fontWeight: "bold" }}>Feb. 2023 - Present</p>
            <ul>
              <li>
                Lead the UI development team for a multichannel RevOps platform
                used by clients such as DIAGEO, Coca-Cola, and Silktech.
              </li>
              <li>
                Built and maintain complex, data-heavy interfaces with
                JavaScript, TypeScript, and React, using libraries like
                DataTables, Select2, jsTree, and QueryBuilder.
              </li>
              <li>
                Integrated real-time data from multiple sources and collaborated
                with backend teams on seamless REST API integration and data
                flow.
              </li>
              <li>
                Modernized the frontend tooling and build setup (React 19,
                migrating from Create React App to Vite) to improve build speed
                and long-term maintainability.
              </li>
              <li>
                Set UI conventions and reviewed the team's work to keep the
                codebase consistent, performant, and accessible.
              </li>
            </ul>
          </SchoolInfos>
        </EducationInfo>
        <EducationInfo>
          <div className="circle">
            <img className="job" src={dedew} alt="Dedew logo" />
            <div />
          </div>
          <SchoolInfos>
            <h3>Dedew</h3>
            <h5>Frontend Developer (Volunteer)</h5>
            <p style={{ fontWeight: "bold" }}>Sep. 2022 - Sep. 2025</p>
            <ul>
              <li>
                Developed and implemented front-end code using HTML, SASS,
                Bootstrap, JavaScript, and React to meet business requirements.
              </li>
              <li>
                Created two landing pages to enhance the client's web presence.
              </li>
              <li>
                Built a lab results system using React, Material React, MUI, and
                Tailwind.
              </li>
              <li>
                Collaborated with the team to design and integrate new features
                for the web pages.
              </li>
            </ul>
          </SchoolInfos>
        </EducationInfo>
      </EducationArea>
    </EducationContainer>
  );
};

export default Experience;
