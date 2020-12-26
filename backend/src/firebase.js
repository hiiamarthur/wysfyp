/*
 * MODULE NAME: FIREBASE
 * PROGRAMMER: LAU PING TUNG
 * VERSION: 1.0 (11 DEC 2020)
 *
 * PURPOSE: THIS IS THE FIREBASE OF THE BACK-END.
 *          IT IS API THAT CALL EXTERNAL CLOUD DATABASE. 
 *
 *
 */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBFtpC2PAhcwlHvER20cueS065K_5DbrZI",
    authDomain: "team-up-6c707.firebaseapp.com",
    databaseURL: "https://team-up-6c707.firebaseio.com",
    projectId: "team-up-6c707",
    storageBucket: "team-up-6c707.appspot.com",
    messagingSenderId: "52288308462",
    appId: "1:52288308462:web:7ae2ba78d5acde1889dfff",
    //measurementId: "G-MN5WJVKS45"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();