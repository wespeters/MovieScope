import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-movie">Add Movie</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
