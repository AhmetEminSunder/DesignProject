import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC99mtTbZsJ7iX7SITghLrD7HRq_FTC0Sg",
  authDomain: "photogallery-db944.firebaseapp.com",
  projectId: "photogallery-db944",
  storageBucket: "photogallery-db944.appspot.com",
  messagingSenderId: "738683987600",
  appId: "1:738683987600:web:743e241af304c4f6f45a15"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export  {firebaseConfig,firebaseApp,projectStorage,projectFirestore,timestamp};
