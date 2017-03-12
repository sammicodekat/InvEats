import axios from 'axios';
import {
  GET_LISTINGS,
  GET_LISTING,
  SET_LISTINGS,
} from './openTableActionTypes';

export function getListings(date, location) {
  console.log("DATE", date);
  console.log("LOCATION", location);
  return (dispatch) => {
    dispatch({ type: GET_LISTINGS });
    axios({
      url: 'https://p0d8h5amgl.execute-api.us-east-1.amazonaws.com/dev/listings',
      method: 'GET',
      params: { date, location },
    })
      .then((data) => {
        console.log('Got OpenTable Listings:', data);
        dispatch({ type: SET_LISTINGS, payload: data });
      })
      .catch((err) => {
        console.log('Get request errored out', err);
      });
  };
}

export function getListing(id) {
  return { type: GET_LISTING, id };
}
