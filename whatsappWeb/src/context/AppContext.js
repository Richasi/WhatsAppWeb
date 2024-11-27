import React, { createContext, useReducer, useContext } from 'react';

// Initial state with static data
const initialState = {
  contacts: [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ],
  selectedContactId: null,
  messages: {
    1: [
      { sender: 'Alice', text: 'Hey there!', timestamp: '10:00 AM' },
      { sender: 'You', text: 'Hello Alice!', timestamp: '10:05 AM' },
    ],
    2: [
      { sender: 'Bob', text: 'Hi, how are you?', timestamp: '10:10 AM' },
      { sender: 'You', text: 'I\'m good, thanks!', timestamp: '10:15 AM' },
    ],
    3: [
      { sender: 'Charlie', text: 'What\'s up?', timestamp: '10:20 AM' },
      { sender: 'You', text: 'Not much, you?', timestamp: '10:25 AM' },
    ],
  },
};

// Reducer to manage state
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CONTACT':
      return { ...state, selectedContactId: action.payload };
    case 'ADD_MESSAGE':
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

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
