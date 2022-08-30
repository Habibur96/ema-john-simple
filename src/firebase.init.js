// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0iMjZ8FlXV1xu9Bzs0iyq-mpFwPHdk2Y",
    authDomain: "ema-john-simple-c4edf.firebaseapp.com",
    projectId: "ema-john-simple-c4edf",
    storageBucket: "ema-john-simple-c4edf.appspot.com",
    messagingSenderId: "679453119910",
    appId: "1:679453119910:web:435c3982847d9fe5562b67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;