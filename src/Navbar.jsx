import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './img/logo.png'
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light m-0 container-fluid">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/"><img src={logo} alt="LOGO" /></NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item me-3">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/About">About Us</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" aria-current="page" to="/Services">Services</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/Products">Products</NavLink>
                        </li>
                        <li className="nav-item me-3">
                            <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex ms-5 me-5">
                        <button className="btn rounded-pill" id='navbutton' type="submit">Contact Us</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
