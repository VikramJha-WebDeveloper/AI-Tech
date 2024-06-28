import React from "react";
import HeroHeader from "../components/HeroHeader";
import CaseStudy from "../components/CaseStudy";
import FAQs from "../components/FAQs";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const ProjectsPage = () => {
  return (
    <>
      <HeroHeader headerName="Our Projects"></HeroHeader>
      <CaseStudy></CaseStudy>
      <FAQs></FAQs>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default ProjectsPage;
