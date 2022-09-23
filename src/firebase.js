import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
firebase.initializeApp({
    // apiKey:process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId:process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID,
    // measurementId:process.env.REACT_APP_MEASUREMENT_ID,
    apiKey: "AIzaSyD5-roBRkOQ6Pv4PHMbpZwBS9uvVWOoX6Q",
    authDomain: "code-question.firebaseapp.com",
    projectId: "code-question",
    storageBucket: "code-question.appspot.com",
    messagingSenderId: "972625971370",
    appId: "1:972625971370:web:7066d29ade5185f392a8d3",
    measurementId: "G-LDKB21KJVC"
});
export const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export default function signInWithGoogle(){
    auth.signInWithPopup(googleProvider).then((res)=>{
    console.log(res);
    }).catch((error) =>{
       console.log(error.message);
    })
}