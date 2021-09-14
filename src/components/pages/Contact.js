import React from "react";
import { ExternalLink } from "react-external-link";
import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
import ContactForm from "../includes/contactForm.js";
const Contact = () => {
  return (
    <>

      <div id="contact" className="contact-section bg-color section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-title">
                <h1>Contact Me</h1>
              </div>
              <ContactForm />
            </div>
            <div className="col-md-8">
              <div className="section-content">
                <div className="address">
                  <ul>
                    <li>
                      <div className="icons">
                        <i className="fas fa-map-signs" aria-hidden="true"></i>
                      </div>
                      <h3>Location</h3>
                      <p className="icon-text">
                        I am currently located in Columbus, Ohio
                      </p>
                      <p className="icon-text">
                        Available for either on-site or remote work.
                      </p>
                    </li>
                    <li>
                      <div className="icons icons1">
                        <a href="sms:+16147954052&body=Hey Lara - I saw your online portfolio...">
                          <i
                            className="fas fa-mobile-alt icons1"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </div>
                      <h3>Mobile number</h3>
                      <p>1-614-795-4052</p>
                    </li>
                    <li>
                      <div className="icons icons2">
                        <i className="fas fa-at" aria-hidden="true"></i>
                      </div>
                      <h3>Email address</h3>
                      <a href="mailto:larafoster.dev@gmail.com">
                        larafoster.dev@gmail.com
                      </a>
                    </li>
                    <li>
                      <div className="icons icons3">
                        <i
                          className="fas fa-info-circle"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <h3>Profile Info</h3>
                      <div className="social-icons">
                        <ul className="social list-inline d-flex justify-content-between">
                          <li>
                            <Link to="resume">
                              <i
                                className="far fa-file-user fa-2x"
                                aria-hidden="true"
                                alt="download resume"
                              ></i>
                            </Link>
                          </li>
                          <li>
                            <ExternalLink href="https://www.linkedin.com/in/lara-foster-40189212/">
                              <i
                                className="fab fa-linkedin fa-2x"
                                aria-hidden="true"
                              ></i>
                            </ExternalLink>
                          </li>
                          <li>
                            <ExternalLink href="https://github.com/larafoster/larafoster">
                              <i
                                className="fab fa-github fa-2x"
                                aria-hidden="true"
                              ></i>
                            </ExternalLink>
                          </li>
                        </ul>
                      </div>
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

export default Contact;
