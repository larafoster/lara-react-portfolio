import React from "react";
import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
const Experience = () => {
  return (
    <>

      <div id="experience" className="experience-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>Experience</h1>
                <p className="small">
                  For detailed work experience, view my resume...
                </p>
                <div className="button">
                  <Link to="resume" className="btn btn-purple">
                    <i className="fas fa-file-pdf"></i>
                    <span> </span> Download My Resume
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-8 ">
              <div className="text-info">
                <h4>Professional Work</h4>
                <p>
                  {" "}
                  My breadth of experience, gained from a number of different
                  business functions, has contributed to me having a very
                  holistic perspective. While my passion is web development and
                  design, my varied roles and experiences allows me to have a
                  wider outlook on various team needs, priorities and
                  challenges.
                </p>
              </div>
              <div className="experience">
                <hr />

                <div className="experience-image">
                  <img
                    alt="..."
                    className="img-fluid pb-3 "
                    src={
                      require("../../assets/images/experience/v4clogo.svg")
                        .default
                    }
                  />
                </div>

                <div className="experience-info">
                  <h3>Vehicle For Change, Inc.</h3>
                  <h5 className="d-flex justify-content-between">
                    <strong>Executive Director </strong>2005 - present
                  </h5>
                  <p>
                    Founder and communication strategist of experiential-based
                    education company active in over 100 elementary, middle and
                    high schools throughout Ohio and Florida.
                  </p>
                </div>
              </div>

              <div className="experience">
                <div className="experience-info">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Designed and implemented several websites featuring
                      registration and payment integration.
                    </li>
                    <li className="list-group-item">
                      Built and maintain productive relationships to further the
                      organization’s goals.
                    </li>
                    <li className="list-group-item">
                      Collaborated with school administrators, teachers, PTOs,
                      and experts in to bring ground-breaking experiential-based
                      STEM programs to area schools.
                    </li>
                    <li className="list-group-item">
                      Created and implemented marketing and communication plan.{" "}
                    </li>
                    <li className="list-group-item">
                      Coordinated the development of clear and concise web
                      sites, promotional material, newsletters, brochures,
                      informational leaflets, and press releases.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="experience mt-5">
                <hr />

                <div className="experience-image">
                  <img
                    alt="..."
                    className="img-fluid pb-5 "
                    src={
                      require("../../assets/images/experience/gsw.png").default
                    }
                  />
                </div>
                <div className="experience-info">
                  <h3>GSW COLUMBUS</h3>
                  <h5 className="d-flex justify-content-between">
                    <strong>Freelance Project Manager</strong>2007 - 2008
                  </h5>
                  <p>
                    Lead project manager of Lilly Diabetes Global website
                    redesign. Worked with creatives, developers and account
                    managers to implement project plans through a massive global
                    initiative.
                  </p>
                </div>
              </div>
              <div className="experience">
                <div className="experience-info">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Worked with team managers from across the globe (requiring
                      very unconventional work hours) to accurately capture next
                      steps and client deliverables through conference reports
                      and meeting recaps and distributed to appropriate team
                      members.{" "}
                    </li>
                    <li className="list-group-item">
                      Faciliated Client Management communication with Creative
                      during client conversations and in preliminary discussions
                      involving project ideas &amp; direction.{" "}
                    </li>
                    <li className="list-group-item">
                      Pro-actively communicated project directive &amp;
                      documentation to project team members.{" "}
                    </li>
                    <li className="list-group-item">
                      Instrumental in risk analysis. Was able to identify
                      potential roadblocks related to budgets, resources and
                      timelines.{" "}
                    </li>
                    <li className="list-group-item">
                      Led team discussions on issue resolutions and reported
                      these potential issues to leadership, when necessary.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="experience mt-5">
                <hr />

                <div className="experience-image">
                  <img
                    alt="..."
                    className="img-fluid pb-3"
                    src={
                      require("../../assets/images/experience/nw.svg").default
                    }
                  />
                </div>
                <div className="experience-info">
                  <h3>Nationwide Insurance </h3>
                  <h5 className="d-flex justify-content-between mb-0">
                    <strong>Project Manager </strong>1996 - 2005
                  </h5>
                  <h5>
                    eMarketing/Communications{" "}
                    <span className="small">Financial Services</span>
                  </h5>
                  <p>
                    Provided marketing communications services, including
                    planning and strategy, Web, media relations, publications,
                    brand and identity management, communication plans and
                    special projects.
                  </p>
                </div>
              </div>
              <div className="experience">
                <div className="experience-info">
                  <ul className="list-group">
                    <li className="list-group-item">
                      Worked in collaboration with the Compliance/Legal
                      department to ensure due diligence and appropriateness of
                      all communication material.
                    </li>
                    <li className="list-group-item">
                      Prepared product launch and coordinated efforts to
                      implement content and tools on multiple websites.
                    </li>
                    <li className="list-group-item">
                      Led marketing team’s efforts on several successful
                      Web-based e-commerce and e- business projects.
                    </li>
                    <li className="list-group-item">
                      Developed self-guided, comprehensive educational resource
                      guide for the State of Missouri plan participants.{" "}
                    </li>
                    <li className="list-group-item">
                      Instrumental in the successful implementation of Advice
                      Site on Nationwide Financial.com.
                    </li>
                  </ul>
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
export default Experience;
