import React from "react";
import { ExternalLink } from "react-external-link";
const Portfolio = () => {
  return (
    <>

      <div id="portfolio" className="portfolio-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>Portfolio</h1>
              </div>
            </div>
            <div className="col-md-8">
              <div className="text-info">
                <h4>Projects Completed</h4>
                <p>
                  Listed below are some of the technical projects I have
                  developed. Click on the project image for more details or
                  click the <i className="fab fa-github"></i> icon to see the
                  associated files on github.{" "}
                </p>
              </div>
              <div className="row">
                <div className="card-deck">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>JoinMe App</h5>
                      <ExternalLink href="https://github.com/larafoster/Event-Management-App">
                        <i
                          className="fab fa-github fa-2x"
                          aria-hidden="true"
                        ></i>
                      </ExternalLink>
                    </div>
                    <div className="content">
                      {" "}
                      <ExternalLink
                        href="https://joinme-events.herokuapp.com/"
                        target="_blank"
                      >
                        <div className="content-overlay"></div>
                        <img
                          alt="..."
                          className="content-image img-fluid"
                          src={
                            require("../../assets/images/project/joinme.png")
                              .default
                          }
                        />
                        <div className="content-details fadeIn-bottom">
                          <p>
                            This app enables community event creators to
                            publicly display their events and provide a quick an
                            easy way for people to share the detail of the event
                            with friends.{" "}
                          </p>
                          <p className="content-text">
                            <i className="fas fa-external-link-alt"></i>
                            click to view site
                          </p>
                        </div>
                      </ExternalLink>{" "}
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        <small> Technologies Used</small>
                      </p>
                      <span className="badge badge-success">Node.js</span>
                      <span className="badge badge-dark">Express.js</span>
                      <span className="badge badge-warning">Handlebars</span>
                      <span className="badge badge-purple">Bootstrap 5</span>
                      <span className="badge badge-primary">Mysql</span>
                      <span className="badge badge-secondary">Sequelize</span>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Event Management App</small>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>Judge a Book</h5>
                      <ExternalLink
                        href="https://github.com/larafoster/NYT-Bestsellers"
                        target="_blank"
                      >
                        <i className="fab fa-github fa-2x"></i>{" "}
                      </ExternalLink>
                    </div>
                    <div className="content">
                      {" "}
                      <ExternalLink
                        href="https://larafoster.github.io/NYT-Bestsellers/"
                        target="_blank"
                      >
                        <div className="content-overlay"></div>
                        <img
                          alt="..."
                          className="content-image img-fluid"
                          src={
                            require("../../assets/images/project/nytpic.png")
                              .default
                          }
                        />
                        <div className="content-details fadeIn-bottom">
                          <p>
                            This project aims to give you acess to New York
                            Times Bestsellers of new and old. Users will be able
                            to select a date to see Bestsellers and then find
                            more information on those select books.{" "}
                          </p>
                          <p className="content-text">
                            <i className="fas fa-external-link-alt"></i>
                            click to view site
                          </p>
                        </div>
                      </ExternalLink>{" "}
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        <small> Technologies/Methods Used</small>
                      </p>
                      <span className="badge badge-warning">HTML5</span>
                      <span className="badge badge-orange">
                        Materialize CSS
                      </span>
                      <span className="badge badge-secondary">
                        Third-Party APIs
                      </span>
                      <span className="badge badge-dark">Server Side APIs</span>
                      <span className="badge badge-primary">Agile Teams</span>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">
                        New York Times Bestsellers
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card-deck mt-4">
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>Note Taker</h5>
                      <ExternalLink
                        href="https://github.com/larafoster/Notetaker"
                        target="_blank"
                      >
                        <i className="fab fa-github fa-2x"></i>{" "}
                      </ExternalLink>
                    </div>
                    <div className="content">
                      {" "}
                      <ExternalLink
                        href="https://notetaker-osu.herokuapp.com/"
                        target="_blank"
                      >
                        <div className="content-overlay"></div>
                        <img
                          alt="..."
                          className="content-image img-fluid"
                          src={
                            require("../../assets/images/project/notes.png")
                              .default
                          }
                        />
                        <div className="content-details fadeIn-bottom">
                          <p>
                            This simple note taking web application allows you
                            to take notes by adding a title and text. You can
                            save, view and delete the notes.
                          </p>
                          <p className="content-text">
                            <i className="fas fa-external-link-alt"></i>
                            click to view site
                          </p>
                        </div>
                      </ExternalLink>{" "}
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        <small> Technologies Used</small>
                      </p>
                      <span className="badge badge-success">Node.js</span>
                      <span className="badge badge-dark">Express.js</span>
                      <span className="badge badge-warning">Heroku</span>
                      <span className="badge badge-orange">uuidv4</span>
                      <span className="badge badge-purple">Bootstrap 4</span>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">Utility App</small>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header d-flex justify-content-between">
                      <h5>Tech Blog</h5>
                      <ExternalLink
                        href="https://github.com/larafoster/Tech-Blog-OSU"
                        target="_blank"
                      >
                        <i className="fab fa-github fa-2x"></i>{" "}
                      </ExternalLink>
                    </div>
                    <div className="content">
                      {" "}
                      <ExternalLink
                        href="https://tech-blog-lara.herokuapp.com/"
                        target="_blank"
                      >
                        <div className="content-overlay"></div>
                        <img
                          alt="..."
                          className="content-image img-fluid"
                          src={
                            require("../../assets/images/project/techblog.png")
                              .default
                          }
                        />
                        <div className="content-details fadeIn-bottom">
                          <p>
                            The Tech Blog is a CMS-style blog site. Developers
                            can publish their blog posts and comment on other
                            developers’ posts as well. This application follows
                            the MVC paradigm.{" "}
                          </p>
                          <p className="content-text">
                            <i className="fas fa-external-link-alt"></i>
                            click to view site
                          </p>
                        </div>
                      </ExternalLink>{" "}
                    </div>
                    <div className="card-body">
                      <p className="text-muted">
                        <small> Technologies Used</small>
                      </p>
                      <span className="badge badge-success">Node.js</span>
                      <span className="badge badge-dark">Express.js</span>
                      <span className="badge badge-warning">Handlebars</span>
                      <span className="badge badge-purple">Bootstrap 5</span>
                      <span className="badge badge-primary">Mysql</span>
                      <span className="badge badge-secondary">
                        Express-sessions
                      </span>
                    </div>
                    <div className="card-footer">
                      <small className="text-muted">CMS - Community App</small>
                    </div>
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

export default Portfolio;
