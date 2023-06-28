import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className='navlink'>Home</Link></li>
                <li><Link to="/add-movie" className='navlink'>Add Movie</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
