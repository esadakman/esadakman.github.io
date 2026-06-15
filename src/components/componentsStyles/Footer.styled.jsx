import styled from "styled-components";

const FooterStyle = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.bgAlt};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const Logos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  & > a {
    transition: all 0.3s linear;
    color: ${({ theme }) => theme.colors.textMuted};
    text-decoration: none;
    display: inline-flex;
    &:hover {
      color: ${({ theme }) => theme.colors.turqo};
      transform: translateY(-3px) scale(1.15);
    }
  }
`;
export const TextStyle = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.textMuted};
  & > p {
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

export default FooterStyle;
