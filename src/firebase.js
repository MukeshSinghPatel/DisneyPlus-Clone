import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAGR1cwjpO35V8Fv9pK7B818I-3OU9L3ek",
    authDomain: "disneyplus-db0cf.firebaseapp.com",
    projectId: "disneyplus-db0cf",
    storageBucket: "disneyplus-db0cf.appspot.com",
    messagingSenderId: "664426637310",
    appId: "1:664426637310:web:24c3f77caab5b35a6d82af",
    measurementId: "G-2K8XM1QY42"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;