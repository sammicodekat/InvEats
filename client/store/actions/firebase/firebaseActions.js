import firebase from 'firebase';
import {
  SAVE_PREFERENCES_SUCCESS,
  GET_PREFERENCES_SUCCESS,
  GET_PREFERENCES,
} from './firebaseActionTypes';

export const savePreferences = (preferences) => (
  (dispatch) => {
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}/preferences/`)
    .set(preferences)
    .then(() =>
      dispatch({ type: SAVE_PREFERENCES_SUCCESS, preferences })
    );
  }
);

export const getPreferences = () => (
  (dispatch) => {
    dispatch({ type: GET_PREFERENCES });
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}/preferences`)
    .on('value', (snapshot) => {
      dispatch({
        type: GET_PREFERENCES_SUCCESS,
        preferences: snapshot.val(),
      });
    });
  }
);
