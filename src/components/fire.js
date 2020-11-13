import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyDtGcsB0JC2Lbkf1ds24jf-EV24uElpdHU",
    authDomain: "olx-web-32573.firebaseapp.com",
    databaseURL: "https://olx-web-32573.firebaseio.com",
    projectId: "olx-web-32573",
    storageBucket: "olx-web-32573.appspot.com",
    messagingSenderId: "57797046490",
    appId: "1:57797046490:web:08db593caf6b44c4daf5e3",
    measurementId: "G-C3FXCP4634"
  };
  
 const fire =  firebase.initializeApp(firebaseConfig);
  

export default fire;

