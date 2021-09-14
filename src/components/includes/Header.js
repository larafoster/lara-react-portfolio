import React from "react";
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <>
  
    <div className="main-wrapper main-section">
        <div id="home-banner">
            <div className="container">


                <div className="row d-none d-sm-none d-md-block">
                    <div className="col-sm-9">
                        <div className="banner-content">
                            <div className="home-social">
                                                                <ul className="list-inline">
                                        <li className="list-inline-item"><ExternalLink href="mailto:larafoster.dev@gmail.com"
                                            title="email me"><i className="far fa-at fa-3x " aria-hidden="true"></i></ExternalLink>
                                        </li>
                                        <li className="list-inline-item"><ExternalLink
                                            href="https://www.linkedin.com/in/lara-foster-40189212/" target="_blank"
                                            title="visit me on Linkedin"><i className="fab fa-linkedin fa-3x"
                                                aria-hidden="true"></i></ExternalLink></li>
                                        <li className="list-inline-item">
                                            <ExternalLink href="https://github.com/larafoster/larafoster" title="view my github repo"><i className="fab fa-github fa-3x"
                                                aria-hidden="true"></i></ExternalLink></li>
                                        <li className="list-inline-item">
                                            <Link to="resume"><i className="far fa-file-user fa-3x" aria-hidden="true"
                                                alt="download resume"></i></Link>
                                        </li>
                                    </ul>
                            
                             </div>
                                <div className="banner-info">
                                    <h1>Hello, I am</h1>
                                    <h2>Lara Foster</h2>
                                    <h3>DESIGNER &amp; FULL STACK DEVELOPER</h3>
                            
                           </div>  </div> </div> </div> </div> </div> </div>
        

      
    
    </>
    );
}

export default Header;
