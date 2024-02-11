import React from 'react';

const Contact = ({ name, id, number }) => {
  return (
    <div>
          <li key={id} >
        {name}: {number}
      </li>
    </div>
  );
};

export default Contact;
