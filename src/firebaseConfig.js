import { getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APYKEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dat = getFirestore(app)
