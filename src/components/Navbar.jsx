import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";

const Navbar = () => {
  return (
    <header className="w-100  position-fixed d-flex px-3  ">
      <div className="navbar-brand">
        <img src="./public/b.svg" alt="" srcSet="" />
      </div>
      <nav
        className="navbar navbar-expand-lg w-100 mt-0 b-0 "
        style={{
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: "50px"
        }}
      >
        <a className="navbar-brand fs-1" href="#">
          <img src="./b.svg" alt="b-logo" className="img-fluid" />
        </a>
        <button
          className=" navbar-toggler bg-light text-light mx-3 rounded-circle"
          id="navbarToggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon rounded rounded-circle fs-1 p-3">
            {/* &#9776; */}
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#home">
                home
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#about">
                About
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item px-5">
              <a className="nav-link text-white" href="#contact">
                Contact
              </a>
            </li>

            <div className="mt-lg-0 mt-3 mb-4 mb-lg-0 ">
              <a
                href="./assets/BishirTijjaniResume.pdf"
                target="_blank"
                className="custom-btn btn btn-lg rounded-pill btn-warning text-dark"
              >
                Download CV
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
