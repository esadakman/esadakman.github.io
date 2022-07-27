import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 100%; */
  transition: 0.5s all linear;
  margin-bottom: 5rem;

  & > h1.title {
    position: relative;
    ::after {
      content: "";
      background: ${({ theme }) => theme.colors.mainColor};
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
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* border: 1px solid red; */
  gap: 1rem;
  padding: 1rem;
  & > div.iconContainer {
    display: flex;
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.turqo};
    }
    & > i.icon {
      font-size: 8rem;
      text-transform: none;
    }
    & > img {
      width: 8rem;
      :hover {
        color: ${({ theme }) => theme.colors.turqo};
      }
    }
    & > span {
      font-size: 1.2rem;
      font-family: "Roboto", sans-serif;
    }
  }
`;
