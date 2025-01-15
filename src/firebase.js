// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9w2ApvhipA4_p8eL9i4zOQS229MDgfUY",
  authDomain: "myapp-c3da9.firebaseapp.com",
  databaseURL: "//myapp-c3da9-default-rtdb.firebaseio.com/",
  projectId: "myapp-c3da9",
  storageBucket: "myapp-c3da9.appspot.com",
  messagingSenderId: "227431007476",
  appId: "1:227431007476:web:c4da0e19475ee1c6ce4aa1",
  measurementId: "G-X9ZSTHT29Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app); // Create the database instance
const analytics = getAnalytics(app);

// Export the necessary modules
export { app, auth, database as db, analytics };
