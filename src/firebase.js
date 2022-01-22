import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase.initializeApp({
  apiKey: "AIzaSyCyX7Oso9eLi4NuJf6NzNQNfTu5ElWg-qY",
  authDomain: "course-9bd02.firebaseapp.com",
  projectId: "course-9bd02",
  storageBucket: "course-9bd02.appspot.com",
  messagingSenderId: "623743595229",
  appId: "1:623743595229:web:7ed6cedcc0d21a79e82134",
  measurementId: "G-NEBEENPHQS"
  }).auth();