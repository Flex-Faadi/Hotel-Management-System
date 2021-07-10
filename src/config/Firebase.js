import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
    apiKey: "AIzaSyCYhs98SlviovVahfe5Vd79VIYo6mexVBs",
    authDomain: "hotel-management-system-8665f.firebaseapp.com",
    projectId: "hotel-management-system-8665f",
    storageBucket: "hotel-management-system-8665f.appspot.com",
    messagingSenderId: "1073650188158",
    appId: "1:1073650188158:web:fdd73dd3a782329eddbd2f"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);