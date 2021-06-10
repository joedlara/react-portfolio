import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDs1Monzy13xbxQt_YFoJxPSVdNw4zBUQI",
  authDomain: "react-portfolio-e26af.firebaseapp.com",
  projectId: "react-portfolio-e26af",
  storageBucket: "react-portfolio-e26af.appspot.com",
  messagingSenderId: "568242097221",
  appId: "1:568242097221:web:c4117f7c82e2ca6022672c",
  measurementId: "G-263T93BCSS",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const storage = firebase.storage()

export { storage }
export default db
