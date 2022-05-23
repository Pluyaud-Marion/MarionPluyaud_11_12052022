import React from 'react';
import Dropdown from '../components/Dropdown';


const About = () => {

    const about = {
        Fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
        Respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
        Service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        Sécurité: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }

    return (
        <div>
            <div className='banner'>
                <img src="./banner-about.png" alt="bannière" />
            </div>
            <div className='container-dropdown-about'>
                <Dropdown titleDropdown="Fiabilité" contentParaph={about.Fiabilité} />
                <Dropdown titleDropdown="Respect" contentParaph={about.Respect} />
                <Dropdown titleDropdown="Service" contentParaph={about.Service} />
                <Dropdown titleDropdown="Sécurité" contentParaph={about.Sécurité} />
            </div>
        </div>
    );
};

export default About;