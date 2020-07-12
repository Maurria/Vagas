import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


    let firebaseConfig = {
        apiKey: "AIzaSyC9w9EMSf4sLuuWC_meLNzM-GQ1NHeSCNI",
        authDomain: "reactapp-2e4d7.firebaseapp.com",
        databaseURL: "https://reactapp-2e4d7.firebaseio.com",
        projectId: "reactapp-2e4d7",
        storageBucket: "reactapp-2e4d7.appspot.com",
        messagingSenderId: "836048674983",
        appId: "1:836048674983:web:1384e61fba790f4e"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

export default firebase;