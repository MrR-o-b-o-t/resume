import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAREF_LBff0htOUupw-me1lisfMV5HzaPQ",
  authDomain: "samkautzresume.firebaseapp.com",
  projectId: "samkautzresume",
  storageBucket: "samkautzresume.appspot.com",
  messagingSenderId: "1084761359825",
  appId: "1:1084761359825:web:3050f1ae99595e234f8cf0",
  measurementId: "G-T8WFHESN83",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
