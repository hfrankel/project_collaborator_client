import React from 'react';
import './Navbar.css';

const Navbar = ({ children }) => {
  return <nav className="navbar">{children}</nav>;
};

export default Navbar;
