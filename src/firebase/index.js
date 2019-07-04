import firebase, { app } from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA8sbS3KZqpK-7q9XAZEtU8VR512hwbidE",
    authDomain: "devcamp-65579.firebaseapp.com",
    databaseURL: "https://devcamp-65579.firebaseio.com",
    projectId: "devcamp-65579",
    storageBucket: "devcamp-65579.appspot.com",
    messagingSenderId: "21490227641",
    appId: "1:21490227641:web:1612940cddb0a8b6"
  };
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   const storage = firebase.storage();

class Firebase {
    constructor(){
        firebase.initializeApp(firebaseConfig);
        const storage = firebase.storage();
        this.auth = firebase.auth();
    }
    
}



  export{
      storage,firebase,Firebase as default
  }