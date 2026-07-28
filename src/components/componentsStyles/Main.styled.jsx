import styled from "styled-components";

export const Body = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem .5rem;
  overflow-x: hidden;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.heroBg};
  background-image: radial-gradient(
      900px 500px at 75% 15%,
      rgba(3, 191, 203, 0.18),
      transparent 60%
    ),
    radial-gradient(700px 400px at 10% 85%, rgba(140, 60, 157, 0.16), transparent 60%);
`;

export const HeroTagline = styled.p`
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 0;
  text-align: center;
  max-width: 90%;
  span {
    color: ${({ theme }) => theme.colors.turqo};
    font-weight: 600;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    font-size: 1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const HeroButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.6rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  border: 1px solid
    ${({ theme, primary }) => (primary ? theme.colors.turqo : "rgba(255,255,255,0.25)")};
  background: ${({ theme, primary }) =>
    primary ? theme.colors.turqo : "transparent"};
  color: ${({ primary }) => (primary ? "#04121f" : "#fff")};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(3, 191, 203, 0.35);
    background: ${({ theme, primary }) =>
      primary ? theme.colors.accentHover : "rgba(255,255,255,0.08)"};
  }
`;

export const ScrollCue = styled.div`
  flex-shrink: 0;
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 14px;
  display: flex;
  justify-content: center;
  padding-top: 8px;

  &::before {
    content: "";
    width: 4px;
    height: 8px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.turqo};
    animation: scrollcue 1.5s ease-in-out infinite;
  }
  @keyframes scrollcue {
    0% { opacity: 0; transform: translateY(-4px); }
    50% { opacity: 1; transform: translateY(6px); }
    100% { opacity: 0; transform: translateY(14px); }
  }
`;

export const LinesWrapper = styled.div`
  color: white;
  font-family: Arial;
  font-size: 85px;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: -15%;
  margin-top: 0;
  /* Scale the whole animated name down as one unit so it fits the hero
     without disturbing the tuned per-line skew offsets. */
  transform: scale(0.78);
  transform-origin: center;
  /* Reserve space for the skewed text that visually overflows below the box */
  margin-bottom: 70px;
  user-select:none;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    margin-left: -20%;
    margin-bottom: 70px;
    font-size: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    /* margin-left: -%; */
    transform: scale(0.85);
    margin-bottom: 60px;
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    margin-left: -25%;
    transform: scale(0.9);
    margin-bottom: 50px;
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    margin-left: -45%;
    transform: scale(0.9);
    margin-bottom: 40px;
    font-size: 2rem;
  }
  &:hover {
    & > div {
      & > p {
        transform: translate(0, -75px);
      }
    }
  }
`;

export const SkewLine = styled.div`
  height: 75px;
  overflow: hidden;
  position: relative;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    height: 55px;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    height: 35px;
  }

  &:nth-child(odd) {
    transform: skew(60deg, -30deg) scaleY(0.667);
  }
  &:nth-child(even) {
    transform: skew(0deg, -30deg) scaleY(1.237);
  }
  &:nth-child(1) {
    left: -5px;
    top: -3px;
    color: #25a8ba;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      left: 25px;
      top: 5px;
    }
    @media (max-width: ${({ theme }) => theme.size.xs}) {
      left: 45px;
      top: -2px;
    }
  }
  &:nth-child(2) {
    left: 40px;
    bottom: 6px;
    background: #25a8ba;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      left: 50px;
      bottom: 6px;
    }
    @media (max-width: ${({ theme }) => theme.size.xs}) {
      left: 62px;
      bottom: 7px;
    }
  }
  &:nth-child(3) {
    left: 83px;
    bottom: 9px;
    background: #8c3c9d;
  }
  &:nth-child(4) {
    left: 126px;
    bottom: 12px;
    background: #ff1c5c;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      left: 115px;
      bottom: 11px;
    }
    @media (max-width: ${({ theme }) => theme.size.xs}) {
      left: 105px;
      bottom: 10.1px;
    }
  }
  &:nth-child(5) {
    left: 171px;
    bottom: 14px;
    color: #ff1c5c;
    @media (max-width: ${({ theme }) => theme.size.md}) {
      left: 141px;
      bottom: 19px;
    }
    @media (max-width: ${({ theme }) => theme.size.xs}) {
      left: 121px;
      bottom: 15px;
    }
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  height: 78px;
  line-height: 80px;
  transition: all 1.5s ease-in-out;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    line-height: 65px;
    height: 70px;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    line-height: 40px;
    height: 74px;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;
