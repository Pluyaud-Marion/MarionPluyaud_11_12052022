import React, { useState } from 'react';

const CoverPicture = ({ allPictures }) => {
    // return (
    //     <div className='container-picture'>
    //         <img src="../arrow-next.png" alt="flèche suivant" className='arrow-next' />
    //         <img src="../arrow-prev.png" alt="flèche précédent" className='arrow-prev' />
    //         {
    //             picture?.map((el, index) => (
    //                 <img src={el} alt={"photo de l'appartement " + index} key={index} className='picture' />

    //             ))
    //         }
    //     </div>
    // );
    const [pictureIndex, setPictureIndex] = useState(0);

    function next() {
        if (pictureIndex === allPictures.length - 1) {
            const index = 0
            setPictureIndex(index)

        } else {
            const index = pictureIndex + 1
            setPictureIndex(index)
        }
    }

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
            <img src="../arrow-next.png" alt="flèche suivant" className='arrow-next' onClick={next} />
            {allPictures ? <img src={allPictures[pictureIndex]} alt='img' className='picture' /> : <span>'chargement'</span>}
            {/* <img src={allPictures[pictureIndex]} alt='img' className='picture' /> */}
            <img src="../arrow-prev.png" alt="flèche précédent" className='arrow-prev' onClick={previous} />
        </div>
    )
};

export default CoverPicture;