import React from 'react';
import { AppProvider } from './context/AppContext';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';

const App = () => (
  <AppProvider>
    <h1 style={{ textAlign: 'center', margin: 0 }}>WhatsApp Web</h1>
    <div className="app">
      
      <div className="sidebar">
        <ContactList />
      </div>
      <div className="main">
        <ChatWindow />
      </div>
    </div>
  </AppProvider>
);

export default App;
