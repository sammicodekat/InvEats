// class Component of LoginForm
import React, { Component } from 'react';
import firebase from 'firebase';
import axios from 'axios';


class LoginForm extends Component {

  componentDidMount() {

  }

  loginGoogle(e) {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('USER', user, token)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      console.log('error', error)
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  render() {
    return (
      <div>
        <div>
          <h1> Login </h1>
          <button onClick={(e) => this.loginGoogle(e)}>Login with Google</button>
        </div>
      </div>
    );
  }
}

export default LoginForm;

// export const googleLogin = () => (dispatch) => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(function(result) {
//     var token = result.credential.accessToken;
//     var user = result.user;
//     console.log('USER', user, token)
//     // ...
//   }).catch(function(error) {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     var email = error.email;
//     var credential = error.credential;
//   });
// }

// <form onSubmit={this.loginGoogle}>
//   <div className="form-group">
//     <label>Email</label>
//     <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
//   </div>
//   <div className="form-group">
//     <label>Password</label>
//     <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
//   </div>
//   <button type="submit" className="btn btn-primary">Login</button>
// </form>
