import { React, useEffect } from "react";
import AOS from "aos";

// import image
import heroRobot from "../../public/images/heroheaderimg.png";

const HeroHeader = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="bg-primary py-5">
      <div className="container">
        <div className="row">
          <div className="col col-12 col-lg-6 d-flex align-items-center">
            <h2
              className="display-3 fw-bolder text-light w-100 text-center text-lg-start"
              data-aos="fade-right"
            >
              {props.headerName}
            </h2>
          </div>
          <div className="col col-12 col-lg-6 d-flex align-items-center  justify-content-center justify-content-lg-end">
            <img
              src={heroRobot}
              className="my-3 my-lg-0"
              data-aos="fade-left"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroHeader;
