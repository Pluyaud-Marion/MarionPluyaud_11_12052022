
import { useParams } from 'react-router-dom';
// import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';
import Star from '../components/Star';
import Dropdown from '../components/Dropdown';
// import Error from './Error';
import CoverPicture from '../components/CoverPicture';

/**
 * 
 * @returns Lodging page with datas and components CoverPicture / Tag / Star / Dropdown
 */
const Lodging = () => {

    /**
     * @constant id in url params
     * @type {string}
     */
    const { id } = useParams()

    /**
     * @constant data - with axios.get in json. Update with setData
     * @type {object}
     */
    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("../data.json")
            .then(res => {
                if (res.data.find((data => data.id === id)) === undefined) {
                    window.location.pathname = '../error'
                } else {
                    setData(res.data.find(data => data.id === id))
                }

                //<Navigate to={<Error />} />
            })
            .catch(error => console.log(error))



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