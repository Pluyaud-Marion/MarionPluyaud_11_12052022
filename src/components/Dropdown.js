import React from 'react';

const Dropdown = ({ titleDropdown, propsDescription, propsEquipment }) => {
    const title = ["Description", "Equipements"]

    return (
        <div className='Dropdown'>
            <div className='container-title'>
                <span>{titleDropdown}</span>
                {/* {
                    title.map((el, index) => (el === "Description" ?
                        <p key={index}>{title[0]}</p>
                        : <p key={index}>{title[1]}</p>)
                    )} */}
                <img src="../arrow-up.png" alt="arrow" />
            </div>
            <div>
                {
                    title.map((el, index) => (el === "Description" ?
                        (
                            <p key={index} className='content-description'>{propsDescription}</p>
                        ) : (<ul className='content-equipment'>
                            {
                                propsEquipment?.map((list, index) => (
                                    <li key={index}>{list}</li>
                                ))
                            }
                        </ul>))
                    )
                }
            </div>
        </div>
    );
};

export default Dropdown;