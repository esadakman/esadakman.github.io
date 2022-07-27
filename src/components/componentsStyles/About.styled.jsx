import styled from "styled-components";

export const AboutContainer = styled.div`
  height: 100vh;
  width: 99vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  /* border: 1px solid red; */
  color: ${({ theme }) => theme.colors.navBgColor};
  position: relative;

  ::after {
    content: "";
    background: ${({ theme }) => theme.colors.turqo};

    position: absolute;
    text-align: center;
    bottom: 0;
    left: 15%;
    height: 5%;
    width: 12rem;
  }
`;

export const IMG = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.turqo};
  border-radius: 50%;
  padding: 8px;
  width: 12rem;
`;

export const AboutParagraph = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.turqo};

  width: 60%;
  margin: 1rem;
  & > p {
    text-align: center;
    line-height: 2rem;
  }
`;
