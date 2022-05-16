import React from 'react';

const Card = ({ lodge }) => {

    return (
        <div className='Card'>
            <img className="picture" src={lodge.cover} alt={"photo de l'appartement " + lodge.title} />
            <p className='title'>{lodge.title}</p>
        </div>
    );
};

export default Card;