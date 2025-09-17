import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js';
import {sendEmailVerification, getAuth, signinwithPopup,
createUserwithEmailAndPassword, signInWithEmailAndPassword,
onAuthStateChanged} from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyCAw4FFaO1TlMTZi5gT-nCjWAv88E-o4z0",
  authDomain: "cce-construcciones.firebaseapp.com",
  projectId: "cce-construcciones",
  storageBucket: "cce-construcciones.firebasestorage.app",
  messagingSenderId: "768916516236",
  appId: "1:768916516236:web:2c782524eb6937254cbaa9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

registro.addEventListener('click', (e) => {
  var email = document.getElementById('signup-email').value;
  var password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password).then(cred =>{
    alert ("Usuario creado");
    auth.signOut();
    sendEmailVerification(auth.currentUser).then(() =>{ 
      alert('se ha enviada un correo de verificacion')})
  }).catch(error => {
    const errorCode= error.code;
   
    if (errorCode == 'auth/email-already-in-use')
      alert('El correo ya está en uso');
    else if (errorCode == 'auth/invalid-email')
      alert('El correo no es válido');
    else if (errorCode == 'auth/weak-password')
      alert('La contraseña debe tener al menos 6 caracteres');
  });
});
