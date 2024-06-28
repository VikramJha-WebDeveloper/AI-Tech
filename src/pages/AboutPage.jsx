import React from "react";

import HeroHeader from "../components/HeroHeader";
import About from "../components/About";
import Choose from "../components/Choose";
import Team from "../components/Team";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <HeroHeader headerName="About Us"></HeroHeader>
      <About></About>
      <Choose bgColor="bg-primary"></Choose>
      <Team></Team>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default AboutPage;
