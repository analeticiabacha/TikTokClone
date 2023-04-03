import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCNiyzJyDoHi44Qg8iyxMDhOJ41HQ7d-HA",
  authDomain: "tiktok---jornada-8327c.firebaseapp.com",
  projectId: "tiktok---jornada-8327c",
  storageBucket: "tiktok---jornada-8327c.appspot.com",
  messagingSenderId: "317367609903",
  appId: "1:317367609903:web:98568eb0618506b30e34da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;