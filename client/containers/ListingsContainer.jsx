import React from 'react';
import { connect } from 'react-redux';
import {
  getListings,
  getListing,
} from '../store/actions/openTable/openTableActions';

class ListingsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.getListings = this.getListings.bind(this);
    this.getListing = this.getListing.bind(this);

    this.getListings();
  }

  getListings() {
    this.props.getListings();
  }

  getListing(id) {
    this.props.getListing(id);
  }

  render() {
    return (
      <div>
        This will contain all the opentable crap
      </div>
    );
  }
}

export default connect(
  ({ openTable }) => {
    return {
      listings: openTable.listings,
      selectedListing: openTable.selectedListing,
    };
  },
  {
    getListings,
    getListing,
  },
)(ListingsContainer);
