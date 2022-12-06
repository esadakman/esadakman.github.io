import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IMG = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.turqo};
  border-radius: 50%;
  padding: 8px;
  width: 15rem;
  // height: 20rem;
`;

export const AboutParagraph = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.turqo}; */
  width: 80%;
  min-width: 20rem;
  margin-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 90%;
  }
  & > p { 
    text-align: center;
    line-height: 2rem;
    font-size: 1.3rem;
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      /* text-align: justify; */
      font-size: 1rem;
    }
  }
`;
