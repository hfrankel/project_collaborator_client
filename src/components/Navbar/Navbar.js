import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './../LoginButton/LoginButton';
import LogoutButton from './../LogoutButton/LogoutButton';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar__div-brand">Home</div>
      <ul className="navbar__ul">
        <li className="navbar__li">Projects</li>
        <li className="navbar__li">About</li>
        <li className="navbar__li">Contact</li>
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </ul>
    </nav>
  );
};

export default Navbar;
