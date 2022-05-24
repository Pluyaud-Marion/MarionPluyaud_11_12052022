import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

/**
 * 
 * @returns component Gallery (parent of component Card with props lodge : data )
 * Axios for get data (in json) 
 */
const Gallery = () => {
    /**
     * @constant data - data in state, get in json with axios / update in state with setData
     * @type {object}
     */
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("data.json")
            .then(res => setData(res.data))
            .catch(error => console.log(error))

    }, [])

    return (
        <div className='Gallery'>
            {
                data.map((lodge) => (
                    <Card key={lodge.id} lodge={lodge} />
                ))
            }
        </div>
    );
};

export default Gallery;