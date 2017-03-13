import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Signup from './components/signup/Signup';
import Home from './components/Home';
import RequireAuth from './components/RequireAuth';
import PickRestaurant from './components/match/PickRestaurant';

// import Profile from './components/Profile';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={LoginForm} />
    <Route path="signup" component={Signup} />
    <Route path="home" component={RequireAuth(Home)} />
    <Route path="listings" component={PickRestaurant} />
    {/* <Route path="profile/:id" component={Profile} />  */}
    {/* <Route path="matches" component={Matches} > */}
    {/* <Route path="time" component={Time} /> */}
    {/* <Route path="location" component={Location} /> */}
  </Route>
    );
