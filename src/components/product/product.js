import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import "./product.scss";

function Product(props) {

    const [productInfo, setProductInfo] = useState([]);
    const url = 'https://fakestoreapi.com/products/' + props.id;

    const handlePopup = () => {
        props.handlePopup(props.id);
    }

    const getProducts = async () => {
        const resp = await axios.get(url);
        setProductInfo(resp.data);
    }

    useEffect(() => {
        getProducts()
    });

    return (
        <div className="ProductBlock">
            {props.category === "none" ?
                <div
                    className="ImageBlock"
                    onClick={() => handlePopup()}>
                    <img
                        src={productInfo.image}
                        alt=""
                        className="Image" />
                    <div className="HoverText">
                        <p>
                            Quick View
                        </p>
                    </div>
                </div>
                :
                <div className="ImageBlockWithoutHover">
                    <Link to={{
                        pathname: "/details",
                        productProps: {
                            id: props.id
                        }
                    }}>
                        <img
                            src={productInfo.image}
                            alt=""
                            className="Image" />
                    </Link>
                </div>
            }
            <div>
                <p className="Title">
                    {productInfo.title}
                </p>
                <p className="Price">
                    {productInfo.price}{'$'}
                </p>
            </div>
        </div>
    );
}

export default Product;
