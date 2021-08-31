import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxuA7K3wz5m3159LLw6b4M_GqfdaMxLYc",
    authDomain: "team-voting-app-2744c.firebaseapp.com",
    databaseURL: "https://team-voting-app-2744c-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-2744c",
    storageBucket: "team-voting-app-2744c.appspot.com",
    messagingSenderId: "48055713241",
    appId: "1:48055713241:web:606184d00d6e26da7fadc8"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();