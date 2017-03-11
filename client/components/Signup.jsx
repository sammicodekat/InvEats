import React, {Component} from 'react';
import {connect} from 'react-redux';
import { googleLogin } from '../store/actions/auth/authActions';
import {submitInfotoFirebase} from '../store/actions/demo/demoAction';
import { Grid, Button, Icon } from 'semantic-ui-react'
import Role from '../signup/Role';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: {"Investor":false, "Project Owner":false },
      step: 1,
      location:'',
      industry: {"Healthcare":false, "FinTech":false, "Consumer":false, "Digital Media":false, "Ecommerce":false, "SaaS":false},
      round: {"Idea":false, "Seed":false, "Series A":false, "Series B":false, "After":false },
      range:{"<$100k":false, "$100k-$300k":false, "$300k-$500k":false, "$500k-$1M":false, ">$1M":false},
      cuisine:{"Mexican":false,"Thai":false,"American":false,"Italian":false,"Japanese":false},
      schedule:{"Monday":{"Lunch":false,"Dinner":false},"Tuesday":{"Lunch":false,"Dinner":false},"Wednesday":{"Lunch":false,"Dinner":false},"Thursday":{"Lunch":false,"Dinner":false},"Friday":{"Lunch":false,"Dinner":false}},
      product:{"Title":'',"Description":''},
    };

    this.submitName = this.submitName.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
  }

  updateNameState(e) {
    this.setState({text: e.target.value});
  }

  submitName() {
    this.props.updateMyProp(this.state.text);
  }

  selectRole(e) {
    this.setState({role: e.target.value});
    this.nextStep();
  }

  nextStep() {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }
  prevStep() {
    const { step } = this.state;
    if (step >= 1) {
      this.setState({
        step: step - 1,
      });
    }
  }

  render() {
    const { role, step, location, industry, round, range, cuisine, schedule, product } = this.state;
    let display = '';
    switch(step){
    case 1 : display=(<Role selectRole={this.selectRole} role={role} />)
    }

    return (
  <Grid verticalAlign='middle' centered>
    <Grid.Row>
      <Grid.Column floated='left' width={2}>
        <Button animated color="blue">
          <Button.Content visible>Prev</Button.Content>
          <Button.Content hidden>
            <Icon name='left arrow' />
          </Button.Content>
        </Button>
      </Grid.Column>
      <Grid.Column>{display}</Grid.Column>
      <Grid.Column floated='right' width={2}>
        <Button animated color="blue">
          <Button.Content visible>Next</Button.Content>
          <Button.Content hidden>
            <Icon name='right arrow' />
          </Button.Content>
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    );
  }
}

// export default connect(({ demoReducer }) => {
//   return ({myProp: demoReducer.myProp});
// }, {submitInfotoFirebase})(Signup);
