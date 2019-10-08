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
  db: firebase.firestore.Firestore;
  auth: firebase.auth.Auth;
  // signin(email: string, password: string) {
  //   throw new Error("Method not implemented.");
  // }
  // // The Firebase Auth service interface.
  // auth: firebase.auth.Auth;
  // db: firebase.firestore.Firestore;
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
    // database
    this.db = firebase.firestore();
  }

  // sign up
  async signin(email: string, password: string) {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }

  // login

  async login(email: string, password: string) {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
      });
    return user;
  }
  // logout

  async logout() {
    const logout = await firebase
      .auth()
      .signOut()
      .catch((err) => {
        console.log(err);
      });
    return logout;
  }

  async getUserState() {
    return new Promise((resolve) => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  async createPost(post: {
    cover: { name: string };
    title: string;
    content: any;
  }) {
    const storageRef = firebase.storage().ref;
    const storageChild = storageRef.child(post.cover.name);
    const postCover = await storageChild.put(post.cover);
    // url
    const downloadUrl = await storageChild.getDownloadURL();
    // actual path
    const fileRef = postCover.ref.location.path;

    let newPost = {
      title: post.title,
      content: post.content,
      cover: downloadUrl,
      fileRef
    };

    const firebasePost = await firebase
      .firestore()
      .collection("posts")
      .add(newPost)
      .catch((err) => {
        console.log(err);
      });
    return firebasePost;
  }
}

export default new Firebase();
