// import firebase from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDaHS_YB-g9aW5d8LhOPd2hCbwppil7Z58",
    authDomain: "disneyplushotstar-7ba31.firebaseapp.com",
    projectId: "disneyplushotstar-7ba31",
    storageBucket: "disneyplushotstar-7ba31.appspot.com",
    messagingSenderId: "506493488674",
    appId: "1:506493488674:web:0d77efd6500f57e0aac47b",
    measurementId: "G-9WDW9Y33XD"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;