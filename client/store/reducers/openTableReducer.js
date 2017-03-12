import {
  GET_LISTINGS,
  GET_LISTING,
  SET_LISTINGS,
  GET_LISTINGS_DETAILS,
} from '../actions/openTable/openTableActionTypes';
import _ from 'lodash';

const initialState = {
  listings: [],
  selectedListing: null,
  loading: true,
};

function openTableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LISTINGS:
      return {...state, listings: [], loading: true};
    case SET_LISTINGS:
      return {...state, listings: action.payload, loading: false};
    case GET_LISTING:
      return Object.assign({}, state, {
        selectedListing: _.find(state.listings, { rid: action.id }),
      });
    case GET_LISTINGS_DETAILS:
      return Object.assign({}, state, {
        loading: true,
      });
    default:
      return state;
  }
}

export default openTableReducer;
