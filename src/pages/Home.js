import React from 'react';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Header from '../components/Header';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='banner'>
                <img src="./banner.png" alt="" />
                <h1 className='title'>Chez vous, partout et ailleurs</h1>
            </div>
            <Gallery />
            <Footer />
        </div>
    );
};

export default Home;