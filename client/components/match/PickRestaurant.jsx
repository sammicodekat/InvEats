import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListings, getListingDetailForSubset } from '../../store/actions/openTable/openTableActions';
import MatchLocation from './MatchLocation';

export class PickRestaurant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: 'HRD',
      index: 0,
      loaded: false,
    };

    this.pickADay = this.pickRestaurant.bind(this);
    this.nextResults = this.nextResults.bind(this);
    this.previousResults = this.previousResults.bind(this);

    this.props.getListings('2017-03-15T20:00', this.props.location || 'San Francisco');
  }

  pickRestaurant(e) {
    //handle selection
  }

  nextResults() {
    if ((this.state.index - 5) < this.props.listings.length) {
      this.setState({
        index: this.state.index + 5,
      });
      this.props.getListingDetailForSubset(this.state.index, this.state.index + 5);
    }
  }

  previousResults() {
    if ((this.state.index) > 0) {
      this.setState({
        index: this.state.index - 5,
      });
      this.props.getListingDetailForSubset(this.state.index, this.state.index + 5);
    }
  }

  render() {

    const subset = this.props.listings.slice(this.state.index, this.state.index + 5);
    console.log("SUBSIET", subset);
    // Map over restaurant data
    let display;
    if(this.props.loading) {
      display = (<div>Loading...</div>);
    } else {
      display = (<MatchLocation location={this.props.location} data={subset} />);
    }

    return (
      <div>
        {display}
        <button onClick={this.nextResults}>Next 5</button>
        <button onClick={this.previousResults}>Previous 5</button>
      </div>
    );
  }
}

export default connect(
  ({ openTable, auth }) => {
    return {
      listings: openTable.listings,
      loading: openTable.loading,
      selectedListing: openTable.selectedListing,
      location: auth.preferences.location,
    };
  },
  {
    getListings,
    getListingDetailForSubset,
  },
)(PickRestaurant);
