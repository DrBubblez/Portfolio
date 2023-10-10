import React from 'react';
import './navbar.css';
import logo from '../../img/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg sticky-top bg-dark bg-opacity-75">
            <div className="container-fluid">
                <img src={logo} alt="logo" className='logo navbar-brand'/>
                <button className="navbar-toggler" type="button" data-bs-id="" data-bs-toggle="offcanvas" data-bs-target= "#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="desktopMenu navbar-nav">
                        <Link className="desktopMenuListItem nav-item nav-link">Home</Link>
                        <Link className="desktopMenuListItem nav-item nav-link">About</Link>
                        <Link className="desktopMenuListItem nav-item nav-link">Projects</Link>
                        <Link className="desktopMenuListItem nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
