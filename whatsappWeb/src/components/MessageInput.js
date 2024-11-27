import React, { useState } from 'react';

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage({
        sender: 'You',
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      });
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type a message"
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
