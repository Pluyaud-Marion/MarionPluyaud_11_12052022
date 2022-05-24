import React from 'react';
import { Link } from 'react-router-dom';

/**
 * 
 * @param {Object} lodge -  props of component parent Gallery (infos about one lodge)
 * @returns component Card with all infos - add id in url params
 */
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