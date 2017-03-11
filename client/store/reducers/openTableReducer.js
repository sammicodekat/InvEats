import {
  GET_LISTINGS,
  GET_LISTING,
  SET_LISTINGS,
} from '../actions/demo/demoActionTypes';
import _ from 'lodash';

const initialState = {
  listings: [],
  selectedListing: null,
};

function openTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return Object.assign({}, state, {
        listings: [],
      });
    case SET_LISTINGS:
      return Object.assign({}, state, {
        listings: action.payload,
      });
    case GET_LISTING:
      return Object.assign({}, state, {
        selectedListing: _.find(state.listings, { rid: action.id }),
      });
    default:
      return state;
  }
}

export default openTableReducer;
