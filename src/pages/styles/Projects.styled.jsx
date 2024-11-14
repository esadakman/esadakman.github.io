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
  & > div.js {
    &:hover {
      color: #f0db4f;
    }
  }
  & > div.html {
    &:hover {
      color: #e34c26;
    }
  }
  & > div.react {
    &:hover {
      color: #61dbfb;
    }
  }
  & > div.django {
    &:hover {
      color: #023b25;
    }
  }
  & > div.iconContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease-in-out;
    &:hover {
      /* color: ${({ theme }) => theme.colors.turqo}; */
      animation: shake 0.3s linear;
    }
    /* & > i.js {
      &:hover {
        color: yellow;
        animation: shake 0.3s linear;
      }
    } */
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
      color: white;
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

export const ScrollBtn = styled.button`
  position: fixed;
  bottom: 3.5rem;
  right: 1.5rem;
  box-shadow: 0 0 14px -5px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  display: flex;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.turqo};
  color: ${({ theme }) => theme.colors.navBgColor};
  align-items: center;
  justify-content: center;
  &:hover {
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: 2;
    animation-timing-function: linear;
  }
`;
