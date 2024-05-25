import styled from "styled-components";

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    height: fit-content;
    min-height: 50vh;
  }
`;

export const EducationArea = styled.div`
  margin-top: 1rem;
  width: 60%;
  background-color: "white";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem 0 1.4rem 0;
  background-color: ${({ theme }) => theme.colors.cardText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 8px 14px;
  transition: 0.4s all linear;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    width: 70%;
  }
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
    background: white;
    z-index: 2;
    width: 4.8rem;
    height: 4rem;
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.navBgColor};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      width: 4.4rem;
      height: 3.5rem;
    }
    & > img {
      width: 100%;
    }
    & > .job {
      width: 75%;
    }
    & > div.straightLine {
      position: absolute;
      height: 17rem;
      border-left: 3px solid ${({ theme }) => theme.colors.navBgColor};
      top: 100%;
      left: 50%;
      @media (max-width: ${({ theme }) => theme.size.xxlg}) {
        height: 18rem;
      }
      @media (max-width: ${({ theme }) => theme.size.xlg}) {
        height: 20rem;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        display: none;
      }
    }
  }
  position: relative;
  &::after {
    content: "";
    background: ${({ theme }) => theme.colors.turqo};
    position: absolute;
    bottom: -15px;
    left: 10%;
    height: 2px;
    width: 90%;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      left: 15%;
      width: 80%;
    }
  }
`;

export const SchoolInfos = styled.div`
  margin: 0 1rem;
  width: 100%;
  padding: 0 1rem;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    margin: 0;
  }
  & > h3 {
    margin: 0;
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
  & > ul {
    margin: 0;
    padding: 0 1rem;
    font-size: 1rem;
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
