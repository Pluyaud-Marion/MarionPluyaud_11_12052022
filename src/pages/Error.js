import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 
 * @returns Error Page - with text and navlink for return home
 */
const Error = () => {
    return (
        <div>
            <div className='container-error'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas</h2>
                <NavLink to={"/"} className="link">Retourner sur la page d'accueil</NavLink>
            </div>
        </div>
    );
};

export default Error;