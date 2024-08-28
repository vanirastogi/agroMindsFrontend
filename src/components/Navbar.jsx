import React from 'react';
import './Navbar.css'; // You can style it here or inline
import logo from "../assets/images/logo.png"
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
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
