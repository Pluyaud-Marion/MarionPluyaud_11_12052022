import React from 'react';

const Tag = ({ tag }) => {
    return (
        <div className='tag'>
            <p className='text'>{tag}</p>
        </div>
    );
};

export default Tag;