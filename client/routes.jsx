import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Signup from './components/Signup';
// import Profile from './components/Profile';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={LoginForm} />
    <Route path="signup" component={Signup} />
    {/* <Route path="profile/:id" component={Profile} /> */}
    {/* <Route path="matches" component={Matches} >
      <Route path="time" component={Time} />
      <Route path="location" component={Location} />
      <Route path="confirmation" component={Confirmation} />
    </Route> */}
  </Route>
);
