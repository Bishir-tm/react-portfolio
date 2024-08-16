import React from "react";

const experience = () => {
  return (
    <section className="container-fluid mb-5">
      <div className="experience has-raduis" id="experience">
        <div className="d-flex flex-wrap flex-column bg-oxford has-raduis m-auto py-5 pt-3">
          <h3 className="text-center text-light m-5 bg-primary p-3 has-raduis">
            Experience
          </h3>
          <div className="timeline">
            <div className="timeline-card-container left">
              <div
                className="card border-primary border-5 my-3 bg-white has-raduis"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header bg-transparent border-0 pt-4">
                  2022-Present
                </div>
                <div className="card-body text-dark pt-0">
                  <h4 className="card-subtitle  text-primary">
                    Freelance Web Developer
                  </h4>
                  <p className="card-text text-black">
                    Developing full stack web applications using HTML, CSS, JS,
                    Bootstrap, ReactJS, PHP, mySQL etc.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-card-container right">
              <div
                className="card border-primary border-5 my-3 bg-white has-raduis"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header bg-transparent border-0 pt-4">
                  2021-2022
                </div>
                <div className="card-body text-dark pt-0">
                  <h4 className="card-title text-oxford fs-6">
                    ISERVNG Technologies
                  </h4>
                  <h5 className="card-subtitle  text-primary">
                    In-House Graphics Designer
                  </h5>
                  <p className="card-text text-black">
                    Responsible for designing their brand identity and various
                    marketing materials such as brochures, flyers, and social
                    media graphics.
                  </p>
                </div>
              </div>
            </div>
            <div className="timeline-card-container left">
              <div
                className="card border-primary border-5 my-3 bg-white has-raduis"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header bg-transparent border-0 pt-4">
                  2014-2022
                </div>
                <div className="card-body text-dark pt-0">
                  <h4 className="card-title text-oxford fs-6">Jugudum Arts</h4>
                  <h5 className="card-subtitle  text-primary">Visual Artist</h5>
                  <p className="card-text text-black">
                    Incharge of managing apperentices and customer relations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
