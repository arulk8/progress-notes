import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import actionTypes from './actionType';
import { auth } from '../auth-service/firebase';

const signUp = (dispatch) => (email, password, displayName) => {
  (async function () {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName });
      onAuthStateChanged(auth, (user) => {
        console.log(user);
        dispatch({
          type: actionTypes.AUTH_SUCCESS,
          payload: user,
        });
      });
    } catch (error) {
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: error,
      });
    }
  })();
};

const login = (dispatch) => (email, password) => {
  (async function () {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onAuthStateChanged(auth, (user) => {
        dispatch({
          type: actionTypes.AUTH_SUCCESS,
          payload: user,
        });
      });
    } catch (error) {
      dispatch({
        type: actionTypes.AUTH_ERROR,
        payload: error,
      });
    }
  })();
};

const logout = (dispatch) => () => {
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
};
export { signUp, login, logout };
