import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar({ isLogin = true }) {

    const styles = {
        navbar: {
            backgroundColor: '#4366b5'
        }
    }

    return (
        <>
            <Navbar sticky="top" style={styles.navbar} className='custom-nav navbar-shadow' expand="lg">
                <Navbar.Brand>
                    <Link to='/' className="text-decoration-none text-light">NITK-HUB</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {isLogin &&
                            <Nav.Link href="/home" className="text-light bottom-border" >HOME</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        <Nav.Link href="/login" className="text-light bottom-border" >LOGIN</Nav.Link>
                        <Nav.Link href="/register" className="text-light bottom-border" >REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default AppNavbar;