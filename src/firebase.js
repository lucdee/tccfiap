import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC06xGqS2s2omGYwqnQ8x8iBIXJZVxpNXk",
  authDomain: "tccfiap.firebaseapp.com",
  projectId: "tccfiap",
  storageBucket: "tccfiap.appspot.com",
  messagingSenderId: "78007313641",
  appId: "1:78007313641:web:c0403b233bc970d91a3c78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
