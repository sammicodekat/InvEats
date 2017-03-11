import React, { Component } from 'react';
import Button from './Button.jsx';


export default class ButtonsGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options, clickHandler } = this.props;
    return (
      <div>
        {options.map(option => <Button clickHandler={clickHandler} name={option.name} checked={this.state[option.name]} />)
        }
      </div>
    );
  }
}
