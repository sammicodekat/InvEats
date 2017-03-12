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
    console.log("prefs",preferences)
    const role = preferences.role.Investor ? 'investor' : 'projectOwner';
    console.log(preferences)
    const { currentUser } = firebase.auth();
    const preferences = {};
    for (const prop in preferences) {
      for (const key in preferences[prop]) {
        if (!preferences[prop][key]) {
          delete preferences[prop][key];
        }
      }
    }
    console.log("prefs",preferences)
    // const dbSave = Object.keys(preferences).map((key) => {
    //   return firebase.database()
    //   .ref(`/groups/${role}/${key}`)
    //   .set({ [currentUser.uid]: true })
    // })

    const dbSave = Object.keys(preferences).map((key) => {
      return firebase.database()
      .ref(`/users/${key}/${currentUser.uid}`)
      .set(preferences[key])
    })

    return Promise.all(dbSave).then((result) =>
      dispatch({ type: SAVE_PREFERENCES_SUCCESS, preferences: preferences }),
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
    console.log('user', user)

    const databaseRef = firebase.database().ref().child('users/industry');
     const querybaseRef = querybase.ref(databaseRef, ['Ecommerce']);
     const queriedDbRef = querybaseRef
       .where({
         Ecommerce: true,
       });



    // return firebase.database()
    // .ref(`/users`)
    // // .startAt('true')
    // // .endAt('true')
    queriedDbRef.on('value', (snapshot) => {
      console.log('getProjectOwners',snapshot.val())
      dispatch({
        type: GET_PROJECT_OWNERS_SUCCESS,
        projectOwners: snapshot.val(),
        preferences: user
      });
    });
  }
);

// const databaseRef = firebase.database().ref().child('people');
//  const querybaseRef = querybase.ref(databaseRef, ['name', 'age', 'location']);
//
//  // Automatically handles composite keys
//  querybaseRef.push({
//    name: 'David',
//    age: 27,
//    location: 'SF'
//  });
//
// // Find records by multiple fields
// // returns a Firebase Database ref
// const queriedDbRef = querybaseRef
//   .where({
//     name: 'David',
//     age: 27
//   });
