import firebase from "firebase" 

var firebaseConfig = {
    apiKey: "AIzaSyBdCtju1vL2hzEQ_sSLsgZp4Jp_QoA6Tss",
    authDomain: "bt3103-week-6-7c79c.firebaseapp.com",
    projectId: "bt3103-week-6-7c79c",
    storageBucket: "bt3103-week-6-7c79c.appspot.com",
    messagingSenderId: "596043302650",
    appId: "1:596043302650:web:257abf89c6e1f10d2a2b43",
    measurementId: "G-LS8342YB1T"
  };

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;

