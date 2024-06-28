import React from "react";
import styled from "styled-components";

// css for footer section
const Foot = styled.div`
  color: white;
  h5 ~ a {
    display: block;
    text-decoration: none;
    color: gray;
    transition-duration: 0.3s;
  }
  p {
    color: gray;
  }
  a:hover {
    transform: scale(1.05);
    color: white;
  }
  a i {
    border: 2px solid gray;
    padding: 5px;
    border-radius: 50%;
    transition-duration: 0.3s;
  }
  a:hover i {
    background-color: white;
    color: rgb(0, 123, 255) !important;
  }
  h5 ~ a::before {
    position: relative;
    content: "👉";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
  }
  div.social-medias i {
    color: gray;
  }
`;

const Footer = () => {
  return (
    <>
      <Foot id="footer" className="bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6 mt-5 mt-lg-0 col-lg-3">
              <h2>AI Tech</h2>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum
                et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo
                justo et tempor
              </p>
            </div>
            <div className="col col-12 col-md-6 mt-5 mt-lg-0 col-lg-3">
              <h5>Get In Touch</h5>
              <p>
                <i class="fa-solid fa-location-dot"></i>
                123 Street, New York, USA
              </p>
              <p>
                <i class="fa-solid fa-phone"></i>
                +012 345 67890
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>
                info@example.com
              </p>
              <div className="social-medias">
                <a href="#">
                  <i class="fa-brands fa-twitter fs-5 me-2"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook fs-5 me-2"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-youtube fs-5 me-2"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-instagram fs-5 me-2"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in fs-5 me-2"></i>
                </a>
              </div>
            </div>
            <div className="col col-12 col-md-6 mt-5 mt-lg-0 col-lg-3">
              <h5>Popular Link</h5>
              <a href="#" className="amg">
                About Us
              </a>
              <a href="#">Contact Us Us</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Condition</a>
              <a href="#">Career</a>
            </div>
            <div className="col col-12 col-md-6 mt-5 mt-lg-0 col-lg-3">
              <h5>Our Services</h5>
              <a href="#">Robotic Automation</a>
              <a href="#">Machine Learning</a>
              <a href="#">Predictive analysis</a>
              <a href="#">Data Science</a>
              <a href="#">Robot Technology</a>
            </div>
          </div>
        </div>
      </Foot>
    </>
  );
};

export default Footer;
