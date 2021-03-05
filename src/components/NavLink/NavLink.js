import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

const NavLink = ({ to, children }) => {
  return (
    <Link to={to} className="navlink">
      {children}
    </Link>
  );
};

export default NavLink;
