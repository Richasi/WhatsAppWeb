import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./MessageInput.css";

const MessageInput = () => {
  const { state, dispatch } = useContext(AppContext);
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim() || !state.selectedContact) return;

    const newMessage = { text: message, sender: "me" };
    dispatch({ type: "ADD_MESSAGE", payload: { contactId: state.selectedContact.id, message: newMessage } });
    setMessage("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;
