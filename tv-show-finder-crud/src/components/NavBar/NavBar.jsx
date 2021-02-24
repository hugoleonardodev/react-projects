import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import Logo from "./Logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <NavbarBrand href="/" style={{ display: "flex" }}>
            <Logo />
            TV Show Finder CRUD
          </NavbarBrand>
        </Collapse>
        <Collapse isOpen={isOpen} style={{ justifyContent: "center" }} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag="div">
                <Link to="/">Find</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/projects">Create</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/contact">Read</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/about">Delete</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="div">
                <Link to="/about">Update</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
