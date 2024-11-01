import React from 'react';
import './navbar.css';
import logo from '../../asstes/logo.png';
import { Link } from 'react-router-dom';
import contactImg from '../../asstes/contact.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className='logo' />
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" to="/">Home</Link>
                <Link className="desktopMenuListItem" to="/works">Projects</Link>
                <Link className="desktopMenuListItem" to="/about">About Me</Link>
                <Link className="desktopMenuListItem" to="/skills">Service</Link>
            </div>
            <Link to="/contact">
                <button className="desktopMenuBtn">
                    <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
                </button>
            </Link>
        </nav>
    )
}

export default Navbar;
