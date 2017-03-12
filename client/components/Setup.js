// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences } from '../store/actions/firebaseActions';

class Setup extends Component {
  render() {
    return (
      <div>
        <div>
          <h1> Setup Container </h1>
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

export default connect(mapStateToProps, { savePreferences, getPreferences })(Setup);
