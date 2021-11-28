import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDLPlcYNjai6HpljD6TWBquaVJjpyR2ik0",
  authDomain: "amir-chat-app.firebaseapp.com",
  projectId: "amir-chat-app",
  storageBucket: "amir-chat-app.appspot.com",
  messagingSenderId: "492886855577",
  appId: "1:492886855577:web:8467fc5a95ca28a9a34d08",
  measurementId: "G-TB9LCZJ2SF"
};

export const app = initializeApp(firebaseConfig);
