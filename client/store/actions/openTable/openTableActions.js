import axios from 'axios';
import {
  GET_LISTINGS,
  GET_LISTING,
  SET_LISTINGS,
  GET_LISTINGS_DETAILS,
} from './openTableActionTypes';

const getListing = ({ href }) => {
  const rid = href.split('listings/')[1];
  return (
    axios({
      url: `https://h1ixfpoi24.execute-api.us-east-1.amazonaws.com/dev/listings/${rid}`,
      method: 'GET',
      params: { url: href },
    })
    .then(({data}) => data)
  );
}

export function getListings(date, location) {
  console.log("DATE", date);
  console.log("LOCATION", location);
  return (dispatch) => {
    dispatch({ type: GET_LISTINGS });
    axios({
      url: 'https://h1ixfpoi24.execute-api.us-east-1.amazonaws.com/dev/listings/',
      method: 'GET',
      params: { date, location },
    })
      .then(({data}) => {
        console.log('Got OpenTable Listings:', data);
        const promises = data.slice(0, 5).map(getListing);
        return Promise.all(promises)
          .then((results) => {
            const newResults = data.slice();
            for (let x = 0; x < 5; x++) {
              newResults[x].rawData = results[x];
            }
            return newResults;
          });
      })
      .then((newListings) => {
        dispatch({
          type: SET_LISTINGS,
          payload: newListings
        })
      })
      .catch((err) => {
        console.log('Get request errored out', err);
      });
  };
}

export function getListingDetailForSubset(startingIndex, endingIndex, oldListings) {
  console.log("KSDJFKDJS")
  const promises = oldListings.slice(startingIndex, endingIndex).map(getListing);
  return (dispatch) => {
    dispatch({ type: GET_LISTINGS_DETAILS });
    Promise.all(promises)
      .then((results) => {
        const newResults = oldListings.slice();
        for (let x = startingIndex; x < endingIndex; x++) {
          newResults[x].rawData = results[x];
        }
        dispatch({
          type: SET_LISTINGS,
          payload: newResults,
        });
      });
  }
}

export function bookListing(id) {
  return { type: GET_LISTING, id };
}
