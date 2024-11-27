import React from 'react';
import { useAppContext } from '../context/AppContext';

const ContactList = () => {
  const { state, dispatch } = useAppContext();

  const handleSelectContact = (contactId) => {
    dispatch({ type: 'SET_SELECTED_CONTACT', payload: contactId });
  };

  return (
    <div className="contact-list">
      {state.contacts.map((contact) => (
        <div
          key={contact.id}
          className="contact-item"
          onClick={() => handleSelectContact(contact.id)}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
