import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import config from '../firebase_config.js';
import Test from './components/TestComponent.jsx';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
import { Router, browserHistory } from 'react-router'
import routes from './routes';
const store = configureStore();

class App extends React.Component {
  constructor(){
  super();
  firebase.initializeApp(config);

}
  render() {
    return (
    <Provider store={ store }>
      <Router history={ browserHistory } routes={ routes } />
    </Provider>,
    );
  }
}

ReactDOM.render(<App/>,
, document.getElementById('app'));
