import React from 'react';
import { HashLink } from 'react-router-hash-link';
 import { Link } from 'react-router-dom';

import NavMobile from './NavMobile';
import {
    Container,
    Navbar,
    Collapse,
} from 'reactstrap';

const NavTop = () => {
    return (
        <>
            <Container>
                <div id="navigation" className="menu-two d-none d-lg-block">
                    <Navbar className="navbar-expand-lg ">
                        <div className="navbar-header">
                            <div className="navbar-brand logo">
                                <img
                                    alt="..."
                                    className="img-fluid"
                                    width="285"
                                    src={require("../../assets/images/logo.png").default}
                                />
                            </div>
                        </div> 
                        <Collapse className="navbar-collapse">
                       
                            <nav id="mainmenu">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/#top">Top</Link></li>

                                    <li>
                                        <HashLink to="/#me">About Me</HashLink></li><li>
                                        <Link to="/skills">Skills</Link></li><li>
                                        <Link to="/experience">Experience</Link></li><li>
                                        <Link to="/education">Education</Link></li><li>
                                        <Link to="/portfolio">Portfolio</Link></li>
                                        <li>

                                        <Link to="/contact">Contact</Link></li>
                                </ul>

                            </nav>
                        </Collapse>

                    </Navbar>
                </div>
            </Container> 
                    <div className="d-lg-none">
 <NavMobile  />
                        </div>               

             </>
    );
}

export default NavTop;

