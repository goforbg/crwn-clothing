import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
   apiKey: 'AIzaSyAYJHlHeIBjV7HyH2Wsp83qkgtCGZRohs0',
   authDomain: 'crwn-clothing-db-3d15d.firebaseapp.com',
   databaseURL: 'https://crwn-clothing-db-3d15d.firebaseio.com',
   projectId: 'crwn-clothing-db-3d15d',
   storageBucket: 'crwn-clothing-db-3d15d.appspot.com',
   messagingSenderId: '549261741752',
   appId: '1:549261741752:web:0bc65b3b422776bbbdee4d',
   measurementId: 'G-CY3BQH483X',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);
   const snapShot = await userRef.get();

   if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData,
         });
      } catch (error) {
         console.log('error creating user', error);
      }
   }

   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
