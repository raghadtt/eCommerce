import { useState, useEffect } from 'react';

import Product from '../components/product';
import "./styles/pages.scss";

const axios = require("axios");

function Jewelery() {

    const [products, setProducts] = useState([]);
    const url = "https://fakestoreapi.com/products/category/jewelery";

    const getProducts = async () => {
        const resp = await axios.get(url);
        setProducts(resp.data);
    }

    const showProducts = () => {
        return products.map((item) => {
            return (
                <Product
                    id={item.id}
                    category={"jewelery"}
                />
            );
        });
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="Container">
            <h3>
                Jewelery
            </h3>
            <div className="Product">
                {products && showProducts()}
            </div>
        </div>
    );
}

export default Jewelery;
