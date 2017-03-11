import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout'
// import Home from './components/Home'
// import Profile from './components/Profile'
export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="profile/:id" component={Profile} />
  </Route>
)
