import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink to={"/"} className="nav">
                Accueil
            </NavLink>
            <NavLink to={"/about"} className="nav">
                A Propos
            </NavLink>
        </div>
    );
};

export default Navigation;