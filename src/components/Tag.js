import React from 'react';

/**
 * 
 * @param {string} tag - props of component parent Lodging  - each of tag 
 * @returns component tag
 */
const Tag = ({ tag }) => {

    return (
        <div className='tag'>
            <p className='text'>{tag}</p>
        </div>
    );
};

export default Tag;