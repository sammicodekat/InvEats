import React from 'react'
import { browserHistory } from 'react-router'
import { Card } from 'semantic-ui-react'

const Role = (props) => {
  return (
    <Card.Group>
      <Card
        image="http://www.ge.com/ar2015/assets/images/letter/headshot-flannery-db986153.jpg"
        header="Investor"
        centered
        raised
        onClick={props.selectInvestor}
      />
      <Card
        image="http://www.ge.com/ar2015/assets/images/letter/headshot-pecresse-6c4f166f.jpg"
        header="Project Owner"
        centered
        raised
        onClick={props.selectOwner}
      />
     </Card.Group>
    );
};
export default Role
