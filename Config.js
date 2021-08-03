import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDG1hSzzlw6r7T9BI3XuD1XYCSdyt7pbeQ",
  authDomain: "willy-app-bc206.firebaseapp.com",
  projectId: "willy-app-bc206",
  storageBucket: "willy-app-bc206.appspot.com",
  messagingSenderId: "714725137561",
  appId: "1:714725137561:web:d6284714db09ba461a2c08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
