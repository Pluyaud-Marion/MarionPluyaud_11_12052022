import React from 'react';

const Star = ({ star }) => {
    const range = [1, 2, 3, 4, 5]

    return (
        <div>
            {
                range.map((element, index) => star >= element ? (
                    <img key={index} src='../red-star.png' alt='étoile pleine' />) :
                    (
                        <img key={index} src='../grey-star.png' alt='étoile vide' />)
                )
            }
        </div>
    );
};

export default Star;