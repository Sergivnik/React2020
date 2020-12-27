import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBtdSqvwZ1autXy9fZkGTh7K7Gne9gOf-Q",
  authDomain: "fir-messanger-941d2.firebaseapp.com",
  databaseURL: "https://fir-messanger-941d2-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const db = firebase.database();
