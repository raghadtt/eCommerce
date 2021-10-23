import { useState, useEffect } from 'react';

import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './popup.scss'

function Popup(props) {

    const [productInfo, setProductInfo] = useState([]);
    const [quantity, setQuantity] = useState(1);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    const url = 'https://fakestoreapi.com/products/' + props.id;

    const handleClickOnClose = () => {
        props.toggle();
    }

    const limitNum = (e) => {
        if (e.target.value === "") {
            setQuantity("");
        }
        else if (e.target.value > 5) {
            setQuantity(5);
            alert("You can't buy more than 5 items")
        }
        else if (e.target.value < 1) {
            setQuantity(1);
            alert("You can't buy less than 1 item")
        }
        else {
            setQuantity(e.target.value);
        }
    }

    const AddToCart = () => {
    }

    const getProducts = async () => {
        const resp = await axios.get(url);
        setProductInfo(resp.data);
    }

    useEffect(() => {
        getProducts()
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
                        <button
                            className="AddToCart"
                            onClick={AddToCart}
                        >
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
                                    value={quantity}
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