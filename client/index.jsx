import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import firebase from 'firebase';
import configureStore from './store/configureStore';
import config from '../firebase_config';
import routes from './routes.jsx';

const store = configureStore({});

// import LoginForm from './components/LoginForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
