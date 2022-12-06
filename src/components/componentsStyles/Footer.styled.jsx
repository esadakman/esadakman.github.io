import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.logoColor};
  /* background-color: ${({ theme }) => theme.colors.transparent}; */
  color: black;
  font-family: "Roboto", sans-serif;
  align-items: center;
  height: 8vh;
  padding: 0 1.5rem; 
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  & > a {
    transition: all 0.3s linear;
    color: white;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.colors.turqo};
      transform: scale(1.2);
    }
  }
`;
export const TextStyle = styled.div`
  font-size: 0.7rem;
  color: white;
  & > p {
    color: white;
  }
`;

export default FooterStyle;
