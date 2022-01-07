import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMxFbCDDkfIVljuGbhGRkxNFIJsO8d4gM",
    authDomain: "huongdichvu-d7d6f.firebaseapp.com",
    projectId: "huongdichvu-d7d6f",
    storageBucket: "huongdichvu-d7d6f.appspot.com",
    messagingSenderId: "830739218142",
    appId: "1:830739218142:web:5286703a49d84b92698c4f",
    measurementId: "G-ELJD7PLDD8"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };