import {
  GET_MATCHES_SUCCESS
} from '../actions/firebase/firebaseActionTypes';

const INITIAL_STATE = {
  matches: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MATCHES_SUCCESS:
      return { ...state, matches: action.matches, loading: false, error: '' };
    default:
      return state;
  }
};
