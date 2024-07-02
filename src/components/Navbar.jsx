import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand fs-2 fw-bold" href="#">
            AI Tech
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navToggle">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link mx-3">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link mx-3">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/services" className="nav-link mx-3">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/projects" className="nav-link mx-3">
                  Projects
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </NavLink>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink to="/features" className="dropdown-item">
                      Features
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/team" className="dropdown-item">
                      Our Team
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/faqs" className="dropdown-item">
                      FAQs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial" className="dropdown-item">
                      Testimonial
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink to="/error" className="dropdown-item">
                      404 Pages
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/contact" className="nav-link mx-3">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
