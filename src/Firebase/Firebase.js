import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDSrXTS8XnofkCuzhoHIYzDcjBUKGQafc0",
  authDomain: "lagrutatuc.firebaseapp.com",
  projectId: "lagrutatuc",
  storageBucket: "lagrutatuc.appspot.com",
  messagingSenderId: "482172654198",
  appId: "1:482172654198:web:08c0ed68d1e8ad238a8557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)