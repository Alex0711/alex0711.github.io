import Header from 'components/header';
import Slogan from 'components/slogan';
import AboutUs from 'components/aboutUs';
import Services from 'components/services/services';

const HomePage = () => {
	return (
		<body className="bg-background dark:bg-gray-900 text-text text-body font-jost font-medium">
			<div className="h-screen flex flex-col">
				<Header />
				<Slogan />
			</div>
			<AboutUs />
			<Services />
		</body>
	);
}


export default HomePage;