import HomePage from 'pages/home';
import 'index.css';
import { AlertProvider } from "context/alertContext";

function App() {
	return(
		<AlertProvider>
			<HomePage />
		</AlertProvider>
	)
}

export default App;
