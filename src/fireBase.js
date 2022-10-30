// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsDgd3imnFZZxTcqDmGM8u-QMIZoUQweo",
  authDomain: "yotubeapp-d2b9c.firebaseapp.com",
  projectId: "yotubeapp-d2b9c",
  storageBucket: "yotubeapp-d2b9c.appspot.com",
  messagingSenderId: "576013493476",
  appId: "1:576013493476:web:52223bc0fe047c6a8ab8f1",
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app 