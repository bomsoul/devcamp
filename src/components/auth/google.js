import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import 'firebase/auth';
import firebase from '../../firebase';
const firebaseApp = firebase;

class App extends Component {
    constructor(props) {
        super(props);
    // this.state = {
    // user: '' ,
    // signOut: '',
    // signInWithGoogle: ''
    // }
      }
  render() {
    console.log(this.props.user)
    const {
      user,
      signOut,
      signInWithGoogle,

    } = this.props;

    return (
     
      <div >
        <header>
       

          {
             
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
    
          }
        </header>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);