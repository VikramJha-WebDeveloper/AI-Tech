import React from "react";
import HeroHeader from "../components/HeroHeader";
import Testimonial from "../components/Testimonial";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const TestimonialsPage = () => {
  return (
    <>
      <HeroHeader headerName="Testimonial"></HeroHeader>
      <Testimonial></Testimonial>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default TestimonialsPage;
