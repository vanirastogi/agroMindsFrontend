import React from 'react';
import './Navbar.css'; // You can style it here or inline
import logo from "../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={logo}
                    alt="NLW Lawn Care"
                    className="navbar-logo"
                />
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
