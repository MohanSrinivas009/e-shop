// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF-pY5kKC9Jxw_zCPQWNOhNvhL1NZXzYg",
  authDomain: "reactweb-project-7f9a2.firebaseapp.com",
  projectId: "reactweb-project-7f9a2",
  storageBucket: "reactweb-project-7f9a2.appspot.com",
  messagingSenderId: "1007406732423",
  appId: "1:1007406732423:web:e56eb65906e986da0bd422",
  measurementId: "G-EZ1NZEVXMP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default { auth };
