

import React from 'react';

const Contact = ({name, id}) => {
    return <div>
        <p key={id} name={name}>{name}</p>
</div>
};

export default Contact;