import styled from "styled-components";

export const SkillsContainer = styled.div`
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
      bottom: 0;
      left: 10%;
      height: 8%;
      width: 80%;
    }
  }
`;

export const SkillIcons = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;

  & > div.iconContainer {
    width: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0.85rem 1.45rem 0.85rem;
    transition: 0.5s color ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.turqo};
    }
    & > i.icon {
      font-size: 6rem;
      text-transform: none;
    }
    & > span {
      font-size: 1.2rem;
    }
  }
`;
