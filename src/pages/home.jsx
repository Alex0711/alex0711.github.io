import Header from 'components/header';
import Slogan from 'components/slogan';
import AboutUs from 'components/aboutUs';

const HomePage = () => {
	return (
		<body className="bg-background dark:bg-gray-900 text-text font-jost font-medium">
			<div className="h-screen flex flex-col">
				<Header />
				<Slogan />
			</div>
			<AboutUs />
		</body>
	);
}


export default HomePage;