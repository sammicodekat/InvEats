import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout.jsx';
import LoginForm from './components/LoginForm';
import Setup from './components/Setup';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Layout} />
    <Route path="login" component={LoginForm} />
    <Route path="setup" component={Setup} />
  </Route>
);
