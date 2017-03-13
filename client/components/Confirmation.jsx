// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, loginUser } from '../store/actions/auth/authActions';
import { getMatches } from '../store/actions/firebase/firebaseActions';
import MatchLocation from './match/MatchLocation'
import {
  Button,
  Image,
  Icon,
  Form,
  Segment,
} from 'semantic-ui-react';

class Confirmation extends Component {

  componentDidMount() {
    // this.props.getMatches()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div className="confirmation">
        <Segment className="confirmation" raised>
          <MatchLocation />
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { googleLogin, loginUser, getMatches })(LoginForm);
