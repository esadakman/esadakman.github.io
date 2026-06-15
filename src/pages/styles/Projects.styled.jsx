import styled from "styled-components";

export const MainProjectsContainer = styled.div`
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0;
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
    width: 70%;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
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
      color: #0c9d63;
    }
  }
  & > div.iconContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 2rem 1.5rem;
    min-width: 12rem;
    border-radius: ${({ theme }) => theme.radius.lg};
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    backdrop-filter: blur(8px);
    color: ${({ theme }) => theme.colors.text};
    transition: 0.4s all cubic-bezier(0.22, 1, 0.36, 1);
    &:hover {
      transform: translateY(-8px);
      box-shadow: ${({ theme }) => theme.colors.glow};
      border-color: ${({ theme }) => theme.colors.turqo};
    }
    & > i.icon {
      font-size: 6rem;
      text-transform: none;
      transition: 0.4s all ease;
      @media (max-width: ${({ theme }) => theme.size.lg}) {
        font-size: 5rem;
      }
      @media (max-width: ${({ theme }) => theme.size.md}) {
        font-size: 4rem;
      }
    }
    & > span {
      margin-top: 0.5rem;
      font-size: 1.15rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text};
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
  z-index: 5;
  box-shadow: ${({ theme }) => theme.colors.glow};
  border: none;
  border-radius: 50%;
  width: 3.6rem;
  height: 3.6rem;
  display: flex;
  letter-spacing: 0.5px;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.turqo};
  color: #04121f;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-4px);
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;
