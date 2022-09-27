import { Component} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class NavBarProtected extends Component {
  render() {
    return (
      <div id="navbar">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Container>
          <Navbar.Brand href="/" className="text-white font-weight-bold">
            <img
              src="/fox-head-icon.png"
              width="40"
              height="40"
              className="mr-4 d-inline-block align-left"
              alt="Fox icon"
            />
              Local Finance App
            </Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse >
              <Nav className="me-auto justify-content-end">
                <Nav.Link as={Link} to="/dashboard" className="text-white">
                  Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/me" className="text-white">
                  Me
                </Nav.Link>
                <Nav.Link as={Link} to="/statistics" className="text-white">
                  Statistics
                </Nav.Link>
                <Nav.Link as={Link} to="/account" className="text-white">
                  Account
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>

            
              <Navbar.Text className="justify-content-end text-white">
                Signed in as:{" "}
                <a href="/login" className="text-white">
                  Admin
                </a>
              </Navbar.Text>

          </Container>
        </Navbar>
      </div>
    );
  };
};

