import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Error = () => {
    return (
        <div>
            <Header />
            <div className='container-error'>
                <h1>404</h1>
                <h2>Oups! La page que vous demandez n'existe pas</h2>
                <NavLink to={"/"} className="link">Retourner sur la page d'accueil</NavLink>
            </div>
            <Footer />
        </div>
    );
};

export default Error;