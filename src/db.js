import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyBP2xiYqQjlcF7DrUBq4DzXbNcPmEyVDLE',
  authDomain: 'bavard-a2f36.firebaseapp.com',
  projectId: 'bavard-a2f36',
  storageBucket: 'bavard-a2f36.appspot.com',
  messagingSenderId: '79987147613',
  appId: '1:79987147613:web:f891bc402582e50a1a5eb4',
};

const db = firebase.initializeApp(config);
export default db;
