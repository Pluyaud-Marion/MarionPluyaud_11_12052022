import React from 'react';

/**
 * 
 * @param {string} star - props of parent lodging / number of star of lodge
 * @returns component Star (pictures of star red or grey)
 */
const Star = ({ star }) => {
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {
                range.map((element, index) => star >= element ? (
                    <img key={index} src='../red-star.png' alt='étoile pleine' className='red-star' />) :
                    (
                        <img key={index} src='../grey-star.png' alt='étoile vide' className='grey-star' />)
                )
            }
        </div>
    );
};

export default Star;