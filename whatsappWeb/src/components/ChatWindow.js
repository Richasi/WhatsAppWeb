import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { state, dispatch } = useAppContext();
  const selectedContact = state.contacts.find(
    (contact) => contact.id === state.selectedContactId
  );
  const messages = state.messages[state.selectedContactId] || [];

  const handleAddMessage = (message) => {
    dispatch({
      type: 'ADD_MESSAGE',
      payload: { contactId: state.selectedContactId, message },
    });
  };

  useEffect(() => {
    if (selectedContact) {
      console.log(`Chat selected: ${selectedContact.name}`);
    }
  }, [selectedContact]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        {selectedContact ? selectedContact.name : 'Select a contact'}
      </div>
      <div className="chat-messages">
        {messages.map((msg, idx) => (
          <Message key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>
      {selectedContact && (
        <MessageInput onSendMessage={handleAddMessage} />
      )}
    </div>
  );
};

export default ChatWindow;
