import React from 'react';
import MatchItem from './MatchItem';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listStyle = { listStyleType: 'none' };
    return (
      <section className="matches-list-container">
        <ul style={listStyle}>
          {this.props.restData ? this.props.restData.map(({ rawData }) => <MatchItem key={`${rawData.latitude}${rawData.longitude}`} {...rawData} /> ) : null}
        </ul>
      </section>
    )
  }
}
export default MatchList;
