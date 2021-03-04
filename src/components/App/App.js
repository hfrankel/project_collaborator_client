import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Navbar>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</Navbar>
      <br />
      <Profile />
    </div>
  );
};

export default App;
