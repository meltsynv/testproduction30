import React from 'react';
import Logo from '../resources/logo.svg';
import Instagram from '../resources/instagram.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Layout from './Layout';

const NavBar = () => {
    return (
        <div className='nav-outer'>
            <Layout>
                <Navbar expand="lg" className='NavBar navbar-dark'>
                    <Navbar.Brand href="/"><img src={Logo} width='50px' height='50px' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/wir">Wir</Nav.Link>
                            <Nav.Link href="/speisekarte">Speisekarte</Nav.Link>
                            <Nav.Link href="/events">Events</Nav.Link>
                            <Nav.Link href="/kontakt">Kontakt</Nav.Link>
                            <Nav.Link href="https://www.instagram.com/steakhaus_eldorado/?hl=de" target='_blank'><img src={Instagram} width='24px' height='24px' /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Layout>
        </div>
    );
}

export default NavBar;