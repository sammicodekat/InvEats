import {
  GOOGLE_LOGIN,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
} from './authActionTypes';
import firebase from 'firebase';

export const googleLogin = () => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const token = result.credential.idToken;
    const user = result.user;
    window.localStorage.setItem('token', token);
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, user, token });
  }).catch((error) => {
    const errorMessage = error.message;
    dispatch({ type: GOOGLE_LOGIN_ERROR, error: errorMessage });
  });
};

export const setUser = (user) => {
  return {
    type: GOOGLE_LOGIN_SUCCESS,
    user,
  }
};
