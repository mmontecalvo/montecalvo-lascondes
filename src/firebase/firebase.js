import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPvBCS2rYDzxx6Rzyt4SeFu0tJg_ifwO8",
  authDomain: "las-condes-web.firebaseapp.com",
  projectId: "las-condes-web",
  storageBucket: "las-condes-web.appspot.com",
  messagingSenderId: "290879060673",
  appId: "1:290879060673:web:7b1a2ccfc95be8c2e37240"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

