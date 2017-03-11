import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/TestComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
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
