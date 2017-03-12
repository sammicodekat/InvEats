import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences, getProjectOwners } from '../store/actions/firebase/firebaseActions';

class Investor extends Component {

  componentDidMount() {
    this.props.getProjectOwners(this.props.auth)
  }

  render() {
    return (
        <div>
          <h1> Investor Container </h1>
        </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { getPreferences, getProjectOwners })(Investor);
