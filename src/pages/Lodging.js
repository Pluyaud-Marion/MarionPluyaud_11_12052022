

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';
import Star from '../components/Star';
import Dropdown from '../components/Dropdown';

import CoverPicture from '../components/CoverPicture';

const Lodging = () => {

    const { id } = useParams()

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("../data.json")
            .then(res => setData(res.data.find(data => data.id === id)))

    }, [id])

    return (

        <div>

            {data && <CoverPicture key={data?.id} allPictures={data?.pictures} />}
            {data && <div className='container-title-name'>
                <h1 className='title'>{data?.title}</h1>
                <div className='host'>
                    <p className='name'>{data?.host?.name}</p>
                    <img src={data?.host?.picture} alt={"photo de l'hote " + data?.host?.name} />
                </div>

            </div>}
            {data && <p className='location'>{data?.location}</p>}
            {data && <div className='container-tag-star'>
                <div className='container-tag'>
                    {
                        data?.tags?.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))
                    }
                </div>
                <div className='star'>
                    {
                        <Star star={data?.rating} />
                    }
                </div>
            </div>}
            {data && <div className='container-dropdown'>
                <Dropdown titleDropdown="Description" contentParaph={data?.description} />
                <Dropdown titleDropdown="Equipements" contentList={data?.equipments} />
            </div>}

        </div >

    );
};

export default Lodging;