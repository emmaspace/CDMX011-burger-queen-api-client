import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCsrM87t18ww1fFvzcJmrbupv8EuFaBg9A",
  authDomain: "burger-queen-api-client.firebaseapp.com",
  projectId: "burger-queen-api-client",
  storageBucket: "burger-queen-api-client.appspot.com",
  messagingSenderId: "232655338138",
  appId: "1:232655338138:web:07c33c7f37a356dddb7d23",
  measurementId: "G-H0FTESW7GE",
};

initializeApp(firebaseConfig);

/* const auth = app.auth();
const db = app.firestore();

const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  auth.signOut();
};
export { auth, db, signInWithEmailAndPassword, logout }; */
