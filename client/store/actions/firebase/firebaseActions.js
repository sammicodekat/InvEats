import firebase from 'firebase';
import { flatMap, forEach } from 'lodash';
import {
  SAVE_PREFERENCES_SUCCESS,
  GET_PREFERENCES_SUCCESS,
  GET_PREFERENCES,
  GET_PROJECT_OWNERS,
  GET_PROJECT_OWNERS_SUCCESS,
} from './firebaseActionTypes';


export const savePreferences = (preferences) => (
  (dispatch) => {
    const role = preferences.role.Investor ? 'investor' : 'projectOwner';
    const { currentUser } = firebase.auth();
    const keysToStore = {};
    for (const prop in preferences) {
      for (const key in preferences[prop]) {
        if (preferences[prop][key]) {
          keysToStore[key] = true;
        }
      }
    }
    const dbSave = Object.keys(keysToStore).map((key) => {
      return firebase.database()
      .ref(`/groups/${role}/${key}`)
      .set({ [currentUser.uid]: true })
    })

    dbSave.push(firebase.database()
    .ref(`/users/${currentUser.uid}`)
    .set(keysToStore));

    return Promise.all(dbSave).then((result) =>
      dispatch({ type: SAVE_PREFERENCES_SUCCESS, keysToStore }),
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
      console.log(snapshot.val());
      dispatch({
        type: GET_PREFERENCES_SUCCESS,
        preferences: snapshot.val(),
      });
    });
  }
);


export const getProjectOwners = (user) => (
  (dispatch) => {
    dispatch({ type: GET_PROJECT_OWNERS });
    return firebase.database()
    .ref(`/groups/projectOwner`)
    .on('value', (snapshot) => {
      console.log('getProjectOwners',snapshot.val())
      dispatch({
        type: GET_PROJECT_OWNERS_SUCCESS,
        projectOwners: snapshot.val(),
        preferences: user
      });
    });
  }
);
