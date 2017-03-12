import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/auth/authActions';
import Navbar from './Navbar';

class Layout extends Component {
  componentWillMount() {
    if (window.localStorage.token) {
      const decoded = jwt.decode(localStorage.token);
      this.props.setUser(decoded);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAuth && !this.props.isAuth) {
      this.props.router.push('/home');
    }
  }

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

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUser })(Layout);
