import firebase from 'firebase/app'

import 'firebase/firestore';

import 'firebase/auth';

const config = {

    apiKey: "AIzaSyBMdkrmDoXQK-yiOKOlIB8HZep0VNUJuq8",
    authDomain: "crown-db-6b955.firebaseapp.com",
    projectId: "crown-db-6b955",
    storageBucket: "crown-db-6b955.appspot.com",
    messagingSenderId: "805993759449",
    appId: "1:805993759449:web:c754b56a96b478d97774c8",
    measurementId: "G-8K2NM4FGP6"

}

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
