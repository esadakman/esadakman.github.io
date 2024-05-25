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
            <div className="straightLine" />
          </div>
          <SchoolInfos>
            <h3>Efectura</h3>
            <h5>Frontend Developer (Fulltime)</h5>
            <p style={{ fontWeight: "bold" }}>Feb. 2023 - Present</p>
            <ul>
              <li>
                Leading the UI development team for a multichannel RevOps
                platform used by clients such as DIAGEO, CocaCola, and Silktech.
              </li>
              <li>
                Developed and optimized user interfaces using HTML, CSS, and
                JavaScript frameworks.
              </li>
              <li>
                Integrated real-time data from multiple sources, enhancing
                platform functionality and user experience.
              </li>
              <li>
                Collaborated with backend developers for seamless API
                integration and data flow.
              </li>
              <li>
                Utilized libraries like DataTables, Select2, jsTree, and
                QueryBuilder for dynamic and responsive interfaces.
              </li>
              <li>
                Contributed to improving marketing efficiency and customer
                intelligence through intuitive UI design.
              </li>
            </ul>
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
            <ul>
              <li>
                Developed and implemented front-end code using HTML, SASS,
                Bootstrap, JavaScript, and React to meet business requirements.
              </li>
              <li>
                Created two landing pages to enhance client’s web presence.
              </li>
              <li>
                Developed a lab results system over the last six months using
                React, Material React, MUI, and Tailwind.
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
