import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        this is a test component {this.props.awesome}
      </div>
    );
  }
}

export default Test;
