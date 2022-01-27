import React, { useState } from 'react';

const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('');

    const handleKey = (event) => {
        if (event.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        console.log(value);
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='Search...'
                    onKeyDown={handleKey}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                />
                <button
                    className='btn'
                    onClick={handleSubmit}
                    style={{ position: 'absolute', top: 0, right: 0 }}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
