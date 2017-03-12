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
    const { name, checked, label, classN } = this.props;
    return (
      <Button
        className={`button-signup ${classN}`}
        onClick={this.handleClick}
        name={name}
        color={checked ? 'green' : 'teal'}
        active={false}
      >
        {label}
      </Button>
    );
  }
}
