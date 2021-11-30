import React from 'react';
import { Container,  Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar className='header-part' expand={false}>
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle className='header-toggle' aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
                </Offcanvas.Header> */}
                <Offcanvas.Body className='header-part'>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link to="/home">Home</Nav.Link>
                    <Nav.Link to="/project">Projects</Nav.Link>
                    <Nav.Link to="/about">About</Nav.Link>
                    <Nav.Link to="/contract">Contract</Nav.Link>
                    <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
                    </Nav>
                   
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default Header;