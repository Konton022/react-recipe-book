import React from 'react';

const Contacts = ({ contactState }) => {
    return (
        <div className='card'>
            <h4>Contact information:</h4>
            <ul>
                {Object.keys(contactState).map((item) => {
                    return (
                        <li>
                            <i className='material-icons'>{item}</i>
                            {contactState[item]}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Contacts;
