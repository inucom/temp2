import React from 'react';
import {Link, NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Heading(){
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">InuAttention</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/upload">Upload</Nav.Link>
                        <Nav.Link href="/" >Styles</Nav.Link>

                        {/*<Nav.Link>*/}
                        {/*    <Link to="/upload"*/}
                        {/*          style={{color:"gray",textDecoration:"none"}}>upload</Link>*/}
                        {/*</Nav.Link>*/}
                        {/*<Nav.Link>*/}
                        {/*    <Link to="/"*/}
                        {/*          style={{color:"gray",textDecoration:"none"}}>list</Link>*/}
                        {/*</Nav.Link>*/}
                        <NavDropdown title="Menu" id="basic-nav-dropdown">

                            <NavDropdown.Item href="/upload">Upload</NavDropdown.Item>
                            <NavDropdown.Item href="/">Styles</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Heading;