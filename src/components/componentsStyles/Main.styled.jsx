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
  margin-top: -2%;

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
  }
  &:nth-child(2) {
    left: 40px;
    bottom: 7px;
    background: #25a8ba;
    /* color: red; */
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
  }
  &:nth-child(5) {
    left: 171px;
    bottom: 14px;
    color: #ff1c5c;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  height: 78px;
  line-height: 80px;
  transition: all 1.5s ease-in-out;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : "center")};
  align-items: ${({ align }) => (align ? align : "center")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;
