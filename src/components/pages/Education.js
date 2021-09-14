import React from "react";
import Footer from "../includes/Footer";
const Education = () => {
  return (
    <>

      <div
        id="education"
        className="education-section bg-color section-padding"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>Education</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="section-content">
                <div className="text-info">
                  <h4>Educational Background</h4>
                  <p>
                    While I recently completed my MERN Full Stack Certification,
                    my English and Communication degree has been instrumental in
                    cultivating my analytical thinking, evidenced-based writing
                    and attention to detail which makes me an exceptional
                    developer.{" "}
                  </p>
                </div>
                <div className="education-info">
                  <img
                    alt="..."
                    className="img-fluid"
                    width="300"
                    src={require("../../assets/images/education/2.png").default}
                  />
                  <h3>Ohio State University</h3>
                  <h5>College of Engineering</h5>
                  <h6>Full Stack Coding Certification 2021</h6>
                  <p>
                    Project-focused immersive program with emphasis on Mongo,
                    Express, React, and Node `(MERN)` technical stack.
                  </p>
                </div>
                <hr />
                <div className="education-info">
                  <img
                    alt="..."
                    className="img-fluid"
                    src={require("../../assets/images/education/1.svg").default}
                  />
                  <h3>Ohio State University</h3>
                  <h5>College of Arts &amp; Sciences</h5>
                  <h6>Bachelor of Arts Degree 1994</h6>
                  <p>English, Communication Minor, Honors Program</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Education;
