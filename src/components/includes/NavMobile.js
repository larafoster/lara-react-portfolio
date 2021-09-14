import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Container,
  Navbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import '../../assets/css/mobile.css';

const NavTop = () => {
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  return (
    <>
      <Container>
        <div id="navigation" className="menu-two ">
          <Navbar className="navbar-expand-lg">
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
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle color="primary">
                <i className="fas fa-bars fa-2x"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink duration={500} exact to="/#top">
                    Home
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  <HashLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="/#me"
                  >
                    About Me
                  </HashLink>
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  <NavLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="./skills"
                  >
                    Skills
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {" "}
                  <NavLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="./experience"
                  >
                    Experience
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {" "}
                  <NavLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="./education"
                  >
                    Education
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />

                <DropdownItem>
                  {" "}
                  <NavLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="./portfolio"
                  >
                    Portfolio
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {" "}
                  <NavLink
                    duration={500}
                    exact
                    activeClassName="current"
                    to="./contact"
                  >
                    Contact
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Navbar>
        </div>
      </Container>
    </>
  );
};

export default NavTop;
