import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './Button.jsx';
import ButtonsGroup from './Buttonsgroup.jsx';


export default class SignUpStep extends Component {
  constructor(props) {
    super(props);

    const buttons = {};

    this.props.options.forEach((option) => {
      buttons[option.name] = option;
    });

    this.state = buttons;
    this.handleClick = this.handleClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
  }

  handleClick(e) {
    const name = e.target.name;
    this.setState({
      [name]: { ...this.state.name, checked: !this.state.name.checked},
    });
  }

  handleNext() {
    this.props.nextClicked(this.state);
  }

  render() {
    const { options } = this.props;
    return (
      <ButtonsGroup clickHandler={this.handleClick} options={options} />
      <Button clickHandler={this.handleNext} name='Next' checked={false} />
    );
  }

}