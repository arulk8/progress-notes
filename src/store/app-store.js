import React, { createContext, useContext, useReducer } from "react";

const initialState = {};
const StoreContext = createContext(initialState);
const storeReducer = (state, action) => {
  const { payload, type } = action;
  return state;
};
const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialState);
  const actions = {};
  return (
    <StoreContext.Provider value={{ store, actions }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
