import React from 'react';
import Gallery from '../components/Gallery';

/**
 * Page Home with banner and component Gallery
 * @returns {JSX} - React component - Page
 */
const Home = () => {
    return (
        <div>
            <div className='banner'>
                <img src="./banner.png" alt="" />
                <h1 className='title'>Chez vous, partout et ailleurs</h1>
            </div>
            <Gallery />
        </div>
    );
};

export default Home;