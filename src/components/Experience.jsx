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
                Worked as a frontend developer on a CDP system using jQuery,
                HTML, and CSS for the user interface
              </li>
              <li>
                Leveraged data from .NET MVC backend to inform and enhance
                frontend development efforts.
              </li>
              <li>
                Gained valuable experience in data management and integrating
                business processes into software applications.
              </li>
              <li>
                Utilized libraries including: DataTables, Select2, jsTree, and
                QueryBuilder
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
                Collaborated with the team to design new features for our web
                page.
              </li>
            </ul>
          </SchoolInfos>
        </EducationInfo>
      </EducationArea>
    </EducationContainer>
  );
};

export default Experience;
