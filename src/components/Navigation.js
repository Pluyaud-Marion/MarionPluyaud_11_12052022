import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * 
 * @returns component Navigation (His parent is component Header) with NavLinks
 */
const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                Accueil
            </NavLink>
            <NavLink to={"/about"} className={(nav) => (nav.isActive ? "nav-active" : "nav")}>
                A Propos
            </NavLink>
        </div>
    );
};

export default Navigation;