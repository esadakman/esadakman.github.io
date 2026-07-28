// Shared, theme-independent tokens
const shared = {
  colors: {
    turqo: "#03bfcb",
    accent: "#03bfcb",
    accentHover: "#25e0ec",
    purple: "#8c3c9d",
    pink: "#ff1c5c",
    // legacy keys kept so existing components keep working
    navBgColor: "#050f24",
    cardBack: "#183152",
    cardText: "#ABC8E2",
    transparent: "rgba(0, 0, 0, 0.4)",
    buttonBg: "#090325",
    Bloggy1: "#E1E6FA",
    Bloggy2: "#C4D7ED",
    Bloggy4: "#375D81",
    mainColor: "#00adb5",
    logoColor: "#393e46",
    linkColor: "#02475e",
    googleBlue: "#4285f4",
    buttonActiveBlue: "#1669F2",
    btnColor: "#112756",
    formColor: "rgba(167, 160, 160, 0.214)",
    contactTurqo: " rgba(0, 206, 158, 1)",
  },
  size: {
    xs: "500px",
    sm: "640px",
    md: "768px",
    mdl: "855px",
    lg: "1040px",
    xlg: "1200px",
    xxlg: "1400px",
  },
  radius: {
    sm: "8px",
    md: "14px",
    lg: "22px",
    pill: "999px",
  },
  transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
};

export const darkTheme = {
  ...shared,
  mode: "dark",
  colors: {
    ...shared.colors,
    // semantic tokens
    bg: "#0a0f1f",
    bgAlt: "#0f1729",
    surface: "rgba(255, 255, 255, 0.04)",
    surfaceSolid: "#141d33",
    border: "rgba(255, 255, 255, 0.10)",
    text: "#e8eefc",
    textMuted: "#9fb0cc",
    heroBg: "#050f24",
    navGlass: "rgba(10, 15, 31, 0.6)",
    shadow: "0 10px 40px rgba(0, 0, 0, 0.45)",
    glow: "0 0 0 1px rgba(3,191,203,0.35), 0 12px 40px rgba(3,191,203,0.18)",
    iconColor: "#e8eefc",
  },
};

export const lightTheme = {
  ...shared,
  mode: "light",
  colors: {
    ...shared.colors,
    bg: "#eef1fb",
    bgAlt: "#e4e9f8",
    surface: "rgba(255, 255, 255, 0.7)",
    surfaceSolid: "#ffffff",
    border: "rgba(20, 29, 51, 0.12)",
    text: "#111a30",
    textMuted: "#51607d",
    heroBg: "#050f24",
    navGlass: "rgba(238, 241, 251, 0.65)",
    shadow: "0 10px 40px rgba(55, 93, 129, 0.18)",
    glow: "0 0 0 1px rgba(3,191,203,0.3), 0 12px 40px rgba(3,191,203,0.15)",
    iconColor: "#1a2338",
  },
};

// default export kept as dark for any legacy import
export default darkTheme;
