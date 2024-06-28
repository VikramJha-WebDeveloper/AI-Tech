import React from "react";
import HeroHeader from "../components/HeroHeader";
import FAQs from "../components/FAQs";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const FAQsPage = () => {
  return (
    <>
      <HeroHeader headerName="FAQs"></HeroHeader>
      <FAQs></FAQs>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default FAQsPage;
