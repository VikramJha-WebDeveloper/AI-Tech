import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// Import images
import Robot from "../public/images/AI-robot.png";

// Import Components
import About from "./components/About";
import Services from "./components/Services";
import Choose from "./components/Choose";
import CaseStudy from "./components/CaseStudy";
import FAQs from "./components/FAQs";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

// css for home section
const HomeSection = styled.div`
  overflow: hidden;
  button {
    border-radius: 50px;
  }
  button:nth-child(2):hover {
    background-color: white;
    color: black !important;
  }
`;

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      {/* Home Section Starts */}
      <HomeSection id="home" className="bg-primary text-light">
        <div className=" container">
          <div className="row">
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
              <span
                className="badge rounded-pill text-light border border-light py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                AI.Tech
              </span>
              <h1 className="fw-bold display-4" data-aos="fade-left">
                Artificial Intelligence gor Your Business
              </h1>
              <p className="m-0 my-3 fs-5" data-aos="fade-right">
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum
                stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam.
                Sit diam sit
              </p>
              <div className="reacContactBtn" data-aos="fade-up">
                <button className="btn btn-light p-3 px-5">Read More</button>
                <button
                  className="btn border p-3 px-5 ms-4 text-light
                "
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
              <img src={Robot} className="w-100" data-aos="zoom-out"></img>
            </div>
          </div>
        </div>
      </HomeSection>

      <About></About>

      <Services></Services>

      <Choose bgColor="bg-primary"></Choose>

      <CaseStudy></CaseStudy>

      <FAQs></FAQs>

      <Team></Team>

      <Testimonial></Testimonial>

      <NewsLetter></NewsLetter>

      <Footer></Footer>
    </>
  );
};
export default Home;
