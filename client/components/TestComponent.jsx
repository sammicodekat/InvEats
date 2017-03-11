import React from 'react';
import { connect } from 'react-redux';
import { updateMyProp } from '../store/actions/demoAction';
import Button from './Button.jsx';
import ButtonsGroup from './Buttonsgroup.jsx';



export class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };

    this.submitName = this.submitName.bind(this);
    this.updateNameState = this.updateNameState.bind(this);
  }

  updateNameState(e) {
    this.setState({
      text: e.target.value,
    });
  }

  submitName() {
    this.props.updateMyProp(this.state.text);
  }


  render() {
    const { updateMyProp } = this.props;
    return (
      <div>
        this is a test component {this.props.myProp}
        <button onClick={this.submitName}>Submit</button>
        <Button clickHandler={updateMyProp} name='Click Me!' />
        <ButtonsGroup options={[{name: 'yo', checked: false}, {name: 'ya', checked: false},{name: 'yi', checked: false}]} />
      </div>
    );
  }
}

export default connect(
  ({ demoReducer }) => ({
      myProp: demoReducer.myProp,
    }),
  {
    updateMyProp,
  },
)(Test);
