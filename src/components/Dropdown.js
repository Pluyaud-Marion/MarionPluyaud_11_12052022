import React from 'react';

const Dropdown = ({ titleDropdown, propsDescription, propsEquipment }) => {
    //const title = ["description", "equipements"]

    function toogle(e) {
        const description = document.getElementById("description")
        const equipment = document.getElementById("equipments")
        //const chevron = document.querySelector(".chevron")

        console.log(e.target);

        if (e.target.id === "open") {
            description.style.display = "block"
            e.target.setAttribute("id", "close")
        } else if (e.target.id === "close") {
            description.style.display = "none"
            e.target.setAttribute("id", "open")
        }

    }


    return (
        <div className='Dropdown'>
            <div className='container-title' id="open" onClick={(e) => toogle(e)}>
                <span>{titleDropdown}</span>
                <img className='chevron' src="../arrow-up.png" alt="arrow" />
            </div>
            <div className='test'>
                {
                    titleDropdown === "Description" ?
                        (

                            <p key={"content"} className='content' id='description'>{propsDescription}</p>
                        ) : (
                            <ul key={"list"} className='content' id='equipments'>
                                {
                                    propsEquipment?.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))
                                }
                            </ul>)
                }

                {/* title.map((el, index) => (el === "description" ?
                        (

                            <p key={index} className='content'>{propsDescription}</p>
                        ) : (
                            <ul key={"list"} className='content'>
                                {
                                    propsEquipment?.map((list, index) => (
                                        <li key={index}>{list}</li>
                                    ))
                                }
                            </ul>))
                    ) */}

            </div>
        </div>
    );
};

export default Dropdown;