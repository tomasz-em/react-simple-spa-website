import React from 'react';
import './Nav.style.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/about">About</NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to="/contact">Contact</NavLink>
            </li>
        </ul>
    );
}

export { Nav };