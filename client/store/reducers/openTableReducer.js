import {
  GET_LISTINGS,
  GET_LISTING,
  SET_LISTINGS,
  GET_LISTINGS_DETAILS,
} from '../actions/demo/demoActionTypes';
import _ from 'lodash';

const initialState = {
  listings: [],
  selectedListing: null,
  loading: false,
};

function openTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return Object.assign({}, state, {
        listings: [],
        loading: true,
      });
    case SET_LISTINGS:
      return Object.assign({}, state, {
        listings: action.payload,
        loading: false,
      });
    case GET_LISTING:
      return Object.assign({}, state, {
        selectedListing: _.find(state.listings, { rid: action.id }),
      });
    case GET_LISTINGS_DETAILS:
      return Object.assign({}, state, {
        loading: true,
      })
    default:
      return state;
  }
}

export default openTableReducer;
