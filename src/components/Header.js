import React from 'react';
import Navigation from './Navigation';


const Header = () => {
    return (
        <div className='header'>
            <a href='/'>
                <img src="../logo.png" alt='logo kasa'></img>
            </a>
            <Navigation />
        </div>
    );
};

export default Header;