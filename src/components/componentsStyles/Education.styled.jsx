import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  /* width: 100vw; */
  height: 100vh;
`;

export const EducationArea = styled.div`
  width: 60%;
  min-width: 300px;
  /* height: 50%; */
  background-color: "white";
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  padding: 2rem 0;
  /* & > div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    float: left;
    border: 1px solid red;
    
  } */
`;

export const EducationInfo = styled.div`
  width: 90%;
  margin: 0 auto 30px auto;

  padding: 15px;
  border: 1px solid red;
  text-align: left;
  display: flex;
  /* overflow: hidden; */

  & > div.circle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    float: left;
    border: 1px solid red;
    position: relative;
    & > div.straightLine {
      height: 7rem;
      border: 0.1px solid red;
      position: absolute;
      top: 100%;
      left: 50%;
      z-index: -1;
    }
  }
`;

export const SchoolInfos = styled.div`
  margin-top: 0;
  margin-left: 1rem;
  border: 2px solid black;
  & > h4 {
    margin: 0.5rem;
  }
  & > h6 {
    margin: 0.5rem;
  }
  & > span {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;
