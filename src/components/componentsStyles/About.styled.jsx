import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  gap: 1.5rem;
`;

export const IMG = styled.img`
  border: 3px solid ${({ theme }) => theme.colors.turqo};
  border-radius: 50%;
  padding: 8px;
  width: 15rem;
  box-shadow: ${({ theme }) => theme.colors.glow};
  transition: ${({ theme }) => theme.transition};
  &:hover {
    transform: translateY(-4px) scale(1.02);
  }
`;

export const AboutParagraph = styled.div`
  width: 70%;
  max-width: 820px;
  min-width: 20rem;
  margin-bottom: 1rem;
  padding: 2rem 2.5rem;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(8px);
  box-shadow: ${({ theme }) => theme.colors.shadow};
  @media (max-width: ${({ theme }) => theme.size.md}) {
    width: 88%;
    padding: 1.5rem;
  }
  & > p {
    text-align: center;
    line-height: 1.9rem;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.colors.textMuted};
    &:first-child {
      color: ${({ theme }) => theme.colors.text};
      font-weight: 600;
      font-size: 1.35rem;
    }
    @media (max-width: ${({ theme }) => theme.size.sm}) {
      font-size: 1rem;
    }
  }
`;
