import HomePage from "pages/home";
import "index.css";
import { AlertProvider } from "context/alertContext";
import { Helmet } from "react-helmet";

function App() {
  return (
    <AlertProvider>
      <HomePage />
    </AlertProvider>
  );
}

export default App;
