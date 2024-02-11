import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <Contact
            name={contact.name}
            key={contact.id}
            number={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
