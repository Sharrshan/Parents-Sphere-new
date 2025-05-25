 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBhQNQ4Pf8GLFkgWA7p6QbuArgKTXQB4O4",
    authDomain: "parent-sphere.firebaseapp.com",
    projectId: "parent-sphere",
    storageBucket: "parent-sphere.firebasestorage.app",
    messagingSenderId: "52658078544",
    appId: "1:52658078544:web:337ed739d4bed5b0886255"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  //inupts
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //submit button
  const submit = document.getElementById('submit');
  submit.addEventListener("click",function(event) {
    event.preventDefault()
    alert(5)
  })