import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyCPBkYQJ-HbRxadH0ruMZpgqfW_Y_KzIE0",
    authDomain: "complaint-forum-3869b.firebaseapp.com",
    projectId: "complaint-forum-3869b",
    storageBucket: "complaint-forum-3869b.appspot.com",
    messagingSenderId: "663904488318",
    appId: "1:663904488318:web:118691868ebb699dc7412f"
  }
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

