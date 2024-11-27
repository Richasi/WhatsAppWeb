import React, { createContext, useReducer } from "react";

const initialState = {
  contacts: [],
  messages: {},
  selectedContact: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SET_MESSAGES":
      return { ...state, messages: { ...state.messages, [action.contact]: action.payload } };
    case "SELECT_CONTACT":
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
