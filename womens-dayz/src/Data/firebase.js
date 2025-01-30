import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWK59xnvkzHZjT89mLOQ42j2I9u-R3ViM",
    authDomain: "women-ecommerce-7413a.firebaseapp.com",
    projectId: "women-ecommerce-7413a",
    storageBucket: "women-ecommerce-7413a.appspot.com",
    messagingSenderId: "291258313211",
    appId: "1:291258313211:web:17bc89cd19d1d4b6a1835e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Auth instance if needed
export const auth = getAuth(app);
