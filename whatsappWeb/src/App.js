import React from "react";
import ContactList from "./components/ContactList";
import ChatWindow from "./components/ChatWindow";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>Welcome</h1>
      <div className="flexContainer">
      <ContactList />
      <ChatWindow />
      </div>
    </div>
  );
};

export default App;
