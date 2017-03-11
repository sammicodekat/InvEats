import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

export default class SemanticButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.clickHandler();
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        Click Here
      </Button>
    );
  }

}

