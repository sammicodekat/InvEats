import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Icon, Progress } from 'semantic-ui-react';
import { googleLogin } from '../../store/actions/auth/authActions';
import { savePreferences, getPreferences } from '../../store/actions/firebase/firebaseActions';
import { getListings } from '../../store/actions/openTable/openTableActions'
import SignUpRole from './SignUpRole';
import SignUpLocation from './SignUpLocation';
import SignUpRound from './SignUpRound';
import SignUpRange from './SignUpRange';
import SignUpIndustry from './SignUpIndustry';
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
    this.handleClickCuisine = this.handleClickCuisine.bind(this);
    this.handleChangeProductTitle = this.handleChangeProductTitle.bind(this);
    this.handleChangeProductDescription = this.handleChangeProductDescription.bind(this);
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
    if (step === 8 || (this.state.role.investor && step === 5)) {
      this.props.savePreferences(this.state)
      .then(() => this.props.router.push('/home'));
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
    console.log('handleChangeLocation clicked', e.target.value);
    this.setState({
      location: e.target.value,
    });
  }

  handleClickRound(e) {
    console.log('handleClickRound clicked', e.target.name);
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
    console.log('handleClickRange clicked', e.target.name);
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
    console.log('handleClickIndustry clicked', e.target.name);
    const { range } = this.state;
    const newState = {
      ...range,
      [e.target.name]: !this.state.range[e.target.name],
    };

    this.setState({
      range: newState,
    });
  }

  handleClickAvailability(date) {
    // const update = e.target.name.split(' ');

    // const { schedule } = this.state;
    // const newState = {
    //   ...schedule,
    //   [update[0]]: {
    //     ...this.state.schedule[update[0]],
    //     [update[1]]: !this.state.schedule[update[0]][update[1]],
    //   },
    // };
    // this.setState({
    //   schedule: newState,
    // });

    this.props.getListings(date, this.props.auth.preferences.location);
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
    console.log('handleChange clicked', this.state.product);
    this.setState({
      product: { ...this.state.product, title: e.target.value },
    });
  }

  handleChangeProductDescription(e) {
    console.log('handleChange clicked', this.state.product);
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

export default connect(mapStateToProps, {
  getPreferences,
  savePreferences,
  getListings,
})(Signup);
