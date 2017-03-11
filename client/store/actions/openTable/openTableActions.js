import {
  GET_LISTINGS,
  SET_LISTINGS,
} from './openTableActionTypes';
import axios from 'axios';

export function getListings() {
  return (dispatch) => {
    dispatch({ type: GET_LISTINGS });
    axios.get({
      url: 'https://platform.opentable.com/sync/listings',
      method: 'GET',
      headers: {
        Authorization: 'bearer e4337b2b-17a3-4178-94c6-eb63b6a54fdc',
      },
    })
      .then((data) => {
        console.log('Got OpenTable Listings:', data);
        dispatch({ type: SET_LISTINGS, data });
      })
      .catch((err) => {
        console.log('Get request errored out', err);
      });
  };
}

export function getListing() {
}

getListings();
