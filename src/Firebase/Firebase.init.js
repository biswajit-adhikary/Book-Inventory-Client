import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfW097XkQV-rGkyKwY512YuH6u4E79k0Y",
    authDomain: "book-inventory-dbbc9.firebaseapp.com",
    projectId: "book-inventory-dbbc9",
    storageBucket: "book-inventory-dbbc9.appspot.com",
    messagingSenderId: "640764492709",
    appId: "1:640764492709:web:11cab2d0e8205669ec464c"
};

const app = initializeApp(firebaseConfig);

export default app;