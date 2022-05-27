import React, { useState } from 'react';

/**
 * component CoverPicture = arrow next and previous, picture and index
 * @param {Object} allPictures - props of parent lodging / all of pictures of one lodge
 * @returns {JSX} - React component
 */
const CoverPicture = ({ allPictures }) => {

    /**
     * @constant pictureIndex - index of current picture - update in state with setPictureIndex
     * @type {number}
     */
    const [pictureIndex, setPictureIndex] = useState(0);


    /**
     * Function called onClick 
     * if pictureIndex (on state) = number of pictures - 1 => change pictureIndex in 0 / else + 1
     */
    function next() {
        if (pictureIndex === allPictures.length - 1) {
            const index = 0
            setPictureIndex(index)

        } else {
            const index = pictureIndex + 1
            setPictureIndex(index)
        }
    }

    /**
    * Function called onClick 
    * if pictureIndex (on state) = 0 => change pictureIndex in number of picture -1 / else - 1
    */
    function previous() {
        if (pictureIndex === 0) {
            const index = allPictures.length - 1
            setPictureIndex(index)
        } else {
            const index = pictureIndex - 1
            setPictureIndex(index)
        }
    }

    return (
        <div className='container-picture'>
            {/* Est ce que allPictures est chargé ? si oui, est ce qu'il y a plus d'1 image? si oui met l'image de la flèche suivant */}
            {allPictures ? (allPictures.length > 1 ? (<img src="../arrow-next.png" alt="flèche suivant" className='arrow-next' onClick={next} />) : (null)) : (<span>'chargement'</span>)}

            {/* Est ce que allPictures est chargé? si oui affiche l'image dont l'index est pictureIndex (dans le state) = change à chaque clic sur les flèches */}
            {allPictures ? <img src={allPictures[pictureIndex]} alt='img' className='picture' /> : <span>'chargement'</span>}

            {allPictures && <span className='index'>{pictureIndex + 1} / {allPictures?.length}</span>}
            {/* Est ce que allPictures est chargé ? si oui, est ce qu'il y a plus d'1 image? si oui met l'image de la flèche précédent */}
            {allPictures ? (allPictures.length > 1 ? (<img src="../arrow-prev.png" alt="flèche précédent" className='arrow-prev' onClick={previous} />) : (null)) : (<span>'chargement'</span>)}

        </div>
    )

};

export default CoverPicture;