import styled from "styled-components";

export const MainProjectsContainer = styled.div`
  background: ${({ theme }) => theme.colors.navBgColor};
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 2rem;
  /* height: 100vh; */
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

export const ProjectsIcons = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  gap: 3rem;
  padding: 1rem;
  transition: all 0.3s linear;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  & > div.iconContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.turqo};
      animation: shake 0.3s linear;
    }
    & > i.icon {
      font-size: 10rem;
      text-transform: none;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        font-size: 5rem;
      }
    }
    & > span {
      margin-top: 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      font-family: "Roboto", sans-serif;
      @media (max-width: ${({ theme }) => theme.size.md}) {
        font-size: 1rem;
      }
    }
    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(2deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(-4deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(2deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(-4deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(2deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-4deg);
      }
    }
  }
`;
