import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDNvQ0zyaTxxLWcI5aPsiaUOuka5Y5_Rmw",
  authDomain: "catch-of-the-day-wes-bos-f0e8d.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos-f0e8d.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;