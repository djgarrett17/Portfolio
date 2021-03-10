import firebase from 'firebase/app'
import 'firebase/firebase-firestore'

var firebaseConfig = {
    apiKey: "AIzaSyC_B_EJH2VpFdfHp-9qxSOAh1kfFTb6T2U",
    authDomain: "covid-19irt.firebaseapp.com",
    projectId: "covid-19irt",
    storageBucket: "covid-19irt.appspot.com",
    messagingSenderId: "1017935522311",
    appId: "1:1017935522311:web:0c1998885fdc0d095218a2",
    measurementId: "G-SZ219CMEPF"
}
// Initialize Firebase
if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }

export default firebase