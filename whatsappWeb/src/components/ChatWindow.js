import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

const ChatWindow = () => {
  const { state } = useContext(AppContext);
  const [chatHistory, setChatHistory] = useState([]);

  React.useEffect(() => {
    if (state.selectedContact) {
      setChatHistory(state.messages[state.selectedContact.id] || []);
    }
  }, [state.selectedContact, state.messages]);

  return (
    <div className="chat-window">
      {state.selectedContact ? (
        <>
          <div className="chat-header">
            <span>{state.selectedContact.name}</span>
          </div>
          <div className="chat-history">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`message ${msg.sender === "me" ? "sent" : "received"}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <MessageInput />
        </>
      ) : (
        <div className="no-contact">Select a contact to start chatting</div>
      )}
    </div>
  );
};

export default ChatWindow;
