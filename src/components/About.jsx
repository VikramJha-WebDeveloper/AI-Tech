import { React, useEffect } from "react";
import AOS from "aos";

// Import images
import AboutRobot from "../../public/images/about-robot.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div id="about" className="pt-lg-5 pb-lg-0 py-5">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0">
              <img src={AboutRobot} className="w-100" data-aos="zoom-in"></img>
            </div>
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0 d-flex flex-column justify-content-center">
              <span
                className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                About Us
              </span>
              <h2 className="mt-4 fw-bolder" data-aos="fade-left">
                We Make Your Business Smarter with Artificial Intelligence
              </h2>
              <p className="mt-4" data-aos="fade-right">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <p data-aos="fade-right">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor.
              </p>

              <div className="row mt-4">
                <h6 className="col col-6" data-aos="fade-right">
                  <i className="fa-solid fa-check"></i> Award Winning
                </h6>
                <h6 className="col col-6" data-aos="fade-left">
                  <i className="fa-solid fa-check"></i> 24/7 Support
                </h6>
                <h6 className="col col-6" data-aos="fade-right">
                  <i className="fa-solid fa-check"></i> Professional Staff
                </h6>
                <h6 className="col col-6" data-aos="fade-left">
                  <i className="fa-solid fa-check"></i> Fair Prices
                </h6>
              </div>

              <div className="d-flex mt-4" data-aos="fade-up">
                <a href="#" className="btn btn-primary rounded-pill px-4 me-3">
                  Read More
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary rounded-circle btn-square me-3"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary rounded-circle btn-square me-3"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary rounded-circle btn-square me-3"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="btn btn-outline-primary rounded-circle btn-square me-3"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
