import React from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import contactImg from '../../img/message-50.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="contact icon" className="desktopMenuImg"/>Contact Me
            </button>
        </nav>   
    )
}

export default Navbar;
