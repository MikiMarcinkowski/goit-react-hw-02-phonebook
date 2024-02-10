import React from 'react';

const Contact = ({ name, id, number }) => {
  return (
    <div>
          <p key={id} >
        {name}:{number}
      </p>
    </div>
  );
};

export default Contact;
