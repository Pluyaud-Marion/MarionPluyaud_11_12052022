
import Header from '../components/Header';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';

const Lodging = () => {

    const { id } = useParams()

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("../data.json")
            .then(res => setData(res.data.find(data => data.id === id)))

    }, [])

    return (
        <div>
            <Header />
            <div className='container-picture'>
                <img src={data.cover} alt={"photo de l'appartement " + data.title} className='picture' />
            </div>
            <div className='container-title-name'>
                <h1 className='title'>{data.title}</h1>
                <div className='host'>
                    <p className='name'>{data?.host?.name}</p>
                    <img src={data?.host?.picture} alt={"photo de l'hote " + data?.host?.name} />
                </div>

            </div>
            <p className='location'>{data.location}</p>
            <div className='container-tag'>
                {
                    data?.tags?.map((tag, index) => (
                        <Tag key={index} tag={tag} />
                    ))
                }
            </div>

        </div>
    );
};

export default Lodging;