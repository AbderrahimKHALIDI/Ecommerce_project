import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config= {
    apiKey: "AIzaSyCdo_EVlSM7v9fjolr5TOEUHRBR0rbWQtE",
    authDomain: "crwn-db-df373.firebaseapp.com",
    projectId: "crwn-db-df373",
    storageBucket: "crwn-db-df373.appspot.com",
    messagingSenderId: "473636606868",
    appId: "1:473636606868:web:88d8dc496e86f7be85f581",
    measurementId: "G-TDNXH663KR"
};

firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle= ()=> auth.signInWithPopup(provider);
export default firebase;