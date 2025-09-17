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

login.addEventListener('click', (e) => {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    signInWithEmailAndPassword(auth, email, password).then(cred => {
      alert ("Usuario logueado");
      console.log(cred.user);
}).catch(error => {
  const errorCode = error.code;

  if (errorCode == 'auth/invalid-email')
    alert('El correo no es válido');
  else if (errorCode == 'auth/user-disabled')
    alert('El usuario ha sido deshabilitado');
  else if (errorCode == 'auth/user-not-found')
    alert('El usuario no existe');
  else if (errorCode == 'auth/wrong-password')
    alert('Contraseña incorrecta');
  });
});

cerrar.addEventListener('click', (e) => {
  auth.signOut().then(()=>{
    alert('sesion cerrada');
  }).catch((error)=>{
    alert('error al cerrar sesion');
  });
});

auth.onAuthStateChanged(user =>{
  if(user){
    console.log("Usuario Activo");
    var email=user.emailVerified;
    if(emailVerified){
      window.open("index.html")
    
    }else{
      auth.signOut();
    }
  }else{
      console.log("usuario inactivo")
  }
})