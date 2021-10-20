import React, { useState } from 'react';

import { FaTimes } from 'react-icons/fa';

import './popup.scss'


function Popup(props) {

    const handleClickOnClose = () => {
        props.toggle();
    }

    return (
        <div class="Modal">
            <div class="Modal_content">
                <span
                    onClick={handleClickOnClose}>
                    <FaTimes className="Close" />
                </span>
                <span>
                    {props.title}
                </span>
            </div>
        </div >
    );
}

export default Popup;