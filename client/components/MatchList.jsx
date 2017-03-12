import React from 'react'
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
          {this.props.restData.map(rest =>
            <MatchItem key={`${rest.latitude}${rest.longitude}`} {...rest} />
          )}
        </ul>
      </section>
    )
  }
}
export default MatchList;
