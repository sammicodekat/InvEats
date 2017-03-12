import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class SemanticButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.clickHandler(e);
  }

  render() {
    const { name, checked, label, clickHandler } = this.props;
    const color = checked ? "red": "grey";
    return (
      <Button onClick={this.handleClick} name={name} checked={checked} color={color}>
        {label}
      </Button>
    );
  }

}
