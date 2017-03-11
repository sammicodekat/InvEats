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


// import Layout from './components/Layout';
// import Home from './components/Home'
// import Profile from './components/Profile'
// import SignUp from './components/SignUP'
// import Login from './components/Login'
// import Role from './components/Role'
// import Range from './components/Range'
// import Industry from './components/Industry'
// import Availablity from './components/Availablity'
// import Cuisine from './components/Cuisine'
// import Company from './components/Company'
// import Matches from './components/Matches'
// import Time from './components/Time'
// import Location from './components/Location'
// import Confirmation from './components/Confirmation'
// export default (
//     <Route path="/" component={Layout}>
//       <IndexRoute component={Home} />
//       <Route path="profile/:id" component={Profile} />
//       <Route path="signup" component={Signup} >
//         <Route path="/role" component={Role} />
//         <Route path="/round" component={Round} />
//         <Route path="/range" component={Range} />
//         <Route path="/industry" component={Industry} />
//         <Route path="/availablity" component={Availablity} />
//         <Route path="/cuisine" component={Cuisine} />
//         <Route path="/company" component={Company} />
//       </Route>
//       <Route path="login" component={Login} />
//       <Route path="matches" component={Matches} >
//         <Route path="time" component={Time} />
//         <Route path="location" component={Location} />
//         <Route path="confirmation" component={Confirmation} />
//       </Route>
//     </Route>
// =======
