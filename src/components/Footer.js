import React from 'react';

/**
 * component footer with p and picture
 * @returns {JSX} - React component
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