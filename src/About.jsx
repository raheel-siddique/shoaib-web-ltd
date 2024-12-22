import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <HeroSection topTitle="Who We Are?" mainTitle="Why Choose Us?" mainDescription='At SHOAIB SALEEM LTD, we are a leading provider of business solutions designed to simplify your operations and drive growth. Our team of seasoned professionals is committed to delivering excellence across various domains, including Human Resource Management, Payroll Services, Business Consultancy, and Intellectual Property Management..' />;
};

export default About;
