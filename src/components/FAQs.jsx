import { React, useEffect } from "react";
import AOS from "aos";

const FAQs = () => {
  useEffect(() => {
    AOS.init({
      duraion: 1000,
    });
  });
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col col-12 d-flex flex-column align-items-center">
            <span
              className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
              style={{ width: "100px", cursor: "pointer" }}
              data-aos="fade-left"
            >
              Popular FAQs
            </span>
            <h2 className="text-center my-4 fw-bolder" data-aos="fade-right">
              Frequently Asked Questions
            </h2>
          </div>
        </div>
        <div className="col col-12">
          <div className="accordion" id="accordionFaqs">
            <div className="row">
              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseOne"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseTwo"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseThree"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseFour"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseFive"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseSix"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseSeven"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col col-12 col-lg-6 mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-target="#collapseEight"
                      data-bs-toggle="collapse"
                    >
                      How to build a website
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFaqs"
                  >
                    <div className="accordion-body">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Rem sit earum dicta ipsa blanditiis quos magnam in aperiam
                      consequatur sed.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FAQs;
