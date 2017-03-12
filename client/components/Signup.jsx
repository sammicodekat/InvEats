import React, { Component } from 'react';
import { connect } from 'react-redux';
import { googleLogin } from '../store/actions/auth/authActions';
import { Grid, Button, Icon, Progress } from 'semantic-ui-react';
import { savePreferences, getPreferences } from '../store/actions/firebase/firebaseActions';
import SignUpRole from './SignUpRole';
import SignUpLocation from './SignUpLocation';
import SignUpRound from './SignUpRound';
import SignUpRange from './SignUpRange';
import SignUpIndustry from './SignUpIndustry';
import SignUpAvailability from './SignUpAvailability';
import SignUpCuisine from './SignUpCuisine';
import SignUpProduct from './SignUpProduct';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: { Investor: false, 'Project Owner': false },
      step: 1,
      location: '',
      industry: { Healthcare: false, FinTech: false, Consumer: false, 'Digital Media': false, Ecommerce: false, SaaS: false },
      round: { Idea: false, Seed: false, 'Series A': false, 'Series B': false, After: false },
      range: { '<100k': false, '100k-300k': false, '300k-500k': false, '500k-1M': false, '>1M': false },
      cuisine: { Mexican: false, Thai: false, American: false, Italian: false, Japanese: false },
      schedule: { Monday: { Lunch: false, Dinner: false }, Tuesday: { Lunch: false, Dinner: false }, Wednesday: { Lunch: false, Dinner: false }, Thursday: { Lunch: false, Dinner: false }, Friday: { Lunch: false, Dinner: false } },
      product: { Title: '', Description: '' },
    };

    this.submitName = this.submitName.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleClickRole = this.handleClickRole.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleClickRound = this.handleClickRound.bind(this);
    this.handleClickRange = this.handleClickRange.bind(this);
    this.handleClickIndustry = this.handleClickIndustry.bind(this);
    this.handleClickAvailability = this.handleClickAvailability.bind(this);
    this.handleClickCuisine = this.handleClickCuisine.bind(this);
    this.handleChangeProductTitle = this.handleChangeProductTitle.bind(this);
    this.handleChangeProductDescription = this.handleChangeProductDescription.bind(this);
  }

  componentWillMount() {
    this.props.savePreferences(preferences)
  }

  updateNameState(e) {
    this.setState({ text: e.target.value });
  }

  submitName() {
    this.props.updateMyProp(this.state.text);
  }

  selectRole(e) {
    this.setState({ role: e.target.value });
    this.nextStep();
  }

  nextStep() {
    const { step } = this.state;
    console.log('nextStep clicked');
    if (step === 8 || (this.state.role.investor && step === 5)) {
      this.props.savePreferences(this.state);
      // call firbase with this.state
      // re-route
      // return
    }
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

  handleClickRole(e) {
    const { role } = this.state;
    const newState = {
      ...role,
      [e.target.name]: !this.state.role[e.target.name],
    };

    this.setState({
      role: newState,
    });
  }

  handleChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  handleClickRound(e) {
    const { round } = this.state;
    const newState = {
      ...round,
      [e.target.name]: !this.state.round[e.target.name],
    };

    this.setState({
      round: newState,
    });
  }

  handleClickRange(e) {
    const { range } = this.state;
    const newState = {
      ...range,
      [e.target.name]: !this.state.range[e.target.name],
    };

    this.setState({
      range: newState,
    });
  }

  handleClickIndustry(e) {
    const { range } = this.state;
    const newState = {
      ...range,
      [e.target.name]: !this.state.range[e.target.name],
    };

    this.setState({
      range: newState,
    });
  }

  handleClickAvailability(e) {
    const update = e.target.name.split(' ');

    const { schedule } = this.state;
    const newState = {
      ...schedule,
      [update[0]]: {
        ...this.state.schedule[update[0]],
        [update[1]]: !this.state.schedule[update[0]][update[1]],
      },
    };
    this.setState({
      schedule: newState,
    });
  }

  handleClickCuisine(e) {
    const { cuisine } = this.state;
    const newState = {
      ...cuisine,
      [e.target.name]: !this.state.cuisine[e.target.name],
    };

    this.setState({
      cuisine: newState,
    });
  }

  handleChangeProductTitle(e) {
    this.setState({
      product: { ...this.state.product, title: e.target.value },
    });
  }

  handleChangeProductDescription(e) {
    this.setState({
      product: { ...this.state.product, description: e.target.value },
    });
  }

  render() {
    const { role, step, location, industry, round, range, cuisine, schedule, product } = this.state;
    let display = '';
    switch (step) {
      case 1 :
        display = (<SignUpRole clickHandler={this.handleClickRole} options={role} />);
        break;
      case 2 :
        display = (<SignUpLocation changeHandler={this.handleChangeLocation} label={location} placeholderText={'Enter your city'} value={this.state.location} />);
        break;
      case 3 :
        display = (<SignUpRound clickHandler={this.handleClickRound} options={round} />);
        break;
      case 4 :
        display = (<SignUpRange clickHandler={this.handleClickRange} options={range} />);
        break;
      case 5 :
        display = (<SignUpIndustry clickHandler={this.handleClickIndustry} options={industry} />);
        break;
      case 6 :
        display = (<SignUpAvailability clickHandler={this.handleClickAvailability} options={schedule} />);
        break;
      case 7 :
        display = (<SignUpCuisine clickHandler={this.handleClickCuisine} options={cuisine} />);
        break;
      case 8 :
        display = (<SignUpProduct
          changeTitleHandler={this.handleChangeProductTitle}
          changeDescriptionHandler={this.handleChangeProductDescription}
          titlePlaceholderText={'Enter your product name'}
          descriptionPlaceholderText={'Enter your product description'}
          titleValue={product.title}
          descriptionValue={product.description}
        />);
        break;
    }
    return (
      <div>
        <Grid>
          <Progress percent={step / 6 * 20} color="blue" progress active>Progress</Progress>
        </Grid>
        <Grid verticalAlign="middle" centered>
          <Grid.Row>
            <Grid.Column floated="left" width={2}>
              <Button animated color="blue" onClick={this.prevStep}>
                <Button.Content visible>Prev</Button.Content>
                <Button.Content hidden>
                  <Icon name="left arrow" />
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column width={8}>{display}</Grid.Column>
            <Grid.Column floated="right" width={2}>
              <Button animated color="blue" onClick={this.nextStep}>
                <Button.Content visible>Next</Button.Content>
                <Button.Content hidden>
                  <Icon name="right arrow" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

// export default connect(({ demoReducer }) => {
//   return ({myProp: demoReducer.myProp});
// }, {submitInfotoFirebase})(Signup);


const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { getPreferences, savePreferences })(Signup);
