import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./components/globalStyles/theme";
import Router from "./router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
