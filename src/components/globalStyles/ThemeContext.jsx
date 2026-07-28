import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const ThemeToggleContext = createContext({
  mode: "dark",
  toggleTheme: () => {},
});

const getInitialMode = () => {
  try {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
  } catch (e) {
    // localStorage unavailable (SSR / privacy mode) — fall through
  }
  if (
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    return "light";
  }
  return "dark";
};

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(getInitialMode);

  useEffect(() => {
    try {
      localStorage.setItem("theme", mode);
    } catch (e) {
      // ignore write failures
    }
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const value = useMemo(
    () => ({
      mode,
      toggleTheme: () => setMode((m) => (m === "dark" ? "light" : "dark")),
    }),
    [mode]
  );

  return (
    <ThemeToggleContext.Provider value={value}>
      <StyledThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export const useThemeMode = () => useContext(ThemeToggleContext);
