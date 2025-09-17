// script2.js
import { auth } from "./registro.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// REGISTRO
document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Cuenta creada: " + userCredential.user.email);
      window.location.href = "../index.html";
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        alert("Ese correo ya está registrado, usa Iniciar Sesión.");
      } else {
        alert("Error: " + error.message);
      }
    });
});

// LOGIN
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Bienvenido: " + userCredential.user.email);
      window.location.href = "../index.html";
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        alert("No existe cuenta con este correo, regístrate.");
      } else if (error.code === "auth/wrong-password") {
        alert("Contraseña incorrecta.");
      } else {
        alert("Error: " + error.message);
      }
    });
});
