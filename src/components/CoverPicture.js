import React, { useState } from 'react';

const CoverPicture = ({ allPictures }) => {

    const [pictureIndex, setPictureIndex] = useState(0);

    // si pictureIndex (dans le state) est égal au nombre d'images - 1 => change pictureIndex en 0 / sinon ajoute 1
    function next() {
        if (pictureIndex === allPictures.length - 1) {
            const index = 0
            setPictureIndex(index)

        } else {
            const index = pictureIndex + 1
            setPictureIndex(index)
        }
    }

    // si pictureIndex (dans le state) est égal à 0 => change pictureIndex en le nombre d'images - 1 / sinon retire 1
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