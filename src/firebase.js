import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDkNb6sdoPySmnAwzrXTTnAq0cxCB3_Dio',
  authDomain: 'memegram-4d0ad.firebaseapp.com',
  databaseURL: 'https://memegram-4d0ad.firebaseio.com',
  projectId: 'memegram-4d0ad',
  storageBucket: 'memegram-4d0ad.appspot.com',
  messagingSenderId: '269180285521',
  appId: '1:269180285521:web:f795b133c131d8c53e7e70',
  measurementId: 'G-D4M6HZLNJC',
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const storage = firebaseApp.storage()

export {db, auth, storage}
