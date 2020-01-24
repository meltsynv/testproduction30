import React from 'react';
import Oeffnungszeiten from './Oeffnungszeiten';
import MapLocation from './MapLocation';
import Impressum from './Impressum';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
      <footer>
        <div className="footer-box">
          <Impressum />
        </div>
        <div className="footer-box">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/wir">
            Wir
          </NavLink>
          <NavLink className="nav-link" to="/speisekarte">
            Speisekarte
          </NavLink>
          <NavLink className="nav-link" to="/events">
            Events
          </NavLink>
          <NavLink className="nav-link" to="/kontakt">
            Kontakt
          </NavLink>
        </div>
        <div className="footer-box">
          <Oeffnungszeiten />
        </div>
        <div classNam="footer-box">
          <MapLocation />
        </div>
      </footer>
    );
}

export default Footer