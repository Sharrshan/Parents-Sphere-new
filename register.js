 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDTy0oljkT7P8VBfzfrA9ztVZ6lFpGNa50",
    authDomain: "parent-sphere-new.firebaseapp.com",
    projectId: "parent-sphere-new",
    storageBucket: "parent-sphere-new.firebasestorage.app",
    messagingSenderId: "2055683225",
    appId: "1:2055683225:web:e554fda95ec02f73ea8c08"
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
