import React from "react";
import HeroHeader from "../components/HeroHeader";
import Choose from "../components/Choose";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const FeaturesPage = () => {
  return (
    <>
      <HeroHeader headerName="Features"></HeroHeader>
      <Choose bgColor="bg-dark"></Choose>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default FeaturesPage;
