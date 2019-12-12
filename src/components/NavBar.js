import React from 'react';
import Logo from '../resources/logo.svg';
import Instagram from '../resources/instagram.svg';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link, NavLink, withRouter } from 'react-router-dom';
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
                            <NavLink className='nav-link' exact to="/">Home</NavLink>
                            <NavLink className='nav-link' to="/wir">Wir</NavLink>
                            <NavLink className='nav-link' to="/speisekarte">Speisekarte</NavLink>
                            <NavLink className='nav-link' to="/events">Events</NavLink>
                            <NavLink className='nav-link' to="/kontakt">Kontakt</NavLink>
                            <NavLink className='nav-link' to="https://www.instagram.com/steakhaus_eldorado/?hl=de" target='_blank'><img src={Instagram} width='24px' height='24px' /></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Layout>
        </div>
    );
}

export default NavBar;