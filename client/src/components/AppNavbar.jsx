import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function AppNavbar({ isLogin = true }) {

    const styles = {
        navbar: {
            backgroundColor: '#FFFFFF',
            // backgroundColor: '#4366b5',
        }
    }

    return (
        <>
            <Navbar sticky="top" style={styles.navbar} className='navbar-shadow' expand="lg">
                <Navbar.Brand>
                    <Nav.Link href='http://localhost:3001' className="text-decoration-none navbar-text-color">NITK-HUB</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {isLogin &&
                            <Nav.Link href="http://localhost:3001/home" className="navbar-text-color bottom-border" >HOME</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {!isLogin &&
                            <><Nav.Link href="http://localhost:3001/login" className="navbar-text-color bottom-border" >LOGIN</Nav.Link>
                                <Nav.Link href="http://localhost:3001/register" className="navbar-text-color bottom-border" >REGISTER</Nav.Link></>
                        }
                        {isLogin &&
                            <Nav.Link href="http://localhost:3001/auth/logout" className="navbar-text-color bottom-border" >LOGOUT</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default AppNavbar;