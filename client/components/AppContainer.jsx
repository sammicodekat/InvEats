import React from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import { setUser } from '../store/actions/authActions';

class AppContainer extends React.Component {
  componentWillMount() {
    if (window.localStorage.token) {
      const decoded = jwt.decode(localStorage.token);
      this.props.setUser(decoded);
      this.props.router.push('/home');
    }
  }

  render() {
    return (
      <div className="container">
        LALALALAL
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUser })(AppContainer);
