import React, { createContext, useReducer, useEffect } from "react";

const initialState = {
  contacts: [],
  selectedContact: null,
  messages: {}, 
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SELECT_CONTACT":
      return { ...state, selectedContact: action.payload };
    case "ADD_MESSAGE":
      const { contactId, message } = action.payload;
      return {
        ...state,
        messages: {
          ...state.messages,
          [contactId]: [...(state.messages[contactId] || []), message],
        },
      };
    default:
      return state;
  }
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Initialize contacts
    const contacts = [
      { id: 1, name: "Richa Singh" },
      { id: 2, name: "Mark Kumar" },
      { id: 3, name: "Nisha Arora" },
      { id: 4, name: "Swaraj Sharma " },
    ];
    dispatch({ type: "SET_CONTACTS", payload: contacts });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
