import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences, getMatches } from '../store/actions/firebase/firebaseActions';

class Investor extends Component {

  componentDidMount() {
    this.props.getMatches(this.props.auth)
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

export default connect(mapStateToProps, { getPreferences, getMatches })(Investor);
