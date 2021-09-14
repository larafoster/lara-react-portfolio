import React from 'react';
import Footer from "../includes/Footer";

const About = () => {

  return (
    <>

      <div id="about" className="about-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div id="me" className="section-title">
                            <h1>About Me</h1>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="about-info">
                            <p>Welcome to my portfolio page! My name is Lara Foster. I'm the founder and Executive
                                Director at Vehicle For Change, Inc. where I perform a myriad of duties, including: web
                                development; marketing strategies; and project management.</p>
                            <p>As a web developer, I enjoy using my obsessive attention to detail, my love for making
                                things beautiful, and my mission-driven work ethic to literally change the world.</p>


                            <div className="signature">
                                <h1>Lara Foster</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              <Footer />

    </>
  );
}

export default About;
