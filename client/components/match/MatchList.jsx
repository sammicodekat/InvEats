import React from 'react';
import MatchItem from './MatchItem';

class MatchList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const listStyle = { listStyleType: 'none' };
    const CardComponents = this.props.restData ? this.props.restData.map((item) => {
      return (
        <MatchItem key={`${item.rawData.latitude}${item.rawData.longitude}`} rawData={item.rawData} listing={item} />
      )
    }) : null;

    return (
      <section className="matches-list-container">
        <ul style={listStyle}>
          {CardComponents}
        </ul>
      </section>
    )
  }
}
export default MatchList;
