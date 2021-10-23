import { useState, useEffect } from 'react';

const axios = require("axios");

function ProductDetails(props) {

    const [productInfo, setProductInfo] = useState([]);
    const [inputValue, setInputValue] = useState(1);
    const id = props.location.productProps.id;
    const url = 'https://fakestoreapi.com/products/' + id;

    const getProducts = async () => {
        const resp = await axios.get(url);
        setProductInfo(resp.data);
    }

    const AddToCart = () => {
    }

    const limitNum = (e) => {
        if (e.target.value === "") {
            setInputValue("");
        }
        else if (e.target.value > 5) {
            setInputValue(5);
            alert("You can't buy more than 5 items")
        }
        else if (e.target.value < 1) {
            setInputValue(1);
            alert("You can't buy less than 1 item")
        }
        else {
            setInputValue(e.target.value);
        }
    }

    useEffect(() => {
        getProducts()
    });

    return (
        <div className="Container">
            <div className="Info">
                <div className="ImgBlock">
                    <img
                        src={productInfo.image}
                        className="QuickImg"
                        alt="" />
                    <div className="Paragraphs">
                        <h4>
                            Product description
                        </h4>
                        {productInfo.description}
                    </div>
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
                                value={inputValue}
                                className="Quantity"
                                onChange={limitNum} />
                        </label>
                    </div>
                    <button
                        className="AddToCart"
                        onClick={AddToCart}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
