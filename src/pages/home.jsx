import Header from 'components/header';
import Slogan from 'components/slogan';
import AboutUs from 'components/aboutUs';
import Services from 'components/services/services';
import Footer from 'components/footer/footer';

const HomePage = () => {
	return (
		<>
			<div className="h-screen flex flex-col">
				<Header />
				<Slogan />
			</div>
			<AboutUs />
			<Services />
			<Footer />
		</>
	);
}


export default HomePage;