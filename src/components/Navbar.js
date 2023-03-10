import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>                    
                    </li>
                    <li>
                        <NavLink to="/portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;