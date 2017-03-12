import React, { Component } from 'react';
import Button from './button/Button';

export default class Match extends Component {
  render() {
    console.log('rendering this thing')
    const { range, round, industry, title, clickHandler, description } = this.props;
    const industries = industry.reduce((acc, curr) => {
      if (acc === '') {
        return curr;
      }
      acc += ` ${curr}`;
      return acc;
    });
    return (
      <div className="match">
        <h3 className="match-title">{`${title}`}</h3>
        <h5>Industry: {industries}</h5>
        <h5>Funding Stage: {round}</h5>
        <h5>Funding Range: {range}</h5>
        <p> {description} </p>
        <Button classN="meet-button" label="Meet" clickHandler={clickHandler} />
      </div>
    );
  }
}
