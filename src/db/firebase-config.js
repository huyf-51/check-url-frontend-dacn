import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// ADD YOUR OWN FIREBASE CONFIG HERE
const firebaseConfig = {
    apiKey: 'AIzaSyBJrismIVgZMXahgwg2NyuN95BqnswWmLg',
    authDomain: 'dacn-be95d.firebaseapp.com',
    projectId: 'dacn-be95d',
    storageBucket: 'dacn-be95d.appspot.com',
    messagingSenderId: '257810095254',
    appId: '1:257810095254:web:026e296be123e3ac4776b7',
    measurementId: 'G-BTPGERL5SQ',
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore
export const db = getFirestore(firebaseApp);
export { auth, googleAuthProvider };
