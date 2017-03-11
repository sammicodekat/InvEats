import firebase from 'firebase';
import { GOOGLE_LOGIN, GOOGLE_LOGIN_SUCCESS, GOOGLE_LOGIN_ERROR } from './actionTypes';

export const googleLogin = () => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    const token = result.credential.accessToken;
    const user = result.user;
    dispatch({ type: GOOGLE_LOGIN_SUCCESS, user, token });
  }).catch((error) => {
    const errorMessage = error.message;
    dispatch({ type: GOOGLE_LOGIN_ERROR, error: errorMessage });
  });
};
