import React from 'react';
import './Navbar.css';

const Navbar = ({ children }) => {
  return (
    <nav className="navbar">
      <div className="navbar__div-brand">Home</div>
      <ul className="navbar__ul">
        <li className="navbar__li">Projects</li>
        <li className="navbar__li">About</li>
        <li className="navbar__li">Contact</li>
        {children}
      </ul>
    </nav>
  );
};

export default Navbar;
