import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarProtected = () => {
  return (
    <div id="navbar">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/home" className="text-white">
            Local Finance
          </Navbar.Brand>
          <Navbar.Toggle />

          <Nav className="me-auto">
            <Nav.Link href="/dashboard" className="text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/me" className="text-white">
              Me
            </Nav.Link>
            <Nav.Link href="/statistics" className="text-white">
              Statistics
            </Nav.Link>
            <Nav.Link href="/account" className="text-white">
              Account
            </Nav.Link>
          </Nav>

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              Signed in as:{" "}
              <a href="#login" className="text-white">
                Admin
              </a>
            </Navbar.Text>
            <Navbar.Text></Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarProtected;
