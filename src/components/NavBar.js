import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className='navlink'>Home</Link></li>
                <li><Link to="/add-movie" className='navlink'>Add Movie</Link></li>
            </ul>
            <div className='nav-title'>
                <h1>MovieScope</h1>
            </div>
            
        </nav>
    );
}

export default NavBar;
