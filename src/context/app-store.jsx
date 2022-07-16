import React, { createContext, useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import { signUp, login } from './actions';
import actionTypes from './actionType';

const initialState = {
  userDetails: null,
  authError: null,
};

const init = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const userDetails = JSON.parse(user);
    return {
      userDetails,
      authError: null,
    };
  }
  return initialState;
};
const StoreContext = createContext(initialState);

const storeReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case actionTypes.AUTH_SUCCESS: {
      return {
        ...state,
        userDetails: payload,
        authError: null,
      };
    }
    case actionTypes.AUTH_ERROR: {
      return {
        ...state,
        userDetails: null,
        authError: payload,
      };
    }
    default:
      return state;
  }
};

function StoreProvider({ children }) {
  const [store, dispatch] = useReducer(storeReducer, initialState, init);

  const { userDetails } = store;

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userDetails));
  }, [userDetails]);

  const actions = {
    signUp: signUp(dispatch),
    login: login(dispatch),
  };
  return (
    <StoreContext.Provider value={{ ...store, actions }}>
      {children}
    </StoreContext.Provider>
  );
}

const useStore = () => useContext(StoreContext);

StoreProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { StoreProvider, useStore };
