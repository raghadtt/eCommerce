import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';

import Poster from '../components/poster';
import Product from '../components/product';
import Popup from '../components/popup';
import imagePoster1 from '../assets/images/1.jpg';
import imagePoster2 from '../assets/images/2.jpg';
import imagePoster3 from '../assets/images/3.jpg';
import "./styles/pages.scss";

function Home() {

    const [products, setProducts] = useState([]);
    const [quickViewFlag, setQuickViewFlag] = useState(false);
    const [productId, setProductId] = useState("");

    const url = "https://fakestoreapi.com/products?limit=6";

    const getProducts = () => {
        axios.get(url)
            .then((response) => {
                const data = response.data;
                setProducts(data);
            })
    }

    const handlePopup = (id) => {
        setQuickViewFlag(!quickViewFlag);
        setProductId(id);
    }

    const showProducts = () => {
        return products.map((item) => {
            return (
                <Product
                    name={item.title}
                    price={item.price}
                    photo={item.image}
                    id={item.id}
                    handlePopup={handlePopup}
                    category={"none"}
                />
            );
        });
    }

    const showPopup = () => {
        return <Popup toggle={handlePopup} id={productId} />
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="Container">
            <Poster />
            <div className="Images">
                <img
                    alt=""
                    src={imagePoster1} />
                <img
                    alt=""
                    src={imagePoster2} />
                <img
                    alt=""
                    src={imagePoster3} />
            </div>
            <h3>
                PRODUCTS
            </h3>
            <div className="Product">
                {products && showProducts()}
                {quickViewFlag && showPopup()}
            </div>
            <div className="ShopAllButtonContainer">
                <Link
                    to="/shoppingAll"
                    className="ShopAllButton">
                    <span>
                        Shop All
                    </span>
                </Link>
                <Link
                    to="/shoppingAll"
                    className="ArrowButton">
                    <span>
                        {">"}
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Home;
