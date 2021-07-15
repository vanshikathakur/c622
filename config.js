import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDicV8M7SI1knhSxd1_wRZumg0galqwHsA",
    authDomain: "students-attendance-app-a31c9.firebaseapp.com",
    databaseURL: "https://students-attendance-app-a31c9-default-rtdb.firebaseio.com",
    projectId: "students-attendance-app-a31c9",
    storageBucket: "students-attendance-app-a31c9.appspot.com",
    messagingSenderId: "10531224515",
    appId: "1:10531224515:web:80000afad8adfd73de5b76"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();