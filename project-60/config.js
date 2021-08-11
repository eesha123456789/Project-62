import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBAb93ydwCioJrSnqxK2Lfmx5Op9yuJpXM',
  authDomain: 'project-60-1f66d.firebaseapp.com',
  projectId: 'project-60-1f66d',
  storageBucket: 'project-60-1f66d.appspot.com',
  messagingSenderId: '983522653739',
  appId: '1:983522653739:web:a9861c17a3a8a7c96c9c6e',
};
// Initialize Firebase
if(!firebase.apps.length){
 firebase.initializeApp(firebaseConfig);
}


export default firebase.database();
