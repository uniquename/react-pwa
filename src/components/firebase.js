import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyC9YMHlkgvLLKR_KFW6DhGXWmuxBZyFadc",
  authDomain: "react-pwa-32342.firebaseapp.com",
  databaseURL: "https://react-pwa-32342.firebaseio.com",
  projectId: "react-pwa-32342",
  storageBucket: "react-pwa-32342.appspot.com",
  messagingSenderId: "156713085840"
};

var fire = firebase.initializeApp(config);

export default fire;
