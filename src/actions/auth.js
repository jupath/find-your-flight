import { GoogleAuthProvider, auth } from '../firebase/auth';

// LOGIN
export const userLogin = (uid, name) => ({
  type: 'USER_LOGIN',
  userData: {
    uid,
    name,
  },
});

export const startUserLogin = () => () => {
  auth.signInWithPopup(GoogleAuthProvider);
};

// LOGOUT
export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const startUserLogout = () => () => {
  auth.signOut();
};
