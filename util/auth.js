import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function createUser({ email, password }) {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  return response.user.uid;
}

export async function signIn({ email, password }) {
  const response = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch((error) => console.log(error));

  return response.user.uid;
}

export function signout() {
  signOut(auth);
}
