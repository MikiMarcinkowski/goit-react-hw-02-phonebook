import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map(contact => (
        <Contact name={contact.name} key={contact.id} /> 
         
      ))}
    </div>
  );
};

export default ContactList;