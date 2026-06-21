import { ThemeModeProvider } from "./components/globalStyles/ThemeContext";
import Router from "./router/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <ThemeModeProvider>
      <ToastContainer position="top-right" theme="colored" />
      <Router />
    </ThemeModeProvider>
  );
}

export default App;
