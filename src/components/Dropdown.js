import React, { useState } from 'react';


const Dropdown = ({ titleDropdown, contentParaph, contentList }) => {
    const [show, setShow] = useState(false)

    function toogle() {
        show === false ? setShow(true) : setShow(false)
    }

    return (
        <div className='Dropdown'>
            <div className='container-title' onClick={toogle}>
                <span>{titleDropdown}</span>
                <img className={show ? 'chevron-up' : 'chevron'} src="../arrow-down.png" alt="arrow" />
            </div>
            <div>
                {
                    contentList === undefined ?
                        (

                            <p key={"content"} className={show ? 'content-show' : 'content'} >{contentParaph}</p>
                        ) : (
                            <ul key={"list"} className={show ? 'content-show' : 'content'} >
                                {
                                    contentList?.map((list, index) => (
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
