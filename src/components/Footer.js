import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Oeffnungszeiten from './Oeffnungszeiten';
import MapLocation from './MapLocation';
import Impressum from './Impressum';


const Footer = () => {
    return (
        <footer>
            <div className='footer-box'>
                <Impressum />
            </div>
            <div className='footer-box'>
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/wir">Wir</Nav.Link>
                <Nav.Link href="/speisekarte">Speisekarte</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/kontakt">Kontakt</Nav.Link>
            </div>
            <div className='footer-box'>
                <Oeffnungszeiten />
            </div>
            <div classNam='footer-box'>
                <MapLocation />
            </div>
        </footer>
    );
}

export default Footer