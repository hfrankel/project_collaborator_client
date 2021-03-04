import React from 'react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <Profile />
    </div>
  );
};

export default App;
