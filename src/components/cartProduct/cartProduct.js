import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import axios from "axios";

import "./cartProduct.scss";

function CartProduct(props) {

    const [productInfo, setProductInfo] = useState([]);
    const url = 'https://fakestoreapi.com/products/' + props.id;

    const getTotal = () => {
        props.total(props.quantity, productInfo.price);
    }

    const getProducts = async () => {
        const resp = await axios.get(url);
        setProductInfo(resp.data);
    }

    useEffect(() => {
        getProducts()
    });

    return (
        <div className="CartProductBlock">
            <div className="CartImageBlockWithoutHover">
                <img
                    src={productInfo.image}
                    alt=""
                    className="CartImage" />
            </div>
            <div className="TitleBlock">
                <Link
                    to={{
                        pathname: "/details",
                        productProps: {
                            id: props.id
                        }
                    }}
                    className="CartTitle"
                >
                    <p>
                        {productInfo.title}
                    </p>
                </Link>
            </div>
            <div className="Total">
                <p className="Amount">
                    {props.quantity} item
                    <br />
                    {productInfo.price}{'$'}
                </p>
            </div>
            {getTotal()}
        </div>
    );
}

export default CartProduct;
