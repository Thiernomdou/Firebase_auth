import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from 'firebase';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

var firebaseConfig = {
    apiKey: "AIzaSyABlT4IzQb1NgmGMipEzaEVpcGQJu7xxiw",
    authDomain: "fir-auth-31ff5.firebaseapp.com",
    projectId: "fir-auth-31ff5",
    storageBucket: "fir-auth-31ff5.appspot.com",
    messagingSenderId: "327534658598",
    appId: "1:327534658598:web:8d69a3b48015fe211952e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
