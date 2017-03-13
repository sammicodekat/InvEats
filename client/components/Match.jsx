import { Card, Label } from 'semantic-ui-react';
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
      <Card
        header={title}
        meta={<div><Label color="blue">{industries}</Label><Label color="yellow">{round}</Label><Label color="green">{range}</Label></div>}
        description={description}
        extra={<Button classN="meet-button" label="Meet" clickHandler={clickHandler} />}
      />
    );
  }
}
