import React from "react";
import HeroHeader from "../components/HeroHeader";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const ServicesPage = () => {
  return (
    <>
      <HeroHeader headerName="Our Services"></HeroHeader>
      <Services></Services>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};

export default ServicesPage;
