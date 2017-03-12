import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
} from '../actions/auth/authActionTypes';

import {
  SAVE_PREFERENCES_SUCCESS,
  GET_PREFERENCES_SUCCESS,
  GET_PREFERENCES,
} from '../actions/firebase/firebaseActionTypes';

const INITIAL_STATE = {
  isAuth: false,
  username: '',
  email: '',
  photoURL: '',
  preferences: {
    role: {
      Investor: false,
      'Project Owner': false,
    },
    location: '',
    industry: {
      Healthcare: false,
      FinTech: false,
      Consumer: false,
      'Digital Media': false,
      Ecommerce: false,
      SaaS: false,
    },
    round: {
      Idea: false,
      Seed: false,
      'Series A': false,
      'Series B': false,
      After: false,
    },
    range: {
      '<$100k': false,
      ' $100k-$300k': false,
      '$300k-$500k': false,
      '$500k-$1M': false,
      '>$1M': false,
    },
    cuisine: {
      Mexican: false,
      Thai: false,
      American: false,
      Italian: false,
      Japanese: false,
    },
    schedule: {
      Monday: {
        Lunch: false,
        Dinner: false,
      },
      Tuesday: {
        Lunch: false,
        Dinner: false,
      },
      Wednesday: {
        Lunch: false,
        Dinner: false,
      },
      Thursday: {
        Lunch: false,
        Dinner: false,
      },
      Friday: {
        Lunch: false,
        Dinner: false,
      },
    },
    product: {
      Title: '',
      Description: '',
    },
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN_SUCCESS:
      return Object.assign({}, state,
        { username: action.user.displayName },
        { email: action.user.email },
        { photoURL: action.user.photoURL },
        { isAuth: true },
      );
    case GOOGLE_LOGIN_ERROR:
      return Object.assign({}, state, { error: action.error });
    case GET_PREFERENCES_SUCCESS:
    case SAVE_PREFERENCES_SUCCESS:
      return Object.assign({}, state, { preferences: action.preferences });
    default:
      return state;
  }
};
