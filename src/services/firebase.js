import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBods7n1_IvoH833YNiu2zR4QzuGGWPZwk",

    authDomain: "doit-now-1ad52.firebaseapp.com",
  
    projectId: "doit-now-1ad52",
  
    storageBucket: "doit-now-1ad52.appspot.com",
  
    messagingSenderId: "850740949395",
  
    appId: "1:850740949395:web:a11d753d4e42a75a54f866",
  
    measurementId: "G-Y2KN78HN1H"
  
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
