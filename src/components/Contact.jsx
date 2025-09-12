import { React, useEffect } from "react";
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <div className="container py-5" style={{ overflow: "hidden" }}>
        <div className="row">
          <div className="col col-12 d-flex align-items-center flex-column">
            <span
              className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
              style={{ width: "100px", cursor: "pointer" }}
              data-aos="fade-down"
            >
              About Us
            </span>
            <h1
              className="fw-bolder display-6 text-center mt-3"
              data-aos="fade-left"
            >
              If You Have Any Query, <br></br>Please Contact Us
            </h1>
            <p
              className="text-center w-75 text-secondary my-3"
              data-aos="fade-right"
            >
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done. Download
              Now.
            </p>
            <form>
              <div className="row">
                <div
                  className="col col-12 col-lg-6 my-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Your Name"
                  ></input>
                </div>
                <div
                  className="col col-12 col-lg-6 my-3"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your Email"
                  ></input>
                </div>
                <div
                  className="col col-12 my-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Subject"
                  ></input>
                </div>
                <div
                  className="col col-12 my-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <textarea
                    className="form-control form-control-lg"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col col-12 text-center my-3">
                  <button
                    className="btn btn-lg w-100 btn-primary"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
