import { firebase } from './firebase';

// Google authetication provider
export const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

// Authentication
export const auth = firebase.auth();
