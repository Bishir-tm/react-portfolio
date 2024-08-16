import React, { useEffect } from "react";
import Typed from "typed.js";
import Navbar from "./Navbar";
const HeroSection = () => {
  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: ["Frontend Developer", "Fullstack Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      startDelay: 500, // Delay before typing starts
      backDelay: 1500 // Delay before backspacing starts
    };

    const typed = new Typed("#typed-output", options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div
      className="d-flex align-items-center mb-5 mx-auto border-0 flex-row"
      id="home"
    >
      <div
        className="container-fluid d-flex bg-oxford justify-content-center  py-5"
        style={{ minHeight: "100vh" }}
      >
        <div className="row align-items-center mt-5 pt-5">
          <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
            <img
              className="img-fluid w-100 rounded-circle shadow-sm"
              src="./images/my-img.png"
              alt=""
            />
          </div>
          {/* <span className="vr"></span> */}
          <div className="col-lg-7 text-lg-left d-flex flex-column align-items-center my-3 ">
            <div className="my-4">
              <h3
                className="text-white  font-weight-normal d-inline p-2    px-3 bg-oxford rounded-pill "
                style={{ width: "max-content" }}
              >
                👋 H'lo there
              </h3>
              <h3
                className="text-dark font-weight-normal  d-inline p-2  my-0  px-3 bg-light rounded-pill "
                style={{ width: "max-content" }}
              >
                I'm
              </h3>
            </div>
            <h1
              className="display-3 fw-bolder text-uppercase text-primary mb-2 has-stroke"
              style={{ fontWeight: 900 }}
            >
              BISHIR T.M
            </h1>

            {/* Add an element for Typed.js output */}
            <div className="h-100 text-white fs-3 text-capitalise">
              <span
                className="w-100 lead text-white fs-3 text-capitalise"
                id="typed-output"
              >
                {" "}
              </span>
            </div>

            <a
              href="./assets/BishirTijjaniResume.pdf"
              target="_blank"
              className=" my-3 btn btn-outline-light border-2 rounded-pill btn-lg "
            >
              Download CV
            </a>

            <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
              <button
                type="button"
                className="btn-play"
                data-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                data-target="#videoModal"
              ></button>
            </div>
          </div>
          <div className="arrow scroll bounce ">
            <a
              className="btn-lg btn-outline-btn-outline-light p-1 border border-3 fs-1 rounded-circle  btn-lg "
              style={{ width: "30px !important" }}
              href="#about"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 6.646a.5.5 0 01.708 0L8 12.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                  clipRule="evenodd"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M1.646 2.646a.5.5 0 01.708 0L8 8.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
