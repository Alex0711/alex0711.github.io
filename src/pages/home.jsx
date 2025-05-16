import Header from "components/header";
import Slogan from "components/slogan";
import AboutUs from "components/aboutUs";
import Services from "components/services/services";
import Footer from "components/footer/footer";
import Alert from "components/alert";

const HomePage = () => {
  return (
    <>
      <Alert />
      <div className="h-screen flex flex-col">
        <Header />
        <Slogan />
      </div>
      <AboutUs />
      <Services />
      <Footer />
    </>
  );
};

export default HomePage;
