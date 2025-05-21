import Header from "components/header";
import Slogan from "components/slogan";
import AboutUs from "components/aboutUs/aboutUs";
import Services from "components/services/services";
import Footer from "components/footer/footer";
import Alert from "components/alert";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);
  return (
    <>
      <Alert headerHeight={headerHeight} />
      <Header headerRef={headerRef} />
      <Slogan headerHeight={headerHeight} />
      <Services />
      <AboutUs />
      <Footer />
    </>
  );
};

export default HomePage;
