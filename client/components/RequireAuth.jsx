// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class AuthCheck extends Component {
    componentWillMount() {
      if (!this.props.isAuth) {
        this.props.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuth) {
        this.props.router.push('/');
      }
    }

    render() {
      return (
        <div>
          <div>
            <ComposedComponent {...this.props} />
          </div>
        </div>
      );
    }
  }
  const mapStateToProps = ({ auth }) => {
    return {
      isAuth: auth.isAuth,
    };
  };
  return connect(mapStateToProps)(AuthCheck);
}
