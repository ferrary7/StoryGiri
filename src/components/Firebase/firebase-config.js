// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9mM5v68ArP0lXLSQ5tgiz62jVn0lq82g",
//   authDomain: "storygiri-1.firebaseapp.com",
//   projectId: "storygiri-1",
//   storageBucket: "storygiri-1.appspot.com",
//   messagingSenderId: "863742804424",
//   appId: "1:863742804424:web:cd89a5251c225887aac0fd",
//   measurementId: "G-XBVSFKW4H1",
// };

const firebaseConfig = {
  apiKey: "AIzaSyAZ3klK8ApWfdjXDSwNNSCeJwC4AQREfXk",
  authDomain: "storygiri-2.firebaseapp.com",
  projectId: "storygiri-2",
  storageBucket: "storygiri-2.appspot.com",
  messagingSenderId: "617819952350",
  appId: "1:617819952350:web:40c2744bddbc27a8a11e4f",
  measurementId: "G-TSCW39CJM5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
