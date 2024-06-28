import { React, useEffect } from "react";
import AOS from "aos";

// import images
import FeatureRobot from "../../public/images/features-robot.png";

const Choose = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div
        id="features"
        className={`${props.bgColor} py-5`}
        style={{ overflow: "hidden" }}
      >
        <div className="container text-light">
          <div className="row">
            <div className="col col-12 col-lg-6 d-flex flex-column justify-content-center">
              <span
                className="badge rounded-pill text-light border border-light py-2 cursor-pointer"
                style={{ width: "150px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                Why Choose Us
              </span>
              <h2 className="mt-4 fw-bolder" data-aos="fade-left">
                We're Best in AI Industry with 10 Years of Experience
              </h2>
              <p className="mt-4" data-aos="fade-right">
                Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et
                sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor
              </p>
              <div className="d-flex mb-3" data-aos="fade-left">
                <div
                  className="bg-light text-center rounded-circle me-3"
                  style={{ width: "25px", height: "25px" }}
                >
                  <i className="fa-solid fa-check text-primary"></i>
                </div>
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
              <div className="d-flex mb-3" data-aos="fade-left">
                <div
                  className="bg-light text-center rounded-circle me-3"
                  style={{ width: "25px", height: "25px" }}
                >
                  <i className="fa-solid fa-check text-primary"></i>
                </div>
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
              <div className="d-flex mb-3" data-aos="fade-left">
                <div
                  className="bg-light text-center rounded-circle me-3"
                  style={{ width: "25px", height: "25px" }}
                >
                  <i className="fa-solid fa-check text-primary"></i>
                </div>
                <span>Diam dolor diam ipsum et tempor sit</span>
              </div>
              <div className="row">
                <div className="col col-12 col-sm-6 mb-3 mb-sm-0">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ backgroundColor: "rgba(256, 256, 256, 0.1)" }}
                    data-aos="fade-up-right"
                  >
                    <div className="me-3">
                      <i className="fa-solid fa-users fs-1"></i>
                    </div>
                    <div>
                      <h3>9999</h3>
                      <p>Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ backgroundColor: "rgba(256, 256, 256, 0.1)" }}
                    data-aos="fade-up-left"
                  >
                    <div className="me-3">
                      <i className="fa-solid fa-check fs-1"></i>
                    </div>
                    <div>
                      <h3>9999</h3>
                      <p>Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0">
              <img
                src={FeatureRobot}
                className="w-100"
                data-aos="zoom-in"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Choose;
