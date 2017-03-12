import React, { Component } from 'react';
import { connect } from 'react-redux';
import { savePreferences, getPreferences } from '../store/actions/firebase/firebaseActions';
import Investor from './Investor';
import ProjectOwner from './ProjectOwner';

class Home extends Component {
  componentWillMount() {
    this.props.getPreferences();
  }
  render() {
    return (
      <div>
        {this.props.auth.role.Investor ?
          <Investor {...this.props} /> :
          <ProjectOwner {...this.props} />}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  };
};

export default connect(mapStateToProps, { getPreferences })(Home);
