import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// const firebaseConfig = {
//     apiKey: "AIzaSyBods7n1_IvoH833YNiu2zR4QzuGGWPZwk",

//     authDomain: "doit-now-1ad52.firebaseapp.com",
  
//     projectId: "doit-now-1ad52",
  
//     storageBucket: "doit-now-1ad52.appspot.com",
  
//     messagingSenderId: "850740949395",
  
//     appId: "1:850740949395:web:a11d753d4e42a75a54f866",
  
//     measurementId: "G-Y2KN78HN1H"
  
// };
const firebaseConfig = {

    apiKey: "AIzaSyCIUST1FM2J5wM4luaFj68WWf0uO6ItXgM",
  
    authDomain: "to-do-list-190d6.firebaseapp.com",
  
    projectId: "to-do-list-190d6",
  
    storageBucket: "to-do-list-190d6.appspot.com",
  
    messagingSenderId: "1036190845446",
  
    appId: "1:1036190845446:web:2313b488fb56764296d187",
  
    measurementId: "G-MZSRTZKBD5"
  
  }

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
