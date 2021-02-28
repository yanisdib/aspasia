import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider,
} from '../firebase/firebase';

export function login(uid) {
  return {
    type: 'LOGIN',
    uid,
  };
}

export function startLogin(authProvider = null, { email, password }) {
  try {
    return async (dispatch) => {
      const authentication = () => {
        switch (authProvider) {
          case 'Google':
            return firebase.auth().signInWithPopup(googleAuthProvider);
          case 'Facebook':
            return firebase.auth().signInWithPopup(facebookAuthProvider);
          default:
            return firebase.auth().signInWithEmailAndPassword(email, password);
        }
      };
      try {
        const res = await authentication();
        const { uid } = res.user;
        localStorage.setItem('user', uid);
        return dispatch(login(uid));
      } catch (error) {
        console.log(`${error.code}: ${error.message}`);
        if (error.code === 'auth/invalid-email') {
          alert('Invalid email/password, please try again');
        }
      }
    };
  } catch {
    return "Email or/and password don't match. Try again...";
  }
}

export const logout = () => ({
  type: 'LOGOUT',
});

/**
 * Starts the LogOut process
 * Returns an asynchronous function that logOut the current user
 */
export const startLogout = () => {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      // Sign-out successful
      dispatch(logout());
      localStorage.removeItem('user');
      console.log('user successfully logged out!');
    } catch (error) {
      // An error happened
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
    }
  };
};
