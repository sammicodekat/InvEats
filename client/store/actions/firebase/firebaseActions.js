import firebase from 'firebase';
import {
  SAVE_PREFERENCES_SUCCESS,
  GET_PREFERENCES_SUCCESS,
  GET_PREFERENCES,
} from './firebaseActionTypes';

export const savePreferences = preferences => (
  (dispatch) => {
    const role = preferences.role.Investor ? 'investor' : 'projectOwner';
    const { currentUser } = firebase.auth();
    return Promise.all([firebase.database()
    .ref(`/users/${currentUser.uid}`)
    .set(preferences), firebase.database()
    .ref(`/groups/${role}/${currentUser.uid}`)
    .set(preferences)])
    .then(() =>
      dispatch({ type: SAVE_PREFERENCES_SUCCESS, preferences }),
    );
  }
);

export const getPreferences = () => (
  (dispatch) => {
    dispatch({ type: GET_PREFERENCES });
    const { currentUser } = firebase.auth();
    return firebase.database()
    .ref(`/users/${currentUser.uid}`)
    .on('value', (snapshot) => {
      dispatch({
        type: GET_PREFERENCES_SUCCESS,
        preferences: snapshot.val(),
      });
    });
  }
);
