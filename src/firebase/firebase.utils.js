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

firebase.initializeApp(config);

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

export const addCollectionAndDocuments = async (
   collectionKey,
   objectsToAdd
) => {
   const collectionRef = firestore.collection(collectionKey);

   const snapShot = await collectionRef.get();

   if (snapShot.empty) {
      const batch = firestore.batch();

      objectsToAdd.forEach((obj) => {
         const newDocRef = collectionRef.doc();
         batch.set(newDocRef, obj);
      });

      return await batch.commit();
   }
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
   const transformedCollection = collectionsSnapshot.docs.map((doc) => {
      const { title, items } = doc.data();

      return {
         routeName: encodeURI(title.toLowerCase()),
         id: doc.id,
         title,
         items,
      };
   });

   return transformedCollection.reduce((accumulator, collection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
   }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
