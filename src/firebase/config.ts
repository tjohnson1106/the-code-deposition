import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD58LkWFow1kS0w6gC04oFEitI10rO5M-A",
  authDomain: "code-deposition.firebaseapp.com",
  databaseURL: "https://code-deposition.firebaseio.com",
  projectId: "code-deposition",
  storageBucket: "code-deposition.appspot.com",
  messagingSenderId: "629750785490",
  appId: "1:629750785490:web:1e3a9f0e3de7079078140b"
  // measurementId: "G-32DB9PXRXJ"
};

class Firebase {
  // The Firebase Auth service interface.
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    // database
    this.db = firebase.firestore();
  }

  // sign up
  async signup(email: string, password: string) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }
  //   login
  async login(email: string, password: string) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }
}

export default new Firebase();
