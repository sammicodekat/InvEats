import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import config from '../firebase_config.js';
import Test from './components/TestComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount () {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        Hello world what up people
        <Test awesome={"chris"} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
