import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../LoginButton/LoginButton';
import LogoutButton from '../LogoutButton/LogoutButton';
import Navbar from '../Navbar/Navbar';
import Home from './../../pages/Home/Home';
import NavLink from './../NavLink/NavLink';
import Profile from '../Profile/Profile';
import Container from './../Container/Container';

const App = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Router>
        <Navbar>
          <div style={{ flexGrow: 3, alignSelf: 'center' }}>
            <NavLink to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            {/* Keep auth logic out of navbar for reusability */}
          </div>
        </Navbar>
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
          </Container>
        </Switch>
      </Router>
      <Profile />
    </>
  );
};

export default App;
