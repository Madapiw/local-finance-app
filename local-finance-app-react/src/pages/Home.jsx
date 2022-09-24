import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from "react-router-dom";

export default class Home extends Component {
  render() {
    return ( 
    // <div>
    //     <Navbar bg="dark" expand="lg">
    //       <Container>
    //         <Navbar.Brand href="/" className="text-white">
    //           Local Finance
    //         </Navbar.Brand>
    //         <Navbar.Toggle />
    //         <Nav className="me-auto justify-content-end">
    //           <Link to="/login" className="text-white">
    //             Login
    //           </Link>
    //           <Link to="/register" className="text-white">
    //             Register
    //           </Link>
    //         </Nav>
    //       </Container>
    //     </Navbar>
    //   </div>

      <div>
        <div className="container">
          <h1 className="display-2">Home</h1>
        </div>
      </div>
    );
  }
}
