import firebase from "firebase/app";
import "firebase/messaging";
import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyASExAJ5K1qAyALYBxQpgmjnvILkzNgZMQ",
  authDomain: "pushnotification-1f008.firebaseapp.com",
  databaseURL: "https://pushnotification-1f008.firebaseio.com",
  projectId: "pushnotification-1f008",
  storageBucket: "pushnotification-1f008.appspot.com",
  messagingSenderId: "960459527964",
  appId: "1:960459527964:web:9fc032d895f87a54f2ccd9",
  measurementId: "G-V8V7RB9GSN",
};

export const activateUser = (accountId, code, password) => {
  const user = {
    accountId: accountId,
    code: code,
    password: password,
  };
  return user;
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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      debugger;
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const askForPermissioToReceiveNotifications = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("user token:", token);

    return token;
  } catch (error) {
    console.error(error);
  }
  navigator.serviceWorker.addEventListener("message", (message) =>
    console.log(message)
  );
};

export const messaging = firebase.messaging();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ promt: "select_account" });

export default firebase;
