import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithPopup, 
        signInWithRedirect,
        GoogleAuthProvider } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-3Gf4EcSaXiD8HPUeI1uTpcr6Ev4Fvp8",
    authDomain: "crown-clothing-db-8cbb5.firebaseapp.com",
    projectId: "crown-clothing-db-8cbb5",
    storageBucket: "crown-clothing-db-8cbb5.appspot.com",
    messagingSenderId: "938784114370",
    appId: "1:938784114370:web:70a08a778e04b0cba4dd5b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  