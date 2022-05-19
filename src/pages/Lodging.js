
import Header from '../components/Header';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Tag from '../components/Tag';
import Star from '../components/Star';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
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
            <Header />
            {/* <div className='container-picture'> */}
            <CoverPicture key={data?.id} allPictures={data?.pictures} />
            {/* <img src="../arrow-next.png" alt="flèche suivant" className='arrow-next' />
                <img src="../arrow-prev.png" alt="flèche précédent" className='arrow-prev' /> */}
            {/* <img src={data.cover} alt={"photo de l'appartement " + data.title} className='picture' /> */}
            {/* </div> */}
            <div className='container-title-name'>
                <h1 className='title'>{data.title}</h1>
                <div className='host'>
                    <p className='name'>{data?.host?.name}</p>
                    <img src={data?.host?.picture} alt={"photo de l'hote " + data?.host?.name} />
                </div>

            </div>
            <p className='location'>{data.location}</p>
            <div className='container-tag-star'>
                <div className='container-tag'>
                    {
                        data?.tags?.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))
                    }
                </div>
                <div className='star'>
                    {
                        <Star key={data.id} star={data.rating} />
                    }
                </div>
            </div>
            <div className='container-dropdown'>
                {
                    <Dropdown titleDropdown={"Description"} key={"description " + data.id} propsDescription={data.description} />
                }
                {

                    <Dropdown titleDropdown={"Equipements"} key={"équipement " + data.id} propsEquipment={data.equipments} />


                }
            </div>
            <Footer />
        </div>
    );
};

export default Lodging;