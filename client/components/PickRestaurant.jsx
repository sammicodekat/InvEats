import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMyProp} from '../store/actions/demoAction';

export class PickRestaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: 'HRD'
    };

    this.pickADay = this.pickRestaurant.bind(this);

  }

  pickRestaurant(e) {
    //handle selection
  }

  render() {
    const { restaurants } = this.state;

    //Map over restaurant data
    const display = <p>{restaurants}</p>;

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default connect(({demoReducer}) => {
  return ({myProp: demoReducer.myProp});
}, {updateMyProp})(PickRestaurant);
