import React from 'react';

const Contacts = ({ contactState }) => {
    return (
        <>
            <ul className='collection with-header'>
                <li className='collection-header grey white-text'>
                    <h4>Contact information:</h4>
                </li>
                {Object.keys(contactState).map((item) => {
                    return (
                        <li key={item} className='collection-item'>
                            <span>{item}:</span>
                            <span className='right'>{contactState[item]}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Contacts;
