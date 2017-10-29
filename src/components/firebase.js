import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC9YMHlkgvLLKR_KFW6DhGXWmuxBZyFadc",
  authDomain: "react-pwa-32342.firebaseapp.com",
  databaseURL: "https://react-pwa-32342.firebaseio.com",
  projectId: "react-pwa-32342",
  storageBucket: "react-pwa-32342.appspot.com",
  messagingSenderId: "156713085840"
};

const fire = firebase.initializeApp(config);

console.log(fire);

const messaging = fire.messaging();

messaging.onMessage(function(payload) {
  console.log("Message received. ", payload);
  // ...
});


export default fire;
