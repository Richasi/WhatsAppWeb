import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ContactList.css";

const ContactList = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="contact-list">
      {state.contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact ${state.selectedContact?.id === contact.id ? "active" : ""}`}
          onClick={() => dispatch({ type: "SELECT_CONTACT", payload: contact })}
        >
          {contact.name}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
