import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Contact from "./Contact";
import ServicesCom from "./components/ServicesCom";

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
      <HeroSection topTitle="THIS IS OUR COMPANY" mainTitle="SHOAIB SALEEM LTD" mainDescription='Welcome to Shoaib Saleem Ltd – Your Trusted Partner in Human Resource and Business Management Solutions. Empowering your business with expertise in HR Management, Payroll Services, Business Consultancy, and Intellectual Property Solutions.'  />
      <ServicesCom />
      {/* <Contact /> */}
    </>
  );
};

export default Home;
