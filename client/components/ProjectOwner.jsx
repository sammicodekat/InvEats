import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences } from '../store/actions/firebase/firebaseActions';

class ProjectOwner extends Component {
  render() {
    return (
        <div>
          <h1> ProjectOwner Container </h1>
        </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { getPreferences })(ProjectOwner);
