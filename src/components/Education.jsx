import React from "react";
import { Title } from "./componentsStyles/About.styled";
import {
  EducationArea,
  EducationContainer,
  EducationInfo,
  SchoolInfos,
} from "./componentsStyles/Education.styled";

const Education = () => {
  return (
    <EducationContainer>
      <Title>Education</Title>
      <EducationArea>
        <EducationInfo>
          <div className="circle">
            <div className="straightLine" />
          </div>
          <SchoolInfos>
            <h4>Eskisehir Technical Univercity</h4>
            <h6>Air Traffic Control (Bachelor Degree)</h6>
            <span className="education-date">Dec. 2017 - June 2023</span>
          </SchoolInfos>
        </EducationInfo>
        <EducationInfo>
          <div className="circle">
            <div />
          </div>
          <SchoolInfos>
            <h4>National Defense University</h4>
            <h6>Air Traffic Control (Bachelor Degree)</h6>
            <span className="education-date">Sep. 2014 - July 2016</span>
          </SchoolInfos>
        </EducationInfo>
      </EducationArea>
    </EducationContainer>
  );
};

export default Education;

// .education-block {
//     max-width: 700px;
//     margin: 0 auto 30px auto;
//     padding: 15px;
//     border: 1px solid $border;
//     text-align: left;

// h3 {
//     font-weight: 500;
//     float: left;
//     margin: 0;
//     color: $heading;
// }

// span {
//     color: $text;
//     float: right;
// }

// h4 {
//     color: $text;
//     clear: both;
//     font-weight: 500;
//     margin: 0 0 15px 0;
// }

// p, ul {
//     margin: 0;
//     color: $text;
//     font-size: 0.9em;
// }

// ul {
//     padding: 0 0 0 15px;
// }
// }
// export const EducationInfo = styled.div`
//   max-width: 700px;
//   margin: 0 auto 30px auto;
//   padding: 15px;
//   border: 1px solid $border;
//   text-align: left;
//   & > h3 {
//     font-weight: 500;
//     float: left;
//     margin: 0;
//     color: $heading;
//   }

//   & > span {
//     color: $text;
//     float: right;
//   }

//   & > h4 {
//     color: $text;
//     clear: both;
//     font-weight: 500;
//     margin: 0 0 15px 0;
//   }

//   & > p,ul {
//     margin: 0;
//     color: $text;
//     font-size: 0.9em;
//   }

//   & > ul {
//     padding: 0 0 0 15px;
//   }
// `;
