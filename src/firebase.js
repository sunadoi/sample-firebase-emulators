// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
import 'firebase/firestore'

import { config } from './firebase-config'

// Initialize Firebase
const app = firebase.initializeApp(config.firebase)
console.log(app)

const firestore = app.firestore();
firestore.useEmulator("localhost", 8080);

export default firestore;