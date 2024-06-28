import { React, useEffect } from "react";
import AOS from "aos";

import clientOne from "../../public/images/clientOne.jpg";
import clientTwo from "../../public/images/clientTwo.jpg";
import clientThree from "../../public/images/clientThree.png";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div id="testimonial" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-lg-6">
              <span
                className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                Testimonial
              </span>
              <h2 className="my-4 fw-bolder" data-aos="fade-left">
                Meat Our Experienced Team Members
              </h2>
              <p className="mt-4" data-aos="fade-right">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor eirmod magna dolore erat amet
              </p>
              <button
                className="btn mt-4 rounded-pill btn-primary"
                data-aos="fade-up"
              >
                Read More
              </button>
            </div>
            <div
              className="col col-12 col-lg-6 mt-5 mt-lg-0"
              data-aos="fade-left"
            >
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <i className="fa-solid fa-quote-left fs-1 text-primary mb-3"></i>
                    <p className="display-6 fs-4 lh-base fw-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati libero aut quo quis aperiam iure. Aliquam
                      pariatur rem quia impedit porro atque.
                    </p>
                    <div className="row">
                      <div className="col col-2">
                        <img
                          src={clientOne}
                          className=" rounded-circle w-100"
                        ></img>
                      </div>
                      <div className="col col-10 d-flex flex-column justify-content-center">
                        <h5 className="m-0">Luca Bianch</h5>
                        <p className="f6 text-secondary m-0">Profession</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <i className="fa-solid fa-quote-left fs-1 text-primary mb-3"></i>
                    <p className="display-6 fs-4 lh-base fw-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati libero aut quo quis aperiam iure. Aliquam
                      pariatur rem quia impedit porro atque.
                    </p>
                    <div className="row">
                      <div className="col col-2">
                        <img
                          src={clientTwo}
                          className=" rounded-circle w-100"
                        ></img>
                      </div>
                      <div className="col col-10 d-flex flex-column justify-content-center">
                        <h5 className="m-0">Elena Rossi</h5>
                        <p className="f6 text-secondary m-0">Profession</p>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <i className="fa-solid fa-quote-left fs-1 text-primary mb-3"></i>
                    <p className="display-6 fs-4 lh-base fw-normal">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Obcaecati libero aut quo quis aperiam iure. Aliquam
                      pariatur rem quia impedit porro atque.
                    </p>
                    <div className="row">
                      <div className="col col-2">
                        <img
                          src={clientThree}
                          className=" rounded-circle w-100"
                        ></img>
                      </div>
                      <div className="col col-10 d-flex flex-column justify-content-center">
                        <h5 className="m-0">Sofia Karlsson</h5>
                        <p className="f6 text-secondary m-0">Profession</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <button
                  className="carousel-control-prev"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
