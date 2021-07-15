import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar(props) {
    return (
        <>
            <Navbar sticky="top" bg="primary" expand="lg">
                <Navbar.Brand><Link to='/' className="text-decoration-none text-light">NITK-HUB</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="text-light" >HOME</Nav.Link>
                        <Nav.Link href="/login" className="text-light" >LOGIN</Nav.Link>
                        <Nav.Link href="/register" className="text-light" >REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default AppNavbar;