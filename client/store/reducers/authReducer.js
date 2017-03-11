import { GOOGLE_LOGIN, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuth: false,
  username: '',
  email: '',
  photoURL: '',
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
    default:
      return state;
  }
};
