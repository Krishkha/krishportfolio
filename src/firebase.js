// src/firebase.js

// Import core Firebase functions
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmjj5zxJ-T0Ok2UbBTx0tqdv6a3cjRvts",
  authDomain: "portfolio-4b6cf.firebaseapp.com",
  projectId: "portfolio-4b6cf",
  storageBucket: "portfolio-4b6cf.appspot.com", // fixed from ".app" to ".com"
  messagingSenderId: "914800707129",
  appId: "1:914800707129:web:b657cb803e19d20b342fe8",
  measurementId: "G-QZTQMFE53Y",
  databaseURL: "https://portfolio-4b6cf-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export the initialized database
const database = getDatabase(app);

export { app, database };







// firebase old rule
// {
//   "rules": {
//     ".read": "now < 1757097000000",  // 2025-9-6
//     ".write": "now < 1757097000000",  // 2025-9-6
//   }
// }
