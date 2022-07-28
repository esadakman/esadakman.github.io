import styled from "styled-components";

export const ProjectsContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const CardWrapper = styled.div`
  margin: 1rem;
  width: 30rem;
  max-width: 650px;
  height: 22rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  cursor: pointer;
`;

export const Card = styled.div`
  flex: 1;
  flex-basis: 300px;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
  transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  overflow: hidden;
  position: relative;
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