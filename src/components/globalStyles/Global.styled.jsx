import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.05rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bg};
    background-image: ${({ theme }) =>
      theme.mode === "dark"
        ? "radial-gradient(1200px 600px at 80% -10%, rgba(3,191,203,0.10), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(140,60,157,0.10), transparent 55%)"
        : "radial-gradient(1200px 600px at 80% -10%, rgba(3,191,203,0.12), transparent 60%), radial-gradient(900px 500px at -10% 20%, rgba(140,60,157,0.08), transparent 55%)"};
    background-attachment: fixed;
    transition: background-color 0.4s ease, color 0.4s ease;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accent};
    color: #04121f;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.bgAlt};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background: ${({ theme }) => theme.colors.accent};
    opacity: 0.6;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.accentHover};
  }

  @media (max-width: ${({ theme }) => theme.size.md}) {
    body { font-size: 1rem; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
