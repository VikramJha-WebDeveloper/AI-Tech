import { React, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

// import images
import BorisJohnson from "../../public/images/boris-johnson.jpg";
import KateWinslet from "../../public/images/kate-winslet.jpg";
import AdamCrew from "../../public/images/Adam-crew.jpg";
import CodyGardner from "../../public/images/cody-gardner.jpg";

// css for team section
const Tm = styled.div`
  background-color: #f4f7fe;
  h6,
  p {
    text-align: center;
  }
  h6 {
    margin-top: 20px;
  }

  i {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Team = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <>
      <Tm className="team">
        <div className="container py-5">
          <div className="row">
            <div className="col col-12 col-lg-6 d-flex justify-content-center flex-column">
              <span
                className="badge rounded-pill text-primary border border-primary py-2 cursor-pointer"
                style={{ width: "100px", cursor: "pointer" }}
                data-aos="fade-down"
              >
                Our Team
              </span>
              <h2 className="my-4 fw-bolder" data-aos="fade-left">
                Meat Our Experienced Team Members
              </h2>
              <p className="text-start" data-aos="fade-right">
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
            <div className="col col-12 col-lg-6 mt-5 mt-lg-0 ">
              <div className="row">
                <div className="col col-12 col-md-6" data-aos="fade-down-right">
                  <div className=" d-flex flex-column align-items-center bg-white py-3 rounded">
                    <img
                      src={BorisJohnson}
                      className="w-50 rounded-circle"
                    ></img>
                    <div>
                      <h6>Boris Johnson</h6>
                      <p className="text-secondary m-0">Founder & CEO</p>
                      <div className="w-100 d-flex mt-3">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in mx-1 bg-primary p-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-down-left">
                  <div className=" d-flex flex-column align-items-center bg-white py-3 mt-3 rounded">
                    <img
                      src={KateWinslet}
                      className="w-50 rounded-circle"
                    ></img>
                    <div>
                      <h6>Kate Winslet</h6>
                      <p className="text-secondary m-0">Co Founder</p>
                      <div className="w-100 d-flex mt-3">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in mx-1 bg-primary p-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-up-right">
                  <div className=" d-flex flex-column align-items-center bg-white py-3 mt-3 mt-md-0 rounded">
                    <img src={AdamCrew} className="w-50 rounded-circle"></img>
                    <div>
                      <h6>Adam Crew</h6>
                      <p className="text-secondary m-0">Executive Engineer</p>
                      <div className="w-100 d-flex mt-3">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in mx-1 bg-primary p-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-6" data-aos="fade-up-left">
                  <div className=" d-flex flex-column align-items-center bg-white py-3 mt-3 rounded">
                    <img
                      src={CodyGardner}
                      className="w-50 rounded-circle"
                    ></img>
                    <div>
                      <h6>Cody Gardner</h6>
                      <p className="text-secondary m-0">Project Manager</p>
                      <div className="w-100 d-flex mt-3">
                        <a href="#">
                          <i class="fa-brands fa-facebook-f mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-twitter mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-instagram mx-1 bg-primary p-1"></i>
                        </a>
                        <a href="#">
                          <i class="fa-brands fa-linkedin-in mx-1 bg-primary p-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tm>
    </>
  );
};

export default Team;
