import HomePage from 'pages/home';
import 'index.css';
import { AlertProvider } from "context/alertContext";
import { Helmet } from "react-helmet";

function App() {
	return(
		<AlertProvider>
			 <Helmet>
				<title>BastBit | Web Development, e-commerce & continuous support</title>
				<meta name="description" content="Creating dynamic websites, SEO strategies, E-commerce, and more." />
				<meta name="keywords" content="web development, website creation, SEO, e-commerce, support, BastBit" />
				<meta property="og:title" content="BastBit" />
				<meta property="og:description" content="We build. You grow. Discover our services: Web Development, SEO, E-commerce and more." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://bastbit.com" />
			</Helmet>
			<HomePage />
		</AlertProvider>
	)
}

export default App;
