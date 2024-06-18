// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIslEod3P_9zyl5RWORUEu1KQ5iuhCbAo",
  authDomain: "financely---finance-trac-6584b.firebaseapp.com",
  projectId: "financely---finance-trac-6584b",
  storageBucket: "financely---finance-trac-6584b.appspot.com",
  messagingSenderId: "951332696314",
  appId: "1:951332696314:web:1d8989d2e94dd0300fd943",
  measurementId: "G-Q93X73CSSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {db,auth,provider, doc, setDoc}