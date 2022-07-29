import styled from "styled-components";

export const ProjectsContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const CardWrapper = styled.div`
  margin: 1rem;
  width: 30rem;
  max-width: 650px;
  height: 20rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 18rem;
    width: 29rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    height: 16rem;
    width: 24rem;
    min-width: 20rem;
  }
`;

export const Card = styled.div`
  flex: 1;
  flex-basis: 260px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    flex-basis: 250px;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    flex-basis: 200px;
  }
  & > img {
    width: 100%;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  :hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
    transform: scale(0.97);
    & > img {
      transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: scale(1.6) rotate(20deg);
      filter: blur(3px);
    }
    & > div {
      left: 0px;
      transition: all 0.7s ease-in-out;
      clip-path: circle(75%);
    }
  }
`;

export const Desc = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: all 0.7s ease-in-out;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
  & > h2 {
    text-align: left;
    color: ${({ theme }) => theme.colors.navBgColor};
    letter-spacing: 1px;
    margin: 10px 0;
    font-weight: 400;
  }

  & > ul {
    /* border: 1px solid red; */
    padding: 0 !important;

    & > li {
      list-style-type: none;
      /* border: 1px solid red; */
      overflow: auto;
      padding-right: 8px;
      line-height: 24px;
      font-size: 1.2rem;
      text-align: justify;
      height: 85%;
      padding-bottom: 0.5rem;
    }
  }
`;

//

export const TitleCard = styled.div`
  position: relative;

  height: 3rem;
  background-color: ${({ theme }) => theme.colors.cardBack};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;

  & > p {
    color: white;
    font-family: "Roboto", sans-serif;
    width: 85%;
    overflow: auto;
  }
  & > span {
    position: absolute;
    right: 0.5rem;
    padding: 5px;
    border-radius: 0.5rem;
    color: white;
    /* background-color: ${({ theme }) => theme.colors.success}; */
  }
`;

export const ProjectsTitles = styled.h1`
  position: relative;
  padding-bottom: 4px;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    font-size: 2rem;
  }
  ::after {
    content: "";
    background: ${({ theme }) => theme.colors.mainColor};
    position: absolute;
    text-align: center;
    bottom: -0;
    left: 10%;
    height: 6%;
    width: 80%;
  }
`;

export const ButtonStyleCard = styled.button`
  background-color: ${({ theme }) => theme.colors.turqo};
  border: 2px solid ${({ theme }) => theme.colors.navBgColor};
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.colors.navBgColor};
  text-decoration: none;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.7s ease-in-out;
  font-size: 1.1rem;
  width: 8rem;
  margin: 1rem auto;
  :hover {
    opacity: 0.9;
    color: ${({ theme }) => theme.colors.turqo};
    background-color: ${({ theme }) => theme.colors.navBgColor};
    border: 2px solid ${({ theme }) => theme.colors.turqo};
  }
  :active {
    opacity: 1;
  }
`;
