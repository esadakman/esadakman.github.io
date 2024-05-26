import React from "react";
import {
  EducationArea,
  EducationContainer,
  EducationInfo,
  SchoolInfos,
} from "./componentsStyles/Education.styled";
import education from "../assets/education-logo.svg";
import { ProjectsTitles } from "./componentsStyles/ReactProjects.styled";

const Education = () => {
  return (
    <EducationContainer>
      <ProjectsTitles>Education</ProjectsTitles>
      <EducationArea>
        <EducationInfo>
          <div className="circle">
            <img src={education} alt="education" />

            <div className="straightLine" style={{ height: "140%" }}  />
          </div>
          <SchoolInfos>
            <h3>Eskisehir Technical University</h3>
            <h5>Air Traffic Control (Bachelor Degree)</h5>
            <p>
              {/* Dec. 2017 - June 2023 */}
            </p>
          </SchoolInfos>
        </EducationInfo>
        <EducationInfo>
          <div className="circle">
            <img src={education} alt="education" />

            <div />
          </div>
          <SchoolInfos>
            <h3>National Defense University</h3>
            <h5>Air Traffic Control (Associate Degree)</h5>
            {/* <p>Sep. 2014 - July 2016</p> */}
          </SchoolInfos>
        </EducationInfo>
      </EducationArea>
    </EducationContainer>
  );
};

export default Education;
