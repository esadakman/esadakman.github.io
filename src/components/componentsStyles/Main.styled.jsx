import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid red; */
  background-color: ${({ theme }) => theme.colors.navBgColor};
  overflow: hidden;
`;

export const LinesWrapper = styled.div`
  color: white;
  font-family: Arial;
  font-size: 85px;
  font-weight: 900;
  text-transform: uppercase;
  margin-left: -15%;
  margin-top: 3%;
  user-select:none;
  @media (max-width: ${({ theme }) => theme.size.lg}) {
    margin-left: -20%;
    font-size: 4rem;
  }
  @media (max-width: ${({ theme }) => theme.size.md}) {
    /* margin-left: -%; */
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.size.sm}) {
    margin-left: -25%;
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.size.xs}) {
    margin-left: -45%;
    font-size: 2rem;
  }
  :hover {
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
