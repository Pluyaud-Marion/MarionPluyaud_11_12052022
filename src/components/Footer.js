import React from 'react';

/**
 * 
 * @returns component footer with p and picture
 */
const Footer = () => {
    return (
        <div className='container-footer'>
            <img className='logo-footer' src='../logo-footer.png' alt='logo kasa white for footer' />
            <p className='text-footer'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;