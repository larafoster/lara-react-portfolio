import React from "react";
import { Progress } from "reactstrap";

const Skills = () => {
  return (
    <>
      <div id="skill" className="skill-section bg-color section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>My Skills</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="section-content">
                <div className="text-info">
                  <h4>Technical Skills</h4>
                  <p>
                    I am a proven problem-solver who is passionate about
                    developing apps with a focus on mobile-first design and
                    development. My strengths include creativity, teamwork, and
                    building projects from ideation to execution.
                  </p>
                  <p>Some of the tools I utilize in development include:</p>
                </div>
                <div className="progress-content">
                  <div className="rating-bar bar-left">
                    <div className="d-flex justify-content-between">
                      <strong>Express</strong>
                      <span className="pr-3">85%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress value={85} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <strong>React</strong>
                      <span className="pr-3">75%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar1" value={75} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <strong>Html 5 &amp; CSS 3</strong>
                      <span className="pr-3">100%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar2" value={95} />
                      </div>
                    </div>
                  </div>

                  <div className="skill rating-bar bar-right">
                    <div className="d-flex justify-content-between">
                      <strong>Node</strong>
                      <span className="pr-3">95%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar3" value={85} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <strong>Bootstrap</strong>
                      <span className="pr-3">90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar4" value={95} />
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <strong>Github</strong>
                      <span className="pr-3">90%</span>
                    </div>
                    <div className="skill-progress">
                      <div className="progress">
                        <Progress bar className="bar5" value={85} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="language-skill">
                  <div className="text-info">
                    <h4>Design Skills</h4>
                    <p>
                      I have extensive experience working with Adobe Creative
                      Tools.
                    </p>
                    <div className="row">
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/photoshop.png")
                              .default
                          }
                        />
                        <br /> Photoshop
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/illustrator.png")
                              .default
                          }
                        />
                        <br /> Illustrator
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/indesign.png")
                              .default
                          }
                        />
                        <br /> InDesign
                      </div>
                      <div className="col-md-3 text-center">
                        <img
                          width="55"
                          alt="..."
                          src={
                            require("../../assets/images/experience/acrobat-pro.png")
                              .default
                          }
                        />
                        <br /> Acrobat Pro
                      </div>
                    </div>
                  </div>

                  <div className="language-skill">
                    <div className="text-info">
                      <h4>Programming Languages</h4>
                      <p>I have over 15 years experience in web development.</p>
                    </div>
                    <ul>
                      <li className="chart">
                        <span className="percent">95</span>
                        <h5>HTML5</h5>
                      </li>
                      <li className="chart">
                        <span className="percent percent1">85</span>
                        <h5>JavaScript</h5>
                      </li>
                      <li className="chart">
                        <span className="percent percent2">70</span>
                        <h5>SQL/NoSQL</h5>
                      </li>
                      <li className="chart" >
                        <span className="percent percent3">45</span>
                        <h5>Python</h5>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
