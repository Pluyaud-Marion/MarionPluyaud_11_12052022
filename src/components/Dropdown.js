import React, { useState } from 'react';

/**
 * component Dropdown with title and contentParaph of contentList
 * @param {string} titleDropdown - props of component parent Lodging - title of dropdown
 * @param {string} contentParaph  - props of component parent Lodging - content of dropdown
 * @param {object} contentList - props of component parent Lodging - content of dropdown with list
 * @returns {JSX} - React component
 */
const Dropdown = ({ titleDropdown, contentParaph, contentList }) => {
    /**
     * @constant show = false / update in state with setShow
     * @type {boolean}
     */
    const [show, setShow] = useState(false)

    /**
     * Function call onClick
     * onClick if show in state is false -> update to true // and if show in state is true -> update to false
     */
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

            </div>
        </div>
    );
};

export default Dropdown;
