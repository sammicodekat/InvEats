import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import Test from './components/TestComponent';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Test} />
    {/*Uncomment this stuff once we have Profile */}
    {/*<Route path="profile/:id" component={Profile} />*/}
  </Route>
);
