// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAMBjacmJTWZKn-He5aNhPyxd82DFEVYrw",
  authDomain: "netflix-clone-31d7d.firebaseapp.com",
  projectId: "netflix-clone-31d7d",
  storageBucket: "netflix-clone-31d7d.appspot.com",
  messagingSenderId: "25532535968",
  appId: "1:25532535968:web:dd5f2b33edd9a512c065c5",
  measurementId: "G-8K7WNWQGNG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const bd = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default bd;
