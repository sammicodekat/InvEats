import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Icon, Progress } from 'semantic-ui-react';
import { googleLogin } from '../../store/actions/auth/authActions';
import { savePreferences, getPreferences } from '../../store/actions/firebase/firebaseActions';
import { getListings } from '../../store/actions/openTable/openTableActions';
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
      step: 1,
      role: { Investor: false, 'Project Owner': false },
      location: '',
      industry: { Healthcare: false, FinTech: false, Consumer: false, 'Digital Media': false, Ecommerce: false, SaaS: false },
      round: { Idea: false, Seed: false, 'Series A': false, 'Series B': false, After: false },
      range: { '<100k': false, '100k-300k': false, '300k-500k': false, '500k-1M': false, '>1M': false },
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
    this.handleChangeProductTitle = this.handleChangeProductTitle.bind(this);
    this.handleChangeProductDescription = this.handleChangeProductDescription.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateNameState(e) {
    this.setState({ text: e.target.value });
  }

  submitName() {
    this.props.updateMyProp(this.state.text);
  }

  submit() {
    this.props.savePreferences(this.state)
    .then(() => this.props.router.push('/home'));
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

  handleClickRole(e) {
    const { role } = this.state;
    const newState = {
      ...role,
      [e.target.name]: !this.state.role[e.target.name],
    };

    this.setState({
      role: newState,
    });
    this.nextStep();
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
    const { industry } = this.state;
    const newState = {
      ...industry,
      [e.target.name]: !this.state.range[e.target.name],
    };

    this.setState({
      industry: newState,
    });
  }

  handleChangeProductTitle(e) {
    this.setState({
      product: { ...this.state.product, Title: e.target.value },
    });
  }

  handleChangeProductDescription(e) {
    this.setState({
      product: { ...this.state.product, Description: e.target.value },
    });
  }

  render() {
    const { role, step, location, industry, round, range, product } = this.state;
    let display = '';
    let rightButton = (
      <Button animated color="blue" onClick={this.nextStep} className="fluid ui button big">
        <Button.Content visible>Next</Button.Content>
        <Button.Content hidden>
          <Icon name="right arrow" />
        </Button.Content>
      </Button>
    );
    switch (step) {
      case 1 :
        display = (<SignUpRole className="signup" clickHandler={this.handleClickRole} options={role} />);
        break;
      case 2 :
        display = (<SignUpLocation className="signup" changeHandler={this.handleChangeLocation} label={location} placeholderText={'Enter your city'} value={this.state.location} />);
        break;
      case 3 :
        display = (<SignUpRound className="signup" clickHandler={this.handleClickRound} options={round} />);
        break;
      case 4 :
        display = (<SignUpRange className="signup" clickHandler={this.handleClickRange} options={range} />);
        break;
      case 5 :
        display = (<SignUpIndustry className="signup" clickHandler={this.handleClickIndustry} options={industry} />);
        if (role.Investor === true) {
          rightButton = (
            <Button animated color="green" onClick={this.submit} className="fluid ui button big">
              <Button.Content visible>Submit</Button.Content>
              <Button.Content hidden>
                <Icon name="check" />
              </Button.Content>
            </Button>
          );
        }
        break;
      case 6 :
        display = (
          <SignUpProduct
            changeTitleHandler={this.handleChangeProductTitle}
            changeDescriptionHandler={this.handleChangeProductDescription}
            titlePlaceholderText={'Enter your product name'}
            descriptionPlaceholderText={'Enter your product description'}
            titleValue={product.Title}
            descriptionValue={product.Description}
          />
        );
        rightButton = (
          <Button animated color="green" onClick={this.submit} className="fluid ui button big">
            <Button.Content visible>Submit</Button.Content>
            <Button.Content hidden>
              <Icon name="check" />
            </Button.Content>
          </Button>
        );
        break;
      default: display = (
        <div />
      );
    }
    return (
      <div style={{ width: '70%', margin: '0 auto' }}>
        <Grid>
          <Progress className="fluid ui progress" width={step / 7} percent={step / 7} color="blue" progress active>Progress</Progress>
        </Grid>
        <Grid verticalAlign="middle" centered>
          <Grid.Row>
            <Grid.Column width={16}>{display}</Grid.Column>
          </Grid.Row>
          {this.state.step !== 1 &&
          <Grid.Row>
            <Grid.Column floated="left" style={{ width: '50%' }}>
              <Button animated color="blue" onClick={this.prevStep} className="fluid ui button big">
                <Button.Content visible>Prev</Button.Content>
                <Button.Content hidden>
                  <Icon name="left arrow" />
                </Button.Content>
              </Button>
            </Grid.Column>
            <Grid.Column floated="right" style={{ width: '50%' }}>
              {rightButton}
            </Grid.Column>
          </Grid.Row>}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, {
  getPreferences,
  savePreferences,
  getListings,
})(Signup);
