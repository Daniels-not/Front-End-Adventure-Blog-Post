// imports firebase


import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";


// initialize firebase app


const app = firebase.initializeApp({
    apiKey: "AIzaSyBEEW3cppx_fKN42Gjw0xEz8PJ643NDy9A",
    authDomain: "blog-post-react-dd4fa.firebaseapp.com",
    databaseURL: "https://blog-post-react-dd4fa-default-rtdb.firebaseio.com/",
    projectId: "blog-post-react-dd4fa",
    storageBucket: "blog-post-react-dd4fa.appspot.com",
    messagingSenderId: "250693193491",
    appId: "1:250693193491:web:6d053277a6d2cd74b9d4e6",
    measurementId: "G-CZ4MXMBY58"
});


// export firebase app to use in other files

export const auth = firebase.auth();
export const database = firebase.database();
export default app;