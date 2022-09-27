import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


export default class NavBarPublic extends Component {
  render() {
    return (
      <div>
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
            <Nav className="navbar-nav me-auto justify-content-end">
              <Nav.Link as={Link} to="/login" className="text-white ">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-white" >
                Register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    );
  }
}
