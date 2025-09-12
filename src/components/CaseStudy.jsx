import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import RoboticAutomation from "../../public/images/robotic-automation.jpg";
import MachineLearning from "../../public/images/machine-learning.jpg";
import PredictiveAnalysis from "../../public/images/predictive-analysis.jpg";

// css for case section
const Case = styled.div`
  background-color: #f4f7fe;
  div.col > div {
    cursor: pointer;
    overflow: hidden;
  }

  div.col > div img {
    transition-duration: 0.5s;
  }
  div.col > div:hover img {
    transform: scale(1.3);
  }
  div.right-arrow {
    transition-duration: 0.5s;
    &:hover {
      background-color: white !important;

      i {
        color: rgb(0, 123, 255);
      }
    }
  }
`;

const CaseStudy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Case id="case">
        <div className="container py-5">
          <div className="row">
            <div className="col col-12 d-flex flex-column align-items-center">
              <span
                className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-left"
              >
                Case Study
              </span>
              <h2 className="mt-4 fw-bolder text-center" data-aos="fade-right">
                Explore Our Recent AI Case Studies
              </h2>
            </div>
          </div>
          <div className="row mt-3">
            <div
              className="col col-12 col-lg-4 mb-4 mb-lg-0 "
              data-aos="zoom-in"
            >
              <div className="rounded text-light position-relative">
                <img src={RoboticAutomation} style={{ width: "100%" }}></img>
                <div
                  className="position-absolute bottom-0 p-4"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.0))",
                  }}
                >
                  <div className="bg-dark d-inline-block rounded-pill p-1 px-3">
                    Robotic Automation
                  </div>
                  <h5 className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus?
                  </h5>
                  <div
                    className="right-arrow bg-primary d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col col-12 col-lg-4 mb-4 mb-lg-0 "
              data-aos="zoom-in"
            >
              <div className="rounded text-light position-relative">
                <img src={MachineLearning} style={{ width: "100%" }}></img>
                <div
                  className="position-absolute bottom-0 p-4"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.0))",
                  }}
                >
                  <div className="bg-dark d-inline-block rounded-pill p-1 px-3">
                    Machine Learning
                  </div>
                  <h5 className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus?
                  </h5>
                  <div
                    className="right-arrow bg-primary d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col col-12 col-lg-4 mb-4 mb-lg-0 "
              data-aos="zoom-in"
            >
              <div className="rounded text-light position-relative">
                <img src={PredictiveAnalysis} style={{ width: "100%" }}></img>
                <div
                  className="position-absolute bottom-0 p-4"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(0, 0, 0, 0.99), rgba(0, 0, 0, 0.0))",
                  }}
                >
                  <div className="bg-dark d-inline-block rounded-pill p-1 px-3">
                    Predictive Analysis
                  </div>
                  <h5 className="my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ducimus?
                  </h5>
                  <div
                    className="right-arrow bg-primary d-flex align-items-center justify-content-center rounded-circle"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Case>
    </>
  );
};
export default CaseStudy;
