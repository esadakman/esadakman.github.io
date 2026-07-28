import styled from "styled-components";
import clickPNG from "../../assets/clickPNG.png";

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
  border-radius: ${({ theme }) => theme.radius.md};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.colors.glow};
  }
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
  background: ${({ theme }) => theme.colors.surfaceSolid};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-top: none;
  box-shadow: ${({ theme }) => theme.colors.shadow};
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
    object-fit: cover;
    height: 100%;
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  &:hover {
    transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    & > img {
      transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
      transform: scale(1.1);
      filter: blur(2px) brightness(0.7);
    }
    & > div {
      left: 0px;
      transition: all 0.7s ease-in-out;
      clip-path: circle(150%);
    }
  }
`;

export const Desc = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: linear-gradient(
    160deg,
    rgba(5, 15, 36, 0.92),
    rgba(24, 49, 82, 0.92)
  );
  backdrop-filter: blur(2px);
  color: #e8eefc;
  width: 100%;
  height: 100%;
  overflow: auto;
  transition: all 0.7s ease-in-out;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  clip-path: circle(0% at 100% 100%);
  & > img {
    width: 2.5rem;
    position: absolute;
    right: 1rem;
    content: url(${clickPNG});
    transform: rotate(320deg);
    opacity: 0.8;
  }
  & > h2 {
    text-align: left;
    color: ${({ theme }) => theme.colors.turqo};
    letter-spacing: 1px;
    margin: 10px 0;
    font-weight: 600;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 1.2rem;
      margin-top: 5px;
    }
  }

  & > ul {
    padding: 0 !important;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      margin: 0 !important;
    }
    & > li {
      list-style-type: none;
      overflow: auto;
      padding-right: 8px;
      line-height: 24px;
      font-size: 1.05rem;
      text-align: justify;
      height: 85%;
      padding-bottom: 0.5rem;
      @media (max-width: ${({ theme }) => theme.size.sm}) {
        font-size: 0.95rem;
      }
    }
  }
`;

//

export const TitleCard = styled.div`
  position: relative;
  height: 3rem;
  background-color: ${({ theme }) => theme.colors.buttonBg};
  border-radius: ${({ theme }) => `${theme.radius.md} ${theme.radius.md} 0 0`};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  gap:.5rem;

  .fa-circle {
    width: 0.9rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    &.red {
      background-color: #ff5f57;
    }

    &.yellow {
      background-color: #febc2e;
    }

    &.green {
      background-color: #28c840;
    }
  }
  & > p {
    color: white; 
    width: 100%;
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
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 2.4rem;
  letter-spacing: 0.5px;
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    font-size: 2rem;
  }
  &::after {
    content: "";
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.turqo},
      ${({ theme }) => theme.colors.purple}
    );
    border-radius: 999px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 60%;
  }
`;

export const ButtonStyleCard = styled.button`
  background: ${({ theme }) => theme.colors.turqo};
  border: 2px solid ${({ theme }) => theme.colors.turqo};
  border-radius: ${({ theme }) => theme.radius.pill};
  color: #04121f;
  text-decoration: none;
  padding: 0.6rem 1.4rem;
  font-weight: 700;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  font-size: 1rem;
  width: fit-content;
  margin: 1rem auto;
  &:hover {
    color: ${({ theme }) => theme.colors.turqo};
    background: transparent;
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.colors.glow};
  }
  :active {
    transform: translateY(0);
  }
`;
