import { React, useEffect } from "react";

// import images
import subscribeHand from "../../public/images/subscribe.png";

const NewsLetter = () => {
  return (
    <>
      <div id="testimonial" style={{ overflow: "hidden" }}>
        <div className="container-fluid bg-primary">
          <div className="row">
            <div className="col col-12 col-lg-6 m-0 p-0 d-flex flex-column justify-content-center">
              <img
                src={subscribeHand}
                className="w-100 position-relative left-0"
                data-aos="fade-up-right"
              ></img>
            </div>
            <div
              className="col col-12 col-lg-5 d-flex flex-column justify-content-center mt-3 mt-lg-0"
              data-aos="fade-left"
            >
              <span
                className="badge rounded-pill text-light border border-light py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
              >
                NewsLetter
              </span>
              <h2 className="my-4 fw-bolder text-light">
                Let's subscribe the newsletter
              </h2>
              <div className="input-group rounded rounded-pill bg-light p-1 overflow-hidden">
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Enter Your Email"
                ></input>
                <button type="submit" className="btn btn-light">
                  <i className="fa-solid fa-paper-plane text-primary"></i>
                </button>
              </div>
              <small className="text-white-50 mt-3 d-block">
                Diam sed sed dolor stet amet eirmod
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
