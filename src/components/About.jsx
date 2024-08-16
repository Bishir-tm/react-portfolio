import React from "react";

const About = () => {
  return (
    <section className="container-fluid m-auto" id="about">
      <div className="m-3">
        <div className="row">
          <div className="col text-light slideFromLeft bg-oxford has-raduis p-4 my-2">
            <h3 className="text-center text-light m-3 bg-primary p-3 has-raduis">
              About Me
            </h3>
            <div className="lead slideFromTop" id="">
              I am a computer science graduate with a passion for frontend web
              development,and an avid learner and problem solver. I am always
              eager to take on new challenges and stay current with the latest
              web development trends.
              <br />
              <details className="fs-5 fw-light">
                <summary>
                  <b className="text-primary p-2">The Long Version</b>
                </summary>
                My strong foundation in programming concepts, combined with my
                experience in modern technologies such as HTML, CSS, and
                JavaScript, and their frameworks and libraries, has allowed me
                to create visually stunning and responsive web pages that
                provide a seamless user experience. My attention to detail and
                ability to think creatively has resulted in high-quality web
                applications that exceed client expectations.
                <br />
                In addition to my technical skills, I am a quick learner and
                problem solver, always eager to take on new challenges and stay
                current with the latest web development trends. My ability to
                work efficiently and effectively on both individual and team
                projects makes me a valuable asset to any organization. I would
                be excited to bring my creativity to your team."
              </details>
            </div>
          </div>
          {/* <div className="col-lg-4 bg-oxford has-raduis p-4">
              <img
                src="images/Bishir-TM-With-BG.jpeg"
                alt="Profile Picture"
                className="img-fluid rounded-circle"
              />
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
