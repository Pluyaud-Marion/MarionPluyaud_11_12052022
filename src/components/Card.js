import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ lodge }) => {
    return (
        <div className='Card'>
            <Link to={"/lodging/" + lodge.id} className='link-card'>
                <img className="picture" src={lodge.cover} alt={"photo de l'appartement " + lodge.title} />
                <p className='title'>{lodge.title}</p>
            </Link>

        </div>
    );
};

export default Card;