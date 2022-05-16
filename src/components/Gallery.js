import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Gallery = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("data.json")
            .then(res => setData(res.data))
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