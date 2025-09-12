import React from "react";
import HeroHeader from "../components/HeroHeader";
import Team from "../components/Team";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const OurTeamPage = () => {
  return (
    <>
      <HeroHeader headerName="Our Team"></HeroHeader>
      <Team></Team>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default OurTeamPage;
