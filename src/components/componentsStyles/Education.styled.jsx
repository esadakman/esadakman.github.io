import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    height: fit-content;
  }
`;

export const EducationArea = styled.div`
  margin-top: 1rem;
  width: 70%;
  /* min-width: 566px; */
  /* max-height: 470px; */
  max-width: 42rem;
  background-color: "white";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.cardText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 14px;
  transition: 0.4s all linear;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    width: 90%;
  }
`;

export const EducationInfo = styled.div`
  width: 90%;
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
    /* margin-left: 1.5rem; */
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      height: 2.7rem;
    }
    & > div.straightLine {
      position: absolute;
      height: 5.9rem;
      border-left: 3px solid ${({ theme }) => theme.colors.navBgColor};
      top: 100%;
      left: 50%;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        display: none;
      }
    }
  }
  position: relative;
  ::after {
    content: "";
    background: ${({ theme }) => theme.colors.turqo};
    position: absolute;
    bottom: -20px;
    left: 10%;
    height: 2%;
    width: 90%;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      left: 15%;
      width: 80%;
    }
  }
`;

export const SchoolInfos = styled.div`
  margin: 0 1rem;
  /* border: 2px solid black; */
  padding: 0 1rem;

  & > h3 {
    margin: 1rem 0;
    margin-top: 0;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
  }
  & > h5 {
    margin: 0.8rem 0;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      font-size: 1rem;
      margin: 0.5rem 0;
    }
  }
  & > p {
    margin: 0.5rem 0;
    font-size: 1rem;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      font-size: 13px;
      margin: 0.5rem 0;
    }

    & > sup {
      font-size: 10px;
    }
  }
`;
