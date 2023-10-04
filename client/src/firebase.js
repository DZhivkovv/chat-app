import { initializeApp } from "firebase/app";
import {browserSessionPersistence, getAuth, setPersistence} from 'firebase/auth'

// The app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBHiIlbIwJ7E4u4NCwNB2Sqv7QoAh8OQGo",

  authDomain: "dialoguify.firebaseapp.com",

  projectId: "dialoguify",

  storageBucket: "dialoguify.appspot.com",

  messagingSenderId: "121934134864",

  appId: "1:121934134864:web:93493eaa61a248803d1b55"

};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence)
export default app;