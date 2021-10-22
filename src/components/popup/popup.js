import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './popup.scss'

function Popup(props) {

    const [productInfo, setProductInfo] = useState([]);

    const handleClickOnClose = () => {
        props.toggle();
    }

    const limitNum = (e) => {
        if (e.target.value > 5) {
            e.target.value = 5;
            alert("You can't buy more than 5 items")
        }
        else if (e.target.value < 1) {
            e.target.value = 1
            alert("You can't buy less than 1 item")
        }
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + props.id)
            .then((response) => {
                const data = response.data;
                setProductInfo(data);
            })
    });

    return (
        <div class="Modal">
            <div class="Modal_content">
                <span
                    onClick={handleClickOnClose}>
                    <FaTimes className="Close" />
                </span>
                <div className="Info">
                    <div className="ImgBlock">
                        <img
                            src={productInfo.image}
                            className="QuickImg"
                            alt="" />
                        <button className="AddToCart">
                            Add to cart
                        </button>
                    </div>
                    <div>
                        <h2>
                            {productInfo.title}
                        </h2>
                        <span className="QuickPrice">
                            {productInfo.price}{"$"}
                        </span>
                        {
                            (productInfo.category === "men's clothing" || productInfo.category === "women's clothing")
                            && <div className="Size">
                                <label>
                                    Pick your Size
                                    <br />
                                    <select>
                                        <option value="small">
                                            Small
                                        </option>
                                        <option value="medium">
                                            Medium
                                        </option>
                                        <option value="large">
                                            Large
                                        </option>
                                    </select>
                                </label>
                            </div>
                        }
                        <div className="QuantLabel">
                            <label>
                                Quantity
                                <br />
                                <input
                                    type="number"
                                    min="1"
                                    max="5"
                                    className="Quantity"
                                    onChange={limitNum} />
                            </label>
                        </div>
                        <Link>
                            <span>
                                See more details
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Popup;