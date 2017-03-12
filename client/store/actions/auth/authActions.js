import firebase from 'firebase';
import {
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_ERROR,
  LOGIN_USER_START,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_SUCCESS,
} from './authActionTypes';


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

export const loginUserStart = (user) => ({
  type: LOGIN_USER_START,
  payload: user,
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_USER_SUCCESS,
  payload: user,
});

export const signupUserSuccess = (user) => ({
  type: SIGNUP_USER_SUCCESS,
  payload: user,
});


export const loginUserError = (error) => ({
  type: LOGIN_USER_ERROR,
  payload: error
});

export const loginUser = (user) => (
  (dispatch) => {
    dispatch(loginUserStart(user));
    const { email, password } = user;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((currentUser) =>
        firebase.database().ref(`/users/${currentUser.uid}`)
        .on('value', (snapshot) =>
          dispatch(loginUserSuccess({ ...user, ...snapshot.val() }))
        ))
      .catch((err) =>
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          dispatch(signupUserSuccess(user));
        })
      )
      .catch((error) => dispatch(loginUserError(error.message)));
  });
