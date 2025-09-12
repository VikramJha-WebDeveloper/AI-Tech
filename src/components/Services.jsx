import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

const Serv = styled.div`
  background-color: #f4f7fe;

  div.service-item {
    transition-duration: 0.5s;
  }

  div.service-item:hover {
    background-color: white !important;
    color: rgb(52, 58, 64) !important;
  }

  div.service-item div.logo {
    transition-duration: 0.5s;
  }

  div.service-item:hover div.logo {
    background-color: rgb(0, 123, 255) !important;
  }

  div.service-item i {
    transition-duration: 0.5s;
  }

  div.service-item:hover i {
    color: white !important;
  }

  div.service-item button {
    transition-duration: 0.5s;
    position: relative;
    overflow: hidden;
  }

  div.service-item:hover button {
    background-color: rgb(0, 123, 255);
    color: white;
  }
`;

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Serv id="services" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-6 d-flex justify-content-center flex-column">
              <span
                className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                Our Services
              </span>
              <h2 className="mt-4 fw-bolder" data-aos="fade-left">
                Our Excellent AI Solutions for Your Business
              </h2>
              <p className="mt-4" data-aos="fade-right">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <div className="d-flex mt-4">
                <a
                  href="#"
                  className="btn btn-primary rounded-pill px-4 me-3"
                  data-aos="fade-up"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0">
              <div className="row">
                <div className="col col-12 col-md-6" data-aos="fade-down-right">
                  <div className="service-item rounded mb-4 bg-primary text-light d-flex flex-column align-items-center justify-content-center p-5">
                    <div
                      style={{ backgroundColor: "#f4f7fe" }}
                      className="logo p-3 rounded-circle"
                    >
                      <i className="fa-solid fa-robot fs-2 text-primary"></i>
                    </div>
                    <h5 className="mt-3 fw-bolder text-center">
                      Robotic Automation
                    </h5>
                    <p className="text-center">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <button className="btn btn-light rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-down-left">
                  <div className="service-item rounded mt-3 bg-primary text-light d-flex flex-column align-items-center justify-content-center p-5">
                    <div
                      style={{ backgroundColor: "#f4f7fe" }}
                      className="logo p-3 rounded-circle"
                    >
                      <i className="fa-solid fa-robot fs-2 text-primary"></i>
                    </div>
                    <h5 className="mt-3 fw-bolder text-center">
                      Education and Science
                    </h5>
                    <p className="text-center">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <button className="btn btn-light rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-up-right">
                  <div className="service-item rounded mb-3 bg-primary text-light d-flex flex-column align-items-center justify-content-center p-5">
                    <div
                      style={{ backgroundColor: "#f4f7fe" }}
                      className="logo p-3 rounded-circle"
                    >
                      <i className="fa-solid fa-robot fs-2 text-primary"></i>
                    </div>
                    <h5 className="mt-3 fw-bolder text-center">
                      Machine Learning
                    </h5>
                    <p className="text-center">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <button className="btn btn-light rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-up-left">
                  <div className="service-item rounded mt-3 bg-primary text-light d-flex flex-column align-items-center justify-content-center p-5">
                    <div
                      style={{ backgroundColor: "#f4f7fe" }}
                      className="logo p-3 rounded-circle"
                    >
                      <i className="fa-solid fa-robot fs-2 text-primary"></i>
                    </div>
                    <h5 className="mt-3 fw-bolder text-center">
                      Predictive Analysis
                    </h5>
                    <p className="text-center">
                      Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                      lorem sed diam stet diam sed stet lorem.
                    </p>
                    <button className="btn btn-light rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Serv>
    </>
  );
};
export default Services;
