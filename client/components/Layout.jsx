import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Navbar from './Navbar';

class Layout extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="pageContainer">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Layout;
