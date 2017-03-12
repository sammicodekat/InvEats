// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, loginUser } from '../store/actions/auth/authActions';
import { getProjectOwners } from '../store/actions/firebase/firebaseActions';

class LoginForm extends Component {

  componentDidMount() {
    this.props.getProjectOwners()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuth && nextProps.auth.isNew) {
      this.props.router.push('/signup');
    } else if (nextProps.auth.isAuth) {
      this.props.router.push('/home');
    }
  }

  loginWithGoogle(e) {
    e.preventDefault();
    this.props.googleLogin();
  }

  login(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    this.props.loginUser({ email, password });
  }

  render() {
    return (
      <div>
        <div>
          <h1> Login </h1>
          <form className="form-horizontal" ref="loginForm" onSubmit={(e) => this.login(e)}>
            <div className="form-group">
              <label className="col-lg-3 control-label">Username</label>
              <div className="col-lg-9">
                <input className="form-control" type="text" ref="email" placeholder="jane123@gmail.com" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-lg-3 control-label">Password</label>
              <div className="col-lg-9">
                <input className="form-control" type="password" ref="password" placeholder="password" />
              </div>
            </div>

            <div className="form-actions">
              <input className="btn btn-default linkto signup-btn" type="submit" value="Login" />
            </div>
          </form>
          <button onClick={e => this.loginWithGoogle(e)}>
            Login with Google
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { googleLogin, loginUser, getProjectOwners })(LoginForm);
