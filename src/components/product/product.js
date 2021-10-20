import { useState } from "react";

import Popup from '../popup';
import "./product.scss";

function Product(props) {

    const handlePopup = () => {
        props.handlePopup(props.name);
    }

    return (
        <div className="ProductBlock">
            <div
                className="ImageBlock"
                onClick={() => handlePopup()}>
                <img
                    src={props.photo}
                    alt=""
                    className="Image" />
                <div className="HoverText">
                    <p>
                        Quick View
                    </p>
                </div>
            </div>
            <div>
                <p className="Title">
                    {props.name}
                </p>
                <p className="Price">
                    {props.price}{'$'}
                </p>
            </div>
        </div>
    );
}

export default Product;
