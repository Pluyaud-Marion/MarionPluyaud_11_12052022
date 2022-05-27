
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';
import Star from '../components/Star';
import Dropdown from '../components/Dropdown';
import CoverPicture from '../components/CoverPicture';

/**
 * Lodging page with datas and components CoverPicture / Tag / Star / Dropdown
 * @returns {JSX} - React component - Page
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
    const [data, setData] = useState("")


    useEffect(() => {
        axios.get("../data.json")
            .then(res => {
                setData(res.data.find(data => data.id === id))

            })
            .catch(error => console.log(error))

    }, [id])

    if (data === undefined) {
        return <Navigate to="/error" />
    }

    return (
        <div>
            {data && <CoverPicture key={data?.id} allPictures={data?.pictures} />}
            <div className='container-infos'>
                <div className='container-infos-lodge'>
                    {data && <div className='container-title-location'>
                        <h1 className='title'>{data?.title}</h1>
                        <p className='location'>{data?.location}</p>
                    </div>}
                    {data && <div className='container-tag'>
                        {
                            data?.tags?.map((tag, index) => (
                                <Tag key={index} tag={tag} />
                            ))
                        }
                    </div>}
                </div>

                {data && <div className='container-host-star'>
                    <div className='host'>
                        <p className='name'>{data?.host?.name}</p>
                        <img src={data?.host?.picture} alt={"photo de l'hote " + data?.host?.name} />
                    </div>
                    <div className='star'>
                        {
                            <Star star={data?.rating} />
                        }
                    </div>
                </div>}
            </div>

            {data && <div className='container-dropdown'>
                <Dropdown titleDropdown="Description" contentParaph={data?.description} />
                <Dropdown titleDropdown="Equipements" contentList={data?.equipments} />
            </div>}

        </div >

    );
};

export default Lodging;

