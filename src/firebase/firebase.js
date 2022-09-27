// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAgjjWVkCCJiWZifvKFc5jUow__uXbT9Mg",
    authDomain: "proyecto-ecommerce-37415.firebaseapp.com",
    projectId: "proyecto-ecommerce-37415",
    storageBucket: "proyecto-ecommerce-37415.appspot.com",
    messagingSenderId: "738443082927",
    appId: "1:738443082927:web:251c6f72df0c2eded4e85a",
    measurementId: "G-MJZH85TTNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const  db = getFirestore(app)

export default db