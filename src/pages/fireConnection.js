import firebase from '@firebase/app';
import '@firebase/auth';

const firebaseConfig = {
          apiKey: "AIzaSyB5x6Z3crf1ClOXT1YWK7q-571cGN6MafA",
          authDomain: "vagas-7555f.firebaseapp.com",
          databaseURL: "https://vagas-7555f.firebaseio.com",
          projectId: "vagas-7555f",
          storageBucket: "vagas-7555f.appspot.com",
          messagingSenderId: "38892742038",
          appId: "1:38892742038:web:5b2fa28153cd9af82429b7",
          measurementId: "G-HY858CS9ZV"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;

