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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    console.log(snapShot)

    if (!snapShot.exists) {

        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
