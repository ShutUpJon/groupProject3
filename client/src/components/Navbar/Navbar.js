import React, { Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./navbar.css";

var Logo = require('./Rlogo.png');


class CustomNavbar extends Component {
     render() {
          return (
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="sticky-top">
                    <Navbar.Brand href="/">
                         <img
                              src={Logo}
                              width="150px"
                              height="40px"
                              className="d-inline-block align-top"
                              alt="R"
                         />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                         <Container fluid>
                              <Nav className="justify-content-end" activeKey="/">
                                   <Nav.Item>
                                        <Nav.Link href="/">Home</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/search">Search</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="#about">About</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="#connect">Connect</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/login">Log In</Nav.Link>
                                   </Nav.Item>
                                   <Nav.Item>
                                        <Nav.Link href="/register">Register</Nav.Link>
                                   </Nav.Item>
                              </Nav>
                         </Container>
                    </Navbar.Collapse>
               </Navbar>
          )
     }
}


export default CustomNavbar;