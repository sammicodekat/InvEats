// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { googleLogin } from '../store/actions/auth/authActions';

class LoginForm extends Component {
  loginWithGoogle(e) {
    e.preventDefault();
    this.props.googleLogin()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuth) {
      this.props.router.push('/signup');
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1> Login </h1>
          <button onClick={(e) => this.loginWithGoogle(e)}>
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { googleLogin })(LoginForm);
