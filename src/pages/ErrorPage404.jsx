import React from "react";
import HeroHeader from "../components/HeroHeader";
import Error from "../components/Error404";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const ErrorPage = () => {
  return (
    <>
      <HeroHeader headerName="404 Error"></HeroHeader>
      <Error></Error>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </>
  );
};
export default ErrorPage;
