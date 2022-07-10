import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCW0EYNxnFrJ_VowADc0stEnlv7TJJNPRU",
    authDomain: "clone-9ddcd.firebaseapp.com",
    projectId: "clone-9ddcd",
    storageBucket: "clone-9ddcd.appspot.com",
    messagingSenderId: "739197848150",
    appId: "1:739197848150:web:50b7deb1bdebc356aa89f7",
};

const firebaseApp = firebase.initiallizeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };