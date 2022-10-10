import { ThemeProvider } from "styled-components";
import theme from "./components/globalStyles/theme";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="top-right" />
      <Router />
    </ThemeProvider>
  );
}

export default App;
