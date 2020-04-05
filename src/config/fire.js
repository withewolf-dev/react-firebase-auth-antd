import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAIs0dCA-LGbsM5K_7BoPgDsGSI0XIpzBk",
    authDomain: "evernote-clone-react-92d59.firebaseapp.com",
    databaseURL: "https://evernote-clone-react-92d59.firebaseio.com",
    projectId: "evernote-clone-react-92d59",
    storageBucket: "evernote-clone-react-92d59.appspot.com",
    messagingSenderId: "831909509927",
    appId: "1:831909509927:web:bc4d57966455480d5a8702",
    measurementId: "G-WSQS2Z85SF"
}

const fire = firebase.initializeApp(firebaseConfig)
export default fire