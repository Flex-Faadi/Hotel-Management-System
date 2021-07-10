import React, { useState } from "react";
import {
  FaSignInAlt,
  FaSignOutAlt
} from "react-icons/fa";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { Navbar, Nav} from 'react-bootstrap'
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <>

        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home"><Link to="/">Bookers.pk</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="./login">Login <FaSignInAlt /></Nav.Link>
              <Nav.Link href="/signup" > Signup <FaSignOutAlt /></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </>
  );
};

export default Header;