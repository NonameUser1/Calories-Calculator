import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBZ7qvLbEP2oSukFTkPprykrXFyKejzijU",
    authDomain: "calories-calculator-a816a.firebaseapp.com",
    databaseURL: "https://calories-calculator-a816a.firebaseio.com",
    projectId: "calories-calculator-a816a",
    storageBucket: "calories-calculator-a816a.appspot.com",
    messagingSenderId: "935252939387"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;