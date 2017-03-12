import React, { Component } from 'react';
import Button from './button/Button';

export default class Match extends Component {
  render() {
    const { range, round, industry, title, clickHandler, description } = this.props;
    const industries = industry.reduce((acc, curr) => {
      if (acc === '') {
        return curr;
      }
      acc += ` ${curr}`;
      return acc;
    });
    return (
      <div>
        <h3>{`${title}`}</h3>
        <h5>{`${range} - ${round} - ${industries}`}</h5>
        <p> {description} </p>
        <Button label="Meet" clickHandler={clickHandler} />
      </div>
    );
  }
}
