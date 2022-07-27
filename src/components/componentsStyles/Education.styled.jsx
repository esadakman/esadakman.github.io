import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  & > h1.title {
    position: relative;
    ::after {
      content: "";
      background: ${({ theme }) => theme.colors.turqo};
      position: absolute;
      text-align: center;
      bottom: -20px;
      left: 10%;
      height: 10%;
      width: 80%;
    }
  }
`;

export const EducationArea = styled.div`
  margin-top: 1rem;
  width: 50%;
  min-width: 566px;
  max-height: 470px;
  background-color: "white";
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.cardText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 14px;
`;

export const EducationInfo = styled.div`
  width: 90%;
  min-width: 34rem;
  margin-bottom: 2rem;
  padding: 0 15px;
  text-align: left;
  display: flex;

  & > div.circle {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.navBgColor};
    position: relative;
    & > div.straightLine {
      position: absolute;
      height: 5.9rem;
      border-left: 3px solid ${({ theme }) => theme.colors.navBgColor};
      top: 100%;
      left: 50%;
      /* z-index: -1; */
    }
  }
  position: relative;
  ::after {
    content: "";
    background: ${({ theme }) => theme.colors.turqo};

    position: absolute;
    /* text-align: center; */
    bottom: -20px;
    left: 10%;
    height: 2%;
    width: 90%;
  }
`;

export const SchoolInfos = styled.div`
  margin: 0 1rem;
  /* border: 2px solid black; */
  padding: 0 1rem;
  & > h3 {
    margin: 1rem 0;
    margin-top: 0;
  }
  & > h5 {
    margin: 0.8rem 0;
  }
  & > p {
    margin: 0.5rem 0;
    font-size: 1rem;

    & > sup {
      font-size: 10px;
    }
  }
`;
