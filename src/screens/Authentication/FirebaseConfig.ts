import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"
import firebase from "firebase/compat";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAdvMHPLj6ycdK5lIUn-PF3yZH8IooTd6k",
    authDomain: "wizard-85dfa.firebaseapp.com",
    projectId: "wizard-85dfa",
    storageBucket: "wizard-85dfa.appspot.com",
    messagingSenderId: "215879728483",
    appId: "1:215879728483:web:b127135816ee1804fe6756"
};

export const Firebase_App = firebase.initializeApp(firebaseConfig);
export const Firebase_Auth = initializeAuth(Firebase_App, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const Firebase_DB = getFirestore(Firebase_App)

