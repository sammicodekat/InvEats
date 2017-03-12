import firebase from 'firebase';
import {
  SAVE_PREFERENCES_SUCCESS,
  GET_PREFERENCES_SUCCESS,
  GET_PREFERENCES,
} from './firebaseActionTypes';

export const savePreferences = preferences => (
  (dispatch) => {
    const role = preferences.role.Investor ? 'Investor' : 'Project Owner';
    const { currentUser } = firebase.auth();
    console.log('currentUser',currentUser)
    return firebase.database()
    .ref(`/users/${currentUser.uid}/${role}`)
    .set(preferences)
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
