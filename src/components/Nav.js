import React from 'react';
import './Nav.style.css'

const Nav = () => {
    return (
        <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    );
}

export { Nav };