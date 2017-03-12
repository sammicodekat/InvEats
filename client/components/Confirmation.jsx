// class Component of LoginForm
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin, loginUser } from '../store/actions/auth/authActions';
import { getMatches } from '../store/actions/firebase/firebaseActions';
import MatchLocation from './match/MatchLocation'
import {
  Button,
  Card,
  Icon,
  Label,
  Segment,
} from 'semantic-ui-react';
const restaurantdata = {
url:'http://www.hauteliving.com/wp-content/uploads/2013/01/Kokkari-Estiatorio.png',
name:'Kokkari Estiatorio',
location:'200 Jackson St, San Francisco, CA',
}
const companydata = {
url:'https://static1.squarespace.com/static/5768a1ba15d5db9b150d294a/576abeccebbd1a172a60f4c8/582209f815d5db0e894c0e11/1478625822849/20161102_SHO_OhioValleyRunningCompany_012.jpg?format=1500w',
name:'GoRunner',
description:'We are an awesome startup',
}
const map ="https://maps.googleapis.com/maps/api/staticmap?center=37.7970291,-122.4087136,15z&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyClYJ8ifSuK7zQocDZxzy8l_H5mmMNewBk"

class Confirmation extends Component {

  componentDidMount() {
    // this.props.getMatches()
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <div className="confirmation">

        <Segment className="confirmationmap" raised vertical >
          <Label attached='top' as='a' color='red' ribbon>Upcomming</Label>
          <h2>You are all set!</h2>
          <Card
            image={companydata.url}
            header={companydata.name}
            description={companydata.description}
            centered
          />
          <h4>at</h4><Label color='blue' key>
            March 15th
          </Label><Label color='blue' key>
            11:30am
          </Label>
          <Card
            image={restaurantdata.url}
            header={restaurantdata.name}
            description={restaurantdata.location}
            centered
          />
          <img src={map} />
        </Segment>
        </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { googleLogin, loginUser, getMatches })(Confirmation);
