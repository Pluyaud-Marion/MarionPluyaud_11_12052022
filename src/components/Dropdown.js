import React from 'react';

const Dropdown = ({ titleDropdown, propsDescription, propsEquipment }) => {

    function toogle(e) {
        const description = document.getElementById("description")
        const equipment = document.getElementById("equipments")
        const chevronDescription = document.getElementById("chevron Description")
        const chevronEquipment = document.getElementById("chevron Equipements")


        if (e.target.id === "open Description") {
            description.style.display = "block"
            chevronDescription.style.transform = "rotate(180deg)"
            e.target.setAttribute("id", "close Description")
        } else if (e.target.id === "close Description") {
            description.style.display = "none"
            chevronDescription.style.transform = "rotate(360deg)"
            e.target.setAttribute("id", "open Description")
        }

        if (e.target.id === "open Equipements") {
            equipment.style.display = "block"
            chevronEquipment.style.transform = "rotate(180deg)"
            e.target.setAttribute("id", "close Equipements")
        } else if (e.target.id === "close Equipements") {
            equipment.style.display = "none"
            chevronEquipment.style.transform = "rotate(360deg)"
            e.target.setAttribute("id", "open Equipements")
        }
    }

    return (
        <div className='Dropdown'>
            <div className='container-title' id={"open " + titleDropdown} onClick={toogle}>
                <span>{titleDropdown}</span>
                <img className='chevron' id={"chevron " + titleDropdown} src="../arrow-up.png" alt="arrow" />
            </div>
            <div>
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