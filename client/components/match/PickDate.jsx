import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateMyProp} from '../../store/actions/demo/demoAction';

export class PickDate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: 'March 11th'
    };

    this.pickADay = this.pickADay.bind(this);

  }

  pickADay(e) {
    //handle date pick
  }

  render() {
    const { dates } = this.state;

    //Map over date data
    const display = <p>{dates}</p>;

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default connect(({demoReducer}) => {
  return ({myProp: demoReducer.myProp});
}, {updateMyProp})(PickDate);
